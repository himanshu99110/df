"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Eyebrow } from "./Eyebrow"

type Feature = {
  icon: string
  title: string
  text: string
  tone: string
}

const features: Feature[] = [
  //   {
  //     icon: ShieldCheck,
  //     title: "Role-Based Access Control",
  //     text: "Granular roles and permissions for admins, managers, and reps — everyone sees exactly what they should.",
  //     tone: "bg-blue-100 text-blue-600",
  //   },
  {
    icon: "/images/icons/dashboard.png",
    title: "Event types as links",
    text: "15-minute intro calls to 90-minute consults — presets or any custom length, in-person, phone, online or custom locations, each with its own slug, description and color. One workspace page lists them all.",
    tone: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: "/images/icons/leads.png",
    title: "Availability for real life",
    text: "Weekly schedules with per-day hours, each pinned to its own time zone. Toggle days, copy schedules between event types, and check the live slot preview before you ever share the link.",
    tone: "bg-violet-100 text-violet-600",
  },
  {
    icon: "/images/icons/lost.png",
    title: "Overrides, buffers & caps",
    text: "Block a holiday or set custom hours for one date. Add breathing room before/after meetings, a minimum notice window, and per-event daily booking caps — schedule-wide or per event type.",
    tone: "bg-rose-100 text-rose-600",
  },
  {
    icon: "/images/icons/category.png",
    title: "Approval mode",
    text: "Require manual confirmation per event type. Requests land as Pending, you approve or decline from the bookings inbox, and the attendee sees the outcome live on their manage page.",
    tone: "bg-amber-100 text-amber-600",
  },
  {
    icon: "/images/icons/prospect.png",
    title: "Custom booking questions",
    text: "Ask anything before they book — short text, long text or phone number, required or optional. Answers ride along on the booking detail, so hosts walk in prepared.",
    tone: "bg-sky-100 text-sky-600",
  },
  {
    icon: "/images/icons/task.png",
    title: "Self-service reschedule & cancel",
    text: "Every confirmation carries a crypto-random manage token. Attendees pick a new time or cancel without any account — the old slot is released immediately and the linked trail is preserved.",
    tone: "bg-teal-100 text-teal-600",
  },
  {
    icon: "/images/icons/audit.png",
    title: "Teams, roles & workspaces",
    text: "Owner, admin and member with real permission boundaries. Invite by email (links valid 7 days), hop between multiple workspaces from one account, and keep every org's data fully isolated.",
    tone: "bg-slate-200 text-slate-700",
  },
  {
    icon: "/images/icons/notify.png",
    title: "Reminders & calendar files",
    text: "A scheduled job emails attendees 24 hours before their meeting, and every confirmation offers a one-click .ics file.",
    tone: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    icon: "/images/icons/setting.png",
    title: "A CRM that fills itself",
    text: "Every booking creates or updates a customer: totals, completed/cancelled counts, last booking, full history — searchable, sortable, plus private internal notes the customer never sees.",
    tone: "bg-cyan-100 text-cyan-600",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="pb-20 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our Features</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Everything scheduling needs, nothing it doesn't
          </h2>
          <p className="mt-4 text-black">
            One platform for leads, admins, careers, tasks and analytics.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10">
                <span className="inline-flex size-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <Image src={f.icon} width={100} height={100} alt={f.title} />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
