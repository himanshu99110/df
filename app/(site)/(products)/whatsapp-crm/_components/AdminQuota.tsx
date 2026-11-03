'use client'
import { motion } from "framer-motion";
import { Building2, Gauge, ReceiptText, BarChart3, PauseCircle } from "lucide-react";
import { SectionHeader } from "./BentoFeatures";

const accounts = [
  { name: "Acme Studio", plan: "CUSTOM", used: 72, quota: "250k", expiry: "2 years", state: "Active" },
  { name: "Northwind Retail", plan: "FREE", used: 96, quota: "1k", expiry: "1 year", state: "Active" },
  { name: "Kite Co", plan: "CUSTOM", used: 100, quota: "50k", expiry: "Lifetime", state: "Suspended" },
];

const ledger = [
  { acc: "Acme Studio", amount: "₹48,000", before: "100k", after: "250k" },
  { acc: "Meridian", amount: "₹1,20,000", before: "250k", after: "1M" },
];

export function AdminQuota() {
  return (
    <section id="admin" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Platform admin & billing"
          title="Run it as a SaaS, not a spreadsheet"
          subtitle="Tenant accounts, message quotas, plan expiry and a full purchase ledger — with usage counted across inbox, broadcast, API and automations."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl lg:col-span-2"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                <Building2 className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-gray-900">Tenant accounts</h3>
            </div>

            <div className="mt-5 space-y-2">
              {accounts.map((a) => (
                <div key={a.name} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-gray-900">{a.name}</span>
                    <div className="flex items-center gap-2 text-[10px] font-semibold">
                      <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-gray-600">
                        {a.plan} · {a.quota} · {a.expiry}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 ${
                          a.state === "Active"
                            ? "border-[#25D366]/40 bg-[#25D366]/10 text-[#128C4A]"
                            : "border-red-200 bg-red-50 text-red-600"
                        }`}
                      >
                        {a.state === "Suspended" && <PauseCircle className="h-3 w-3" />}
                        {a.state}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full ${
                        a.used >= 100 ? "bg-red-500" : a.used > 90 ? "bg-yellow-500" : "bg-[#25D366]"
                      }`}
                      style={{ width: `${a.used}%` }}
                    />
                  </div>
                  <div className="mt-1.5 text-[10px] font-medium text-gray-500">
                    {a.used}% of message quota used
                    {a.used >= 100 && (
                      <span className="ml-2 text-red-600">Quota exhausted — sending paused</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                  <ReceiptText className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold tracking-tight text-gray-900">Quota ledger</h3>
              </div>
              <div className="mt-4 space-y-2 text-[11px]">
                {ledger.map((l) => (
                  <div key={l.acc} className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                    <div className="flex items-center justify-between font-semibold text-gray-900">
                      <span>{l.acc}</span>
                      <span className="text-[#128C4A]">{l.amount}</span>
                    </div>
                    <div className="mt-0.5 font-medium text-gray-500">
                      {l.before} → {l.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                  <BarChart3 className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold tracking-tight text-gray-900">Usage by feature</h3>
              </div>
              <div className="mt-4 space-y-2 text-[11px] font-medium">
                {[
                  { f: "Inbox", v: 46 },
                  { f: "Broadcast", v: 34 },
                  { f: "Automation", v: 13 },
                  { f: "API", v: 7 },
                ].map((u) => (
                  <div key={u.f} className="flex items-center gap-2">
                    <span className="w-20 shrink-0 text-gray-600">{u.f}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: `${u.v}%` }} />
                    </div>
                    <span className="w-8 text-right tabular-nums text-gray-500">{u.v}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-blue-300 bg-blue-50 px-3 py-2 text-[10px] font-medium text-blue-700">
                <Gauge className="h-3 w-3" /> Set or raise quota, choose 1y / 2y / lifetime expiry.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
