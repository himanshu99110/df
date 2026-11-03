'use client'
import { motion } from "framer-motion";
import {
  Bell,
  UsersRound,
  SlidersHorizontal,
  ScrollText,
  ShieldCheck,
  Smartphone,
  MoonStar,
  TriangleAlert,
  Gauge,
} from "lucide-react";
import { SectionHeader } from "./BentoFeatures";

const cards = [
  { icon: Bell, title: "Notifications", body: "In-app bell with read/unread tracking and deep links straight to the conversation or deal." },
  { icon: UsersRound, title: "Team & roles", body: "Invite teammates, assign roles and control who can send, edit or administer." },
  { icon: SlidersHorizontal, title: "Fields & tags", body: "Manage custom fields, colored tags, templates and WhatsApp setup from one settings hub." },
  { icon: ScrollText, title: "Audit log", body: "Every sensitive action recorded — who changed what, when, and from where." },
  { icon: ShieldCheck, title: "Security", body: "OTP challenges, granular permissions and encryption of every stored secret." },
  { icon: Gauge, title: "Rate limiting", body: "Abuse protection on the public API and on high-volume sending paths." },
  { icon: MoonStar, title: "Dark & light theme", body: "A theme that follows your system preference across the whole workspace." },
  { icon: Smartphone, title: "Mobile responsive", body: "Inbox, pipelines and dashboards built to work from a phone on the move." },
  { icon: TriangleAlert, title: "Error states", body: "Graceful failure handling with retry paths instead of dead-end screens." },
];

export function PlatformEssentials() {
  return (
    <section id="platform" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Platform essentials"
          title="The unglamorous parts, done properly"
          subtitle="Settings, security and operations you only notice when they're missing."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                  <c.icon className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold tracking-tight text-gray-900">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
