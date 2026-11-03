'use client'
import { motion } from "framer-motion";
import { Plug, KeyRound, Webhook, Lock, ShieldCheck } from "lucide-react";

const points = [
  { icon: Plug, text: "Connect your number with phone number ID and WABA ID in a guided setup." },
  { icon: Lock, text: "Access token and per-company Meta app secret encrypted at rest." },
  { icon: Webhook, text: "Webhook endpoint with x-hub-signature-256 verification on every payload." },
  { icon: ShieldCheck, text: "Works with any Meta-approved provider — Cloud API, 360dialog, Twilio, Gupshup." },
];

export function IntegrationSecurity() {
  return (
    <section id="integration" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl lg:order-1"
          >
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="flex items-center gap-2 text-gray-700">
                <KeyRound className="h-3.5 w-3.5 text-blue-500" /> WhatsApp setup
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-2 py-0.5 text-[10px] font-semibold text-[#128C4A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" /> Connected
              </span>
            </div>

            <div className="mt-4 space-y-2 text-[11px]">
              {[
                { k: "Phone number ID", v: "1093 4471 22890" },
                { k: "WABA ID", v: "2288 1047 55321" },
                { k: "Access token", v: "•••••••••••••••• encrypted" },
                { k: "App secret", v: "•••••••••••••••• encrypted" },
              ].map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2"
                >
                  <span className="font-medium text-gray-500">{r.k}</span>
                  <span className="font-semibold text-gray-900 tabular-nums">{r.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-gray-200 bg-gray-900 p-3 font-mono text-[10px] leading-relaxed text-gray-300">
              <div className="text-gray-500">POST /api/webhooks/whatsapp</div>
              <div>
                x-hub-signature-256: <span className="text-[#25D366]">sha256=verified</span>
              </div>
              <div className="text-blue-300">{"{ \"field\": \"messages\", \"value\": { … } }"}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
              <Plug className="h-3 w-3 text-blue-500" /> WhatsApp integration
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Connect your number,
              <br />
              keep your secrets safe
            </h2>
            <p className="mt-5 max-w-lg text-base text-gray-600">
              Ten minutes of setup and every inbound message flows into your workspace — signature-verified,
              encrypted and attributed to the right contact.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-blue-100 bg-blue-50 text-blue-600">
                    <p.icon className="h-3.5 w-3.5" />
                  </span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
