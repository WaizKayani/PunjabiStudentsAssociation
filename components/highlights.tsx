"use client";
import { motion } from "framer-motion";
import { Users, Calendar, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, number: "7", title: "Leadership Members", text: "Dedicated team leading PSA forward." },
  { icon: Calendar, number: "7+", title: "Events This Semester", text: "Cultural celebrations and workshops." },
  { icon: Award, number: "2024", title: "Re-established", text: "Building on our rich heritage." },
  { icon: Clock, number: "200+", title: "Active Members", text: "Growing Punjabi community at OSU." },
];

export function Highlights() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-8">Our Growing Community</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl p-6 border bg-white/70 dark:bg-white/10 dark:border-white/10 backdrop-blur shadow-sm hover:shadow-soft transition-shadow"
          >
            <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
            <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
            <p className="text-sm text-charcoal/70">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


