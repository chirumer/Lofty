import { NextRequest, NextResponse } from "next/server";

import { runAgent } from "@/lib/agent";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { isSupabaseServerConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ error: SUPABASE_SETUP_MESSAGE }, { status: 503 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    listingId?: string;
  };

  try {
    const result = await runAgent(body.listingId ?? DEMO_LISTING_ID);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to run the agent." },
      { status: 500 }
    );
  }
}
