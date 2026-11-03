"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

// --- UI COMPONENTS ---
// Assuming you have these shadcn/ui components installed. 
// If not, replace them with your standard HTML tags.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// ==========================================
// 1. DATA CONSTANTS
// ==========================================

const industries = [
  { id: 1, title: "Finance & Fintech", image: "/images/demo/img-1 (1).avif" },
  { id: 2, title: "E-commerce & Retail", image: "/images/demo/img-1 (2).avif" },
  { id: 3, title: "Government & Public Services", image: "/images/demo/img-1 (3).avif" },
  { id: 4, title: "Healthcare & Telemedicine", image: "/images/demo/img-1 (4).avif" },
  { id: 5, title: "Education & E-Learning", image: "/images/demo/img-1 (1).avif" },
  { id: 6, title: "B2B (Business-to-business)", image: "/images/demo/img-1 (2).avif" },
]

const processes = [
  {
    num: "01",
    title: "Discovery & Research",
    desc: "In this phase, we dive deep into understanding your business goals, target audience, and market needs",
    bullets: ["User research", "Market analysis", "Competitor benchmarking", "Stakeholder interviews"],
  },
  {
    num: "02",
    title: "User research & Personal development",
    desc: "We gather insights through interviews, surveys, and data analysis to create user personas that guide the design process.",
    bullets: ["User interviews & surveys", "Behavioral analysis", "User journey mapping", "Persona creation"],
  },
  {
    num: "03",
    title: "Wireframing & Prototyping",
    desc: "Here, we begin bringing your product to life with low-fidelity wireframes and interactive prototypes.",
    bullets: ["Low-fidelity wireframes", "Interactive prototypes", "Usability testing", "Feedback loop integration"],
  },
  {
    num: "04",
    title: "Visual Design & Branding",
    desc: "Next, we refine your product's visual design, aligning it with your brand's identity and creating high-fidelity designs.",
    bullets: ["Design system creation", "Typography & color selection", "Iconography & visual elements", "Brand consistency"],
  },
  {
    num: "05",
    title: "Usability testing & Iteration",
    desc: "Before the final launch, we rigorously test the design with real users to identify any friction points",
    bullets: ["Usability testing", "Friction point detection", "User feedback integration", "Conversion flow optimization"],
  },
]

const projects = [
  {
    id: 1,
    title: "Spacebook - Business Accounting dashboard design",
    tags: "Web Design • Visual Identity • SaaS Dashboard",
    image: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1054/6927da7304e57bc90fc085ae_spacebook-accounting-dashboard-by-wavespace%20(1).avif",
  },
  {
    id: 2,
    title: "Kodezi - AI-powered code generator",
    tags: "SaaS Web Design • Branding • Design System",
    image: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1054/69a5a1e666a353de5b29571c_ai-powered-coding-assistant-web-design.avif",
  },
  {
    id: 3,
    title: "Quicky - Mobile finance app design",
    tags: "User Research • UI UX Design • Workflow",
    image: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1054/69a7b4941ddaf17aefaed27c_fintech-app-ui-ux.avif",
  },
  {
    id: 4,
    title: "Solon - Crypto trading platform UX",
    tags: "UI/UX Design • Branding • Design System",
    image: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1054/69a6a8a1a71619120d1a4bc8_wavespace-web3-design-agency.avif",
  },
]

const testimonials = [
  {
    company: "Kodezi",
    text: (
      <>
        &quot;Wavespace very <strong>reliable</strong> at all times and we have enjoyed working &amp; designs are <strong>truly impressive</strong>&quot;
      </>
    ),
    author: "Israqh Khan",
    role: "CEO",
    avatar: "/avatar-1.jpg",
  },
  {
    company: "tournated",
    text: (
      <>
        &quot;<strong>Highly happy</strong> with a design delivered by Wavespace. <strong>Definitely will keep working</strong> with Wavespace. Great and quality smooth communication.&quot;
      </>
    ),
    author: "Nikita Ribakovs",
    role: "CEO",
    avatar: "/avatar-2.jpg",
  },
  {
    company: "ActiveSync",
    text: (
      <>
        &quot;Wavespace brought my <strong>idea to life</strong>. Taken great care of my business &amp; implement <strong>best user experience</strong> possible&quot;
      </>
    ),
    author: "Abraham Ajayi",
    role: "CEO",
    avatar: "/avatar-3.jpg",
  },
  {
    company: "Luxara",
    text: (
      <>
        &quot;Very professional, <strong>top notch communication</strong> &amp; absolute pleasure to work. Super satisfied with results. <strong>Highly recommended</strong>!&quot;
      </>
    ),
    author: "Danny P",
    role: "Director of Sales",
    avatar: "/avatar-4.jpg",
  },
]

const faqs = [
  {
    value: "item-1",
    question: "What are your focus areas as a UI/UX design agency?",
    answer: "Back in 2019, DigitalFueled started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",
  },
  {
    value: "item-2",
    question: "Why is UI/UX design important for your business growth?",
    answer: "Good UI/UX design improves user satisfaction, builds brand trust, and increases conversion rates. By making your product intuitive and enjoyable to use, you reduce churn and turn casual visitors into loyal customers.",
  },
  {
    value: "item-3",
    question: "My website isn't generating enough leads. How can your design help?",
    answer: "We analyze your user journey to identify friction points and drop-offs. By optimizing the layout, improving calls-to-action, and enhancing trust signals through better design, we clear the path to conversion.",
  },
  {
    value: "item-4",
    question: "What separates DigitalFueled from other top UI/UX design agencies?",
    answer: "We combine deep strategic thinking with high-end visual execution. We don't just design pretty screens; we build scalable design systems focused entirely on your specific business metrics and user needs.",
  },
]

const contactServicesList = [
  "UI/UX Design",
  "SaaS Design",
  "Branding",
  "CRO",
  "Mobile app",
  "Development",
  "MVP Development",
  "Web Design",
]

const getInitials = (name: string) => {
  if (!name) return ""
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}


// ==========================================
// 2. SECTIONS (Local Components)
// ==========================================

function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-[#04051b] py-24 lg:py-32">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="text-sm font-semibold text-white">Clutch</span>
              <div className="flex gap-0.5 text-[#ff4b4b]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-white">5.0</span>
            </div>

            <h1 className="mb-6 font-mono text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[64px]">
              UI/UX design services
            </h1>
            
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300">
              Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.
            </p>

            <p className="mb-10 font-serif text-lg italic text-gray-400">
              Every $1 invested in UX can return up to $100 in value
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#d5f04b] px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">
                Book a free call
              </button>
              <button className="rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
                View our works
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-[600px] h-[500px]"
          >
            <div className="absolute right-0 top-10 w-[85%] z-10 shadow-2xl">
               <img 
                 src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1054/69a5a1e666a353de5b29571c_ai-powered-coding-assistant-web-design.avif" 
                 alt="Desktop UI" 
                 className="w-full rounded-xl border border-gray-800 object-cover"
               />
            </div>
            <div className="absolute bottom-0 left-0 w-[35%] z-20 shadow-2xl drop-shadow-2xl">
               <img 
                 src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1054/69a7b4941ddaf17aefaed27c_fintech-app-ui-ux.avif" 
                 alt="Mobile UI" 
                 className="w-full rounded-[2rem] border-4 border-black object-cover"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function IndustryExpertise() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-4xl font-semibold tracking-tight text-[#111] md:text-5xl"
          >
            Industry expertise <span className="text-[#888888]">across globally</span>
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#4a3aff] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Make every interaction count <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden bg-gray-100 rounded-lg ${
                index === 1 || index === 4 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <div className="mt-2 h-1 w-12 bg-[#4a3aff] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UxProcess() {
  return (
    <section className="bg-[#f2f2f2] py-24">
      <div className="pl-4 sm:pl-6 lg:pl-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl font-mono text-4xl font-semibold tracking-tight text-[#111] md:text-5xl lg:text-[56px] leading-[1.1]"
        >
          The UX process behind our <span className="text-[#888888]">faster and smarter design</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group flex gap-6 overflow-x-auto pb-8 pr-8 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {processes.map((step, index) => (
            <div 
              key={index} 
              className="min-w-[320px] max-w-[380px] shrink-0 snap-start bg-white p-8 shadow-sm flex flex-col"
            >
              <span className="mb-8 font-mono text-lg text-gray-400">{step.num}</span>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-[#111]">{step.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              <ul className="mt-auto flex flex-col gap-3">
                {step.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#333]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-3xl font-mono text-[40px] leading-[1.1] tracking-tight text-[#111111] md:text-[56px]"
        >
          Turn your ideas into{" "}
          <span className="text-[#888888]">
            impactful <br className="hidden sm:block" /> solutions like them!
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm bg-gray-100">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="mb-1.5 font-mono text-[18px] text-[#111111] sm:text-[20px]">
                  {project.title}
                </h3>
                <p className="text-[14px] font-medium text-gray-500">
                  {project.tags}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    const onInit = () => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    }
    const onSelect = () => setCurrent(api.selectedScrollSnap())

    onInit()
    api.on("reInit", onInit)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onInit)
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="overflow-hidden bg-[#f0f2f5] py-20">
      <div className="w-full pl-4 sm:pl-6 lg:pl-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 max-w-5xl font-mono text-[36px] leading-tight tracking-tight text-[#222222] md:text-[48px]"
        >
          Find your best design into us.{" "}
          <span className="text-[#888888]">We guarantee next success is yours!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full shadow-sm"
        >
          <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="ml-0 flex w-full border-y border-gray-200 font-mono">
              <CarouselItem className="flex basis-full flex-col justify-center border-r border-gray-200 bg-white p-8 pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-[20%]">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <h3 className="text-[80px] leading-none font-medium text-[#a3a3a3]">4.9</h3>
                  <div className="mt-2 flex gap-1 text-[#ef4444]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-2 text-[13px] font-medium text-gray-500">200+ reviews</p>
                </div>
              </CarouselItem>
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="flex basis-full flex-col border-r border-gray-200 bg-white p-8 pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-[20%]">
                  <p className="mb-6 text-[13px] font-medium text-gray-400">{item.company}</p>
                  <p className="t-para mb-8 text-lg leading-relaxed text-gray-600">{item.text}</p>
                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={item.avatar} alt={item.author} className="object-cover" />
                      <AvatarFallback className="bg-gray-200 text-[13px] font-medium text-gray-700">
                        {getInitials(item.author)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-[14px] text-[#111111]">{item.author}</h4>
                      <p className="text-[12px] text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex justify-center gap-2 pr-4 sm:pr-6 lg:pr-8"
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                i === current ? "bg-[#333333]" : "bg-[#d4d4d4] hover:bg-[#a3a3a3]"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 font-mono text-4xl tracking-tight text-[#111111] md:text-[44px] md:leading-tight"
        >
          Frequently asked <br /> questions
        </motion.h2>

        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.value} value={faq.value} className="border-b border-gray-200">
                  <AccordionTrigger className="group flex py-6 text-left hover:no-underline [&>.ic-a]:hidden">
                    <span className="pr-4 font-mono text-xl font-medium text-[#111111]">
                      {faq.question}
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-data-[state=open]:scale-x-[-1] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="pr-10 text-[15px] leading-relaxed text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative w-full shrink-0 lg:w-[380px]"
          >
            <div className="sticky top-24 rounded-sm bg-[#181818] p-8 shadow-xl">
              <div className="mb-6">
                <Avatar className="h-14 w-14 rounded-sm">
                  <AvatarImage src="/avatar.jpg" alt="Mohan CEO" className="object-cover" />
                  <AvatarFallback className="rounded-sm bg-gray-600 text-lg font-medium text-white">
                    MO
                  </AvatarFallback>
                </Avatar>
              </div>
              <p className="mb-8 text-[15px] leading-relaxed font-medium text-white">
                Hi, I&apos;m Mohan, the CEO and Founder of DigitalFueled. Don&apos;t hesitate to reach out to me anytime — I&apos;m here to answer all your questions!
              </p>
              <button className="flex items-center justify-center gap-2 rounded-full bg-[#d5f04b] px-6 py-3.5 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5">
                Ask Questions
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["SaaS Design"])

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  return (
    <section className="w-full bg-[#f6f7f9] py-16 font-mono text-[#111111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div className="flex flex-col pt-4">
            <h2 className="mb-2 font-mono text-[44px] leading-tight tracking-tight sm:text-[56px]">
              Have a Project?
            </h2>
            <p className="mb-10 font-mono text-[44px] leading-tight tracking-tight text-[#a8a8a8] sm:text-[56px]">
              Let&apos;s talk!
            </p>
            <ul className="mb-12 flex flex-col gap-3">
              {[
                "NDA? Absolutely just ask.",
                "We'll respond in 24 hours fast & focused.",
                "Work with senior UX experts, not juniors.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] font-medium text-gray-800">
                  <svg className="h-5 w-5 shrink-0 text-[#333333]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.707 13.707L18.414 9.000l-1.414-1.414-6.293 6.293-3.293-3.293-1.414 1.414 4.707 4.707z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="mb-4 text-[15px] font-medium text-gray-800">Schedule a call:</p>
              <div className="inline-flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 pr-6 shadow-sm">
                <Avatar className="h-14 w-14 rounded-md">
                  <AvatarImage src="/mohan-profile.jpg" alt="Mohan" className="object-cover" />
                  <AvatarFallback className="rounded-md bg-gray-200 text-lg font-medium text-gray-700">MO</AvatarFallback>
                </Avatar>
                <div className="mr-6">
                  <h4 className="text-[17px] font-semibold">Mohan</h4>
                  <p className="text-[14px] text-gray-500">Founder & CEO</p>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4a3aff] text-white transition-transform hover:scale-105">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-200 bg-transparent px-4 py-3.5 text-[15px] placeholder-gray-400 transition-colors outline-none focus:border-[#4a3aff] focus:ring-1 focus:ring-[#4a3aff]" />
                <input type="text" placeholder="Full name" className="w-full rounded-md border border-gray-200 bg-transparent px-4 py-3.5 text-[15px] placeholder-gray-400 transition-colors outline-none focus:border-[#4a3aff] focus:ring-1 focus:ring-[#4a3aff]" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <select defaultValue="" className="w-full appearance-none rounded-md border border-gray-200 bg-transparent px-4 py-3.5 text-[15px] text-gray-500 transition-colors outline-none focus:border-[#4a3aff] focus:ring-1 focus:ring-[#4a3aff]">
                  <option value="" disabled>Project budget</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
                <select defaultValue="" className="w-full appearance-none rounded-md border border-gray-200 bg-transparent px-4 py-3.5 text-[15px] text-gray-500 transition-colors outline-none focus:border-[#4a3aff] focus:ring-1 focus:ring-[#4a3aff]">
                  <option value="" disabled>How did you hear about us?</option>
                  <option value="google">Google</option>
                  <option value="dribbble">Dribbble</option>
                  <option value="referral">Referral</option>
                </select>
              </div>
              <textarea placeholder="Tell us about your product and goals." rows={4} className="w-full resize-y rounded-md border border-gray-200 bg-transparent px-4 py-3.5 text-[15px] placeholder-gray-400 transition-colors outline-none focus:border-[#4a3aff] focus:ring-1 focus:ring-[#4a3aff]" />
              <div className="mt-2">
                <p className="mb-3 text-[15px] font-medium text-gray-800">How can we help you?</p>
                <div className="flex flex-wrap gap-2.5">
                  {contactServicesList.map((service) => {
                    const isActive = selectedServices.includes(service)
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`rounded-md border px-4 py-2 text-[13px] font-medium transition-colors ${
                          isActive ? "border-[#e0deff] bg-[#f2f1ff] text-[#4a3aff]" : "border-gray-200 bg-transparent text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        {service}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center justify-between gap-6 sm:flex-row">
                <button type="submit" className="w-full rounded-full bg-[#4a3aff] px-8 py-3.5 text-[15px] text-white transition-transform hover:-translate-y-0.5 sm:w-auto">
                  Send message
                </button>
                <div className="text-center sm:text-right">
                  <p className="text-[13px] text-gray-500">Prefer email?</p>
                  <a href="mailto:hello@digitalfueled.agency" className="text-[14px] text-[#111111] underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600">
                    hello@digitalfueled.agency
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 3. MAIN PAGE EXPORT
// ==========================================

export default function UiUxServicePage() {
  return (
    <main className="bg-white">
      <ServiceHero />
      <IndustryExpertise />
      <UxProcess />
      <PortfolioSection />
      <TestimonialCarousel />
      <FAQSection />
      <ContactSection />
    </main>
  )
}