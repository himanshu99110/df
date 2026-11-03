"use client"

import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/common/AnimatedButton"

export function CTASection() {
  return (
    <section className="relative my-12 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[url('/images/wcrm/cta-bg.png')] py-20 bg-cover bg-center bg-no-repeat text-center"
        >
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-green-600 sm:text-4xl">
              Start Using For Free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-900">
              Try it, use it, get leads, and fall in love with it! Without
              spending a single penny!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <AnimatedButton variant="primary" href="#contact">
                Start Now
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}