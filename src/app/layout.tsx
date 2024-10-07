import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "@/layout/MainNavbar";
import { maxWidthScreen } from "@/utils/themeConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        {/* main navbar */}
        <div className="w-full h-fit bg-purple-400">
          <div className={maxWidthScreen}>
            <MainNavbar />
          </div>
        </div>
        {children}
        {/* page content */}
        {/* <div className="w-full bg-slate-300">
          <div className="container mx-auto max-w-7xl">{children}</div>
        </div> */}
        {/* footer */}
        {/* <div className="w-full bg-purple-400">
          <div className="container mx-auto max-w-7xl">
            <footer className="bg-yellow-200 text-xl py-4">footer</footer>
          </div>
        </div> */}
      </body>
    </html>
  );
}
