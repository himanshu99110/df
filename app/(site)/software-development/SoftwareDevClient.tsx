"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { AnimatePresence, motion } from "framer-motion"
import {
  Activity,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle,
  CheckCircle2,
  CircleCheckBig,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Layout,
  Lock,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkle,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ContactForm from "../components/contact-from"
import HowItsWork from "../components/how-its-work"

export default function SoftwareDevelopment() {
  // Expertise Data (For Zig-Zag Layout)
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored Solutions: Development of software solutions designed specifically to meet the unique needs of a business, such as internal tools, customer portals, or bespoke enterprise applications.",
      features: "Technologies Used: Java, Python, .NET, PHP, etc",
      icon: "/images/icons/software.png",
      colSpan: "lg:col-span-7",
      bgClass: "bg-slate-900 text-black", // Dark premium card
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-blue-600/20 border-blue-500/30",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },
    {
      title: "Web Development",
      description:
        "Website and Web Application Development: Designing and developing responsive, scalable, and secure web applications and websites.",
      features:
        "Technologies Used: React, Angular, Vue.js, HTML/CSS, Node.js, Laravel, Django, etc.",
      icon: "/images/icons/web-mobile.png",
      colSpan: "lg:col-span-5",
      bgClass: "bg-white",
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-slate-100 border-slate-200",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "iOS and Android Development: Creation of native or hybrid mobile applications for smartphones and tablets.",
      features:
        "Technologies Used: Swift, Kotlin, React Native, Flutter, Xamarin, etc.",
      icon: "/images/icons/mobile.png",
      colSpan: "lg:col-span-4",
      bgClass: "bg-white",
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-slate-100 border-slate-200",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },
    {
      title: "Cloud Software Development",
      description:
        "Cloud-Native Applications: Building scalable and resilient cloud-based software solutions using AWS, Azure, or Google Cloud.",
      features:
        "Technologies Used: Docker, Kubernetes, Microservices, AWS, Azure, etc.",
      icon: "/images/icons/integration.png",
      colSpan: "lg:col-span-4",
      bgClass: "bg-white",
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-slate-100 border-slate-200",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },
    {
      title: "E-commerce Development",
      description:
        "E-commerce Platforms: Building online stores and platforms, integrating payment systems, and creating custom e-commerce solutions.",
      features: "Technologies Used: Java, Python, .NET, PHP, etc",
      icon: "/images/icons/ecom.png",
      colSpan: "lg:col-span-4",
      bgClass: "bg-slate-900 text-black", // Dark premium card
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-blue-600/20 border-blue-500/30",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },

    {
      title: "Blockchain Development",
      description:
        "Blockchain-Based Solutions: Development of decentralized applications (DApps) and smart contracts for industries like finance, supply chain, and healthcare.",
      icon: "/images/icons/product.png",
      colSpan: "lg:col-span-5",
      bgClass: "bg-white",
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-slate-100 border-slate-200",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },
    {
      title: "AI and Machine Learning Development",
      description:
        "AI/ML Solutions: Developing software that leverages artificial intelligence and machine learning for enhanced functionality, such as chatbots, recommendation systems, or predictive analytics.",
      icon: "/images/icons/ai-ml.png",
      colSpan: "lg:col-span-7",
      bgClass: "bg-white",
      textClass: "text-black",
      descClass: "text-slate-900",
      iconBg: "bg-slate-100 border-slate-200",
      featureIcon: (
        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
      ),
    },
  ]

  const [activeTab, setActiveTab] = useState(0)

  const stack = [
    {
      category: "Frontend",
      icon: <Layout className="h-4 w-4" />,
      desc: "Creating responsive, highly interactive user interfaces.",
      techs: [
        {
          name: "React",
          logo: "https://cdn.simpleicons.org/react/61DAFB",
        },
        {
          name: "Next.js",
          logo: "https://cdn.simpleicons.org/nextdotjs/000000",
        },
        {
          name: "Vue.js",
          logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-4 w-4" />,
      desc: "Robust, scalable, and secure server-side logic.",
      techs: [
        {
          name: "Node.js",
          logo: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
          name: "Python",
          logo: "https://cdn.simpleicons.org/python/3776AB",
        },
        { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
        {
          name: "PHP",
          logo: "https://cdn.simpleicons.org/php/777BB4",
        },
      ],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-4 w-4" />,
      desc: "Native and cross-platform mobile experiences.",
      techs: [
        {
          name: "Swift",
          logo: "https://cdn.simpleicons.org/swift/F05138",
        },
        {
          name: "Kotlin",
          logo: "https://cdn.simpleicons.org/kotlin/7F52FF",
        },
        {
          name: "Flutter",
          logo: "https://cdn.simpleicons.org/flutter/02569B",
        },
        {
          name: "React Native",
          logo: "https://cdn.simpleicons.org/react/65ADF1",
        },
      ],
    },
    {
      category: "UI / UX",
      icon: <Palette className="h-4 w-4" />,
      desc: "Global infrastructure and deployment pipelines.",
      techs: [
        { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
        {
          name: "Sketch",
          logo: "https://cdn.simpleicons.org/sketch/F7B500",
        },
        {
          name: "Adobe XD",
          logo: "/images/icons/xd.png",
        },
        {
          name: "Adobe Photoshop",
          logo: "/images/icons/psd.png",
        },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="h-4 w-4" />,
      desc: "High-performance data storage and retrieval.",
      techs: [
        {
          name: "PostgreSQL",
          logo: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.simpleicons.org/mongodb/47A248",
        },
        {
          name: "MySQL",
          logo: "https://cdn.simpleicons.org/mysql/4479A1",
        },
        {
          name: "GraphQL",
          logo: "https://cdn.simpleicons.org/graphql/E10098",
        },
      ],
    },
    {
      category: "Cloud",
      icon: <Cloud className="h-4 w-4" />,
      desc: "Global infrastructure and deployment pipelines.",
      techs: [
        { name: "AWS", logo: "/images/icons/aws.svg" },
        {
          name: "Google Cloud",
          logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
        },
        {
          name: "Azure",
          logo: "/images/icons/azure.png",
        },
        {
          name: "Vercel",
          logo: "https://cdn.simpleicons.org/vercel/000000",
        },
      ],
    },
  ]

  const supports = [
    {
      title: "Enterprise Software Solutions",
      description:
        "Business Process Automation: Development of software that streamlines and automates key business processes, such as CRM, ERP, HRMS, and more.",
      features:
        "Technologies Used: SAP, Microsoft Dynamics, Oracle, custom-built platforms.",
      icon: Building2,
    },
    {
      title: "Software Integration",
      description:
        "System Integration Services: Integrating various software systems to work together, such as linking an existing CRM system with a new ERP solution.",
      features: "Technologies Used: APIs, SOAP, REST, middleware solutions.",
      icon: Workflow,
    },
    {
      title: "Maintenance and Support",
      description:
        "Ongoing Support: After deployment, agencies often offer ongoing maintenance and support services, including fixing bugs, applying updates, and enhancing functionality.",
      features: "",
      icon: ShieldCheck,
    },
    {
      title: "DevOps Services",
      description:
        "Automating Deployment: Setting up CI/CD pipelines, automated testing, and ensuring smooth deployment processes.",
      features: "Technologies Used: Java, Python, .NET, PHP, etc.",
      icon: GitBranch,
    },
    {
      title: "Software Testing and Quality Assurance",
      description:
        "Manual and Automated Testing: Ensuring the software meets the required standards and is free from bugs or issues.",
      features: "Testing Tools: Selenium, JUnit, Appium, TestNG, etc.",
      icon: BadgeCheck,
    },
    {
      title: "Consulting and Strategy",
      description:
        "IT Consulting: Agencies also offer advice on digital transformation, software architecture, technology stacks, and choosing the right tools for businesses.",
      features: "Technologies Used: Java, Python, .NET, PHP, etc.",
      icon: Briefcase,
    },
  ]

  return (
    <>
      <div className="bg-[url('/images/bg1.avif')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
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
                  Innovative Software Solutions
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
                  Software{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Development.
                  </span>
                </motion.h1>
                <motion.p
                  className="lg:text-lg font-medium text-white"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  Digital Fuelled is one of the best software Development Agency
                  is in delhi that specializes in creating software solutions
                  for businesses, organizations, and individuals. These agencies
                  often offer a range of services, from custom software
                  development and web design to mobile app creation and
                  cloud-based solutions.
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
              <div className="relative flex aspect-4/3 w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white lg:shadow-2xl lg:shadow-slate-200/50 sm:aspect-auto sm:h-112.5">
                {/* Header */}
                <div className="flex h-12 items-center justify-between border-b border-slate-100 bg-slate-50/50 px-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-yellow-300"></div>
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-slate-100 bg-white px-3 py-1 font-mono text-xs text-slate-400 shadow-sm">
                    <Lock className="h-3 w-3" /> prod-cluster-eu-west-1
                  </div>
                  <div className="w-10"></div> {/* Spacer for balance */}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-4 bg-slate-50/20 p-4 sm:p-6">
                  {/* Top Row Stats */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-slate-100 bg-white p-2 md:p-4 shadow-sm">
                      <div className="mb-2 flex items-start justify-between">
                        <div className="text-xs font-semibold text-slate-500">
                          Software Status
                        </div>
                        <Activity className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div className="lg:text-xl font-bold text-slate-900">
                        100%
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                        <CheckCircle2 className="h-3 w-3" /> Operational
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-white p-2 md:p-4 shadow-sm">
                      <div className="mb-2 flex items-start justify-between">
                        <div className="text-xs font-semibold text-slate-500">
                          Latency
                        </div>
                        <Zap className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="lg:text-xl font-bold text-slate-900">
                        24ms
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        Across global
                      </div>
                    </div>
                    <div className="hidden rounded-xl border border-slate-100 bg-white p-2 md:p-4 shadow-sm sm:block">
                      <div className="mb-2 flex items-start justify-between">
                        <div className="text-xs font-semibold text-slate-500">
                          Api Requests
                        </div>
                        <BarChart3 className="h-4 w-4 text-indigo-500" />
                      </div>
                      <div className="lg:text-xl font-bold text-slate-900">
                        1.2M
                      </div>
                      <div className="mt-1 text-xs text-emerald-600">
                        ↑ 12% this hour
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area - Split Pane */}
                  <div className="grid min-h-0 flex-1 gap-4 sm:grid-cols-2">
                    {/* Code Editor */}
                    <div className="relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#0f172a] p-4 font-mono text-[11px] sm:text-xs">
                      <div className="mb-3 flex items-center gap-2 border-b border-slate-800 pb-2 text-slate-400">
                        <TerminalSquare className="h-4 w-4" /> index.ts
                      </div>
                      <div className="leading-relaxed text-slate-300">
                        <span className="text-pink-400">import</span>{" "}
                        {`{ Agency }`}{" "}
                        <span className="text-pink-400">from</span>{" "}
                        <span className="text-green-400">
                          '@digitalfueled/core'
                        </span>
                        ;<br />
                        <br />
                        <span className="text-blue-400">const</span> solution ={" "}
                        <span className="text-blue-400">new</span>{" "}
                        <span className="text-amber-300">Agency</span>({`{`})
                        <br />
                        <span className="pl-4">
                          scale: <span className="text-purple-400">true</span>,
                        </span>
                        <br />
                        <span className="pl-4">
                          security:{" "}
                          <span className="text-green-400">'enterprise'</span>,
                        </span>
                        <br />
                        {/* <span className="pl-4">framework: <span className="text-green-400">'next.js'</span></span><br/> */}
                        {`});`}
                        <br />
                        <br />
                        <span className="text-blue-400">await</span> solution.
                        <span className="text-amber-300">deploy</span>();
                      </div>

                      {/* Animated cursor */}
                      <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="absolute bottom-4 left-4 h-4 w-2 bg-blue-500"
                      />
                    </div>

                    {/* Architecture Visualization */}
                    <div className="relative hidden flex-col overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:flex">
                      <div className="mb-4 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                        Architecture Map
                      </div>
                      <div className="relative flex flex-1 items-center justify-center">
                        {/* Nodes */}
                        <div className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
                          <Globe className="h-5 w-5 text-slate-600" />
                        </div>
                        <div className="absolute top-1/4 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">
                          <Server className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="absolute right-4 bottom-1/4 z-10 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50">
                          <Database className="h-5 w-5 text-indigo-600" />
                        </div>

                        {/* Connecting Lines */}
                        <svg
                          className="pointer-events-none absolute inset-0 h-full w-full"
                          style={{ zIndex: 0 }}
                        >
                          <path
                            d="M 50 100 Q 150 100 250 50"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <path
                            d="M 50 100 Q 150 100 250 150"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />

                          {/* Animated pulses */}
                          <motion.circle
                            cx="0"
                            cy="0"
                            r="3"
                            fill="#3b82f6"
                            animate={{ offsetDistance: ["0%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            style={{
                              offsetPath: 'path("M 50 100 Q 150 100 250 50")',
                            }}
                          />
                          <motion.circle
                            cx="0"
                            cy="0"
                            r="3"
                            fill="#6366f1"
                            animate={{ offsetDistance: ["0%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: 1,
                            }}
                            style={{
                              offsetPath: 'path("M 50 100 Q 150 100 250 150")',
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section className="pt-16 pb-14 lg:pt-24 lg:pb-16 bg-gray-100">
        <div className="container">
          <div className="mb-8 md:mb-12 flex flex-col lg:flex-row items-start gap-4 lg:gap-8 justify-between">
            <div>
              <h2 className="flex-1 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Benefits of Hiring a Best <br className="hidden lg:block" />Software
                Development Agency
              </h2>
            </div>
            <p className="text-black md:text-lg lg:max-w-[40ch]">
              Software development services cover a broad range of activities
              that help businesses build, design, deploy, and maintain software
              solutions. Here are some of the key software development services
              offered by agencies.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 mb-8 lg:mb-0 items-center bg-white rounded-b-2xl lg:rounded-b-none rounded-t-2xl overflow-hidden">
            <div className="font-geist p-4 lg:p-10 lg:pr-12 order-2 lg:order-1">
              <h3 className="mb-4 font-geist text-xl font-semibold tracking-tight text-slate-900 md:text-2xl lg:text-3xl">
                Web Application Development
              </h3>
              <p className="mb-8">
                Digital fueled takes care of the process as well as the practice
                of developing web applications. Web applications possess a large
                amount of information that may have mistakes, so the testing
                process for web applications is usually more in-depth than other
                forms of software. Web application development tests incorporate
                security, performance, load, stress, accessibility, usability,
                and quality assurance tests.
              </p>
              <AnimatedButton href="/website-design-and-development">Explore</AnimatedButton>
            </div>
            <div className="w-full order-1 lg:order-2">
              <img
                src="/images/demo/web-dev-4.avif"
                alt="web development"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 items-center bg-white rounded-t-2xl lg:rounded-t-none rounded-b-2xl overflow-hidden">
            <div className="w-full">
              <img
                src="/images/demo/web-dev-5.avif"
                alt="web development"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
            <div className="font-geist p-4 lg:p-10 lg:pl-12">
              <h3 className="mb-4 font-geist text-xl font-semibold tracking-tight text-slate-900 md:text-2xl lg:text-3xl">
                Web Platform/ Software Development
              </h3>
              <p className="mb-8">
                It is a difficult task to select the right platform for a web
                development project as a wide range of frameworks are available
                in the market with varied framework structure. Some of the
                options are Angular JS, Asp.net, Node.js.
              </p>
              <AnimatedButton href="/website-design-and-development">Explore</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="container">
          <div className="mb-8 md:mb-12 flex flex-col gap-4 lg:gap-6">
            <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              Our Services
            </h2>
            <p className="md:text-lg">
              By offering a combination of these services, software development
              company in Delhi help businesses of all sizes solve complex
              problems, enhance their operational efficiency, and meet their
              specific goals.
            </p>
          </div>
          <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => (
              <BentoCard
                key={index}
                className={`${service.colSpan} ${service.bgClass} group flex flex-col justify-between`}
              >
                <div className="font-geist">
                  <div className="mb-6 flex size-16 items-center justify-center">
                    <Image
                      src={service.icon}
                      className="h-full w-full object-contain"
                      alt="icons"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h4
                    className={`mb-3 text-xl font-semibold ${service.textClass}`}
                  >
                    {service.title}
                  </h4>
                  <p className={`mb-0 ${service.descClass}`}>
                    {service.description}
                  </p>
                </div>

                {service.features && (
                  <div className="border-t border-slate-200/20 pt-6">
                    <p
                      className={`flex gap-3 text-sm font-medium ${service.textClass === "text-white" ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {service.featureIcon}
                      {service.features}
                    </p>
                  </div>
                )}
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/demo/coding-bg-3.png')] bg-cover bg-center bg-no-repeat py-14 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-0">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-4 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              Expertise in Diverse Technologies
            </h2>
            <p className="mx-auto font-geist md:text-lg text-white">
              Software development services cover a broad range of activities
              that help businesses build, design, deploy, and maintain software
              solutions. Here are some of the key software development services
              offered by agencies.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:gap-12">
            {/* Vertical Tabs */}
            <div className="flex w-full shrink-0 lg:justify-center gap-4 overflow-x-auto px-1 py-1 pb-4 lg:pb-0">
              {stack.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`custom-border-white-2 backdrop-blur-2xl flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all lg:whitespace-normal ${activeTab === idx
                    ? "bg-white text-orange-500 shadow-sm"
                    : "text-white hover:bg-white hover:text-slate-900"
                    }`}
                >
                  {item.icon}
                  {item.category}
                </button>
              ))}
            </div>

            {/* Tab Content Panel */}
            <div className="min-h-75 flex-1 rounded-xl ring ring-slate-200 bg-white p-4 lg:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-full flex-col items-center"
                >
                  <h4 className="mb-2 font-geist text-2xl font-semibold tracking-tight text-center text-slate-900">
                    {stack[activeTab].category} Technologies
                  </h4>
                  <p className="mb-8 max-w-lg text-center">{stack[activeTab].desc}</p>

                  <div className="grid w-full grid-cols-2 gap-3 md:gap-5 lg:gap-8 sm:grid-cols-4">
                    {stack[activeTab].techs.map((tech, i) => (
                      <div
                        key={i}
                        className="group flex cursor-default flex-col items-center justify-center rounded-xl bg-slate-50/50 p-6 text-center ring ring-border transition-all hover:bg-white hover:shadow-sm hover:ring-orange-500"
                      >
                        <span className="mb-3 block size-14">
                          <img
                            src={tech.logo}
                            alt="icons"
                            width={100}
                            height={100}
                            className="size-full object-contain"
                          />
                        </span>
                        <span className="font-geist font-medium text-black">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-8 gap-6">
            <div className="lg:col-span-3">
              <div className="relative lg:sticky lg:top-32">
                <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                  The support <br className="hidden lg:block" />
                  we provide
                </h2>
                <p className="mb-6 md:mb-8 lg:pr-8 font-geist lg:text-lg">
                  Are you curious about how much our software development
                  services would cost? To obtain a precise price for your
                  project, get in contact.
                </p>
                <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
              </div>
            </div>
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="grid w-full sm:grid-cols-2 gap-4 lg:gap-6">
                {supports.map((support, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-between rounded-lg p-5 font-geist ring ring-border transition-all duration-300 hover:shadow-lg hover:ring-blue-200"
                  >
                    <div>
                      <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-orange-50">
                        <support.icon size={22} className="text-orange-500" />
                      </span>
                      <h3 className="mb-3 text-xl font-semibold text-slate-900">
                        {support.title}
                      </h3>
                      <p>{support.description}</p>
                    </div>
                    {support.features && (
                      <p className="mt-6 flex gap-2 text-sm font-medium text-slate-700">
                        <CheckCircle
                          size={14}
                          className="mt-1 shrink-0 text-orange-500"
                        />
                        {support.features}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItsWork />
      <ContactForm />
    </>
  )
}

const BentoCard = ({ children, className = "", noPadding = false }: any) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl md:rounded-2xl ring ring-gray-200 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] transition-all duration-300 hover:ring-blue-400 hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.1)] ${noPadding ? "" : "p-4 lg:p-8"} ${className}`}
    >
      {children}
    </div>
  )
}
