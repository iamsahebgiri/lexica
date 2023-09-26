import { userRouter } from "@/server/api/routers/user";
import { createTRPCRouter } from "@/server/api/trpc";
import { learnRouter } from "@/server/api/routers/learn";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  learn: learnRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
