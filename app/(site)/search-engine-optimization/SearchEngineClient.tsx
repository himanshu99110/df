"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  ChartNoAxesCombined,
  ChartPie,
  FileChartColumn,
  FileSearch,
  FileText,
  Link2,
  MapPinned,
  RefreshCw,
  Rocket,
  Search,
  SearchCheck,
  Settings,
  Sparkle,
  TrendingUp,
  Trophy,
  Users,
  Wrench
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ContactForm from "../components/contact-from"

export default function SearchEngineOptimization() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as const,
    },
  }

  // Data Arrays
  const offeringsData = [
    {
      title: "Increase website visibility and improve traffic",
      description:
        "Our experts create a plan to improve your website traffic by choosing relevant keywords so that your business will rank higher on Google search results.",
      icon: "/images/icons/seo-traffic.png",
      colSpan: "md:col-span-4",
    },
    {
      title: "Enhance Brands Credibility",
      description:
        "Digital Fueled helps you rank your website with their best practices. We aim to build a level of trust among the audience.",
      icon: "/images/icons/seo-key.png",
      colSpan: "md:col-span-4",
    },
    {
      title: "Long Term Results",
      description:
        "Our well-curated services provide full benefits to your brand. We provide various elements of SEO in your website so that you will get long-term results.",
      icon: "/images/icons/result.png",
      colSpan: "md:col-span-4",
    },
    {
      title: "Optimize User Experience",
      description:
        "We fix all the technical issues on the website. This will enhance the whole user experience. This encourages your visitors to explore more on your website",
      icon: "/images/icons/ux.png",
      colSpan: "md:col-span-4",
    },
    {
      title: "Attracts Target Traffic",
      description:
        "Our team first analyzed the goals of your business and made a roadmap to attract the right audience.",
      icon: "/images/icons/seo-map.png",
      colSpan: "md:col-span-4",
    },
    {
      title: "Cost Effective Marketing",
      description:
        "We provide only cost-effective solutions to clients so that our clients will get long-term profit in your business.",
      icon: "/images/icons/cost-effect.png",
      colSpan: "md:col-span-4",
    },
  ]

  const approach = [
    {
      title: "Customized Approach",
      description:
        "Every SEO strategy is tailored to your business goals, target audience, and industry to deliver measurable results.",
      icon: "/images/icons/customize.png",
    },
    {
      title: "Transparent Reporting",
      description:
        "Receive regular performance reports with clear insights into rankings, traffic, conversions, and campaign progress.",
      icon: "/images/icons/report.png",
    },
    {
      title: "Experienced Team",
      description:
        "Our SEO specialists bring years of experience in optimizing websites across diverse industries and competitive markets.",
      icon: "/images/icons/team.png",
    },
    {
      title: "Client Satisfaction",
      description:
        "We focus on building long-term partnerships by delivering quality SEO services and exceeding client expectations.",
      icon: "/images/icons/client.png",
    },
    {
      title: "Results-Driven Approach",
      description:
        "Our strategies are designed to improve search visibility, generate qualified leads, and maximize your return on investment.",
      icon: "/images/icons/result-data.png",
    },
    {
      title: "Responsive Client Support",
      description:
        "Our team is always available to answer your questions, provide updates, and ensure smooth communication throughout your campaign.",
      icon: "/images/icons/time.png",
    },
    {
      title: "Affordable Pricing",
      description:
        "Choose from flexible and cost-effective SEO packages that deliver exceptional value without compromising quality.",
      icon: "/images/icons/save.png",
    },
    {
      title: "Industry Insights",
      description:
        "We stay updated with Google's latest algorithm changes and SEO trends to keep your website ahead of the competition.",
      icon: "/images/icons/insight.png",
    },
    {
      title: "Local SEO Expertise",
      description:
        "Boost your visibility in local search results with optimized Google Business Profiles, local citations, and location-based SEO strategies.",
      icon: "/images/icons/local-seo.png",
    },
  ]

  const seoServicesTwo = [
    {
      title: "Keyword Research",
      description:
        "Our experts are highly experienced in using advanced SEO tools to identify the most relevant and effective keywords for your business, helping you attract the right audience and improve search rankings.",
      icon: Search,
      space: "lg:col-span-1",
    },
    {
      title: "Technical SEO",
      description:
        "We resolve technical SEO issues such as crawl errors, indexing problems, site speed, structured data, and website architecture to ensure your website performs at its best.",
      icon: Wrench,
      space: "lg:col-span-1",
    },
    {
      title: "Analytics and Reporting",
      description:
        "We track your website's performance using Google Analytics and other reporting tools, providing regular updates and actionable insights to measure SEO success.",
      icon: BarChart3,
      space: "lg:col-span-1",
    },
    {
      title: "On-Page Optimization",
      description:
        "Our team optimizes your website's content, meta tags, headings, internal linking, and overall structure to improve user experience and search engine visibility.",
      icon: FileText,
      space: "lg:col-span-1",
    },
    {
      title: "Off-Page Optimization",
      description:
        "We strengthen your website's authority through quality link building, social media promotion, and other off-page SEO strategies that improve credibility and rankings.",
      icon: Link2,
      space: "lg:col-span-1",
    },
    {
      title: "Local SEO (If Applicable)",
      description:
        "For businesses targeting local customers, we optimize your online presence with Local SEO strategies to improve visibility in local searches and drive more qualified leads.",
      icon: MapPinned,
      space: "col-span-1",
    },
    {
      title: "Ongoing Monitoring and Optimization",
      description:
        "SEO is an ongoing process. We continuously monitor your website's performance, analyze results, implement improvements, and follow Google's latest guidelines to ensure long-term growth and better search rankings.",
      icon: Activity,
      space: "lg:col-span-2",
    },
  ]

  return (
    <>
      {/* SECTION 1: Standardized Hero/Banner Section */}
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
                  Rank Higher. Grow Faster.
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
                  Search Engine{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Optimisation.
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
                  Digital Fueled is one of the leading digital marketing
                  agencies in Delhi and we have a proven track record in
                  providing the best digital marketing strategies. We provide
                  complete guidance to startups as well as to experienced
                  companies.
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
              <span className="hidden animate-bounce2 hover-box absolute -top-8 left-[calc(100%-24px-120px)] z-1! lg:flex size-30 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
                <svg
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 850.394 850.394"
                  className="flex size-20 items-center justify-center object-contain object-center"
                >
                  <g transform="matrix(1,0,0,1,75,75)">
                    <path
                      fill="#ffffff"
                      d="M38.168 605.224c38.746 36.328 88.25 37.375 131.218 41.098 46.746 4.023 96.383 5.973 151.727 5.973 86.379-.336 193.648-3.93 278.722-14.055 133.813-7.652 119.871-161.563 122.48-262.918-.098-64.793-1.145-133.578-12.523-199.613-10.605-73.551-57.887-109.535-120.301-110.512-138.175-11.738-298.402-12.359-434.304 1.707C64.667 72.396 3.086 107.095-6.992 209.649c-11.996 105.582-6.609 220.488 6.777 308.727 4.613 28.695 11.758 61.434 38.383 86.848z"
                      opacity="1"
                      data-original="#ffffff"
                      className=""
                    ></path>
                    <path
                      fill="#68182b"
                      d="M64.589 577.536c27.867 26.594 71.848 27.547 108.07 30.66 85.004 7.309 170.832 6.754 256.032 3.723 39.184-1.391 78.359-3.48 117.429-6.73 15.574-1.297 31.145-2.781 46.668-4.645 17.105-2.051 34.871-3.699 49.254-14.172 14.863-10.82 22.539-27.086 28.668-43.922 7.391-21.008 8.621-44.766 10.25-66.777 2.48-33.352 3.137-66.852 3.094-100.293-.102-64.094-1.063-129.852-11.973-193.18-4.758-27.652-15.234-57.867-42.727-70.242-15.23-6.855-32.426-7.625-48.852-9.141-15.797-1.465-31.617-2.578-47.449-3.523-83.729-4.961-167.878-5.715-251.695-2.762-40.684 1.438-81.395 3.793-121.848 8.395-36.348 4.133-79.102 7.195-103.672 38.066-16.406 20.617-21.488 46.254-24.902 71.73-4.324 32.32-5.59 65.027-5.887 97.613-.605 66.516 1.945 134.188 12.52 199.969 3.79 23.591 8.977 48.012 27.02 65.231z"
                      opacity="1"
                      data-original="#68182b"
                      className=""
                    ></path>
                    <path
                      fill="#ffc522"
                      d="M307.323 495.396c5.137-41.395 15.313-81.941 26.902-121.953 7.02-24.23 13.164-55.063 27.196-76.57 6.91-8.156 12.367-13.797 24.027-14.063 12.32-.281 16.172 5.188 14.109 16.961-13.035 68.215-33.625 136.246-55.696 202.027-3.891 11.227-10.719 17.863-22.77 17.555-13.943-.364-14.939-12.961-13.768-23.957zM457.894 314.849c1.285-6.535.27-9.316 6.434-6.316 17.625 8.859 138.698 74.797 115.667 98.68-34.102 35.359-74.159 63.379-117.05 86.957-8.523 4.57-6.578-21.691-6.344-27.129.582-13.277 5.098-18.848 16.012-25.059 18.359-9.992 47.601-21.195 44.851-46.707-2.309-21.41-35.972-31.219-51.437-40.574-9.016-5.938-9.766-14.738-9.906-24.824-.07-5.075.797-10.079 1.773-15.028z"
                      opacity="1"
                      data-original="#ffc522"
                    ></path>
                    <path
                      fill="#e5e5e5"
                      d="M662.346 329.579c-.57-22.918-1.523-45.844-3.039-68.738-.793-11.871-2.137-12.582-15.684-13.309-192.737-10.453-386.445-10.496-579.011 3.031-15.516 1.094-16.348.613-17.078 14.469-1.675 31.352-1.773 62.801-1.035 94.184.793 33.578 2.57 67.156 5.711 100.598 2.219 23.68 4.66 47.719 10.406 70.855 2.398 9.637 5.828 19.031 12.141 26.867 11.137 13.832 28.523 19.809 45.359 23.191 35.617 7.152 73.098 8.379 109.301 9.988 82.688 3.664 165.696 2.305 248.34-2.051 33.879-1.789 67.772-4.094 101.522-7.688 13.984-1.488 30.016-1.859 43.02-7.488 15.418-6.672 22.621-21.688 28.066-36.648 2.781-7.891 4.313-16.199 5.605-24.445 4.094-26.109 5.293-54.02 6.168-80.926 1.103-33.948 1.056-67.933.208-101.89zm-449.659 71.899c4.547 11.391 29.242 19.262 39.18 25.035 20.336 12.742 23.941 35.973 21.352 58.691-1.113 9.777-.836 21.813-10.277 27.621-9.004 5.543-16.664 5.313-25.82.453-29.055-15.863-57.328-33.398-82.852-54.598-14.121-11.715-53.703-36.426-53.418-57.461.336-24.777 29.445-43.004 47.164-56.773 27.387-21.285 56.281-39.23 87.309-54.754 9.238-4.469 16.137-6.117 25.758-1.773 9.211 4.152 10.719 21.914 11.945 30.199 3.086 20.988-.25 40.645-17.535 53.34a11.318 11.318 0 0 1-2.141 1.668c-6.681 3.98-44.392 19.035-40.665 28.352zm207.211-96.102c-13.031 68.211-33.625 136.246-55.691 202.023-7.332 21.152-23.497 35.227-46.7 32.645-23.59-2.625-33.637-22.578-31.277-44.648 5.742-46.285 16.578-91.863 30.305-136.414 5.738-18.645 10.672-40.738 19.363-59.48 7.484-16.145 27.965-46.016 63.911-35.793 19.581 5.562 23.355 23.022 20.089 41.667zm135.437 152.855c-25.773 20.48-52.894 38.301-81.737 54.16-9.805 5.246-17.602 6.523-27.496.434-9.609-5.914-9.797-19.223-10.422-29.254-1.648-26.34 2.809-46.434 26.281-59.809 5.789-3.145 42.309-19.406 32.734-27.789-11.422-10-26.426-15.262-39.32-23.051-20.27-13.371-23.16-36.594-18.691-59.27 2.023-10.25 3.797-22.352 14.25-27.07 8.535-3.863 16.301-.035 24.047 3.73 30.453 15.32 60.085 32.676 86.452 54.449 17.422 14.383 46.418 31.449 46.766 56.457.296 20.568-38.806 45.842-52.864 57.013z"
                      opacity="1"
                      data-original="#e5e5e5"
                      className=""
                    ></path>
                    <path
                      fill="#ffc522"
                      d="M240.663 310.669c7.148-3.805 9.445-1.004 10.578 4.438.719 3.395 1.168 6.84 1.496 10.293 1.086 11.293.078 22.906-10.039 29.508-17.836 10.656-48.84 19.234-51.43 43.281-2.648 24.625 33.547 37.004 49.945 46.543 8.129 5.082 9.914 11.234 11.09 20.641.211 1.688.348 12.641-.602 20.797-1.105 9.406-4.969 8.363-10.414 5.293-41.246-23.184-78.449-50.652-112.148-84.156-21.874-21.771 82.438-81.228 111.524-96.638zM411.64 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.09 7.414 8.945 13.523-.145 3.297-1.168 6.344-3.234 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.217-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#ffc522"
                    ></path>
                    <path
                      fill="#ff7a0d"
                      d="M489.476 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.089 7.414 8.944 13.523-.144 3.297-1.167 6.344-3.233 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.218-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#ff7a0d"
                    ></path>
                    <path
                      fill="#ff2e60"
                      d="M655.608 215.333c-1.563-15.883-3.664-31.84-8.156-47.074-4.164-14.141-10.848-28.371-24.211-35.832-12.828-7.16-29.207-7.277-43.543-8.59-33.008-3.031-66.137-4.727-99.253-5.926-82.238-2.98-164.79-2.883-246.954 1.945-36.211 2.121-72.691 4.793-108.477 10.867-17.977 3.055-36.586 8.332-49.602 21.828-9.078 9.398-13.496 19.301-16.777 30.289-2.605 8.699-4.516 17.613-5.973 26.625-3.633 22.629-1.621 20.934 20.098 19.445 189.074-12.906 379.227-12.781 568.429-2.605 10.654.575 15.54.403 14.419-10.972zm-213.651-26.258c-6.805 7.945-19.488 10.496-29.125 6.77-11.008-4.25-17.551-14.324-17.277-26.137.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.359 5.117 26.973 15.57 4.292 9.739 2.714 21.504-4.251 29.637zm77.835 0c-6.804 7.945-19.487 10.496-29.124 6.77-11.008-4.25-17.551-14.324-17.277-26.137.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.358 5.117 26.972 15.57 4.292 9.739 2.714 21.504-4.251 29.637zm77.703-.133c-6.805 7.945-19.484 10.496-29.121 6.773-11.012-4.254-17.555-14.324-17.277-26.137.289-6.355 2.254-12.242 6.262-17.215 4.289-5.297 10.762-7.969 17.414-8.625 11.332-1.137 22.359 5.113 26.973 15.566 4.292 9.74 2.718 21.506-4.251 29.638z"
                      opacity="1"
                      data-original="#ff2e60"
                    ></path>
                    <path
                      fill="#00ebed"
                      d="M567.311 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.09 7.414 8.945 13.523-.145 3.297-1.168 6.344-3.234 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.218-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#00ebed"
                    ></path>
                    <path
                      fill="#ef6200"
                      d="M512.179 169.235c-.543 7.73-6.863 11.871-14.313 10.586-5.859-1.008-9.023-6.301-9.672-11.746-.281-2.379.152-4.543.938-6.586-3.25 4.188-3.992 9.961-1.859 14.805 2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.066-2.57 3.09-5.617 3.233-8.914.074-3.059-.737-5.891-2.284-8.238.718 1.878 1.152 3.89.968 6.499z"
                      opacity="1"
                      data-original="#ef6200"
                    ></path>
                    <path
                      fill="#19bfbb"
                      d="M591.331 170.974c.078-3.25-.902-6.203-2.648-8.629.719 1.563 1.172 3.305 1.121 5.512-.148 6.047-5.426 9.828-11.004 10.27-4.645.371-8.957-2.027-11.16-6.063-1.891-3.488-1.602-7.488-.289-11.141-.012.008-.027.012-.039.027-3.605 4.211-4.422 10.301-2.203 15.344 2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.065-2.571 3.088-5.617 3.233-8.914z"
                      opacity="1"
                      data-original="#19bfbb"
                    ></path>
                    <path
                      fill="#6cfffb"
                      d="M571.702 163.044c-1.457 5.32 5.992 7.211 10.934 5.398 2.676-.98 3.125-3.375 2.176-5.359-2.774-5.801-12.11-3.672-13.11-.039z"
                      opacity="1"
                      data-original="#6cfffb"
                    ></path>
                    <g fill="#ffa222">
                      <path
                        d="M409.437 176.294c2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.066-2.57 3.09-5.617 3.234-8.914a14.888 14.888 0 0 0-.559-4.434c-.113 1.508-.391 3.004-1.109 4.488-2.496 5.141-8.699 8.199-14.258 7.391-5.121-.746-7.883-5.586-9.273-10.027a16.99 16.99 0 0 1-.738-4.398c-1.848 3.823-2.02 8.366-.286 12.3zM129.14 407.306c33.699 33.504 70.902 60.973 112.148 84.156 5.445 3.07 9.309 4.113 10.414-5.293.707-6.086.813-13.73.73-17.918-3.043 7.293-8.191 12.492-18.047 9.781-15.637-4.297-29.367-16.945-41.926-26.57-21.156-16.215-55.98-37.09-59.984-65.25-6.511 8.449-8.589 15.863-3.335 21.094zM343.519 483.583c-5.762 15.484-12.324 26.578-22.129 35.754 11.859.188 18.617-6.414 22.473-17.539 22.071-65.781 42.661-133.813 55.696-202.027 1.641-9.379-.555-14.699-7.715-16.352 5.281 16.281-6.055 47.723-8.707 58.395-5.871 23.727-10.5 47.668-16.926 71.27a820.957 820.957 0 0 1-22.692 70.499zM227.491 354.634c-11.246 6.961-23.699 12.059-32.016 22.703-5.59 7.16-6.832 17.438-4.102 26.203-.219-1.727-.305-3.492-.105-5.352 2.59-24.047 33.594-32.625 51.43-43.281 10.117-6.602 11.125-18.215 10.039-29.508a115.38 115.38 0 0 0-.488-4.156c-.27 1.785-.586 3.543-.863 5.352-2.117 13.57-13.203 21.422-23.895 28.039zM456.121 329.876c.141 10.086.891 18.887 9.906 24.824 15.465 9.355 49.128 19.164 51.437 40.574.039.387.008.738.039 1.121 1.109-4.793.613-9.93-2.328-15.176-6.542-11.68-15.878-18.027-27.511-24.27-8.352-4.484-16.07-8.648-23.164-15.102-4.59-4.188-6.598-10.555-8.047-17.055-.16 1.689-.359 3.377-.332 5.084zM462.945 494.169c42.891-23.578 82.948-51.598 117.05-86.957 5.082-5.273 3.129-12.59-3.164-20.895-4.152 24.191-28.168 39.238-47.402 53.957-11.828 9.051-24.112 17.504-36.413 25.887-10.5 7.168-26.359 17.477-36.637 5.523-.375 9.231-.43 26.239 6.566 22.485z"
                        fill="#ffa222"
                        opacity="1"
                        data-original="#ffa222"
                      ></path>
                    </g>
                    <path
                      fill="#fbe134"
                      d="M420.414 161.134c-3.309 1.402-4.391 4.965-2.168 7.559 2.008 2.355 5.699 3.152 8.707 1.961 1.273-.508 2.313-1.762 2.836-3.16 1.363-3.61-2.949-9.075-9.375-6.36zM201.288 338.142c10.23-5.484 20.281-11.277 30.508-16.762 6.355-3.414 12.695-5.668 19.094-7.633-1.242-4.496-3.711-6.547-10.227-3.078-17.383 9.207-61.621 34.152-89.75 57.383 16.797-9.938 33.137-20.672 50.375-29.91zM307.323 495.396c-.75 7.063-.559 14.742 3.328 19.461 2.91-26.539 6.25-52.59 12.402-79.031 5.984-25.707 12.621-51.316 20.586-76.488 6.762-21.387 16.727-55.941 33.512-75.137-6.426 2.176-10.707 6.746-15.73 12.672-14.032 21.508-20.176 52.34-27.196 76.57-11.589 40.011-21.765 80.558-26.902 121.953zM457.844 315.157c10.301.766 20.84 8.258 29.258 13.027a1735.765 1735.765 0 0 1 37.862 22.094c14.887 8.945 29.461 17.871 43.875 27.137-28.613-28.203-92.116-62.652-104.511-68.883-6.164-3-5.148-.219-6.434 6.316-.019.106-.031.204-.05.309z"
                      opacity="1"
                      data-original="#fbe134"
                    ></path>
                    <path
                      fill="#ea0f4d"
                      d="M649.983 178.185c.391 19.488-4.559 36.422-29.563 36.086-44.094-.594-88.219-3.613-132.327-4.523-68.246-1.402-136.524-1.164-204.758.793-42 1.211-83.965 3.207-125.902 5.852-11.793.746-23.617 1.324-35.391 2.34-14.898 1.285-29.781 3.43-44.535-.191-13.902-3.414-18.258-17.988-19.727-32.383a213.779 213.779 0 0 0-5.117 23.309c-3.633 22.629-1.621 20.934 20.098 19.445 189.074-12.906 379.227-12.781 568.429-2.605 10.652.574 15.539.402 14.418-10.973-1.226-12.471-2.836-24.975-5.625-37.15z"
                      opacity="1"
                      data-original="#ea0f4d"
                    ></path>
                    <path
                      fill="#ea0f4d"
                      d="M445.957 152.181c-7.223-11.297-23.914-14.473-35.766-9.438-13.594 5.781-19.422 19.035-15.406 33.195.938 3.297 2.398 5.84 4.191 7.883-2.293-4.16-3.539-8.945-3.422-14.113.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.359 5.117 26.973 15.57 3.172 7.191 3.117 15.477.078 22.605 6.535-8.483 5.664-20.487-.328-29.862zM472.488 175.938c1.004 3.52 2.59 6.215 4.563 8.32-2.445-4.254-3.785-9.203-3.66-14.551.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.358 5.117 26.972 15.57 3.133 7.105 3.105 15.281.172 22.355 6.309-8.473 5.379-20.332-.555-29.613-7.223-11.297-23.913-14.473-35.765-9.438-13.594 5.783-19.419 19.037-15.407 33.197zM565.69 142.743c-13.594 5.781-19.422 19.035-15.406 33.195.988 3.488 2.566 6.156 4.508 8.254-2.477-4.266-3.82-9.242-3.695-14.613.289-6.355 2.254-12.242 6.262-17.215 4.289-5.297 10.762-7.969 17.414-8.625 11.332-1.137 22.359 5.113 26.973 15.566 3.191 7.238 3.125 15.59.027 22.75 6.547-8.484 5.684-20.492-.316-29.875-7.224-11.296-23.915-14.472-35.767-9.437z"
                      opacity="1"
                      data-original="#ea0f4d"
                    ></path>
                    <path
                      fill="#ff6699"
                      d="M347.648 139.485c-80.434-4.898-175.977 4.188-222.156 12.98-16.777 3.195-26.367 11.508-31.301 19.84-10.586 17.891-4.305 25.848 11.301 28.523 10.559 1.801 23.75-.238 32.563-.539 25.637-.879 117.012-6.961 220.403-9.434 11.852-.289 15.266-21.668 11.457-36.203-3.302-12.655-8.525-14.331-22.267-15.167z"
                      opacity="1"
                      data-original="#ff6699"
                    ></path>
                    <path
                      fill="#c6c6c6"
                      d="M268.136 284.571c-14.375-15.016-34.324-.305-49.098 7.035-29.676 14.738-57.414 33.121-83.258 53.801-15.656 12.523-35.602 27.855-38.41 49.082-.82 6.191 2.305 11.938 6.074 16.75-1.633-3.387-2.641-6.75-2.594-10.02.336-24.777 29.445-43.004 47.164-56.773 27.387-21.285 56.281-39.23 87.309-54.754 9.238-4.469 16.137-6.117 25.758-1.773 9.211 4.152 10.719 21.914 11.945 30.199 2.168 14.758 1.035 28.805-5.762 40.289 4.457-5.184 8.012-11.176 10.199-18.051 4.673-14.679 1.966-44-9.327-55.785zM608.514 385.419c-11.469-20.52-32.168-35.805-50.453-49.965-18.863-14.609-39.281-27-60.163-38.465-15.066-8.277-33.813-21.961-51.512-13.742-15.668 7.277-15.176 32.871-14.512 46.77.531 11.078 3.633 19.945 9.066 27.367-6.914-12.656-7.297-28.313-4.258-43.73 2.023-10.25 3.797-22.352 14.25-27.07 8.535-3.863 16.301-.035 24.047 3.73 30.453 15.32 60.085 32.676 86.452 54.449 17.422 14.383 46.418 31.449 46.766 56.457.047 3.211-.953 6.547-2.582 9.914 5.927-7.106 8.946-14.91 2.899-25.715zM421.371 279.622c-4.688-24.438-33.664-27.871-53.645-19.301-24.504 10.508-36.192 34.328-44.891 58.25-9.445 25.965-15.848 53.223-22.281 80.051-7.363 30.711-15.035 62.578-17.336 94.156-.766 10.508.996 19.469 5.473 25.215-2.508-6.758-3.324-14.527-2.461-22.598 5.742-46.285 16.578-91.863 30.305-136.414 5.738-18.645 10.672-40.738 19.363-59.48 7.484-16.145 27.965-46.016 63.911-35.793 16.992 4.824 22.055 18.621 20.973 34.363 1.108-6.261 1.71-12.617.589-18.449zM137.98 446.243a420.016 420.016 0 0 1-7.527-5.863c.457.445.898.918 1.359 1.352 2.015 1.917 4.086 3.324 6.168 4.511z"
                      opacity="1"
                      data-original="#c6c6c6"
                      className=""
                    ></path>
                    <path
                      fill="#c6c6c6"
                      d="M47.839 310.548c-.574-6.492-.949-13.141-1.32-19.82-.632 22.828-.55 45.676-.02 68.488.793 33.578 2.57 67.156 5.711 100.598 2.219 23.68 4.66 47.719 10.406 70.855 2.398 9.637 5.828 19.031 12.141 26.867 11.137 13.832 28.523 19.809 45.359 23.191 35.617 7.152 73.098 8.379 109.301 9.988 82.688 3.664 165.696 2.305 248.34-2.051 33.879-1.789 67.772-4.094 101.522-7.688 13.984-1.488 30.016-1.859 43.02-7.488 15.418-6.672 22.621-21.688 28.066-36.648 2.781-7.891 4.313-16.199 5.605-24.445 4.094-26.109 5.293-54.02 6.168-80.926.793-24.449.977-48.926.707-73.395-1.379 23.672-3.488 47.289-6.816 70.816-4.477 31.594-3.727 63.949-14.273 94.449-11.098 32.094-36.793 42.457-67.789 46.301-24.738 3.063-49.656 4.797-74.53 6.371a2678.345 2678.345 0 0 1-207.961 5.059c-33.32-.488-66.656-1.781-99.871-4.551-27.699-2.313-56.781-4.883-83.148-14.203-31.059-10.984-36.754-42.023-41.16-70.953-4.832-31.727-8.148-63.691-11.395-95.609-2.891-28.382-5.551-56.788-8.063-85.206z"
                      opacity="1"
                      data-original="#c6c6c6"
                      className=""
                    ></path>
                    <path
                      fill="#f4f4f4"
                      d="M337.417 543.228c27.508-12.164 36.598-46.504 44.118-72.926 8.426-29.57 16-59.539 23.625-89.324 6.289-24.563 13.051-50.066 14.734-75.59-13.035 68.211-33.621 136.238-55.688 202.012-7.332 21.152-23.497 35.227-46.7 32.645-8.391-.938-15.035-4.086-20.051-8.723 8.993 12.081 23.868 19.019 39.962 11.906zM157.843 253.009c62.938-2.008 125.934-2.617 188.906-2.98 56.649-.32 113.321-.414 169.964.762 26.859.551 53.859.551 80.668 2.227 23.289 1.465 46.559 6.012 62.563 19.523-.23-3.902-.383-7.805-.637-11.699-.793-11.871-2.137-12.582-15.684-13.309-192.737-10.453-386.445-10.496-579.011 3.031-14.941 1.055-16.254.777-16.984 13.125 34.594-11.102 75.621-9.571 110.215-10.68zM266.773 433.224c-6.625-6.406-14.094-10.996-22.117-15.477-10.301-5.758-27.508-11.848-28.418-23.777-2.898 2.676-4.449 5.258-3.551 7.508 4.547 11.391 29.242 19.262 39.18 25.035 20.336 12.742 23.941 35.973 21.352 58.691-1.113 9.777-.836 21.813-10.277 27.621-9.004 5.543-16.664 5.313-25.82.453-29.055-15.863-57.328-33.398-82.852-54.598-10.105-8.387-33.195-23.434-45.438-39.023 7.441 16.188 27.008 29.801 38.918 39.273 14.469 11.516 29.652 22.129 45.004 32.434 16.109 10.809 33.023 23.711 51.93 29.148 30.973 8.91 33.629-33.051 32.926-52.879-.396-11.214-2.369-26.21-10.837-34.409zM435.105 505.919c13 43.031 79.569-13.383 95.765-24.215 21.109-14.105 40.66-30.117 59.273-47.34 5.953-5.512 10.238-11.34 12.156-17.543-11.402 16.449-36.332 32.961-46.965 41.41-25.773 20.48-52.894 38.301-81.737 54.16-9.805 5.246-17.602 6.523-27.496.434-9.609-5.914-9.797-19.223-10.422-29.254-1.648-26.34 2.809-46.434 26.281-59.809 5.789-3.145 42.309-19.406 32.734-27.789a65.227 65.227 0 0 0-4.66-3.691c-.684 13.816-29.113 26.063-36.359 30.934-7.66 5.148-13.086 12.043-17.449 20.059-9.875 18.109-6.808 43.796-1.121 62.644z"
                      opacity="1"
                      data-original="#f4f4f4"
                      className=""
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="hidden animate-bounce2 hover-box absolute -bottom-8 left-10 z-1! lg:flex size-30 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
                <Image
                  src="/images/svg/web-dev-2.svg"
                  alt="web dev"
                  width={120}
                  height={120}
                />
              </span>
              <div className="flex h-full items-center overflow-hidden">
                <Image
                  src="/images/demo/seo-6.avif"
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

      <section className="pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[600px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/seo-5.jpg"
                  alt="coding image"
                  width={600}
                  height={800}
                  className="h-auto w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 left-2 sm:-bottom-12 sm:left-6 md:bottom-10 md:left-8 z-20">
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
              <div className="absolute right-0 -bottom-6 sm:-bottom-8 md:bottom-0 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/seo-4.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Generate more leads and get traffic with Digital Fueled.
              </h2>
              <p className="mb-4">
                If you want to generate more sales and want your website will be
                reached to the right audience in 2025 then only the Seo strategy
                of 2025 will help you. Now you can also rank higher with the
                help of the best SEO agency in Delhi NCR. The Seo agency will
                rank your website on popular search engines like Google. The
                agency provides competitive and effective solutions to enhance
                the visibility of your website. Our strategies are
                research-based and very innovative. We tailored unique SEO
                strategies according to the client's requirements. To reach the
                top of the Google search engine we follow all the SEO tactics.
                Digital Fueled has been the best SEO company in Delhi since
                2018. We have highly skilled and professional experts in our
                company.
              </p>
              <p className="mb-6 md:mb-8">
                Our experts follow and update themselves with the latest Google
                trends and updates with which they always change the strategy to
                keep the website on the top of the google. We have lots of
                successful projects, happy clients, and running projects on
                Google.
              </p>
              <AnimatedButton href="/enquiry">Enquire Now</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER - CREATIVE BENTO GRID */}
      <section className="bg-gray-100 py-10 lg:py-24">
        <div className="container">
          <h2 className="mb-8 md:mb-12 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            Benefits of Hiring Digital Fueled for <br />Startups and Businesses in
            Delhi NCR
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-12"
          >
            {offeringsData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative flex flex-col overflow-hidden rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-orange-500 ${item.colSpan}`}
              >
                {/* Decorative background flare */}
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-10" />

                <div className="relative z-10">
                  <div className="mb-6 flex size-16 items-center justify-center">
                    <Image
                      src={item.icon}
                      className="h-full w-full object-contain"
                      alt="icons"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="mb-3 font-geist text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="z-10 font-geist">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-10 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-20">
            <div className="lg:col-span-7 font-geist order-2 lg:order-1">
              <h3 className="mb-4 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                What is SEO & Why is It Important for Your Business?
              </h3>
              <p className="mb-6 md:mb-8 md:text-lg">
                According to lots of people, SEO is nothing, it's just a
                formality. But when it comes to getting good traffic and ranking
                on the Google first page SEO plays a very important role in
                this. SEO is a type of process that helps improve the visibility
                of the website on various search engines. The better the
                visibility the better your business will be. An SEO strategy
                typically works on 4 important aspects which include keyword
                analysis, backlink creation, Content creation, and technical
                SEO.
              </p>
              <AnimatedButton href="/enquiry">Get Started</AnimatedButton>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img
                src="/images/demo/seo-graphic.jpg"
                alt="web development"
                width={600}
                height={600}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] py-10 lg:py-24">
        <div className="container">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              Rank Your Website with the Best <br className="hidden lg:block" />
              SEO Company in Delhi
            </h2>
            <p className="font-geist md:text-lg text-white">
              Improve your website traffic, Increase your website visibility,
              and generate more leads with the best Seo agency in Delhi.
            </p>
          </div>
          <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:text-lg text-black">
            <li className="group flex items-center gap-3 rounded-lg bg-white p-4 md:p-6 font-medium ring ring-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-800 hover:ring-blue-500">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <ChartNoAxesCombined />
              </span>
              Helps in improving the SERP Ranking of your website.
            </li>
            <li className="group flex items-center gap-3 rounded-lg bg-white p-4 md:p-6 font-medium ring ring-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-800 hover:ring-blue-500">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <Trophy />
              </span>
              Always stay in the competition.
            </li>
            <li className="group flex items-center gap-3 rounded-lg bg-white p-4 md:p-6 font-medium ring ring-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-800 hover:ring-blue-500">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <Wrench />
              </span>
              Optimize your website technically with every update.
            </li>
            <li className="group flex items-center gap-3 rounded-lg bg-white p-4 md:p-6 font-medium ring ring-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-800 hover:ring-blue-500">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <Rocket />
              </span>
              Helps boost your Domain authority and page authority.
            </li>
            <li className="group flex items-center gap-3 rounded-lg bg-white p-4 md:p-6 font-medium ring ring-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-800 hover:ring-blue-500">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <ChartPie />
              </span>
              Drive more traffic and sales.
            </li>
            <li className="group flex items-center gap-3 rounded-lg bg-white p-4 md:p-6 font-medium ring ring-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-800 hover:ring-blue-500">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <FileChartColumn />
              </span>
              Provide monthly seo report to the clients.
            </li>
          </ul>
          {/* <div className="grid grid-cols-2 gap-16">
            <div className="py-24">
              <h2 className="mb-6 font-geist text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Rank Your Website with the Best SEO Company in Delhi
              </h2>
              <p className="mb-8 font-geist text-white">
                Improve your website traffic, Increase your website visibility,
                and generate more leads with the best Seo agency in Delhi.
              </p>
              <AnimatedButton>Explore</AnimatedButton>
            </div>
            <div className="relative h-full w-full">
              <div className="absolute inset-0">
                <Image
                  src="/images/demo/seo-6.avif"
                  alt="seo"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <ul className="grid grid-cols-2 gap-3 relative text-black p-8">
                <li className="bg-white flex flex-col items-start p-4 rounded-lg gap-3">
                  <span className="size-10 flex items-center justify-center bg-blue-50 text-blue-500 shrink-0">
                    <Search />
                  </span>
                  Helps in improving the SERP Ranking of your website.
                </li>
                
              </ul>
            </div>
          </div> */}
        </div>
      </section>
      <section className="py-10 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                  Our Customized Approach to SEO Services
                </h2>
                <p className="mb-6 md:mb-8 lg:pr-8 font-geist">
                  In today's world especially this year if you want to attract
                  visitors and get good leads then your approach to SEO should
                  be strong. Now in 2025, Seo is not only about keyword ranking,
                  it's more than that. Our experts at Digital Fueled will always
                  plan an effective SEO strategy according to the requirements
                  of the clients.
                </p>
                <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
                {seoServicesTwo.map((seo, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-start justify-between gap-8 rounded-lg p-5 font-geist ring ring-border transition-all duration-300 hover:shadow-lg hover:ring-blue-200",
                      seo.space
                    )}
                  >
                    <div>
                      <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-orange-50">
                        <seo.icon size={22} className="text-orange-500" />
                      </span>
                      <h3 className="mb-3 text-xl font-semibold text-slate-900">
                        {seo.title}
                      </h3>
                      <p>{seo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-24">
        <div className="container">
          <div className="mb-8 md:mb-12 grid lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              Why Choose Digitalfueled as the best SEO company in Delhi?
            </h2>
            <p className="mb-6 md:mb-8 font-geist">
              In today's world especially this year if you want to attract
              visitors and get good leads then your approach to SEO should be
              strong. Now in 2025, Seo is not only about keyword ranking, it's
              more than that. Our experts at Digital Fueled will always plan an
              effective SEO strategy according to the requirements of the
              clients.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {approach.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-xl p-6 ring ring-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-300/10 hover:ring-orange-300"
              >
                <div
                  className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(230 124 48 / 33%) 0%, transparent 70%)",
                  }}
                ></div>
                <Image src={item.icon} alt="" width={50} height={50} />
                <h5 className="font-geist text-xl font-semibold text-slate-900">
                  {item.title}
                </h5>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <HowItsWork /> */}
      <ContactForm className="bg-gray-100" />
    </>
  )
}
