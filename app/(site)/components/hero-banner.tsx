"use client"

import * as React from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AnimatedButton } from "@/components/common/AnimatedButton"
import { cn } from "@/lib/utils"

const bannerData = [
  {
    id: 1,
    titleHighlight1: "Build ",
    titleHighlight1Bg: "#2d2d2d",
    titleNormal: "exhilarating web",
    titleHighlight2: "experiences",
    titleHighlight2Bg: "#0004ff",
    description:
      "Digital Fueled is a vibrant modern theme carefully designed for all types of creative agencies, studios & individuals. Build a striking website now!",
    ctaText: "Start Building",
    bgFrom: "from-[#8da9f6]",
    bgTo: "to-[#ffffff]",
  },
  {
    id: 2,
    titleHighlight1: "Create anything you",
    titleHighlight1Bg: "#2d2d2d",
    titleNormal: "can dream",
    titleHighlight2: "up",
    titleHighlight2Bg: "#0004ff",
    description:
      "Built with mobile in mind. Digital Fueled is sure to make your website look equally stunning when viewed an any device type or screen resolution.",
    ctaText: "Discover More",
    bgFrom: "from-[#bcf0ff]",
    bgTo: "to-[#ffffff]",
  },
  {
    id: 3,
    titleHighlight1: "Simply",
    titleHighlight1Bg: "#2d2d2d",
    titleNormal: "breathtaking idea",
    titleHighlight2: "realization",
    titleHighlight2Bg: "#0004ff",
    description:
      "Import the full Digital Fueled demo content with just a single mouse click and create a professional website knowing a single line of code.",
    ctaText: "View Demos",
    bgFrom: "from-[#ffdbbc]",
    bgTo: "to-[#ffffff]",
  },
]

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    z: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
}

const revealVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HomeBanner() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: true }),
    []
  )

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin]}
        className="h-full w-full [&>div]:h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="ml-0 h-full">
          {bannerData.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="relative h-full w-full pl-0"
            >
              <SlideContent slide={slide} isActive={current === index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-auto right-32 size-12 rounded-lg top-auto bottom-8 hover:bg-accent hover:text-white transition-all" />
        <CarouselNext className="right-16 size-12 rounded-lg top-auto bottom-8 hover:bg-accent hover:text-white transition-all" />
      </Carousel>
    </div>
  )
}

const SlideContent = React.memo(
  ({ slide, isActive }: { slide: any; isActive: boolean }) => {
    return (
      <div
        className={cn(
          "relative h-full overflow-hidden border-b bg-linear-to-b",
          slide.bgFrom,
          slide.bgTo
        )}
      >

        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-end justify-center gap-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="flex origin-top flex-col justify-center gap-8 will-change-transform"
          >
            <div
              className="overflow-hidden"
            >
              <motion.h1 variants={revealVariants} className="text-center font-ba text-[10rem] leading-[0.9] font-normal uppercase select-none">
                <span
                  className="text-sliding-line relative z-1"
                  style={{ backgroundColor: slide.titleHighlight1Bg }}
                >
                  {slide.titleHighlight1}
                </span>{" "}
                {slide.titleNormal}{" "}
                <span
                  className="text-sliding-line relative z-1"
                  style={{ backgroundColor: slide.titleHighlight2Bg }}
                >
                  {slide.titleHighlight2}
                </span>
              </motion.h1>
            </div>

            <div className="flex items-center justify-center">
              <motion.p
                variants={fadeUpVariants}
                className="max-w-[46ch] pr-20 text-lg leading-snug text-black"
              >
                {slide.description}
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <AnimatedButton>{slide.ctaText}</AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
)
SlideContent.displayName = "SlideContent"
