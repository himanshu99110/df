"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkle } from "lucide-react"
import Link from "next/link"

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
})

interface PageBannerProps {
  text: string
  highlightedText: string
  description: string
}

export function PageBanner({
  text,
  highlightedText,
  description,
}: PageBannerProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof consultationSchema>>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const onSubmit = (data: z.infer<typeof consultationSchema>) => {
    console.log("Validated Form Data:", data)
    alert("Form submitted successfully! Check console for data.")
  }
  return (
    <div className="bg-[url('/images/bg1.avif')] bg-cover bg-no-repeat py-12">
      <div className="mx-auto max-w-7xl">
        {/* Animated Container */}
        <motion.div
          className="grid grid-cols-7 gap-10"
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
          <div className="col-span-4 pr-10">
            <div className="flex h-full flex-col items-start justify-center gap-6">
              {/* Tag */}
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
                Digital Fueled IT Pvt Ltd
              </motion.span>

              {/* Headline */}
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
                {text}{" "}
                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                  {highlightedText}
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                className="text-lg font-medium text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                {description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <Link
                  href="#"
                  className="group relative mt-6 flex w-max items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent px-7 py-3.5 text-sm leading-tight font-semibold text-white ring ring-[#ffffff85] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Book a Quote
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Form Card Container */}
          <motion.div
            className="col-span-3"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <div className="w-full rounded-xl border-t-4 border-t-orange-500 bg-white p-4 font-geist shadow-[0_20px_30px_rgba(0,0,0,0.05)] lg:px-10 lg:pt-6 lg:pb-8">
              <div className="mb-8 text-center text-gray-900">
                <h3 className="text-2xl font-semibold">
                  Let&apos;s discuss your project.
                </h3>
                <p className="mt-2 text-[14px] text-gray-900">
                  Share your details, and we’ll book a call at your preferred
                  time.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Your Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-800"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("name")}
                      className={`w-full rounded-md border bg-white px-3 py-3 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500 ${
                        errors?.name
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200"
                      }`}
                    />
                    {errors?.name && (
                      <span className="text-[10px] text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Your Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-800"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("email")}
                      className={`w-full rounded-md border bg-white px-3 py-3 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500 ${
                        errors?.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200"
                      }`}
                    />
                    {errors?.email && (
                      <span className="text-[10px] text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Your Phone Number */}
                  <div className="flex flex-col space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-800"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                      {...register("phone")}
                      className={`w-full rounded-md border bg-white px-3 py-3 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500 ${
                        errors?.phone
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200"
                      }`}
                    />
                    {errors?.phone && (
                      <span className="text-[10px] text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-gray-800"
                    >
                      What are you looking for?
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className={`w-full rounded-md border bg-white px-3 py-3 text-[13px] text-gray-500 transition outline-none focus:border-blue-500 ${
                        errors?.service
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200"
                      }`}
                    >
                      <option value="">Select Service..</option>
                      <option value="website-design">
                        Website Design and Development
                      </option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="saas">Custom SaaS Development</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="game-development">Game Development</option>
                      <option value="other">Other</option>
                    </select>
                    {errors?.service && (
                      <span className="text-[10px] text-red-500">
                        {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Your Message */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-800"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Enter Your Message"
                    {...register("message")}
                    className="w-full resize-y rounded-md border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500"
                  />
                  {errors?.message && (
                    <span className="text-[10px] text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
