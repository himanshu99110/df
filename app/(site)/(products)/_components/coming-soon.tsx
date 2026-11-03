'use client'

import { useState, useEffect } from "react";
import { Clock, Sparkles, ArrowLeft, Construction, Zap, Sparkle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"

interface ComingSoonProps {
    title: string;
    subtitle?: string;
    estimated?: string;
}

export function ComingSoon({ title, subtitle, estimated }: ComingSoonProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="bg-[url('/images/bg4.avif')] bg-cover bg-no-repeat py-12">
                <div className="mx-auto max-w-7xl">
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
                        <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
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
                                In Progress
                            </motion.span>

                            <motion.h1
                                className="font-geist text-[3.5rem] leading-none font-semibold text-white capitalize"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                {title}
                                {/* <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                                    Policy
                                </span> */}
                            </motion.h1>

                            <motion.p
                                className="max-w-5xl text-lg font-medium text-white"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                {subtitle}
                            </motion.p>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
                {/* Ambient background blobs */}
                <div className="pointer-events-none absolute -left-40 top-0 h-125 w-125 rounded-full bg-accent/10 blur-[100px]" />
                <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-orange-500/10 blur-[100px]" />

                {/* Decorative rings with orbiting dots */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RingDots mounted={mounted} />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-xl">
                    {/* Intro banner pill */}
                    <div
                        className={`inline-flex items-center gap-2 rounded-full ring ring-gray-300 px-4 py-1.5 text-xs font-medium ttransition-all duration-700 ${mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}
                    >
                        <Construction className="h-3.5 w-3.5 text-orange-500" />
                        {title}
                    </div>

                    {/* Main heading */}
                    <h1
                        className={`mt-6 text-5xl font-bold tracking-tight transition-all duration-700 delay-150 md:text-7xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                    >
                        Coming{" "}
                        <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">Soon</span>
                    </h1>

                    <p
                        className={`mt-4 text-base text-slate-900 transition-all duration-700 delay-300 md:text-lg ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                    >
                        We are a team of designers, developers, and strategists building brands and products that matter.
                    </p>

                    {/* Status badge */}
                    {/* <div
                    className={`mt-8 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                    <span className="inline-flex items-center gap-2 rounded-full ring ring-gray-300 bg-card/80 px-4 py-2 text-sm text-foreground backdrop-blur shadow-soft">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                        </span>
                        In Progress
                    </span>

                    {estimated && (
                        <span className="inline-flex items-center gap-2 rounded-full ring ring-gray-300 bg-card/80 px-4 py-2 text-sm text-foreground backdrop-blur shadow-soft">
                            <Clock className="h-4 w-4 text-orange-500" />
                            {estimated}
                        </span>
                    )}
                </div> */}

                    {/* Feature teaser chips */}
                    <div
                        className={`mt-10 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                    >
                        {["Creative Design", "Smart Development", "Growth Strategy"].map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-black"
                            >
                                <Zap className="h-3 w-3 text-brand" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Back link */}
                    <div
                        className={`mt-10 transition-all duration-700 delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 rounded-full ring ring-gray-300 bg-card/60 px-6 py-2.5 text-sm font-medium text-black backdrop-blur transition-all hover:bg-accent hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* Bottom sparkle */}
                <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-500/80">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
            </div>
        </>
    );
}

/* ------------------------------------------------------------------ */
// SVG ring with animated dots (reliable cross-browser animation)

function RingDots({ mounted }: { mounted: boolean }) {
    const ringSize = 580;
    const center = ringSize / 2;
    const radius = ringSize / 2 - 12;

    const dots = [
        { angle: 0, duration: "8s", color: "#38bdf8", size: 8 },   // sky-400
        { angle: 120, duration: "10s", color: "#3b82f6", size: 6 }, // blue-500
        { angle: 240, duration: "12s", color: "#2563eb", size: 7 }, // blue-600
    ];

    return (
        <div
            className={`transition-all duration-1000 ${mounted ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            style={{ width: ringSize, height: ringSize }}
        >
            <svg
                viewBox={`0 0 ${ringSize} ${ringSize}`}
                className="h-full w-full"
                style={{ overflow: "visible" }}
            >
                {/* Dashed ring 1 */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    className="text-blue-200"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 ${center} ${center}`}
                        to={`360 ${center} ${center}`}
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </circle>

                {/* Dashed ring 2 */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius - 28}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="6 8"
                    className="text-blue-200"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`360 ${center} ${center}`}
                        to={`0 ${center} ${center}`}
                        dur="30s"
                        repeatCount="indefinite"
                    />
                </circle>

                {/* Orbiting dots */}
                {dots.map((dot, i) => (
                    <g key={i}>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from={`${dot.angle} ${center} ${center}`}
                            to={`${dot.angle + 360} ${center} ${center}`}
                            dur={dot.duration}
                            repeatCount="indefinite"
                        />
                        <circle
                            cx={center + radius}
                            cy={center}
                            r={dot.size}
                            fill={dot.color}
                            opacity="0.9"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}
