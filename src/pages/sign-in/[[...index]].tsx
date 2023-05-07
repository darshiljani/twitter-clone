import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

const SignInPage = () => (
  <>
    <Head>
      <title>Sign in</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-screen items-center justify-center">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary: "bg-twitter text-sm normal-case",
          },
        }}
      />
    </div>
  </>
);

export default SignInPage;
