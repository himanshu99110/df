import React from 'react'
import {
    ArrowUpRight,
    MessageSquare,
    Network,
    Search,
    Sparkle,
    Sparkles,
    StarIcon,
    Target,
    Users
} from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"



const getInitials = (name: string) => {
    if (!name) return ""
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
}


function TestimonialTwo() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

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

    useEffect(() => {
        if (!api) return

        const onInit = () => {
            setCount(api.scrollSnapList().length)
            setCurrent(api.selectedScrollSnap())
        }

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        onInit()

        // Bind event listeners
        api.on("reInit", onInit)
        api.on("select", onSelect)

        return () => {
            api.off("reInit", onInit)
            api.off("select", onSelect)
        }
    }, [api])
    return (
        <section className="overflow-hidden py-10 lg:py-24">
            <div className="w-full pl-4 sm:pl-6 lg:pl-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-6 max-w-5xl font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize"
                >
                    Find your best design with us.{" "}
                    <span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">
                        We guarantee next success is yours!
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mb-10 flex flex-wrap items-center gap-4 font-mono text-sm"
                >
                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#222] shadow-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="font-medium text-sm">100% Project Delivery</span>
                    </div>
                    <p>Trusted by leading enterprises across India</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Rating Box - Responsive width and padding */}
                    <div className="col-span-1 pr-4">
                        <div className="h-full border bg-white rounded-xl lg:rounded-none overflow-hidden">
                            <div className="flex h-full flex-col items-center">
                                <div className="flex h-full flex-1 flex-col items-center justify-center gap-2 py-8 lg:py-0">
                                    <span className="mb-4 lg:mb-6 font-geist text-[4rem] lg:text-[5rem] leading-none font-semibold">
                                        5.0
                                    </span>
                                    <div className="flex gap-2">
                                        <StarIcon size={20} className="fill-current text-yellow-400" />
                                        <StarIcon size={20} className="fill-current text-yellow-400" />
                                        <StarIcon size={20} className="fill-current text-yellow-400" />
                                        <StarIcon size={20} className="fill-current text-yellow-400" />
                                        <StarIcon size={20} className="fill-current text-yellow-400" />
                                    </div>
                                    <span className="text-sm text-gray-700">
                                        (5k+) Customer reviews
                                    </span>
                                </div>
                                <div className="flex items-center justify-center bg-gray-50 px-4 py-6 lg:py-9 text-center text-base lg:text-lg text-black">
                                    Delivering smart business and startup solutions to high-performing
                                    companies.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Section */}
                    <div className="col-span-1 lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="relative w-full shadow-sm"
                        >
                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: "start",
                                    loop: false,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="ml-0 flex w-full border border-gray-200">
                                    {testimonials.map((item, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="flex basis-full flex-col border-r border-gray-200 bg-white p-6 sm:p-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/2 xl:basis-[33.33%]"
                                        >
                                            <p className="mb-6 lg:mb-8 font-geist text-base lg:text-lg font-medium text-black italic">
                                                {item.quote}
                                            </p>

                                            <div className="mt-auto flex items-center gap-3 pt-4 lg:pt-6 font-gra">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage
                                                        src={item.name}
                                                        alt={item.name}
                                                        className="object-cover"
                                                    />
                                                    <AvatarFallback className="bg-gray-200 text-[13px] font-medium text-gray-700">
                                                        {getInitials(item.name)}
                                                    </AvatarFallback>
                                                </Avatar>

                                                <div>
                                                    <h4 className="mb-1 text-[14px] text-[#111111]">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-[12px] lg:text-[13px] font-semibold text-gray-800">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </motion.div>
                    </div>
                </div>

                {/* Carousel Dots Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="mt-8 lg:mt-10 flex justify-center lg:justify-end gap-2 pr-4 sm:pr-6 lg:pr-8"
                >
                    {Array.from({ length: count }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${i === current ? "bg-[#333333]" : "bg-[#d4d4d4] hover:bg-[#a3a3a3]"
                                }`}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default TestimonialTwo