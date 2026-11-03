'use client'
import { motion } from "framer-motion";
import { Terminal, KeySquare, BookOpen, Gauge } from "lucide-react";
import { SectionHeader } from "./BentoFeatures";

const endpoints = [
  { m: "GET", p: "/v1/me" },
  { m: "GET", p: "/v1/contacts" },
  { m: "POST", p: "/v1/contacts" },
  { m: "GET", p: "/v1/conversations" },
  { m: "GET", p: "/v1/messages" },
  { m: "POST", p: "/v1/messages" },
  { m: "POST", p: "/v1/broadcasts" },
];

const scopes = [
  "contacts:read",
  "contacts:write",
  "conversations:read",
  "messages:read",
  "messages:send",
  "broadcasts:send",
];

export function DeveloperApi() {
  return (
    <section id="api" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Developer platform"
          title="A public REST API, not an afterthought"
          subtitle="Bearer tokens, scoped keys, pagination and rate limits — with interactive docs and a Postman collection."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-xl lg:col-span-2"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                <Terminal className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-gray-900">REST API v1</h3>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {endpoints.map((e) => (
                <div
                  key={e.m + e.p}
                  className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 font-mono text-[11px]"
                >
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${
                      e.m === "GET" ? "bg-blue-50 text-blue-600" : "bg-[#25D366]/10 text-[#128C4A]"
                    }`}
                  >
                    {e.m}
                  </span>
                  <span className="text-gray-700">{e.p}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-900 p-4 font-mono text-[10px] leading-relaxed text-gray-300">
              <div>
                <span className="text-[#25D366]">curl</span> https://api.wacrm.app/v1/messages \
              </div>
              <div className="pl-4">
                -H <span className="text-blue-300">"Authorization: Bearer wa_live_••••"</span> \
              </div>
              <div className="pl-4">-d {'{"to":"+919811024421","template":"q3_launch_offer"}'}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                <KeySquare className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-gray-900">Scoped API keys</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {scopes.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1 font-mono text-[10px] font-semibold text-blue-600"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-2 text-[11px] font-medium text-gray-600">
              <div className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                <Gauge className="h-3.5 w-3.5 text-blue-500" /> Rate limited & paginated by default
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                <BookOpen className="h-3.5 w-3.5 text-blue-500" /> Interactive docs + Postman collection
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
