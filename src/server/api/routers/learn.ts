import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const learnRouter = createTRPCRouter({
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.user.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getLanguages: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.language.findMany();
  }),
  getChapters: publicProcedure
    .input(
      z.object({
        languageId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { languageId } = input;
      return ctx.db.chapter.findMany({
        where: {
          languageId,
        },
      });
    }),
  getQuizzes: protectedProcedure
    .input(
      z.object({
        chapterId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { chapterId } = input;
      const quizzes = await ctx.db.quiz.findMany({
        where: {
          chapterId,
        },
      });

      const responses = await ctx.db.response.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });

      return quizzes.map((quiz) => ({
        ...quiz,
        isCompleted: responses.some((response) => response.quizId === quiz.id),
      }));
    }),
  getQuestions: protectedProcedure
    .input(
      z.object({
        quizId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { quizId } = input;
      return ctx.db.question.findMany({
        where: {
          quizId,
        },
        include: {
          options: {},
        },
      });
    }),
  submitResponse: protectedProcedure
    .input(
      z.object({
        quizId: z.number(),
        languageId: z.number(),
        score: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { quizId, languageId, score } = input;
      return ctx.db.response.create({
        data: {
          languageId,
          quizId,
          score,
          userId: ctx.session.user.id,
        },
      });
    }),
});
