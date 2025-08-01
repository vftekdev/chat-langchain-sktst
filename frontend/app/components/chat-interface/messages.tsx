"use client";

import {
  MessagePrimitive,
  useMessage,
  useThreadRuntime,
  ActionBarPrimitive,
} from "@assistant-ui/react";
import { useState, type FC } from "react";

import { MarkdownText } from "../ui/assistant-ui/markdown-text";
import { useGraphContext } from "@/app/contexts/GraphContext";
import { useRuns } from "@/app/hooks/useRuns";
import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { CheckIcon, CopyIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import NextImage from "next/image";

export const UserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="pt-2 sm:pt-4 flex flex-col w-full md:max-w-4xl md:mx-0 mx-auto max-w-[95%] md:py-4 py-2">
      <h1 className="uppercase">You Asked</h1>
      <div className="bg-inherit text-[#006c68] break-words rounded-2xl sm:rounded-3xl pt-4 md:pt-2.5 mb-[-15px] sm:mb-[-25px] text-2xl sm:text-3xl font-helveticaneuelight">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};

function FeedbackButtons() {
  const {
    graphData: { runId, isStreaming },
  } = useGraphContext();
  const { sendFeedback } = useRuns();
  const [feedback, setFeedback] = useState<"good" | "bad">();

  const feedbackKey = "user_feedback";
  const goodScore = 1;
  const badScore = 0;

  if (!runId || isStreaming) return null;

  if (feedback) {
    return (
      <div className="flex gap-2 items-center mt-4">
        {feedback === "good" ? (
          <div>
            <ThumbsUpIcon className="w-4 h-4 text-green-500" />
          </div>
        ) : (
          <div>
            <ThumbsDownIcon className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <div className="flex gap-2 items-center grow">
          <p>Did this answer your question?</p>
          <TooltipIconButton
            delayDuration={200}
            variant="ghost"
            tooltip="Good response"
            onClick={() => {
              sendFeedback(runId, feedbackKey, goodScore);
              setFeedback("good");
            }}
          >
            <ThumbsUpIcon className="w-4 h-4 hover:text-green-500" />
          </TooltipIconButton>
          <TooltipIconButton
            delayDuration={200}
            variant="ghost"
            tooltip="Bad response"
            onClick={() => {
              sendFeedback(runId, feedbackKey, badScore);
              setFeedback("bad");
            }}
          >
            <ThumbsDownIcon className="w-4 h-4 hover:text-red-500" />
          </TooltipIconButton>
        </div>
        <CopyToClipboard />
      </div>
    </div>
  );
}

function CopyToClipboard () {
  return (
    <div>
      <ActionBarPrimitive.Copy className="flex gap-2 items-center hover:text-[#006C68]">
        <MessagePrimitive.If copied={false}>
          <p className="text-sm">Copy</p>
          <CopyIcon className="w-5 h-5"/>
        </MessagePrimitive.If>
        <MessagePrimitive.If copied>
          <p className="text-sm">Copied</p>
          <CheckIcon className="w-5 h-5"/>
        </MessagePrimitive.If>
      </ActionBarPrimitive.Copy>
    </div>
  )
}

export const AssistantMessage: FC = () => {
  const threadRuntime = useThreadRuntime();
  const threadState = threadRuntime.getState();
  const isLast = useMessage((m) => m.isLast);
  const shouldRenderMessageBreak =
    threadState.messages.filter((msg) => msg.role === "user")?.length > 1 &&
    !isLast;

  return (
    <MessagePrimitive.Root className="w-full md:mx-0 mx-auto max-w-[95%]">
      <div className="bg-inherit text-black font-helveticaneuemedium max-w-full sm:max-w-3xl break-words leading-6 sm:leading-7">
        <div className="flex flex-row gap-2 items-start border bg-[#FDF3E7] text-[#5F5038] mt-4 p-4">
                    <NextImage
                        src="/images/warning-sign.svg"
                        className="pt-3"
                        alt="Warning"
                        width={16}
                        height={16}
                    /> <p>Warning: This is an experimental tool under development. It may still have bugs or errors. 
        Use with caution. Always check the sources cited. In case of doubt, try to use other third-party tools to confirm the answer.</p>
        </div>
        <MessagePrimitive.Content components={{ Text: MarkdownText }} />
        {shouldRenderMessageBreak ? (
          <hr className="relative left-1/2 -translate-x-1/2 w-[90vw] sm:w-[45vw] mt-4 sm:mt-6 border-gray-600" />
        ) : null}
        {isLast && <FeedbackButtons />}
      </div>
    </MessagePrimitive.Root>
  );
};
