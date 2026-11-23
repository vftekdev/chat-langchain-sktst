import { NextRequest, NextResponse } from "next/server";
import { Client } from "langsmith";

const MAX_RETRIES = 5;
const RETRY_DELAY = 5000; // 5 seconds

async function shareRunWithRetry(
  lsClient: Client,
  runId: string,
  projectId: string,
  traceId: string,
): Promise<void> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const share = await lsClient.runs.share.create(runId, {
        session_id: projectId,
        trace_id: traceId,
      });
      if (!share.share_token) {
        throw new Error("The server did not return a share token.");
      }
      return;
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        throw error;
      }
      console.warn(
        `Attempt ${attempt} failed. Retrying in ${RETRY_DELAY / 1000} seconds...`,
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
    }
  }
  throw new Error("Max retries reached"); // This line should never be reached due to the throw in the loop
}

export async function POST(req: NextRequest) {
  const { runId } = await req.json();

  if (!runId) {
    return new NextResponse(
      JSON.stringify({
        error: "`runId` is required to share run.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const lsClient = new Client({
    apiKey: process.env.LANGCHAIN_API_KEY,
  });

  try {
    const project = await lsClient.readProject({
      projectName: process.env.LANGCHAIN_PROJECT ?? "default",
    });
    const run = await lsClient.runs.retrieve(runId, {
      project_id: project.id,
      selects: ["TRACE_ID"],
    });
    if (!run.trace_id) {
      throw new Error(`Could not resolve the root trace for run ${runId}.`);
    }

    await shareRunWithRetry(lsClient, runId, project.id, run.trace_id);

    const sharedRun = await lsClient.runs.retrieve(run.trace_id, {
      project_id: project.id,
      selects: ["SHARE_URL"],
    });
    if (!sharedRun.share_url) {
      throw new Error(`Could not resolve the share URL for run ${runId}.`);
    }
    const sharedRunURL = sharedRun.share_url;

    return new NextResponse(JSON.stringify({ sharedRunURL }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      `Failed to share run with id ${runId} after ${MAX_RETRIES} attempts:\n`,
      error,
    );
    return new NextResponse(
      JSON.stringify({ error: "Failed to share run after multiple attempts." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
