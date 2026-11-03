'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react'

function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);

    return (
        <section ref={targetRef} className="w-full py-10 lg:py-20 bg-white relative lg:h-[300vh]">
            <div className='relative lg:sticky lg:top-32'>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 container">
                    <div className="lg:col-span-4">
                        <h2 className="mb-4 md:mb-6 mt-8 md:mt-12 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
                            Website Development Services
                        </h2>
                        <p className="mb-8 md:mb-10 text-lg">
                            We craft modern, high-performance digital experiences tailored to your business needs.
                        </p>
                    </div>
                    <div className="lg:col-span-8 w-full">
                        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-4">
                            {cards.map((card) => {
                                return <CardMobile card={card} key={card.id} />;
                            })}
                        </div>
                        <div className="hidden lg:flex items-center overflow-hidden">
                            <motion.div style={{ x }} className="flex gap-4">
                                {cards.map((card) => {
                                    return <Card card={card} key={card.id} />;
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HorizontalScroll


const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="rounded-lg p-4 bg-gray-200 overflow-hidden group w-102"
        >
            <div className="p-0 relative">
                {/* Image Container */}
                <div className="relative w-full h-68 overflow-hidden">
                    <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay for better text readability if needed, though relying strictly on black text below */}
                    <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Card Content Footer */}
                <div className="mt-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-black">
                        {card.title}
                    </h3>
                    <p>{card.description}</p>
                    <Link
                        href='/contact'
                        className="w-full flex items-center bg-white text-black justify-between hover:bg-accent hover:text-white rounded-full px-8 py-3.5 text-base font-semibold transition-all"
                    >
                        Start Now
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};
const CardMobile = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="rounded-lg p-3 bg-gray-200 overflow-hidden group"
        >
            <div className="p-0 relative">
                {/* Image Container */}
                <div className="relative w-full h-46 overflow-hidden">
                    <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay for better text readability if needed, though relying strictly on black text below */}
                    <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Card Content Footer */}
                <div className="mt-4 flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-black">
                        {card.title}
                    </h3>
                    <p>{card.description}</p>
                    <Link
                        href='/contact'
                        className="w-full flex items-center bg-white text-black justify-between hover:bg-accent hover:text-white rounded-full px-6 py-3 text-base font-semibold transition-all"
                    >
                        Start Now
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

type CardType = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const cards: CardType[] = [
    {
        id: 1,
        title: "Business Website",
        description:
            "Professional websites designed to establish your brand, showcase services, and generate quality leads.",
        image:
            "/images/OnlineProject/FullSmallSizeProject/allykart.png",
    },
    {
        id: 2,
        title: "Corporate Website",
        description:
            "Modern corporate websites built to strengthen credibility, highlight company information, and engage clients.",
        image:
            "/images/OnlineProject/FullSmallSizeProject/sehgal.png",
    },
    {
        id: 3,
        title: "Progressive Web Apps",
        description:
            "Create fast, installable web apps with offline support. Deliver smooth experiences across all devices.",
        image:
            "/images/OnlineProject/FullSmallSizeProject/opa.png",
    },
    {
        id: 4,
        title: "Portfolio Website",
        description:
            "Showcase your work with visually engaging portfolio websites tailored for professionals, creatives, and agencies.",
        image:
            "/images/OnlineProject/FullSmallSizeProject/pune-reality.png",
    },
    {
        id: 5,
        title: "SaaS Applications",
        description:
            "Develop scalable SaaS products with secure authentication, subscriptions, and cloud-based functionality.",
        image:
            "/images/OnlineProject/FullSmallSizeProject/supervity.png",
    },
    {
        id: 6,
        title: "Landing Pages",
        description:
            "High-converting landing pages optimized for marketing campaigns, lead generation, and product launches.",
        image:
            "/images/OnlineProject/FullSmallSizeProject/echo.png",
    },
];