import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/main.layout";
import React from "react";

const letters = [
  {
    letter: "क",
    en: "ka",
    audio: "",
  },
  {
    letter: "ख",
    en: "kha",
    audio: "",
  },
  {
    letter: "ग",
    en: "ga",
    audio: "",
  },
  {
    letter: "घ",
    en: "gha",
    audio: "",
  },
  {
    letter: "च",
    en: "cha",
    audio: "",
  },
  {
    letter: "छ",
    en: "chha",
    audio: "",
  },
];

export default function LettersPage() {
  return (
    <MainLayout>
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold ">Let&apos;s learn Hindi!</h1>
        <p className="text-gray-500">
          Get to know the characters and sounds for Hindi
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {letters.map((letter) => (
          <Button
            key={letter.letter}
            variant="outline"
            className="flex flex-col"
          >
            <span>{letter.letter}</span>
            <span className="text-xs text-gray-400">{letter.en}</span>
          </Button>
        ))}
      </div>
    </MainLayout>
  );
}
