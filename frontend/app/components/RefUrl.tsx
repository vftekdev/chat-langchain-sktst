"use client";
import React, { useEffect } from "react";
import { useQueryState } from "nuqs";

export function RefUrl() {
    const [refUrl, setRefUrl] = useQueryState("refUrl");

    useEffect(() => {
        if (document.referrer) {
            try {
                const referrerUrl = new URL(document.referrer);
                console.log(referrerUrl);
                console.log("yo");
                // Compare the hostname (e.g. "example.com")
                if (referrerUrl.hostname === "verafiles.org" || referrerUrl.hostname.endsWith(".verafiles.org") ||
                    referrerUrl.hostname === "factcheck.ph" || referrerUrl.hostname.endsWith(".factcheck.ph")) {
                    setRefUrl(document.referrer);
                }
            } catch (error) {
                // Handle cases where document.referrer might not be a valid URL
                console.error("Error parsing referrer URL:", error);
            }
        }
    }, []);

    return (
        <div></div>
    );
}
