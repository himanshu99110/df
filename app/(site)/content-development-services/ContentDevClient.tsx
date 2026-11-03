"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Play,
  ChevronsRight,
  ChevronsLeft,
  PenTool,
  Search,
  Target,
  Sparkles,
  Megaphone,
  Globe,
  FileText,
  CheckCircle2,
  Sparkle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HowItsWork from "../components/how-its-work"
import TechStackSection from "../components/teach-stack-section"
import { AnimatedButton } from "@/components/common/AnimatedButton"
import ContactForm from "../components/contact-from"

export default function ContentDevelopment() {
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

  // Core Principles (Extracted from the Intro Paragraph)
  const corePrinciples = [
    {
      title: "In-Depth Research",
      description:
        "Our creative content writers always do their research before beginning any task to ensure absolute accuracy and relevance.",
      icon: Search,
    },
    {
      title: "Highlighting USPs",
      description:
        "We focus on the Unique Selling Propositions of a brand or service and strategically highlight them through compelling copy.",
      icon: Target,
    },
    {
      title: "Simple & Clear",
      description:
        "The main goal of our agency is to write easy-to-understand and simple content so that your audience can digest it effortlessly.",
      icon: Sparkles,
    },
    {
      title: "SEO Friendly",
      description:
        "Our content is highly SEO friendly, well-researched, and helps in communicating effectively with search engines and customers.",
      icon: Globe,
    },
  ]

  // Image Assets
  const images = {
    promo:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    website:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    editorial:
      "https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }

  return (
    <>
      {/* SECTION 1: Standardized Hero/Banner Section */}
      <div className="bg-[url('/images/bg4.avif')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
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
                  Creative Content Solutions
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
                  Content Development{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Service.
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
                  Get your presence in people's pocket, with our Content Development services. Are you looking for the best content writing agency in Delhi? We would like to inform you that this is the right place.
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
                  src="/images/demo/content.avif"
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

      {/* MASSIVE SERVICE CARDS: Glassmorphism Editorial Layout */}
      <section className="py-14 lg:py-24">
        <div className="container">
          <div className="mb-16 md:mb-24 grid lg:grid-cols-12 items-center gap-8 lg:gap-20">
            <div className="lg:col-span-7 font-geist order-2 lg:order-1">
              <h3 className="mb-4 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Promotional Content
              </h3>
              <p className="text-lg mb-8">
                Promotional content talks about the products and services,
                notifying followers and readers about them with the intent of
                marketing those products or services to not only draw in current
                followers as customers but gain new followers searching for your
                product. Digital Fueled offers promotional content writing
                services to customers.
              </p>
              <AnimatedButton href="/enquiry">Get Started</AnimatedButton>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img
                src="/images/demo/pro-content.jpg"
                alt="web development"
                width={600}
                height={600}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-12 items-center gap-8 lg:gap-20">
            <div className="lg:col-span-5">
              <img
                src="/images/demo/web-content.jpg"
                alt="web development"
                width={600}
                height={600}
                className="rounded-md"
              />
            </div>
            <div className="lg:col-span-7 font-geist">
              <h3 className="mb-4 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
                Website Content
              </h3>
              <p className="text-lg mb-8">
                In today’s world, good content merely isn’t going to make it.
                Businesses need outstanding content. With each algorithm update,
                Google is getting better at fulfilling searchers’ needs for
                relevant information. Digital Fueled understands the role that
                sharp and crisp website content plays to bring in customers and
                delivers the same to the clients.
              </p>
              <AnimatedButton href="/enquiry">Get Started</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/demo/coding-bg-3.png')] bg-cover bg-center bg-no-repeat py-10 lg:py-20">
        <div className="container">
          {/* <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"> */}
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 md:mb-12 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              The Best Content Agency in Delhi.
            </h2>
          </motion.div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corePrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 lg:p-8 shadow-sm  transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <principle.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-geist text-xl font-semibold text-gray-900">
                  {principle.title}
                </h3>
                <p className="font-geist">{principle.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </section>
      {/* <TechStackSection /> */}
      {/* <HowItsWork /> */}
      <ContactForm className="bg-gray-100" />
    </>
  )
}
