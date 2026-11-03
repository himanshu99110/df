"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  CalendarDays,
  GitBranch,
  Headphones,
  KeyRound,
  Phone,
  PieChart,
  Send,
  SendHorizonal,
  ShieldCheck,
  ShoppingCart,
  Sparkle,
  Tag,
  Users2,
  Video
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import HowItsWork from "../components/how-its-work"
import { AnimatedButton } from "@/components/common/AnimatedButton"
import ContactForm from "../components/contact-from"

export default function WhatsAppBusinessAPI() {
  const [activeUseCase, setActiveUseCase] = useState(0)

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as const,
    },
  }

  const gradientStyle = {
    background: "linear-gradient(137.66deg, #55595C 21.13%, #000000 80.53%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }

  // Features Data
  const featuresData = [
    {
      title: "Get Green Tick Verified",
      description:
        "Official verification to increase trust and authenticity with customers.",
      icon: BadgeCheck,
      colSpan: "md:col-span-4",
    },
    {
      title: "One-Time & Recurring Campaigns",
      description:
        "Launch scheduled or recurring campaigns to keep customers engaged.",
      icon: CalendarDays,
      colSpan: "md:col-span-8",
    },
    {
      title: "Shared Team Inbox",
      description:
        "Manage conversations efficiently with a shared inbox and automated chat routing.",
      icon: Users2,
      colSpan: "md:col-span-6",
    },
    {
      title: "Build Custom Workflows",
      description:
        "Create custom workflows to streamline communication processes.",
      icon: GitBranch,
      colSpan: "md:col-span-6",
    },
    {
      title: "Campaign & Agent Analytics",
      description:
        "Access insights to optimize campaign performance and team productivity.",
      icon: PieChart,
      colSpan: "md:col-span-5",
    },
    {
      title: "Simplicity with Enterprise Scale",
      description:
        "Enjoy a secure, scalable solution designed for SMBs with enterprise-grade security.",
      icon: ShieldCheck,
      colSpan: "md:col-span-7",
    },
  ]

  // Use Cases Data (Powers the interactive phone simulator)
  const useCasesData = [
    {
      id: "notifications",
      title: "Notifications",
      subtitle: "Share important updates with customers",
      bullets: [
        "Send order confirmations and shipment updates",
        "Share appointment availability and other reminders",
      ],
      icon: BellRing,
      mockup: (
        <div className="flex flex-col gap-3">
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
            <span className="mb-1 block font-semibold">📦 Shipment Update</span>
            Hi there! Your order #84920 has been shipped and is out for delivery
            today.
            <div className="mt-1 text-right text-[10px] text-gray-400">
              10:42 AM
            </div>
          </div>
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
            <span className="mb-1 block font-semibold">
              📅 Appointment Reminder
            </span>
            Just a quick reminder about your consultation tomorrow at 2:00 PM.
            Reply &apos;YES&apos; to confirm.
            <div className="mt-1 text-right text-[10px] text-gray-400">
              11:15 AM
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "promotions",
      title: "Promotions",
      subtitle: "Make promotions feel more personal",
      bullets: [
        "Drive upsell and cross-sell opportunities",
        "Re-engage after cart abandonment",
        "Maximize ROI with hyper-relevant promotions",
      ],
      icon: Tag,
      mockup: (
        <div className="flex flex-col gap-3">
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
            <span className="mb-1 block font-semibold">
              🛍️ You left something behind!
            </span>
            Hi! We noticed you left some items in your cart. Complete your
            purchase now and get{" "}
            <span className="font-semibold text-green-600">10% OFF</span>!
            <button className="mt-2 w-full rounded-lg bg-gray-100 py-2 text-center font-semibold text-blue-500">
              View Cart
            </button>
            <div className="mt-1 text-right text-[10px] text-gray-400">
              02:30 PM
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "commerce",
      title: "Commerce",
      subtitle: "Build a friction-free buyer journey",
      bullets: [
        "Make it easy for customers to browse products",
        "Place orders right from within WhatsApp",
      ],
      icon: ShoppingCart,
      mockup: (
        <div className="flex flex-col gap-3">
          <div className="max-w-[90%] self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
            Check out our new Summer Collection! 🌞
            <div className="scrollbar-hide mt-2 flex gap-2 overflow-x-auto pb-2">
              <div className="flex min-w-[100px] flex-col items-center rounded-lg border border-gray-200 p-2">
                <div className="mb-1 flex h-12 w-12 items-center justify-center rounded bg-gray-100 text-xl">
                  👕
                </div>
                <span className="text-[10px] font-semibold">T-Shirt</span>
                <span className="text-[10px] text-gray-500">$25</span>
              </div>
              <div className="flex min-w-[100px] flex-col items-center rounded-lg border border-gray-200 p-2">
                <div className="mb-1 flex h-12 w-12 items-center justify-center rounded bg-gray-100 text-xl">
                  👟
                </div>
                <span className="text-[10px] font-semibold">Sneakers</span>
                <span className="text-[10px] text-gray-500">$60</span>
              </div>
            </div>
            <button className="mt-1 w-full rounded-lg bg-[#075E54] py-2 text-center text-xs font-semibold text-white">
              Browse Catalog
            </button>
            <div className="mt-1 text-right text-[10px] text-gray-400">
              04:12 PM
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "customercare",
      title: "Customer Care",
      subtitle: "Optimize support costs and efficiency",
      bullets: [
        "Deploy automated conversational flows",
        "Smart routing to live agents when needed",
        "Integrate with CRM and marketing platforms",
      ],
      icon: Headphones,
      mockup: (
        <div className="flex flex-col gap-3">
          <div className="max-w-[85%] self-end rounded-2xl rounded-tr-none bg-[#dcf8c6] p-3 text-sm text-gray-800 shadow-sm">
            I need help with my recent order.
            <div className="mt-1 text-right text-[10px] text-gray-500">
              09:00 AM
            </div>
          </div>
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
            Hi! I&apos;m your virtual assistant 🤖. How can I help you today?
            <div className="mt-2 flex flex-col gap-1">
              <button className="rounded-full bg-gray-100 px-3 py-1.5 text-left text-xs font-medium text-blue-500">
                1. Track Order
              </button>
              <button className="rounded-full bg-gray-100 px-3 py-1.5 text-left text-xs font-medium text-blue-500">
                2. Request Refund
              </button>
              <button className="rounded-full bg-gray-100 px-3 py-1.5 text-left text-xs font-medium text-blue-500">
                3. Speak to Agent
              </button>
            </div>
            <div className="mt-1 text-right text-[10px] text-gray-400">
              09:01 AM
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "verifications",
      title: "Verifications",
      subtitle: "Provide account access and password support",
      bullets: [
        "Enable multi-factor authentication (MFA)",
        "Send one-time passwords (OTP) securely",
      ],
      icon: KeyRound,
      mockup: (
        <div className="flex flex-col gap-3">
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
            <span className="mb-1 block font-semibold">🔐 Security Alert</span>
            Your verification code is: <br />
            <span className="my-2 block text-center font-mono text-xl font-semibold tracking-widest">
              492 811
            </span>
            Please do not share this code with anyone. It expires in 5 minutes.
            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 py-2 text-center text-xs font-semibold text-blue-500">
              Copy Code
            </button>
            <div className="mt-1 text-right text-[10px] text-gray-400">
              Just now
            </div>
          </div>
        </div>
      ),
    },
  ]


  return (
    <div>
      <div className="bg-[url('/images/bg6.avif')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
        <div className="container">
          {/* Animated Container */}
          <motion.div
            className="grid lg:grid-cols-7 lg:gap-x-10 gap-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <div className="lg:col-span-4 lg:pr-10">
              <div className="flex h-full flex-col items-start justify-center gap-6">
                <motion.span
                  className="flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] text-white ring-1 ring-[#fff3]"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <Sparkle
                    size={18}
                    className="fill-orange-600 stroke-orange-600"
                  />
                  Automate. Engage. Convert.
                </motion.span>

                {/* Headline */}
                <motion.h1
                  className="font-geist text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-none font-semibold text-white capitalize"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  Grow Your Business On{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    WhatsApp.
                  </span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                  className="md:text-lg font-medium text-white"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  The Ultimate WhatsApp Business API Tool for Growth Teams. The only full-stack platform that can help you expand your business on WhatsApp and provide a flawless client experience.
                </motion.p>


                {/* CTA Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <Link
                    href="/enquiry"
                    className="group relative mt-4 md:mt-6 flex w-max items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent px-10 py-4 text-sm leading-tight font-semibold text-white ring ring-[#ffffff85] transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Book a Quote
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative lg:col-span-3"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <div className="flex h-full items-center overflow-hidden">
                <Image
                  src="/images/demo/whatsapp-3.avif"
                  alt="web development"
                  width={600}
                  height={600}
                  className="rounded-md lg:h-90"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="pt-16 pb-16lg:pt-24 lg:pb-30">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/whatsapp.avif"
                  alt="coding image"
                  width={600}
                  height={800}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 left-2 sm:-bottom-12 sm:left-6 md:-bottom-16 md:left-8 z-20">
                <svg
                  viewBox="0 0 200 200"
                  className="h-28 w-28 sm:h-36 sm:w-36 md:h-[184px] md:w-[184px] animate-[spin_15s_linear_infinite] rounded-full bg-white"
                >
                  {/* Outer Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  {/* Inner Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="52"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  <defs>
                    <path
                      id="circleText"
                      d="
                    M100,100
                    m-72,0
                    a72,72 0 1,1 144,0
                    a72,72 0 1,1 -144,0
                  "
                    />
                  </defs>

                  <text
                    fill="#f97316"
                    fontSize="11"
                    letterSpacing="4"
                    fontWeight="600"
                  >
                    <textPath href="#circleText" className="uppercase">
                      Best Whatsapp Api Solution • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-4xl text-orange-500">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute right-0 -bottom-6 sm:-bottom-8 md:-bottom-10 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/whatsapp-2.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
                Transform Customer Communication With WhatsApp Business API
              </h2>
              <p className="mb-6 md:mb-8">
                Transform the way your business connects with customers using our powerful WhatsApp Business API platform. Automate notifications, run personalized marketing campaigns, provide real-time customer support, and send secure OTP verifications from a single platform. Build engaging customer journeys with intelligent automation, shared team inboxes, and custom workflows, while tracking performance through detailed analytics. Whether you're a startup or an enterprise, our secure and scalable solution helps you streamline communication, strengthen customer relationships, and accelerate business growth.
              </p>
              <AnimatedButton href="/enquiry">Start Now</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE UPGRADE 1: Dark Bento Features Grid */}
      <section className="bg-gray-100 py-10 lg:py-20">
        <div className="container">
          <div className="mb-8 md:mb-12 md:flex md:items-end md:justify-between">
            <div>
              <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Smart tools for <br className="hidden lg:block" />
                efficient communication.
              </h2>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-4 md:grid-cols-12"
          >
            {featuresData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative flex flex-col overflow-hidden ring ring-border hover:ring-orange-400 rounded-xl bg-white p-6 transition-all duration-300 ${item.colSpan}`}
              >
                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3
                    className={`mb-3 font-geist text-xl font-semibold text-slate-900`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`relative z-10 font-geist text-base text-black`}
                  >
                    {item.description}
                  </p>
                </div>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CREATIVE UPGRADE 2: Interactive Phone Simulator */}
      <section className="bg-white py-10 lg:py-24">
        <div className="container">
          <div className="mb-8 md:mb-12 md:text-center">
            <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
              Common WhatsApp Platform Use Cases.
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl font-geist md:text-lg">
              Discover how connecting to the API can help drive customer
              satisfaction and accelerate business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Interactive List */}
            <div className="flex flex-col gap-4 lg:col-span-7">
              {useCasesData.map((useCase, index) => {
                const isActive = activeUseCase === index
                const Icon = useCase.icon
                return (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveUseCase(index)}
                    className={`relative flex flex-col items-start gap-4 rounded-3xl p-6 text-left transition-all duration-300 ${isActive
                      ? "ring ring-green-700/30 bg-[#fafafa] shadow-sm"
                      : "ring ring-transparent hover:bg-gray-50"
                      }`}
                  >
                    <div className="flex w-full items-start gap-4">
                      <div
                        className={`rounded-lg p-3 transition-colors ${isActive ? "bg-[#25D366] text-white" : "bg-green-100 text-[#25D366]"}`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div className="flex-1">
                        <span className="mb-1 block text-xs font-medium text-slate-700 uppercase">
                          {useCase.title}
                        </span>
                        <h3
                          className={`font-geist text-lg md:text-xl font-semibold transition-colors ${isActive ? "text-slate-900" : "text-gray-600"}`}
                        >
                          {useCase.subtitle}
                        </h3>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full overflow-hidden"
                        >
                          <ul className="mt-2 space-y-2 lg:pl-18">
                            {useCase.bullets.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-base text-black"
                              >
                                <BadgeCheck
                                  size={18}
                                  className="mt-0.5 shrink-0 text-[#25D366]"
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 md:mt-6 lg:pl-18">
                            <Link href="/contact" className="inline-flex items-center gap-1 border-black font-semibold text-black underline underline-offset-2 transition-colors hover:border-orange-500 hover:text-orange-500">
                              Enquire Now <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )
              })}
            </div>

            {/* Right: Phone Simulator */}
            <div className="relative flex justify-center lg:sticky lg:top-30 lg:col-span-5">
              {/* Phone Bezel */}
              <div className="relative flex h-[580px] w-[280px] flex-col overflow-hidden rounded-[2rem] bg-[#e5ddd5] shadow-2xl ring-10">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#111]"></div>

                {/* Simulated WhatsApp Header */}
                <div className="z-10 flex items-center justify-between bg-[#075E54] px-4 pt-10 pb-3 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-white">
                      <img
                        src="/images/logo.png"
                        className="h-6 w-6 object-contain"
                        alt="Brand Logo"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm leading-tight font-semibold text-white">
                        Digital Fueled{" "}
                        <BadgeCheck className="h-3 w-3 fill-[#25D366] text-white" />
                      </div>
                      <div className="text-xs text-white/80">
                        Official Business Account
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Video className="h-5 w-5" />
                    <Phone className="h-5 w-5" />
                  </div>
                </div>

                {/* Chat Background Pattern (Subtle dots to mimic WA) */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                  }}
                />

                {/* Chat Area */}
                <div className="relative z-10 flex flex-1 flex-col gap-4 overflow-y-auto p-4">
                  {/* Date Badge */}
                  <div className="self-center rounded-lg bg-[#e1f3fb] px-3 py-1 text-[10px] font-semibold tracking-wider text-gray-500 uppercase shadow-sm">
                    Today
                  </div>

                  {/* Dynamic Mockup Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeUseCase}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex w-full flex-col gap-4"
                    >
                      {useCasesData[activeUseCase].mockup}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Simulated Input Area */}
                <div className="z-10 flex items-center gap-3 bg-[#f0f0f0] p-3">
                  <div className="flex-1 rounded-full bg-white px-4 py-2 text-sm text-gray-400">
                    Message
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00897b] text-white shadow-sm">
                    <SendHorizonal className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Decorative Blur behind phone */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366]/20 blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* <HowItsWork /> */}
      <ContactForm className="bg-gray-100" />
    </div>
  )
}
