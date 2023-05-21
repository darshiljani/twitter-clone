import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

const SignInPage = () => (
  <>
    <Head>
      <title>Sign in</title>
      <meta name="description" content="Sign in page for Twitter clone" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-screen items-center justify-center">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-twitter text-sm normal-case hover:bg-blue-800",
            footerActionLink: "text-blue-600",
          },
        }}
      />
    </div>
  </>
);

export default SignInPage;
