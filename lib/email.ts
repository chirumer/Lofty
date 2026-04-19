import type { AgentRole } from "@/types";

const KNOWN_AGENTS: Record<string, AgentRole> = {
  [(process.env.SELLER_AGENT_EMAIL ?? "seller.agent@example.com").toLowerCase()]: "seller_agent",
  [(process.env.BUYER_AGENT_EMAIL ?? "buyer.agent@example.com").toLowerCase()]: "buyer_agent"
};

export function parseEmailSender(email: string): AgentRole | null {
  return KNOWN_AGENTS[email.toLowerCase()] ?? null;
}

export function isInboundEmailAuthorized(request: Request) {
  const configuredToken = process.env.POSTMARK_INBOUND_TOKEN;
  if (!configuredToken) {
    return true;
  }

  const url = new URL(request.url);
  const authorizationHeader = request.headers
    .get("authorization")
    ?.replace(/^Bearer\s+/i, "")
    .trim();
  const token =
    authorizationHeader ??
    request.headers.get("x-webhook-token")?.trim() ??
    url.searchParams.get("token")?.trim();

  if (token === configuredToken) {
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (!configuredAppUrl) {
      return false;
    }

    try {
      const configuredHost = new URL(configuredAppUrl).host;
      const requestHosts = [
        request.headers.get("x-forwarded-host")?.trim(),
        request.headers.get("host")?.trim(),
        url.host
      ].filter(Boolean);

      return requestHosts.includes(configuredHost);
    } catch {
      return false;
    }
  }

  return false;
}
