import type { ReactNode, Dispatch, SetStateAction } from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({
  children,
  darkMode,
  changeTheme,
}: {
  children: ReactNode;
  darkMode: boolean;
  changeTheme: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <main className="flex min-h-screen w-screen">
        <Navbar darkMode={darkMode} changeTheme={changeTheme} />
        <div className="ms-auto w-screen lg:w-[80vw]">{children}</div>
      </main>
    </>
  );
}
