import Link from "next/link";
import site from "@/content/site.json";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/70 dark:bg-charcoal/60 dark:border-white/10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold">{site.name}</div>
          <div className="text-charcoal/70">{site.campus}</div>
        </div>
        <div>
          <div className="font-semibold">Connect</div>
          <div className="mt-2 space-y-1">
            <a className="text-primary underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <div><Link className="text-primary underline" href={site.contact.instagram} target="_blank">Instagram</Link></div>
            {site.contact.groupme && (
              <div><Link className="text-primary underline" href={site.contact.groupme} target="_blank">GroupMe</Link></div>
            )}
          </div>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <div className="mt-2 space-y-1">
            <Link href="/events" className="underline">Events</Link>
            <div className="text-xs text-charcoal/60 dark:text-offwhite/60">Unofficial student organization site</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


