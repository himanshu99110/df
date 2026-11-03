"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Website Design and Development",
    description:
      "Get a fast, SEO-friendly, and mobile-responsive website that drives real results. We build platforms that engage visitors, boost conversions, and perfectly align with your brand's growth strategies.",
    features: [
      "Custom UI/UX Design",
      "Responsive Web Development",
      "E-commerce Solutions",
      "Performance Optimization",
      "CMS Integration",
      "Ongoing Maintenance",
    ],
    cta: "Design your website",
    bg: "#3a36ea",
    rightBg: "#f8fafc",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/demo/web-dev-5.png",
    href: "/website-design-and-development"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Deliver seamless mobile experiences with high-performance native and cross-platform apps. We cover Android, iOS, and Flutter to ensure you reach your customers wherever they are.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Flutter & React Native",
      "App UI/UX Design",
      "Backend API Integration",
      "App Store Deployment",
    ],
    cta: "Build mobile app",
    bg: "#ffffff",
    rightBg: "#ffffff",
    textColor: "#111111",
    ctaBg: "#1a1a1a",
    ctaText: "#ffffff",
    image: "/images/demo/mobile-design.png",
    href: "/mobile-app-development"
  },
  {
    id: 3,
    title: "Custom SaaS Development",
    description:
      "Transform your idea into a robust software-as-a-service platform. We develop secure, scalable, and cloud-based solutions designed to handle growth and simplify complex business logic.",
    features: [
      "SaaS Architecture Design",
      "Multi-tenant Cloud Setup",
      "API & Third-party Integrations",
      "Automated Billing Systems",
      "Data Security & Compliance",
      "Continuous Scalability",
    ],
    cta: "Start SaaS project",
    bg: "#ffd600",
    rightBg: "#ffffff",
    textColor: "#111111",
    ctaBg: "#1a1a1a",
    ctaText: "#ffffff",
    image: "/images/demo/saas.png",
    href: "/software-development"
  },
  {
    id: 4,
    title: "Digital Marketing & SEO",
    description:
      "Attract the right audience and convert visitors into loyal customers. Our performance-driven digital marketing solutions are built to scale your revenue and maximize ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click & Google Ads",
      "Social Media Marketing",
      "Content & Email Strategy",
      "Conversion Rate Optimization",
      "Analytics & Reporting",
    ],
    cta: "Grow your reach",
    bg: "#ff5416",
    rightBg: "#ffffff",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/demo/seo.png",
    href: "/social-media-marketing"
  },
  {
    id: 5,
    title: "Game Development",
    description:
      "Engage users with immersive, interactive, and high-performance gaming experiences. We build compelling games across mobile and web platforms with stunning graphics and optimized performance.",
    features: [
      "2D & 3D Game Design",
      "Mobile Game Development",
      "Web-based Mini Games",
      "Multiplayer Integration",
      "AR/VR Experiences",
      "Monetization Strategy",
    ],
    cta: "Develop a game",
    bg: "#111111",
    rightBg: "#fafafa",
    textColor: "#ffffff",
    ctaBg: "#ffffff",
    ctaText: "#000000",
    image: "/images/demo/game-dev.jpeg",
    href: "/software-development"
  },
]

function Card({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: (typeof services)[0]
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const [isMobile, setIsMobile] = useState(false)
  const CARD_OFFSET = 120
  const targetScale = Math.max(0.5, 1 - (total - index - 1) * 0.1)
  const desktopScale = useTransform(
    scrollYProgress,
    [index / total, 1],
    [1, targetScale]
  )

  const isDark = service.textColor === "#ffffff"



  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)

    check()
    window.addEventListener("resize", check)

    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <div
      style={{
        position: "sticky",
        top: `${CARD_OFFSET}px`,
        zIndex: index + 1,
        marginBottom: isMobile ? "1rem" : "0vh",
      }}
    >
      <motion.div
        style={{
          scale: isMobile ? 1 : desktopScale,
          backgroundColor: service.bg,
          color: service.textColor,
          transformOrigin: "top center",
        }}
        className="w-full overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5 rounded-md"
      >
        <div className="grid h-full lg:grid-cols-[1.1fr_1fr]">
          <div className="flex min-h-78 lg:min-h-122 flex-col justify-center p-4 py-5 lg:p-10">
            <div>
              <h2 className="mb-4 lg:mb-6 font-geist text-[24px] md:text-4xl leading-[32px] lg:leading-none font-semibold lg:text-[2.9rem]">
                {service.title}
              </h2>

              <p className="mb-8 lg:mb-10 lg:max-w-[90%] text-sm leading-relaxed font-normal text-current md:text-[16px]">
                {service.description}
              </p>

              <div className="hidden mb-10 lg:grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: isDark ? "#ffffff" : "#111111" }}
                    />
                    <span className="text-sm font-normal tracking-wide md:text-[16px]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={service.href}
              className="mt-auto self-start flex items-center gap-1 rounded-full px-6 py-3.5 font-medium text-[15px] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: service.ctaBg,
                color: service.ctaText,
              }}
            >
              {service.cta}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div
            className="relative items-center justify-center overflow-hidden flex"
            style={{ background: service.rightBg }}
          >
            <Image
              src={service.image}
              alt={`${service.title} visuals`}
              className="lg:h-full h-78 max-h-130 w-full object-cover lg:object-contain object-center"
              height={600}
              width={776}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section className="relative pt-12" id="services">
      <div ref={containerRef} className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 md:mb-14 font-geist text-[28px] leading-[1.2] font-semibold tracking-tighter text-[#111111] md:text-[40px] lg:text-[52px] capitalize"
        >
          From startup to enterprise, grow your business{" "}
          <span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">
            with fast and scalable digital solutions!
          </span>
        </motion.h2>
        {services.map((service, index) => (
          <Card
            key={service.id}
            service={service}
            index={index}
            total={services.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
