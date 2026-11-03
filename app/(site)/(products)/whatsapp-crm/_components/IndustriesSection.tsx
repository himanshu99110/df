'use client'
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  CheckCheck,
  type LucideIcon
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/* ---------------------------------- types ---------------------------------- */

interface IndustryFeature {
  title: string;
}

interface Industry {
  id: string;
  label: string;
  heading: string;
  description: string;
  features: IndustryFeature[];
  image: string;
}

/* ---------------------------------- data ----------------------------------- */

const INDUSTRIES: Industry[] = [
  {
    id: "ecommerce",
    label: "E-commerce",
    heading: "E-commerce",
    description:
      "Manage customer interactions across the entire buying journey, from initial enquiry and sales engagement to orders, support, and follow-ups. Keep customer information organized and give your team a complete view of every relationship.",
    features: [
      { title: "Customer Management" },
      { title: "Enquiry Management" },
      { title: "Sales Management" },
      { title: "Order Management" },
      { title: "Customer Communication" },
      { title: "Follow-up Management" },
    ],
    image: '/images/wcrm/ecoms.png',
  },

  {
    id: "Education",
    label: "Education",
    heading: "Education",
    description:
      "Bring student, parent, and admission interactions together in one organized system. Manage enquiries, admissions, communication, follow-ups, and important updates while keeping your team aligned throughout the student journey.",
    features: [
      { title: "Student Management" },
      { title: "Admission Management" },
      { title: "Enquiry Tracking" },
      { title: "Parent Communication" },
      { title: "Follow-up Management" },
      { title: "Announcements" },
    ],
    image: '/images/wcrm/edu.png',
  },

  {
    id: "healthcare",
    label: "Healthcare",
    heading: "Healthcare",
    description:
      "Simplify patient communication and manage enquiries, appointments, records, and follow-ups more efficiently. Give your team a centralized view of patient interactions so they can deliver timely and consistent communication.",
    features: [
      { title: "Patient Management" },
      { title: "Appointment Management" },
      { title: "Enquiry Tracking" },
      { title: "Patient Communication" },
      { title: "Follow-up Management" },
      { title: "Alerts & Notifications" },
    ],
    image: '/images/wcrm/health.png',
  },

  {
    id: "real-estate",
    label: "Real Estate",
    heading: "Real Estate",
    description:
      "Manage property enquiries and sales leads throughout the entire customer journey. Capture new leads, organize their requirements, schedule follow-ups, and give your sales team a clear view of every opportunity from initial enquiry to conversion.",
    features: [
      { title: "Lead Management" },
      { title: "Lead Qualification" },
      { title: "Property Enquiries" },
      { title: "Site Visit Scheduling" },
      { title: "Follow-up Management" },
      { title: "Sales Pipeline" },
    ],
    image: '/images/wcrm/real-estate.png',
  },

  {
    id: "restaurants",
    label: "Restaurants",
    heading: "Restaurants & Cafes",
    description:
      "Build stronger customer relationships by managing enquiries, reservations, orders, feedback, and follow-ups from a single platform. Keep customer interactions organized and make it easier for your team to stay connected with every guest.",
    features: [
      { title: "Customer Management" },
      { title: "Enquiry Management" },
      { title: "Table Reservations" },
      { title: "Order Management" },
      { title: "Customer Feedback" },
      { title: "Promotions & Follow-ups" },
    ],
    image: '/images/wcrm/rest.png',
  },

  {
    id: "supermarkets",
    label: "Supermarkets",
    heading: "Supermarkets & Retail",
    description:
      "Create a more connected retail experience by organizing customer information, enquiries, sales, orders, and feedback in one place. Build lasting customer relationships while giving your team better visibility across every interaction.",
    features: [
      { title: "Customer Management" },
      { title: "Sales Management" },
      { title: "Loyalty Management" },
      { title: "Product Management" },
      { title: "Order Management" },
      { title: "Customer Feedback" },
    ],
    image: '/images/wcrm/market.png',
  },

  {
    id: "tech-companies",
    label: "Tech Companies",
    heading: "Tech Companies",
    description:
      "Manage leads, customer relationships, sales opportunities, and ongoing communication from a single platform. Give your sales and support teams a complete view of every customer interaction while keeping the entire journey organized from initial enquiry to long-term retention.",
    features: [
      { title: "Lead Management" },
      { title: "Customer Management" },
      { title: "Sales Pipeline" },
      { title: "Enquiry Management" },
      { title: "Customer Support" },
      { title: "Follow-up Automation" },
    ],
    image: '/images/wcrm/tech.png',
  },
];


export function IndustriesSection() {
  const [activeId, setActiveId] = useState<string>(INDUSTRIES[0]!.id);
  const active: Industry = INDUSTRIES.find((i) => i.id === activeId) ?? INDUSTRIES[0]!;

  const selectIndustry = (id: string) => {
    setActiveId(id);
  };

  return (
    <section id="industries" className="relative overflow-hidden pb-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(37,211,102,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Built Around Your <span className="text-[#009e46]">Business</span>
          </h2>
          <p className="mt-4 text-lg">
            Our CRM helps businesses
            organize leads, manage customer relationships, streamline sales, and stay
            connected with customers through workflows that fit the way they work.
          </p>

        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center w-max mx-auto p-2 rounded-full bg-white ring ring-gray-200">
            {INDUSTRIES.map((ind) => {
              const isActive = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  onClick={() => selectIndustry(ind.id)}
                  className={`shrink-0 rounded-full ring px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                    ? "ring-[#0b37cb] bg-[#0b37cb] text-white"
                    : "ring-gray-200 bg-white text-slate-600 hover:ring-[#0b37cb]/50 hover:text-gray-900"
                    }`}
                >
                  {ind.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ring ring-gray-200 bg-[#F7FBF8] rounded-3xl p-6">
          {/* Left: copy + features */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-2xl font-semibold tracking-tight sm:text-2xl">WhatsApp business for {active.heading}</h3>
              <p className="mt-4 text-[15px] leading-relaxed">{active.description}</p>

              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {active.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
                    className="flex gap-3"
                  >
                    <div className="grid size-5 shrink-0 place-items-center rounded-full ring ring-blue-200 text-[#0b37cb] bg-accent/10">
                      <Check size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{f.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="w-full h-full rounded-2xl bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <Image
                  src={active.image}
                  alt={active.heading}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
