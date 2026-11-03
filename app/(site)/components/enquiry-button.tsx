"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, MessageSquare, CircleQuestionMark, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EnquiryButton() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Simulate API call or actual submission logic here
    setIsSubmitted(true)

    // Auto-close after showing success message briefly
    setTimeout(() => {
      setIsEnquiryOpen(false)
      // Reset form submission state after it closes so it's ready for next time
      setTimeout(() => setIsSubmitted(false), 300)
    }, 2000)
  }

  return (
    <>
      {/* The Beautiful Trigger Button */}
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsEnquiryOpen(true)}
        className="group fixed bottom-10 left-10 z-999 inline-flex animate-[bounce_3s_infinite] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1e5bce] p-4 text-lg font-semibold text-white shadow-[0_8px_30px_rgb(30,91,206,0.3)] transition-all hover:shadow-[0_8px_30px_rgb(30,91,206,0.5)] focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        <div className="absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>

        <CircleQuestionMark className="relative z-20 h-5 w-5" />
      </motion.button> */}
      <div className="fixed bottom-10 left-10 z-40 flex flex-col-reverse items-start gap-4">
        {/* Main Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn("group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1e5bce] text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-[0_8px_30px_rgb(30,91,206,0.5)]  focus:outline-none ", !isMenuOpen && 'animate-[bounce_3s_infinite]')}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <CircleQuestionMark className="h-6 w-6" />
            )}
          </motion.div>
        </motion.button>

        {/* Menu Options */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mb-2 flex origin-bottom-left flex-col gap-4"
            >
              {/* Enquiry Option */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsEnquiryOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1e5bce] text-white shadow-md transition-colors hover:bg-blue-700"
                >
                  <FileText className="h-5 w-5" />
                </motion.button>
                <span className="rounded-md bg-white/50 px-3 py-1.5 text-sm font-medium text-slate-800 drop-shadow-sm backdrop-blur-sm">
                  Enquiry
                </span>
              </div>

              {/* WhatsApp Option */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    // Replace this URL with your actual WhatsApp link
                    window.open("https://wa.me/", "_blank")
                    setIsMenuOpen(false)
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-colors hover:bg-[#20bd5a]"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.347-.272.271-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </motion.button>
                <span className="rounded-md bg-white/50 px-3 py-1.5 text-sm font-medium text-slate-800 drop-shadow-sm backdrop-blur-sm">
                  WhatsApp
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isEnquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEnquiryOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsEnquiryOpen(false)}
                className="absolute top-4 right-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:ring-2 focus:ring-slate-200 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                        Quick Enquiry
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        Leave your details below and our team will get back to
                        you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all outline-none placeholder:text-slate-400 focus:border-[#1e5bce] focus:bg-white focus:ring-4 focus:ring-[#1e5bce]/10"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all outline-none placeholder:text-slate-400 focus:border-[#1e5bce] focus:bg-white focus:ring-4 focus:ring-[#1e5bce]/10"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 234 567 890"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all outline-none placeholder:text-slate-400 focus:border-[#1e5bce] focus:bg-white focus:ring-4 focus:ring-[#1e5bce]/10"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                          How can we help?
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your project..."
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all outline-none placeholder:text-slate-400 focus:border-[#1e5bce] focus:bg-white focus:ring-4 focus:ring-[#1e5bce]/10"
                        />
                      </div>

                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e5bce] py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
                        >
                          Submit Enquiry
                          <Send className="ml-1 h-4 w-4" />
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-slate-900">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500">
                      We'll be in touch with you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `,
        }}
      />
    </>
  )
}
