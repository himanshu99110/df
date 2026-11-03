'use client'

import { motion } from "framer-motion";
import { User, Mail, Building2, Clock, ArrowRight } from "lucide-react";

export function QuickContact() {
    return (
        <section className="relative py-16 overflow-hidden scroll-mt-16" id="contact">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-150 h-150 bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-125 h-125 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Let's get your account <br />
                            <span className="text-[#009e46]">
                                ready to scale.
                            </span>
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Whether you need to top up your credits or set up a new campaign, our team is here to ensure your WhatsApp communications never hit a roadblock. Drop your details, and we'll handle the rest.
                        </p>
                    </motion.div>

                    {/* Right Column: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-slate-200/50">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                                placeholder="Enter your phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Type Select */}
                                    <div>
                                        <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                                            Type of Business
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Building2 className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <select
                                                id="type"
                                                className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none"
                                                required
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select</option>
                                                <option value="individual">Individual</option>
                                                <option value="Business">Business</option>
                                                <option value="startup">Startup</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {/* Custom Dropdown Arrow */}
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 px-4 rounded-xl font-medium hover:bg-blue-600 transition-all"
                                >
                                    Request Callback
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>

                            {/* The required Quick Support Text */}
                            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <p className="text-sm font-medium text-emerald-800 leading-relaxed">
                                    <span className="font-bold">Quick Support:</span> Our Sales Team will connect with you within 2 hours to assist with your recharge.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}