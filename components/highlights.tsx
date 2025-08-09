"use client";
import { motion } from "framer-motion";
import { Drum, Wheat, Sparkles, HeartHandshake } from "lucide-react";

const items = [
  { icon: Drum, title: "Bhangra & Giddha", text: "High‑energy performances and workshops." },
  { icon: Wheat, title: "Harvest & Vaisakhi", text: "Celebrate agrarian roots and festivals." },
  { icon: Sparkles, title: "Phulkari & Jutti", text: "Textiles, crafts, and cultural style." },
  { icon: HeartHandshake, title: "Unity & Community", text: "Bridge across borders and backgrounds." },
];

export function Highlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-2xl p-5 border bg-white/70 dark:bg-white/10 dark:border-white/10 backdrop-blur shadow-sm hover:shadow-soft transition-shadow"
        >
          <item.icon className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-semibold">{item.title}</h3>
          <p className="text-sm text-charcoal/70">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}


