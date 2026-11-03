'use client'
import { motion } from "framer-motion";
import { Megaphone, CalendarClock, Filter, LayoutTemplate, ShieldCheck, Star } from "lucide-react";
import { SectionHeader } from "./BentoFeatures";

const statuses = [
  { label: "Pending", value: 240, color: "#94a3b8" },
  { label: "Sent", value: 3412, color: "#3b82f6" },
  { label: "Delivered", value: 3288, color: "#25D366" },
  { label: "Read", value: 2891, color: "#0ea5e9" },
  { label: "Replied", value: 402, color: "#8b5cf6" },
  { label: "Failed", value: 34, color: "#ef4444" },
];

const templates = [
  { name: "q3_launch_offer", cat: "Marketing", lang: "en_US", status: "Approved", quality: "High" },
  { name: "order_update_v2", cat: "Utility", lang: "hi_IN", status: "Pending", quality: "—" },
  { name: "login_otp", cat: "Authentication", lang: "en_US", status: "Approved", quality: "Medium" },
  { name: "winback_sept", cat: "Marketing", lang: "en_US", status: "Rejected", quality: "—" },
];

const statusTone: Record<string, string> = {
  Approved: "border-[#25D366]/40 bg-[#25D366]/10 text-[#128C4A]",
  Pending: "border-yellow-300 bg-yellow-50 text-yellow-700",
  Rejected: "border-red-200 bg-red-50 text-red-600",
};

export function BroadcastsTemplates() {
  return (
    <section id="broadcasts" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Broadcasts & templates"
          title="Mass messaging that stays compliant"
          subtitle="Meta-approved templates with variable mapping, audience filters and scheduling — tracked per recipient."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                <Megaphone className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-gray-900">Campaign builder</h3>
            </div>

            <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-3 text-xs">
              <div className="font-semibold text-gray-800">q3_launch_offer</div>
              <p className="mt-2 leading-relaxed text-gray-600">
                Hi <span className="rounded bg-blue-50 px-1 font-semibold text-blue-600">{"{{1}}"}</span>, your{" "}
                <span className="rounded bg-blue-50 px-1 font-semibold text-blue-600">{"{{2}}"}</span> plan renews on{" "}
                <span className="rounded bg-blue-50 px-1 font-semibold text-blue-600">{"{{3}}"}</span>.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-medium text-gray-500">
                <span>{"{{1}}"} → first_name</span>
                <span>{"{{2}}"} → plan</span>
                <span>{"{{3}}"} → renews_on</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-gray-700">
                <Filter className="h-3 w-3 text-blue-500" /> Audience: VIP + tag "Renewal"
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-gray-700">
                <CalendarClock className="h-3 w-3 text-blue-500" /> Scheduled · 12 Sep, 10:00 IST
              </span>
            </div>

            <div className="mt-5 space-y-2">
              {statuses.map((s) => (
                <div key={s.label} className="flex items-center gap-3 text-[11px] font-medium">
                  <span className="w-16 shrink-0 text-gray-600">{s.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${Math.min(100, (s.value / 3412) * 100)}%`, backgroundColor: s.color }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right tabular-nums text-gray-500">
                    {s.value.toLocaleString()}
                  </span>
                </div>
              ))}
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
                <LayoutTemplate className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-gray-900">Template manager</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Marketing, utility and authentication templates with header (text, image, video or document),
              body, footer and buttons. Submit to Meta and sync status without leaving the app.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-gray-100">
              {templates.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center justify-between gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2.5 text-[11px] last:border-0"
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-gray-900">{t.name}</div>
                    <div className="text-[10px] font-medium text-gray-500">
                      {t.cat} · {t.lang}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-500">
                      <Star className="h-3 w-3 text-yellow-500" /> {t.quality}
                    </span>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusTone[t.status]}`}>
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-dashed border-blue-300 bg-blue-50 p-3 text-[11px] font-medium text-blue-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Draft, pending, approved, rejected, paused, disabled and in-appeal states tracked with rejection reasons.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
