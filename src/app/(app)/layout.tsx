"use client";
import type { Metadata } from "next";
import "../../app/globals.css";
import MainNavbar from "@/layout/MainNavbar";
import { maxWidthScreen } from "@/utils/themeConfig";
import { Button } from "antd";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flag = true;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {flag && (
        <div className="w-full h-fit bg-blue-400">
          <div className={maxWidthScreen}>
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {collapsed ? "open" : "close"}
            </Button>
          </div>
        </div>
      )}

      <div className="bg-gray-200 min-h-96 object-fill bg-repeat-x bg-[url('/back-base.png')]">
        {/* Animate width and opacity for the collapsed section */}
        <div className={`flex w-full ${maxWidthScreen}`}>
          <div
            className={`transition-all duration-500 ease-in-out ${
              collapsed ? "w-0 opacity-0 " : "w-96 opacity-100"
            } bg-lime-300`}
          >
            <Button>w3en23ern3erdkfmd</Button>
            <Button>w3en23ern3erdkfmd</Button>
            <Button>w3en23ern3erdkfmd</Button>
            <Button>w3en23ern3erdkfmd</Button>
          </div>

          <div className="w-full">{children}</div>
        </div>
      </div>

      <div className="bg-pink-400">
        <div className={maxWidthScreen}>Footer</div>
      </div>
    </>
  );
}
