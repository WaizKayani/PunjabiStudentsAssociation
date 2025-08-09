import events from "@/content/events.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { generateICSForEvent } from "@/lib/ics";
import Link from "next/link";
import { formatDateISOToHuman } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return events.map(e => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ev = events.find(e => e.slug === params.slug);
  return { title: ev ? ev.title : "Event" };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const ev = events.find(e => e.slug === params.slug);
  if (!ev) return notFound();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ev.address || ev.location || "Ohio Union")}&output=embed`;
  const icsHref = generateICSForEvent(ev);

  return (
    <main>
      <Container className="py-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold">{ev.title}</h1>
          <p className="text-charcoal/70 mt-2">{ev.description}</p>
          <div className="mt-4 text-sm text-charcoal/80 space-y-1">
            <div><strong>Date:</strong> {formatDateISOToHuman(ev.date, { dateStyle: "full", timeZone: "UTC" })}</div>
            {ev.time && <div><strong>Time:</strong> {ev.time}</div>}
            {ev.location && <div><strong>Location:</strong> {ev.location}</div>}
            {ev.address && <div><strong>Address:</strong> {ev.address}</div>}
          </div>
          <div className="mt-6 flex gap-3">
            {ev.rsvpUrl && (
              <Button asChild className="rounded-2xl bg-primary text-white"><Link href={ev.rsvpUrl} target="_blank">RSVP</Link></Button>
            )}
            <Button asChild variant="outline" className="rounded-2xl"><a href={icsHref} download={`${ev.slug}.ics`}>Add to Calendar</a></Button>
          </div>
        </div>

        {ev.image && (
          <div className="relative mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl">
            <Image src={ev.image} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <iframe title="Map" src={mapSrc} className="h-72 w-full rounded-xl border dark:border-white/10" loading="lazy" />
          <div className="rounded-2xl border bg-white dark:bg-white/10 dark:border-white/10 p-4">
            <h3 className="font-semibold">Details</h3>
            <p className="text-sm text-charcoal/70 dark:text-offwhite/70">Tags: {(ev.tags || []).join(", ") || "—"}</p>
          </div>
        </div>
      </Container>
    </main>
  );
}


