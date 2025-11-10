import { useThreadRuntime } from "@assistant-ui/react";
import NextImage from "next/image";

const suggestedQuestions = [
  "Give me the latest fact checks.",
  "What's the latest misinformation trend?",
  "Why the name VERA Files?",
];

export function SuggestedQuestions() {
  const threadRuntime = useThreadRuntime();

  const handleSend = (text: string) => {
    threadRuntime.append({
      role: "user",
      content: [{ type: "text", text }],
    });
  };

  return (
    <div className="w-full grid grid-cols-12 rounded-2xl mt-8 gap-4">
      {suggestedQuestions.map((question, idx) => (
        <div
          onClick={() => handleSend(question)}
          key={`suggested-question-${idx}`}
          className="flex w-full bg-[#F7F9FB] dark:bg-[#1E1E1E] hover:bg-[#E5E7EB] rounded-lg shadow-lg cursor-pointer col-span-12 xl:col-span-4"
        >
          <p className="flex transition-colors ease-in items-center tracking-wide leading-6 font-helveticaneuelight text-[#4B4B4B] dark:text-[#F9F9F9] text-nowrap text-md hover:text-black gap-2 px-4 py-1">
            {question}
          </p>
          <NextImage
            src="/images/arrow-right.svg"
            className="ml-auto mr-4 block dark:hidden"
            alt="Right Arrow Icon"
            width={24}
            height={24}
          />
          <NextImage
            src="/images/arrow-right-dark.svg"
            className="ml-auto mr-4 hidden dark:block"
            alt="Right Arrow Icon"
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  );
}
