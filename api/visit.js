export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: "Missing env vars" });
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

    return res.status(200).json({ count: visitors.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
