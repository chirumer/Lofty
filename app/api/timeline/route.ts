import { NextRequest, NextResponse } from "next/server";

import { DEMO_LISTING_ID } from "@/lib/constants";
import { getSupabaseServerClient, isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";

export async function GET(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const listingId = request.nextUrl.searchParams.get("listingId") ?? DEMO_LISTING_ID;
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("negotiation_events")
    .select("*")
    .eq("listing_id", listingId)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ events: data ?? [] });
}
