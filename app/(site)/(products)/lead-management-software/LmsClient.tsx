"use client"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  History,
  Inbox,
  LayoutDashboard,
  ListChecks,
  LucideIcon,
  Menu,
  MessageSquare,
  Minus,
  Plus,
  RotateCcw,
  ScrollText,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Tags,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Workflow,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { FeaturesSection } from "./_components/FeaturesSection"

function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ---------- Hero mockup ---------- */

function DashboardMockup() {
  const statuses = [
    { label: "NEW", val: 13, color: "bg-blue-500" },
    { label: "CONTACTED", val: 3, color: "bg-indigo-500" },
    { label: "QUALIFIED", val: 8, color: "bg-emerald-500" },
    { label: "FOLLOW UP", val: 11, color: "bg-orange-500" },
    { label: "CONVERTED", val: 6, color: "bg-green-500" },
  ]
  const bars = [
    12, 20, 32, 45, 78, 55, 38, 62, 40, 72, 30, 22, 55, 34, 68, 44, 26, 30, 18,
    24,
  ]

  return (
    <div className="relative">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-20 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring shadow-blue-500/10 ring-blue-100"
      >
        {/* Toolbar */}
        <div className="custom-border-b-gray-200 flex items-center justify-between bg-slate-50/70 px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="rounded-md bg-white px-3 py-1 text-xs text-slate-500 shadow-sm ring-1 ring-slate-200">
            DigitalFueled.app/dashboard
          </div>
          <div className="w-16" />
        </div>

        <div className="grid grid-cols-12 gap-4 p-5">
          {/* Sidebar */}
          <aside className="col-span-3 hidden rounded-xl bg-slate-50/60 p-3 ring ring-blue-100 md:block">
            <div className="mb-3 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Platform
            </div>
            {[
              { i: LayoutDashboard, l: "Dashboard", a: true },
              { i: Inbox, l: "Leads" },
              { i: Briefcase, l: "Careers" },
              { i: ShieldCheck, l: "Admins" },
              { i: CheckSquare, l: "Tasks" },
            ].map(({ i: Icon, l, a }) => (
              <div
                key={l}
                className={`mb-1 flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${a ? "bg-white text-black shadow-sm ring-1 ring-slate-200" : "text-black"}`}
              >
                <Icon className="h-3.5 w-3.5" /> {l}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <div className="col-span-12 space-y-4 md:col-span-9">
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { l: "Total Leads", v: "91", d: "27 open" },
                { l: "Converted", v: "38", d: "42% rate" },
                { l: "Pipeline", v: "$40K", d: "Value" },
                { l: "Admins", v: "4/4", d: "Active" },
              ].map((k, idx) => (
                <motion.div
                  key={k.l}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="rounded-xl bg-white p-3 ring ring-blue-100"
                >
                  <div className="text-[10px] tracking-wider text-slate-500 uppercase">
                    {k.l}
                  </div>
                  <div className="mt-1 text-xl font-semibold text-black">
                    {k.v}
                  </div>
                  <div className="text-[10px] text-slate-400">{k.d}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
              {/* Chart */}
              <div className="rounded-xl bg-white p-4 ring ring-blue-100 md:col-span-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-medium text-black">
                    Monthly Lead Trend
                  </div>
                  <div className="text-[10px] text-slate-400">July 2026</div>
                </div>
                <div className="flex h-32 items-end gap-1">
                  {bars.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${b}%` }}
                      transition={{ delay: 0.6 + i * 0.03, duration: 0.6 }}
                      className={`w-full rounded-t ${i % 5 === 0 ? "bg-orange-500" : "bg-blue-500"}`}
                    />
                  ))}
                </div>
              </div>
              {/* Status */}
              <div className="rounded-xl bg-white p-4 ring ring-blue-100 md:col-span-2">
                <div className="mb-3 text-xs font-medium text-black">
                  Status Mix
                </div>
                <div className="space-y-2.5">
                  {statuses.map((s, i) => (
                    <div key={s.label}>
                      <div className="mb-1 flex justify-between text-[10px] text-slate-500">
                        <span>{s.label}</span>
                        <span>{s.val}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.val * 6}%` }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                          className={`h-full ${s.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="absolute top-24 -left-6 hidden w-56 rounded-xl bg-white/90 p-3 shadow-xl ring ring-blue-100 backdrop-blur md:block"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500">Conversion</div>
            <div className="text-sm font-semibold text-black">+42.8%</div>
          </div>
        </div>
        <div className="mt-2 flex h-8 items-end gap-0.5">
          {[30, 45, 40, 65, 55, 80, 70, 95].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-sm bg-blue-500/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute -right-4 bottom-16 hidden w-60 rounded-xl bg-white/90 p-3 shadow-xl ring ring-blue-100 backdrop-blur md:block"
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
            New Lead
          </div>
          <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[9px] font-medium text-orange-500">
            HOT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
            GN
          </div>
          <div>
            <div className="text-xs font-semibold text-black">Customer One</div>
            <div className="text-[10px] text-slate-500">
              Education • Assigned to Armaan
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative mb-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-1 container grid grid-cols-1 gap-12 pt-16 pb-24 md:pt-24 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-black shadow-sm ring ring-blue-100 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Lead Management System
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold tracking-tight text-black md:text-5xl lg:text-6xl"
          >
            Convert more leads with{" "}
            <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-[length:200%_auto] bg-clip-text text-transparent">
              one unified sales
            </span>{" "}
            workspace
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base text-black md:text-lg"
          >
            Track enquiries, assign leads, manage teams, review candidate
            applications, monitor tasks, and measure performance — from one
            powerful dashboard.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600 hover:shadow-blue-500/40"
            >
              Start Free Trial{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className=""
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}

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
    icon: '/images/icons/dashboard.png',
    title: "Dashboard & Analytics",
    text: "Real-time KPIs, conversion trends, and custom reports across every stage of your pipeline.",
    tone: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: '/images/icons/leads.png',
    title: "Lead Management",
    text: "Capture, assign, track, and convert leads with a pipeline built around your sales process.",
    tone: "bg-violet-100 text-violet-600",
  },
  {
    icon: '/images/icons/lost.png',
    title: "Lost Lead Management",
    text: "Log lost reasons, score win-back potential, and run re-engagement campaigns automatically.",
    tone: "bg-rose-100 text-rose-600",
  },
  {
    icon: '/images/icons/category.png',
    title: "Lead Category Management",
    text: "Custom categories, sources, and tags with color coding and rule-based lead routing.",
    tone: "bg-amber-100 text-amber-600",
  },
  {
    icon: '/images/icons/prospect.png',
    title: "Prospect Management",
    text: "Rich prospect profiles with engagement scoring, notes, and follow-up reminders in one view.",
    tone: "bg-sky-100 text-sky-600",
  },
  {
    icon: '/images/icons/task.png',
    title: "Task & Activity Management",
    text: "Tasks, calls, meetings, and timelines keep every deal moving and every rep accountable.",
    tone: "bg-teal-100 text-teal-600",
  },
//   {
//     icon: ScrollText,
//     title: "Careers & Applications",
//     text: "Manage job openings and track applications — hire the sales team that runs the pipeline.",
//     tone: "bg-orange-100 text-orange-600",
//   },
//   {
//     icon: UserCog,
//     title: "Admin User Management",
//     text: "Invite, suspend, and manage users in bulk, with delegation and approval hierarchies.",
//     tone: "bg-indigo-100 text-indigo-600",
//   },
  {
    icon: '/images/icons/audit.png',
    title: "Activity Logs & Audit Trail",
    text: "Every create, edit, and delete is logged with who, what, and when — exportable for compliance.",
    tone: "bg-slate-200 text-slate-700",
  },
  {
    icon: '/images/icons/notify.png',
    title: "Notification Management",
    text: "In-app and email notifications for assignments, mentions, and stale leads — configurable per user.",
    tone: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    icon: '/images/icons/setting.png',
    title: "Settings & Account",
    text: "Workspace preferences, integrations, data import/export, and account controls in one place.",
    tone: "bg-cyan-100 text-cyan-600",
  },
]

function FeaturesGrid() {
  return (
    <section id="features" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-5xl">
          All Features
        </h2>
        <p className="mt-4 text-black">
          One platform for leads, admins, careers, tasks and analytics.
        </p>
      </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10">
                <span
                  className="inline-flex size-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                >
                  <Image src={f.icon} width={100} height={100} alt={f.title} />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 mb-0">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Bento ---------- */

function Bento() {
  return (
    <Section className="container pb-24">
      <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
        <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-500 ring ring-blue-100">
          Features
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-5xl">
          Everything your sales team needs
        </h2>
        <p className="mt-4 text-black">
          One platform for leads, admins, careers, tasks and analytics.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
        <motion.div
          variants={fadeUp}
          className="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-6 ring ring-blue-100 md:col-span-4"
        >
          <div className="flex items-center gap-2 text-blue-500">
            <Inbox className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider uppercase">
              Lead Management
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-black">
            Track, assign, follow up.
          </h3>
          <p className="mt-2 max-w-md text-sm text-black">
            Every enquiry captured. Auto-assigned to the right rep. Status
            stages that map to how you actually sell.
          </p>
          <div className="mt-6 space-y-2">
            {[
              { n: "Customer One", s: "Education", t: "NEW", c: "bg-blue-500" },
              {
                n: "Customer Two",
                s: "Service",
                t: "FOLLOW UP",
                c: "bg-orange-500",
              },
              {
                n: "Customer Three",
                s: "Tours",
                t: "QUALIFIED",
                c: "bg-emerald-500",
              },
            ].map((r) => (
              <div
                key={r.n}
                className="flex items-center justify-between rounded-lg bg-slate-50/50 px-3 py-2 ring ring-blue-100"
              >
                <div>
                  <div className="text-xs font-medium text-black">{r.n}</div>
                  <div className="text-[10px] text-slate-500">{r.s}</div>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold text-white ${r.c}`}
                >
                  {r.t}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="col-span-1 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white ring ring-blue-100 md:col-span-2"
        >
          <ShieldCheck className="h-5 w-5" />
          <h3 className="mt-2 text-xl font-semibold">Admin Management</h3>
          <p className="mt-2 text-sm text-white/80">
            Roles, permissions, and workload — under control.
          </p>
          <div className="mt-6 space-y-2">
            {["Super Admin", "Sales", "Sales"].map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs backdrop-blur"
              >
                <div className="h-6 w-6 rounded-full bg-white/20" />
                <span className="font-medium">Admin {i + 1}</span>
                <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[9px]">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="col-span-1 rounded-2xl bg-white p-6 ring ring-blue-100 md:col-span-2"
        >
          <Briefcase className="h-5 w-5 text-orange-500" />
          <h3 className="mt-2 text-xl font-semibold text-black">
            Career Applications
          </h3>
          <p className="mt-2 text-sm text-black">
            Screen resumes, track candidates, build your hiring pipeline.
          </p>
          <div className="mt-4 flex gap-2">
            <div className="flex-1 rounded-lg p-2 text-center ring ring-blue-100">
              <div className="text-lg font-semibold text-black">3</div>
              <div className="text-[10px] text-slate-500">New</div>
            </div>
            <div className="flex-1 rounded-lg p-2 text-center ring ring-blue-100">
              <div className="text-lg font-semibold text-black">12</div>
              <div className="text-[10px] text-slate-500">Review</div>
            </div>
            <div className="flex-1 rounded-lg p-2 text-center ring ring-blue-100">
              <div className="text-lg font-semibold text-orange-500">5</div>
              <div className="text-[10px] text-slate-500">Hired</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="col-span-1 rounded-2xl bg-white p-6 ring ring-blue-100 md:col-span-2"
        >
          <CheckSquare className="h-5 w-5 text-blue-500" />
          <h3 className="mt-2 text-xl font-semibold text-black">
            Task Tracking
          </h3>
          <p className="mt-2 text-sm text-black">
            Log calls, meetings and follow-ups with time attribution.
          </p>
          <div className="mt-4 space-y-1.5">
            {[
              { t: "Call — Customer", d: "12m", p: 80 },
              { t: "Follow up — Customer", d: "5m", p: 45 },
              { t: "Demo — Customer", d: "22m", p: 60 },
            ].map((x, i) => (
              <div key={i}>
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className="text-slate-700">{x.t}</span>
                  <span className="text-slate-500">{x.d}</span>
                </div>
                <div className="h-1 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${x.p}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="col-span-1 rounded-2xl bg-white p-6 ring ring-blue-100 md:col-span-2"
        >
          <BarChart3 className="h-5 w-5 text-blue-500" />
          <h3 className="mt-2 text-xl font-semibold text-black">
            Analytics Dashboard
          </h3>
          <p className="mt-2 text-sm text-black">
            Conversion, trends, and revenue — visualized live.
          </p>
          <div className="mt-4 flex h-16 items-end gap-1">
            {[20, 35, 28, 50, 42, 65, 55, 78, 62, 88, 72, 95].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

/* ---------- Features alternating ---------- */

function FeatureRow({
  index,
  icon: Icon,
  tag,
  title,
  desc,
  points,
  visual,
  img,
}: {
  index: number
  icon: any
  tag: string
  title: string
  desc: string
  points: string[]
  visual: React.ReactNode
  img: string
}) {
  const reverse = index % 2 === 1
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-500 ring ring-blue-100">
          <Icon className="h-3.5 w-3.5" /> {tag}
        </div>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-black">{desc}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm text-slate-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600"
        >
          Learn more <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      {/* <div>{visual}</div> */}
      <div className="w-full">
        <Image
          src={img}
          width={500}
          height={500}
          alt={title}
          className="h-auto w-full rounded-xl"
        />
      </div>
    </motion.div>
  )
}

function Features() {
  const visuals = [
    <div className="rounded-2xl bg-white p-4 shadow-xl ring shadow-blue-500/5 ring-blue-100">
      <div className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
        Smart Assignment
      </div>
      {["Armaan", "Priya", "Digital Fueled"].map((a, i) => (
        <div
          key={a}
          className="mb-2 flex items-center justify-between rounded-lg bg-slate-50 p-2"
        >
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-blue-500/10 text-center text-xs leading-7 font-semibold text-blue-500">
              {a[0]}
            </div>
            <span className="text-xs font-medium text-black">{a}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-16 rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${(3 - i) * 30}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500">
              {(3 - i) * 12} leads
            </span>
          </div>
        </div>
      ))}
    </div>,
    <div className="rounded-2xl bg-white p-6 shadow-xl ring shadow-blue-500/5 ring-blue-100">
      <div className="flex items-center justify-between text-xs">
        {["New", "Contacted", "Qualified", "Follow Up", "Won"].map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div
              className={`h-8 w-8 rounded-full ${i < 3 ? "bg-blue-500" : "bg-slate-200"} flex items-center justify-center text-[10px] font-semibold text-white`}
            >
              {i + 1}
            </div>
            <span className="text-[10px] text-black">{s}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 h-1 rounded-full bg-slate-100">
        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
      </div>
    </div>,
    <div className="rounded-2xl bg-white p-6 shadow-xl ring shadow-blue-500/5 ring-blue-100">
      <div className="grid grid-cols-3 gap-2 text-xs">
        {[
          { r: "Super Admin", p: "All Access", c: "bg-blue-500" },
          { r: "Sales", p: "Leads + Tasks", c: "bg-orange-500" },
          { r: "Viewer", p: "Read Only", c: "bg-slate-400" },
        ].map((x) => (
          <div key={x.r} className="rounded-lg p-3 ring ring-blue-100">
            <div
              className={`inline-block rounded px-2 py-0.5 text-[10px] font-semibold text-white ${x.c}`}
            >
              {x.r}
            </div>
            <div className="mt-2 text-[10px] text-slate-500">{x.p}</div>
          </div>
        ))}
      </div>
    </div>,
    <div className="rounded-2xl bg-white p-6 shadow-xl ring shadow-blue-500/5 ring-blue-100">
      <div className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
        Team Performance
      </div>
      {["Armaan", "Priya", "Sameer"].map((n, i) => (
        <div key={n} className="mb-3">
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-black">{n}</span>
            <span className="text-slate-500">{95 - i * 12}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${95 - i * 12}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-blue-500"
            />
          </div>
        </div>
      ))}
    </div>,
    <div className="rounded-2xl bg-white p-6 shadow-xl ring shadow-blue-500/5 ring-blue-100">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
          Careers
        </div>
        <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-semibold text-orange-500">
          3 NEW
        </span>
      </div>
      {[
        { n: "Graphic Designer", s: "New" },
        { n: "Video Editor", s: "Review" },
        { n: "Client Servicing", s: "Shortlist" },
      ].map((x, i) => (
        <div
          key={i}
          className="mb-2 flex items-center justify-between rounded-lg p-2 ring ring-blue-100"
        >
          <div>
            <div className="text-xs font-medium text-black">{x.n}</div>
            <div className="text-[10px] text-slate-500">Applied Jul 13</div>
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
            {x.s}
          </span>
        </div>
      ))}
    </div>,
  ]

  const rows = [
    {
      icon: Target,
      tag: "Assignment",
      title: "Smart Lead Assignment",
      desc: "Automatically route incoming leads to the right sales representative based on predefined business rules.",
      points: [
        "Distribute leads based on workload and availability",
        "Assign by service category, source, or location",
        "Reduce response time with instant allocation",
        "Prevent lead overlap and duplicate follow-ups",
        "Ensure every enquiry reaches the right team member",
      ],
      img: "/images/demo/lms-1.png",
    },
    {
      icon: Workflow,
      tag: "Timeline",
      title: "Timeline Tracking",
      desc: "Track every lead from first contact to conversion with a clear visual sales pipeline.",
      points: [
        "Monitor lead movement across every stage",
        "Identify bottlenecks in the sales process",
        "Keep follow-ups organized and timely",
        "Gain visibility into conversion opportunities",
        "Forecast sales performance with confidence",
      ],
      img: "/images/demo/lms-2.png",
    },
    {
      icon: ShieldCheck,
      tag: "Access",
      title: "Role Based Access",
      desc: "Provide the right level of access to every team member while keeping data secure.",
      points: [
        "Create custom roles and permission levels",
        "Restrict sensitive information when required",
        "Give managers complete operational visibility",
        "Maintain data security across departments",
        "Scale team access as your business grows",
      ],
      img: "/images/demo/lms-3.png",
    },
    {
      icon: TrendingUp,
      tag: "Performance",
      title: "Performance Monitoring",
      desc: "Measure team productivity and sales efficiency using real-time performance insights.",
      points: [
        "Track response times and lead handling speed",
        "Monitor individual and team performance",
        "Measure conversion rates and outcomes",
        "Identify top-performing sales representatives",
        "Make informed decisions using live analytics",
      ],
      img: "/images/demo/lms-4.png",
    },
  ]

  return (
    <section id="features" className="mx-auto max-w-7xl space-y-24 px-6 py-24">
      {rows.map((r, i) => (
        <FeatureRow
          key={r.title}
          index={i}
          icon={r.icon}
          tag={r.tag}
          title={r.title}
          desc={r.desc}
          points={r.points}
          img={r.img}
          visual={visuals[i]}
        />
      ))}
    </section>
  )
}

/* ---------- Analytics stats ---------- */

function Analytics() {
  const stats = [
    { v: 10000, s: "+", l: "Leads Managed" },
    { v: 97, s: "%", l: "Response Rate" },
    { v: 3, s: "x", l: "Higher Conversion" },
    { v: 24, s: "/7", l: "Team Visibility" },
  ]
  return (
    <section
      id="analytics"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Numbers that move the needle
          </h2>
          <p className="mt-4 text-black">
            Teams using DigitalFueled consistently outperform legacy CRM setups.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center bg-blue-100"
            >
              <div className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
                <CountUp end={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs font-medium tracking-wider text-slate-500 uppercase">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Workflow ---------- */

function WorkflowSection() {
  const steps = [
    { l: "Lead Captured", i: Inbox },
    { l: "Assigned", i: Users },
    { l: "Follow Up", i: MessageSquare },
    { l: "Qualified", i: Target },
    { l: "Converted", i: TrendingUp },
  ]
  return (
    <Section className="container py-24">
      <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
          A workflow built for velocity
        </h2>
        <p className="mt-4 text-black">
          From first touch to closed-won — one continuous flow.
        </p>
      </motion.div>
      <div className="relative mt-16">
        <div className="absolute top-8 right-0 left-0 hidden h-px bg-linear-to-r from-blue-500/20 via-blue-500 to-orange-500 md:block" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {steps.map(({ l, i: Icon }, idx) => (
            <motion.div
              key={l}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring ring-blue-100">
                <Icon
                  className={`h-6 w-6 ${idx === steps.length - 1 ? "text-orange-500" : "text-blue-500"}`}
                />
              </div>
              <div className="mt-3 text-sm font-semibold text-black">{l}</div>
              <div className="text-[10px] text-slate-500">Step {idx + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------- Comparison ---------- */

function Comparison() {
  const rows = [
    ["Team Visibility", "Limited", "Full workspace view"],
    ["Performance Tracking", "Reports only", "Live dashboards"],
    ["Candidate Management", "Separate tool", "Built-in"],
    ["Task Tracking", "Add-on", "Native + time logs"],
    ["Reporting", "Static", "Real-time + export"],
  ]
  return (
    <Section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
          Traditional CRM vs DigitalFueled
        </h2>
        <p className="mt-4 text-black">See why sales teams are switching.</p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-14 overflow-hidden rounded-2xl bg-white ring ring-blue-100"
      >
        <div className="custom-border-b-gray-200 grid grid-cols-3 bg-slate-50 text-sm font-medium">
          <div className="p-4 text-black">Capability</div>
          <div className="p-4 text-center text-black">Traditional CRM</div>
          <div className="bg-blue-500 p-4 text-center text-white">
            DigitalFueled LMS
          </div>
        </div>
        {rows.map(([cap, trad, lms], i) => (
          <div
            key={cap}
            className={`custom-border-b-gray-200 grid grid-cols-3 text-sm last:border-0 ${i % 2 ? "bg-slate-50/40" : ""}`}
          >
            <div className="p-4 font-medium text-black">{cap}</div>
            <div className="flex items-center justify-center gap-2 p-4 text-black">
              <X className="h-4 w-4 text-slate-400" />
              {trad}
            </div>
            <div className="flex items-center justify-center gap-2 bg-blue-500/5 p-4 text-black">
              <Check className="h-4 w-4 text-blue-500" />
              {lms}
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  const items = [
    {
      n: "Alex Carter",
      r: "Sales Director",
      c: "Vertex Solutions",
      q: "The platform gives our team complete visibility into every lead and keeps our sales process organized.",
    },
    {
      n: "Emma Wilson",
      r: "Business Manager",
      c: "BrightPeak",
      q: "Simple to use, easy to adopt, and flexible enough to fit the way our team works.",
    },
    {
      n: "Daniel Brooks",
      r: "Operations Lead",
      c: "NovaWorks",
      q: "Having all lead information in one place has made collaboration across our teams much smoother.",
    },
    {
      n: "Sophia Turner",
      r: "Growth Manager",
      c: "Apex Digital",
      q: "The clean interface and streamlined workflows help us stay focused on what matters most.",
    },
  ]
  return (
    <section className="border-y border-slate-200 bg-slate-50/60 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Loved by sales teams
          </h2>
        </div>
        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...items, ...items].map((t, i) => (
              <div
                key={i}
                className="w-100 shrink-0 rounded-2xl bg-white p-6 custom-border-accent"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="mt-4 text-lg italic">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-500">
                    {t.n[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-black">
                      {t.n}
                    </div>
                    <div className="text-sm text-slate-500">
                      {t.r} · {t.c}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    [
      "What is a lead management system?",
      "A lead management system helps businesses capture, organize, track, and manage leads throughout the sales process from initial inquiry to conversion.",
    ],
    [
      "Who can use this platform?",
      "The platform is designed for businesses of all sizes looking to streamline lead tracking, improve follow-ups, and manage customer interactions more efficiently.",
    ],
    [
      "How does lead tracking work?",
      "Every lead is stored in a centralized dashboard where you can monitor activity, update statuses, assign tasks, and keep your sales process organized.",
    ],
    [
      "Can I manage leads from multiple sources?",
      "Yes, leads from websites, forms, campaigns, and other channels can be organized in one place for easier management and reporting.",
    ],
    [
      "Is my business data secure?",
      "Data security is a priority. The platform uses modern security practices to help protect business information and user data.",
    ],
    [
      "Can I customize my workflow?",
      "Businesses can adapt lead stages, processes, and workflows to match their sales cycle and operational requirements.",
    ],
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
          Frequently asked questions
        </h2>
      </div>
      <div className="mt-12 divide-y divide-slate-200 rounded-2xl bg-white ring ring-blue-100">
        {items.map(([q, a], i) => (
          <div key={q} className="p-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-base font-medium text-black">{q}</span>
              {open === i ? (
                <Minus className="h-4 w-4 text-blue-500" />
              ) : (
                <Plus className="h-4 w-4 text-slate-400" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{
                height: open === i ? "auto" : 0,
                opacity: open === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm text-black">{a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-12 text-center md:p-20">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-orange-500/30 blur-3xl" />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 hidden rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur md:block"
        >
          <TrendingUp className="h-5 w-5 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-14 left-10 hidden rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur md:block"
        >
          <Users className="h-5 w-5 text-white" />
        </motion.div>

        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Turn every lead into revenue
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Manage leads, teams, tasks, candidates and performance from a single
            platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-500 hover:bg-slate-50"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    preferredTime: "",
    message: "",
  })
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="scroll-mt-10 bg-gray-100 py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
              Ready to transform your sales process?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your team and we'll get back to you with a
              personalized demo.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Personalized walkthrough",
                  desc: "See how DigitalFueled fits your exact workflow.",
                },
                {
                  title: "No setup required",
                  desc: "Get a live demo in minutes, not days.",
                },
                {
                  title: "Transparent pricing",
                  desc: "No hidden fees, cancel anytime.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50"
          >
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-black">
                  Enquiry submitted
                </h3>
                <p className="mt-2 text-slate-600">
                  Thanks for reaching out. We'll be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-black placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-black placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Company name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      maxLength={100}
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-black placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Preferred time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    >
                      <option value="">Select a time</option>
                      <option value="Morning (9am - 12pm)">
                        Morning (9am - 12pm)
                      </option>
                      <option value="Afternoon (12pm - 5pm)">
                        Afternoon (12pm - 5pm)
                      </option>
                      <option value="Evening (5pm - 8pm)">
                        Evening (5pm - 8pm)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-black placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-70"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function LmsClient() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <Hero />
        <FeaturesGrid />
        {/* <Bento /> */}
        {/* <Features /> */}
        <FeaturesSection />
        <Analytics />
        <WorkflowSection />
        <Comparison />
        <Testimonials />
        <FAQ />
        {/* <FinalCTA /> */}
        <EnquiryForm />
      </main>
    </div>
  )
}
