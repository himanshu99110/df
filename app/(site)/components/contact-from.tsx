"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
// import type ReCaptchaType from "react-google-recaptcha"
// const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
//     ssr: false,
// }) as any

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().optional(),
    website: z.string().optional(),
    formStart: z.string().optional(),
    source: z.string().optional(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_content: z.string().optional(),
    utm_term: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm({
    className,
}: {
    className?: string
}) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    // const [hasInteracted, setHasInteracted] = useState(false)
    // const recaptchaRef = useRef<ReCaptchaType>(null)

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
            website: "", // Honeypot (must stay empty)
            formStart: "", // Left blank to bypass backend speed trap
            source: "Consultation Form",
        },
    })

    // 2. Updated onSubmit to handle the live API fetch and UTM data
    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true)

        // const token = recaptchaRef.current?.getValue()
        // if (!token) {
        //     toast.error("Please complete the reCAPTCHA challenge.")
        //     setIsSubmitting(false)
        //     return
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
                // recaptchaRef.current?.reset()
                setIsSubmitting(false)
            }
        } catch (error) {
            console.error("Submission error:", error)
            toast.error("Failed to send message.")
            // recaptchaRef.current?.reset()
            setIsSubmitting(false)
        }
    }

    return (
        <section className={cn("w-full bg-white py-10 pb-14 lg:py-20 text-[#111111]", className)} id="contact">
            <div className="container">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_2fr] lg:gap-0">
                    <div className="flex flex-col lg:pt-4">
                        <h2 className="lg:mb-2 font-geist text-[28px] font-semibold tracking-tighter md:text-[40px] lg:text-5xl">
                            Have a Project?
                        </h2>
                        <p className="mb-6 md:mb-10 bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text font-geist text-[28px] font-semibold tracking-tighter text-transparent  md:text-[40px] lg:text-5xl">
                            Let&apos;s talk!
                        </p>

                        <ul className="mb-8 md:mb-12 flex flex-col gap-3 font-geist">
                            {[
                                "NDA? Absolutely just ask.",
                                "We'll respond in 24 hours fast & focused.",
                                "Work with senior UX experts, not juniors.",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-[15px] font-medium text-gray-800"
                                >
                                    <svg
                                        className="h-5 w-5 shrink-0 text-[#333333]"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.707 13.707L18.414 9.000l-1.414-1.414-6.293 6.293-3.293-3.293-1.414 1.414 4.707 4.707z" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="w-full rounded-xl ring ring-gray-300 bg-white p-4 font-geist shadow-[0_20px_30px_rgba(0,0,0,0.05)] lg:px-10 lg:pt-6 lg:pb-8"
                    >
                        <div className="mb-8 text-center text-gray-900">
                            <h3 className="text-2xl font-semibold">
                                Let&apos;s discuss your project.
                            </h3>
                            <p className="mt-2 text-[14px] text-gray-900">
                                Share your details, and we’ll reply on WhatsApp.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            // onFocus={() => setHasInteracted(true)}
                            // onClick={() => setHasInteracted(true)}
                            className="space-y-5"
                        >
                            {/* 3. Anti-bot honeypot field (hidden from users) */}
                            <input
                                type="text"
                                {...register("website")}
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {/* Your Name */}
                                <div className="flex flex-col space-y-1.5">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-gray-800"
                                    >
                                        Full Name <span className="font-normal text-red-500 text-sm">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        {...register("name")}
                                        className={`w-full rounded border bg-white px-3 py-3 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500 ${errors?.name
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
                                        Email Address <span className="font-normal text-red-500 text-sm">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter Your Email"
                                        {...register("email")}
                                        className={`w-full rounded border bg-white px-3 py-3 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500 ${errors?.email
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
                                        Phone Number <span className="font-normal text-red-500 text-sm">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter Phone Number"
                                        {...register("phone")}
                                        className={`w-full rounded border bg-white px-3 py-3 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500 ${errors?.phone
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
                                        What are you looking for? <span className="font-normal text-red-500 text-sm">*</span>
                                    </label>
                                    <select
                                        id="service"
                                        {...register("service")}
                                        className={`w-full rounded border bg-white px-3 py-3 text-[13px] text-gray-500 transition outline-none focus:border-blue-500 ${errors?.service
                                            ? "border-red-500 bg-red-50"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <option value="">Select Service..</option>
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
                                    Project Brief <span className="font-normal text-red-500 text-sm">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    placeholder="Enter Your Message"
                                    {...register("message")}
                                    className="w-full resize-y rounded border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-900 placeholder-gray-400 transition outline-none focus:border-blue-500"
                                />
                                {errors?.message && (
                                    <span className="text-[10px] text-red-500">
                                        {errors.message.message}
                                    </span>
                                )}
                            </div>

                            {/* {hasInteracted && (
                                <div className="flex py-2">
                                    <ReCAPTCHA
                                        ref={recaptchaRef as any}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                                    />
                                </div>
                            )} */}

                            {/* 4. Updated Submit Button with Loading State */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1e5bce] py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}