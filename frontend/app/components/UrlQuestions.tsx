import { useThreadRuntime } from "@assistant-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { useQueryState } from "nuqs";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();
    const sendQuestionRef = useRef<HTMLDivElement>(null);
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");
    const [isFromVF, setIsFromVF] = useState(false);

    const handleSend = (text: string|null) => {
        if (text) {
            threadRuntime.append({
                role: "user",
                content: [{ type: "text", text }],
            });
        }
    }

    useEffect(() => {
        if (document.referrer) {
            try {
                const referrerUrl = new URL(document.referrer);
                console.log(referrerUrl);
                // Compare the hostname (e.g. "example.com")
                if (referrerUrl.hostname === "verafiles.org" || referrerUrl.hostname.endsWith(".verafiles.org") ||
                    referrerUrl.hostname === "factcheck.ph" || referrerUrl.hostname.endsWith(".factcheck.ph")) {
                    setIsFromVF(true);
                }
            } catch (error) {
                // Handle cases where document.referrer might not be a valid URL
                console.error("Error parsing referrer URL:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (uPrompt && uPrompt?.length <= 250 && isFromVF) {
            setTimeout(() => {
                sendQuestionRef.current?.click();
            }, 400);
        }
        else {
            // setUPrompt(null);
        }
    }, [uPrompt, isFromVF]);

    return (
        <div
            ref={sendQuestionRef}
            onClick={() => handleSend(uPrompt)}
            className="hidden"
        ></div>
    );
}
