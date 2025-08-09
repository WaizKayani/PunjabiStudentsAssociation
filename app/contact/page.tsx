import site from "@/content/site.json";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Users } from "lucide-react";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white dark:bg-white/10 dark:border-white/10 p-6">
            <h2 className="font-semibold">Get in touch</h2>
            <p className="text-sm text-charcoal/70">We would love to hear from you.</p>
            <div className="mt-4 space-y-2">
              <div>Email: <a className="text-primary underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></div>
              <div>Instagram: <Link className="text-primary underline" href={site.contact.instagram} target="_blank">@punjabi.osu</Link></div>
              {site.contact.groupme && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <Link className="text-primary underline" href={site.contact.groupme} target="_blank">Join our GroupMe</Link>
                </div>
              )}
            </div>
            <div className="mt-6">
              <a className="inline-flex items-center rounded-2xl bg-primary px-4 py-2 text-white" href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Join PSA at OSU")}`}>Join PSA</a>
            </div>
          </div>
          <div className="rounded-2xl border bg-white dark:bg-white/10 dark:border-white/10 p-6">
            <h2 className="font-semibold">Suggestions</h2>
            <p className="text-sm text-charcoal/70">Anonymous suggestion box (coming soon).</p>
          </div>
        </div>
      </Container>
    </main>
  );
}


