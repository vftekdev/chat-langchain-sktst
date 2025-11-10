"use client";

import { ThreadPrimitive } from "@assistant-ui/react";
import { type FC } from "react";
import NextImage from "next/image";

import { ArrowDownIcon } from "lucide-react";
import { useAnswerHeaderToolUI } from "../AnswerHeaderToolUI";
import { useGeneratingQuestionsUI } from "../GeneratingQuestionsToolUI";
import { useProgressToolUI } from "../ProgressToolUI";
import { useRouterLogicUI } from "../RouterLogicToolUI";
import { useSelectedDocumentsUI } from "../SelectedDocumentsToolUI";
import { SelectModel } from "../SelectModel";
import { SuggestedQuestions } from "../SuggestedQuestions";
import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { AssistantMessage, UserMessage } from "./messages";
import { ChatComposer, ChatComposerProps } from "./chat-composer";
import { cn } from "@/app/utils/cn";
import { useThreadRuntime } from "@assistant-ui/react";
import { useEffect } from "react";

export interface ThreadChatProps extends ChatComposerProps {}

export const ThreadChat: FC<ThreadChatProps> = (props: ThreadChatProps) => {
  const isEmpty = props.messages.length === 0;

  useGeneratingQuestionsUI();
  useAnswerHeaderToolUI();
  useProgressToolUI();
  // useSelectedDocumentsUI();
  useRouterLogicUI();

  const threadRuntime = useThreadRuntime();

  const handleSend = (text: string) => {
    threadRuntime.append({
      role: "user",
      content: [{ type: "text", text }],
    });
  }
  const myDiv = document.getElementById('myDivId') as HTMLDivElement;
  let flag = false;
  if (myDiv && !flag) {
    myDiv.click();
    flag = true;
  }

  return (
    // <ThreadPrimitive.Root className={cn("flex flex-col w-full bg-white overflow-hidden", isEmpty ? "h-full" : "h-screen",)}>
    <ThreadPrimitive.Root className={cn("flex flex-col overflow-hidden w-full bg-[#F9F9F9] dark:bg-[#292929]", isEmpty ? "" : "h-screen")}>
      {!isEmpty ? (
        <ThreadPrimitive.Viewport
          className={cn(
            "bg-yellow-500 flex-1 overflow-y-auto scroll-smooth bg-inherit transition-all duration-300 ease-in-out w-full px-6",
            isEmpty ? "pb-[30vh] sm:pb-[50vh]" : "pb-12",
            "scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent mb-48",
          )}
        >
          <div className="lg:pl-24 mt-2 max-w-full">
            <ThreadPrimitive.Messages
              components={{
                UserMessage: UserMessage,
                AssistantMessage: AssistantMessage,
              }}
            />
          </div>
        </ThreadPrimitive.Viewport>
      ) : null}
      <ThreadChatScrollToBottom />
      {isEmpty ? (
        <div className="flex items-center justify-center flex-grow my-auto py-12">
          <div className="flex flex-col items-center bg-white rounded-3xl dark:bg-[#121212] relative px-8 sm:px-16 lg:px-20 py-12 w-full">
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-[#006c68] font-bold text-3xl sm:text-4xl m-1">What would you like to know?</p>
              <p className="text-center text-black dark:text-white font-medium text-sm sm:text-lg m-1">SEEK helps you check facts and look for misinformation trends</p>
            </div>
            <div className="my-4 sm:mt-8">
              <ChatComposer
                submitDisabled={props.submitDisabled}
                messages={props.messages}
              />
              <p className="tracking-wider text-black dark:text-white text-center font-helveticaneuethin text-xs md:text-sm mt-3 px-4 sm:px-12">
                SEEK uses VERA Files articles to create answers using AI. 
                AI answers may contain errors.<br/> 
                Always check the sources cited to verify the facts.
                <a className="text-blue hover:border-0" href="https://verafiles.atlassian.net/jira/software/c/form/03737abd-4aaf-4e2c-960c-570ac7f11f12" target="_blank"> Report Issues.</a>
              </p>
            </div>
            <div className="w-full mt-2 md:mt-4">
              <div className="flex">
                <NextImage
                  src="/images/suggested-questions.svg"
                  className=""
                  alt="Suggested Questions Icon"
                  width={32}
                  height={32}
                />
                <h1 className="text-xl sm:text-2xl text-[#006c68] font-bold px-3">
                  Suggested Questions
                </h1>
              </div>
              <SuggestedQuestions />
              
              <div id="myDivId"
              onClick={() => handleSend("What is dutertes first name?")}
              className="flex w-full bg-[#F7F9FB] dark:bg-[#1E1E1E] hover:bg-[#E5E7EB] rounded-lg shadow-lg cursor-pointer col-span-12 xl:col-span-4"
              >
                asdasd
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed pl-6 md:pl-16 lg:pl-44 pr-6 md:pr-16 left-0 right-0 bottom-0 w-full pb-4 bg-[#F9F9F9]">
          <ChatComposer
            submitDisabled={props.submitDisabled}
            messages={props.messages}
          />
          <p className="tracking-wider text-justify font-helveticaneuethin w-full mt-4">
              SEEK uses VERA Files articles to create answers using AI. 
              AI answers may contain errors.<br/> 
              Always check the sources cited to verify the facts.
              <a className="text-blue hover:border-0" href="https://verafiles.atlassian.net/jira/software/c/form/03737abd-4aaf-4e2c-960c-570ac7f11f12" target="_blank"> Report Issues.</a>
          </p>
        </div>
      )}
    </ThreadPrimitive.Root>
  );
};

const ThreadChatScrollToBottom: FC = () => {
  return (
    <ThreadPrimitive.ScrollToBottom asChild>
      <TooltipIconButton
        tooltip="Scroll to bottom"
        variant="outline"
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 rounded-full disabled:invisible bg-white bg-opacity-75"
      >
        <ArrowDownIcon className="text-gray-600 hover:text-gray-800 transition-colors ease-in-out" />
      </TooltipIconButton>
    </ThreadPrimitive.ScrollToBottom>
  );
};
