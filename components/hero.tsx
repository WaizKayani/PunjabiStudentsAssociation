"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Users } from "lucide-react";

type Site = {
  name: string;
  purpose: string;
  contact: { email: string; instagram: string };
};

export function Hero({ site }: { site: Site }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 60]);
  const y2 = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15" />
        <div className="absolute inset-0 phulkari-overlay" />
      </div>
      <div className="relative container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-charcoal drop-shadow-[0_2px_0_rgba(255,255,255,0.7)]"
          >
            Celebrate Punjabi Culture at Ohio State
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-charcoal/80"
          >
            {site.purpose}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="rounded-2xl bg-primary text-white shadow-soft">
              <a href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Join PSA at OSU")}`}>
                <Mail className="mr-2 h-5 w-5" /> Join Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl border-charcoal/20">
              <Link href={site.contact.instagram} target="_blank">
                <span className="inline-flex items-center"><Instagram className="mr-2 h-5 w-5" /> Follow on Instagram</span>
              </Link>
            </Button>
            {"groupme" in site.contact && (
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-charcoal/20">
                <Link href={(site as any).contact.groupme} target="_blank">
                  <span className="inline-flex items-center"><Users className="mr-2 h-5 w-5" /> Join GroupMe</span>
                </Link>
              </Button>
            )}
          </motion.div>
        </div>

        {/* cultural floating motifs removed per request */}
      </div>
    </section>
  );
}


