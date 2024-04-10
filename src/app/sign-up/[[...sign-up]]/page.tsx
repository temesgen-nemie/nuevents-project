import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-4xl font-bold mt-20">This is signup page</h1>
      <Image
        src="/nu-events-logo.png"
        alt="NU Events Logo"
        width={100}
        height={100}
      />
      <SignUp />
    </div>
  );
}
