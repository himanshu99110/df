"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  MessageSquare,
  Network,
  Search,
  Sparkle,
  Sparkles,
  Target,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../components/contact-from"

import TestimonialTwo from "../components/testimonial-2"
export default function BrandStrategyPositioning() {


  const services = [
    {
      icon: Search,
      title: "Brand Discovery & Research",
      body: "We analyze your business, competitors, industry trends, and customer expectations to uncover opportunities that strengthen your market presence.",
      tag: "01",
    },
    {
      icon: Target,
      title: "Brand Positioning",
      body: "Define a unique place in the market by highlighting your strengths, value proposition, and competitive advantages.",
      tag: "02",
    },
    {
      icon: Users,
      title: "Audience Identification",
      body: "Understand your ideal customers, their needs, behaviors, and motivations to create more meaningful brand connections.",
      tag: "03",
    },
    {
      icon: MessageSquare,
      title: "Brand Messaging",
      body: "Develop clear, consistent messaging that communicates your values, mission, and benefits across all customer touchpoints.",
      tag: "04",
    },
    {
      icon: Network,
      title: "Brand Architecture",
      body: "Organize products, services, and sub-brands into a cohesive structure that supports growth and clarity.",
      tag: "05",
    },
    {
      icon: Sparkles,
      title: "Market Differentiation",
      body: "Identify what makes your business unique and create strategies that help you stand apart from competitors.",
      tag: "06",
    },
  ];


  return (
    <>
      <div className="bg-[url('/images/bg10.jpg')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
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
                  Build. Position. Scale.
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
                  Brand Positioning &{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Strategy.
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
                  We help businesses define their unique value, craft compelling messaging, and develop strategic positioning that creates a lasting impact in competitive markets.
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
                  src="/images/demo/brand-1.avif"
                  alt="web development"
                  width={600}
                  height={600}
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="pt-16 pb-14 lg:pt-24 lg:pb-30">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/brand-1-1.avif"
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
                      Best Brand Marketing • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl text-orange-500">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute right-0 -bottom-6 sm:-bottom-8 md:-bottom-10 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/brand-1-2.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Create a Strong Foundation for Your Brand
              </h2>
              <p className="mb-4">
                A successful brand is more than a logo or visual identity—it's the perception customers have of your business. Brand positioning and strategy establish how your company is viewed, what makes it different, and why customers should choose you over competitors.
              </p>
              <p className="mb-6 md:mb-8">
                We work closely with businesses to identify their strengths, understand their audience, and create a clear positioning strategy that aligns with their goals and market opportunities.
              </p>
              <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-10 lg:py-24">
        <div className="container">
          <div className="mb-8 md:mb-12 flex flex-wrap items-end justify-between gap-8">
            <div>
              <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Our Brand <br />Strategy Services
              </h2>
            </div>
            <p className="max-w-sm text-black">
              Build a brand that stands out, connects with the right audience, and drives long-term business growth.
            </p>
          </div>

          <div className="grid gap-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3 p-1">
            {services.map(({ icon: Icon, title, body, tag }) => (
              <article
                key={title}
                className="group ring ring-border hover:bg-surface relative flex min-h-60 flex-col bg-background p-4 transition-all hover:ring-orange-400 lg:p-6 rounded-2xl"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-geist text-xs text-muted-foreground">
                    {tag}
                  </span>
                </div>
                <h3 className="mb-4 font-geist text-xl font-semibold">
                  {title}
                </h3>
                <p className="font-geist text-base text-black">
                  {body}
                </p>
                {/* <ArrowUpRight className="mt-auto ml-auto h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-orange-500" /> */}
              </article>
            ))}
          </div>
        </div>
      </section>
      <TestimonialTwo />
      {/* <HowItsWork /> */}
      <ContactForm className="bg-gray-100" />
    </>
  )
}
