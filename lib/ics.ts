import type { EventItem } from "@/lib/types";

function toICSDate(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

export function generateICSForEvent(event: EventItem) {
  const start = new Date(event.date + (event.time ? " " + event.time : " 18:00"));
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PSA OSU//Events//EN",
    "BEGIN:VEVENT",
    `UID:${event.slug}@psa-osu`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${event.title}`,
    event.description ? `DESCRIPTION:${event.description}` : undefined,
    event.location ? `LOCATION:${event.location}` : undefined,
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  return "data:text/calendar;charset=utf8," + encodeURIComponent(ics);
}


