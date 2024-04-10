import { auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default async function DashBoardPage() {
  let userData;
  try {
    userData = await currentUser();
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <div>Error fetching user data</div>;
  }

  if (!userData || !userData.firstName || !userData.lastName) {
    return <div>Loading...</div>; // or render a loading indicator
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-80">
          <h3 className="text-2xl font-semibold text-gray-900">
            Welcome, {userData.firstName} {userData.lastName}
          </h3>
          <p className="mt-2 text-gray-600">
            Thank you for using our platform!
          </p>
          <Link href="/">
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
