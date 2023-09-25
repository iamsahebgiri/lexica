import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import type { IQuestion } from "@/pages/lessons";
import Option from "./option";

interface QuestionProps {
  question: IQuestion;
  handleNextQuestion: (correct: boolean) => void;
}

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function Question({
  question,
  handleNextQuestion,
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    return selectedOption === question.correctOption;
  };

  return (
    <>
      <div className="relative flex flex-1 items-center justify-center bg-slate-50">
        <AnimatePresence>
          <motion.div
            key={question.text}
            initial={{ left: 700, opacity: 0 }}
            animate={{ left: "50%", opacity: 1 }}
            exit={{ left: 600, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute left-1/2 top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 space-y-8 px-6"
          >
            <h1 className="text-2xl font-bold text-gray-700">
              {question.text}
            </h1>
            <div className="flex">
              <div className="mx-auto rounded-xl border-2 p-3 px-8">
                दादा उनसे धीरे चलते हैं ।
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {question.options.map((option, index) => (
                <Option
                  key={index}
                  selected={option === selectedOption}
                  onClick={() => handleOptionSelect(option)}
                  className="font-normal lowercase"
                >
                  {option}
                </Option>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <footer className="py-4 sm:border-t-2 sm:py-8">
        <div className="mx-auto flex max-w-4xl flex-col-reverse justify-between gap-4 px-4 sm:flex-row sm:items-center">
          <Button
            onClick={() => handleNextQuestion(checkAnswer())}
            variant="outline"
          >
            Skip
          </Button>
          <Button onClick={() => handleNextQuestion(checkAnswer())}>
            Next
          </Button>
        </div>
      </footer>
    </>
  );
}
