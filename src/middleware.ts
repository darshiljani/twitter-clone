import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = ["/", "/sign-up", "/sign-in"];

const isPublic = (path: string) => {
  return publicRoutes.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

export default withClerkMiddleware((req: NextRequest) => {
  if (isPublic(req.nextUrl.pathname)) {
    return NextResponse.next();
  }
  const { userId } = getAuth(req);
  if (!userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
});

// export default authMiddleware({
//   publicRoutes: ["/", "/explore"],
// });

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
  // matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
