import { PrismaClient } from "@prisma/client";
import { hindiChapters } from "./data";

const prisma = new PrismaClient();

async function main() {
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.chapter.deleteMany();
  await prisma.language.deleteMany();

  const hindi = await prisma.language.create({
    data: {
      name: "Hindi",
    },
  });

  hindiChapters.map(async (chapter, index) => {
    const ch = await prisma.chapter.create({
      data: {
        name: `Unit ${index + 1}`,
        description: chapter.name,
        languageId: hindi.id,
      },
    });
    const questions = chapter.questions;
    const quiz = await prisma.quiz.create({
      data: {
        name: `Quiz ${index + 1}`,
        chapterId: ch.id,
      },
    });
    questions.map(async (q) => {
      await prisma.question.create({
        data: {
          answer: q.answer,
          difficulty: q.difficulty,
          text: q.text,
          type: q.type,
          quizId: quiz.id,
          options: {
            create: q.options.map((option) => ({ text: option })),
          },
        },
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
