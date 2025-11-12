import { useThreadRuntime } from "@assistant-ui/react";
import { useGraphContext } from "../contexts/GraphContext";
import React, { useEffect, useRef, useState } from "react";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();

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

    return (
        <div
            ref={sendQuestionRef}
            onClick={() => handleSend("What is dutertes first name?")}
            className="hidden"
        ></div>
    );
}
