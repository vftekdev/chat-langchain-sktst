import { useThreadRuntime } from "@assistant-ui/react";
import React, { useEffect, useRef } from "react";
import { useQueryState } from "nuqs";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();
    const sendQuestionRef = useRef<HTMLDivElement>(null);
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");

    console.log("1")

    const handleSend = (text: string|null) => {
        console.log("4")
        if (text) {
            console.log("5")
            threadRuntime.append({
                role: "user",
                content: [{ type: "text", text }],
            });
        }
    }

    useEffect(() => {
        console.log("2")
        if (uPrompt) {
            console.log("3")
            setTimeout(() => {
                sendQuestionRef.current?.click()
            }, 400);
        }
    }, [uPrompt]);

    return (
        <div
            ref={sendQuestionRef}
            onClick={() => handleSend(uPrompt)}
            className="hidden"
        ></div>
    );
}
