import { NextRequest, NextResponse } from "next/server";

import { speechToText } from "@/lib/elevenlabs";
import { normalizeNegotiationNumbers } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    audioBase64?: string;
    audioMimeType?: string;
  };

  if (!body.audioBase64) {
    return NextResponse.json({ error: "audioBase64 is required." }, { status: 400 });
  }

  try {
    const cleanedBase64 = body.audioBase64.includes(",")
      ? body.audioBase64.split(",").pop() ?? ""
      : body.audioBase64;

    if (!cleanedBase64) {
      return NextResponse.json({ error: "Unable to read audio payload." }, { status: 400 });
    }

    const audioBuffer = Buffer.from(cleanedBase64, "base64");
    const audioBlob = new Blob([audioBuffer], {
      type: body.audioMimeType?.trim() || "audio/webm"
    });

    const transcript = normalizeNegotiationNumbers(await speechToText(audioBlob));

    if (!transcript) {
      return NextResponse.json({ error: "No transcript was returned from ElevenLabs." }, { status: 503 });
    }

    return NextResponse.json({ transcript });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to transcribe audio." },
      { status: 503 }
    );
  }
}
