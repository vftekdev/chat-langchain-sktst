import { useThreadRuntime } from "@assistant-ui/react";
import React, { useEffect, useRef } from "react";
import { useQueryState } from "nuqs";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();
    const sendQuestionRef = useRef<HTMLDivElement>(null);
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");

    const handleSend = (text: string|null) => {
        if (text && text === uPrompt) {
            threadRuntime.append({
                role: "user",
                content: [{ type: "text", text }],
            });
        }
    }

    useEffect(() => {
        if (uPrompt) {
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
