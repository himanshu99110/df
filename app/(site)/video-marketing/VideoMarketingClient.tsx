"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import {
  Activity,
  ArrowUpRight,
  Box,
  Film,
  MonitorPlay,
  PenTool,
  Sparkle,
  StarIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../components/contact-from"
import TestimonialTwo from "../components/testimonial-2"

const getInitials = (name: string) => {
  if (!name) return ""
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

export default function VideoMarketing() {

  const marqueeWords = [
    "Explainer",
    "2D",
    "3D",
    "Whiteboard",
    "Motion",
    "Cinematic",
    "Brand Films",
    "Product",
    "Ads",
  ]

  const services = [
    {
      icon: MonitorPlay,
      title: "Explainer Videos",
      body: "Explainer videos are short videos that help to demonstrate complex ideas using simple, engaging, and meaningful ways in under 2 minutes. Using an explainer video helps businesses generate leads, reduce bounce rates, foster brand awareness, and increase conversions.",
      tag: "01",
    },
    {
      icon: Film,
      title: "2D Animated Videos",
      body: "2D animation companies like Digital Fueled are competent in developing digital videos with a wide range of styles, and creativity. If a brand requires a high level of visual sophistication, 2D animation allows for the creation of lush worlds and characters that draw the audience. They also make your brand look good.",
      tag: "02",
    },
    {
      icon: Box,
      title: "3D Animated Videos",
      body: "Digital Fueled offers 3D animated video production services for a wide variety of businesses. From full scale architectural 3D visualizations to animations, we do it all. We offer next-level animated video production services. We serve startup companies, digital creative agencies, and video production companies to spice up their video presentations with high-quality 3D animated videos.",
      tag: "03",
    },
    {
      icon: PenTool,
      title: "Whiteboard Animation",
      body: "Whiteboard animation is designed to look like the content is being hand-drawn on a school whiteboard or white background. It’s an unusually popular way to communicate more complex information because the simple graphics are easy to understand. Digital Fueled allows businesses to use whiteboard animation services to bring in a fresh audience.",
      tag: "04",
    },
    {
      icon: Activity,
      title: "Motion Graphics",
      body: "Digital Fueled uses motion graphics as a way to communicate with the viewer, and add depth to the story. Along with music and an effective copy, they can give us a message. We support our customers in using motion graphics in their marketing strategy.",
      tag: "05",
    },
  ]

  const testimonials = [
    {
      quote:
        "We reached out to Digital Fueled for support on a significant product update. Their expert services perfectly matched our needs and the resulting collaboration was a huge success. I am planning on working with them again.",
      name: "Mr. Keshav",
      company: "pindballuchi.com",
    },
    {
      quote:
        "Digital Fueled has helped us create a well-rounded and engaging experience for all of our customers. They are like a part of our internal team, and we have a great working relationship with them.",
      name: "Mr. S. Ranjan",
      company: "meghadesignstudio.com",
    },
    {
      quote:
        "I tend to have really high expectations as I am a perfectionist, and the talented team at Digital Fueled didn't disappoint. They delivered creative, polished designs and code that dramatically increased our customers' ability to find and understand site content.",
      name: "Mr. Rajesh",
      company: "dermcosskincare.com",
    },
  ]

  return (
    <>
      <div className="bg-[url('/images/bg8.avif')]  bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
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
                  Creative Video Solutions
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
                  Video{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Marketing.
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
                  Get your presence in people's pocket, with our Video Marketing services. Are you looking for the best video production company in Delhi? Well lucky for you as you are at the right place. At Digital Fueled, we have offer cheap and best video production services for people all over India.
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
              <div className="relative h-68 lg:h-110 overflow-hidden rounded-2xl bg-white/70 ring ring-border">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.70_0.14_255/0.22),transparent_55%),radial-gradient(circle_at_70%_70%,oklch(0.60_0.10_255/0.10),transparent_60%)]" />
                <div className="grain absolute inset-0 opacity-40" />
                {/* Player frame */}
                <div className="absolute inset-3 lg:inset-6 flex flex-col rounded-xl bg-white ring ring-border/60 backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-border/60 px-5 py-3 font-geist text-[10px] tracking-widest text-muted-foreground uppercase">
                    <span>REC ● 04:21:08</span>
                    <span>2160p · ProRes</span>
                  </div>
                  <div className="grid flex-1 place-items-center">
                    <Image
                      src="/images/vm.png"
                      width={600}
                      height={300}
                      alt="video marketing"
                      className="aspect-video lg:h-76 w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 border-t border-border/60 px-5 py-4 font-geist text-[10px] text-muted-foreground">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                      <div className="h-full w-1/3 bg-accent" />
                    </div>
                    <span>01:24 / 03:48</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-surface/40 overflow-hidden border-y border-border">
        <div className="marquee-track flex py-6 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-4 lg:gap-8 px-4 lg:px-8 font-geist text-xl text-muted-foreground md:text-3xl lg:text-4xl"
            >
              {w}
              <span className="text-accent/50">✦</span>
            </span>
          ))}
        </div>
      </div>
      {/* <section id="work" className="mx-auto max-w-7xl pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 font-geist text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            The best video production company.
          </h2>
          <p className="mb-8 max-w-5xl font-geist">
            We have been using motion graphics, 2D, and 3D videos to communicate
            with customers and convey messages creatively and innovatively. Our
            elite video production designers ensure your video is new, trendy,
            and incredibly easy for customers to understand.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "Strategy",
              "Script",
              "Storyboard",
              "Animation",
              "Sound design",
              "Delivery",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full px-4 py-1.5 font-geist text-sm text-black ring ring-orange-500"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative lg:col-span-1">
            <div className="relative h-100 overflow-hidden rounded-3xl bg-white ring ring-border">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.70_0.14_255/0.22),transparent_55%),radial-gradient(circle_at_70%_70%,oklch(0.60_0.10_255/0.10),transparent_60%)]" />
              <div className="grain absolute inset-0 opacity-40" />
              <div className="absolute inset-6 flex flex-col rounded-2xl bg-white/40 ring ring-border/60 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-3 font-geist text-[10px] tracking-widest text-muted-foreground uppercase">
                  <span>REC ● 04:21:08</span>
                  <span>2160p · ProRes</span>
                </div>
                <div className="grid flex-1 place-items-center">
                  <Image
                    src="/images/vm.png"
                    width={600}
                    height={300}
                    alt="video marketing"
                    className="h-66 w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 border-t border-border/60 px-5 py-4 font-geist text-[10px] text-muted-foreground">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                    <div className="h-full w-1/3 bg-accent" />
                  </div>
                  <span>01:24 / 03:48</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 hidden max-w-xs rounded-2xl border border-border bg-white px-5 py-4 shadow-2xl md:block">
              <div className="mb-1 flex items-center gap-2 font-geist text-xs text-accent">
                ● LIVE BRIEF
              </div>
              <p className="text-sm">
                "Make us look inevitable on a 6-inch screen." — Brand lead,
                fintech series A
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-30">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/video-marketing.png"
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
                      Best Video Marketing • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-4xl text-orange-500">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute right-0 -bottom-6 sm:-bottom-8 md:-bottom-10 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/video-marketing-2.jpg"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Grow Your Brand with Video Marketing
              </h2>
              <p className="mb-6 md:mb-8">
                Are you looking for the best video production company in Delhi? Well lucky for you as you are at the right place. At Digital Fueled, we have offer cheap and best video production services for people all over India. We have been using motion graphics, 2D, and 3D videos to communicate with the customers and convey our message creatively and innovatively. We have simply the best video production designers as they always ensure that the video is new, trendy and easy to understand for the customers.
              </p>
              <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-10 lg:py-24">
        <div className="container">
          <div className="mb-8 md:mb-12 flex flex-wrap items-end justify-between gap-4 md:gap-8">
            <div>
              <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Creative video <br />
                marketing formats.
              </h2>
            </div>
            <p className="max-w-sm text-black">
              Every format below is built in-house by directors, animators and
              motion designers who care about the last frame as much as the
              first.
            </p>
          </div>

          <div className="grid gap-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3 p-1">
            {services.map(({ icon: Icon, title, body, tag }) => (
              <article
                key={title}
                className="group ring ring-border hover:bg-surface relative flex min-h-80 flex-col bg-background p-4 transition-all hover:ring-orange-400 lg:p-6 rounded-2xl"
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
                <ArrowUpRight className="mt-auto ml-auto h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-orange-500" />
              </article>
            ))}
            <div className="flex min-h-80 flex-col justify-between bg-[#090909] rounded-2xl p-8 text-white lg:p-10">
              <span className="font-geist text-xs">/ ASK</span>
              <div>
                <h3 className="font-display mb-4 text-3xl leading-tight">
                  Need a format we haven't named?
                </h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium"
                >
                  Pitch us your idea <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialTwo />
      {/* <HowItsWork /> */}
      <ContactForm className="bg-gray-100" />
    </>
  )
}
