import { NextRequest, NextResponse } from "next/server";

import { runAgent } from "@/lib/agent";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { getSupabaseServerClient, isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";
import { getDefaultSenderName } from "@/lib/utils";
import type { AgentRole } from "@/types";

export async function GET(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const listingId = request.nextUrl.searchParams.get("listingId") ?? DEMO_LISTING_ID;
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("listing_id", listingId)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ messages: data ?? [] });
}

export async function POST(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const body = (await request.json()) as {
    listing_id?: string;
    content?: string;
    sender_role?: AgentRole;
    sender_name?: string;
    message_type?: "chat" | "call_transcript" | "email";
  };

  if (!body.content?.trim() || !body.sender_role) {
    return NextResponse.json({ error: "content and sender_role are required." }, { status: 400 });
  }

  const payload = {
    listing_id: body.listing_id ?? DEMO_LISTING_ID,
    content: body.content.trim(),
    sender_role: body.sender_role,
    sender_name: body.sender_name?.trim() || getDefaultSenderName(body.sender_role),
    message_type: body.message_type ?? "chat"
  };

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from("messages").insert(payload).select("*").single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let analysis = null;
  try {
    analysis = await runAgent(payload.listing_id);
  } catch (agentError) {
    console.error(agentError);
  }

  return NextResponse.json({ message: data, analysis });
}
