import { DEFAULT_VOICE_IDS } from "@/lib/constants";
import type { AgentRole } from "@/types";

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

export function hasElevenLabsConfig() {
  return Boolean(ELEVENLABS_API_KEY);
}

export async function textToSpeech(text: string, role: AgentRole) {
  if (!ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is not configured.");
  }

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${DEFAULT_VOICE_IDS[role]}`, {
    method: "POST",
    headers: {
      "xi-api-key": ELEVENLABS_API_KEY,
      "Content-Type": "application/json",
      Accept: "audio/mpeg"
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_turbo_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.8
      }
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`ElevenLabs TTS failed: ${message}`);
  }

  return response.arrayBuffer();
}

export async function speechToText(audioBlob: Blob) {
  if (!ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is not configured.");
  }

  const formData = new FormData();
  formData.append("file", audioBlob, "recording.webm");
  formData.append("model_id", "scribe_v2");

  const response = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
    method: "POST",
    headers: {
      "xi-api-key": ELEVENLABS_API_KEY
    },
    body: formData
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`ElevenLabs STT failed: ${message}`);
  }

  const data = (await response.json()) as { text?: string };
  return data.text?.trim() ?? "";
}
