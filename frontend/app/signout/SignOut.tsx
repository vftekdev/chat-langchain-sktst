"use server";

import { signOut } from "@/auth"
import { useQueryState } from "nuqs";


export default async function SignOut() {
    await signOut();
    const [uPrompt, setUPrompt] = useQueryState("uPrompt");
    const [threadId, setThreadId] = useQueryState("threadId");
    setUPrompt(null);
    setThreadId(null);
}