import { useCurrentLanguageStore } from "@/store";
import { useEffect, useState } from "react";

const useTextToSpeech = () => {
  const { language } = useCurrentLanguageStore();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      if (availableVoices.length > 0) {
        const voices = availableVoices.filter((voice) =>
          voice.name.includes(language.name),
        );
        if (voices.length > 0) {
          setSelectedVoice(voices[0] ?? null);
        } else {
          setSelectedVoice(availableVoices[0] ?? null);
        }
      }

      console.log("Fetching voices...", availableVoices.length);
    };

    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;

    return () => {
      console.log("unmount");
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = (text: string) => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  const setVoice = (voiceName: string) => {
    const selected = voices.find((voice) => voice.name === voiceName);
    if (selected) {
      setSelectedVoice(selected);
    }
  };

  return { voices, selectedVoice, setVoice, speak };
};

export default useTextToSpeech;
