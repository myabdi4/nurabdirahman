export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  const supabaseUrl = globalThis.process?.env?.VITE_SUPABASE_URL;
  const supabaseKey = globalThis.process?.env?.VITE_SUPABASE_ANON_KEY;

  const twentyFourHoursAgo = new Date(
    Date.now() - 24 * 60 * 60 * 1000,
  ).toISOString();

  // Check if this IP already visited in last 24 hours
  const checkRes = await fetch(
    `${supabaseUrl}/rest/v1/visits?ip=eq.${ip}&visited_at=gte.${twentyFourHoursAgo}`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    },
  );

  const existing = await checkRes.json();

  // Only insert if not already visited
  if (existing.length === 0) {
    await fetch(`${supabaseUrl}/rest/v1/visits`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ip }),
    });
  }

  // Get total unique visitors in last 24 hours
  const countRes = await fetch(
    `${supabaseUrl}/rest/v1/visits?visited_at=gte.${twentyFourHoursAgo}&select=ip`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "count=exact",
      },
    },
  );

  const visitors = await countRes.json();

  return new Response(JSON.stringify({ count: visitors.length }), {
    headers: { "Content-Type": "application/json" },
  });
}
