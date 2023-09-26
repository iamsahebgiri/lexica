import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import Option from "./option";
import { shuffleWords } from "@/utils/strings";
// import WordReorder from "./word-reorder";

interface QuestionProps {
  question: any;
  handleNextQuestion: (correct: boolean) => void;
  lastQuestion: boolean;
}

const WordReorder = ({ words, setWords }: any) => {
  const onDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const onDrop = (e: React.DragEvent, newIndex: number) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("index"));
    const newWords = [...words];
    const [draggedWord] = newWords.splice(draggedIndex, 1);
    if (draggedWord) newWords.splice(newIndex, 0, draggedWord);
    setWords(newWords);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="border-b-2 border-t-2 pt-4">
      <div
        className="flex flex-wrap items-center justify-center gap-4"
        style={{ display: "flex", marginBottom: "10px" }}
      >
        {words.map((word: string, index: number) => (
          <Button
            key={index}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={onDragOver}
            style={{
              cursor: "move",
            }}
            variant="outline"
            size="sm"
          >
            {word}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default function Question({
  question,
  handleNextQuestion,
  lastQuestion,
}: QuestionProps) {
  const [words, setWords] = useState([]);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    // console.log(option)
  };

  useEffect(() => {
    // shuffleWords(question.options.map((option: any) => option.text)),
    setWords(question.options.map((option: any) => option.text));
  }, [question]);

  const checkAnswer = () => {
    if (question.type === "REORDER_WORDS") {
      console.log(
        words.join(" ").toLowerCase() === question.answer[0].toLowerCase(),
      );
      return words.join(" ").toLowerCase() === question.answer[0].toLowerCase();
    } else if (question.type === "MULTIPLE_CHOICE") {
      const correctOption = question.options[question.answer[0]];
      return correctOption.id === selectedOption;
    }
    return false;
  };

  return (
    <>
      <div className="relative flex flex-1 items-center justify-center">
        <AnimatePresence>
          <motion.div
            key={question.text}
            initial={{ left: 700, opacity: 0 }}
            animate={{ left: "50%", opacity: 1 }}
            exit={{ left: 600, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute left-1/2 top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 space-y-8 px-6"
          >
            {question.type === "REORDER_WORDS" && (
              <>
                <h1 className="text-2xl font-bold text-gray-700">
                  Write this in english
                </h1>
                <div className="flex">
                  <div className="mx-auto rounded-xl border-2 p-3 px-8">
                    {question.text}
                  </div>
                </div>
                <WordReorder words={words} setWords={setWords} />
              </>
            )}
            {question.type === "MULTIPLE_CHOICE" && (
              <>
                <h1 className="text-2xl font-bold text-gray-700">
                  Select the meaning of the word
                </h1>

                <div className="flex">
                  <div className="mx-auto rounded-xl border-2 p-3 px-8">
                    {question.text}
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  {question.options.map((option: any, index: number) => (
                    <Option
                      key={index}
                      selected={option.id === selectedOption}
                      onClick={() => handleOptionSelect(option.id)}
                      className="font-normal lowercase"
                    >
                      {option.text}
                    </Option>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <footer className="py-4 sm:border-t-2 sm:py-8">
        <div className="mx-auto flex max-w-4xl flex-col-reverse justify-between gap-4 px-4 sm:flex-row sm:items-center">
          {/* <Button
            onClick={() => handleNextQuestion(checkAnswer())}
            variant="outline"
          >
            Skip
          </Button> */}
          <div></div>
          <Button onClick={() => handleNextQuestion(checkAnswer())}>
            {lastQuestion ? "Submit" : "Next"}
          </Button>
        </div>
      </footer>
    </>
  );
}
