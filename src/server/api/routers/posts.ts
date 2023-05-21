import type { User } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import type { Post } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
    });
    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post: Post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return posts.map((post: Post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author || !author.username || !author.firstName || !author.lastName)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author for post not found",
        });

      return {
        post,
        author: {
          ...author,
          username: author.username,
          firstName: author.firstName,
          lastName: author.lastName,
        },
      };
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(140),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;
      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });
      return post;
    }),
});
