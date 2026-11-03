"use client"

import { motion } from "framer-motion"
import {
    Sparkle,
    Home,
    Sparkles,
    Package,
    Info,
    Users,
    Briefcase,
    Mail,
    Send,
    Code2,
    Smartphone,
    Globe,
    FileText,
    MessageCircle,
    Share2,
    Search,
    Megaphone,
    Video,
    Target,
    Palette,
    Wand2,
    Bot,
    MessageSquare,
    CalendarClock,
    GraduationCap,
    ClipboardList,
    Gift,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../components/contact-from"
import { cn } from "@/lib/utils"
import WhatsAppApiIcon from "@/components/icons/whatsapp-icons"

type Node = { label: string; href?: string; icon?: React.ComponentType<{ className?: string }> };
type Section = { title: string; icon: React.ComponentType<{ className?: string }>; columns?: string; groups: { label?: string; items: Node[] }[] };

const primary: Node[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Clients", href: "/clients", icon: Users },
    { label: "Work", href: "/work", icon: Briefcase },
    { label: "Contact Us", href: "/contact", icon: Mail },
    { label: "Enquire Now", href: "/enquiry", icon: Send },
];

const services: Section = {
    title: "Services",
    icon: Sparkles,
    groups: [
        {
            label: "Development",
            items: [
                { label: "Website Design & Development", icon: Globe },
                { label: "Software Development", icon: Code2 },
                { label: "Mobile App Development", icon: Smartphone },
                { label: "Content Development Services", icon: FileText },
                { label: "WhatsApp API Solution", icon: MessageCircle },
            ],
        },
        {
            label: "Marketing",
            items: [
                { label: "Social Media Marketing", icon: Share2 },
                { label: "Search Engine Optimization (SEO)", icon: Search },
                { label: "Community / Influencer Marketing", icon: Megaphone },
                { label: "Video Marketing", icon: Video },
            ],
        },
        {
            label: "Branding",
            items: [
                { label: "Brand Strategy / Positioning", icon: Target },
                { label: "Brand Identity Development", icon: Palette },
                { label: "Brand Experience Design", icon: Wand2 },
            ],
        },
    ],
};

const products: Section = {
    title: "Products",
    icon: Package,
    columns: 'grid lg:grid-cols-2 gap-x-8',
    groups: [
        {
            items: [
                { label: "Chatbot", icon: Bot },
                { label: "Online Chat Platform", icon: MessageSquare },
                { label: "Appointment Scheduler", icon: CalendarClock },
                { label: "LMS / CRM", icon: GraduationCap },
                { label: "Admission CRM", icon: ClipboardList },
                { label: "Reward Platform", icon: Gift },
                { label: "WhatsApp CRM", icon: WhatsAppApiIcon },
            ],
        },
    ],
};


export default function Sitemap() {

    return (
        <>
            <div className="bg-[url('/images/bg4.avif')] bg-cover bg-no-repeat py-12">
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
                                Sitemap
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
                                A complete map of everything at Digital Fueled — services, products, and pages, laid out cleanly so you can find exactly what you need.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <main className="container py-14 md:py-24">
                {/* Primary nav */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                    {primary.map((item) => {
                        const Icon = item.icon!;
                        return (
                            <Link
                                key={item.label}
                                href={item.href!}
                                className="group flex flex-col items-start gap-3 rounded-xl ring ring-gray-200 bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:ring-brand/40 hover:shadow-elegant"
                            >
                                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                    <Icon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-semibold">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Services */}
                <SectionBlock section={services} accent />

                {/* Products */}
                <SectionBlock section={products} />
            </main>


            <ContactForm className="bg-gray-100" />
        </>
    )
}

function SectionBlock({ section, accent = false }: { section: Section; accent?: boolean }) {
  const Icon = section.icon;
  return (
    <section className="mt-10 lg:mt-20">
      <div className="flex items-center gap-4">
        <span
          className='flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white'
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
          <div className="mt-1 h-0.5 w-16 bg-brand-gradient" />
        </div>
      </div>

      <div className={`mt-8 grid gap-6 ${section.groups.length > 1 ? "md:grid-cols-3" : ""}`}>
        {section.groups.map((group, gi) => (
          <div
            key={gi}
            className="rounded-2xl ring ring-gray-200 bg-card p-3 md:p-6 shadow-soft transition-all hover:ring-brand/30 hover:shadow-elegant"
          >
            {group.label && (
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </h3>
              </div>
            )}
            <ul className={cn("space-y-1", section.columns)}>
              {group.items.map((it) => {
                const IIcon = it.icon;
                return (
                  <li key={it.label}>
                    <div className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-100 duration-300">
                      {IIcon && (
                        <span className="flex shrink-0 size-9 items-center justify-center rounded-md bg-blue-100 text-accent transition-colors duration-300 group-hover:bg-card">
                          <IIcon className="h-4 w-4" />
                        </span>
                      )}
                      <span className="text-base font-medium">{it.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}