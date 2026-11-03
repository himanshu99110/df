"use client"
import { AnimatedButton } from "@/components/common/AnimatedButton"
import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, Globe, Sparkle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../components/contact-from"

const clients = [
  {
    id: 1,
    src: "/images/client/prakash.svg",
    alt: "Prakash Hospital",
  },
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
]

export default function CommunityInfluencerMarketing() {
  return (
    <>
      {/* <PageBanner
        text="Community & Influencer"
        highlightedText="Marketing."
        description="We understand the importance of an engaging and appealing mobile application and aim to provide the best user experience. We design all kinds of apps ranging from travel applications, social applications, real estate applications, lifestyle apps, eCommerce apps, and several others."
      /> */}
      <div className="bg-[url('/images/bg7.avif')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
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
                  Community Growth Experts
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
                  Community Influence{" "}
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
                  At digital fueled, you get the most experienced and proficient
                  mobile app developers for your Community Influence Marketing. We
                  always come up with innovative and creative ideas for your
                  application.
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
              className="relative col-span-3"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <div className="relative flex min-h-[280px] w-full flex-1 items-center justify-center md:min-h-[320px] lg:justify-end">
                {/* Main Glass Card (Campaign Dashboard) */}
                <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-3 lg:p-6 lg:shadow-2xl lg:shadow-slate-200/50 backdrop-blur-xl">
                  {/* Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-black font-geist">
                        Top Matches
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-black">
                        Summer Collection Campaign
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-orange-100">
                      <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
                    </div>
                  </div>

                  {/* Creator List */}
                  <div className="space-y-3">
                    {[
                      {
                        name: "Username One",
                        niche: "Lifestyle & Fashion",
                        followers: "1.2M",
                        img: "women/44",
                        match: "98%",
                      },
                      {
                        name: "Username Two",
                        niche: "Tech Reviews",
                        followers: "850K",
                        img: "men/32",
                        match: "94%",
                      },
                      {
                        name: "Username Three",
                        niche: "Travel Vlogs",
                        followers: "2.1M",
                        img: "women/68",
                        match: "91%",
                      },
                    ].map((creator, i) => (
                      <div
                        key={i}
                        className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all hover:border-orange-200 hover:shadow-md last:hidden lg:last:flex"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={`https://randomuser.me/api/portraits/${creator.img}.jpg`}
                              alt={creator.name}
                              className="h-12 w-12 rounded-full border-2 border-transparent object-cover transition-colors group-hover:border-orange-400"
                            />
                            <div className="absolute -right-1 -bottom-1 rounded-full border-2 border-white bg-blue-500 p-0.5">
                              <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">
                              {creator.name}
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-500">
                              {creator.niche}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-right">
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                            {creator.match} Match
                          </span>
                          <p className="text-sm font-bold text-slate-800">
                            {creator.followers}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating UI Card: Total Reach (Dynamic) */}
                <div className="hidden animate-bounce2 absolute top-16 -left-4 z-20 lg:flex items-center gap-4 rounded-xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur-md md:-left-12">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-geist font-semibold text-black uppercase">
                      Total Est. Reach
                    </p>
                    <p className="text-2xl leading-none font-geist font-bold text-slate-900">
                      2.55M
                    </p>
                  </div>
                </div>

                {/* Floating UI Card: Collaboration Request */}
                <div className="hidden animate-bounce2 animation-delay-1000 absolute -right-8 bottom-12 z-20 lg:flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-xl md:-right-12">
                  <div className="relative">
                    <img
                      src="https://randomuser.me/api/portraits/women/12.jpg"
                      alt="User"
                      className="h-10 w-10 rounded-full border-2 border-slate-700"
                    />
                    <div className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-500">
                      <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Proposal Accepted!
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      by @username
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-30">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/community.avif"
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
                      Best Community Marketing • Digital Fueled •
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
                  src="/images/demo/community-2.jpg"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Community Influence Marketing for Brand Growth
              </h2>
              <p className="mb-4">
                We always aim at providing maximum customer
                satisfaction to all our customers. The apps are designed keeping
                in mind the target audience and they are compatible with ios and
                android. We not only provide a comprehensive interface but also
                provide access to backend, custom analytics report, crash
                report, notification alert, and everything else that is needed
                to track the performance and the quality of your app in
                real-time.
              </p>
              <p className="mb-6 md:mb-8">
                We recognize what can change a raw application idea into a
                successful application as we have several years of experience in
                Community Influence Marketing. The experience that we have
                gained has not only helped us to impress our customers but also
                gain an insight into the real world. Our Community Influence
                Marketing team builds large and complex applications addressing
                challenging business problems and delivering quality performance
                and versatile solutions.
              </p>
              <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-geist text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Get your presence in people's pocket,{" "}
            <span className="text-gray-400">
              with our Community Influence Marketing services.
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/demo/content-3.jpg"
                width={600}
                height={600}
                alt="Community & Influencer Marketing"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="font-geist">
              <p className="mb-4">
                At digital fueled, you get the most experienced and proficient
                mobile app developers for your Community Influence Marketing. We
                always come up with innovative and creative ideas for your
                application. We always aim at providing maximum customer
                satisfaction to all our customers. The apps are designed keeping
                in mind the target audience and they are compatible with ios and
                android. We not only provide a comprehensive interface but also
                provide access to backend, custom analytics report, crash
                report, notification alert, and everything else that is needed
                to track the performance and the quality of your app in
                real-time.
              </p>
              <p>
                We recognize what can change a raw application idea into a
                successful application as we have several years of experience in
                Community Influence Marketing. The experience that we have
                gained has not only helped us to impress our customers but also
                gain an insight into the real world. Our Community Influence
                Marketing team builds large and complex applications addressing
                challenging business problems and delivering quality performance
                and versatile solutions.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/demo/coding-bg-3.png')] bg-cover bg-center bg-no-repeat py-10 lg:py-24">
        <div className="container">
          <h2 className="mb-8 md:mb-12 text-center font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            You can trust like these <br />
            business did.
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2.5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="min-h-14 group flex h-full w-full items-center justify-center overflow-hidden rounded-sm md:rounded-md bg-white px-4 py-2 lg:py-4"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={300}
                  height={200}
                  className="h-full w-full scale-95 object-contain object-center transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <TechStackSection /> */}
      {/* <HowItsWork /> */}

      <ContactForm className="bg-gray-100" />
    </>
  )
}
