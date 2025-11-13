export type Source = {
  url: string;
  title: string;
};

export type Message = {
  id: string;
  createdAt?: Date;
  content: string;
  type: "system" | "human" | "ai" | "function";
  sources?: Source[];
  name?: string;
  function_call?: { name: string };
};

export type Feedback = {
  feedback_id: string;
  score: number;
  comment?: string;
};

export type ModelOptions =
  | "openai/gpt-4o-mini"
  | "anthropic/claude-sonnet-4-5-20250929"
  | "groq/llama3-70b-8192"
  | "google_genai/gemini-2.0-flash";

export type ResponseType =
  | "simple"
  | "complex"
