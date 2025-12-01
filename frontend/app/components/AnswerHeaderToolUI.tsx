import { useAssistantToolUI } from "@assistant-ui/react";
import NextImage from "next/image";

export const useAnswerHeaderToolUI = () =>
  useAssistantToolUI({
    toolName: "answer_header",
    render: (_) => {
      return (
        <div className="flex flex-row gap-2 items-center justify-start text-black-300 py-3 pl-3">
          <NextImage
              src="/images/chat-icon.svg"
              className=""
              alt="Answer Logo"
              width={32}
              height={32}
          />
          <p className="text-2xl font-bold text-[#006c68] dark:text-[#00CEC6]">Answer</p>
        </div>
      );
    },
  });
