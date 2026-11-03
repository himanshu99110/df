"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react" // Added for the pointers

const clients = [
  // ... (Your clients array remains the same)
  {
    id: 1,
    src: "/images/client/prakash.svg",
    alt: "Prakash Hospital",
  },
  { id: 31, src: "/images/client/Shivohum.png", alt: "Shivohum" },
  { id: 2, src: "/images/client/canon.jpg", alt: "Canon" },
  { id: 3, src: "/images/client/WWF.jpg", alt: "WWF" },
  { id: 4, src: "/images/client/Agarwal-packers.jpg", alt: "Agarwal Packers" },
  { id: 5, src: "/images/client/caho.jpg", alt: "CAHO" },
  { id: 6, src: "/images/client/ahpi.jpg", alt: "AHPI" },
  { id: 7, src: "/images/client/supervity.webp", alt: "Fashion TV" },
  { id: 8, src: "/images/client/Gaur-City-mall.jpg", alt: "Gaur Mall" },
  { id: 9, src: "/images/client/havells-logo.png", alt: "Havells" },
  { id: 10, src: "/images/client/PIndBaluchi.png", alt: "Pind Baluchi" },
  { id: 11, src: "/images/client/magik-logo.png", alt: "Magik" },
  { id: 12, src: "/images/client/paraslogo.png", alt: "Paras" },
  { id: 13, src: "/images/client/century-led.png", alt: "Century" },
  { id: 14, src: "/images/client/fabpiks.jpg", alt: "FabPiks" },
  { id: 15, src: "/images/client/venturaindia.jpg", alt: "Ventura" },
  { id: 16, src: "/images/client/mygleeo.jpg", alt: "Gleeo Health" },
  { id: 17, src: "/images/client/adtu.jpg", alt: "ADTU" },
  { id: 18, src: "/images/client/fhrai.png", alt: "FHRAI" },
  { id: 19, src: "/images/client/harmonia.png", alt: "Blue Bells" },
  { id: 20, src: "/images/client/dost.jpg", alt: "Dost" },
  {
    id: 21,
    src: "/images/client/scientificpathology-logo-hp.png",
    alt: "Scientific Pathology",
  },
  { id: 22, src: "/images/client/finedge-logo.png", alt: "Finedge" },
  { id: 23, src: "/images/client/indorama.svg", alt: "Indorama" },
  { id: 24, src: "/images/client/rg.jpg", alt: "Rate Gain" },
  { id: 25, src: "/images/client/BalajiTyping.jpg", alt: "BalajiTyping" },
  { id: 26, src: "/images/client/blue-bell.png", alt: "Blue Bells" },
  { id: 27, src: "/images/client/p4psi.jpg", alt: "p4psi" },
  { id: 28, src: "/images/client/prakash.svg", alt: "Prakash" },
  { id: 29, src: "/images/client/AGRI-PRO.jpg", alt: "AGRI-PRO" },
  // { id: 30, src: "/images/client/century-led.png", alt: "century-led" },
]

const pointers = [
  "Since 2019, delivering powerful digital solutions for startups, SMEs, and enterprises",
  "Custom Web, Mobile App, SaaS & AI Automation Development",
  "SEO-Friendly, Fast & Scalable Technology Solutions",
  "Result-Driven Digital Marketing & Lead Generation Strategies",
  "Trusted Partner for Business Growth, Automation & Digital Transformation",
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
}

const logoItemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 } as const,
  },
}

export default function AboutSection() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-200">
      <section className="py-16 md:pt-32" id="about">
        <div className="container">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
            {/* LEFT COLUMN: Combined Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-[55%]"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#080C5E] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#143DA7]"></span>
                </span>
                <span className="font-gra text-xs font-medium text-gray-700">
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mb-6 md:mb-10 font-geist text-[28px] leading-[1.2] font-semibold tracking-tighter text-[#111] md:text-[40px] lg:text-[48px]"
              >
                Custom Software Development Company for{" "}
                <span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">
                  Web, Mobile, SaaS & AI Automation.
                </span>
              </motion.h1>

              <div className="space-y-6">
                <motion.p
                  variants={fadeUp}
                >
                  Digital Fueled IT Pvt Ltd delivers scalable, future-ready
                  software solutions designed to accelerate business growth and
                  digital transformation. Since 2019, we have been helping
                  startups, brands, and enterprises build powerful web
                  applications, high-performance mobile apps, SaaS platforms,
                  and AI-driven automation systems.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                >
                  From custom software development and cloud-based platforms to
                  intelligent business automation and enterprise solutions — we
                  create secure, scalable, and user-focused digital products
                  that improve efficiency, enhance customer experience, and
                  drive long-term success.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-6 md:mt-10 flex flex-wrap items-center gap-4"
              >
                <AnimatedButton href="/contact">Book a call</AnimatedButton>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Pointers List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-[45%] lg:pt-24"
            >
              <div className="space-y-3 md:space-y-6">
                {pointers.map((text, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="size-5 md:size-6 text-[#143DA7]" />
                    </div>
                    <p className="md:text-lg leading-snug font-medium text-gray-800">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section
        className="bg-gray-100 py-16 lg:py-24"
        id="clients"
      >
        <div className="container">
          <div className="mb-8 md:mb-12 text-center">
            {/* <h2 className="font-mono text-3xl tracking-tight text-gray-900 sm:text-4xl">
              
            </h2> */}
            <h2 className="font-geist text-[28px] leading-[1.2] font-semibold text-[#111] tracking-tighter md:text-[40px] lg:text-[48px] capitalize">
              Trusted by the Best of{" "}
              <span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">
                Brands
              </span>
            </h2>
            <p className="mt-4 max-w-prose md:text-lg text-black mx-auto">
              We've helped leading brands transform their digital presence and
              achieve their business goals.
            </p>
          </div>

          <motion.div
            variants={logoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 md:grid-cols-4 lg:grid-cols-5"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={logoItemVariants}
                className="group flex h-28 md:h-32 items-center justify-center bg-white p-4 md:p-6 transition-colors hover:bg-gray-50"
              >
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
