'use client'
import { motion } from "framer-motion";
import { Phone, Contact, LineChart } from "lucide-react";
import { SectionHeader } from "./BentoFeatures";

const steps = [
  {
    n: "01",
    icon: Phone,
    title: "Connect your WhatsApp number",
    body: "Paste your phone number ID and access token from Meta. Works with any Meta-approved WhatsApp Business API provider.",
  },
  {
    n: "02",
    icon: Contact,
    title: "Bring in your contacts",
    body: "Import a CSV, or let incoming messages build your contact list automatically. Tags and custom fields are ready from day one.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Reply, automate, measure",
    body: "Use the shared inbox with your team, set up flows for repeat work, and track what's actually moving the needle.",
  },
];

export function OnboardingSteps() {
  return (
    <section
      className="relative py-24 bg-slate-50"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="How it works"
          title="Live in under 30 minutes"
          subtitle="Most teams are up and running before their first coffee refill. No onboarding calls required."
        />

        <div className="relative mt-20 space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              style={{ top: `${120 + i * 20}px` }}
              className="sticky mx-auto max-w-3xl"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="flex flex-col gap-6 sm:items-start">
                  <span className="text-5xl font-bold tracking-tighter bg-gradient-to-br from-blue-600 to-[#25D366] bg-clip-text text-transparent tabular-nums">{s.n}</span>
                  <div className="flex items-center gap-4 sm:items-start">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                      <s.icon className="h-5 w-5" />
                    </span>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{s.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}