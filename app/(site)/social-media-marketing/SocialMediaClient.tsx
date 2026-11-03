"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  Award,
  BarChart,
  BarChart3,
  CheckCircle,
  CreditCard,
  Heart,
  MessageCircle,
  MessageSquareText,
  MousePointer2,
  Share2,
  Sparkle,
  Target,
  TrendingUp
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import ContactForm from "../components/contact-from"

const guidePoints = [
  {
    title: "Experience & Expertise",
    description:
      "Look for agencies with experience in your industry and expertise across various social media platforms.",
    icon: Award,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    title: "Customized Strategy",
    description:
      "Choose a service provider that creates tailored strategies, rather than a one-size-fits-all approach.",
    icon: Target,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Proven Results",
    description:
      "Check their portfolio and case studies to see how they have helped similar businesses achieve their social media goals.",
    icon: TrendingUp,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "Transparency & Reporting",
    description:
      "Ensure they provide clear metrics and transparent reporting, so you can track the progress of your campaigns.",
    icon: BarChart,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    title: "Communication",
    description:
      "Select a service provider who communicates well and is responsive to your needs.",
    icon: MessageSquareText,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
  {
    title: "Pricing",
    description:
      "Ensure the service provider's pricing aligns with your budget and the scope of services provided.",
    icon: CreditCard,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
]

const capabilitiesData = [
  {
    id: "brand-awareness",
    title: "Increased Brand Awareness",
    content:
      "A consistent and engaging social media presence helps your brand reach a wider audience and stay top-of-mind among potential customers.",
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    content:
      "Social media enables direct interaction with your audience, helping build trust, strengthen relationships, and improve customer loyalty.",
  },
  {
    id: "lead-generation",
    title: "Lead Generation & Sales",
    content:
      "Strategic social media campaigns, compelling content, and targeted advertising can drive qualified leads and increase conversions.",
  },
  {
    id: "cost-effective",
    title: "Cost-Effective Marketing",
    content:
      "Compared to traditional advertising channels, social media marketing offers an affordable way to reach and engage your target audience.",
  },
  {
    id: "real-time-feedback",
    title: "Real-Time Feedback",
    content:
      "Gain immediate insights from customer comments, messages, and interactions, allowing your business to respond and adapt quickly.",
  },
  {
    id: "seo-benefits",
    title: "SEO Benefits",
    content:
      "Social engagement signals such as likes, shares, and comments can support your overall digital presence and complement SEO efforts.",
  },
  {
    id: "targeted-advertising",
    title: "Targeted Advertising",
    content:
      "Advanced audience targeting options help you reach specific demographics, interests, and behaviors for more effective marketing campaigns.",
  },
]

export default function SocialMediaMarketing() {
  const [activeItem, setActiveItem] = useState(capabilitiesData[0].id)

  const containerRef = useRef<HTMLDivElement>(null)

  const getInitials = (name: string) => {
    if (!name) return ""
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const images = {
    videoProd:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    smm1: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    smm2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    smm3: "https://images.unsplash.com/photo-1542744094-24638ea0b5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exp1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exp2: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    marquee: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
  }

  return (
    <>
      {/* SECTION 1: Standardized Hero/Banner Section */}
      <div className="bg-[url('/images/bg2.avif')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
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
              <div className="flex h-full flex-col items-start justify-center gap-4 md:gap-6">
                {/* Tag */}
                <motion.span
                  className="mb-2 md:mb-0 flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] text-white ring-1 ring-[#fff3]"
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
                  Brand Growth & Engagement
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
                  Social Media <br className='hidden lg:block' />
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Marketing Services.
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
                  Get your presence in people's pocket with the best and most affordable social media marketing services in Delhi, India.
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
              <div className="relative flex min-h-[300px] w-full flex-1 items-center justify-center md:min-h-[360px] lg:justify-end">
                {/* Main Dashboard Mockup */}
                <div className="animate-float relative z-10 w-full max-w-md rounded-3xl bg-slate-900/60 p-6 shadow-2xl ring ring-white/10 backdrop-blur-xl">
                  {/* Dashboard Header */}
                  <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <h3 className="font-semibold text-white">Overview</h3>
                      <p className="text-xs text-slate-400">
                        Last 30 days performance
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-2 ring ring-white/10">
                      <BarChart3 className="h-5 w-5 text-indigo-400" />
                    </div>
                  </div>

                  {/* Main Metric */}
                  <div className="mb-8">
                    <div className="mb-2 flex items-end gap-3">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">12, 842</h2>
                      <div className="mb-1 flex items-center text-sm font-medium text-emerald-400">
                        <TrendingUp className="mr-1 h-4 w-4" />
                        +12.5%
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">Total Audience</p>
                  </div>

                  {/* Bar Chart Visualization */}
                  <div className="lg:mb-6 flex h-20 md:h-30 items-end justify-between gap-2">
                    {[40, 70, 45, 90, 60, 100, 85].map((height, i) => (
                      <div
                        key={i}
                        className="group relative flex h-full w-full items-end overflow-hidden rounded-t-sm bg-white/5"
                      >
                        <div
                          className="animate-slide-up w-full rounded-t-sm bg-gradient-to-t from-indigo-500/50 to-purple-400 transition-colors hover:to-pink-400"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${0.5 + i * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Stats */}
                  <div className="hidden lg:grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 p-4 ring ring-white/10">
                      <div className="mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-400" />
                        <span className="text-xs text-slate-400">
                          Engagement
                        </span>
                      </div>
                      <div className="text-xl font-bold tabular-nums">
                        12.4%
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4 ring ring-white/10">
                      <div className="mb-2 flex items-center gap-2">
                        <Share2 className="h-4 w-4 text-blue-400" />
                        <span className="text-xs text-slate-400">Shares</span>
                      </div>
                      <div className="text-xl font-bold">14.2k</div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1: Notification Card */}
                <div className="hidden animate-bounce2 animate-float-delayed absolute top-20 right-[-30%] z-20 lg:flex items-center gap-4 rounded-2xl bg-slate-800/80 p-4 shadow-xl ring ring-white/10 backdrop-blur-lg md:right-0 lg:right-[-40px]">
                  <div className="animate-pulse-ring relative flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20">
                    <Heart className="h-5 w-5 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      New Viral Post!
                    </p>
                    <p className="text-xs text-slate-400">
                      Reel reached 1.2M views
                    </p>
                  </div>
                </div>

                {/* Floating Element 2: Message/Lead */}
                <div className="hidden animate-bounce2 animate-float-fast absolute bottom-20 left-[-10%] z-20 lg:flex items-center gap-4 rounded-2xl bg-slate-800/80 p-4 shadow-xl ring ring-white/10 backdrop-blur-lg md:left-0 lg:left-[-20px]">
                  <div className="relative">
                    <img
                      src="/images/s.png"
                      alt="User"
                      className="h-10 w-10 rounded-full ring ring-white/20"
                    />
                    <div className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 ring-2 ring-slate-800">
                      <MessageCircle className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Collaboration Inquiry
                    </p>
                    <p className="line-clamp-1 w-32 text-xs text-slate-400">
                      Hey! We appreciate your recent...
                    </p>
                  </div>
                </div>

                {/* Floating Element 4: Interactive cursor simulation */}
                <div
                  className="animate-float-delayed absolute right-[-5%] bottom-1/3 z-30"
                  style={{ animationDuration: "7s" }}
                >
                  <MousePointer2 className="h-8 w-8 fill-white/20 text-white drop-shadow-md" />
                  <div className="mt-2 ml-4 rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold shadow-lg">
                    Auto-publish
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/social-media.avif"
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
                    stroke="#0b37cb"
                    strokeWidth="1.5"
                  />

                  {/* Inner Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="52"
                    fill="none"
                    stroke="#0b37cb"
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
                    fill="#0b37cb"
                    fontSize="12"
                    letterSpacing="4"
                    fontWeight="600"
                  >
                    <textPath href="#circleText" className="uppercase">
                      Best Digital Marketing • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-4xl text-accent">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute right-0 -bottom-6 sm:-bottom-8 md:-bottom-10 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/social-media-2.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Grow Your Brand Through Social Media Marketing
              </h2>
              <p className="mb-6 md:mb-8">
                Social Media Marketing (SMM) services involve creating and executing marketing strategies on social media platforms to enhance brand visibility, engagement, and sales. SMM services aim to create and manage content, build a community, and implement paid advertising campaigns to drive targeted traffic, boost customer loyalty, and increase conversions.
              </p>
              <AnimatedButton href="/enquiry">Get Started</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* NEW VISUAL UPGRADE 2: Photographic Video Production Showcase */}
      <section className="bg-white py-10 lg:py-24">
        <div className="container">
          <h2 className="mb-8 md:mb-12 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            How to Choose the Right Social <br />
            Media Marketing Service Provider
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guidePoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-4 md:p-6 lg:p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                >
                  {/* Number indicator */}
                  <div className="pointer-events-none absolute top-6 right-8 z-0 text-6xl font-black text-slate-100 transition-colors duration-300 select-none group-hover:text-indigo-50">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`h-14 w-14 rounded-xl ${point.iconBg} mb-6 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon
                        className={`h-7 w-7 ${point.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="mb-3 font-geist text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-orange-500">
                      {point.title}
                    </h3>

                    <p className="font-geist text-black">{point.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative z-30 flex w-full overflow-hidden bg-[#fafafa] pb-14 lg:pb-24">
        <div className="flex w-[200%] gap-4 md:w-[150%]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex w-full gap-2 md:gap-4"
          >
            {[...images.marquee, ...images.marquee].map((src, idx) => (
              <div
                key={idx}
                className="relative h-20 w-1/5 shrink-0 overflow-hidden rounded-md md:rounded-xl lg:rounded-3xl md:h-64 lg:h-80"
              >
                <img
                  src={src}
                  className="h-full w-full object-cover transition-all duration-300"
                  alt="Work showcase"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW VISUAL UPGRADE 3: Photographic Bento Grid */}
      <section className="bg-[#0a0a0a] py-10 lg:py-24">
        <div className="container" ref={containerRef}>
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                  Key Components of Social Media <br />
                  Marketing Services
                </h2>
                <p className="mb-6 md:mb-8 lg:pr-8 font-geist text-lg text-white">
                  A successful social media strategy combines creativity,
                  consistency, and data-driven decision-making.
                </p>
                <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-start rounded-lg bg-white p-5 ring ring-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-300/20 hover:ring-orange-300"
                  >
                    <div
                      className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(230 124 48 / 33%) 0%, transparent 70%)",
                      }}
                    ></div>
                    <div>
                      <span className="mb-4 flex size-14 shrink-0 items-center justify-center">
                        <Image
                          src={item.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </span>
                      <h3 className="mb-6 text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      {/* <p>{item.ctaText}</p> */}
                    </div>
                    {item.features && (
                      <ul className="space-y-3">
                        {item.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-base font-medium text-black"
                          >
                            <CheckCircle
                              size={14}
                              className="mt-1 shrink-0 text-orange-500"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* {services.map((service, index) => (
            <Card
              key={service.id}
              service={service}
              index={index}
              total={services.length}
              scrollYProgress={scrollYProgress}
            />
          ))} */}
        </div>
      </section>

      <section className="py-10 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column: Dynamic Image */}
            <div className="relative lg:top-28 h-80 w-full overflow-hidden rounded-xl bg-slate-100 lg:sticky lg:h-160">
              <img
                src="/images/demo/social.avif"
                alt="seo image"
                className="absolute inset-0 h-full w-full animate-in object-cover duration-700 fade-in"
              />
            </div>

            {/* Right Column: Content & Accordion */}
            <div className="flex flex-col space-y-6 py-4">
              <div>
                <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                  Unlock the Benefits for Your Business.
                </h2>
                <p className="mx-auto mt-6 font-geist text-lg">
                  Best & Affordable Social Media Marketing Services in Delhi,
                  India
                </p>
              </div>
              <Accordion
                type="single"
                value={activeItem}
                // Ensure an image is always showing by preventing the accordion from completely closing
                onValueChange={(value) => {
                  if (value) setActiveItem(value)
                }}
                className="w-full space-y-4"
              >
                {capabilitiesData.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-gray-200 py-2"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-black transition-colors hover:text-accent hover:no-underline md:text-xl">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-normal text-gray-400 md:text-base">
                          0{index + 1}
                        </span>
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 text-base text-black md:text-base">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* <HowItsWork /> */}
      <ContactForm className="bg-[#f0f0f0]" />
    </>
  )
}

const services = [
  {
    id: 1,
    title: "Social Media Strategy Development",
    features: [
      "Audience Research: Understanding your target demographic to tailor content and ads.",
      "Goal Setting: Defining clear goals like brand awareness, lead generation, customer acquisition, or engagement.",
      "Platform Selection: Identifying the best platforms for your business (Facebook, Instagram, Twitter, LinkedIn, TikTok, etc.).",
      "Competitor Analysis: Analyzing competitors' strategies to spot gaps and opportunities.",
      "Content Strategy: Creating a roadmap for content types and posting frequency.",
    ],
    bg: "#3a36ea",
    rightBg: "#f8fafc",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/icons/social-1.png",
  },
  {
    id: 2,
    title: "Content Creation & Curation",
    features: [
      "Visual Content: Creating high-quality graphics, photos, videos, and animations.",
      "Copywriting: Crafting compelling captions, headlines, and calls-to-action.",
      "Content Calendar: Developing a publishing schedule for consistent engagement.",
      "User-Generated Content: Encouraging and sharing customer-created content.",
    ],
    bg: "#ffffff",
    rightBg: "#ffffff",
    textColor: "#111111",
    ctaBg: "#1a1a1a",
    ctaText: "#ffffff",
    image: "/images/icons/social-2.png",
  },
  {
    id: 3,
    title: "Social Media Management",
    features: [
      "Profile Optimization: Optimizing bios, images, links, and descriptions.",
      "Posting & Scheduling: Managing content across multiple platforms.",
      "Community Engagement: Responding to comments, messages, and mentions.",
      "Social Listening: Monitoring brand conversations and industry trends.",
    ],
    bg: "#ffd600",
    rightBg: "#ffffff",
    textColor: "#111111",
    ctaBg: "#1a1a1a",
    ctaText: "#ffffff",
    image: "/images/icons/social-3.png",
  },
  {
    id: 4,
    title: "Paid Social Advertising",
    features: [
      "Campaign Creation: Designing and running paid social campaigns.",
      "Audience Targeting: Reaching specific demographics and interests.",
      "A/B Testing: Optimizing creatives, copy, and targeting.",
      "Budget Management: Maximizing ROI through ad spend optimization.",
      "Retargeting: Re-engaging previous website visitors and leads.",
    ],
    bg: "#ff5416",
    rightBg: "#ffffff",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/icons/social-4.png",
  },
  {
    id: 5,
    title: "Influencer Marketing",
    features: [
      "Influencer Identification: Finding creators aligned with your brand.",
      "Campaign Coordination: Managing influencer partnerships and promotions.",
      "Measurement & ROI: Tracking engagement, reach, and campaign performance.",
    ],
    bg: "#111111",
    rightBg: "#fafafa",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/icons/social-5.png",
  },
  {
    id: 6,
    title: "Social Media Analytics & Reporting",
    features: [
      "Performance Tracking: Monitoring reach, engagement, CTR, and conversions.",
      "Insights & Adjustments: Using analytics to refine strategies.",
      "Monthly Reports: Delivering detailed performance summaries.",
      "ROI Measurement: Evaluating the impact of social media campaigns.",
    ],
    bg: "#3a36ea",
    rightBg: "#f8fafc",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/icons/social-6.png",
  },
  {
    id: 7,
    title: "Reputation Management",
    features: [
      "Reviews Management: Encouraging and managing customer reviews.",
      "Crisis Management: Addressing negative feedback and PR issues quickly.",
    ],
    bg: "#ffffff",
    rightBg: "#ffffff",
    textColor: "#111111",
    ctaBg: "#1a1a1a",
    ctaText: "#ffffff",
    image: "/images/icons/social-7.png",
  },
  {
    id: 8,
    title: "Social Media Contests & Campaigns",
    features: [
      "Campaign Planning: Organizing contests, giveaways, and challenges.",
      "User Engagement: Encouraging participation, sharing, and interaction.",
    ],
    bg: "#ffd600",
    rightBg: "#ffffff",
    textColor: "#111111",
    ctaBg: "#1a1a1a",
    ctaText: "#ffffff",
    image: "/images/icons/social-8.png",
  },
]

function Card({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: (typeof services)[0]
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const CARD_OFFSET = 120
  const STACK_GAP = 30

  const targetScale = Math.max(0.5, 1 - (total - index - 1) * 0.1)
  const scale = useTransform(
    scrollYProgress,
    [index / total, 1],
    [1, targetScale]
  )

  const isDark = service.textColor === "#ffffff"

  return (
    <div
      style={{
        position: "sticky",
        top: `${CARD_OFFSET}px`,
        zIndex: index + 1,
        marginBottom: "0vh",
      }}
    >
      <motion.div
        style={{
          scale,
          backgroundColor: service.bg,
          color: service.textColor,
          transformOrigin: "top center",
          top: `calc(${CARD_OFFSET}px + ${index * STACK_GAP}px)`,
          marginBottom: "6vh",
        }}
        className="w-full overflow-hidden rounded-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5 max-sm:min-h-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
          <div className="flex min-h-90 flex-col p-4 lg:p-10">
            <div>
              <h2 className="mb-8 font-geist text-4xl leading-none font-semibold lg:text-[2.5rem]">
                {service.title}
              </h2>
              <div className="mb-10 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-1">
                {service.features.map((feat) => (
                  <div key={feat} className="flex gap-3">
                    <span
                      className="mt-1.75 size-2 shrink-0 rounded-full"
                      style={{ background: isDark ? "#ffffff" : "#111111" }}
                    />
                    <span className="font-geist text-sm md:text-[16px]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative hidden items-center justify-center overflow-hidden lg:flex"
            style={{ background: service.rightBg }}
          >
            <Image
              src={service.image}
              alt={`${service.title} visuals`}
              className="h-full max-h-130 w-full object-cover object-center"
              height={600}
              width={776}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
