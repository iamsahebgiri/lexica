import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = {
  language: number;
  set: (value: number) => void;
  get: (id: number) => number | undefined;
  //   edit: (id: number, value: number) => void;
  //   delete: (id: number) => void;
};

export const useCurrentLanguageStore = create(
  persist<Language>(
    (set, get) => ({
      language: 6,
      set: (language: number) => set({ language }),
      get: () => get().language,
    }),
    {
      name: "lex.lang",
    },
  ),
);
