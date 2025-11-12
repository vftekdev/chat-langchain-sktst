import { useThreadRuntime } from "@assistant-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { useQueryState } from "nuqs";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();
    const sendQuestionRef = useRef<HTMLDivElement>(null);
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");
    const [uQuery, setUQuery] = useState("");

    const handleSend = (text: string|null) => {
        if (text) {
            threadRuntime.append({
                role: "user",
                content: [{ type: "text", text }],
            });
        }
    }

    useEffect(() => {
        if (uPrompt) {
            setUQuery(uPrompt);
            console.log(uQuery);
            setTimeout(() => {
                sendQuestionRef.current?.click()
            }, 400);
        }
        setUPrompt(null);
    }, [uQuery]);

    return (
        <div
            ref={sendQuestionRef}
            onClick={() => handleSend(uQuery)}
            className="hidden"
        ></div>
    );
}
