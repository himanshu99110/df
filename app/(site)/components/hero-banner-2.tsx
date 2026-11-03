"use client"
import { AnimatedButton } from "@/components/common/AnimatedButton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import { motion, Variants } from "framer-motion"
import React from "react"

interface SlideData {
  id: number
  title: string
  highlightText?: string
  highlightGradient?: string
  description: string
  testimonial: string
  bgGradientFromTo: string
  leafLeft: string
  statBg: string
  leafRight: string
  bgImg: string
}

const slidesData: SlideData[] = [
  {
    id: 1,
    title: "Build exhilarating web experiences",
    highlightText: "web experiences",
    highlightGradient: "bg-linear-to-tl from-[#0008aa] via-[#258abd] to-[#00044d]",
    description:
      "Digital Fueled is a vibrant modern theme carefully designed for all types of creative agencies, studios & individuals. Build a striking website now!",
    testimonial:
      "Digital Fueled transformed our online presence, delivering a stunning website that perfectly captures our brand and engages our audience.",
    leafLeft: "/images/client/shape-2.webp",
    bgGradientFromTo:
      "bg-linear-to-b from-[#a0afe5] to-[#ebeefd]",
    leafRight: "/images/client/shape-1.webp",
    statBg: "bg-[#b1d4ff3d]",
    bgImg: "bg-[url('/images/hero/banner-5.avif')]"
  },
  {
    id: 2,
    title: "Simply breathtaking idea realization",
    highlightText: "idea realization",
    highlightGradient: "bg-linear-to-tl from-[#0008aa] via-[#258abd] to-[#00044d]",
    description:
      "Built with mobile in mind. Digital Fueled is sure to make your website look equally stunning when viewed an any device type or screen resolution.",
    testimonial:
      "Digital Fueled transformed our online presence, delivering a stunning website that perfectly captures our brand and engages our audience.",
    leafLeft: "/images/client/shape-5.webp",
    bgGradientFromTo:
      "bg-linear-to-b from-[#e6e9dd] via-[#e6e9dd] to-[#e6e9dd]",
    leafRight: "/images/client/shape-2.webp",
    statBg: "bg-[#ffb99b3d]",
    bgImg: "bg-[url('/images/hero/banner-1.jpg')]"
  },
  {
    id: 3,
    title: "Create anything you can dream up",
    highlightText: "can dream up",
    highlightGradient: "bg-linear-to-tl from-[#0008aa] via-[#258abd] to-[#00044d]",
    description:
      "Import the full Digital Fueled demo content with just a single mouse click and create a professional website knowing a single line of code.",
    testimonial:
      "Digital Fueled transformed our online presence, delivering a stunning website that perfectly captures our brand and engages our audience.",
    leafLeft: "/images/client/shape-4.webp",
    bgGradientFromTo:
      "bg-linear-to-b from-[#e9ded9] to-[#e9ded9]",
    leafRight: "/images/client/shape-3.webp",
    statBg: "bg-[#e9ded9]",
    bgImg: "bg-[url('/images/hero/banner-3.jpg')]"
  },
]

export default function HeroBannerTwo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useMemo(
    () => Autoplay({ delay: 400000, stopOnInteraction: false }),
    []
  )

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative h-full lg:h-[600px] w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin]}
        className="h-full w-full [&>div]:h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="ml-0 h-full">
          {slidesData.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className={cn(
                "relative h-full w-full overflow-hidden pl-0 bg-size-[100%_100%] bg-center bg-no-repeat",
                slide.bgImg
              )}
            >
              <MemoizedSlideContent isActive={current === index} data={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-8 md:bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300 shrink-0 ring-2 ring-accent/80",
              current === index ? "bg-accent/80 w-8" : "bg-transparent"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const MemoizedSlideContent = React.memo(function SlideContent({
  isActive,
  data,
}: {
  isActive: boolean
  data: SlideData
}) {
  const highlightStart = data.highlightText
    ? data.title.toLowerCase().indexOf(data.highlightText.toLowerCase())
    : -1
  const highlightEnd =
    highlightStart !== -1 ? highlightStart + data.highlightText!.length : -1
    
  const highlightCharsCount = data.highlightText
    ? data.highlightText.replace(/\s+/g, "").length
    : 0

  let rawStringIndex = 0
  let globalCharIndex = 0
  let highlightCharIndex = 0

  return (
    <>
      <div className="relative mx-auto grid h-full w-full max-w-[90%] md:max-w-4xl grid-cols-1 py-24">
        <div className="relative z-2">
          <div className="flex w-full flex-wrap justify-center text-center items-center">
            {data.title.split(" ").map((word, wordIndex) => {
              if (wordIndex > 0) rawStringIndex++

              return (
                <span
                  key={`word-${wordIndex}`}
                  className="mr-3 sm:mr-6 inline-flex whitespace-nowrap"
                >
                  {word.split("").map((char, charIndex) => {
                    const isHighlight =
                      highlightStart !== -1 &&
                      rawStringIndex >= highlightStart &&
                      rawStringIndex < highlightEnd

                    const delayIndex = globalCharIndex++
                    
                    let bgStyle: React.CSSProperties = {
                      willChange: "transform, opacity"
                    }

                    if (isHighlight) {
                      const size = `${highlightCharsCount * 100}%`
                      const position = `${
                        highlightCharsCount > 1
                          ? (highlightCharIndex / (highlightCharsCount - 1)) * 100
                          : 0
                      }%`
                      
                      bgStyle = {
                        ...bgStyle,
                        backgroundSize: `${size} 100%`,
                        backgroundPosition: `${position} 0`,
                      }
                      highlightCharIndex++
                    }

                    const span = (
                      <motion.span
                        key={`char-${wordIndex}-${charIndex}`}
                        initial={{ opacity: 0, x: -18 }}
                        animate={
                          isActive
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -18 }
                        }
                        transition={{
                          duration: isActive ? 0.4 : 0.2,
                          ease: "easeOut",
                          delay: isActive ? 0.4 + delayIndex * 0.04 : 0, 
                        }}
                        style={bgStyle}
                        className={cn(
                          "font-ba text-[40px] sm:text-6xl md:text-[7rem] leading-tight md:leading-28 select-none",
                          isHighlight &&
                            cn(
                              "bg-clip-text text-transparent",
                              data.highlightGradient
                            )
                        )}
                      >
                        {char}
                      </motion.span>
                    )

                    rawStringIndex++
                    return span
                  })}
                </span>
              )
            })}
            <TextFade
              direction="up"
              isActive={isActive}
              className="mt-4 md:mt-2 flex flex-col items-center justify-center gap-6 w-full"
            >
              <p className="mb-2 text-center text-base sm:text-lg md:text-xl select-none max-w-sm sm:max-w-2xl px-2">
                {data.description}
              </p>
              <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
            </TextFade>
          </div>
        </div>
      </div>
    </>
  )
})

function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  isActive,
}: {
  direction: "up" | "down"
  children: React.ReactNode
  className?: string
  staggerChildren?: number
  isActive: boolean
}) {
  const FADE_DOWN: Variants = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
  }

  return (
    <motion.div
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: isActive ? 0.6 : 0,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  )
}