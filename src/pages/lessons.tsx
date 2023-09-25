import Question from "@/components/question";
import React, { useState } from "react";

const questions = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: "Paris",
    score: 1,
  },
  {
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: "4",
    score: 1,
  },
];

export type IQuestion = (typeof questions)[number];

export default function LessonPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(
        (prevScore) =>
          prevScore +
          questions[currentQuestionIndex].score,
      );
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden">
      <header className="flex h-24 items-center">
        <div className="mx-auto w-full max-w-4xl px-4">
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-emerald-500 p-1"
              style={{
                width: "50%",
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
        />
      ) : (
        <div>
          <p>End of the quiz!</p>
          <p>Your score is: {score}</p>
        </div>
      )}
    </main>
  );
}
