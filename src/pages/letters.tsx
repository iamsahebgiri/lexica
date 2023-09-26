import { Button } from "@/components/ui/button";
import useTextToSpeech from "@/hooks/use-tts";
import MainLayout from "@/layouts/main.layout";
import React from "react";

const hindiLetters = [
  { hindi: "अ", english: "a" },
  { hindi: "आ", english: "aa" },
  { hindi: "इ", english: "i" },
  { hindi: "ई", english: "ii" },
  { hindi: "उ", english: "u" },
  { hindi: "ऊ", english: "uu" },
  { hindi: "ए", english: "e" },
  { hindi: "ऐ", english: "ai" },
  { hindi: "ओ", english: "o" },
  { hindi: "औ", english: "au" },
  { hindi: "ऋ", english: "ṛi" },
  { hindi: "ॠ", english: "ṝi" },
  { hindi: "अं", english: "ṅ" },
  { hindi: "अः", english: "ḥ" },
  { hindi: "क", english: "ka" },
  { hindi: "ख", english: "kha" },
  { hindi: "ग", english: "ga" },
  { hindi: "घ", english: "gha" },
  { hindi: "ङ", english: "ṅa" },
  { hindi: "च", english: "cha" },
  { hindi: "छ", english: "chha" },
  { hindi: "ज", english: "ja" },
  { hindi: "झ", english: "jha" },
  { hindi: "ञ", english: "ña" },
  { hindi: "ट", english: "ṭa" },
  { hindi: "ठ", english: "ṭha" },
  { hindi: "ड", english: "ḍa" },
  { hindi: "ढ", english: "ḍha" },
  { hindi: "ण", english: "ṇa" },
  { hindi: "त", english: "ta" },
  { hindi: "थ", english: "tha" },
  { hindi: "द", english: "da" },
  { hindi: "ध", english: "dha" },
  { hindi: "न", english: "na" },
  { hindi: "प", english: "pa" },
  { hindi: "फ", english: "pha" },
  { hindi: "ब", english: "ba" },
  { hindi: "भ", english: "bha" },
  { hindi: "म", english: "ma" },
  { hindi: "य", english: "ya" },
  { hindi: "र", english: "ra" },
  { hindi: "ल", english: "la" },
  { hindi: "व", english: "va" },
  { hindi: "श", english: "śa" },
  { hindi: "ष", english: "ṣa" },
  { hindi: "स", english: "sa" },
  { hindi: "ह", english: "ha" },
];

export default function LettersPage() {
  const { speak } = useTextToSpeech();
  return (
    <MainLayout>
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold ">Let&apos;s learn Hindi!</h1>
        <p className="text-gray-500">
          Get to know the characters and sounds for Hindi
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {hindiLetters.map((letter) => (
          <Button
            key={letter.hindi}
            variant="outline"
            className="flex flex-col"
            onClick={() => speak(letter.hindi)}
          >
            <span>{letter.hindi}</span>
            <span className="text-xs text-gray-400">{letter.english}</span>
          </Button>
        ))}
      </div>
    </MainLayout>
  );
}
