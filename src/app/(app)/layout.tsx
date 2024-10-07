import type { Metadata } from "next";
import "../../app/globals.css";
import MainNavbar from "@/layout/MainNavbar";
import { maxWidthScreen } from "@/utils/themeConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-fit bg-blue-400">
        <div className={maxWidthScreen}>socond navbar</div>
      </div>
      <div className="bg-gray-200 min-h-96 object-fill bg-repeat-x bg-[url('/back-base.png')]">
        <div className={maxWidthScreen}>{children}</div>
      </div>
      <div className="bg-pink-400">
        <div className={maxWidthScreen}>Footer</div>
      </div>
    </>
  );
}
