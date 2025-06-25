import { useAssistantToolUI } from "@assistant-ui/react";
import NextImage from "next/image";

export const useAnswerHeaderToolUI = () =>
  useAssistantToolUI({
    toolName: "answer_header",
    render: (_) => {
      return (
        <div className="flex flex-row gap-2 items-center justify-start py-3 text-black-300">
          <NextImage
              src="/images/chat-icon.svg"
              className=""
              alt="Answer Logo"
              width={32}
              height={32}
          />
          <p className="text-2xl font-bold text-[#0F5579]">Answer</p>
        </div>
      );
    },
  });
