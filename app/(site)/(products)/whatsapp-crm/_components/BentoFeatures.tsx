'use client'
import { motion } from "framer-motion";
import { Inbox, Users, Megaphone, Sparkles, BarChart3, Tag, Zap, MessageSquarePlus, GitBranch } from "lucide-react";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function BentoFeatures() {
  return (
    <section
      id="features"
      className="relative py-24 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Everything you need"
          title="A CRM built around the conversation"
          subtitle="Five tools that most teams cobble together — designed as one product."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[repeat(4,minmax(140px,auto))]"
        >
          {/* Shared Inbox — hero card */}
          <motion.div variants={item} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-6 pb-0 md:col-span-4 md:row-span-2">
            <FeatureLabel icon={Inbox} title="Shared Inbox" />
            <p className="mt-3 mb-6 max-w-md text-sm text-gray-600">
              Every WhatsApp conversation in one place. Assign threads, reply as a team,
              leave internal notes — never drop a lead because two people thought the
              other was on it.
            </p>
            {/* <SharedInboxViz /> */}
            <div className="w-full rounded-t-4xl overflow-hidden md:max-h-[250px]">
              <Image
                src="/images/wcrm/inbox-2.png"
                alt="Shared Inbox"
                width={800}
                height={200}
                className="w-full object-top"
              />
            </div>
          </motion.div>

          {/* Contact Hub */}
          <motion.div variants={item} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-6 pb-0 pr-0 md:col-span-2 md:row-span-2">
            <div className="flex flex-col justify-between h-full">
              <div>
                <FeatureLabel icon={Users} title="Contact Hub" />
                <p className="mt-3 text-sm mb-6 text-gray-600">
                  Tags, custom fields, notes, automatic deduplication. Import from CSV.
                </p>
              </div>
              {/* <div className="mt-6 space-y-2">
              {["VIP", "Trial", "Enterprise", "Newsletter"].map((tag, i) => (
                <div key={tag} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-xs border border-gray-100">
                  <span className="flex items-center gap-2 text-gray-700"><Tag className="h-3 w-3 text-blue-500" /> {tag}</span>
                  <span className="text-gray-500 font-medium">{[128, 412, 24, 891][i]}</span>
                </div>
              ))}
            </div> */}
              <div className="w-full rounded-t-4xl overflow-hidden md:max-h-[250px]">
                <Image
                  src="/images/wcrm/contact.png"
                  alt="Shared Inbox"
                  width={600}
                  height={600}
                  className="w-full object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Broadcast */}
          <motion.div variants={item} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:col-span-3 md:row-span-2">
            <FeatureLabel icon={Megaphone} title="Broadcast Campaigns" />
            <p className="mt-3 text-sm text-gray-600">
              Send Meta-approved templates to segmented lists. Track delivery, reads and replies in real time.
            </p>
            <BroadcastViz />
          </motion.div>

          <motion.div
  variants={item}
  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:col-span-3 md:row-span-2"
>
  <FeatureLabel icon={Zap} title="Automations" />

  <p className="mt-3 text-sm text-gray-600">
    Automate repetitive WhatsApp tasks with visual workflows. Trigger actions
    from new messages, keywords, tags, schedules, or contact changes — then
    route leads, send messages, create deals, and more.
  </p>

  <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs">
    <div className="flex items-center gap-1.5 text-[10px] text-blue-600 font-medium">
      <Zap className="h-3 w-3" /> Workflow · Lead automation
    </div>

    <div className="mt-3 space-y-2">
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-white border border-blue-100 text-blue-600">
          <MessageSquarePlus className="h-3.5 w-3.5" />
        </span>
        <span className="text-gray-700">New WhatsApp message</span>
      </div>

      <div className="ml-3 h-3 border-l border-blue-200" />

      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-white border border-blue-100 text-blue-600">
          <GitBranch className="h-3.5 w-3.5" />
        </span>
        <span className="text-gray-700">If message contains a keyword</span>
      </div>

      <div className="ml-3 h-3 border-l border-blue-200" />

      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-white border border-blue-100 text-blue-600">
          <Zap className="h-3.5 w-3.5" />
        </span>
        <span className="text-gray-700">Send template + create deal</span>
      </div>
    </div>
  </div>
</motion.div>

          {/* Analytics */}
          <motion.div variants={item} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:col-span-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <FeatureLabel icon={BarChart3} title="Real-Time Analytics" />
                <p className="mt-3 max-w-md text-sm text-gray-600">
                  Response times, daily volume, pipeline value. See what's working without building dashboards.
                </p>
              </div>
              <AnalyticsViz />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureLabel({ icon: Icon, title }: { icon: typeof Inbox; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="text-base font-semibold tracking-tight text-gray-900">{title}</h3>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base">{subtitle}</p>}
    </motion.div>
  );
}

function SharedInboxViz() {
  return (
    <div className="pointer-events-none absolute inset-x-6 bottom-0 top-32 overflow-hidden rounded-t-xl border border-gray-200 bg-gray-50 shadow-inner">
      <div className="grid grid-cols-3 h-full text-[10px]">
        {["Priya", "Jonas", "Mira"].map((agent, ai) => (
          <div key={agent} className="border-r border-gray-200 last:border-r-0 p-2 space-y-1.5">
            <div className="flex items-center gap-1.5 font-medium text-gray-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" /> {agent}
            </div>
            {[0, 1, 2].map(i => (
              <div key={i} className="rounded-md bg-white border border-gray-100 shadow-sm px-2 py-1.5">
                <div className="h-1.5 w-16 rounded bg-gray-200" />
                <div className="mt-1 h-1 w-24 rounded bg-gray-100" />
                {ai === 0 && i === 0 && <span className="mt-1 inline-block rounded bg-blue-50 border border-blue-100 px-1 py-0.5 text-[8px] font-medium text-blue-600">note</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function BroadcastViz() {
  return (
    <div className="mt-5 space-y-2">
      {[
        { label: "Q3 Launch · VIP", delivered: 892, read: 741, replied: 128 },
        { label: "Winter promo · All", delivered: 3412, read: 2891, replied: 402 },
      ].map((c) => (
        <div key={c.label} className="rounded-xl bg-gray-50 border border-gray-100 p-3">
          <div className="flex items-center justify-between text-xs font-medium text-gray-800">
            <span>{c.label}</span>
            <span className="text-[#25D366]">Live</span>
          </div>
          <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-gray-200">
            <div className="bg-[#25D366]" style={{ width: "72%" }} />
            <div className="bg-[#25D366]/40" style={{ width: "18%" }} />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-[10px] text-gray-500 font-medium">
            <span>{c.delivered.toLocaleString()} delivered</span>
            <span>{c.read.toLocaleString()} read</span>
            <span>{c.replied.toLocaleString()} replied</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyticsViz() {
  const bars = [40, 65, 48, 72, 58, 84, 68, 92, 76, 88, 62, 95];
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-3 rounded-t bg-gradient-to-t from-blue-200 to-blue-500"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}