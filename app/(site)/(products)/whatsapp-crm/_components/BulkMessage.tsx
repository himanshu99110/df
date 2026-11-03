'use client'
import { AnimatedButton } from "@/components/common/AnimatedButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Tag, SlidersHorizontal, FileSpreadsheet, Upload, Download, Link2, MessageSquarePlus, Zap, GitBranch, BookUser, Send, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Lead", color: "#3b82f6" },
  { name: "Prospect", color: "#25D366" },
  { name: "Customer", color: "#f59e0b" },
  { name: "VIP", color: "#8b5cf6" },
  { name: "Other", color: "#94a3b8" },
  { name: "+ Custom", color: "#0ea5e9" },
];

const bullets = [
  { icon: Users, text: "Full records: name, normalized phone, email, company, avatar." },
  { icon: SlidersHorizontal, text: "Custom fields per account, plus colored tags for fast segmentation." },
  { icon: FileSpreadsheet, text: "CSV and Excel (xlsx) import & export with duplicate merge on phone." },
  { icon: Link2, text: "Notes and linked deals on every contact record." },
];

export function BulkMessage() {
  return (
    <section id="contacts" className="relative pb-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <Image src='/images/wcrm/bulk.png' width={500} height={500} alt="Connect" className="w-full" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Send Bulk WhatsApp to
              <br />multiple contacts in
              <br /><span className="text-[#009e46]">3 simple steps.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg">
              Then get replies, engage, and convert
            </p>
            <ul className="my-6 flex items-start flex-col gap-3">
              {[
                { icon: MessageSquarePlus, text: "Bulk Messaging." },
                { icon: BookUser, text: "Upload Numbers." },
                { icon: Send, text: "Add Message & Send." },
              ].map((b, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-black">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full ring ring-blue-200 text-[#0b37cb] bg-accent/10">
                    <Check size={16} />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
            <AnimatedButton variant="outline" href="#contact">
              Start Now
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
