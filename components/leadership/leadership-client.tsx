"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Leader = { name: string; role: string; blurb?: string; photo?: string };

export function LeadershipClient({ leaders }: { leaders: Leader[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {leaders.map((leader, i) => (
        <motion.article
          key={leader.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group rounded-2xl border bg-white dark:bg-white/10 dark:border-white/10 p-4 shadow-sm hover:shadow-soft transition-shadow"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image src={leader.photo || "/images/placeholders/leader.svg"} alt={leader.name} fill className="object-cover object-top group-hover:scale-[1.03] transition-transform" />
          </div>
          <div className="mt-3 text-sm text-accent font-semibold">{leader.role}</div>
          <h3 className="font-semibold">{leader.name}</h3>
        </motion.article>
      ))}
    </div>
  );
}


