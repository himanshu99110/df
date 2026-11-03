"use client"

import React, { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
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

interface EnquiryModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    // const [hasInteracted, setHasInteracted] = useState(false)
    // const recaptchaRef = useRef<ReCaptchaType>(null)

    const {
        register,
        handleSubmit,
        reset,
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
            source: "Quick Enquiry Modal",
        },
    })

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
                reset()
                // setHasInteracted(false)
                onClose()
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
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md md:min-w-120 overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3.5 right-3 rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-900"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="grid grid-cols-1 gap-0">
                            <div>
                                <div className="mb-6">
                                    <h3 className="font-geist text-2xl font-semibold tracking-tight text-gray-900">
                                        Quick Enquiry
                                    </h3>
                                    <p className="mt-1 text-sm text-black">
                                        Leave your details and we&apos;ll get back to you shortly.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    // onFocus={() => setHasInteracted(true)}
                                    // onClick={() => setHasInteracted(true)}
                                    className="space-y-4"
                                >
                                    {/* Anti-bot honeypot field (hidden from users) */}
                                    <input
                                        type="text"
                                        {...register("website")}
                                        className="hidden"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-900">
                                            Name <span className="font-normal text-red-500 text-sm">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            {...register("name")}
                                            className={`w-full rounded-md ring px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black ${errors.name ? "ring-red-500 bg-red-50" : "ring-gray-200"}`}
                                        />
                                        {errors?.name && (
                                            <span className="text-[10px] text-red-500">{errors.name.message}</span>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                                                Email <span className="font-normal text-red-500 text-sm">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                {...register("email")}
                                                className={`w-full rounded-md ring px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black ${errors.email ? "ring-red-500 bg-red-50" : "ring-gray-200"}`}
                                            />
                                            {errors?.email && (
                                                <span className="text-[10px] text-red-500">{errors.email.message}</span>
                                            )}
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="phone" className="text-sm font-semibold text-gray-900">
                                                Phone <span className="font-normal text-red-500 text-sm">*</span>
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                {...register("phone")}
                                                className={`w-full rounded-md ring px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black ${errors.phone ? "ring-red-500 bg-red-50" : "ring-gray-200"}`}
                                            />
                                            {errors?.phone && (
                                                <span className="text-[10px] text-red-500">{errors.phone.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label htmlFor="service" className="text-sm font-semibold text-gray-900">
                                            Primary Interest <span className="font-normal text-red-500 text-sm">*</span>
                                        </label>
                                        <select
                                            id="service"
                                            {...register("service")}
                                            className={`w-full rounded-md ring px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black bg-white ${errors.service ? "ring-red-500 bg-red-50" : "ring-gray-200"}`}
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
                                            <span className="text-[10px] text-red-500">{errors.service.message}</span>
                                        )}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="message" className="text-sm font-semibold text-gray-900">
                                            How can we help? <span className="font-normal text-red-500 text-sm">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            {...register("message")}
                                            placeholder="Briefly describe your project..."
                                            className={`w-full resize-none rounded-md ring px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black ${errors.message ? "ring-red-500 bg-red-50" : "ring-gray-200"}`}
                                        />
                                        {errors?.message && (
                                            <span className="text-[10px] text-red-500">{errors.message.message}</span>
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

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-[14px] font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                                                </>
                                            ) : (
                                                "Submit Enquiry"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}