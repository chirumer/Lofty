const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const DEFAULT_MODELS = [
  "google/gemma-4-26b-a4b-it:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "google/gemini-flash-1.5"
];

export function hasOpenRouterConfig() {
  return Boolean(OPENROUTER_API_KEY);
}

export async function callLLM(systemPrompt: string, userPrompt: string, model = DEFAULT_MODELS[0]) {
  if (!OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not configured.");
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      "X-Title": "Lofty Negotiation Analyst"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.2,
      max_tokens: 1200
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`OpenRouter request failed for ${model}: ${message}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new Error(`OpenRouter returned no content for ${model}.`);
  }

  return content;
}

export async function callLLMWithFallback(systemPrompt: string, userPrompt: string) {
  const failures: string[] = [];

  for (const model of DEFAULT_MODELS) {
    try {
      return await callLLM(systemPrompt, userPrompt, model);
    } catch (error) {
      failures.push(error instanceof Error ? error.message : `Unknown error for ${model}`);
    }
  }

  throw new Error(failures.join(" | "));
}
