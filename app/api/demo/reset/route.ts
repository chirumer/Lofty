import { NextResponse } from "next/server";

import { DEMO_EVENTS, DEMO_LISTING, DEMO_MESSAGES, DEMO_NEGOTIATION } from "@/lib/demo";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { getSupabaseServerClient, isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";

export async function POST() {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const supabase = getSupabaseServerClient();

  const { error: listingError } = await supabase.from("listings").upsert(DEMO_LISTING);
  if (listingError) {
    return NextResponse.json({ error: listingError.message }, { status: 500 });
  }

  const { error: eventsDeleteError } = await supabase.from("negotiation_events").delete().eq("listing_id", DEMO_LISTING_ID);
  if (eventsDeleteError) {
    return NextResponse.json({ error: eventsDeleteError.message }, { status: 500 });
  }

  const { error: messagesDeleteError } = await supabase.from("messages").delete().eq("listing_id", DEMO_LISTING_ID);
  if (messagesDeleteError) {
    return NextResponse.json({ error: messagesDeleteError.message }, { status: 500 });
  }

  const { error: negotiationError } = await supabase.from("negotiations").upsert(DEMO_NEGOTIATION);
  if (negotiationError) {
    return NextResponse.json({ error: negotiationError.message }, { status: 500 });
  }

  const { error: messagesInsertError } = await supabase.from("messages").insert(DEMO_MESSAGES);
  if (messagesInsertError) {
    return NextResponse.json({ error: messagesInsertError.message }, { status: 500 });
  }

  const { error: eventsInsertError } = await supabase.from("negotiation_events").insert(DEMO_EVENTS);
  if (eventsInsertError) {
    return NextResponse.json({ error: eventsInsertError.message }, { status: 500 });
  }

  return NextResponse.json({
    status: "ok",
    listingId: DEMO_LISTING_ID,
    seededMessages: DEMO_MESSAGES.length,
    seededEvents: DEMO_EVENTS.length
  });
}
