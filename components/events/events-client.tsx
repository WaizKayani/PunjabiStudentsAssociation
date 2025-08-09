"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { formatDateISOToHuman } from "@/lib/utils";

type Event = {
  slug: string; title: string; date: string; image?: string; tags?: string[];
};

export function EventsClient({ events }: { events: Event[] }) {
  const [tag, setTag] = useState<string | "all">("all");
  const tags = useMemo(() => Array.from(new Set(events.flatMap(e => e.tags || []))), [events]);
  const filtered = useMemo(() => (tag === "all" ? events : events.filter(e => (e.tags || []).includes(tag))), [tag, events]);
  const upcoming = filtered.filter(e => new Date(e.date) >= new Date()).sort((a, b) => +new Date(a.date) - +new Date(b.date));
  const past = filtered.filter(e => new Date(e.date) < new Date()).sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <section className="mt-8 space-y-8">
      <div className="flex items-center gap-2 text-sm">
        <button className={`rounded-full border px-3 py-1 ${tag === "all" ? "bg-charcoal text-white" : "bg-white dark:bg-white/10 dark:border-white/20 dark:text-offwhite/90"}`} onClick={() => setTag("all")}>All</button>
        {tags.map(t => (
          <button key={t} className={`rounded-full border px-3 py-1 ${tag === t ? "bg-charcoal text-white" : "bg-white dark:bg-white/10 dark:border-white/20 dark:text-offwhite/90"}`} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      {upcoming.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Upcoming</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map(ev => (
              <Link key={ev.slug} href={`/events/${ev.slug}`} className="group rounded-2xl overflow-hidden border bg-white dark:bg-white/10 dark:border-white/10 hover:shadow-soft transition-shadow">
                {ev.image && (
                  <div className="relative aspect-[16/9]"><Image src={ev.image} alt="" fill className="object-cover" /></div>
                )}
                <div className="p-4">
                  <div className="text-sm text-charcoal/70 dark:text-offwhite/70">{formatDateISOToHuman(ev.date)}</div>
                  <div className="font-semibold group-hover:underline">{ev.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold">Past</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {past.map(ev => (
            <Link key={ev.slug} href={`/events/${ev.slug}`} className="group rounded-2xl overflow-hidden border bg-white dark:bg-white/10 dark:border-white/10 hover:shadow-soft transition-shadow">
              {ev.image && (
                <div className="relative aspect-[16/9]"><Image src={ev.image} alt="" fill className="object-cover" /></div>
              )}
              <div className="p-4">
                <div className="text-sm text-charcoal/70 dark:text-offwhite/70">{formatDateISOToHuman(ev.date)}</div>
                <div className="font-semibold group-hover:underline">{ev.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


