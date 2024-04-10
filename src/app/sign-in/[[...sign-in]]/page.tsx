import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-4xl font-bold mt-20">This is the sign-in page</h1>
      <Image
        src="/nu-events-logo.png"
        alt="NU Events Logo"
        width={100}
        height={100}
      />
      <SignIn />
    </div>
  );
}
