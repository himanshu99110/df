"use client"

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform
} from "framer-motion"
import {
  ArrowUpRight,
  Sparkle
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

const team = [
  {
    name: "Arjun Kumar Singh",
    role: "IT Head",
    image: "/images/team/Arjun-1.png",
  },
  {
    name: "Palak Sharma",
    role: "Digital Marketing Head",
    image: "/images/team/dummy-3.png",
  },
  {
    name: "Kannu Dandia",
    role: "Creative Head",
    image: "/images/team/Kannu.png",
  },
  {
    name: "Saloni Sharma",
    role: "Creative Content & Strategy Head",
    image: "/images/team/sonali.png",
  },
  {
    name: "Amit Kumar",
    role: "Developer",
    image: "/images/team/Amit.png",
  },
  {
    name: "Govind Singh",
    role: "Mobile App Development Head",
    image: "/images/team/govind.png",
  },
  {
    name: "Umesh Nainwal",
    role: "Creative Animator",
    image: "/images/team/Umsh.png",
  },
  {
    name: "Ramlakhan Varma",
    role: "Creative Designer",
    image: "/images/team/Ramlakhan-verma-1.png",
  },
  {
    name: "Anugrah",
    role: "Mobile App Development Head",
    image: "/images/team/Anugrah.png",
  },
  {
    name: "Chandan Kumar Singh",
    role: "Developer",
    image: "/images/team/dummy-3.png",
  },
  {
    name: "Rajeev Singh",
    role: "SEO Manager",
    image: "/images/team/dummy-3.png",
  },
  {
    name: "Pradeep Singh",
    role: "Developer",
    image: "/images/team/dummy-3.png",
  },
  {
    name: "Vishal",
    role: "HTML Developer",
    image: "/images/team/dummy-3.png",
  },
  {
    name: "Himanshu",
    role: "Front End Developer",
    image: "/images/team/dummy-3.png",
  },
  {
    name: "Arman Ali",
    role: "Business Development Manager",
    image: "/images/team/dummy-3.png",
  },
];

const AnimatedCounter = ({ from, to, suffix = "", duration = 2.5 }: any) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [count, to, duration, isInView])

  return <motion.span ref={ref}>{rounded}</motion.span>
}


export default function AboutUs() {

  const boxData = [
    {
      title: "Our Mission",
      content:
        "To be the global branding company most admired for creativity and effectiveness.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Our Purpose",
      content:
        "To be the global branding company most admired for creativity and effectiveness.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
  ]
  const logoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  }
  const logoItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 } as const,
    },
  }

  return (
    <>
      <div className="bg-[url('/images/bg4.avif')] bg-cover bg-no-repeat py-12">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-10"
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
            <div className="flex h-full flex-col items-center justify-center gap-4 md:gap-6 text-center">
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
                Design. Develop. Grow.
              </motion.span>

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
                About{" "}
                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                  Us
                </span>
              </motion.h1>

              <motion.p
                className="max-w-5xl md:text-lg font-medium text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                We're a culturally driven, rapidly growing creative digital
                marketing agency providing our services in order to help
                businesses grow.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-14 lg:py-24 scroll-mt-10" id="overview">
        <div className="container">
          <div className="grid lg:grid-cols-[2fr_1.5fr] gap-16">
            <div className="mt-6 order-2 lg:order-1">
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                A creative digital studio.
              </h2>
              <p className="mb-4 font-geist">
                Our philosophy ‘brand builders and storytellers’ infuses
                everything we do. We’re a creative group of designers,
                developers, tech enthusiasts, and brand consultants who ensure
                that all our work is based on sound strategic branding
                principles and are passionate about creating new brands,
                changing the mindsets of the audience, and innovating new brand
                solutions to create the right brand mix.
              </p>
              <p className="mb-8 font-geist">
                We focus on developing impactful strategies tailor-made for each
                of our clients, keeping what is essential while letting go of
                the additional. We are a brand communication agency and have a
                holistic view of the brand of our clients.
              </p>
              {/* <AnimatedButton href="/assets/pdf/digital-fueled-Profile.pdf">View Corporate Presentation</AnimatedButton> */}
              <a
                target="_blank"
                href="/assets/pdf/digital-fueled-Profile.pdf"
                className="group relative flex w-max items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm leading-tight font-semibold transition-all duration-300 bg-accent text-white"
              >
                <div
                  className="absolute top-1/2 left-1/2 h-[calc(100%+4rem)] w-[calc(100%+4rem)] -translate-x-1/2 translate-y-full rounded-[100%] transition-transform duration-500 ease-out group-hover:-translate-y-1/2 bg-[#1b1b1b]"
                />

                <div className="relative z-10 flex-none transition-colors duration-300">
                  View Corporate Presentation
                </div>

                <div className="relative z-10 flex h-3 w-3 flex-none items-center justify-center overflow-hidden">
                  <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full">
                    <Image
                      loading="lazy"
                      alt="Arrow icon"
                      width={50}
                      height={50}
                      src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6906fcf823dbdb59419f53c7_Up%20white.svg"
                      className="h-3 w-3 shrink-0"
                    />
                    <Image
                      loading="lazy"
                      alt="Arrow icon"
                      width={50}
                      height={50}
                      src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6906fcf823dbdb59419f53c7_Up%20white.svg"
                      className="absolute top-full -left-full h-3 w-3 shrink-0"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] order-1 lg:order-2">
              {/* Large Image */}
              <div className="absolute h-full top-0 right-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/video-marketing.png"
                  alt="coding image"
                  width={600}
                  height={800}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 right-2 sm:-bottom-12 sm:right-6 md:-bottom-16 md:right-8 z-20">
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
                      Best Video Marketing • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-4xl text-orange-500">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute left-0 -bottom-6 sm:-bottom-8 md:-bottom-10 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-gray-200">
                <Image
                  src="/images/demo/video-marketing-2.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden bg-white py-10 lg:py-24">
        {/* Container for content and background lines */}
        <div className="relative container">
          {/* Main Content relative to sit above background lines */}
          <div className="relative z-10">
            {/* Top Section: Header and Text */}
            <div className="mb-8 md:mb-16 flex flex-col gap-4 lg:mb-20 lg:flex-row lg:gap-24">
              {/* Left Column: Title */}
              <div className="flex flex-col pt-1 lg:w-[50%]">
                <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                  We have more than 12 years of experience in this service.
                </h2>
              </div>

              {/* Right Column: Paragraphs */}
              <div className="lg:w-[50%]">
                <p>
                  To spur innovation, our committed team at Digital Fueled
                  blends a variety of specialties. From skilled web developers
                  to imaginative digital marketers, we come together with a
                  common dedication to quality. We take great satisfaction in
                  turning ideas into reality via collaboration, passion, and
                  client-centered approach, guaranteeing unmatched achievement
                  in the digital sphere.
                </p>
              </div>
            </div>

            {/* Bottom Section: Image Masonry Grid */}
            {/* <div className="flex flex-col items-start gap-6 md:flex-row lg:gap-8">
              <div className="w-full pt-0 md:w-[28%] md:pt-[25%] lg:pt-[10%]">
                <img
                  src="/images/demo/coding-4.avif"
                  alt="Woman relaxing on couch with laptop"
                  className="aspect-[3/4] h-auto w-full object-cover"
                />
              </div>

              <div className="w-full md:w-[42%]">
                <img
                  src="/images/demo/coding.jpg"
                  alt="Creative team collaborating in office"
                  className="h-160 w-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col gap-6 pt-0 md:w-[30%] md:pt-[5%] lg:gap-8">
                <img
                  src="/images/demo/web.avif"
                  alt="Team working at whiteboard"
                  className="aspect-[16/9] h-auto w-full object-cover"
                />
                <img
                  src="/images/demo/coding-3.avif"
                  alt="Woman working attentively at desktop computer"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </div>
            </div> */}
            <ImageGallery />

            {/* Stats & Icon Section */}
            <div className="mt-24 flex flex-col items-center pb-8 lg:mt-32">
              {/* Purple Icon positioned perfectly on the center line */}

              {/* Stats Grid */}
              <div className="grid w-full grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {/* Stat 1 */}
                <div className="z-10 flex flex-col items-center bg-white py-2 text-center">
                  <h3 className="mb-4 font-geist text-5xl font-normal tracking-tight text-black lg:text-[76px]">
                    <AnimatedCounter from={0} to={5} suffix="+" />
                  </h3>
                  <p className="leading-snug font-semibold text-gray-900">
                    Years
                    <br />
                    Of Experience
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="z-10 flex flex-col items-center bg-white py-2 text-center">
                  <h3 className="mb-4 font-geist text-5xl font-normal tracking-tight text-black lg:text-[76px]">
                    <AnimatedCounter
                      from={0}
                      to={250}
                      suffix="+"
                      duration={2}
                    />
                  </h3>
                  <p className="leading-snug font-semibold text-gray-900">
                    Project
                    <br />
                    Delivered
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="z-10 flex flex-col items-center bg-white py-2 text-center">
                  <h3 className="mb-4 font-geist text-5xl font-normal tracking-tight text-black lg:text-[76px]">
                    <AnimatedCounter
                      from={0}
                      to={500}
                      suffix="+"
                      duration={2.2}
                    />
                  </h3>
                  <p className="leading-snug font-semibold text-gray-900">
                    Satisfied Clients On
                    <br />
                    24 Countries
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="z-10 flex flex-col items-center bg-white py-2 text-center">
                  <h3 className="mb-4 font-geist text-5xl font-normal tracking-tight text-black lg:text-[76px]">
                    <AnimatedCounter
                      from={0}
                      to={100}
                      suffix="%"
                      duration={2.8}
                    />
                  </h3>
                  <p className="leading-snug font-semibold text-gray-900">
                    Success
                    <br />
                    Ratio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EDITORIAL SECTION: A Creative Digital Studio */}
      {/* <section className="border-t border-gray-100 bg-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:sticky lg:top-32 lg:col-span-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-orange-500" />
                <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-geist text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                A creative <br />
                <span className="text-gray-400">digital studio.</span>
              </h2>

              <motion.button className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 font-semibold text-gray-900 ring-1 ring-accent transition-colors hover:bg-accent hover:text-white">
                <FileText size={18} />
                <span className="relative z-10">
                  View Corporate Presentation
                </span>
              </motion.button>
            </div>

            <div className="flex flex-col gap-4 font-geist text-lg leading-relaxed text-black md:text-xl lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our philosophy{" "}
                <span className="font-bold text-gray-900">
                  ‘brand builders and storytellers’
                </span>{" "}
                infuses everything we do.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                We’re a creative group of designers, developers, tech
                enthusiasts, and brand consultants who ensure that all our work
                is based on sound strategic branding principles. We are
                passionate about creating new brands, changing the mindsets of
                the audience, and innovating new brand solutions to create the
                right brand mix.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="my-4 border-orange-500 py-2 pl-6"
                style={{ borderLeftWidth: "2px" }}
              >
                <p className="font-semibold text-gray-900 italic">
                  &quot;We focus on developing impactful strategies tailor-made
                  for each of our clients, keeping what is essential while
                  letting go of the additional.&quot;
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                To spur innovation, our committed team at Digital Fueled blends
                a variety of specialties. From skilled web developers to
                imaginative digital marketers, we come together with a common
                dedication to quality. We take great satisfaction in turning
                ideas into reality via collaboration, passion, and a
                client-centered approach.
              </motion.p>
            </div>
          </div>
        </div>
      </section> */}

      {/* BY THE NUMBERS: High-Impact Dark Stats Grid */}
      {/* <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#86ef47 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 container px-6">
          <div className="mb-16 text-center">
            <h2 className="font-geist text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Unmatched <br className="hidden md:block" />
              Achievements.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl ring ring-border md:grid-cols-3">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center bg-white p-10 text-center transition-colors"
              >
                <div className="mb-2 font-geist text-5xl font-semibold text-gray-900 md:text-6xl lg:text-5xl">
                  {stat.num}
                </div>
                <div className="font-geist text-xs font-medium text-accent uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* MISSION, PURPOSE & CULTURE: Bento Box Layout */}
      {/* <section className="border-t border-gray-100 bg-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 gap-6 lg:h-[500px] lg:grid-cols-12 lg:grid-rows-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-[#fafafa] p-10 transition-colors hover:border-orange-500 md:col-span-8 md:row-span-1"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-orange-500">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-geist text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="font-geist text-2xl leading-snug text-gray-600 md:text-3xl">
                To be the global branding company most{" "}
                <span className="font-bold text-black">
                  admired for creativity
                </span>{" "}
                and effectiveness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-orange-500 p-10 md:col-span-4 md:row-span-2"
            >
              <div className="absolute -top-10 -right-10 opacity-20">
                <Globe2 className="h-64 w-64 text-black" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h3 className="mb-2 font-geist text-5xl font-black text-black">
                    15,000+
                  </h3>
                  <p className="font-mono text-sm font-bold tracking-widest text-black/70 uppercase">
                    Companies & Partners
                  </p>
                </div>
                <p className="font-geist text-2xl leading-tight font-bold text-black">
                  Trusted and chosen by top brands worldwide. Discover our
                  culture.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0a0a0a] p-10 md:col-span-8 md:row-span-1"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-geist text-2xl font-bold text-white">
                  Our Purpose
                </h3>
              </div>
              <p className="font-geist text-xl leading-relaxed text-gray-400">
                We touch and transform lives by expressing their purpose using
                digital platforms, building solutions that resonate on a global
                scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section id="vision" className="bg-[#0a0a0a] py-10 lg:py-24 scroll-mt-10">
        <div className="container">
          <div className="relative z-10 flex gap-8 flex-col lg:gap-16 lg:flex-row">
            {/* Left: Grayscale Image */}
            <div className="lg:w-[45%]">
              <img
                src="/images/team/team.png"
                alt="Team collaborating"
                className="h-[400px] h-full w-full rounded-3xl object-cover grayscale"
              />
            </div>

            {/* Right: Content & Accordion */}
            <div className="relative flex flex-col pt-4 lg:w-[55%]">
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
                Who We Are?
              </h2>
              <p className="mb-8 text-white">
                Based in the National Capital Territory Of Delhi, we are a group
                of strategy, brand, and experience design experts on a mission
                to transform the way brands express themselves. We believe that
                a good design is good communication as well as good business. We
                come together with our unmatched passion for shaping brands to
                touch and transform lives by expressing their purpose using
                digital platforms.
              </p>

              {/* Accordion Wrapper */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-4 lg:gap-8">
                {boxData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white p-6 transition-colors duration-300 hover:border-blue-500/50 md:p-6"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-500">
                        {item.icon}
                      </div>
                      <h3 className="font-geist text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <h2 className="font-geist text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Discovery our culture
              </h2>
            </div>
            <p className="max-w-sm text-white">
              More 15,000 Companies & partners trusted & choice SEOMY.
            </p>
          </div>

          <ImageMarquee />
        </div> */}
      </section>

      {/* NEW UPGRADED TEAM SECTION: Premium Agency Style */}
      <section id="team" className="py-10 lg:py-24 scroll-mt-10">
        <div className="container">
          <div className="mb-8 md:mb-16 md:flex md:items-start md:justify-between">
            <div>
              <h2 className="mb-4 md:mb-0 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Meet our team <br />of experts.
              </h2>
            </div>
            <p className="max-w-sm font-geist nd:text-lg text-black md:mt-0 md:text-right">
              We&apos;re a 100% remote team spread all across the world, brought
              together by passion.
            </p>
          </div>
          <div className="mx-auto mb-10 md:mb-20 grid max-w-4xl lg:grid-cols-2 gap-10">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group rounded-xl p-3 ring ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-orange-300"
            >
              <div className="h-60 lg:h-96 overflow-hidden rounded-lg">
                <Image
                  src="/images/s.png"
                  alt="Santosh Singh"
                  width={400}
                  height={400}
                  className="w-full transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h1 className="font-geist mb-2 mt-4 text-2xl font-semibold">
                Santosh Singh
              </h1>
              <p className="font-medium text-orange-500">Managing Director</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="group rounded-xl p-3 ring ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-orange-300"
            >
              <div className="h-60 lg:h-96 overflow-hidden rounded-lg">
                <Image
                  src="/images/m.png"
                  alt="Mohan Sharma"
                  width={400}
                  height={400}
                  className="w-full transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h1 className="font-geist mb-2 mt-4 text-2xl font-semibold">
                Mohan Sharma
              </h1>
              <p className="font-medium text-orange-500">Chief Marketing Officer</p>
            </motion.div>
          </div>
          <motion.div
            variants={logoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={logoItemVariants}
                className="p-2 md:p-3 ring ring-gray-200 rounded-xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-orange-300">
                <div className="rounded-lg aspect-square overflow-hidden bg-gray-200">
                  <Image src={member.image} alt={member.name} width={200} height={200} className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-all duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold font-geist mt-4 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium text-sm md:text-base">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
          {/* <TeamSection /> */}
        </div>
      </section >

      {/* <HowItsWork /> */}
    </>
  )
}


const ZoomInImage = ({ src, alt, className, delay = 0 }: any) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      // 1. Initial state before scrolling into view (scaled down and slightly transparent)
      initial={{ scale: 0.8, opacity: 0 }}
      // 2. Target state when scrolled into view (normal size and fully visible)
      whileInView={{ scale: 1, opacity: 1 }}
      // 3. Viewport settings: triggers once when 20% of the image enters the screen
      viewport={{ once: true, amount: 0.2 }}
      // 4. Smooth spring or tween transition
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Clean cubic-bezier easing
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};

export function ImageGallery() {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row lg:gap-8">
      {/* Column 1: Left Image (Pushed down) */}
      <div className="w-full pt-0 md:w-[28%] md:pt-[25%] lg:pt-[10%]">
        <ZoomInImage
          src="/images/demo/coding-4.avif"
          alt="Woman relaxing on couch with laptop"
          className="aspect-[3/4] h-auto w-full"
        />
      </div>

      {/* Column 2: Center Image (Tallest, starts at top) */}
      <div className="hidden md:block w-full md:w-[42%]">
        <ZoomInImage
          src="/images/demo/coding.jpg"
          alt="Creative team collaborating in office"
          className="h-160 w-full"
          delay={0.15} // Slight stagger delay if entering together
        />
      </div>

      {/* Column 3: Right Images (Two images, slightly pushed down) */}
      <div className="hidden md:flex w-full flex-col gap-6 pt-0 md:w-[30%] md:pt-[5%] lg:gap-8">
        <ZoomInImage
          src="/images/demo/web.avif"
          alt="Team working at whiteboard"
          className="aspect-[16/9] h-auto w-full"
          delay={0.2}
        />
        <ZoomInImage
          src="/images/demo/coding-3.avif"
          alt="Woman working attentively at desktop computer"
          className="aspect-[4/3] h-auto w-full"
        />
      </div>
    </div>
  );
}