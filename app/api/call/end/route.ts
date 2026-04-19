import { NextRequest, NextResponse } from "next/server";

import { runAgent } from "@/lib/agent";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { speechToText } from "@/lib/elevenlabs";
import { getSupabaseServerClient, isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";
import { getDefaultSenderName, normalizeNegotiationNumbers } from "@/lib/utils";
import type { AgentRole } from "@/types";

export async function POST(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const body = (await request.json()) as {
    audioBase64?: string;
    listingId?: string;
    callerRole?: AgentRole;
    callerName?: string;
    fallbackTranscript?: string;
  };

  if (!body.callerRole) {
    return NextResponse.json({ error: "callerRole is required." }, { status: 400 });
  }

  let transcript = body.fallbackTranscript?.trim() ?? "";

  if (body.audioBase64) {
    try {
      const cleanedBase64 = body.audioBase64.replace(/^data:audio\/\w+;base64,/, "");
      const audioBuffer = Buffer.from(cleanedBase64, "base64");
      const audioBlob = new Blob([audioBuffer], { type: "audio/webm" });
      transcript = normalizeNegotiationNumbers((await speechToText(audioBlob)) || transcript);
    } catch (error) {
      if (!transcript) {
        return NextResponse.json(
          {
            error:
              error instanceof Error
                ? error.message
                : "Unable to transcribe audio and no fallback transcript was provided."
          },
          { status: 503 }
        );
      }
    }
  }

  if (!transcript) {
    return NextResponse.json(
      { error: "Provide audioBase64 or fallbackTranscript to save a call transcript." },
      { status: 400 }
    );
  }

  transcript = normalizeNegotiationNumbers(transcript);

  const listingId = body.listingId ?? DEMO_LISTING_ID;
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("messages")
    .insert({
      listing_id: listingId,
      sender_role: body.callerRole,
      sender_name: body.callerName?.trim() || getDefaultSenderName(body.callerRole),
      content: transcript,
      message_type: "call_transcript"
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let analysis = null;
  try {
    analysis = await runAgent(listingId);
  } catch (agentError) {
    console.error(agentError);
  }

  return NextResponse.json({ message: data, transcript, analysis });
}
