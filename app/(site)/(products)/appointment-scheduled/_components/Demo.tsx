"use client"
import React, { useState } from "react"
import { Eyebrow } from "./Eyebrow"
import {
  ArrowLeft,
  CalendarClock,
  Check,
  ChevronDown,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Clock,
  Copy,
  Download,
  Globe,
  Icon,
  Mail,
  Video,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Pane = "pick" | "form" | "manage" | "done"
type Mode = "book" | "reschedule"
type Status = "ok" | "bad"
type Tone = "ok" | "bad" | "warn" | "info"
type ButtonVariant = "primary" | "accent" | "ghost" | "danger"
type ButtonSize = "md" | "sm"

interface Booking {
  day: number
  slot: any
  name: string
  email: string
}

const formFields = [
  {
    id: "fName",
    key: "name",
    label: "Name",
    type: "text",
    ph: "Aarav Sharma",
    ac: "name",
  },
  {
    id: "fEmail",
    key: "email",
    label: "Email",
    type: "email",
    ph: "aarav@example.com",
    ac: "email",
  },
] satisfies {
  id: string;
  key: keyof BookingForm;
  label: string;
  type: string;
  ph: string;
  ac: string;
}[];

interface BookingForm {
  name: string
  email: string
  notes: string
}

interface PillProps {
  tone?: Tone
  children: React.ReactNode
  className?: string
}

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
  className?: string
  children: React.ReactNode
}

const WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const OVERRIDE = 13
const TIMES = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
]
const BOOKED: Record<number, string[]> = {
  3: ["10:00", "14:30"],
  4: ["09:00", "09:30", "15:30"],
  5: ["11:00"],
  6: ["13:30", "14:00"],
  9: ["10:30"],
  10: ["09:00", "11:30"],
  11: ["14:00"],
  12: ["10:00", "13:00"],
  16: ["09:30", "15:00"],
  17: ["11:00", "11:30"],
  18: ["09:00"],
  19: ["13:30", "14:30"],
  20: ["10:30", "11:00"],
  23: ["15:30"],
  24: ["09:30", "10:00"],
  25: ["13:00"],
  26: ["11:30", "14:00"],
  27: ["09:00", "10:30"],
}
const DAYS = Array.from({ length: 30 }, (_, i) => i + 1)
const isFree = (d: number) => {
  const w = (d + 6) % 7
  return w >= 1 && w <= 5 && d !== OVERRIDE
}
const freeTimes = (d: number) =>
  TIMES.filter((t) => !(BOOKED[d] || []).includes(t))
const dayLabel = (d: number) => `${WEEKDAY[(d + 6) % 7]}, November ${d}`
const fmt = (t: string) => {
  let [h, m] = t.split(":").map(Number)
  const ap = h >= 12 ? "PM" : "AM"
  h = h % 12 || 12
  return `${h}:${String(m).padStart(2, "0")} ${ap}`
}

const PILL_TONES = {
  ok: "bg-ok-soft text-ok",
  bad: "bg-bad-soft text-bad",
  warn: "bg-[#fdf1d6] text-[#8a5a00]",
  info: "bg-indigo-100 text-accent",
}
function Pill({ tone = "ok", children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ${PILL_TONES[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

/* ---------- small building blocks ---------- */
const BTN_BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-semibold transition duration-200 hover:-translate-y-px"
const BTN_VARIANTS = {
  primary:
    "border-transparent bg-ink text-white shadow-[0_10px_24px_-12px_rgba(21,20,31,.6)] hover:bg-[#26253a]",
  accent:
    "border-transparent bg-accent text-white shadow-[0_12px_28px_-14px_rgba(59,51,209,.8)] hover:bg-accent-ink",
  ghost: "border-line bg-surface text-ink hover:border-[#cfcdc4]",
  danger: "border-[#f2d2bd] bg-bad-soft text-bad hover:bg-bad hover:text-white",
}
const BTN_SIZES = {
  md: "px-[22px] py-[13px] text-[15px]",
  sm: "px-3.5 py-2 text-[13px]",
}

function Btn({
  variant = "ghost",
  size = "md",
  block = false,
  className = "",
  children,
  ...props
}: BtnProps) {
  return (
    <button
      type="button"
      className={`${BTN_BASE} ${BTN_VARIANTS[variant]} ${BTN_SIZES[size]} ${block ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function BookingDemo() {
  const [day, setDay] = useState(2)
  const [slot, setSlot] = useState(null)
  const [pane, setPane] = useState("pick")
  const [mode, setMode] = useState("book")
  const [booking, setBooking] = useState<Booking | null>(null)
  const [form, setForm] = useState({ name: "", email: "", notes: "" })
  const [formErr, setFormErr] = useState(false)
  const [icsOpen, setIcsOpen] = useState(false)
  const [cxOpen, setCxOpen] = useState(false)
  const [status, setStatus] = useState("ok")
  const [actionsOff, setActionsOff] = useState(false)

  const times = freeTimes(day)

  const resetPickMode = () => setMode("book")

  const chooseTime = (time: any): void => {
    if (mode === "reschedule") {
      setBooking((b: any) => (b ? { ...b, day, slot: time } : null))
      setSlot(time)
      resetPickMode()
      setPane("done")
      return
    }

    setSlot(time)
    setPane("form")
  }

  const confirmBooking = (): void => {
    const bad =
      !form.name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())
    setFormErr(bad)
    if (bad) return
    setBooking({ day, slot, name: form.name.trim(), email: form.email.trim() })
    setPane("done")
    setIcsOpen(false)
  }

  const openManage = (): void => {
    if (!booking) return
    setDay(booking.day)
    setSlot(booking.slot)
    setStatus("ok")
    setActionsOff(false)
    setCxOpen(false)
    setPane("manage")
  }

  const startReschedule = (): void => {
      if (!booking) return;
    setMode("reschedule")
    setDay(booking.day)
    setSlot(null)
    setPane("pick")
  }

  const cancelBooking = (): void => {
    setCxOpen(false)
    setActionsOff(true)
    setStatus("bad")
  }

  const restart = () => {
    setBooking(null)
    setDay(2)
    setSlot(null)
    setMode("book")
    setForm({ name: "", email: "", notes: "" })
    setFormErr(false)
    setIcsOpen(false)
    setPane("pick")
  }

  const icsText = () => {
    if (!booking) return ""
    const p = (n: any) => String(n).padStart(2, "0")
    const [h, m] = booking.slot.split(":").map(Number)
    const d = `202611${p(booking.day)}`
    const end = h * 60 + m + 30
    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Appointly//Booking//EN",
      "BEGIN:VEVENT",
      "UID:demo-booking@appointly",
      `DTSTART;TZID=Asia/Kolkata:${d}T${p(h)}${p(m)}00`,
      `DTEND;TZID=Asia/Kolkata:${d}T${p(Math.floor(end / 60))}${p(end % 60)}00`,
      "SUMMARY:Intro Call, Saanvi Legal Advisors",
      "LOCATION:Online meeting",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n")
  }

  const copyIcs = async () => {
    try {
      await navigator.clipboard.writeText(icsText())
    } catch {}
  }

  const chipOn = slot && pane !== "done"
  const splitOn = pane !== "done"

  return (
    <div className="relative mx-auto">
      {splitOn && (
        <div
          className={cn(
            "border-line bg-surface grid overflow-hidden rounded-3xl border shadow-lg max-[860px]:grid-cols-1 md:grid-cols-[minmax(0,.82fr)_minmax(0,2fr)]",
            chipOn && "md:grid-cols-[minmax(0,.82fr)_minmax(0,1.4fr)]"
          )}
        >
          {/* side summary */}
          <aside className="border-line border-r bg-linear-to-b from-[#f5f6fd] to-white p-[28px_32px] max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:p-7">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-indigo-100 font-serif text-[32px] text-accent italic shadow-[0_0_0_6px_#fff,0_0_0_7px_#e7e5de]">
              S
            </span>
            <p className="mt-5 text-sm">Saanvi Legal Advisors</p>
            <h4 className="mt-1 mb-6 text-xl font-medium">Intro Call</h4>
            <div className="grid gap-2">
              {[
                { icon: <Clock size={14} />, label: "30 minutes" },
                { icon: <Video size={14} />, label: "Online meeting" },
                { icon: <Globe size={14} />, label: "Asia/Kolkata" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-3 text-xs">
                  <span className="bg-surface text-ink-2 grid h-8 w-8 place-items-center rounded-sm ring ring-border">
                    {m.icon}
                  </span>
                  {m.label}
                </div>
              ))}
            </div>
            {chipOn && (
              <div className="mt-7 flex items-center gap-3 rounded-xl p-3 ring ring-border">
                <CalendarClock size={20} className="shrink-0" />
                <div>
                  <b className="block text-sm">{dayLabel(day)}</b>
                  <small className="text-sm text-slate-700">{fmt(slot)}</small>
                </div>
              </div>
            )}
          </aside>

          {/* main */}
          <div className="relative min-w-0 p-5 pb-6 max-[860px]:p-5 max-[620px]:px-4">
            {pane === "pick" && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3.5">
                  <div className="flex items-center gap-3">
                    {mode === "reschedule" && (
                      <Btn
                        variant="ghost"
                        size="sm"
                        className="border-0 bg-transparent px-0 py-0 hover:bg-transparent"
                        onClick={() => {
                          resetPickMode()
                          setPane("manage")
                        }}
                      >
                        <ArrowLeft className="h-3.5 w-3.5" /> Back
                      </Btn>
                    )}
                    <h3 className="text-[19px] font-bold">
                      {mode === "reschedule"
                        ? "Pick a new time"
                        : "Select a date & time"}
                    </h3>
                  </div>
                  <span className="border-line bg-surface inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2 text-[14.5px] whitespace-nowrap">
                    <Globe className="text-ink-2 h-4 w-4" />
                    Asia/Kolkata
                    <ChevronDown className="text-ink-2 h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="mt-7 grid gap-6 max-[620px]:grid-cols-1 md:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)]">
                  <div className="border-line rounded-lg border p-4">
                    <div className="mb-3.5 flex items-center justify-between text-sm font-semibold">
                      <button
                        type="button"
                        disabled
                        className="grid h-8 w-8 place-items-center rounded-[10px] text-[#c5c3ce]"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span>November 2026</span>
                      <button
                        type="button"
                        className="text-ink hover:border-line grid h-8 w-8 place-items-center rounded-[10px] hover:border"
                        aria-label="Next month"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-ink-3 grid grid-cols-7 gap-1 text-center text-xs font-semibold">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((w) => (
                        <span key={w}>{w}</span>
                      ))}
                    </div>
                    <div className="mt-2 grid grid-cols-7 gap-1">
                      {DAYS.map((d) => {
                        const free = isFree(d)
                        const selected = d === day
                        return (
                          <button
                            key={d}
                            type="button"
                            disabled={!free}
                            aria-label={dayLabel(d)}
                            onClick={() => {
                              setDay(d)
                              setSlot(null)
                            }}
                            className={`relative h-8 rounded-sm text-xs font-medium transition duration-150 disabled:cursor-not-allowed ${
                              selected
                                ? "bg-accent text-white"
                                : d === OVERRIDE
                                  ? "text-bad disabled:text-bad"
                                  : free
                                    ? "text-ink hover:bg-indigo-100 hover:text-accent"
                                    : "text-[#c5c3ce]"
                            }`}
                            style={{ gridColumnStart: d === 1 ? 1 : undefined }}
                          >
                            {d}
                            {d === OVERRIDE && (
                              <span className="bg-bad absolute bottom-[5px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="border-line border-b pb-3 text-[15px] font-semibold">
                      {dayLabel(day)}
                    </div>
                    <div className="mt-3.5 grid max-h-70 gap-2.5 overflow-y-auto pr-2 [scrollbar-color:#c9c7d2_transparent] [scrollbar-width:thin]">
                      {times.length === 0 && (
                        <p className="border-line text-ink-3 rounded-2xl border border-dashed p-[18px] text-center text-sm">
                          No times left on this day.
                        </p>
                      )}
                      {times.map((tm) => (
                        <button
                          key={tm}
                          type="button"
                          onClick={() => chooseTime(tm)}
                          className={`bg-surface rounded-xl border py-3.5 text-center text-[15px] font-medium transition duration-150 hover:border-accent hover:text-accent ${
                            tm === slot
                              ? "text-accent-ink border-accent bg-indigo-100"
                              : "border-line"
                          }`}
                        >
                          {fmt(tm)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {pane === "form" && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSlot(null)
                    setPane("pick")
                  }}
                  className="text-ink inline-flex items-center gap-1.5 bg-transparent text-sm font-semibold hover:text-accent"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <h3 className="mt-6 mb-1.5 text-xl font-bold tracking-tight">
                  Enter your details
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {formFields.map((f) => (
                    <div key={f.id} className="mt-4 grid gap-2">
                      <label htmlFor={f.id} className="text-sm font-semibold">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.ph}
                        autoComplete={f.ac}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                        className="bg-surface w-full rounded-xl px-3.5 py-3 text-[15px] ring ring-border transition outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(59,51,209,.12)]"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-2">
                  <label htmlFor="fNotes" className="text-sm font-semibold">
                    Additional notes{" "}
                    <span className="text-ink-3 font-medium">(optional)</span>
                  </label>
                  <textarea
                    id="fNotes"
                    rows={3}
                    placeholder="A short overview of what we should prepare"
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    className="border-line bg-surface min-h-27 w-full resize-y rounded-xl border px-3.5 py-3 text-[15px] transition outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(59,51,209,.12)]"
                  />
                </div>

                {formErr && (
                  <p className="text-bad mt-3.5 text-[13px] font-semibold">
                    Add your name and a valid email. These fields are required.
                  </p>
                )}
                <div className="mt-[22px]">
                  <Btn variant="accent" block onClick={confirmBooking}>
                    Confirm booking
                  </Btn>
                </div>
              </div>
            )}

            {pane === "manage" && booking && (
              <div>
                <button
                  type="button"
                  onClick={() => setPane("done")}
                  className="text-ink inline-flex items-center gap-1.5 bg-transparent text-sm font-semibold hover:text-accent"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <h3 className="mt-[22px] mb-1.5 text-[22px] font-bold tracking-tight">
                  Manage booking
                </h3>
                <div className="border-line bg-surface mt-[22px] flex items-center gap-3.5 rounded-[18px] border p-4">
                  <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-indigo-100 font-serif text-xl text-accent italic">
                    IC
                  </span>
                  <div>
                    <b className="block text-[15px]">Intro Call · 30 min</b>
                    <small className="text-ink-2 text-[13px]">
                      {dayLabel(booking.day)} · {fmt(booking.slot)} · Online
                      meeting
                    </small>
                  </div>
                  <Pill
                    tone={status === "ok" ? "ok" : "bad"}
                    className="ml-auto"
                  >
                    {status === "ok" ? "Confirmed" : "Cancelled"}
                  </Pill>
                </div>
                {!actionsOff && (
                  <div className="mt-3.5 grid grid-cols-2 gap-2.5 max-[620px]:grid-cols-1">
                    <Btn size="sm" onClick={startReschedule}>
                      Reschedule
                    </Btn>
                    <Btn
                      variant="danger"
                      size="sm"
                      onClick={() => setCxOpen(true)}
                    >
                      Cancel booking
                    </Btn>
                  </div>
                )}
                {cxOpen && (
                  <div className="bg-paper mt-3.5 rounded-2xl border border-dashed border-[#cfcdc4] p-4">
                    <p className="mb-3 text-sm font-semibold">
                      Cancel this booking? The slot is released and the host is
                      updated instantly.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Btn variant="danger" size="sm" onClick={cancelBooking}>
                        Yes, cancel it
                      </Btn>
                      <Btn size="sm" onClick={() => setCxOpen(false)}>
                        Keep my booking
                      </Btn>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {!splitOn && booking && (
        <div className="bg-surface relative mx-auto max-w-[460px] rounded-3xl px-9 pt-11 pb-9 text-center shadow-lg ring ring-border max-[620px]:px-5 max-[620px]:pt-[34px] max-[620px]:pb-[26px]">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#e1f3e8]">
            <div className="text-ok grid h-[58px] w-[58px] place-items-center rounded-full bg-white ring-2 ring-[#187a4c]">
              <Check className="h-[26px] w-[26px] stroke-[2.6]" />
            </div>
          </div>
          <h3 className="5 text-[26px] font-bold tracking-tight">
            Booking confirmed
          </h3>
          <p className="text-ink-2 mt-1.5 text-[15px]">
            A confirmation has been sent to {booking.email}.
          </p>

          <div className="border-line bg-paper mt-6 rounded-[18px] border p-[20px_22px] text-left">
            <b className="block text-base">Intro Call</b>
            <ul className="mt-3.5 grid gap-3">
              <li className="text-ink-2 flex items-center gap-3 text-[15px]">
                <Clock className="text-ink-3 h-[18px] w-[18px]" />
                {dayLabel(booking.day)} · {fmt(booking.slot)} (30 min)
              </li>
              <div className="grid grid-cols-2 gap-6">
                <li className="text-ink-2 flex items-center gap-3 text-[15px]">
                  <Video className="text-ink-3 h-[18px] w-[18px]" />
                  Online meeting
                </li>
                <li className="text-ink-2 flex items-center gap-3 text-[15px]">
                  <Mail className="text-ink-3 h-[18px] w-[18px]" />
                  with Priya Nair
                </li>
              </div>
            </ul>
          </div>

          <div className="mt-[22px] grid grid-cols-2 gap-2.5 max-[620px]:grid-cols-1">
            <Btn onClick={() => setIcsOpen((o) => !o)}>
              <Download className="h-3.5 w-3.5" /> Add to calendar
            </Btn>
            <Btn onClick={openManage}>Manage booking</Btn>
          </div>

          {/* {icsOpen && (
            <div className="bg-sunk mt-4 rounded-2xl p-3.5 text-left">
              <pre className="text-ink-2 overflow-x-auto font-mono text-xs leading-relaxed whitespace-pre">
                {icsText()}
              </pre>
              <Btn size="sm" className="mt-3" onClick={copyIcs}>
                <Copy className="h-3.5 w-3.5" /> Copy .ics text
              </Btn>
            </div>
          )} */}

          {/* <p className="text-ink-2 mt-5 text-[13.5px]">
            Need to make a change? Use{" "}
            <button
              type="button"
              onClick={openManage}
              className="font-semibold text-accent underline underline-offset-[3px]"
            >
              Manage booking
            </button>{" "}
            to reschedule or cancel anytime.
          </p> */}
        </div>
      )}

      <div className="mt-[18px] flex justify-center">
        <button
          type="button"
          onClick={restart}
          className="text-ink-3 px-2.5 py-1.5 text-[13px] font-semibold hover:text-accent"
        >
          ↺ Restart demo
        </button>
      </div>
    </div>
  )
}

export function Demo() {
  return (
    <section id="demo" className="border-line bg-surface border-y py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-3 gap-16">
          <div className="mb-14">
            <Eyebrow>Live demo</Eyebrow>
            <h2 className="mb-5 text-3xl font-semibold sm:text-5xl">
              Book a meeting in 20 seconds
            </h2>
            <p>
              This is the real booking flow, running in your browser. Pick a
              date and a time, add your details, then use the manage booking
              link to reschedule or cancel.
            </p>
            <ul className="mt-6 grid gap-3.5">
              <li className="flex gap-3">
                <span className="mt-px grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-indigo-100 text-accent">
                  <Check className="h-3.5 w-3.5 stroke-3" />
                </span>
                <span>
                  Only real availability is shown. Weekends are off, one date is
                  blocked, and taken times never appear.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-px grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-indigo-100 text-accent">
                  <Check className="h-3.5 w-3.5 stroke-3" />
                </span>
                <span>
                  <b className="text-ink font-semibold">Reschedule</b> releases
                  the old slot the moment the new one is taken.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <BookingDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
