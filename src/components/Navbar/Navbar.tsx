import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons/lib";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaTwitter, FaSun, FaMoon, FaRegUserCircle } from "react-icons/fa";
import { TbHash } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BiHome } from "react-icons/bi";

function Navbar({
  darkMode,
  changeTheme,
}: {
  darkMode: boolean;
  changeTheme: Dispatch<SetStateAction<boolean>>;
}) {
  const NavLink = ({
    icon: Icon,
    title,
    href,
    className,
  }: {
    icon: IconType;
    title?: string;
    href: string;
    className?: string;
  }) => {
    return (
      <Link
        href={href}
        className={`flex items-center p-2 text-2xl font-bold hover:rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${
          className ?? ""
        }`}
      >
        <Icon className="inline" />
        <span className="hidden ps-4 lg:inline">{title}</span>
      </Link>
    );
  };

  return (
    <>
      <div className="fixed left-0 top-0 hidden h-screen w-[20vw] flex-col justify-between py-6 ps-4 lg:flex">
        <div className="flex gap-4 lg:flex-col">
          <NavLink
            icon={FaTwitter}
            href="/"
            className="w-fit text-3xl text-twitter"
          />
          <NavLink icon={TbHash} title="Feed" href="/feed" />
          <NavLink icon={FiSettings} title="Settings" href="/settings" />
          <div
            className="flex cursor-pointer items-center p-2 text-2xl font-bold"
            onClick={() => changeTheme((mode) => !mode)}
          >
            {darkMode === true ? <FaMoon /> : <FaSun />}
            <span className="hidden ps-4 lg:block">Change theme</span>
          </div>
        </div>
        <div className="p-2 text-2xl font-bold">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonBox: "flex flex-row-reverse cl-userButtonTrigger",
                  userButtonOuterIdentifier:
                    "text-2xl font-bold text-black dark:text-white hidden lg:block",
                },
              }}
              showName={true}
              userProfileMode="navigation"
              userProfileUrl={
                typeof window !== "undefined"
                  ? `${window.location.origin}/profile`
                  : undefined
              }
            />
          </SignedIn>
          <SignedOut>
            <div className="flex cursor-pointer items-center gap-2">
              <FaRegUserCircle />
              <SignInButton />
            </div>
          </SignedOut>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 flex w-screen justify-between border-t py-6 ps-4 lg:hidden">
        <div className="flex w-full items-center justify-around gap-4 lg:flex-col">
          <NavLink icon={BiHome} href="/" className="w-fit text-3xl" />
          <NavLink icon={TbHash} title="Feed" href="/feed" />
          <NavLink icon={FiSettings} title="Settings" href="/settings" />
          <div
            className="flex cursor-pointer items-center p-2 text-2xl font-bold"
            onClick={() => changeTheme((mode) => !mode)}
          >
            {darkMode === true ? <FaMoon /> : <FaSun />}
            <span className="hidden ps-4 lg:block">Change theme</span>
          </div>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonBox: "flex flex-row-reverse cl-userButtonTrigger",
                  userButtonOuterIdentifier:
                    "text-2xl font-bold text-black dark:text-white hidden lg:block",
                },
              }}
              showName={true}
              userProfileMode="navigation"
              userProfileUrl={
                typeof window !== "undefined"
                  ? `${window.location.origin}/profile`
                  : undefined
              }
            />
          </SignedIn>
          <SignedOut>
            <div className="flex cursor-pointer items-center gap-2">
              <FaRegUserCircle />
              <SignInButton />
            </div>
          </SignedOut>
        </div>
      </div>
    </>
  );
}

export default Navbar;
