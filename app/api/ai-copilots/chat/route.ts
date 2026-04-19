import { NextRequest, NextResponse } from "next/server";

import {
  buildCopilotSystemInstruction,
  getCopilotModelOption,
  isCopilotModelId,
  type CopilotChatMessage,
  type CopilotChatRequest,
  type CopilotChatResponse
} from "@/lib/ai-copilots";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const GEMINI_TIMEOUT_MS = 20000;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type GeminiGenerateContentResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
    finishReason?: string;
  }>;
  promptFeedback?: {
    blockReason?: string;
  };
  error?: {
    message?: string;
  };
};

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as CopilotChatRequest | null;

  const modelId = body?.modelId?.trim();
  if (!modelId || !isCopilotModelId(modelId)) {
    const response: CopilotChatResponse = {
      error: "Choose one of the supported Lofty AI models before sending a message."
    };
    return NextResponse.json(response, { status: 400 });
  }

  const messages = normalizeMessages(body?.messages);
  if (messages.length === 0) {
    const response: CopilotChatResponse = {
      error: "Send a message before asking AI Copilots to respond."
    };
    return NextResponse.json(response, { status: 400 });
  }

  if (!GEMINI_API_KEY) {
    const response: CopilotChatResponse = {
      error: "GEMINI_API_KEY is not configured for AI Copilots yet."
    };
    return NextResponse.json(response, { status: 503 });
  }

  try {
    const systemInstruction = buildCopilotSystemInstruction(
      body?.context ?? {
        activeView: "home",
        roleName: "Unknown",
        enabledFeatures: []
      }
    );

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);

    const response = await fetch(`${GEMINI_API_BASE_URL}/${modelId}:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        contents: messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }]
        })),
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
          responseMimeType: "text/plain"
        }
      })
    }).finally(() => {
      clearTimeout(timeoutId);
    });

    const payload = (await response.json().catch(() => ({}))) as GeminiGenerateContentResponse;

    if (!response.ok) {
      const providerMessage = payload.error?.message?.trim();
      const responseBody: CopilotChatResponse = {
        error: providerMessage ? `Gemini request failed: ${providerMessage}` : "Gemini could not respond right now. Please try again."
      };
      return NextResponse.json(responseBody, { status: 502 });
    }

    const content = extractText(payload);
    if (!content) {
      const responseBody: CopilotChatResponse = {
        error:
          payload.promptFeedback?.blockReason
            ? `Gemini blocked this prompt (${payload.promptFeedback.blockReason.toLowerCase()}). Please rephrase and try again.`
            : "Gemini returned an empty response. Please try again."
      };
      return NextResponse.json(responseBody, { status: 502 });
    }

    const modelOption = getCopilotModelOption(modelId);
    const assistantMessage: CopilotChatMessage = {
      id: `copilot-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      role: "assistant",
      content,
      createdAt: new Date().toISOString()
    };

    const responseBody: CopilotChatResponse = {
      message: assistantMessage
    };

    return NextResponse.json(responseBody, {
      headers: {
        "X-Lofty-Copilot-Model": modelOption.label
      }
    });
  } catch (error) {
    console.error(error);

    if (error instanceof Error && error.name === "AbortError") {
      const response: CopilotChatResponse = {
        error: "Gemini took too long to respond. Please try again."
      };
      return NextResponse.json(response, { status: 504 });
    }

    const response: CopilotChatResponse = {
      error: "AI Copilots ran into a temporary issue talking to Gemini. Please try again."
    };
    return NextResponse.json(response, { status: 500 });
  }
}

function normalizeMessages(messages: CopilotChatRequest["messages"]) {
  if (!messages?.length) {
    return [];
  }

  return messages
    .filter((message): message is CopilotChatMessage => Boolean(message?.content && message.role && message.createdAt && message.id))
    .map((message) => ({
      ...message,
      content: message.content.trim()
    }))
    .filter((message) => (message.role === "user" || message.role === "assistant") && message.content.length > 0)
    .slice(-24);
}

function extractText(payload: GeminiGenerateContentResponse) {
  return (
    payload.candidates?.[0]?.content?.parts
      ?.map((part) => part.text?.trim() ?? "")
      .filter(Boolean)
      .join("\n")
      .trim() ?? ""
  );
}
