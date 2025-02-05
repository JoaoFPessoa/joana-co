"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.className} h-screen flex flex-col bg-gradient-to-br `}
    >
      {/* Navbar */}
      <nav className="p-4 text-white flex items-center">
        {/* blurred pink */}
        <div className="absolute top-0 left-0 bg-[#ffa9da52] w-[250px] h-[250px] rounded-full rotate-[32.46deg] blur-[50px]" />
        {/* logo */}
        <Link href="/">
          <Image
            src={"/logos/logo.svg"}
            alt="Joana Co logo"
            width={140}
            height={21}
          />
        </Link>
      </nav>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left section */}
        <div className="w-1/2  flex  items-center justify-center">
          <div className="flex flex-col max-w-[350px] gap-10">
            <Image
              src={"/login-assets/aspas.svg"}
              alt=""
              width={62}
              height={48}
            />
            <p className="text-3xl">
              Não é sobre o quanto você trabalha pelo dinheiro, mas sobre{" "}
              <b className="font-bold">como o dinheiro trabalha</b> pela sua
              paz.
            </p>
            <Image
              src={"/login-assets/finances-logo.svg"}
              alt=""
              width={218}
              height={70}
            />
          </div>
        </div>

        {/* Right section (children) */}
        <div className="w-1/2 p-6  flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
