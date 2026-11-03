"use client"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  CheckCheck,
  ChevronRight,
  Dot,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

/* ---------------------------------- types ---------------------------------- */

interface featuresSection {
  title: string
}

interface Features {
  id: string
  label: string
  heading: string
  description: string
  features: featuresSection[]
  image: string
}

/* ---------------------------------- data ----------------------------------- */

const FEATURES: Features[] = [
  {
    id: "assignment",
    label: "Lead Assignment",
    heading: "Smart Lead Assignment",
    description:
      "Automatically distribute incoming leads to the right sales representatives based on predefined business rules. Balance workloads, improve response times, and ensure every customer enquiry is assigned to the right team member without manual intervention.",
    features: [
      { title: "Workload-Based Lead Distribution" },
      { title: "Service & Category-Based Assignment" },
      { title: "Instant Lead Allocation" },
      { title: "Duplicate Assignment Prevention" },
      { title: "Automated Team Lead Routing" },
    ],
    image: "/images/demo/lms-1.png",
  },

  {
    id: "timeline",
    label: "Timeline Tracking",
    heading: "Timeline Tracking",
    description:
      "Track every lead from the first interaction to successful conversion with a clear and organized sales pipeline. Monitor lead progress, identify bottlenecks, streamline follow-ups, and give your team complete visibility into every sales opportunity.",
    features: [
      { title: "Visual Sales Pipeline Tracking" },
      { title: "Lead Stage Progress Monitoring" },
      { title: "Sales Process Bottleneck Identification" },
      { title: "Scheduled Follow-up Management" },
      { title: "Sales Forecasting & Conversion Insights" },
    ],
    image: "/images/demo/lms-2.png",
  },

  {
    id: "access",
    label: "Access Control",
    heading: "Role Based Access",
    description:
      "Maintain complete control over your business operations with flexible role-based access management. Define custom permissions, protect sensitive business information, and ensure every team member has access to the tools and data they need to perform their responsibilities.",
    features: [
      { title: "Custom Roles & Permission Management" },
      { title: "Restricted Access to Sensitive Data" },
      { title: "Manager & Administrator Controls" },
      { title: "Department-Wise Access Management" },
      { title: "Scalable Team Access Configuration" },
    ],
    image: "/images/demo/lms-3.png",
  },

  {
    id: "performance",
    label: "Performance",
    heading: "Performance Monitoring",
    description:
      "Measure team productivity and sales efficiency through real-time performance insights and actionable analytics. Track response times, evaluate individual and team achievements, monitor conversion rates, and make smarter business decisions backed by meaningful data.",
    features: [
      { title: "Lead Response Time Tracking" },
      { title: "Individual & Team Performance Analytics" },
      { title: "Lead Conversion Rate Monitoring" },
      { title: "Sales Representative Performance Insights" },
      { title: "Real-Time Business Analytics & Reporting" },
    ],
    image: "/images/demo/lms-4.png",
  },
]

export function FeaturesSection() {
  const [activeId, setActiveId] = useState<string>(FEATURES[0]!.id)
  const active: Features =
    FEATURES.find((i) => i.id === activeId) ?? FEATURES[0]!

  const selectIndustry = (id: string) => {
    setActiveId(id)
  }

  return (
    <section id="industries" className="relative overflow-hidden pb-10">
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(37,211,102,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-[120px]" /> */}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Everything Your Sales Team Needs to Work Smarter
          </h2>
          <p className="mt-4 text-lg">
            Bring lead management, team collaboration, sales tracking, and
            performance insights together in one powerful platform. Streamline
            daily operations, improve team accountability, and turn more
            enquiries into successful conversions.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <div className="mx-auto flex w-max gap-4 overflow-x-auto rounded-full bg-white p-2 [scrollbar-width:none] lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {FEATURES.map((ind) => {
              const isActive = ind.id === activeId
              return (
                <button
                  key={ind.id}
                  onClick={() => selectIndustry(ind.id)}
                  className={`shrink-0 rounded-full px-6 py-3 text-sm font-medium ring transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white ring-blue-500"
                      : "bg-white text-black ring-gray-200 hover:ring-blue-200"
                  }`}
                >
                  {ind.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-8 grid items-center gap-12 rounded-3xl p-6 shadow-lg ring ring-gray-200 lg:grid-cols-2 lg:gap-16">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="h-full w-full"
              >
                <Image
                  src={active.image}
                  alt={active.heading}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-2xl font-semibold tracking-tight sm:text-2xl">
                {active.heading}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed">
                {active.description}
              </p>

              <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-1">
                {active.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
                    className="flex gap-2"
                  >
                    <div className="mt-1.5 grid size-2 shrink-0 place-items-center rounded-full bg-blue-500"></div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{f.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-600"
              >
                Start Managing Leads <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
