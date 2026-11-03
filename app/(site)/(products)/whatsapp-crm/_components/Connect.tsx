'use client'
import { motion } from "framer-motion";
import { Zap, GitBranch, Clock, ScrollText, MessageSquarePlus, UserPlus, Tag, Webhook, Check } from "lucide-react";
import Image from "next/image";

export function Connect() {
  return (
    <section
      id="automations"
      className="relative pb-16 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Connect with your <span className="text-[#009e46]">customers.</span> <br />Engage at scale.
            </h2>
            <p className="mt-5 text-base max-w-lg">
              Reach your audience directly on WhatsApp with Digital Fueled’s bulk messaging platform. Create and manage campaigns, share updates and promotions, and engage customers through fast, reliable WhatsApp communication—all from one powerful platform.
            </p>
            <ul className="mt-8 space-y-3 grid grid-cols-2">
              {[
                { icon: MessageSquarePlus, text: "Bulk Messaging." },
                { icon: Zap, text: "Campaign Management." },
                { icon: GitBranch, text: "Customer Engagement." },
                { icon: ScrollText, text: "Simplified with Digital Fueled." },
              ].map((b, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-black">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full ring ring-blue-200 text-[#0b37cb] bg-accent/10">
                    <Check size={16} />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Removed the blurry background layer since it was purely for dark mode */}
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <Image src='/images/wcrm/connect.png' width={500} height={500} alt="Connect" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
