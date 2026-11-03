"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  Clock,
  PhoneCall,
  Rocket,
  SendHorizonal,
  Sparkle,
  Loader2 // Added for loading state
} from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
// import ReCAPTCHA from "react-google-recaptcha"

// 1. Updated Schema to include the new optional 'company' and 'location' fields
const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(), // New non-mandatory field
  service: z.string().min(1, "Please select a service"),
  location: z.string().optional(), // New non-mandatory field
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

type EnquiryFormValues = z.infer<typeof enquirySchema>

export default function Enquiry() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const recaptchaRef = useRef<ReCAPTCHA>(null)

  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      service: "",
      location: "",
      message: "",
      website: "",
      formStart: "",
      source: "Project Enquiry Page", // Distinct source identifier
    },
  })

  // 3. Handle API Submission
  const onSubmit = async (data: EnquiryFormValues) => {
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
      <div className="h-full bg-[url('/images/bg7.avif')] bg-cover bg-no-repeat py-12">
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
                Enquire{" "}
                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-[length:200%_auto] bg-clip-text text-transparent">
                  Now
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
        <div className="grid container grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col pr-0 lg:pr-4 lg:mt-10">
            <span className="mb-3 block text-sm font-semibold tracking-wide text-orange-500">
              Project Enquiry
            </span>

            <h1 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              Let's build something <br className="hidden lg:block" /> amazing
              together.
            </h1>

            <p className="mb-6 md:mb-8 md:text-lg">
              Tell us about your project goals, timeline, and requirements. Our
              technical team will review your details and get back to you with a
              tailored approach.
            </p>

            <div className="mt-4 flex flex-col gap-4 lg:gap-8">
              <h3 className="text-xl font-semibold text-black">
                What happens next?
              </h3>

              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex size-12 md:size-14 lg:size-15 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-[#1E293B]">
                    1. We Review
                  </h4>
                  <p className="text-base leading-relaxed text-gray-800">
                    Our experts analyze your project brief and requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex size-12 md:size-14 lg:size-15 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-[#1E293B]">
                    2. We Connect
                  </h4>
                  <p className="text-base leading-relaxed text-gray-800">
                    We'll reach out within 24 hours to discuss the details.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex size-12 md:size-14 lg:size-15 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-[#1E293B]">
                    3. We Build
                  </h4>
                  <p className="text-base leading-relaxed text-gray-800">
                    We prepare a tailored strategy to fuel your digital growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Anti-bot honeypot field (hidden from users) */}
              <input
                type="text"
                {...register("website")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Personal Info Row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Full Name <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your name"
                    className={`w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  />
                  {errors?.name && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Phone Number <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    className={`w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  />
                  {errors?.phone && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              {/* Business Info Row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Email <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className={`w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  />
                  {errors?.email && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 flex items-center gap-1.5 text-[13px] font-semibold text-[#1E293B]">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    placeholder="Enter your company name"
                    className="w-full rounded-lg border border-transparent bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:border-blue-200 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  />
                </div>
              </div>

              {/* Project Requirements Row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Primary Interest <span className="font-normal text-red-500 text-sm">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className={`w-full cursor-pointer appearance-none rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] transition-all focus:ring-2 focus:outline-none ${errors.service ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
                  >
                    <option value="" disabled className="text-[#94A3B8]">Select service</option>
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
                  {errors?.service && (
                    <span className="mt-1 block text-[11px] text-red-500">{errors.service.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="location" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    {...register("location")}
                    placeholder="Enter your location"
                    className="w-full rounded-lg border border-transparent bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:border-blue-200 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-[#1E293B]">
                  Project Details <span className="font-normal text-red-500 text-sm">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Please describe your project goals, expected timeline, and any specific technical requirements..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-transparent bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:border-blue-200 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                ></textarea>
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
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1E293B] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <span>Request Project Proposal</span>
                    <SendHorizonal className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}