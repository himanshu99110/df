"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Smartphone,
  Cpu,
  Layers,
  Headset,
  Code2,
  Globe,
  TrendingUp,
  Search,
  MessageSquare,
  Layout,
  Trophy,
  HeartHandshake,
  ChevronsRight,
  ChevronsLeft,
  Play,
} from "lucide-react"

export default function MobileAppDevelopment() {
  const [activeStack, setActiveStack] = useState("native")

  // Framer Motion Variants
  const revealVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } as const,
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

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

  // Content Data
  const capabilitiesData = [
    {
      id: "native",
      title: "Native App Development",
      description:
        "Considered the ‘first class’ development option. Native apps interact directly with device APIs, offering greater performance, consistent feel, and better app store compliance. Our developers are proficient in Objective C, Swift, Kotlin, and Java.",
      icon: Cpu,
      visual: (
        <div className="flex h-full w-full items-center justify-center gap-6 bg-[#0a0a0a] p-8">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-64 w-36 flex-col overflow-hidden rounded-3xl border-4 border-gray-800 bg-[#111] p-2"
          >
            <div className="mx-auto h-1 w-12 rounded-full bg-gray-800" />
            <div className="mt-4 flex flex-1 flex-col gap-3 rounded-2xl bg-gray-900/50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#86ef47]/20">
                <span className="text-[10px] font-bold text-[#86ef47]">
                  SWIFT
                </span>
              </div>
              <div className="h-2 w-full rounded bg-gray-800" />
              <div className="h-2 w-3/4 rounded bg-gray-800" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="flex h-64 w-36 flex-col overflow-hidden rounded-3xl border-4 border-gray-800 bg-[#111] p-2"
          >
            <div className="mx-auto h-1 w-12 rounded-full bg-gray-800" />
            <div className="mt-4 flex flex-1 flex-col gap-3 rounded-2xl bg-gray-900/50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                <span className="text-[10px] font-bold text-blue-500">
                  JAVA
                </span>
              </div>
              <div className="h-2 w-full rounded bg-gray-800" />
              <div className="h-2 w-3/4 rounded bg-gray-800" />
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: "cross",
      title: "Cross-Platform Development",
      description:
        "Support multiple platforms with a single codebase. This approach is simpler to maintain, prevents feature drift between platforms, and allows a faster time to market. We utilize cutting-edge cross-platform frameworks like React and Flutter.",
      icon: Layers,
      visual: (
        <div className="flex h-full w-full items-center justify-center bg-[#0a0a0a] p-8">
          <div className="relative flex w-full max-w-md flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-800 bg-black shadow-[0_0_30px_rgba(134,239,71,0.15)]"
            >
              <Code2 className="h-10 w-10 text-[#86ef47]" />
            </motion.div>

            {/* Branching lines */}
            <div className="absolute top-24 z-0 h-16 w-full max-w-[200px] rounded-b-3xl border-r-2 border-b-2 border-l-2 border-gray-800" />

            <div className="z-10 mt-8 flex w-full justify-between px-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-800 bg-[#111]">
                <span className="font-mono text-xs text-gray-400">iOS</span>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-800 bg-[#111]">
                <span className="font-mono text-xs text-gray-400">AND</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "hybrid",
      title: "Hybrid App Development",
      description:
        "Run Javascript and HTML web code within a WebView in a native application. Allows whole web applications to be bundled with a native binary with minimal native development. Perfect for PWAs and bringing existing web apps to mobile.",
      icon: Globe,
      visual: (
        <div className="flex h-full w-full items-center justify-center bg-[#0a0a0a] p-8">
          <div className="relative flex items-center justify-center">
            {/* Browser Window Backdrop */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute h-48 w-72 rounded-xl border border-gray-800 bg-[#111] p-4 opacity-50"
            >
              <div className="mb-4 flex gap-2 border-b border-gray-800 pb-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-gray-800" />
                <div className="h-2 w-3/4 rounded bg-gray-800" />
              </div>
            </motion.div>

            {/* Mobile Device Foreground */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="relative z-10 flex h-64 w-36 flex-col overflow-hidden rounded-3xl border-4 border-gray-700 bg-black p-2 shadow-2xl"
            >
              <div className="mx-auto h-1 w-12 rounded-full bg-gray-800" />
              <div className="mt-4 flex flex-1 flex-col items-center justify-center rounded-2xl bg-[#111]">
                <Globe className="h-8 w-8 text-[#86ef47]" />
                <span className="mt-2 font-mono text-[10px] text-gray-400">
                  WebView
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
  ]

  const whyBuildData = [
    {
      title: "Increased Customer Loyalty",
      description:
        "Apps host loyalty programmes with exclusive benefits. Incentives like exclusive member pricing encourage repeat purchases and increase retention.",
      icon: HeartHandshake,
    },
    {
      title: "Increased Revenue",
      description:
        "Mobile customers are up to 3x more valuable. Streamline the purchasing process, making it quicker and easier to buy products or services.",
      icon: TrendingUp,
    },
    {
      title: "Improved Customer Insights",
      description:
        "Collect invaluable data on user behaviour, preferences, and demographics to tailor your products and meet customer needs more effectively.",
      icon: Search,
    },
    {
      title: "More Efficient Communication",
      description:
        "Facilitate two-way communication allowing for rapid feedback, support, and assistance, fostering a stronger relationship with your base.",
      icon: MessageSquare,
    },
    {
      title: "Enhanced User Experience",
      description:
        "Custom-built apps provide a highly intuitive experience compared to standard websites, ensuring users have a positive interaction with your brand.",
      icon: Layout,
    },
    {
      title: "Competitive Advantage",
      description:
        "Having a well-designed, functional mobile app gives you a significant edge over competitors. Optimization is crucial for standing out.",
      icon: Trophy,
    },
  ]

  return (
    <div className="bg-[#fafafa] selection:bg-[#86ef47] selection:text-black">
      {/* HERO SECTION (Maintained exact style & added Breadcrumbs) */}
      <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden pt-20">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
            backgroundSize: "4rem 4rem",
          }}
        />

        {/* Decoration Shapes */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 z-10 w-48 md:w-64"
        >
          <img
            src="https://wpriverthemes.com/HTML/agenio/assets/images/banner/shape/shape-01.svg"
            alt="Decoration"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-0 bottom-0 z-10 w-48 md:w-64"
        >
          <img
            src="https://wpriverthemes.com/HTML/agenio/assets/images/banner/shape/shape-02.svg"
            alt="Decoration"
          />
        </motion.div>

        <div className="relative z-20 mx-auto flex flex-col items-center px-6 text-center">
          {/* Breadcrumbs */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-gray-400 uppercase"
          >
            <span>Home</span>
            <span className="text-[#86ef47]">/</span>
            <span>Services</span>
            <span className="text-[#86ef47]">/</span>
            <span className="text-black">Mobile App</span>
          </motion.div> */}

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-gra text-6xl leading-[1.02] font-bold tracking-tighter sm:text-7xl md:text-[7.5rem]"
          >
            <span className="relative block overflow-hidden">
              <motion.span
                variants={revealVariants}
                style={gradientStyle}
                className="inline-block"
              >
                Mobile App
              </motion.span>
            </span>
            <span className="relative block overflow-hidden">
              <motion.span
                variants={revealVariants}
                style={gradientStyle}
                className="inline-block"
              >
                Development.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl font-gra text-base leading-relaxed text-gray-500 md:text-lg"
          >
            We Are The Best App Development Company In Delhi-NCR That Brings
            Digital Ideas To Life. With our mobile app development services, you
            get next-generation solutions that are sustainable and highly
            technical.
          </motion.p>
        </div>
      </section>

      {/* CORE SERVICES - BENTO GRID */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div className="container px-6">
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#86ef47]" />
              <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                Core Expertise
              </span>
            </div>
            <h2 className="font-gra text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Tailored solutions for <br />
              <span className="text-gray-400">every ecosystem.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2 lg:h-[600px]">
            {/* Android Block (Large Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0a0a0a] p-10 md:col-span-7 md:row-span-2"
            >
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#86ef47] opacity-5 blur-[100px] transition-opacity group-hover:opacity-20" />
              <div>
                <div className="mb-6 inline-flex rounded-2xl border border-gray-800 bg-[#111] p-4">
                  <Smartphone className="h-8 w-8 text-[#86ef47]" />
                </div>
                <h3 className="font-gra text-3xl font-bold text-white md:text-4xl">
                  Android App <br />
                  Development
                </h3>
              </div>
              <p className="mt-8 max-w-md font-gra text-lg leading-relaxed text-gray-400">
                Our development process is unlike companies that focus purely on
                simplification. For us, your message is the most important. Our
                highly skilled developers handle your application idea from
                beginning to end.
              </p>
            </motion.div>

            {/* iOS Block (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 hover:bg-gray-50 md:col-span-5 md:row-span-1"
            >
              <div>
                <h3 className="font-gra text-2xl font-bold text-gray-900">
                  iOS App Development
                </h3>
                <p className="mt-4 font-gra text-base text-gray-500">
                  Our expertise includes building world-class iOS apps. We
                  approach each project with bespoke solutions using Swift and
                  Objective-C to address your unique business needs.
                </p>
              </div>
            </motion.div>

            {/* Consultancy Block (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#86ef47] p-8 md:col-span-5 md:row-span-1"
            >
              <div className="absolute -top-8 -right-8 opacity-10">
                <Headset className="h-48 w-48 text-black" />
              </div>
              <div className="relative z-10">
                <h3 className="font-gra text-2xl font-bold text-black">
                  App Consultancy
                </h3>
                <p className="mt-4 font-gra text-base font-medium text-black/80">
                  Need rescuing? Our 250+ mobile experts help define your
                  vision, scale ambitions, and advise on team or product
                  adjustments to swiftly put you back on track.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CAPABILITIES - INTERACTIVE TABS */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="container px-6">
          <div className="mb-16 md:text-center">
            <h2 className="font-gra text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our Technical <br className="hidden md:block" />
              <span className="text-gray-500 italic">Capabilities.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-gra text-lg text-gray-400">
              Digital Fueled IT Pvt Ltd. experts develop apps across native,
              cross-platform, and hybrid frameworks to match your precise
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left: Tab Selectors */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              {capabilitiesData.map((tech) => {
                const isActive = activeStack === tech.id
                const Icon = tech.icon

                return (
                  <button
                    key={tech.id}
                    onClick={() => setActiveStack(tech.id)}
                    className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                      isActive
                        ? "border-gray-700 bg-[#111]"
                        : "border-transparent hover:bg-[#111]/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute top-0 left-0 h-full w-1 bg-[#86ef47]"
                      />
                    )}
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-xl p-3 transition-colors ${isActive ? "bg-black text-[#86ef47]" : "bg-gray-900 text-gray-500"}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3
                        className={`font-gra text-xl font-bold transition-colors ${isActive ? "text-white" : "text-gray-500"}`}
                      >
                        {tech.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 font-gra text-base leading-relaxed text-gray-400">
                            {tech.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )
              })}
            </div>

            {/* Right: Dynamic Visualizer */}
            <div className="relative h-[400px] overflow-hidden rounded-3xl border border-gray-800 bg-[#111] shadow-2xl md:h-[500px] lg:sticky lg:top-24 lg:col-span-7">
              <AnimatePresence mode="wait">
                {capabilitiesData.map((tech) => {
                  if (tech.id !== activeStack) return null
                  return (
                    <motion.div
                      key={tech.id}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                        filter: "blur(10px)",
                      }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 h-full w-full"
                    >
                      {tech.visual}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUILD AN APP - GRID */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div className="container px-6">
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#86ef47]" />
              <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                Business Growth
              </span>
            </div>
            <h2 className="font-gra text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Why build a mobile app <br className="hidden md:block" />
              <span className="text-gray-400">for your business?</span>
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyBuildData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-white p-10 transition-all duration-300 hover:bg-[#fcfcfc]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 transition-colors group-hover:bg-[#86ef47] group-hover:text-black">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-gra text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="font-gra text-base leading-relaxed text-gray-500">
                  {item.description}
                </p>
                {/* Bottom Highlight border on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#86ef47] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOCKY GRID CTA SECTION */}
      <section className="relative w-full overflow-hidden bg-white pt-32">
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-20 mx-auto flex flex-col items-center px-4 text-center">
          {/* Title Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <ChevronsRight
              className="h-8 w-8 text-gray-300 md:h-12 md:w-12"
              strokeWidth={3}
            />
            <h2 className="font-gra text-5xl font-black tracking-tighter text-[#2a2a2a] uppercase md:text-7xl lg:text-[7rem]">
              LET&apos;S START
            </h2>
            <ChevronsLeft
              className="h-8 w-8 text-gray-300 md:h-12 md:w-12"
              strokeWidth={3}
            />
          </div>

          {/* Title Row 2 */}
          <h2 className="mt-2 font-gra text-5xl font-black tracking-tighter text-[#2a2a2a] uppercase md:text-7xl lg:text-[7rem]">
            YOUR PROJECT
          </h2>

          {/* Center Play / Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative z-30 mt-12 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:h-24 md:w-24"
          >
            <Play className="h-8 w-8 fill-black text-black transition-transform group-hover:scale-110 md:h-10 md:w-10" />
            <div className="absolute inset-0 rounded-full border border-gray-100" />
          </motion.button>
        </div>

        {/* Green Blocky Chart / Landscape */}
        <div className="relative z-10 mt-[-40px] flex h-[250px] w-full items-end md:h-[350px] lg:h-[450px]">
          {/* Block 1 */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative h-[85%] w-1/6 border-r border-white/20 bg-[#86ef47]"
          >
            <div className="absolute bottom-16 left-2 hidden items-center gap-2 bg-[#0a0a0a] px-3 py-1.5 md:flex lg:left-8">
              <div className="h-2 w-2 bg-[#86ef47]" />
              <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                Impactful Creative
              </span>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="h-[55%] w-1/6 border-r border-white/20 bg-[#86ef47]"
          />

          {/* Block 3 */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="h-[30%] w-1/6 border-r border-white/20 bg-[#86ef47]"
          />

          {/* Block 4 */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="h-[15%] w-1/6 border-r border-white/20 bg-[#86ef47]"
          />

          {/* Block 5 */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="h-[50%] w-1/6 border-r border-white/20 bg-[#86ef47]"
          />

          {/* Block 6 */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="relative h-[85%] w-1/6 bg-[#86ef47]"
          >
            <div className="absolute right-2 bottom-16 hidden items-center gap-2 bg-[#0a0a0a] px-3 py-1.5 md:flex lg:right-8">
              <div className="h-2 w-2 bg-[#86ef47]" />
              <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                Global Support
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Black Block (Acts as the start of the footer) */}
        <div className="h-32 w-full bg-[#0a0a0a]" />
      </section>
    </div>
  )
}
