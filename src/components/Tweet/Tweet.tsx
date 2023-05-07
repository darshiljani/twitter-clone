import type { Post } from "@prisma/client";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";

function Tweet({ post }: { post: Post }) {
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="flex w-full flex-col gap-4 border-b p-10">
      <div className="text-slate-500 dark:text-slate-400">@{post.authorId}</div>
      <div>{post.content}</div>
      <div className="flex gap-4 text-xl">
        <button onClick={() => setLiked((liked) => !liked)}>
          {isLiked ? (
            <AiFillHeart className="text-red-600" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
        <button>
          <AiOutlineRetweet className="text-lime-600 dark:text-lime-300" />
        </button>
      </div>
    </div>
  );
}

export default Tweet;
