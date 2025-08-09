export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body?.email === "string" ? body.email : null;
  if (!email) {
    return new Response(JSON.stringify({ ok: false, error: "email required" }), { status: 400 });
  }
  return new Response(JSON.stringify({ ok: true, message: "Stubbed subscription" }), { status: 200 });
}


