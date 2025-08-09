"use client";
import site from "@/content/site.json";
import { useEffect, useState } from "react";

export function Announcement() {
  const [dismissed, setDismissed] = useState<boolean>(false);
  useEffect(() => {
    setDismissed(localStorage.getItem("psa_announcement_dismissed") === "1");
  }, []);
  if (!site.announcement?.enabled || dismissed) return null;
  return (
    <div className="bg-accent/20 text-charcoal text-sm">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between gap-3">
        <div>{site.announcement.message}</div>
        <button
          className="rounded-md border px-2 py-1 text-xs"
          onClick={() => {
            localStorage.setItem("psa_announcement_dismissed", "1");
            setDismissed(true);
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}


