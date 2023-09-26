import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { api } from "@/utils/api";
import { useCurrentLanguageStore } from "@/store";
import { flagMaps } from "@/utils/flag-maps";

export default function ChangeLanguage() {
  const { set, language } = useCurrentLanguageStore();
  const {
    data: languages,
    isLoading,
    error,
  } = api.learn.getLanguages.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Sheet>
      <div className="flex flex-col items-center rounded-2xl border-2 p-4 py-7 text-center">
        {/* @ts-ignore */}
        <Icon icon={flagMaps[language.name]} className="h-12 w-12" />
        <h3 className="font-bold">{language.name}</h3>
        <p className="mb-6 text-gray-500">Language</p>
        <SheetTrigger asChild>
          <Button>Change language</Button>
        </SheetTrigger>
      </div>
      <SheetContent className="w-screen">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            Change language
          </SheetTitle>
        </SheetHeader>
        <div className="my-3">
          <div className="divide-y-2 rounded-2xl border-2">
            {languages.map((language) => (
              <div
                key={language.id}
                className="flex items-center justify-between gap-4 p-2"
              >
                <div className="flex items-center gap-3">
                  {/* @ts-ignore */}
                  <Icon icon={flagMaps[language.name]} className="h-16 w-16" />
                  <div className="font-bold">{language.name}</div>
                </div>
                <div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      set(language);
                    }}
                  >
                    Select
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
