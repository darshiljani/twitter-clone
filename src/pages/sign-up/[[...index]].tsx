import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

const SignUpPage = () => (
  <>
    <Head>
      <title>Sign up</title>
      <meta name="description" content="Sign up page for Twitter clone" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-screen items-center justify-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/"
        appearance={{
          elements: {
            formButtonPrimary: "bg-twitter text-sm normal-case",
          },
        }}
      />
    </div>
  </>
);

export default SignUpPage;
