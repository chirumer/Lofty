import { NextRequest } from "next/server";

import { textToSpeech } from "@/lib/elevenlabs";
import type { AgentRole } from "@/types";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    text?: string;
    role?: AgentRole;
  };

  if (!body.text?.trim() || !body.role) {
    return new Response(JSON.stringify({ error: "text and role are required." }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  try {
    const audio = await textToSpeech(body.text.trim(), body.role);
    return new Response(audio, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unable to synthesize speech."
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
