'use client'
import React from "react"
import { motion } from "framer-motion"

export default function HowItsWork() {
  return (
    <section className="bg-gray-100 py-10 lg:py-20">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          {/* <div className="mb-4 flex items-center justify-center gap-3">
              <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                Our Work Process
              </span>
            </div> */}
          <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
            How It's Work
          </h2>
          <p className="mx-auto max-w-prose md:text-lg">
            We believe in providing quality services beyond expectations. Hiring
            us as your software development partner will avail you countless
            benefits
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row relative">
          {/* Step 1 */}
          <motion.div
            className="sticky top-30 lg:top-0 lg:relative lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="pt-0">
              <div className="bg-accent">
                <div className="flex flex-col justify-between gap-34 p-6 px-8">
                  <span className="text-xs text-gray-400 uppercase">
                    step 01
                  </span>
                  <div>
                    <h3 className="font-geist text-xl lg:text-2xl font-semibold text-white uppercase">
                      Research & Discovery
                    </h3>
                    <p className="mt-4 text-sm text-gray-200">
                      We begin by understanding your brand, goals, and target.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="sticky top-30 lg:top-0 lg:relative lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="lg:pt-18">
              <div className="bg-black">
                <div className="flex flex-col justify-between gap-34 p-6 px-8">
                  <span className="text-xs text-gray-400 uppercase">
                    step 02
                  </span>
                  <div>
                    <h3 className="font-geist text-xl lg:text-2xl font-semibold text-white uppercase">
                      Planning & Strategy
                    </h3>
                    <p className="mt-4 text-sm text-gray-200">
                      After gathering insights, we develop a detailed plan that
                      defines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="sticky top-30 lg:top-0 lg:relative lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="pt-0">
              <div className="bg-accent">
                <div className="flex flex-col justify-between gap-34 p-6 px-8">
                  <span className="text-xs text-gray-400 uppercase">
                    step 03
                  </span>
                  <div>
                    <h3 className="font-geist text-xl lg:text-2xl font-semibold text-white uppercase">
                      Design & Prototyping
                    </h3>
                    <p className="mt-4 text-sm text-gray-200">
                      Our creative team transforms ideas into visual concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="sticky top-30 lg:top-0 lg:relative lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="lg:pt-18">
              <div className="bg-black">
                <div className="flex flex-col justify-between gap-34 p-6 px-8">
                  <span className="text-xs text-gray-400 uppercase">
                    step 04
                  </span>
                  <div>
                    <h3 className="font-geist text-xl lg:text-2xl font-semibold text-white uppercase">
                      Development & Launch
                    </h3>
                    <p className="mt-4 text-sm text-gray-200">
                      At this stage, we take your approved designs and
                      strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
