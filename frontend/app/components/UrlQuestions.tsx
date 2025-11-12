import { useThreadRuntime } from "@assistant-ui/react";
import { useGraphContext } from "../contexts/GraphContext";
import React, { useEffect, useRef, useState } from "react";

export function UrlQuestions() {
    const { userData } = useGraphContext();
    const { userId } = userData;
    const threadRuntime = useThreadRuntime();
    const [isRunning, setIsRunning] = useState(false);

    const handleSend = (text: string) => {
        threadRuntime.append({
            role: "user",
            content: [{ type: "text", text }],
        });
    }

    const sendQuestionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            sendQuestionRef.current?.click()
        }, 400)
    }, []);

    // const myDiv = document.getElementById('myDivId') as HTMLDivElement;
    // let flag = false;
    // if (myDiv && !flag && userId && !isRunning) {
    //     myDiv.click();
    //     flag = true;
    //     setIsRunning(true);
    // }

    return (
        <div
            ref={sendQuestionRef}
            onClick={() => handleSend("What is dutertes first name?")}
            className="flex w-full bg-[#F7F9FB] dark:bg-[#1E1E1E] hover:bg-[#E5E7EB] rounded-lg shadow-lg cursor-pointer col-span-12 xl:col-span-4"
        >
            asdasd
        </div>
    );
}