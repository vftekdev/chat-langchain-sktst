import { useThreadRuntime } from "@assistant-ui/react";
import React, { useEffect, useRef } from "react";
import { useQueryState } from "nuqs";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();
    const sendQuestionRef = useRef<HTMLDivElement>(null);
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");

    function isReferrerFromVF(): boolean {
        // document.referrer can be an empty string if there's no referrer
        // or if the referrer policy prevents it from being sent
        if (!document.referrer) {
            return false;
        }
        try {
            const referrerUrl = new URL(document.referrer);
            // Compare the hostname (e.g., "example.com")
            return referrerUrl.hostname === "verafiles.org" || referrerUrl.hostname === "factcheck.ph";
        } catch (error) {
            // Handle cases where document.referrer might not be a valid URL
            console.error("Error parsing referrer URL:", error);
            return false;
        }
    }

    const handleSend = (text: string|null) => {
        if (text) {
            threadRuntime.append({
                role: "user",
                content: [{ type: "text", text }],
            });
        }
    }

    useEffect(() => {
        if (uPrompt && uPrompt?.length <= 250 && isReferrerFromVF()) {
            setTimeout(() => {
                sendQuestionRef.current?.click();
            }, 400);
        }
        else {
            setUPrompt(null);
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
