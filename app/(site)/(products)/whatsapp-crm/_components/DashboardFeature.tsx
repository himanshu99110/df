'use client'
import { motion } from "framer-motion";
import { LayoutDashboard, Users, MessageSquare, Kanban, Send, IndianRupee } from "lucide-react";
import { SectionHeader } from "./BentoFeatures";
import Image from "next/image";

const stats = [
  { icon: Users, label: "Contacts", value: "12,482", delta: "+312 this week" },
  { icon: MessageSquare, label: "Conversations", value: "3,104", delta: "218 open" },
  { icon: Kanban, label: "Deals", value: "₹1,47,300", delta: "42 in pipeline" },
  { icon: Send, label: "Messages", value: "89,214", delta: "quota 72% used" },
];

const bars = [42, 58, 36, 71, 64, 88, 52, 79, 61, 93, 70, 84];
const donut = [
  { label: "Lead", value: 42, color: "#3b82f6" },
  { label: "Prospect", value: 24, color: "#25D366" },
  { label: "Customer", value: 20, color: "#f59e0b" },
  { label: "VIP", value: 9, color: "#8b5cf6" },
  { label: "Other", value: 5, color: "#94a3b8" },
];

export function DashboardFeature() {
  return (
    <section id="dashboard" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Dashboard"
          title="Your whole workspace in one glance"
          subtitle="Stat cards, category charts and multi-currency reporting — INR by default, switchable per workspace."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
        >
          <div>
            <Image src="/images/wcrm/dash-1.png" alt="Dashboard" width={1200} height={500} className="w-full" />
          </div>
          {/* <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <LayoutDashboard className="h-4 w-4 text-blue-500" /> Workspace overview
            </div>
            <div className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-0.5 text-[11px] font-medium">
              {["INR", "USD", "AED"].map((c, i) => (
                <span
                  key={c}
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${
                    i === 0 ? "bg-white text-gray-900 shadow-sm border border-gray-200" : "text-gray-500"
                  }`}
                >
                  {i === 0 && <IndianRupee className="h-3 w-3 text-[#25D366]" />}
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-blue-50 border border-blue-100 text-blue-600">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  {s.label}
                </div>
                <div className="mt-3 text-2xl font-bold tracking-tight text-gray-900 tabular-nums">{s.value}</div>
                <div className="mt-1 text-[10px] font-medium text-gray-500">{s.delta}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="text-xs font-semibold text-gray-800">Messages per month</div>
              <div className="mt-5 flex h-28 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-blue-200 to-blue-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="text-xs font-semibold text-gray-800">Contacts by category</div>
              <div className="mt-4 flex items-center gap-5">
                <Donut />
                <ul className="space-y-1.5 text-[11px] font-medium text-gray-600">
                  {donut.map((d) => (
                    <li key={d.label} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
                      {d.label} <span className="text-gray-400">{d.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

function Donut() {
  let acc = 0;
  const segments = donut.map((d) => {
    const from = acc;
    acc += d.value;
    return `${d.color} ${from}% ${acc}%`;
  });
  return (
    <div
      className="relative grid h-28 w-28 shrink-0 place-items-center rounded-full"
      style={{ background: `conic-gradient(${segments.join(",")})` }}
    >
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-center shadow-inner">
        <span className="text-[10px] font-bold text-gray-900 leading-tight">
          12.4k
          <br />
          <span className="font-medium text-gray-500">contacts</span>
        </span>
      </div>
    </div>
  );
}
