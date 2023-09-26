import type { Language } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ILanguage = {
  language: Language;
  set: (value: Language) => void;
  get: () => Language | undefined;
  //   edit: (id: number, value: number) => void;
  //   delete: (id: number) => void;
};

export const useCurrentLanguageStore = create(
  persist<ILanguage>(
    (set, get) => ({
      language: {
        id: 0,
        name: "Hindi",
      },
      set: (language) => set({ language }),
      get: () => get().language,
    }),
    {
      name: "lex.lang",
    },
  ),
);
