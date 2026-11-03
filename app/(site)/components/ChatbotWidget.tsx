"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Phone, RefreshCw, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import dynamic from "next/dynamic"
// import type ReCaptchaType from "react-google-recaptcha"
// const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
//   ssr: false,
// }) as any

// 1. Updated Form Schema matching the live API requirements
const chatFormSchema = z.object({
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

type ChatFormValues = z.infer<typeof chatFormSchema>

// --- Chat Types ---
type Option = {
  label: string
  action: string
}

type Message = {
  id: string
  text: string | React.ReactNode
  sender: "bot" | "user"
  options?: Option[]
  isForm?: boolean
  timestamp: string
}

// Helper to get formatted time (e.g., "10:30 AM")
const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

// Generate a safe unique ID
const generateId = () => {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2, 9)
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    text: "Hi there! 👋 I'm the Digital Fueled assistant. How can I help you today?",
    sender: "bot",
    timestamp: getCurrentTime(),
    options: [
      { label: "Explore Services", action: "EXPLORE_SERVICES" },
      { label: "Talk to Sales", action: "TALK_SALES" },
    ],
  },
]

export default function Chatbot() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  // const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  // const recaptchaRef = useRef<ReCaptchaType>(null)
  // const [hasInteracted, setHasInteracted] = useState(false)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Restart Chat
  const restartChat = () => {
    setMessages([{ ...INITIAL_MESSAGES[0], timestamp: getCurrentTime() }])
  }

  // Handle User Clicks on Options
  const handleOptionClick = async (option: Option) => {
    addMessage({
      id: generateId(),
      text: option.label,
      sender: "user",
      timestamp: getCurrentTime(),
    })

    setMessages((prev) =>
      prev.map((msg) =>
        msg.sender === "bot" ? { ...msg, options: undefined } : msg
      )
    )

    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsTyping(false)

    switch (option.action) {
      case "EXPLORE_SERVICES":
        addMessage({
          id: generateId(),
          text: "Awesome! What kind of digital product are you looking to build or grow?",
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Website / Web App", action: "SERVICE_WEB" },
            { label: "Mobile App", action: "SERVICE_MOBILE" },
            { label: "Custom SaaS", action: "SERVICE_SAAS" },
            { label: "Digital Marketing", action: "SERVICE_MARKETING" },
          ],
        })
        break

      case "SERVICE_WEB":
        addMessage({
          id: generateId(),
          text: "We build fast, scalable, and SEO-friendly websites and web applications tailored to your business goals. From engaging landing pages to complex e-commerce solutions, we've got you covered. Would you like to get a custom quote?",
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Get a Quote", action: "SHOW_FORM" },
            { label: "Talk to Sales", action: "TALK_SALES" },
            { label: "View other services", action: "EXPLORE_SERVICES" },
          ],
        })
        break

      case "SERVICE_MOBILE":
        addMessage({
          id: generateId(),
          text: "We develop high-performance native and cross-platform mobile apps for iOS and Android (using Flutter/React Native) to help you reach customers seamlessly on the go. Ready to discuss your app idea?",
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Get a Quote", action: "SHOW_FORM" },
            { label: "Talk to Sales", action: "TALK_SALES" },
            { label: "View other services", action: "EXPLORE_SERVICES" },
          ],
        })
        break

      case "SERVICE_SAAS":
        addMessage({
          id: generateId(),
          text: "We design and develop secure, cloud-based SaaS platforms built for scalability. We handle everything from multi-tenant architecture to complex API integrations. Shall we connect to discuss your SaaS vision?",
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Get a Quote", action: "SHOW_FORM" },
            { label: "Talk to Sales", action: "TALK_SALES" },
            { label: "View other services", action: "EXPLORE_SERVICES" },
          ],
        })
        break

      case "SERVICE_MARKETING":
        addMessage({
          id: generateId(),
          text: "Our data-driven marketing strategies (SEO, Google Ads, Social Media) are designed to attract the right audience, boost your ROI, and scale your revenue. Want to see how we can grow your brand?",
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Get a Quote", action: "SHOW_FORM" },
            { label: "Talk to Sales", action: "TALK_SALES" },
            { label: "View other services", action: "EXPLORE_SERVICES" },
          ],
        })
        break

      case "SHOW_FORM":
        addMessage({
          id: generateId(),
          text: "Great! Let's grab a few quick details so our experts can prepare a tailored quote and get in touch with you.",
          sender: "bot",
          timestamp: getCurrentTime(),
          isForm: true,
        })
        break

      case "TALK_SALES":
        addMessage({
          id: generateId(),
          text: "Sure! You can drop your details here, or reach out to us directly on WhatsApp for an immediate response.",
          sender: "bot",
          timestamp: getCurrentTime(),
          isForm: true,
        })
        break

      default:
        addMessage({
          id: generateId(),
          text: "I'm not sure how to handle that. Let's start over or connect with a human.",
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Start Over", action: "EXPLORE_SERVICES" },
            { label: "WhatsApp Us", action: "WHATSAPP" },
          ],
        })
    }
  }

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg])
  }

  // 2. Updated Chatbot Submission Handler
  const onFormSubmit = async (data: ChatFormValues) => {
    // setIsFormSubmitting(true)

    // const token = recaptchaRef.current?.getValue()
    // if (!token) {
    //   toast.error("Please complete the reCAPTCHA challenge.")
    //   setIsFormSubmitting(false)
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
      data.source = "Chatbot Form" // Distinct source tag

      const response = await fetch(
        "https://app.digitalfueled.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            // recaptchaToken: token,
          }),
        }
      )

      const result = await response.json()

      if (response.ok && result.success) {
        // setHasInteracted(false)
        setIsOpen(false)
        // Hide the form message and show success bot text
        setMessages((prev) =>
          prev.map((msg) => (msg.isForm ? { ...msg, isForm: false } : msg))
        )
        addMessage({
          id: generateId(),
          text: `Thanks, ${data.name}! Our team has received your brief and will reach out to you at ${data.email} shortly. Have a great day!`,
          sender: "bot",
          timestamp: getCurrentTime(),
          options: [
            { label: "Ask something else", action: "EXPLORE_SERVICES" },
          ],
        })

        // Push user to thank you page
        router.push("/thank-you")
      } else {
        toast.error(
          result.error || "Message sent successfully! We will be in touch soon."
        )
        // setIsFormSubmitting(false)
        // recaptchaRef.current?.reset()
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Failed to send message.")
      // recaptchaRef.current?.reset()
      // setIsFormSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/+917838152753?text=Hi!%20I%20am%20looking%20for%20digital%20services.",
      "_blank"
    )
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed right-6 bottom-6 z-50 hidden lg:block">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent p-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
              aria-label="Open Chat"
            >
              <span className="pointer-events-none absolute right-16 mr-2 rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                Have a question?
                <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 transform bg-gray-800 text-white"></div>
              </span>
              <svg
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 100 100"
                className="size-full object-contain"
              >
                <g>
                  <path
                    d="m87.019 45.176-3.686-1.842C83.333 24.922 68.408 10 50 10c-18.41 0-33.334 14.922-33.334 33.334l-3.684 1.842C11.342 45.996 10 48.168 10 50v6.667c0 1.832 1.342 4.004 2.982 4.824l3.684 1.842h5V43.334C21.666 27.709 34.377 15 50 15c15.622 0 28.333 12.709 28.333 28.334V70c0 8.284-6.715 15-15 15h-10v-5h-6.667v10h16.667c11.045 0 20-8.955 20-20v-6.667l3.686-1.842c1.64-.82 2.981-2.992 2.981-4.824V50c0-1.832-1.341-4.004-2.981-4.824z"
                    fill="#ffffff"
                    opacity="1"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    d="M63.333 35H52.5v-7.084c1.966-.67 3.333-2.09 3.333-3.75C55.833 21.865 53.223 20 50 20s-5.834 1.865-5.834 4.166c0 1.66 1.367 3.084 3.334 3.75V35H36.666c-5.52 0-10 4.479-10 10v13.333C26.666 67.532 34.135 75 43.334 75h13.333c9.199 0 16.666-7.468 16.666-16.667V45c0-5.521-4.479-10-10-10zM38.334 51.667v-3.333a3.333 3.333 0 1 1 6.666 0v3.333A3.331 3.331 0 0 1 41.666 55a3.33 3.33 0 0 1-3.332-3.333zM58.333 65l-6.666 1.667h-3.333L41.666 65v-3.333h16.667zm3.334-13.333A3.331 3.331 0 0 1 58.333 55 3.33 3.33 0 0 1 55 51.667v-3.333a3.333 3.333 0 1 1 6.667 0z"
                    fill="#ffffff"
                    opacity="1"
                    data-original="#000000"
                    className=""
                  ></path>
                </g>
              </svg>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed right-6 bottom-6 z-50 flex h-[600px] max-h-[85vh] w-[415px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="flex items-center justify-between bg-linear-to-r from-[#0091DA] to-[#080C5E] p-4 text-white">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-white/20 bg-white">
                  <AvatarImage
                    src="/images/logo.png"
                    alt="Digital Fueled"
                    className="object-contain p-1"
                  />
                  <AvatarFallback className="bg-white text-sm font-bold text-[#080C5E]">
                    DF
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-gra text-[15px] leading-tight font-bold">
                    Digital Fueled
                  </h3>
                  <p className="text-[11px] text-white/80">
                    Online | Ready to help
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={restartChat}
                  title="Restart Chat"
                  className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-20">
              <div className="flex flex-col gap-5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex w-full flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed shadow-sm ${
                          msg.sender === "user"
                            ? "rounded-tr-sm bg-[#1e5bce] text-white"
                            : "rounded-tl-sm border border-gray-100 bg-white text-gray-800"
                        }`}
                      >
                        {msg.text}
                      </motion.div>
                      <span className="mt-1 px-1 text-[10px] font-medium text-gray-400">
                        {msg.timestamp}
                      </span>
                    </div>

                    {msg.options && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-2 flex flex-wrap gap-2"
                      >
                        {msg.options.map((opt) => (
                          <button
                            key={opt.action}
                            onClick={() => {
                              if (opt.action === "WHATSAPP") openWhatsApp()
                              else handleOptionClick(opt)
                            }}
                            className="rounded-full border border-[#1e5bce] bg-white px-3 py-1.5 text-[13px] font-medium text-[#1e5bce] shadow-sm transition-colors hover:bg-[#1e5bce] hover:text-white"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {msg.isForm && (
                      <ChatForm
                        onSubmit={onFormSubmit}
                        onWhatsApp={openWhatsApp}
                        // recaptchaRef={recaptchaRef}
                        // hasInteracted={hasInteracted}
                        // isFormSubmitting={isFormSubmitting}
                        // setHasInteracted={setHasInteracted}
                      />
                    )}
                  </div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex max-w-[85%] items-center gap-1 rounded-2xl rounded-tl-sm border border-gray-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "300ms" }}
                    />
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="absolute bottom-0 w-full border-t border-gray-100 bg-white p-3 text-center">
              <span className="text-[11px] font-medium text-gray-400">
                ⚡ Powered by Digital Fueled
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// 3. Updated Internal ChatForm to support isSubmitting Promise resolution
function ChatForm({
  onSubmit,
  onWhatsApp,
  // recaptchaRef,
  // hasInteracted,
  // isFormSubmitting,
  // setHasInteracted,
}: {
  onSubmit: (data: ChatFormValues) => Promise<void>
  onWhatsApp: () => void
  // recaptchaRef: React.RefObject<any>
  // hasInteracted: boolean
  // isFormSubmitting: boolean
  // setHasInteracted: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChatFormValues>({
    resolver: zodResolver(chatFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      website: "",
      formStart: "",
    },
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-2 w-full max-w-[90%] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-2">
        <span className="text-[12px] font-bold text-gray-700 uppercase">
          Project Details
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onFocus={() => setHasInteracted(true)}
        // onClick={() => setHasInteracted(true)}
        className="flex flex-col gap-2.5 p-4"
      >
        {/* Anti-bot honeypot field (hidden from users) */}
        <input
          type="text"
          {...register("website")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name */}
        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] transition-colors outline-none focus:border-[#1e5bce] focus:bg-white"
          />
          {errors.name && (
            <span className="mt-1 block text-[10px] text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] transition-colors outline-none focus:border-[#1e5bce] focus:bg-white"
          />
          {errors.email && (
            <span className="mt-1 block text-[10px] text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] transition-colors outline-none focus:border-[#1e5bce] focus:bg-white"
          />
          {errors.phone && (
            <span className="mt-1 block text-[10px] text-red-500">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Service Dropdown (Synced with main form options) */}
        <div>
          <select
            {...register("service")}
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] text-gray-500 transition-colors outline-none focus:border-[#1e5bce] focus:bg-white"
          >
            <option value="">Select Service..</option>
            <option value="website-design-development">
              Website Design & Development
            </option>
            <option value="software-development">Software Development</option>
            <option value="mobile-app-development">
              Mobile App Development
            </option>
            <option value="content-development-services">
              Content Development Services
            </option>
            <option value="whatsapp-api-solution">WhatsApp API Solution</option>
            <option value="social-media-marketing">
              Social Media Marketing
            </option>
            <option value="search-engine-optimization">
              Search Engine Optimization (SEO)
            </option>
            <option value="community-influencer-marketing">
              Community / Influencer Marketing
            </option>
            <option value="video-marketing">Video Marketing</option>
            <option value="brand-strategy-positioning">
              Brand Strategy / Positioning
            </option>
            <option value="brand-identity-development">
              Brand Identity Development
            </option>
            <option value="brand-experience-design">
              Brand Experience Design
            </option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <span className="mt-1 block text-[10px] text-red-500">
              {errors.service.message}
            </span>
          )}
        </div>

        {/* Message / Brief */}
        <div>
          <textarea
            {...register("message")}
            rows={2}
            placeholder="Project Brief (Optional)"
            className="w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] transition-colors outline-none focus:border-[#1e5bce] focus:bg-white"
          />
        </div>
        {/* {hasInteracted && (
          <div className="flex py-2">
            <ReCAPTCHA
              ref={recaptchaRef as any}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            />
          </div>
        )} */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-[#1e5bce] py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-3 w-3 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Details <Send className="h-3 w-3" />
            </>
          )}
        </button>

        <div className="relative mt-2 flex items-center justify-center py-1">
          <span className="absolute bg-white px-2 text-[10px] font-medium text-gray-400">
            OR
          </span>
          <div className="h-px w-full bg-gray-200" />
        </div>

        <button
          type="button"
          onClick={onWhatsApp}
          className="flex w-full items-center justify-center gap-2 rounded-md border border-green-500 bg-green-50 py-2.5 text-[13px] font-bold text-green-700 transition-colors hover:bg-green-500 hover:text-white active:scale-[0.98]"
        >
          <Phone className="h-3 w-3" /> Chat on WhatsApp
        </button>
      </form>
    </motion.div>
  )
}
