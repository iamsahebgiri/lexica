import { PrismaClient } from "@prisma/client";
import { hindiChapters, frenchChapters } from "./data";

const prisma = new PrismaClient();

async function main() {
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.response.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.chapter.deleteMany();
  await prisma.language.deleteMany();

  console.log("Deleted all data...");

  const languages = [
    {
      lang: "Hindi",
      chapters: hindiChapters,
    },
    {
      lang: "French",
      chapters: frenchChapters,
    },
  ];

  languages.map(async (language) => {
    const lang = await prisma.language.create({
      data: {
        name: language.lang,
      },
    });

    language.chapters.map(async (chapter, index) => {
      const ch = await prisma.chapter.create({
        data: {
          name: `Unit ${index + 1}`,
          description: chapter.name,
          languageId: lang.id,
        },
      });
      const quizzes = chapter.quiz;
      quizzes.map(async (q) => {
        const questions = q.questions;
        const quiz = await prisma.quiz.create({
          data: {
            name: q.name,
            chapterId: ch.id,
          },
        });
        questions.map(async (question) => {
          await prisma.question.create({
            data: {
              answer: question.answer,
              difficulty: question.difficulty,
              text: question.text,
              type: question.type,
              quizId: quiz.id,
              options: {
                create: question.options.map((option) => ({ text: option })),
              },
            },
          });
        });
      });
    });
  });

  console.log("OK");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
