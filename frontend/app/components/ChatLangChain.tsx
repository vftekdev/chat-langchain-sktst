"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AppendMessage,
  AssistantRuntimeProvider,
  useExternalStoreRuntime,
} from "@assistant-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useExternalMessageConverter } from "@assistant-ui/react";
import { BaseMessage, HumanMessage } from "@langchain/core/messages";
import { useToast } from "../hooks/use-toast";
import {
  convertToOpenAIFormat,
  convertLangchainMessages,
} from "../utils/convert_messages";
import { ThreadChat } from "./chat-interface";
import { ThreadHistory } from "./thread-history";
import { Toaster } from "./ui/toaster";
import { useGraphContext } from "../contexts/GraphContext";
import { useQueryState } from "nuqs";
import NextImage from "next/image";
import SignOut from "../signout/SignOut";

function ChatLangChainComponent({test} : {test:any}): React.ReactElement {
  const { toast } = useToast();
  const { threadsData, userData, graphData } = useGraphContext();
  const { userId } = userData;
  const { getUserThreads, createThread, getThreadById } = threadsData;
  const { messages, setMessages, streamMessage, switchSelectedThread } =
    graphData;
  const [isRunning, setIsRunning] = useState(false);
  const [threadId, setThreadId] = useQueryState("threadId");

  const hasCheckedThreadIdParam = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || hasCheckedThreadIdParam.current)
      return;
    if (!threadId) {
      hasCheckedThreadIdParam.current = true;
      return;
    }

    hasCheckedThreadIdParam.current = true;

    try {
      getThreadById(threadId).then((thread) => {
        if (!thread) {
          setThreadId(null);
          return;
        }

        switchSelectedThread(thread);
      });
    } catch (e) {
      console.error("Failed to fetch thread in query param", e);
      setThreadId(null);
    }
  }, [threadId]);

  const isSubmitDisabled = !userId;

  async function onNew(message: AppendMessage): Promise<void> {
    if (isSubmitDisabled) {
      toast({
        title: "Failed to send message",
        description: "Unable to find user ID. Please try again later.",
      });
      return;
    }
    if (message.content[0]?.type !== "text") {
      throw new Error("Only text messages are supported");
    }

    setIsRunning(true);

    let currentThreadId = threadId;
    if (!currentThreadId) {
      const thread = await createThread(userId);
      if (!thread) {
        toast({
          title: "Error",
          description: "Thread creation failed.",
        });
        return;
      }
      setThreadId(thread.thread_id);
      currentThreadId = thread.thread_id;
    }

    try {
      const humanMessage = new HumanMessage({
        content: message.content[0].text,
        id: uuidv4(),
      });

      setMessages((prevMessages) => [...prevMessages, humanMessage]);

      await streamMessage(currentThreadId, {
        messages: [convertToOpenAIFormat(humanMessage)],
      });
    } finally {
      setIsRunning(false);
      // Re-fetch threads so that the current thread's title is updated.
      await getUserThreads(userId);
    }
  }

  const threadMessages = useExternalMessageConverter<BaseMessage>({
    callback: convertLangchainMessages,
    messages: messages,
    isRunning,
  });

  const runtime = useExternalStoreRuntime({
    messages: threadMessages,
    isRunning,
    onNew,
  });

  // const userlength = test.length;
  // const truncatetext = userlength > 10 ? test.substring(0,10) + "..." : test;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden w-full flex lg:flex-row flex-col bg-[#F9F9F9] dark:bg-black">
      {/* <div className="absolute bottom-2 right-2 lg:bottom-5 lg:right-5 z-10">
        <button onClick={() => document.body.classList.toggle('dark')}
          className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
              <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div> */}
      <div className="">
        <ThreadHistory />
      </div>
      <div className="px-6 lg:py-6 md:px-16 w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center bg-white font-helveticaneuemedium rounded-3xl my-auto">
          <div className="flex flex-row gap-4 m-4">
            <NextImage
                src="/images/seek-logo.svg"
                className=""
                alt="S-E-E-K Logo"
                width={80}
                height={80}
            />
            <div className="flex items-center text-[10px] md:text-xs text-black font-helveticaneuelight border border-[#D7D7D7] rounded-lg px-2">
              Claude 3.7 Sonnet
            </div>
          </div>
          <div className="flex lg:ml-auto lg:mr-2 lg:mr-6 lg:my-4 mb-4 gap-2">
            <div className="flex bg-[#F7F9FB] relative rounded-md text-xs xl:text-sm">
              <div onClick={() => setExpanded(curr => !curr)} className="flex flex-row items-center justify-center hover:cursor-pointer hover:bg-[#E5E7EB] rounded-lg px-3 py-2">
                <NextImage
                  src="/images/solar-user-bold.svg"
                  className=""
                  alt="User Icon"
                  width={18}
                  height={18}
                />
                <div className="mr-auto mt-0.5 ml-2">User</div>
                <NextImage
                  src="/images/chevron-down.svg"
                  className="mt-0.5 ml-0.5"
                  alt="Chevron Down"
                  width={20}
                  height={20}
                />
              </div>
              <div className={`absolute top-full right-0 mt-2 z-50 rounded shadow-lg bg-[#F7F9FB] w-max transition ease-in-out duration-200 ${expanded ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95"}`}>
                <div className={`flex flex-col px-3 py-2 ${expanded ? "block" : "invisible"}`}>
                  <div className="p-2">
                    {test}
                  </div>
                  <form action={SignOut}>
                    <button className="hover:bg-[#E5E7EB] w-full flex justify-end p-2 rounded-lg">Sign Out</button>
                  </form>
                </div>
              </div>
            </div>
            <a className="flex items-center hover:border-0 bg-[#F7F9FB] hover:bg-[#E5E7EB] rounded-md text-xs xl:text-sm px-3 py-2 gap-2" href="https://verafiles.atlassian.net/jira/software/c/form/03737abd-4aaf-4e2c-960c-570ac7f11f12" target="_blank">
              <NextImage
                src="/images/ic-baseline-report.svg"
                className=""
                alt="Report Issue Icon"
                width={20}
                height={20}
              />
              <div className="text-black">Report Issues</div>
            </a>
            <a className="flex items-center hover:border-0 bg-[#F7F9FB] hover:bg-[#E5E7EB] rounded-md text-xs xl:text-sm px-3 py-2 gap-2" href="/faq" target="_blank">
              <NextImage
                src="/images/help-icon.svg"
                className=""
                alt="Help Icon"
                width={20}
                height={20}
              />
              <div className="text-black">Help</div>
            </a>
          </div>
        </div>
        <AssistantRuntimeProvider runtime={runtime}>
          <ThreadChat submitDisabled={isSubmitDisabled} messages={messages} />
        </AssistantRuntimeProvider>
      </div>
      <Toaster />
    </div>
  );
}

export const ChatLangChain = React.memo(ChatLangChainComponent);
