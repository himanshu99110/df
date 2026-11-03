"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  ChevronDown,
  Mail,
  MessageCircleMore,
  Phone,
  Sparkle,
  Loader2 // Added for loading state
} from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
// import ReCAPTCHA from "react-google-recaptcha"

// 1. Define the validation schema matching your API expectations
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  website: z.string().optional(), // Honeypot
  formStart: z.string().optional(), // Speed trap
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactUs() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const recaptchaRef = useRef<ReCAPTCHA>(null)

  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      website: "",
      formStart: "",
      source: "Contact Us Page", // Distinct source identifier
    },
  })

  // 3. Handle API Submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    // const token = recaptchaRef.current?.getValue()
    // if (!token) {
    //   toast.error("Please complete the reCAPTCHA challenge.")
    //   setIsSubmitting(false)
    //   return
    // }

    try {
      let parsedUtmData: Record<string, string> = {}
      if (typeof window !== "undefined") {
        try {
          const storedUtm = localStorage.getItem("digitalFueledSource")
          if (storedUtm) {
            parsedUtmData = JSON.parse(storedUtm)
          }
        } catch (error) {
          console.error("Failed to parse UTM data:", error)
        }
      }

      data.utm_source = parsedUtmData.utm_source || "Direct"
      data.utm_medium = parsedUtmData.utm_medium || ""
      data.utm_campaign = parsedUtmData.utm_campaign || ""
      data.utm_content = parsedUtmData.utm_content || ""
      data.utm_term = parsedUtmData.utm_term || ""

      const response = await fetch("https://app.digitalfueled.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          // recaptchaToken: token
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        router.push("/thank-you")
      } else {
        toast.error(
          result.error ||
          "Message sent successfully! We will be in touch soon."
        )
        setIsSubmitting(false)
        // recaptchaRef.current?.reset()
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Failed to send message.")
      // recaptchaRef.current?.reset()
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="h-full bg-[url('/images/bg6.avif')] bg-cover bg-no-repeat py-12">
        <div className="container">
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
            <div className="flex h-full flex-col items-center justify-center gap-4 md:gap-6 text-center">
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

              <motion.h1
                className="font-geist text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-none font-semibold text-white capitalize"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                Contact{" "}
                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-[length:200%_auto] bg-clip-text text-transparent">
                  Us?
                </span>
              </motion.h1>

              <motion.p
                className="max-w-5xl md:text-lg font-medium text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                We&apos;re excited to hear from you! Whether you have a
                question, want to discuss a project, or just want to say hello,
                our team is here to help.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#F4F6F9] py-14 lg:py-20">
        <div className="grid container grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            {/* Contact Info Card */}
            <div className="flex flex-col rounded-2xl bg-white p-4 shadow-sm sm:p-4">
              {/* Email */}
              <div className="group flex items-center gap-5 rounded-xl p-4 transition-colors hover:bg-orange-50">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50 transition-colors group-hover:bg-orange-100">
                  <Mail className="h-6 w-6 text-orange-500" strokeWidth={2} />
                </div>
                <a
                  href="mailto:hello@digitalfueled.com"
                  className="flex flex-col group"
                >
                  <span className="mb-0.5 text-lg font-medium text-black">
                    Email
                  </span>
                  <span className="text-base text-gray-800 transition-colors group-hover:text-blue-600">
                    hello@digitalfueled.com
                  </span>
                </a>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-5 rounded-xl p-4 transition-colors hover:bg-orange-50">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50 transition-colors group-hover:bg-orange-100">
                  <Phone className="h-6 w-6 text-orange-500" strokeWidth={2} />
                </div>
                <a
                  href="tel:+917838152753"
                  className="flex flex-col group"
                >
                  <span className="mb-0.5 text-lg font-medium text-black">
                    Phone
                  </span>
                  <span className="text-base text-gray-800 transition-colors group-hover:text-blue-600">
                    +91 78 3815 2753
                  </span>
                </a>
              </div>

              {/* Whatsapp */}
              <div className="group flex items-center gap-5 rounded-xl p-4 transition-colors hover:bg-orange-50">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50 transition-colors group-hover:bg-orange-100">
                  <MessageCircleMore className="h-6 w-6 text-orange-500" strokeWidth={2} />
                </div>
                <a
                  href="https://wa.me/917838152753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col group"
                >
                  <span className="mb-0.5 text-lg font-medium text-black">
                    Whatsapp
                  </span>
                  <span className="text-base text-gray-800 transition-colors group-hover:text-blue-600">
                    +91 78 3815 2753
                  </span>
                </a>
              </div>

              {/* Address */}
              <div className="group flex items-center gap-5 rounded-xl p-4 transition-colors hover:bg-orange-50">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50 transition-colors group-hover:bg-orange-100">
                  <Building2
                    className="h-6 w-6 text-orange-500"
                    strokeWidth={2}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="mb-0.5 text-lg font-medium text-black">
                    Address
                  </span>
                  <span className="text-base text-gray-800">
                    L2A/4, Gali No - 1, and, Gita Mandir Rd, near Happy Chowk, Mohan Garden, New Delhi, Delhi 110059
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative flex h-54 items-end justify-center overflow-hidden rounded-2xl bg-[#D3E3FE] shadow-sm sm:h-70 lg:h-87">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.47885030992!2d77.0424146!3d28.629768400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05035ead02eb%3A0xe4ac8d3acd8c720e!2sDigital%20Fueled%20IT%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1781788411012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full"
              ></iframe>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <span className="mb-3 block text-sm font-semibold tracking-wide text-orange-500">
              Get in Touch
            </span>

            <h2 className="mb-4 font-geist text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              Let&apos;s Chat, Reach Out to Us
            </h2>

            <p className="mb-8 text-black">
              Have questions or feedback? We&apos;re here to help. Send us a message,
              and we&apos;ll respond within 24 hours
            </p>

            {/* <div className="mb-8 w-full border-t border-gray-100"></div> */}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Anti-bot honeypot field (hidden from users) */}
              <input
                type="text"
                {...register("website")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Full Name <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    {...register("name")}
                    className={`w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  />
                  {errors?.name && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.name.message}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Phone <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    {...register("phone")}
                    className={`w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  />
                  {errors?.phone && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Email Address <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    {...register("email")}
                    className={`w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  />
                  {errors?.email && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.email.message}</span>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Service <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      {...register("service")}
                      className={`w-full cursor-pointer appearance-none rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] transition-all focus:ring-2 focus:outline-none ${errors.service ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                    >
                      <option value="" disabled className="text-[#94A3B8]">
                        Select a service
                      </option>
                      <option value="Website Design and Development">
                        Website Design & Development
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Content Development Services">
                        Content Development Services
                      </option>
                      <option value="WhatsApp API Solution">
                        WhatsApp API Solution
                      </option>

                      {/* Marketing */}
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Search Engine Optimization">
                        Search Engine Optimization (SEO)
                      </option>
                      <option value="Community Influencer Marketing">
                        Community / Influencer Marketing
                      </option>
                      <option value="Video Marketing">
                        Video Marketing
                      </option>

                      {/* Branding */}
                      <option value="Brand Strategy Positioning">
                        Brand Strategy / Positioning
                      </option>
                      <option value="Brand Identity Development">
                        Brand Identity Development
                      </option>
                      <option value="Brand Experience Design">
                        Brand Experience Design
                      </option>

                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                      <ChevronDown className="h-5 w-5 text-[#94A3B8]" />
                    </div>
                  </div>
                  {errors?.service && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.service.message}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                  Message <span className="font-normal text-red-500 text-sm">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Leave us a message"
                  rows={4}
                  className={`w-full resize-none rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                ></textarea>
                {errors?.message && (
                  <span className="mt-1 block text-[11px] text-red-500">{errors.message.message}</span>
                )}
              </div>

              {/* <div className="flex py-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                />
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1E293B] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}