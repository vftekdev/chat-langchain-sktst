import React from "react";
import { GraphProvider } from "./contexts/GraphContext";
import { ChatLangChain } from "./components/ChatLangChain";
import { Card } from "./components/ui/card";
import NextImage from "next/image";
import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;
  return user ? (
    <main className="w-full">
      <React.Suspense fallback={null}>
        <GraphProvider>
          <ChatLangChain test={user.name} />
        </GraphProvider>
      </React.Suspense>
    </main>
  ) : 
  (
    <main className="flex mx-auto my-auto text-center justify-center items-center">
      <Card className="flex flex-col justify-center items-center w-[90%] lg:w-[60%] p-16">
        <NextImage
          src="/images/seek-logo.svg"
          className=""
          alt="S-E-E-K Logo"
          width={144}
          height={144}
        />
        <h1 className="mt-4 text-3xl text-[#F6911D]">Welcome to SEEK!</h1>
        <h2 className="mt-2 font-helveticaneuemedium text-lg">Check your facts in less than a minute.</h2>
        <p className="mt-6 font-helveticaneuelight text-sm">
          By clicking “Login”, you agree to our
          <a href="/toc" target="_blank"> Terms and Conditions</a>. 
          Learn how we process your data in our 
          <a href="/privacy-policy" target="_blank"> Privacy Policy</a>.
        </p>
        <form className="mt-6 cursor-pointer flex justify-center w-full"
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <button className="flex justify-center" type="submit">
            <Card className="flex flex-row justify-center gap-2 p-2">
              <NextImage
                src="/images/google-logo.svg"
                className=""
                alt="Google Logo"
                width={20}
                height={20}
              />
              <div className="text-gray-600 font-helveticaneuemedium text-xs sm:text-sm md:text-base">Log In with Google</div>
            </Card>
          </button>
        </form>
      </Card>
    </main>
  )
}
