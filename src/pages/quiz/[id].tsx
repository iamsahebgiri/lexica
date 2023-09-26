import Question from "@/components/question";
import { Button } from "@/components/ui/button";
import { useCurrentLanguageStore } from "@/store";
import { api } from "@/utils/api";
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
  console.log(currentQuestion);
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden">
      <header className="flex h-24 items-center">
        <div className="mx-auto w-full max-w-4xl px-4">
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
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
            <p>Score</p>
            <p>End of the quiz!</p>
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
