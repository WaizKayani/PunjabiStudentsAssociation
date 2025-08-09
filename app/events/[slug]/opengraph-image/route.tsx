import { ImageResponse } from "@vercel/og";
import events from "@/content/events.json";

export const runtime = "edge";

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const ev = events.find(e => e.slug === params.slug);
  if (!ev) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 60,
          background: "linear-gradient(135deg,#8B1C1C,#1F3B7A)",
          color: "white",
          fontSize: 40,
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800 }}>{ev.title}</div>
        <div style={{ marginTop: 12, fontSize: 28 }}>{new Date(ev.date).toLocaleDateString(undefined, { dateStyle: "full" })}</div>
        {ev.time ? <div style={{ fontSize: 24 }}>{ev.time}</div> : null}
        {ev.location ? <div style={{ fontSize: 24 }}>{ev.location}</div> : null}
        <div style={{ marginTop: 24, fontSize: 20, opacity: 0.9 }}>Punjabi Students Association — Ohio State</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}


