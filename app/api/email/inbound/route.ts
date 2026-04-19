import { NextRequest, NextResponse } from "next/server";

import { runAgent } from "@/lib/agent";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { isInboundEmailAuthorized, parseEmailSender } from "@/lib/email";
import { getSupabaseServerClient, isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";

export async function GET(request: NextRequest) {
  const tokenConfigured = Boolean(process.env.POSTMARK_INBOUND_TOKEN);
  const tokenAccepted = isInboundEmailAuthorized(request);
  const supabaseConfigured = isSupabaseServerConfigured();

  return NextResponse.json(
    {
      status: supabaseConfigured && tokenAccepted ? "ok" : "needs_attention",
      route: "postmark_inbound",
      webhookReachable: true,
      tokenConfigured,
      tokenAccepted,
      supabaseConfigured,
      listingId: DEMO_LISTING_ID,
      knownSenders: {
        seller: process.env.SELLER_AGENT_EMAIL ?? null,
        buyer: process.env.BUYER_AGENT_EMAIL ?? null
      },
      inboundAddress: process.env.POSTMARK_INBOUND_ADDRESS ?? null,
      appUrl: process.env.NEXT_PUBLIC_APP_URL ?? null,
      note: tokenConfigured
        ? "Pass ?token=POSTMARK_INBOUND_TOKEN if you want to verify strict token auth from a browser."
        : "No inbound token is configured; webhook auth is currently open."
    },
    {
      status: supabaseConfigured ? 200 : 503
    }
  );
}

export async function POST(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  if (!isInboundEmailAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized inbound webhook request." }, { status: 401 });
  }

  const payload = (await request.json()) as {
    From?: string;
    FromFull?: { Email?: string; Name?: string };
    Subject?: string;
    TextBody?: string;
    StrippedTextReply?: string;
    Date?: string;
  };

  const fromEmail = payload.FromFull?.Email ?? payload.From ?? "";
  const senderRole = parseEmailSender(fromEmail);
  if (!senderRole) {
    return NextResponse.json({ status: "ignored", reason: "Unknown sender." });
  }

  const subject = payload.Subject?.trim() || "(no subject)";
  const textBody = payload.StrippedTextReply?.trim() || payload.TextBody?.trim() || "";
  const receivedAt = payload.Date ?? new Date().toISOString();
  const content = `Subject: ${subject}\n\n${textBody}`;

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("messages")
    .insert({
      listing_id: DEMO_LISTING_ID,
      sender_role: senderRole,
      sender_name: payload.FromFull?.Name?.trim() || fromEmail,
      content,
      message_type: "email",
      created_at: receivedAt
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let analysis = null;
  try {
    analysis = await runAgent(DEMO_LISTING_ID);
  } catch (agentError) {
    console.error(agentError);
  }

  return NextResponse.json({ status: "ok", message: data, analysis });
}
