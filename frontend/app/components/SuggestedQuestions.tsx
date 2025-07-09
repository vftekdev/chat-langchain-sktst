import { useThreadRuntime } from "@assistant-ui/react";
import NextImage from "next/image";
import { MoveRight } from "lucide-react";
import { MoveRight } from "lucide-react";

const suggestedQuestions = [
  "What does verafiles do?",
  "How does verafiles conduct their fact checks?",
  "Is fact checking hard?",
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
          className="flex w-full bg-[#F7F9FB] hover:bg-[#E5E7EB] hover:text-black rounded-lg shadow-lg cursor-pointer col-span-12 xl:col-span-4"
        >
          <p className="flex transition-colors ease-in items-center tracking-wide leading-6 font-helveticaneuelight text-[#4B4B4B] text-nowrap text-md gap-2 px-4 py-1">
            {question}
          </p>
          <NextImage
            src="/images/arrow-right.svg"
            className="text-black ml-auto mr-4"
            alt="Right Arrow Icon"
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  );
}
