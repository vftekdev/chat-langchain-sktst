import { useThreadRuntime } from "@assistant-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { useQueryState } from "nuqs";

export function UrlQuestions() {
    const threadRuntime = useThreadRuntime();
    const sendQuestionRef = useRef<HTMLDivElement>(null);
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");
    const [refUrl, setRefUrl] = useQueryState("refUrl");
    const [isFromVF, setIsFromVF] = useState(false);
    const [delay, setDelay] = useState(400);

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
                else if (referrerUrl.hostname === "accounts.google.com" || referrerUrl.hostname.endsWith("accounts.google.com")) {
                    const refUrlFromParam = new URL(refUrl ? refUrl : "");
                    if (refUrlFromParam.hostname === "verafiles.org" || refUrlFromParam.hostname.endsWith(".verafiles.org") ||
                        refUrlFromParam.hostname === "factcheck.ph" || refUrlFromParam.hostname.endsWith(".factcheck.ph")) {
                        setIsFromVF(true);
                        setDelay(4000);
                    }
                }
            } catch (error) {
                // Handle cases where document.referrer might not be a valid URL
                console.error("Error parsing referrer URL:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (uPrompt && uPrompt?.length <= 250 && isFromVF) {
            console.log("hello")
            setTimeout(() => {
                sendQuestionRef.current?.click();
            }, delay);
        }
        else {
            // setUPrompt(null);
        }
    }, [uPrompt, isFromVF]);

    return (
        <div>
            <div className="bg-black/70 flex fixed left-0 top-0 bottom-0 right-0 z-[999]">
                <svg className="m-auto w-6 h-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
            <div
                ref={sendQuestionRef}
                onClick={() => handleSend(uPrompt)}
                className="hidden"
            >
            </div>
        </div>
    );
}
