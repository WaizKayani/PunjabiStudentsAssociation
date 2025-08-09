import type { MetadataRoute } from "next";
import events from "@/content/events.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://psa-osu.vercel.app";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/events`, lastModified: now },
    ...events.map(e => ({ url: `${base}/events/${e.slug}`, lastModified: new Date(e.date) })),
    { url: `${base}/leadership`, lastModified: now },
    { url: `${base}/gallery`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
  ];
}


