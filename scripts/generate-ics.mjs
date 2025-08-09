import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const eventsPath = path.join(root, "content", "events.json");
const outDir = path.join(root, "public");
const outFile = path.join(outDir, "psa.ics");

function toICSDate(date) {
  const pad = (n) => String(n).padStart(2, "0");
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

function eventToICS(e) {
  const start = new Date(e.date + (e.time ? " " + e.time : " 18:00"));
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  return [
    "BEGIN:VEVENT",
    `UID:${e.slug}@psa-osu`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${e.title}`,
    e.description ? `DESCRIPTION:${e.description}` : undefined,
    e.location ? `LOCATION:${e.location}` : undefined,
    "END:VEVENT",
  ].filter(Boolean).join("\r\n");
}

const events = JSON.parse(fs.readFileSync(eventsPath, "utf8"));
const upcoming = events.filter(e => new Date(e.date) >= new Date());
const ics = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//PSA OSU//Events//EN",
  ...upcoming.map(eventToICS),
  "END:VCALENDAR",
].join("\r\n");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ics);
console.log(`Generated ${outFile}`);


