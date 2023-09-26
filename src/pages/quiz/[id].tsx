import Question from "@/components/question";
import { Button } from "@/components/ui/button";
import { useCurrentLanguageStore } from "@/store";
import { api } from "@/utils/api";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

function QuizPage() {
  const { id: languageId } = useCurrentLanguageStore((state) => state.language);
  const router = useRouter();
  const id = router.query.id as string;

  const {
    data: questions,
    isLoading,
    error,
  } = api.learn.getQuestions.useQuery({
    quizId: Number(id),
  });
  const submitResponse = api.learn.submitResponse.useMutation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleNextQuestion = (isCorrect: boolean) => {
    alert(isCorrect)
    if (isCorrect) {
      setScore((prevScore) => {
        if (currentQuestionIndex !== undefined) {
          const q = questions[currentQuestionIndex];
          if (q) {
            const score = q.difficulty;
            return prevScore + score;
          }
        }
        return prevScore;
      });
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex === questions.length - 1) {
      console.log("Submitting...");
      submitResponse.mutate({
        score,
        languageId,
        quizId: Number(id),
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden">
      <Head>
        <title>Quiz</title>
      </Head>
      <header className="flex h-24 items-center">
        <div className="mx-auto flex w-full max-w-4xl items-center gap-4 px-4">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-emerald-500 p-1 transition-all"
              style={{
                width: `${Math.floor(
                  (currentQuestionIndex / questions.length) * 100,
                )}%`,
              }}
            >
              <div className="h-[3px] rounded-full bg-emerald-200/30" />
            </div>
          </div>
          <div className="font-bold">
            {currentQuestion?.difficulty} <span>XP</span>
          </div>
        </div>
      </header>

      {currentQuestionIndex < questions.length ? (
        <Question
          question={currentQuestion}
          handleNextQuestion={handleNextQuestion}
          lastQuestion={currentQuestionIndex === questions.length - 1}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{score}</h2>
            <h3 className="font-bold">Score</h3>
            <p className="text-gray-500">End of the quiz!</p>
          </div>
          <div className="mt-10">
            <Button
              disabled={submitResponse.isLoading}
              onClick={() => router.push("/learn")}
            >
              Go back home
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}

QuizPage.auth = true;

export default QuizPage;
