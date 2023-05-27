import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserProfile,
} from "@clerk/nextjs";
import { useEffect } from "react";

function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="isolate -z-[1] flex min-h-screen w-full items-center justify-center py-6">
      <SignedIn>
        {/* Signed in users will see their user profile */}
        <UserProfile />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

export default Index;
