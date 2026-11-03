'use client'
import { motion } from "framer-motion";
import { Users, Tag, SlidersHorizontal, FileSpreadsheet, Upload, Download, Link2 } from "lucide-react";

const categories = [
  { name: "Lead", color: "#3b82f6" },
  { name: "Prospect", color: "#25D366" },
  { name: "Customer", color: "#f59e0b" },
  { name: "VIP", color: "#8b5cf6" },
  { name: "Other", color: "#94a3b8" },
  { name: "+ Custom", color: "#0ea5e9" },
];

const bullets = [
  { icon: Users, text: "Full records: name, normalized phone, email, company, avatar." },
  { icon: SlidersHorizontal, text: "Custom fields per account, plus colored tags for fast segmentation." },
  { icon: FileSpreadsheet, text: "CSV and Excel (xlsx) import & export with duplicate merge on phone." },
  { icon: Link2, text: "Notes and linked deals on every contact record." },
];

export function ContactsFeature() {
  return (
    <section id="contacts" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
              <Users className="h-3 w-3 text-blue-500" /> Contacts
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              A contact record that
              <br />
              actually knows the customer
            </h2>
            <p className="mt-5 max-w-lg text-base text-gray-600">
              Built-in categories out of the box, custom ones when your funnel needs them, and every
              conversation, note and deal attached to the same person.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                    <b.icon className="h-3.5 w-3.5" />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl"
          >
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-gray-700">Contacts · 12,482</span>
              <span className="flex items-center gap-2 text-gray-500">
                <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[10px]">
                  <Upload className="h-3 w-3" /> Import
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[10px]">
                  <Download className="h-3 w-3" /> Export xlsx
                </span>
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                  style={{ borderColor: `${c.color}55`, backgroundColor: `${c.color}14`, color: c.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                  {c.name}
                </span>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              {[
                { n: "Aisha Patel", p: "+91 98110 24421", c: "Acme Studio", t: ["VIP", "Pricing"] },
                { n: "Marco Silva", p: "+44 7700 900123", c: "Silva & Co", t: ["Lead"] },
                { n: "Nora Khan", p: "+971 50 123 4567", c: "Northwind", t: ["Customer", "Renewal"] },
              ].map((r) => (
                <div key={r.n} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                    {r.n.split(" ").map((x) => x[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-semibold text-gray-900">{r.n}</div>
                    <div className="truncate text-[10px] font-medium text-gray-500">
                      {r.p} · {r.c}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    {r.t.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-md border border-blue-100 bg-blue-50 px-1.5 py-0.5 text-[9px] font-semibold text-blue-600"
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
