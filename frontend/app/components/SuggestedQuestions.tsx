import { useThreadRuntime } from "@assistant-ui/react";
import NextImage from "next/image";
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
    <div className="w-full grid grid-cols-1 border border-gray-600 rounded-2xl mt-4 mb-4 p-4">
      {suggestedQuestions.map((question, idx) => (
        <div
          onClick={() => handleSend(question)}
          key={`suggested-question-${idx}`}
          className="flex w-full bg-[#F7F9FB] rounded-lg shadow-lg cursor-pointer col-span-12 xl:col-span-4"
        >
          <p className="flex flex-row gap-2 px-4 py-1.5 m-1 text-[#0F5579] text-lg font-bold transition-colors ease-in hover:text-[#2891E0]">
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
