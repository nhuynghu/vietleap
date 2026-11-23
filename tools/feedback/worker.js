// Cloudflare Worker: receives an ENCRYPTED survey response and files it as an issue
// in a PRIVATE GitHub repo. Only people with access to that repo can see the issues,
// and even they see only encrypted text (the private key is needed to read it).
//
// Worker settings (Settings > Variables and Secrets):
//   GITHUB_TOKEN  (secret)  fine-grained token, ONLY for the private repo, permission "Issues: Read and write"
//   FEEDBACK_REPO (text)    e.g. nhuynghu/vietleap-feedback
//   ALLOWED_ORIGINS (text)  e.g. https://vietleap2026.com,https://nhuynghu.github.io
export default {
  async fetch(request, env) {
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST" || !allowed.includes(origin)) return new Response("Forbidden", { status: 403, headers: cors });

    let body;
    try { body = await request.json(); } catch { return new Response("Bad request", { status: 400, headers: cors }); }
    const p = body && body.payload;
    if (typeof p !== "string" || !/^VLF1\.[A-Za-z0-9+\/=]+$/.test(p) || p.length > 60000)
      return new Response("Bad payload", { status: 400, headers: cors });

    const r = await fetch(`https://api.github.com/repos/${env.FEEDBACK_REPO}/issues`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "vietleap-feedback-worker",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "Feedback " + new Date().toISOString(), body: p }),
    });
    return new Response(r.ok ? "ok" : "error", { status: r.ok ? 200 : 502, headers: cors });
  },
};
