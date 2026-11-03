'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const featuresList = [
  {
    title: "Send personalized media & docs",
    description: "Easily attach and send pictures, videos, documents, and personalized text to your contacts in a single click.",
    icon: '/images/wcrm/media-icon.png'
  },
  {
    title: "Send bulk messages from Excel",
    description: "Import your contacts directly from Excel or CSV files to instantly launch large-scale messaging campaigns.",
    icon: '/images/wcrm/excel-icon.png'
  },
  {
    title: "Send to group members 1 by 1",
    description: "Extract members from your groups and send them individual messages privately for higher engagement.",
    icon: '/images/wcrm/message-icon.png'
  },
  {
    title: "Save your promotion templates",
    description: "Create and store multiple promotional templates so you can reuse your best-performing campaigns anytime.",
    icon: '/images/wcrm/template-icon.png'
  },
  {
    title: "Customizable sending interval",
    description: "Set smart delays between messages to mimic human behavior and keep your account safe from restrictions.",
    icon: '/images/wcrm/time-icon.png'
  },
  {
    title: "Current sending progress",
    description: "Monitor your campaign's performance in real-time with live progress tracking and delivery updates.",
    icon: '/images/wcrm/progress-icon.png'
  },
  {
    title: "Pause and resume at any time",
    description: "Take full control of your broadcasts with the ability to pause campaigns and resume them whenever you're ready.",
    icon: '/images/wcrm/broadcast-icon.png'
  },
  {
    title: "Export sending result list",
    description: "Download comprehensive delivery reports to analyze success rates and manage your contact lists effectively.",
    icon: '/images/wcrm/result-icon.png'
  },
  {
    title: "One-click retry failed",
    description: "Automatically identify unsent messages and attempt to resend them with a single click to ensure maximum reach.",
    icon: '/images/wcrm/retry-icon.png'
  }
];

// framer-motion variants for the child cards
const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};
export function Features() {
  return (
    <section
      id="features"
      className="relative py-8"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="All Features"
          subtitle="Try the safest messaging tool, send bulk messages  and speed up your marketing now!"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="group relative flex flex-col items-center text-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:shadow-[0_14px_30px_-14px_rgba(0,0,0,0.25)] hover:-translate-y-2"
            >
              <div className="flex size-14 items-center justify-center">
                <Image src={feature.icon} alt={feature.title} width={100} height={100} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-slate-900 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg">{subtitle}</p>}
    </motion.div>
  );
}