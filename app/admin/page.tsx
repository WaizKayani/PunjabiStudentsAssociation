import site from "@/content/site.json";
import events from "@/content/events.json";
import leaders from "@/content/leaders.json";
import { Container } from "@/components/ui/container";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default function AdminPage() {
  if (process.env.ADMIN_ENABLED !== "1") return notFound();
  return (
    <main>
      <Container className="py-10">
        <h1 className="text-2xl font-bold">Admin — Content Preview</h1>
        <section className="mt-6">
          <h2 className="font-semibold">Site</h2>
          <pre className="mt-2 rounded-lg bg-charcoal/5 p-3 text-xs overflow-x-auto">{JSON.stringify(site, null, 2)}</pre>
        </section>
        <section className="mt-6">
          <h2 className="font-semibold">Events</h2>
          <pre className="mt-2 rounded-lg bg-charcoal/5 p-3 text-xs overflow-x-auto">{JSON.stringify(events, null, 2)}</pre>
        </section>
        <section className="mt-6">
          <h2 className="font-semibold">Leaders</h2>
          <pre className="mt-2 rounded-lg bg-charcoal/5 p-3 text-xs overflow-x-auto">{JSON.stringify(leaders, null, 2)}</pre>
        </section>
      </Container>
    </main>
  );
}


