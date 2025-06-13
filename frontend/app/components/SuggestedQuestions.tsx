import { useThreadRuntime } from "@assistant-ui/react";
import NextImage from "next/image";

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
          className="w-full bg-[#F7F9FB] rounded-lg cursor-pointer col-span-12 md:col-span-4"
        >
          <p className="flex flex-row gap-2 px-4 py-1.5 text-[#0F5579] text-lg transition-colors ease-in hover:text-[#2891E0]">
            {question}
            <NextImage
                src="/images/tabler_search.svg"
                className="rounded-3xl"
                alt="LangChain Logo"
                width={32}
                height={32}
                style={{ width: "auto", height: "auto" }}
              />
          </p>
        </div>
      ))}
    </div>
  );
}
