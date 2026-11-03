'use client'
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageSquare, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AnimatedButton } from "@/components/common/AnimatedButton";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-26 pb-28 bg-white"
    >
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" /> */}

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full ring ring-blue-200 bg-accent/10 px-4 py-1.5 text-sm font-medium text-[#0b37cb]"
        >
          Multi-tenant appointment scheduling
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-18"
        >
          {/* One Link. Every{" "}
          <span className="text-[#4338ca]">Appointment</span>
          {" "}, On Time */}
          Scheduling made simple, <br />meetings made better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-3xl text-xl text-gray-600"
        >
          Appointly gives every teammate a booking link backed by real availability rules — with approvals, reminders, a customer CRM and analytics built in. No back-and-forth emails, ever again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <AnimatedButton variant="primary" href="#contact">
            Start Now
          </AnimatedButton>
          <AnimatedButton variant="outline" href="#contact">
            Book a Demo
          </AnimatedButton>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto mt-10 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-4xl">
            {/* <InboxMockup /> */}
            <Image src="/images/appointly-8.png" width={1200} height={800} alt="WhatsApp" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}