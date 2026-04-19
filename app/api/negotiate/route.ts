import { NextRequest, NextResponse } from "next/server";

import { DEMO_LISTING_ID } from "@/lib/constants";
import { getSupabaseServerClient, isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";
import type { NegotiationStatus } from "@/types";

export async function GET(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const listingId = request.nextUrl.searchParams.get("listingId") ?? DEMO_LISTING_ID;
  const supabase = getSupabaseServerClient();

  const [{ data: listing, error: listingError }, { data: negotiation, error: negotiationError }] =
    await Promise.all([
      supabase.from("listings").select("*").eq("id", listingId).maybeSingle(),
      supabase.from("negotiations").select("*").eq("listing_id", listingId).maybeSingle()
    ]);

  if (listingError || negotiationError) {
    return NextResponse.json(
      { error: listingError?.message ?? negotiationError?.message ?? "Unable to load negotiation state." },
      { status: 500 }
    );
  }

  return NextResponse.json({ listing, negotiation });
}

export async function PATCH(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const body = (await request.json()) as {
    listingId?: string;
    current_offer_price?: number | null;
    status?: NegotiationStatus;
    buyer_concerns?: string[];
    seller_concerns?: string[];
    agreed_terms?: string[];
    pending_items?: string[];
    agent_summary?: string;
  };

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("negotiations")
    .upsert({
      listing_id: body.listingId ?? DEMO_LISTING_ID,
      current_offer_price: body.current_offer_price ?? null,
      status: body.status ?? "active",
      buyer_concerns: body.buyer_concerns ?? [],
      seller_concerns: body.seller_concerns ?? [],
      agreed_terms: body.agreed_terms ?? [],
      pending_items: body.pending_items ?? [],
      agent_summary: body.agent_summary ?? null,
      last_analyzed_at: new Date().toISOString()
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ negotiation: data });
}
