"use client";
import Link from "next/link";
import Image from "next/image";
import site from "@/content/site.json";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/leadership", label: "Leadership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-charcoal/60 border-b dark:border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image src={site.logo || "/favicon.svg"} alt="PSA logo" width={32} height={32} className="rounded-full bg-white" />
          <span className="sr-only">Home</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-charcoal/80 hover:text-charcoal dark:text-offwhite/80 dark:hover:text-offwhite">{l.label}</Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/80 dark:bg-charcoal/70 dark:border-white/10">
          <div className="container mx-auto px-6 py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


