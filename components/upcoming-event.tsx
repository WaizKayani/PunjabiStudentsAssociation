"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDateISOToHuman } from "@/lib/utils";
import type { EventItem } from "@/lib/types";
import { generateICSForEvent } from "@/lib/ics";

export function UpcomingEvent({ event }: { event: EventItem }) {
  if (!event) return null;
  const icsHref = generateICSForEvent(event);
  const mapQuery = event.address || event.location || "Ohio Union, 1739 N High St, Columbus, OH 43210";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl p-6 glass"
    >
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-charcoal">Upcoming</span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold">{event.title}</h2>
        <p className="mt-1 text-charcoal/70">{event.description}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-charcoal/80">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {formatDateISOToHuman(event.date, { dateStyle: "full", timeZone: "UTC" })}</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {event.time}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {event.rsvpUrl && (
            <Button asChild className="rounded-2xl bg-primary text-white">
              <Link href={event.rsvpUrl} target="_blank">RSVP</Link>
            </Button>
          )}
          <Button asChild variant="outline" className="rounded-2xl">
            <a href={icsHref} download={`${event.slug}.ics`}>Add to Calendar</a>
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        {event.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image src={event.image} alt={event.title} fill className="object-cover" />
          </div>
        )}
        <iframe
          title="Event map"
          src={mapSrc}
          className="h-48 w-full rounded-xl border"
          loading="lazy"
        />
      </div>
    </motion.article>
  );
}


