import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Loader from "../Loader/Loader";
import { api } from "~/utils/api";

const CreateTweet = () => {
  const { mutate } = api.posts.create.useMutation();

  const [content, setContent] = useState("");
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    <Loader />;
  }

  if (!user) return null;
  else {
    return (
      <form
        className="flex flex-col gap-4 border-b border-b-slate-500 p-4 dark:border-b-slate-300 lg:p-10"
        onSubmit={() => {
          mutate({ content: content });
        }}
      >
        <div className="flex w-full gap-4">
          <Image
            src={user.profileImageUrl}
            alt="Profile image"
            width={48}
            height={48}
            className="aspect-square rounded-full lg:h-14"
          />
          <input
            type="text"
            maxLength={140}
            placeholder="What's on your mind?"
            className="grow bg-transparent outline-none"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-fit rounded-full bg-twitter px-4 py-2 font-bold text-white"
        >
          Tweet
        </button>
      </form>
    );
  }
};

export default CreateTweet;
