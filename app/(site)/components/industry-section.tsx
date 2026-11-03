"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { Sparkle } from "lucide-react"
import Image from "next/image"
import * as React from "react"

export default function IndustrySection() {
    return (
        <section className="py-14 lg:py-20" id="portfolio">
            <div className="container">

                {/* <main className="grid grid-cols-[0.9fr_0.9fr_1.1fr_1.1fr] grid-rows-[repeat(12,60px)] gap-4 pb-8" data-purpose="main-grid-content">

                    <section className="col-span-2 row-span-5 bg-[#f0f2f5] rounded-2xl p-8 flex flex-col justify-center items-start border border-gray-100" data-purpose="hero-card">
                        <h2 className="mb-4 max-w-5xl font-geist text-[28px] leading-[1.2] tracking-tighter font-semibold text-[#222222] md:text-[40px] lg:text-5xl">
                            Built for how each{" "}
                            <br /><span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">industry breaks.</span>
                        </h2>
                        <p className="text-black max-w-prose md:text-lg mb-8">
                            Every industry has its own way to lose a customer. We research where conversion leaks occur, then design the fix.
                        </p>
                        <AnimatedButton href="/work">See Our Work</AnimatedButton>
                    </section>

                    <section className="col-span-2 row-start-6 row-span-7 rounded-2xl overflow-hidden relative group" data-purpose="creative-tech-card">
                        <Image src="/images/Healthtech-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Healthtech</h3>
                            <p className="text-white">Accessible, WCAG-compliant interfaces for patient-facing apps where clarity and trust aren't optional; we designed around the people using them.</p>
                        </div>
                    </section>

                    <section className="col-start-3 col-span-1 row-span-4 rounded-2xl overflow-hidden relative group" data-purpose="healthcare-card">
                        <Image src="/images/OnlineProject/FullSmallSizeProject/supervity-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Saas Applications</h3>
                            <p className="text-white">Develop scalable SaaS products with secure authentication and billing.</p>
                        </div>
                    </section>

                    <section className="col-start-4 col-span-1 row-span-4 rounded-2xl overflow-hidden relative group" data-purpose="fintech-card">
                        <Image src="/images/OnlineProject/FullSmallSizeProject/allykart-3.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">E-Commerce</h3>
                            <p className="text-white">Build online stores with seamless shopping and payment experiences.</p>
                        </div>
                    </section>

                    <section className="col-start-3 col-span-2 row-start-5 row-span-4 rounded-2xl overflow-hidden relative group" data-purpose="retail-card">
                        <Image src="/images/OnlineProject/FullSmallSizeProject/lukit-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">EdTech & learning</h3>
                            <p className="text-white">Create engaging learning platforms with courses and assessments.</p>
                        </div>
                    </section>

                    <section className="col-start-3 col-span-1 row-start-9 row-span-4 rounded-2xl overflow-hidden relative group" data-purpose="abstract-shape-card">
                        <Image src="/images/OnlineProject/FullSmallSizeProject/opa-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Progressive Web Apps</h3>
                            <p className="text-white">Create fast, installable web apps with offline support.</p>
                        </div>
                    </section>

                    <section className="col-start-4 col-span-1 row-start-9 row-span-4 rounded-2xl overflow-hidden relative group" data-purpose="automotive-card">
                        <Image src="/images/OnlineProject/FullSmallSizeProject/harmonia-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Real Estate</h3>
                            <p className="text-white">Build modern property platforms with smart search and listings.</p>
                        </div>
                    </section>
                </main> */}
                <main
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.9fr_0.9fr_1.1fr_1.1fr] lg:grid-rows-[repeat(12,60px)] gap-4 pb-8"
                    data-purpose="main-grid-content"
                >
                    <section
                        className="md:col-span-2 lg:col-span-2 lg:row-span-5 bg-[#f0f2f5] rounded-2xl p-4 py-8 lg:py-8 lg:p-8 flex flex-col justify-center items-start border border-gray-100"
                        data-purpose="hero-card"
                    >
                        <h2 className="mb-4 max-w-5xl font-geist text-[28px] leading-[1.2] tracking-tighter font-semibold text-[#222222] md:text-[40px] lg:text-5xl capitalize">
                            Built for how each{" "}
                            <br /><span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">industry breaks.</span>
                        </h2>
                        <p className="text-black max-w-prose md:text-lg mb-8">
                            Every industry has its own way to lose a customer. We research where conversion leaks occur, then design the fix.
                        </p>
                        <AnimatedButton href="/work">See Our Work</AnimatedButton>
                    </section>

                    <section
                        className="min-h-80 lg:min-h-0 md:col-span-2 lg:col-span-2 lg:row-start-6 lg:row-span-7 rounded-2xl overflow-hidden relative group"
                        data-purpose="creative-tech-card"
                    >
                        <Image src="/images/Healthtech-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6 h-full flex flex-col justify-start">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Healthtech</h3>
                            <p className="text-white">Accessible, WCAG-compliant interfaces for patient-facing apps where clarity and trust aren't optional; we designed around the people using them.</p>
                        </div>
                    </section>

                    <section
                        className="min-h-80 lg:min-h-0 md:col-span-1 lg:col-start-3 lg:col-span-1 lg:row-span-4 rounded-2xl overflow-hidden relative group"
                        data-purpose="healthcare-card"
                    >
                        <Image src="/images/OnlineProject/FullSmallSizeProject/supervity-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6 h-full flex flex-col justify-start">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Saas Applications</h3>
                            <p className="text-white">Develop scalable SaaS products with secure authentication and billing.</p>
                        </div>
                    </section>

                    <section
                        className="min-h-80 lg:min-h-0 md:col-span-1 lg:col-start-4 lg:col-span-1 lg:row-span-4 rounded-2xl overflow-hidden relative group"
                        data-purpose="fintech-card"
                    >
                        <Image src="/images/OnlineProject/FullSmallSizeProject/allykart-3.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6 h-full flex flex-col justify-start">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">E-Commerce</h3>
                            <p className="text-white">Build online stores with seamless shopping and payment experiences.</p>
                        </div>
                    </section>

                    <section
                        className="min-h-80 lg:min-h-0 md:col-span-2 lg:col-start-3 lg:col-span-2 lg:row-start-5 lg:row-span-4 rounded-2xl overflow-hidden relative group"
                        data-purpose="retail-card"
                    >
                        <Image src="/images/OnlineProject/FullSmallSizeProject/lukit-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6 h-full flex flex-col justify-start">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">EdTech & learning</h3>
                            <p className="text-white">Create engaging learning platforms with courses and assessments.</p>
                        </div>
                    </section>

                    <section
                        className="min-h-80 lg:min-h-0 md:col-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-9 lg:row-span-4 rounded-2xl overflow-hidden relative group"
                        data-purpose="abstract-shape-card"
                    >
                        <Image src="/images/OnlineProject/FullSmallSizeProject/opa-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6 h-full flex flex-col justify-start">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Progressive Web Apps</h3>
                            <p className="text-white">Create fast, installable web apps with offline support.</p>
                        </div>
                    </section>

                    <section
                        className="min-h-80 lg:min-h-0 md:col-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-9 lg:row-span-4 rounded-2xl overflow-hidden relative group"
                        data-purpose="automotive-card"
                    >
                        <Image src="/images/OnlineProject/FullSmallSizeProject/harmonia-2.png" alt="Creative Tech" width={800} height={800} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="relative p-6 h-full flex flex-col justify-start">
                            <h3 className="text-2xl mb-2 text-white font-medium font-geist">Real Estate</h3>
                            <p className="text-white">Build modern property platforms with smart search and listings.</p>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    )
}
