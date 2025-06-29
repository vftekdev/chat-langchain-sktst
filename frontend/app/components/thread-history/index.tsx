import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { SquarePen, History, ChevronFirst, ChevronLast } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Skeleton } from "../ui/skeleton";
import React from "react";
import { useGraphContext } from "../../contexts/GraphContext";
import { groupThreads } from "./utils";
import { ThreadsList } from "./thread-list";
import { useQueryState } from "nuqs";
import { useState } from "react";

const LoadingThread = () => <Skeleton className="w-full h-8 bg-[#373737]" />;

function ThreadHistoryComponent() {
  const { threadsData, userData, graphData } = useGraphContext();
  const { userThreads, isUserThreadsLoading, deleteThread } = threadsData;
  const { userId } = userData;
  const { switchSelectedThread, setMessages } = graphData;
  const [_threadId, setThreadId] = useQueryState("threadId");

  const clearMessages = () => {
    setMessages([]);
  };

  const deleteThreadAndClearMessages = async (id: string) => {
    clearMessages();
    await deleteThread(id, clearMessages);
  };

  const groupedThreads = groupThreads(
    userThreads,
    switchSelectedThread,
    deleteThreadAndClearMessages,
  );

  const createNewSession = async () => {
    setThreadId(null);
    clearMessages();
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-y-auto lg:h-screen">
      {/* Tablet & up */}
      <div className={`hidden lg:flex flex-col overflow-hidden ${expanded ? "w-[260px] bg-white": "bg-[#F9F9F9]"}`}>
        <div className="flex-grow my-6 flex flex-col overflow-hidden">
          <div className={`flex flex-row items-center border-b-[1px] pt-3 px-2 mx-4 -mt-4 text-gray-200 ${expanded ? "" : "p-0 m-0 border-none"}`}>
            <p className={`text-lg text-black font-bold ${expanded ? "block" : "hidden"}`}>Chat History</p>
            {userId ? (
              <TooltipIconButton
                tooltip="New chat"
                variant="ghost"
                className="ml-auto mr-1 hover:bg-[#E5E7EB]"
                onClick={createNewSession}
              >
                <SquarePen className="w-5 h-5 text-black" />
              </TooltipIconButton>
            ) : null}
            <button onClick={() => setExpanded(curr => !curr)}>
              {expanded ? 
              <TooltipIconButton 
                tooltip="Close Chat History"
                variant="ghost"
                className="mt-[3px] hover:bg-[#E5E7EB]"
              >
                <ChevronFirst className="w-6 h-6 text-black" />
              </TooltipIconButton> :
              <TooltipIconButton
                tooltip="Open Chat History"
                variant="ghost"
                className="mt-[3px] hover:bg-[#E5E7EB]"
              >
                <ChevronLast className="w-6 h-6 text-black" />
              </TooltipIconButton> }
            </button>
          </div>
          <div className={`overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent ${expanded ? "" : "hidden"}`}>
            {isUserThreadsLoading && !userThreads.length ? (
              <div className="flex flex-col gap-1 px-3 pt-3">
                {Array.from({ length: 25 }).map((_, i) => (
                  <LoadingThread key={`loading-thread-${i}`} />
                ))}
              </div>
            ) : (
              <ThreadsList groupedThreads={groupedThreads} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <span className="lg:hidden flex flex-row m-4">
        <Sheet>
          <SheetTrigger asChild>
            <TooltipIconButton
              tooltip="New chat"
              variant="ghost"
              className="w-fit h-fit p-2"
            >
              <History className="w-6 h-6" />
            </TooltipIconButton>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white border-none text-black">
            {isUserThreadsLoading && !userThreads.length ? (
              <div className="flex flex-col gap-1 px-3 pt-3">
                {Array.from({ length: 25 }).map((_, i) => (
                  <LoadingThread key={`loading-thread-${i}`} />
                ))}
              </div>
            ) : (
              <ThreadsList groupedThreads={groupedThreads} />
            )}
          </SheetContent>
        </Sheet>
        {userId ? (
          <TooltipIconButton
            tooltip="New chat"
            variant="ghost"
            className="w-fit h-fit p-2"
            onClick={createNewSession}
          >
            <SquarePen className="w-6 h-6" />
          </TooltipIconButton>
        ) : null}
      </span>
    </div>
  );
}

export const ThreadHistory = React.memo(ThreadHistoryComponent);
