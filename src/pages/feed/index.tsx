import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Tweet from "~/components/Tweet/Tweet";
import CreateTweet from "~/components/Tweet/CreateTweet";
import Loader from "~/components/Loader/Loader";
import LoadingPage from "~/components/Loader/Loader";

const Home: NextPage = () => {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) return <LoadingPage />;

  if (!data)
    return (
      <div className="flex h-screen items-center justify-center">
        Something went wrong
      </div>
    );

  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen justify-center border-slate-500 dark:border-slate-300 lg:border-l">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex h-full w-full flex-col">
            <CreateTweet />
            {data?.length > 0 ? (
              data?.map(({ post, author }) => (
                <Tweet key={post.id} post={post} author={author} />
              ))
            ) : (
              <div className="mx-auto p-10 text-2xl text-gray-500">
                Be the first to post a tweet!
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
