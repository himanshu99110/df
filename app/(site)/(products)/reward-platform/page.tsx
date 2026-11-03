'use client'

import { motion } from "framer-motion";
import type { Metadata } from "next"
import { ComingSoon } from "../_components/coming-soon"
import {
  ArrowRight,
  Backpack,
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  CalendarClock,
  Check,
  Clock,
  Coffee,
  CreditCard,
  Eye,
  FileText,
  Gift,
  Headphones,
  History,
  KeyRound,
  Layers,
  LayoutTemplate,
  Link2,
  Lock,
  LogOut,
  Mail,
  MailCheck,
  MessageSquare,
  Package,
  Palette,
  PartyPopper,
  Receipt,
  Send,
  Settings2,
  ShieldCheck,
  Store,
  Target,
  Ticket,
  Timer,
  User,
  UserCog,
  UserRound,
  Users,
  Video,
  Wallet,
  Watch,
} from "lucide-react"

// export const metadata: Metadata = {
//   title: "Reward Platform - Digital Fueled IT Private Limited",
//   description:
//     "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
//   keywords:
//     "Website development company in Delhi NCR, Website Development Company Noida.",
// }

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen overflow-x-clip bg-stone-50 font-sans text-stone-700 antialiased dark:bg-stone-950 dark:text-stone-300">
        <main id="top">
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-teal-200/60 blur-3xl dark:bg-teal-500/10"></div>
            <div className="pointer-events-none absolute top-48 -left-24 size-72 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-500/10"></div>
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
              <div className="min-w-0">
                <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold tracking-wide text-teal-800 uppercase dark:border-teal-800 dark:bg-teal-950 dark:text-teal-300">
                  <PartyPopper size={16} /> Employee rewards and campaigns
                </p>
                <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-balance text-stone-900 sm:text-5xl lg:text-6xl dark:text-white">
                  Send rewards your people actually claim.
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-black dark:text-stone-400">
                  RewardsApp lets your company credit points, share reward codes
                  and send branded gift links, then follows up automatically
                  until every reward is claimed.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-700/20 hover:bg-teal-800 dark:bg-teal-500 dark:text-teal-950 dark:shadow-none dark:hover:bg-teal-400"
                  >
                    Book a demo <ArrowRight size={16} />
                  </a>
                  <a
                    href="#rewards"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:text-white dark:hover:bg-stone-900"
                  >
                    See reward types
                  </a>
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-black dark:text-stone-400">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="size-4 text-teal-700 dark:text-teal-400" />{" "}
                    Points, codes and gift links
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="size-4 text-teal-700 dark:text-teal-400" />{" "}
                    Email and SMS delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="size-4 text-teal-700 dark:text-teal-400" />{" "}
                    Razorpay checkout
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto w-full max-w-md min-w-0 lg:max-w-none">
                <div className="rounded-3xl border border-stone-200 bg-white p-3 shadow-2xl shadow-teal-900/10 dark:border-stone-800 dark:bg-stone-900 dark:shadow-none">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="bg-linear-to-br from-teal-700 to-teal-900 px-6 pt-8 pb-10 text-center text-white">
                      <div className="mx-auto grid size-14 place-items-center rounded-full bg-amber-300 text-amber-950">
                        <PartyPopper className="size-7" />
                      </div>
                      <p className="mt-4 text-sm font-semibold tracking-wide text-teal-100 uppercase">
                        Diwali Recognition 2026
                      </p>
                      <h2 className="mt-1 text-3xl font-bold">
                        Congratulations, Aarav!
                      </h2>
                      <p className="mt-2 text-teal-100">
                        Thank you for closing the Q3 launch ahead of schedule.
                      </p>
                    </div>
                    <div className="mx-4 -mt-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-lg dark:border-stone-700 dark:bg-stone-800">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold tracking-wide text-stone-500 uppercase dark:text-stone-400">
                            Your reward
                          </p>
                          <p className="text-3xl font-bold text-stone-900 dark:text-white">
                            2,500 points
                          </p>
                        </div>
                        <span className="grid size-12 place-items-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                          <Wallet className="size-6" />
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-3 dark:border-stone-600 dark:bg-stone-900">
                        <span className="font-mono text-sm font-semibold tracking-wider text-stone-900 dark:text-white">
                          DIWALI-4K7Q-92
                        </span>
                        <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                          CODE
                        </span>
                      </div>
                      <button className="mt-4 w-full rounded-xl bg-teal-700 py-3 font-semibold text-white dark:bg-teal-500 dark:text-teal-950">
                        Claim reward
                      </button>
                    </div>
                    <div className="h-5"></div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:absolute sm:-bottom-6 sm:-left-8 sm:mt-0 sm:w-60">
                  <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-xl dark:border-stone-700 dark:bg-stone-800">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
                      <BellRing className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-stone-900 dark:text-white">
                        Reminder sent
                      </p>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        412 recipients have not claimed yet
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-xl sm:absolute sm:-top-5 sm:-right-4 sm:mt-0 sm:w-56 dark:border-stone-700 dark:bg-stone-800">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300">
                    <Wallet className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-stone-900 dark:text-white">
                      +₹2,500 credited
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      Added to Aarav's wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="rewards"
            className="border-y border-stone-200 bg-white py-20 dark:border-stone-800 dark:bg-stone-900/50"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-bold tracking-wide text-teal-700 uppercase dark:text-teal-400">
                  Core rewards
                </p>
                <h2 className="mt-2 text-3xl font-bold text-balance text-stone-900 sm:text-4xl dark:text-white">
                  Three ways to say thank you
                </h2>
                <p className="mt-3 text-lg text-black dark:text-stone-400">
                  Pick the reward type that fits the moment. Every type connects
                  to a campaign, a landing page and reminders.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <article className="flex min-w-0 flex-col rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <span className="grid size-12 place-items-center rounded-2xl bg-teal-700 text-white dark:bg-teal-500 dark:text-teal-950">
                    <Wallet className="size-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-white">
                    Points and wallet rewards
                  </h3>
                  <p className="mt-2 text-black dark:text-stone-400">
                    Credit points straight to a recipient's wallet and let them
                    spend them in your approved catalog.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm font-medium">
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Credit points directly to wallets
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Redeem through an approved storefront catalog
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      View wallet details and every transaction
                    </li>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800">
                    <p className="text-xs font-bold tracking-wide text-stone-500 uppercase dark:text-stone-400">
                      Wallet balance
                    </p>
                    <p className="text-2xl font-bold text-stone-900 dark:text-white">
                      4,850 pts
                    </p>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Diwali Recognition</span>
                        <span className="font-semibold text-teal-700 dark:text-teal-300">
                          +2,500
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Redeemed: Coffee set</span>
                        <span className="font-semibold text-rose-700 dark:text-rose-300">
                          -1,200
                        </span>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="flex min-w-0 flex-col rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <span className="grid size-12 place-items-center rounded-2xl bg-amber-400 text-amber-950">
                    <Ticket className="size-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-white">
                    Reward codes
                  </h3>
                  <p className="mt-2 text-black dark:text-stone-400">
                    Deliver unique codes by email and send people to a
                    congratulations page that shows the message and the code.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm font-medium">
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Distribute codes to recipients
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Deliver through email campaigns
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Congratulations pages with message and code
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Scheduled reminders to claim
                    </li>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-dashed border-amber-400 bg-amber-50 p-4 text-center dark:border-amber-500/50 dark:bg-amber-500/10">
                    <p className="text-xs font-bold tracking-wide text-amber-800 uppercase dark:text-amber-300">
                      Your code
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold tracking-widest text-stone-900 dark:text-white">
                      DIWALI-4K7Q-92
                    </p>
                  </div>
                </article>

                <article className="flex min-w-0 flex-col rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <span className="grid size-12 place-items-center rounded-2xl bg-rose-500 text-white">
                    <Link2 className="size-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-white">
                    Reward links and gift claims
                  </h3>
                  <p className="mt-2 text-black dark:text-stone-400">
                    Send a branded link and let each person choose their own
                    gift from a catalog you approve.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm font-medium">
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Branded reward links
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Gift Selector on compatible landing pages
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Guided gift selection and claiming
                    </li>
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Linked to your approved product catalog
                    </li>
                  </ul>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border-2 border-teal-600 bg-white p-3 text-center dark:border-teal-400 dark:bg-stone-800">
                      <Headphones className="mx-auto size-7 text-teal-700 dark:text-teal-300" />
                      <p className="mt-1 text-xs font-bold text-stone-900 dark:text-white">
                        Headphones
                      </p>
                    </div>
                    <div className="rounded-xl border border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-800">
                      <Coffee className="mx-auto size-7 text-stone-500 dark:text-stone-400" />
                      <p className="mt-1 text-xs font-bold text-stone-900 dark:text-white">
                        Coffee set
                      </p>
                    </div>
                    <div className="rounded-xl border border-stone-200 bg-white p-3 text-center dark:border-stone-700 dark:bg-stone-800">
                      <Backpack className="mx-auto size-7 text-stone-500 dark:text-stone-400" />
                      <p className="mt-1 text-xs font-bold text-stone-900 dark:text-white">
                        Backpack
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="campaigns" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-bold tracking-wide text-teal-700 uppercase dark:text-teal-400">
                  Campaign management
                </p>
                <h2 className="mt-2 text-3xl font-bold text-balance text-stone-900 sm:text-4xl dark:text-white">
                  Launch to hundreds, follow up on autopilot
                </h2>
                <p className="mt-3 text-lg text-black dark:text-stone-400">
                  Choose an audience, set the reward, pick the channels and
                  schedule the nudges. Review everything in one summary before
                  you send.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-6 lg:col-span-2 dark:border-stone-800 dark:bg-stone-900">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                    Everything a campaign needs
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="flex gap-3 rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                      <Send className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      <div>
                        <p className="font-bold text-stone-900 dark:text-white">
                          Online campaigns
                        </p>
                        <p className="text-sm">
                          Create and distribute digital reward campaigns.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                      <Layers className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      <div>
                        <p className="font-bold text-stone-900 dark:text-white">
                          Bulk distribution
                        </p>
                        <p className="text-sm">
                          Send rewards to many recipients at once.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                      <Mail className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      <div>
                        <p className="font-bold text-stone-900 dark:text-white">
                          Email campaigns
                        </p>
                        <p className="text-sm">
                          Deliver rewards and campaign messages by email.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                      <MessageSquare className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      <div>
                        <p className="font-bold text-stone-900 dark:text-white">
                          SMS campaigns
                        </p>
                        <p className="text-sm">
                          Support campaign delivery through SMS.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                      <Target className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      <div>
                        <p className="font-bold text-stone-900 dark:text-white">
                          Audience selection
                        </p>
                        <p className="text-sm">
                          Configure exactly who receives a campaign.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                      <FileText className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      <div>
                        <p className="font-bold text-stone-900 dark:text-white">
                          Campaign summaries
                        </p>
                        <p className="text-sm">
                          Review setup and reward configuration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 rounded-3xl bg-teal-900 p-6 text-teal-50 dark:bg-teal-950 dark:ring-1 dark:ring-teal-800">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-amber-300 text-amber-950">
                      <CalendarClock className="size-5" />
                    </span>
                    <h3 className="text-xl font-bold">
                      Multiple reminder dates
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-teal-100">
                    Remind recipients about pending claims on the dates you
                    choose.
                  </p>
                  <ol className="mt-5 space-y-3">
                    <li className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
                      <span>
                        <span className="font-bold">Tue 3 Nov</span> · Email
                      </span>
                      <span className="text-teal-200">412 pending</span>
                    </li>
                    <li className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
                      <span>
                        <span className="font-bold">Tue 10 Nov</span> · SMS
                      </span>
                      <span className="text-teal-200">Scheduled</span>
                    </li>
                    <li className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
                      <span>
                        <span className="font-bold">Tue 17 Nov</span> · Email
                      </span>
                      <span className="text-teal-200">Scheduled</span>
                    </li>
                  </ol>
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-amber-300">
                    <BellRing className="size-4" />
                    Automated recipient follow-ups
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="builder"
            className="border-y border-stone-200 bg-white py-20 dark:border-stone-800 dark:bg-stone-900/50"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
              <div className="min-w-0">
                <p className="text-sm font-bold tracking-wide text-teal-700 uppercase dark:text-teal-400">
                  Branded landing page builder
                </p>
                <h2 className="mt-2 text-3xl font-bold text-balance text-stone-900 sm:text-4xl dark:text-white">
                  Every reward lands on a page that looks like your company
                </h2>
                <p className="mt-3 text-lg text-black dark:text-stone-400">
                  Start from a standard theme or your saved company design,
                  personalise it for each recipient and preview it before it
                  goes out.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  <li className="flex gap-3">
                    <Palette className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    Standard themes or saved company designs
                  </li>

                  <li className="flex gap-3">
                    <Video className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    Hero sections, videos and call-to-action blocks
                  </li>

                  <li className="flex gap-3">
                    <UserRound className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    Recipient-specific variables
                  </li>

                  <li className="flex gap-3">
                    <Eye className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    Preview before using in a campaign
                  </li>

                  <li className="flex gap-3">
                    <Gift className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    Gift Selector for Reward Link campaigns
                  </li>

                  <li className="flex gap-3">
                    <PartyPopper className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    Congratulations pages for Points and Codes
                  </li>
                </ul>
                <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
                  Pages match the selected reward type, so a Points campaign
                  never shows a gift picker.
                </p>
              </div>

              <div className="min-w-0 rounded-3xl border border-stone-200 bg-stone-100 p-3 dark:border-stone-700 dark:bg-stone-800">
                <div className="flex items-center gap-2 px-2 pb-3">
                  <span className="size-3 rounded-full bg-rose-400"></span>
                  <span className="size-3 rounded-full bg-amber-400"></span>
                  <span className="size-3 rounded-full bg-teal-500"></span>
                  <span className="ml-3 min-w-0 truncate rounded-full bg-white px-3 py-1 text-xs text-stone-500 dark:bg-stone-900 dark:text-stone-400">
                    rewards.in/diwali
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl bg-white dark:bg-stone-900">
                  <div className="bg-linear-to-br from-amber-400 to-rose-500 px-6 py-8 text-center text-white">
                    <p className="text-xs font-bold tracking-widest uppercase">
                      Acme Industries
                    </p>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                      Happy Diwali, first_name
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      You have points points waiting.
                    </p>
                    <span className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-rose-700">
                      Pick your gift
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 p-4">
                    <div className="rounded-xl border border-stone-200 p-3 text-center dark:border-stone-700">
                      <Headphones className="mx-auto size-6 text-teal-700 dark:text-teal-300" />
                      <p className="mt-1 text-xs font-semibold text-stone-900 dark:text-white">
                        Headphones
                      </p>
                    </div>

                    <div className="rounded-xl border border-stone-200 p-3 text-center dark:border-stone-700">
                      <Watch className="mx-auto size-6 text-teal-700 dark:text-teal-300" />
                      <p className="mt-1 text-xs font-semibold text-stone-900 dark:text-white">
                        Smartwatch
                      </p>
                    </div>

                    <div className="rounded-xl border border-stone-200 p-3 text-center dark:border-stone-700">
                      <Backpack className="mx-auto size-6 text-teal-700 dark:text-teal-300" />
                      <p className="mt-1 text-xs font-semibold text-stone-900 dark:text-white">
                        Backpack
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 border-t border-stone-200 p-4 dark:border-stone-700">
                    <span className="rounded-md bg-teal-100 px-2 py-1 font-mono text-xs text-teal-800 dark:bg-teal-500/15 dark:text-teal-300">
                      first_name
                    </span>
                    <span className="rounded-md bg-teal-100 px-2 py-1 font-mono text-xs text-teal-800 dark:bg-teal-500/15 dark:text-teal-300">
                      points
                    </span>
                    <span className="rounded-md bg-teal-100 px-2 py-1 font-mono text-xs text-teal-800 dark:bg-teal-500/15 dark:text-teal-300">
                      code
                    </span>
                    <span className="ml-auto rounded-md bg-stone-100 px-2 py-1 text-xs font-semibold text-black dark:bg-stone-800 dark:text-stone-400">
                      Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="storefront" className="py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
              <div className="order-2 flex justify-center lg:order-1">
                <div className="w-72 max-w-full rounded-[2.5rem] border-8 border-stone-900 bg-white shadow-2xl dark:border-stone-700 dark:bg-stone-900">
                  <div className="relative overflow-hidden rounded-[1.75rem]">
                    <div className="absolute left-1/2 h-6 w-18 -translate-x-1/2 rounded-full bg-black top-3"></div>
                    <div className="bg-teal-800 px-5 pt-12 pb-8 text-white">
                      <p className="text-xs font-bold tracking-widest text-teal-200 uppercase">
                        Rewards Store
                      </p>
                      <p className="mt-3 text-sm text-teal-100">
                        Wallet balance
                      </p>
                      <p className="text-3xl font-bold">4,850 pts</p>
                    </div>
                    <div className="-mt-4 space-y-3 rounded-t-3xl bg-white p-4 dark:bg-stone-900">
                      <div className="grid grid-cols-1 gap-2">
                        <div className="rounded-2xl bg-stone-100 p-3 dark:bg-stone-800">
                          <Headphones className="size-7 text-teal-700 dark:text-teal-300" />
                          <p className="mt-2 text-sm font-bold text-stone-900 dark:text-white">
                            Headphones
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400">
                            3,200 pts
                          </p>
                        </div>

                        <div className="rounded-2xl bg-stone-100 p-3 dark:bg-stone-800">
                          <Coffee className="size-7 text-amber-600 dark:text-amber-300" />
                          <p className="mt-2 text-sm font-bold text-stone-900 dark:text-white">
                            Coffee set
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400">
                            1,200 pts
                          </p>
                        </div>

                        <div className="rounded-2xl bg-stone-100 p-3 dark:bg-stone-800">
                          <Backpack className="size-7 text-rose-600 dark:text-rose-300" />
                          <p className="mt-2 text-sm font-bold text-stone-900 dark:text-white">
                            Backpack
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400">
                            2,100 pts
                          </p>
                        </div>

                        {/* <div className="rounded-2xl bg-stone-100 p-3 dark:bg-stone-800">
                          <Watch className="size-7 text-teal-700 dark:text-teal-300" />
                          <p className="mt-2 text-sm font-bold text-stone-900 dark:text-white">
                            Smartwatch
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400">
                            4,500 pts
                          </p>
                        </div> */}
                      </div>

                      <div className="flex justify-around border-t border-stone-200 pt-3 text-stone-500 dark:border-stone-700 dark:text-stone-400">
                        <Store className="size-5 text-teal-700 dark:text-teal-300" />
                        <Package className="size-5" />
                        <Ticket className="size-5" />
                        <UserRound className="size-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 min-w-0 lg:order-2">
                <p className="text-sm font-bold tracking-wide text-teal-700 uppercase dark:text-teal-400">
                  Employee storefront
                </p>
                <h2 className="mt-2 text-3xl font-bold text-balance text-stone-900 sm:text-4xl dark:text-white">
                  A company-branded store for spending what they earn
                </h2>
                <p className="mt-3 text-lg text-black dark:text-stone-400">
                  Employees browse the catalog you approve, check their balance
                  and track what they ordered, all under your brand.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                    <Store className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Company-branded storefront
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                    <Package className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Customisable approved catalogs
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                    <Eye className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Catalog visibility settings
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                    <Receipt className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Employee order management
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                    <Ticket className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Voucher management
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                    <Wallet className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Wallet balance and transactions
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 sm:col-span-2 dark:border-stone-800 dark:bg-stone-900">
                    <UserRound className="mt-0.5 size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                    <p className="font-semibold text-stone-900 dark:text-white">
                      Employee profile management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section id="budget" className="bg-teal-950 py-20 text-teal-50">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
              <div className="min-w-0">
                <p className="text-sm font-bold tracking-wide text-amber-300 uppercase">
                  Budget and payments
                </p>
                <h2 className="mt-2 text-3xl font-bold text-balance text-white sm:text-4xl">
                  Know what you have, lock what you promised
                </h2>
                <p className="mt-3 text-lg text-teal-100">
                  Allocate budget to a campaign and lock it, so rewards you have
                  announced are always covered. Top up the company wallet with
                  Razorpay checkout when you need to.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3">
                    <Wallet className="mt-0.5 size-5 shrink-0 text-amber-300" />
                    Track company wallet balances
                  </li>

                  <li className="flex gap-3">
                    <History className="mt-0.5 size-5 shrink-0 text-amber-300" />
                    View wallet transactions
                  </li>

                  <li className="flex gap-3">
                    <Lock className="mt-0.5 size-5 shrink-0 text-amber-300" />
                    Allocate and lock campaign budgets
                  </li>

                  <li className="flex gap-3">
                    <CreditCard className="mt-0.5 size-5 shrink-0 text-amber-300" />
                    Razorpay checkout where required
                  </li>

                  <li className="flex gap-3">
                    <BarChart3 className="mt-0.5 size-5 shrink-0 text-amber-300" />
                    Manage campaign-related spending
                  </li>
                </ul>
              </div>
              <div className="min-w-0 rounded-3xl bg-white/5 p-5 ring-1 ring-white/15">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="min-w-0 rounded-2xl bg-white/10 p-3">
                    <p className="text-xs text-teal-200">Wallet</p>
                    <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                      ₹12,40,000
                    </p>
                  </div>
                  <div className="min-w-0 rounded-2xl bg-white/10 p-3">
                    <p className="text-xs text-teal-200">Allocated</p>
                    <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                      ₹8,00,000
                    </p>
                  </div>
                  <div className="min-w-0 rounded-2xl bg-amber-300 p-3 text-amber-950">
                    <p className="text-xs font-semibold">Locked</p>
                    <p className="mt-1 text-lg font-bold sm:text-xl">
                      ₹5,50,000
                    </p>
                  </div>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[22rem] text-left text-sm">
                    <thead className="text-xs tracking-wide text-teal-200 uppercase">
                      <tr>
                        <th className="py-2 font-semibold">Transaction</th>
                        <th className="py-2 font-semibold">Date</th>
                        <th className="py-2 text-right font-semibold">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-3">Wallet top-up (Razorpay)</td>
                        <td className="py-3 text-teal-200">27 Oct</td>
                        <td className="py-3 text-right font-semibold text-teal-300">
                          +₹5,00,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3">Diwali Recognition lock</td>
                        <td className="py-3 text-teal-200">28 Oct</td>
                        <td className="py-3 text-right font-semibold text-amber-300">
                          ₹5,50,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3">Spot Awards, Q3</td>
                        <td className="py-3 text-teal-200">21 Oct</td>
                        <td className="py-3 text-right font-semibold text-rose-300">
                          -₹75,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section> */}

          <section id="admin" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-bold tracking-wide text-teal-700 uppercase dark:text-teal-400">
                  Administration and security
                </p>
                <h2 className="mt-2 text-3xl font-bold text-balance text-stone-900 sm:text-4xl dark:text-white">
                  The right people see the right campaigns
                </h2>
                <p className="mt-3 text-lg text-black dark:text-stone-400">
                  Control who can do what, keep every company or tenant separate
                  and make account recovery safe.
                </p>
              </div>
              <div className="mt-12 grid gap-6 lg:grid-cols-5">
                <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-6 lg:col-span-3 dark:border-stone-800 dark:bg-stone-900">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                    Administration and access
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <Users className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Manage active employees
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <KeyRound className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Assign roles and permissions
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <UserCog className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Manage sub-admin accounts
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <Layers className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Configure vertical assignments
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <Building2 className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Restrict campaigns by company or tenant
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <Eye className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Manage campaign visibility
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <MailCheck className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Manage email templates and landing pages
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-stone-800/60">
                      <Settings2 className="size-5 shrink-0 text-teal-700 dark:text-teal-400" />
                      Configure storefront settings
                    </div>
                  </div>
                </div>
                <div className="min-w-0 rounded-3xl border border-stone-200 bg-white p-6 lg:col-span-2 dark:border-stone-800 dark:bg-stone-900">
                  <span className="grid size-12 place-items-center rounded-2xl bg-teal-700 text-white dark:bg-teal-500 dark:text-teal-950">
                    <ShieldCheck className="size-6" />
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-stone-900 dark:text-white">
                    Account security and recovery
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm font-medium">
                    <li className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Password-reset emails that know your tenant
                    </li>

                    <li className="flex gap-3">
                      <Timer className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Reset links valid for 60 minutes
                    </li>

                    <li className="flex gap-3">
                      <LogOut className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Existing API sessions revoked after a reset
                    </li>

                    <li className="flex gap-3">
                      <Building2 className="mt-0.5 size-4 shrink-0 text-teal-700 dark:text-teal-400" />
                      Access kept inside company or tenant boundaries
                    </li>
                  </ul>

                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-amber-50 p-4 dark:bg-amber-500/10">
                    <Timer className="size-6 shrink-0 text-amber-700 dark:text-amber-300" />
                    <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                      This reset link expires in 60 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-stone-200 bg-white py-16 dark:border-stone-800 dark:bg-stone-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold tracking-wide text-teal-700 uppercase dark:text-teal-400">
                    Reporting and supporting tools
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-balance text-stone-900 dark:text-white">
                    See what was sent, claimed and spent
                  </h2>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
                  <BarChart3 className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Campaign reports
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
                  <Mail className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Email template manager
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
                  <LayoutTemplate className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Landing page builder
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
                  <Store className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Storefront configuration
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
                  <Eye className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Catalog visibility
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
                  <History className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Wallet transaction history
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:col-span-2 dark:border-stone-800 dark:bg-stone-900">
                  <FileText className="size-6 text-teal-700 dark:text-teal-400" />
                  <p className="mt-3 font-bold text-stone-900 dark:text-white">
                    Campaign configuration and review
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <section id="cta" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="relative overflow-hidden rounded-[2rem] bg-teal-800 px-6 py-14 text-center text-white sm:px-12 dark:bg-teal-900">
                <div className="pointer-events-none absolute -top-16 -left-16 size-56 rounded-full bg-amber-300/30 blur-3xl"></div>
                <div className="pointer-events-none absolute -right-16 -bottom-16 size-56 rounded-full bg-rose-400/30 blur-3xl"></div>
                <div className="relative">
                  <h2 className="mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
                    Ready to run your next rewards campaign?
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-lg text-teal-100">
                    See RewardsApp with your own audience, reward type and
                    brand.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href="#top"
                      className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-semibold text-amber-950 hover:bg-amber-200"
                    >
                      Book a demo <ArrowRight size={16} />
                    </a>
                    <a
                      href="#rewards"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
                    >
                      Explore features
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="relative py-20 overflow-hidden scroll-mt-16" id="contact">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-150 h-150 bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-125 h-125 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Ready to run your next <br />rewards campaign?
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Whether you need to top up your credits or set up a new campaign, our team is here to ensure your WhatsApp communications never hit a roadblock. Drop your details, and we'll handle the rest.
                        </p>
                    </motion.div>

                    {/* Right Column: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-slate-200/50">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                                placeholder="Enter your phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Type Select */}
                                    <div>
                                        <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                                            Type of Business
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Building2 className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <select
                                                id="type"
                                                className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none"
                                                required
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select</option>
                                                <option value="individual">Individual</option>
                                                <option value="Business">Business</option>
                                                <option value="startup">Startup</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {/* Custom Dropdown Arrow */}
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 px-4 rounded-xl font-medium hover:bg-blue-600 transition-all"
                                >
                                    Request Callback
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>

                            {/* The required Quick Support Text */}
                            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <p className="text-sm font-medium text-emerald-800 leading-relaxed">
                                    <span className="font-bold">Quick Support:</span> Our Sales Team will connect with you within 2 hours to assist with your recharge.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </main>
      </div>
    </>
  )
}
