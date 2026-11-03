'use client'

import { useEffect, useRef } from "react";
import { motion, animate, useInView, Variants } from "framer-motion";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

// 1. Setup the animated counter component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1], // Smooth custom easing
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

// 2. Data structure updated to support numbers for the counter
const featuresList = [
  {
    value: 535,
    suffix: "M",
    description: "Monthly active WhatsApp users in India",
    icon: <Users size={24} className="text-emerald-600" />,
    colorClass: "bg-emerald-50 ring-emerald-100/50",
  },
  {
    value: 98,
    suffix: "%",
    description: "Average open rate for business messages on WhatsApp",
    icon: <MessageSquare size={24} className="text-blue-600" />,
    colorClass: "bg-blue-50 ring-blue-100/50",
  },
  {
    value: 900,
    suffix: "M+",
    description: "Projected WhatsApp users in India by end of 2026",
    icon: <TrendingUp size={24} className="text-indigo-600" />,
    colorClass: "bg-indigo-50 ring-indigo-100/50",
  },
];

// 3. Smooth entrance animations
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
};

export function Stats() {
  return (
    <section
      id="stats"
      className="relative py-20 bg-slate-50 overflow-hidden"
    >
      {/* Subtle background glow effect */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Your customers are on{" "}
            <span className="text-[#009e46]">
              WhatsApp.
            </span>
            <br />
            Are you?
          </h2>
          <p className="mt-4 text-lg">
            Leverage the most powerful communication channel to scale your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="group relative flex flex-col gap-6 rounded-2xl bg-white/60 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-blue-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              {/* <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform duration-500 group-hover:scale-110 ${feature.colorClass}`}
              >
                {feature.icon}
              </div> */}

              <div>
                <h3 className="text-4xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                  <AnimatedCounter value={feature.value} suffix={feature.suffix} />
                </h3>
                <p className="text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}