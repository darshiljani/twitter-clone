import type { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-screen">
      <Sidebar />
      <div className="w-[80vw]">{children}</div>
    </main>
  );
}
