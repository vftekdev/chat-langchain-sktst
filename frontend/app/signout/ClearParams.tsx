import { useQueryState } from "nuqs";

export default function ClearParams() {
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");
    const [threadId, setThreadId] = useQueryState("threadId");
    const [refUrl, setRefUrl] = useQueryState("refUrl");
    setUPrompt(null);
    setThreadId(null);
    setRefUrl(null);
}
