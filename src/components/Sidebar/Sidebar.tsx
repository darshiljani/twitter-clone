import { useState, useEffect } from "react";
import type { IconType } from "react-icons/lib";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaTwitter, FaSun, FaMoon, FaRegUserCircle } from "react-icons/fa";
import { TbHash } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
// import { MdCreate } from "react-icons/md";

function Sidebar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

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

  useEffect(() => {
    const doc = document.querySelector("html");
    darkMode === true
      ? doc?.classList.remove("dark")
      : doc?.classList.add("dark");
  }, [darkMode]);

  return (
    <div className="flex w-[20vw] flex-col justify-between py-6 ps-4">
      <div className="flex flex-col gap-4">
        <NavLink
          icon={FaTwitter}
          href="/"
          className="w-fit text-3xl text-twitter"
        />
        <NavLink icon={TbHash} title="Explore" href="/explore" />
        <NavLink icon={FiSettings} title="Settings" href="/settings" />
        <div
          className="flex cursor-pointer items-center p-2 text-2xl font-bold"
          onClick={() => setDarkMode((mode) => !mode)}
        >
          {darkMode === true ? <FaMoon /> : <FaSun />}
          <span className="ps-4">Change theme</span>
        </div>
      </div>
      <div className="p-2 text-2xl font-bold">
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonBox: "flex flex-row-reverse cl-userButtonTrigger",
                userButtonOuterIdentifier:
                  "text-2xl font-bold text-black dark:text-white",
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
  );
}

export default Sidebar;
