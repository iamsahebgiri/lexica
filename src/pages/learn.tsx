import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/main.layout";
import { cn } from "@/lib/utils";
import { useCurrentLanguageStore } from "@/store";
import { api } from "@/utils/api";
import { getColor } from "@/utils/color";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface UnitProps {
  title: string;
  subtitle: string;
  bg: string;
}

const Unit = ({ title, subtitle, bg }: UnitProps) => {
  return (
    <div className={cn("rounded-xl px-6 py-5", bg)}>
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <p className="text-base font-medium tracking-wide text-white">
        {subtitle}
      </p>
    </div>
  );
};

function Lesson({ chapterId, color }: { chapterId: number; color: string }) {
  const router = useRouter();
  const {
    data: quizzes,
    isLoading,
    error,
  } = api.learn.getQuizzes.useQuery({ chapterId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div title="Learn new language">{error.message}</div>;
  }

  return (
    <div className="mx-auto flex max-w-xs flex-col items-center gap-12">
      {quizzes.slice(2).map((quiz) => (
        <Button
          key={quiz.id}
          variant={quiz.isCompleted ? (color as any) : "gray"}
          size="icon"
          onClick={() => router.push(`/quiz/${quiz.id}`)}
        >
          {quiz.isCompleted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M9.765 3.205a.75.75 0 0 1 .03 1.06l-4.25 4.5a.75.75 0 0 1-1.075.015L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.705 1.704l3.72-3.939a.75.75 0 0 1 1.06-.03Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.367 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091L12.224 4.462Z"
              />
            </svg>
          )}
        </Button>
      ))}
      <div className="flex w-full items-center justify-between">
        {quizzes.slice(0, 2).map((quiz) => (
          <Button
            key={quiz.id}
            variant={quiz.isCompleted ? (color as any) : "gray"}
            size="icon"
            onClick={() => router.push(`/quiz/${quiz.id}`)}
          >
            {quiz.isCompleted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M9.765 3.205a.75.75 0 0 1 .03 1.06l-4.25 4.5a.75.75 0 0 1-1.075.015L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.705 1.704l3.72-3.939a.75.75 0 0 1 1.06-.03Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.367 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091L12.224 4.462Z"
                />
              </svg>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}

function LearnPage() {
  const { language } = useCurrentLanguageStore();
  const {
    data: chapters,
    isLoading,
    error,
  } = api.learn.getChapters.useQuery({
    languageId: language.id,
  });

  if (isLoading) {
    return <MainLayout title="Learn new language">Loading...</MainLayout>;
  }

  if (error) {
    return <MainLayout title="Learn new language">{error.message}</MainLayout>;
  }

  return (
    <MainLayout title={"Learn new language"}>
      <div className="space-y-12">
        {chapters.map((chapter) => (
          <Fragment key={chapter.id}>
            <Unit
              title={chapter.name}
              subtitle={chapter.description}
              bg={getColor(chapter.name)?.color ?? "bg-rose-500"}
            />
            <Lesson
              chapterId={chapter.id}
              color={getColor(chapter.name)?.variant ?? "gray"}
            />
          </Fragment>
        ))}
      </div>
    </MainLayout>
  );
}

LearnPage.auth = true;

export default LearnPage;
