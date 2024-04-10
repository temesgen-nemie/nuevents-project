import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export default function Header() {
  const { userId } = auth();

  return (
    <div className="bg-blue-500 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-20">
        <Link href="/">
          <Image
            src="/nu-events-logo.png"
            alt="NU Events Logo"
            width={60}
            height={60}
          />
        </Link>
        <Link href="/"></Link>
        <div>
          {userId ? (
            <div className="flex gap-2 justify-center items-center">
              Dashboard
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-up">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:brightness-90">
                  Sign Up
                </button>
              </Link>
              <Link href="/sign-in">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:brightness-90">
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
