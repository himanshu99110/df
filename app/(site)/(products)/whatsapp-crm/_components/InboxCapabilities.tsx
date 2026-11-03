'use client'
import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  FileText,
  Mic,
  Video,
  MapPin,
  Smile,
  Reply,
  CheckCheck,
  UserCheck,
  Clock,
  StickyNote,
  Contact,
} from "lucide-react";
import { SectionHeader } from "./BentoFeatures";

const media = [
  { icon: ImageIcon, label: "Images" },
  { icon: FileText, label: "Documents" },
  { icon: Mic, label: "Voice notes" },
  { icon: Video, label: "Video" },
  { icon: MapPin, label: "Location" },
  { icon: Smile, label: "Stickers & emoji" },
  { icon: Contact, label: "Contact cards" },
  { icon: Reply, label: "Reply-to-message" },
];

const capabilities = [
  { icon: UserCheck, title: "Assignment & statuses", body: "Assign threads to agents, move between open, pending and closed, and track unread counts per inbox." },
  { icon: CheckCheck, title: "Delivery receipts", body: "Sent, delivered and read states mirrored straight from WhatsApp on every outgoing message." },
  { icon: StickyNote, title: "Inline contact notes", body: "Leave internal notes on the contact without leaving the conversation view." },
];

export function InboxCapabilities() {
  return (
    <section id="inbox" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Inbox"
          title="Every message type, one thread"
          subtitle="A unified conversation view with the full WhatsApp message palette and the policy guardrails Meta requires."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2"
          >
            <h3 className="text-base font-semibold tracking-tight text-gray-900">Send anything WhatsApp supports</h3>
            <p className="mt-2 text-sm text-gray-600">
              Text, media, voice notes recorded in-browser and transcoded server-side, plus emoji picker and
              quoted replies.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {media.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-[11px] font-medium text-gray-700"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-blue-50 border border-blue-100 text-blue-600">
                    <m.icon className="h-3.5 w-3.5" />
                  </span>
                  {m.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-yellow-50 border border-yellow-100 text-yellow-600">
                <Clock className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-gray-900">24-hour window</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              The customer-service window is enforced for you. Once it closes, free-form sends are blocked and
              the composer switches to approved templates.
            </p>
            <div className="mt-5 rounded-xl border border-dashed border-yellow-300 bg-yellow-50 p-3 text-[11px] font-medium text-yellow-800">
              Window closed 3h ago · pick an approved template to reopen the conversation.
            </div>
          </motion.div>

          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
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
