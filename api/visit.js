export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ error: "Missing env vars" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const twentyFourHoursAgo = new Date(
    Date.now() - 24 * 60 * 60 * 1000,
  ).toISOString();

  try {
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
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
