"use client"
import React, { useState } from "react"
import { Hero } from "./_components/Hero"
import { Check, Clock, Globe, Minus, Plus, Shield, Users } from "lucide-react"
import Image from "next/image"
import { Eyebrow } from "./_components/Eyebrow"
import { Demo } from "./_components/Demo"
import { FeaturesSection } from "./_components/FeaturesSection"
import { motion } from "framer-motion"
import { EnquiryForm } from "./_components/EnquiryForm"

const statsData = [
  {
    id: 1,
    icon: <Clock className="size-6 text-indigo-600" />,
    number: "24",
    text: "The reminder emails go out, 24 hours before meeting scheduled",
  },
  {
    id: 2,
    icon: <Users className="size-6 text-indigo-600" />,
    number: "0",
    text: "Zero accounts your attendees need to book, reschedule or cancel",
  },
  {
    id: 3,
    icon: <Shield className="size-6 text-indigo-600" />,
    number: "3",
    text: "workspace roles — owner, admin, member — with real boundaries",
  },
  {
    id: 4,
    icon: <Globe className="size-6 text-indigo-600" />,
    number: "100%",
    text: "of slots computed in the host's zone and shown in the attendee's",
  },
]

const STEP_COLORS = [
  {
    node: "bg-accent",
    ring: "shadow-[0_0_0_4px_#eceafd]",
    pulse: "ring-accent",
    rail: "bg-accent",
  },
  {
    node: "bg-[#0c8a84]",
    ring: "shadow-[0_0_0_4px_#dcf3f1]",
    pulse: "ring-[#0c8a84]",
    rail: "bg-[#0c8a84]",
  },
  {
    node: "bg-[#ed7708]",
    ring: "shadow-[0_0_0_4px_#fbeadf]",
    pulse: "ring-[#ed7708]",
    rail: "bg-[#ed7708]",
  },
  {
    node: "bg-[#069e57]",
    ring: "shadow-[0_0_0_4px_#e1f3e8]",
    pulse: "ring-[#069e57]",
    rail: "bg-[#069e57]",
  },
]

function ArtServices() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#f3f2ee" />
      <rect
        x="34"
        y="26"
        width="172"
        height="38"
        rx="11"
        fill="#fff"
        stroke="#e7e5de"
      />
      <circle cx="54" cy="45" r="7" fill="#3b33d1" />
      <rect
        x="70"
        y="39"
        width="76"
        height="6"
        rx="3"
        fill="#15141f"
        opacity=".85"
      />
      <rect x="70" y="51" width="46" height="4" rx="2" fill="#8b899c" />
      <rect
        x="34"
        y="72"
        width="172"
        height="38"
        rx="11"
        fill="#eceafd"
        stroke="#3b33d1"
        strokeWidth="1.5"
      />
      <circle cx="54" cy="91" r="7" fill="#0c8a84" />
      <rect
        x="70"
        y="85"
        width="88"
        height="6"
        rx="3"
        fill="#15141f"
        opacity=".85"
      />
      <rect x="70" y="97" width="52" height="4" rx="2" fill="#8b899c" />
      <rect
        x="34"
        y="118"
        width="172"
        height="38"
        rx="11"
        fill="#fff"
        stroke="#e7e5de"
      />
      <circle cx="54" cy="137" r="7" fill="#a4560d" />
      <rect
        x="70"
        y="131"
        width="66"
        height="6"
        rx="3"
        fill="#15141f"
        opacity=".85"
      />
      <rect x="70" y="143" width="40" height="4" rx="2" fill="#8b899c" />
      <circle cx="186" cy="96" r="9" fill="#15141f" />
      <path
        d="M183 93l3 3 3-3"
        stroke="#fff"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArtTime() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#f3f2ee" />
      <rect
        x="34"
        y="22"
        width="112"
        height="112"
        rx="14"
        fill="#fff"
        stroke="#e7e5de"
      />
      <rect
        x="44"
        y="32"
        width="92"
        height="6"
        rx="3"
        fill="#15141f"
        opacity=".85"
      />
      {[50, 66, 82].map((y) =>
        [44, 62, 80, 98, 116].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="14"
            height="12"
            rx="3"
            fill="#f3f2ee"
          />
        ))
      )}
      <rect x="44" y="98" width="14" height="12" rx="3" fill="#eceafd" />
      <rect x="62" y="98" width="14" height="12" rx="3" fill="#eceafd" />
      <rect x="80" y="98" width="14" height="12" rx="3" fill="#3b33d1" />
      <rect x="98" y="98" width="14" height="12" rx="3" fill="#eceafd" />
      <rect x="116" y="98" width="14" height="12" rx="3" fill="#eceafd" />
      <rect x="160" y="34" width="46" height="22" rx="11" fill="#dcf3f1" />
      <rect x="170" y="42" width="26" height="6" rx="3" fill="#0c8a84" />
      <rect
        x="160"
        y="64"
        width="46"
        height="60"
        rx="12"
        fill="#fff"
        stroke="#e7e5de"
      />
      <rect x="168" y="74" width="30" height="6" rx="3" fill="#8b899c" />
      <rect x="168" y="88" width="30" height="16" rx="6" fill="#3b33d1" />
      <rect x="168" y="110" width="30" height="8" rx="4" fill="#eceafd" />
      <circle cx="186" cy="150" r="10" fill="#15141f" />
      <path
        d="M182 150l3 3 5-6"
        stroke="#fff"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArtQuestions() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#f3f2ee" />
      <rect
        x="46"
        y="20"
        width="148"
        height="142"
        rx="16"
        fill="#fff"
        stroke="#e7e5de"
      />
      <rect
        x="60"
        y="36"
        width="52"
        height="6"
        rx="3"
        fill="#15141f"
        opacity=".85"
      />
      <rect
        x="60"
        y="52"
        width="120"
        height="20"
        rx="7"
        fill="#faf9f6"
        stroke="#e7e5de"
      />
      <rect x="66" y="59" width="46" height="6" rx="3" fill="#8b899c" />
      <rect
        x="60"
        y="80"
        width="120"
        height="20"
        rx="7"
        fill="#faf9f6"
        stroke="#e7e5de"
      />
      <rect x="66" y="87" width="62" height="6" rx="3" fill="#8b899c" />
      <rect
        x="60"
        y="108"
        width="120"
        height="36"
        rx="7"
        fill="#faf9f6"
        stroke="#3b33d1"
        strokeWidth="1.5"
      />
      <rect
        x="66"
        y="115"
        width="84"
        height="5"
        rx="2.5"
        fill="#3b33d1"
        opacity=".7"
      />
      <rect x="66" y="125" width="54" height="5" rx="2.5" fill="#8b899c" />
      <circle cx="170" cy="146" r="14" fill="#eceafd" />
      <path
        d="M164 146l4 4 8-8"
        stroke="#3b33d1"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArtDone() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#f3f2ee" />
      <rect
        x="52"
        y="30"
        width="136"
        height="120"
        rx="18"
        fill="#fff"
        stroke="#e7e5de"
      />
      <circle cx="120" cy="72" r="22" fill="#e1f3e8" />
      <circle
        cx="120"
        cy="72"
        r="12"
        fill="#fff"
        stroke="#187a4c"
        strokeWidth="2"
      />
      <path
        d="M115 72l3.5 3.5 6.5-6.5"
        stroke="#187a4c"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="78"
        y="106"
        width="84"
        height="6"
        rx="3"
        fill="#15141f"
        opacity=".85"
      />
      <rect x="88" y="118" width="64" height="5" rx="2.5" fill="#8b899c" />
      <rect x="72" y="132" width="96" height="1.5" fill="#e7e5de" />
      <rect x="78" y="140" width="44" height="6" rx="3" fill="#8b899c" />
      <rect x="124" y="140" width="38" height="6" rx="3" fill="#3b33d1" />
      <circle cx="184" cy="46" r="14" fill="#3b33d1" />
      <rect
        x="178"
        y="43"
        width="12"
        height="9"
        rx="2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
      />
      <path
        d="M179 43v-2a5 5 0 0110 0v2"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

const JOURNEY = [
  {
    art: ArtServices,
    images: "/images/appointly-4.png",
    title: "Pick a service",
    text: "Every active event type is listed with its duration, location and colour. Intro Call, Site Visit, 90-minute consult.",
  },
  {
    art: ArtTime,
    images: "/images/appointly-5.png",
    title: "Pick a time",
    text: "The calendar shows only real availability, already converted into the guest's own time zone.",
  },
  {
    art: ArtQuestions,
    images: "/images/appointly-6.png",
    title: "Answer your questions",
    text: "Name and email, plus anything you asked: short text, long text or phone. Required or optional.",
  },
  {
    art: ArtDone,
    images: "/images/appointly-7.png",
    title: "Done, with a manage link",
    text: "A confirmation page, a calendar file, and a private link to reschedule or cancel at any time.",
  },
]

function AppointlyClient() {
  return (
    <>
      <Hero />
      {/* <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl p-6 transition-all duration-300"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/appointly.svg"
                width={200}
                height={200}
                alt="svg"
                className="size-full object-cover"
              />
            </div>
            <div className="relative z-10 flex h-full w-full flex-col items-start">
              <div className="mb-8 rounded-lg bg-white p-3 backdrop-blur-md transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="mb-4 text-5xl font-medium text-white">
                {stat.number}
              </div>
              <p className="mt-auto mb-0 text-lg text-white">{stat.text}</p>
            </div>
          </div>
        ))}
      </div> */}
      <FeaturesSection />
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <div>
              <Eyebrow>The attendee journey</Eyebrow>
              <h2 className="mb-5 text-3xl font-semibold sm:text-5xl">
                Four steps, zero back-and-forth
              </h2>
            </div>
            <p className="mx-auto max-w-[56ch] text-lg">
              Everything here is public. No account, no password, no "does
              Tuesday work?" thread. Share your link and let the calendar do the
              talking.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((s, i) => {
              const Art = s.art
              const c = STEP_COLORS[i]
              return (
                <li key={s.title} className="relative flex min-w-0 flex-col">
                  <div className="border-line bg-surface aspect-4/3 overflow-hidden rounded-[22px] border shadow-sm">
                    {/* <Art /> */}
                    <Image src={s.images} width={400} height={400} alt="" />
                  </div>

                  <div className="relative mt-6 h-3.5">
                    <span
                      className={`absolute top-0 left-4 z-1 h-3.5 w-3.5 rounded-full ${c.node} ${c.ring}`}
                    >
                      <span
                        className={`animate-dotping absolute -inset-1 rounded-full opacity-0 ring-2 ${c.pulse}`}
                      />
                    </span>
                    <span className="absolute top-1/2 -right-6 left-0 hidden border-t-[1.5px] border-dashed border-[#cfcdc4] lg:block">
                      <span
                        className={`animate-travel absolute -top-1 left-0 h-2 w-2 rounded-full opacity-0 ${c.rail}`}
                        style={{ animationDelay: `${i * 0.6}s` }}
                      />
                    </span>
                  </div>

                  {/* <span className="mt-[22px] block font-mono text-xs text-ink-3">STEP 0{i + 1}</span> */}
                  <h3 className="mt-8 text-xl font-medium">{s.title}</h3>
                  <p className="mt-2">{s.text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <Demo />
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-16">
            <div className="h-full overflow-hidden rounded-2xl bg-white">
              <Image
                src="/images/appointly-3.png"
                width={600}
                height={800}
                alt="Admin Panel Image"
              />
            </div>
            <div>
              <div className="text-white">
                <span className="mb-4 inline-flex items-center gap-2.5 font-geist text-xs font-bold tracking-wider text-white uppercase">
                  host side
                </span>
                <h2 className="mb-5 text-3xl font-semibold sm:text-5xl">
                  Requests you control, inbox-style
                </h2>
              </div>
              <p className="text-lg text-white">
                Turn on manual confirmation for an event type and new bookings
                arrive as Pending — nothing is confirmed until you approve it.
              </p>
              <ul className="mt-6 grid gap-3.5 text-white">
                <li className="flex gap-3">
                  <span className="mt-px grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-indigo-100 text-accent">
                    <Check className="h-3.5 w-3.5 stroke-3" />
                  </span>
                  <span>
                    Tabs for Upcoming, Pending, Past and Cancelled, with live
                    counts
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-px grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-indigo-100 text-accent">
                    <Check className="h-3.5 w-3.5 stroke-3" />
                  </span>
                  <span>
                    Owners & admins see everyone's bookings labelled by host;
                    members see only their own
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-px grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-indigo-100 text-accent">
                    <Check className="h-3.5 w-3.5 stroke-3" />
                  </span>
                  <span>
                    Every booking snapshots its event, host and answers —
                    deleting an event type never erases history
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-px grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-indigo-100 text-accent">
                    <Check className="h-3.5 w-3.5 stroke-3" />
                  </span>
                  <span>
                    The attendee watches the outcome on their manage page the
                    moment you decide
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <EnquiryForm />
    </>
  )
}

export default AppointlyClient

function FAQ() {
  const items = [
    {
      q: "Do my clients need an account to book or reschedule?",
      a: "No. Booking, confirmation, rescheduling and cancelling are all public. The confirmation includes a manage link secured by a crypto-random token. That token is the authorization, so there is nothing to sign up for and nothing to guess.",
    },
    {
      q: "How do time zones work?",
      a: "Each availability schedule is pinned to a time zone, and slots are computed there. Guests see those slots in their own time zone automatically. The booking stores the exact instant, so nobody does mental math.",
    },
    {
      q: "What happens when someone reschedules?",
      a: "A reschedule is a cancel and a create, linked in one transaction. The old slot is released the moment the new one is taken, the full trail is kept, and it still counts as one booking in your stats. It works the same whether the host or the attendee starts it.",
    },
    {
      q: "How does sign-up and phone verification work?",
      a: "You register with name, email, password and mobile number. A 6-digit code, valid for 10 minutes, is sent over WhatsApp to verify the number before the account exists. Google sign-in is optional per deployment. Your first workspace is created automatically.",
    },
    {
      q: "Can we self-host it?",
      a: "Yes. It is a standard Next.js, Prisma and MySQL app with every environment variable documented in the repo. Use Node 20 or later, run the migrations, seed the first super admin, and you are live.",
    },
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-[#f4f4f4] py-24">
      <div id="faq" className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-[1.5fr_1.8fr] gap-12">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mb-5 text-3xl font-semibold tracking-tight text-black md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="text-lg">
              The short version of how Appointly works. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Est, officiis placeat! At,
              quaerat a et, quos explicabo, incidunt repellat deleniti tempore
              ducimus fu.
            </p>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl bg-white ring ring-blue-100">
            {items.map((q, i) => (
              <div key={i} className="p-6">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-base font-medium text-black">
                    {q.q}
                  </span>
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
                  <p className="mt-3 text-sm text-black">{q.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
