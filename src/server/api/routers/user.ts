import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
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
  getLeaderboard: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany({
      take: 20,
      orderBy: {
        xp: "desc",
      },
    });
    return users;
  }),
  resetLanguageProgress: protectedProcedure
    .input(
      z.object({
        languageId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { languageId } = input;
      await ctx.db.response.deleteMany({
        where: {
          languageId,
          userId: ctx.session.user.id,
        },
      });
    }),
  getUserProgress: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const languages = await ctx.db.language.findMany();

      return Promise.all(
        languages.map(async (language) => {
          const chapterIds = await ctx.db.chapter.findMany({
            where: {
              languageId: language.id,
            },
            select: {
              id: true,
              quizzes: true,
            },
          });

          const totalQuizOfLanguage = await ctx.db.quiz.count({
            where: {
              chapterId: {
                in: chapterIds.map((cId) => cId.id),
              },
            },
          });

          const quizIds: number[] = [];
          chapterIds.map((cId) =>
            cId.quizzes.map((q) => {
              quizIds.push(q.id);
            }),
          );

          const responses = await ctx.db.response.findMany({
            where: {
              userId: input.userId,
              quizId: {
                in: quizIds,
              },
            },
            // distinct: ["quizId"],
          });

          const responseSet = new Set(
            responses.map((response) => {
              return response.quizId;
            }),
          );

          return {
            ...language,
            totalQuizCount: totalQuizOfLanguage,
            responseCount: responseSet.size,
          };
        }),
      );
    }),
});
