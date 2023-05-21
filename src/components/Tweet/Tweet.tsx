import type { RouterOutputs } from "~/utils/api";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

function Tweet({ post, author }: PostWithUser) {
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="flex gap-6 border-b border-b-slate-500 p-4 dark:border-b-slate-300 lg:p-10">
      <Image
        src={author.profilePicture}
        alt={`@{author?.username}'s profile picture`}
        width={48}
        height={48}
        className="aspect-square h-14 rounded-circle"
      />
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-row gap-2 text-slate-400 dark:text-slate-500 lg:items-center">
          <div className="font-bold text-black dark:text-white">
            {`${author?.firstName} ${author?.lastName}`}
          </div>
          <div className="lg:text-md flex flex-row gap-1 text-sm lg:items-center">
            <div className="font-light">@{author?.username}</div>
            <div className="font-thin lg:block">·</div>
            <div>{dayjs(post.createdAt).fromNow()}</div>
          </div>
        </div>
        <div>{post.content}</div>
        <div className="flex gap-4 text-xl">
          <button
            onClick={() => setLiked((liked) => !liked)}
            className="like-button"
          >
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
    </div>
  );
}

export default Tweet;
