import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const CreateTweet = () => {
  const { user } = useUser();

  if (!user) return null;
  else {
    return (
      <div className="flex w-full gap-4 border-b p-10">
        <Image
          src={user.profileImageUrl}
          alt="Profile image"
          width={48}
          height={48}
          className="h-14 w-14 rounded-full"
        />
        <input
          maxLength={140}
          placeholder="What's on your mind?"
          className="grow bg-transparent outline-none"
        ></input>
      </div>
    );
  }
};

export default CreateTweet;
