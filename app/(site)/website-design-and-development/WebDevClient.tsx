"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import CartIcon from "@/components/icons/cart-icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle,
  Code2Icon,
  HeartHandshake,
  Sparkle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "../components/contact-from"
import HorizontalScroll from "../components/horizontal-scroll"
import HowItsWork from "../components/how-its-work"
import TechStackSection from "../components/teach-stack-section"

const featuresData = [
  {
    title: "Customized Web Solutions",
    description:
      "A top-tier agency provides tailor-made web solutions designed to meet your specific business needs. Whether you need a corporate website, e-commerce platform, or custom web application, they create solutions that align with your goals.",
    icon: BadgeCheck,
    colSpan: "md:col-span-4",
  },
  {
    title: "Mobile-Optimized & Responsive Designs",
    description:
      "With the growing number of mobile users, a website must be mobile-friendly, fast-loading, and highly responsive. Delhi’s agencies ensure seamless performance across all devices.",
    icon: BadgeCheck,
    colSpan: "md:col-span-4",
  },
  {
    title: "SEO Optimized",
    description:
      "A website is not just about design; it must be search engine optimized (SEO-friendly) to rank higher on Google. Leading agencies incorporate SEO strategies, content marketing, and social media integration to enhance visibility.",
    icon: BadgeCheck,
    colSpan: "md:col-span-4",
  },
  {
    title: "Expertise in the Latest Technologies",
    description:
      "Delhi’s top web developers are proficient in cutting-edge technologies like:",
    icon: BadgeCheck,
    colSpan: "md:col-span-4",
    features: [
      "Front-end: React.js, Angular, Vue.js",
      "Back-end: Node.js, Python, Laravel, PHP",
      "CMS Development: WordPress, Joomla, Drupal",
      "E-commerce Solutions: Shopify, WooCommerce, Magento",
    ],
  },
  {
    title: "High-Performance & Secure Websites",
    description:
      "Security is a priority for any business. A top web agency in Delhi ensures:",
    icon: BadgeCheck,
    colSpan: "md:col-span-4",
    features: [
      "SSL encryption for data protection",
      "Fast page loading speed for better user experience",
      "Regular security updates and maintenance",
    ],
  },
  {
    title: "Reliable Support & Maintenance",
    description:
      "A good website requires regular updates to stay relevant. Delhi-based agencies provide post-launch support, troubleshooting, and website upgrades to ensure smooth operation.",
    icon: BadgeCheck,
    colSpan: "md:col-span-4",
  },
]

const whyChooseGeneral = [
  {
    title: "E-Commerce",
    desc: "High-performance online stores with advanced features",
    icon: CartIcon,
  },
  {
    title: "Corporate & Startups",
    desc: "Engaging business websites with branding strategies",
    icon: Briefcase,
  },
  {
    title: "Healthcare & Education",
    desc: "Secure platforms for seamless user experience",
    icon: HeartHandshake,
  },
  {
    title: "Real Estate & Travel",
    desc: "Interactive portals with rich visuals and booking options",
    icon: Building2,
  },
]

const capabilitiesData = [
  {
    id: "cost-effective-solutions",
    title: "Cost-Effective Solutions",
    content:
      "Delhi NCR offers competitive pricing compared to other metro cities, making it an ideal location for businesses looking for affordable yet high-quality web development services.",
  },
  {
    id: "skilled-professionals",
    title: "Skilled & Experienced Professionals",
    content:
      "The region is home to top IT talent, including web developers, UI/UX designers, and digital marketing experts, ensuring that you get cutting-edge solutions.",
  },
  {
    id: "custom-website-development",
    title: "Custom Website Development",
    content:
      "A professional web development company can create custom, scalable, and feature-rich websites tailored to your specific business needs.",
  },
  {
    id: "latest-technologies",
    title: "Latest Technologies & Trends",
    content:
      "Companies in Delhi NCR are well-versed in the latest technologies like React, Angular, Node.js, Laravel, AI-powered development, and more, ensuring modern and future-proof websites.",
  },
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing Support",
    content:
      "Most web development firms in Delhi NCR provide additional services like SEO, PPC, and social media marketing, helping you improve online visibility and generate leads.",
  },
  {
    id: "responsive-websites",
    title: "Mobile-Friendly & Responsive Websites",
    content:
      "With a growing number of mobile users, web development companies ensure that your website is fully responsive, fast-loading, and mobile-optimized.",
  },
  {
    id: "faster-turnaround",
    title: "Faster Turnaround Time",
    content:
      "Due to the availability of a large workforce and advanced development methodologies, businesses can expect quicker project completion without compromising quality.",
  },
  {
    id: "support-maintenance",
    title: "Post-Development Support & Maintenance",
    content:
      "Many companies provide ongoing website maintenance, security updates, and technical support, ensuring smooth functionality.",
  },
  {
    id: "ecommerce-cms",
    title: "E-Commerce & CMS Expertise",
    content:
      "Whether you need an e-commerce website (Shopify, WooCommerce, Magento) or a CMS-based website (WordPress, Drupal, Joomla), companies in Delhi NCR offer specialized services.",
  },
  {
    id: "strategic-location",
    title: "Strategic Location & Accessibility",
    content:
      "Being a business hub, Delhi NCR offers easy communication, better collaboration, and accessibility, making it a preferred choice for national and international clients.",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as const,
  },
}

export default function WebsiteDesignAndDevelopment() {
  return (
    <>
      <div className="bg-[url('/images/bg13.jpg')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
        <div className="container">
          {/* Animated Container */}
          <motion.div
            className="grid lg:grid-cols-7 lg:gap-x-10 gap-y-10"
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
            <div className="lg:col-span-4 lg:pr-10">
              <div className="flex h-full flex-col items-start justify-center gap-4 md:gap-6">
                {/* Tag */}
                <motion.span
                  className="mb-2 md:mb-0 flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] text-white ring-1 ring-[#fff3]"
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
                  Modern Web Experiences
                </motion.span>

                {/* Headline */}
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
                  Website Design &{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Development.
                  </span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                  className="md:text-lg font-medium text-white"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  We understand the importance of
                  an engaging and appealing mobile application and aim to
                  provide the best user experience. We design all kinds of apps
                  ranging from travel applications, social applications, real
                  estate applications, lifestyle apps, eCommerce apps, and
                  several others.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <Link
                    href="/enquiry"
                    className="group relative mt-4 md:mt-6 flex w-max items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent px-10 py-4 text-sm leading-tight font-semibold text-white ring ring-[#ffffff85] transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Book a Quote
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative lg:col-span-3"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <span className="hidden animate-bounce2 hover-box absolute -top-8 left-[calc(100%-24px-120px)] z-1! lg:flex size-30 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
                <svg
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 850.394 850.394"
                  className="flex size-20 items-center justify-center object-contain object-center"
                >
                  <g transform="matrix(1,0,0,1,75,75)">
                    <path
                      fill="#ffffff"
                      d="M38.168 605.224c38.746 36.328 88.25 37.375 131.218 41.098 46.746 4.023 96.383 5.973 151.727 5.973 86.379-.336 193.648-3.93 278.722-14.055 133.813-7.652 119.871-161.563 122.48-262.918-.098-64.793-1.145-133.578-12.523-199.613-10.605-73.551-57.887-109.535-120.301-110.512-138.175-11.738-298.402-12.359-434.304 1.707C64.667 72.396 3.086 107.095-6.992 209.649c-11.996 105.582-6.609 220.488 6.777 308.727 4.613 28.695 11.758 61.434 38.383 86.848z"
                      opacity="1"
                      data-original="#ffffff"
                      className=""
                    ></path>
                    <path
                      fill="#68182b"
                      d="M64.589 577.536c27.867 26.594 71.848 27.547 108.07 30.66 85.004 7.309 170.832 6.754 256.032 3.723 39.184-1.391 78.359-3.48 117.429-6.73 15.574-1.297 31.145-2.781 46.668-4.645 17.105-2.051 34.871-3.699 49.254-14.172 14.863-10.82 22.539-27.086 28.668-43.922 7.391-21.008 8.621-44.766 10.25-66.777 2.48-33.352 3.137-66.852 3.094-100.293-.102-64.094-1.063-129.852-11.973-193.18-4.758-27.652-15.234-57.867-42.727-70.242-15.23-6.855-32.426-7.625-48.852-9.141-15.797-1.465-31.617-2.578-47.449-3.523-83.729-4.961-167.878-5.715-251.695-2.762-40.684 1.438-81.395 3.793-121.848 8.395-36.348 4.133-79.102 7.195-103.672 38.066-16.406 20.617-21.488 46.254-24.902 71.73-4.324 32.32-5.59 65.027-5.887 97.613-.605 66.516 1.945 134.188 12.52 199.969 3.79 23.591 8.977 48.012 27.02 65.231z"
                      opacity="1"
                      data-original="#68182b"
                      className=""
                    ></path>
                    <path
                      fill="#ffc522"
                      d="M307.323 495.396c5.137-41.395 15.313-81.941 26.902-121.953 7.02-24.23 13.164-55.063 27.196-76.57 6.91-8.156 12.367-13.797 24.027-14.063 12.32-.281 16.172 5.188 14.109 16.961-13.035 68.215-33.625 136.246-55.696 202.027-3.891 11.227-10.719 17.863-22.77 17.555-13.943-.364-14.939-12.961-13.768-23.957zM457.894 314.849c1.285-6.535.27-9.316 6.434-6.316 17.625 8.859 138.698 74.797 115.667 98.68-34.102 35.359-74.159 63.379-117.05 86.957-8.523 4.57-6.578-21.691-6.344-27.129.582-13.277 5.098-18.848 16.012-25.059 18.359-9.992 47.601-21.195 44.851-46.707-2.309-21.41-35.972-31.219-51.437-40.574-9.016-5.938-9.766-14.738-9.906-24.824-.07-5.075.797-10.079 1.773-15.028z"
                      opacity="1"
                      data-original="#ffc522"
                    ></path>
                    <path
                      fill="#e5e5e5"
                      d="M662.346 329.579c-.57-22.918-1.523-45.844-3.039-68.738-.793-11.871-2.137-12.582-15.684-13.309-192.737-10.453-386.445-10.496-579.011 3.031-15.516 1.094-16.348.613-17.078 14.469-1.675 31.352-1.773 62.801-1.035 94.184.793 33.578 2.57 67.156 5.711 100.598 2.219 23.68 4.66 47.719 10.406 70.855 2.398 9.637 5.828 19.031 12.141 26.867 11.137 13.832 28.523 19.809 45.359 23.191 35.617 7.152 73.098 8.379 109.301 9.988 82.688 3.664 165.696 2.305 248.34-2.051 33.879-1.789 67.772-4.094 101.522-7.688 13.984-1.488 30.016-1.859 43.02-7.488 15.418-6.672 22.621-21.688 28.066-36.648 2.781-7.891 4.313-16.199 5.605-24.445 4.094-26.109 5.293-54.02 6.168-80.926 1.103-33.948 1.056-67.933.208-101.89zm-449.659 71.899c4.547 11.391 29.242 19.262 39.18 25.035 20.336 12.742 23.941 35.973 21.352 58.691-1.113 9.777-.836 21.813-10.277 27.621-9.004 5.543-16.664 5.313-25.82.453-29.055-15.863-57.328-33.398-82.852-54.598-14.121-11.715-53.703-36.426-53.418-57.461.336-24.777 29.445-43.004 47.164-56.773 27.387-21.285 56.281-39.23 87.309-54.754 9.238-4.469 16.137-6.117 25.758-1.773 9.211 4.152 10.719 21.914 11.945 30.199 3.086 20.988-.25 40.645-17.535 53.34a11.318 11.318 0 0 1-2.141 1.668c-6.681 3.98-44.392 19.035-40.665 28.352zm207.211-96.102c-13.031 68.211-33.625 136.246-55.691 202.023-7.332 21.152-23.497 35.227-46.7 32.645-23.59-2.625-33.637-22.578-31.277-44.648 5.742-46.285 16.578-91.863 30.305-136.414 5.738-18.645 10.672-40.738 19.363-59.48 7.484-16.145 27.965-46.016 63.911-35.793 19.581 5.562 23.355 23.022 20.089 41.667zm135.437 152.855c-25.773 20.48-52.894 38.301-81.737 54.16-9.805 5.246-17.602 6.523-27.496.434-9.609-5.914-9.797-19.223-10.422-29.254-1.648-26.34 2.809-46.434 26.281-59.809 5.789-3.145 42.309-19.406 32.734-27.789-11.422-10-26.426-15.262-39.32-23.051-20.27-13.371-23.16-36.594-18.691-59.27 2.023-10.25 3.797-22.352 14.25-27.07 8.535-3.863 16.301-.035 24.047 3.73 30.453 15.32 60.085 32.676 86.452 54.449 17.422 14.383 46.418 31.449 46.766 56.457.296 20.568-38.806 45.842-52.864 57.013z"
                      opacity="1"
                      data-original="#e5e5e5"
                      className=""
                    ></path>
                    <path
                      fill="#ffc522"
                      d="M240.663 310.669c7.148-3.805 9.445-1.004 10.578 4.438.719 3.395 1.168 6.84 1.496 10.293 1.086 11.293.078 22.906-10.039 29.508-17.836 10.656-48.84 19.234-51.43 43.281-2.648 24.625 33.547 37.004 49.945 46.543 8.129 5.082 9.914 11.234 11.09 20.641.211 1.688.348 12.641-.602 20.797-1.105 9.406-4.969 8.363-10.414 5.293-41.246-23.184-78.449-50.652-112.148-84.156-21.874-21.771 82.438-81.228 111.524-96.638zM411.64 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.09 7.414 8.945 13.523-.145 3.297-1.168 6.344-3.234 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.217-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#ffc522"
                    ></path>
                    <path
                      fill="#ff7a0d"
                      d="M489.476 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.089 7.414 8.944 13.523-.144 3.297-1.167 6.344-3.233 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.218-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#ff7a0d"
                    ></path>
                    <path
                      fill="#ff2e60"
                      d="M655.608 215.333c-1.563-15.883-3.664-31.84-8.156-47.074-4.164-14.141-10.848-28.371-24.211-35.832-12.828-7.16-29.207-7.277-43.543-8.59-33.008-3.031-66.137-4.727-99.253-5.926-82.238-2.98-164.79-2.883-246.954 1.945-36.211 2.121-72.691 4.793-108.477 10.867-17.977 3.055-36.586 8.332-49.602 21.828-9.078 9.398-13.496 19.301-16.777 30.289-2.605 8.699-4.516 17.613-5.973 26.625-3.633 22.629-1.621 20.934 20.098 19.445 189.074-12.906 379.227-12.781 568.429-2.605 10.654.575 15.54.403 14.419-10.972zm-213.651-26.258c-6.805 7.945-19.488 10.496-29.125 6.77-11.008-4.25-17.551-14.324-17.277-26.137.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.359 5.117 26.973 15.57 4.292 9.739 2.714 21.504-4.251 29.637zm77.835 0c-6.804 7.945-19.487 10.496-29.124 6.77-11.008-4.25-17.551-14.324-17.277-26.137.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.358 5.117 26.972 15.57 4.292 9.739 2.714 21.504-4.251 29.637zm77.703-.133c-6.805 7.945-19.484 10.496-29.121 6.773-11.012-4.254-17.555-14.324-17.277-26.137.289-6.355 2.254-12.242 6.262-17.215 4.289-5.297 10.762-7.969 17.414-8.625 11.332-1.137 22.359 5.113 26.973 15.566 4.292 9.74 2.718 21.506-4.251 29.638z"
                      opacity="1"
                      data-original="#ff2e60"
                    ></path>
                    <path
                      fill="#00ebed"
                      d="M567.311 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.09 7.414 8.945 13.523-.145 3.297-1.168 6.344-3.234 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.218-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#00ebed"
                    ></path>
                    <path
                      fill="#ef6200"
                      d="M512.179 169.235c-.543 7.73-6.863 11.871-14.313 10.586-5.859-1.008-9.023-6.301-9.672-11.746-.281-2.379.152-4.543.938-6.586-3.25 4.188-3.992 9.961-1.859 14.805 2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.066-2.57 3.09-5.617 3.233-8.914.074-3.059-.737-5.891-2.284-8.238.718 1.878 1.152 3.89.968 6.499z"
                      opacity="1"
                      data-original="#ef6200"
                    ></path>
                    <path
                      fill="#19bfbb"
                      d="M591.331 170.974c.078-3.25-.902-6.203-2.648-8.629.719 1.563 1.172 3.305 1.121 5.512-.148 6.047-5.426 9.828-11.004 10.27-4.645.371-8.957-2.027-11.16-6.063-1.891-3.488-1.602-7.488-.289-11.141-.012.008-.027.012-.039.027-3.605 4.211-4.422 10.301-2.203 15.344 2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.065-2.571 3.088-5.617 3.233-8.914z"
                      opacity="1"
                      data-original="#19bfbb"
                    ></path>
                    <path
                      fill="#6cfffb"
                      d="M571.702 163.044c-1.457 5.32 5.992 7.211 10.934 5.398 2.676-.98 3.125-3.375 2.176-5.359-2.774-5.801-12.11-3.672-13.11-.039z"
                      opacity="1"
                      data-original="#6cfffb"
                    ></path>
                    <g fill="#ffa222">
                      <path
                        d="M409.437 176.294c2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.066-2.57 3.09-5.617 3.234-8.914a14.888 14.888 0 0 0-.559-4.434c-.113 1.508-.391 3.004-1.109 4.488-2.496 5.141-8.699 8.199-14.258 7.391-5.121-.746-7.883-5.586-9.273-10.027a16.99 16.99 0 0 1-.738-4.398c-1.848 3.823-2.02 8.366-.286 12.3zM129.14 407.306c33.699 33.504 70.902 60.973 112.148 84.156 5.445 3.07 9.309 4.113 10.414-5.293.707-6.086.813-13.73.73-17.918-3.043 7.293-8.191 12.492-18.047 9.781-15.637-4.297-29.367-16.945-41.926-26.57-21.156-16.215-55.98-37.09-59.984-65.25-6.511 8.449-8.589 15.863-3.335 21.094zM343.519 483.583c-5.762 15.484-12.324 26.578-22.129 35.754 11.859.188 18.617-6.414 22.473-17.539 22.071-65.781 42.661-133.813 55.696-202.027 1.641-9.379-.555-14.699-7.715-16.352 5.281 16.281-6.055 47.723-8.707 58.395-5.871 23.727-10.5 47.668-16.926 71.27a820.957 820.957 0 0 1-22.692 70.499zM227.491 354.634c-11.246 6.961-23.699 12.059-32.016 22.703-5.59 7.16-6.832 17.438-4.102 26.203-.219-1.727-.305-3.492-.105-5.352 2.59-24.047 33.594-32.625 51.43-43.281 10.117-6.602 11.125-18.215 10.039-29.508a115.38 115.38 0 0 0-.488-4.156c-.27 1.785-.586 3.543-.863 5.352-2.117 13.57-13.203 21.422-23.895 28.039zM456.121 329.876c.141 10.086.891 18.887 9.906 24.824 15.465 9.355 49.128 19.164 51.437 40.574.039.387.008.738.039 1.121 1.109-4.793.613-9.93-2.328-15.176-6.542-11.68-15.878-18.027-27.511-24.27-8.352-4.484-16.07-8.648-23.164-15.102-4.59-4.188-6.598-10.555-8.047-17.055-.16 1.689-.359 3.377-.332 5.084zM462.945 494.169c42.891-23.578 82.948-51.598 117.05-86.957 5.082-5.273 3.129-12.59-3.164-20.895-4.152 24.191-28.168 39.238-47.402 53.957-11.828 9.051-24.112 17.504-36.413 25.887-10.5 7.168-26.359 17.477-36.637 5.523-.375 9.231-.43 26.239 6.566 22.485z"
                        fill="#ffa222"
                        opacity="1"
                        data-original="#ffa222"
                      ></path>
                    </g>
                    <path
                      fill="#fbe134"
                      d="M420.414 161.134c-3.309 1.402-4.391 4.965-2.168 7.559 2.008 2.355 5.699 3.152 8.707 1.961 1.273-.508 2.313-1.762 2.836-3.16 1.363-3.61-2.949-9.075-9.375-6.36zM201.288 338.142c10.23-5.484 20.281-11.277 30.508-16.762 6.355-3.414 12.695-5.668 19.094-7.633-1.242-4.496-3.711-6.547-10.227-3.078-17.383 9.207-61.621 34.152-89.75 57.383 16.797-9.938 33.137-20.672 50.375-29.91zM307.323 495.396c-.75 7.063-.559 14.742 3.328 19.461 2.91-26.539 6.25-52.59 12.402-79.031 5.984-25.707 12.621-51.316 20.586-76.488 6.762-21.387 16.727-55.941 33.512-75.137-6.426 2.176-10.707 6.746-15.73 12.672-14.032 21.508-20.176 52.34-27.196 76.57-11.589 40.011-21.765 80.558-26.902 121.953zM457.844 315.157c10.301.766 20.84 8.258 29.258 13.027a1735.765 1735.765 0 0 1 37.862 22.094c14.887 8.945 29.461 17.871 43.875 27.137-28.613-28.203-92.116-62.652-104.511-68.883-6.164-3-5.148-.219-6.434 6.316-.019.106-.031.204-.05.309z"
                      opacity="1"
                      data-original="#fbe134"
                    ></path>
                    <path
                      fill="#ea0f4d"
                      d="M649.983 178.185c.391 19.488-4.559 36.422-29.563 36.086-44.094-.594-88.219-3.613-132.327-4.523-68.246-1.402-136.524-1.164-204.758.793-42 1.211-83.965 3.207-125.902 5.852-11.793.746-23.617 1.324-35.391 2.34-14.898 1.285-29.781 3.43-44.535-.191-13.902-3.414-18.258-17.988-19.727-32.383a213.779 213.779 0 0 0-5.117 23.309c-3.633 22.629-1.621 20.934 20.098 19.445 189.074-12.906 379.227-12.781 568.429-2.605 10.652.574 15.539.402 14.418-10.973-1.226-12.471-2.836-24.975-5.625-37.15z"
                      opacity="1"
                      data-original="#ea0f4d"
                    ></path>
                    <path
                      fill="#ea0f4d"
                      d="M445.957 152.181c-7.223-11.297-23.914-14.473-35.766-9.438-13.594 5.781-19.422 19.035-15.406 33.195.938 3.297 2.398 5.84 4.191 7.883-2.293-4.16-3.539-8.945-3.422-14.113.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.359 5.117 26.973 15.57 3.172 7.191 3.117 15.477.078 22.605 6.535-8.483 5.664-20.487-.328-29.862zM472.488 175.938c1.004 3.52 2.59 6.215 4.563 8.32-2.445-4.254-3.785-9.203-3.66-14.551.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.358 5.117 26.972 15.57 3.133 7.105 3.105 15.281.172 22.355 6.309-8.473 5.379-20.332-.555-29.613-7.223-11.297-23.913-14.473-35.765-9.438-13.594 5.783-19.419 19.037-15.407 33.197zM565.69 142.743c-13.594 5.781-19.422 19.035-15.406 33.195.988 3.488 2.566 6.156 4.508 8.254-2.477-4.266-3.82-9.242-3.695-14.613.289-6.355 2.254-12.242 6.262-17.215 4.289-5.297 10.762-7.969 17.414-8.625 11.332-1.137 22.359 5.113 26.973 15.566 3.191 7.238 3.125 15.59.027 22.75 6.547-8.484 5.684-20.492-.316-29.875-7.224-11.296-23.915-14.472-35.767-9.437z"
                      opacity="1"
                      data-original="#ea0f4d"
                    ></path>
                    <path
                      fill="#ff6699"
                      d="M347.648 139.485c-80.434-4.898-175.977 4.188-222.156 12.98-16.777 3.195-26.367 11.508-31.301 19.84-10.586 17.891-4.305 25.848 11.301 28.523 10.559 1.801 23.75-.238 32.563-.539 25.637-.879 117.012-6.961 220.403-9.434 11.852-.289 15.266-21.668 11.457-36.203-3.302-12.655-8.525-14.331-22.267-15.167z"
                      opacity="1"
                      data-original="#ff6699"
                    ></path>
                    <path
                      fill="#c6c6c6"
                      d="M268.136 284.571c-14.375-15.016-34.324-.305-49.098 7.035-29.676 14.738-57.414 33.121-83.258 53.801-15.656 12.523-35.602 27.855-38.41 49.082-.82 6.191 2.305 11.938 6.074 16.75-1.633-3.387-2.641-6.75-2.594-10.02.336-24.777 29.445-43.004 47.164-56.773 27.387-21.285 56.281-39.23 87.309-54.754 9.238-4.469 16.137-6.117 25.758-1.773 9.211 4.152 10.719 21.914 11.945 30.199 2.168 14.758 1.035 28.805-5.762 40.289 4.457-5.184 8.012-11.176 10.199-18.051 4.673-14.679 1.966-44-9.327-55.785zM608.514 385.419c-11.469-20.52-32.168-35.805-50.453-49.965-18.863-14.609-39.281-27-60.163-38.465-15.066-8.277-33.813-21.961-51.512-13.742-15.668 7.277-15.176 32.871-14.512 46.77.531 11.078 3.633 19.945 9.066 27.367-6.914-12.656-7.297-28.313-4.258-43.73 2.023-10.25 3.797-22.352 14.25-27.07 8.535-3.863 16.301-.035 24.047 3.73 30.453 15.32 60.085 32.676 86.452 54.449 17.422 14.383 46.418 31.449 46.766 56.457.047 3.211-.953 6.547-2.582 9.914 5.927-7.106 8.946-14.91 2.899-25.715zM421.371 279.622c-4.688-24.438-33.664-27.871-53.645-19.301-24.504 10.508-36.192 34.328-44.891 58.25-9.445 25.965-15.848 53.223-22.281 80.051-7.363 30.711-15.035 62.578-17.336 94.156-.766 10.508.996 19.469 5.473 25.215-2.508-6.758-3.324-14.527-2.461-22.598 5.742-46.285 16.578-91.863 30.305-136.414 5.738-18.645 10.672-40.738 19.363-59.48 7.484-16.145 27.965-46.016 63.911-35.793 16.992 4.824 22.055 18.621 20.973 34.363 1.108-6.261 1.71-12.617.589-18.449zM137.98 446.243a420.016 420.016 0 0 1-7.527-5.863c.457.445.898.918 1.359 1.352 2.015 1.917 4.086 3.324 6.168 4.511z"
                      opacity="1"
                      data-original="#c6c6c6"
                      className=""
                    ></path>
                    <path
                      fill="#c6c6c6"
                      d="M47.839 310.548c-.574-6.492-.949-13.141-1.32-19.82-.632 22.828-.55 45.676-.02 68.488.793 33.578 2.57 67.156 5.711 100.598 2.219 23.68 4.66 47.719 10.406 70.855 2.398 9.637 5.828 19.031 12.141 26.867 11.137 13.832 28.523 19.809 45.359 23.191 35.617 7.152 73.098 8.379 109.301 9.988 82.688 3.664 165.696 2.305 248.34-2.051 33.879-1.789 67.772-4.094 101.522-7.688 13.984-1.488 30.016-1.859 43.02-7.488 15.418-6.672 22.621-21.688 28.066-36.648 2.781-7.891 4.313-16.199 5.605-24.445 4.094-26.109 5.293-54.02 6.168-80.926.793-24.449.977-48.926.707-73.395-1.379 23.672-3.488 47.289-6.816 70.816-4.477 31.594-3.727 63.949-14.273 94.449-11.098 32.094-36.793 42.457-67.789 46.301-24.738 3.063-49.656 4.797-74.53 6.371a2678.345 2678.345 0 0 1-207.961 5.059c-33.32-.488-66.656-1.781-99.871-4.551-27.699-2.313-56.781-4.883-83.148-14.203-31.059-10.984-36.754-42.023-41.16-70.953-4.832-31.727-8.148-63.691-11.395-95.609-2.891-28.382-5.551-56.788-8.063-85.206z"
                      opacity="1"
                      data-original="#c6c6c6"
                      className=""
                    ></path>
                    <path
                      fill="#f4f4f4"
                      d="M337.417 543.228c27.508-12.164 36.598-46.504 44.118-72.926 8.426-29.57 16-59.539 23.625-89.324 6.289-24.563 13.051-50.066 14.734-75.59-13.035 68.211-33.621 136.238-55.688 202.012-7.332 21.152-23.497 35.227-46.7 32.645-8.391-.938-15.035-4.086-20.051-8.723 8.993 12.081 23.868 19.019 39.962 11.906zM157.843 253.009c62.938-2.008 125.934-2.617 188.906-2.98 56.649-.32 113.321-.414 169.964.762 26.859.551 53.859.551 80.668 2.227 23.289 1.465 46.559 6.012 62.563 19.523-.23-3.902-.383-7.805-.637-11.699-.793-11.871-2.137-12.582-15.684-13.309-192.737-10.453-386.445-10.496-579.011 3.031-14.941 1.055-16.254.777-16.984 13.125 34.594-11.102 75.621-9.571 110.215-10.68zM266.773 433.224c-6.625-6.406-14.094-10.996-22.117-15.477-10.301-5.758-27.508-11.848-28.418-23.777-2.898 2.676-4.449 5.258-3.551 7.508 4.547 11.391 29.242 19.262 39.18 25.035 20.336 12.742 23.941 35.973 21.352 58.691-1.113 9.777-.836 21.813-10.277 27.621-9.004 5.543-16.664 5.313-25.82.453-29.055-15.863-57.328-33.398-82.852-54.598-10.105-8.387-33.195-23.434-45.438-39.023 7.441 16.188 27.008 29.801 38.918 39.273 14.469 11.516 29.652 22.129 45.004 32.434 16.109 10.809 33.023 23.711 51.93 29.148 30.973 8.91 33.629-33.051 32.926-52.879-.396-11.214-2.369-26.21-10.837-34.409zM435.105 505.919c13 43.031 79.569-13.383 95.765-24.215 21.109-14.105 40.66-30.117 59.273-47.34 5.953-5.512 10.238-11.34 12.156-17.543-11.402 16.449-36.332 32.961-46.965 41.41-25.773 20.48-52.894 38.301-81.737 54.16-9.805 5.246-17.602 6.523-27.496.434-9.609-5.914-9.797-19.223-10.422-29.254-1.648-26.34 2.809-46.434 26.281-59.809 5.789-3.145 42.309-19.406 32.734-27.789a65.227 65.227 0 0 0-4.66-3.691c-.684 13.816-29.113 26.063-36.359 30.934-7.66 5.148-13.086 12.043-17.449 20.059-9.875 18.109-6.808 43.796-1.121 62.644z"
                      opacity="1"
                      data-original="#f4f4f4"
                      className=""
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="hidden animate-bounce2 hover-box absolute -bottom-8 left-10 z-1! lg:flex size-30 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
                <Image
                  src="/images/svg/web-dev-2.svg"
                  alt="web dev"
                  width={120}
                  height={120}
                />
              </span>
              <div className="flex h-full items-center overflow-hidden">
                <Image
                  src="/images/demo/web-dev-3.webp"
                  alt="web development"
                  width={600}
                  height={600}
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section className="pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[330px] sm:h-[500px] md:h-[600px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute top-0 left-0 w-[85%]">
                <Image
                  src="/images/demo/coding-6.avif"
                  alt="coding image"
                  width={600}
                  height={800}
                  className="h-auto w-full rounded-2xl object-cover shadow-lg"
                />
              </div>

              <div className="absolute bottom-4 left-0 sm:bottom-6 sm:left-4 md:bottom-10 md:left-8 z-20">
                <svg
                  viewBox="0 0 200 200"
                  className="h-28 w-28 sm:h-36 sm:w-36 md:h-[184px] md:w-[184px] animate-[spin_15s_linear_infinite] rounded-full bg-white"
                >
                  {/* Outer Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  {/* Inner Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="52"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  <defs>
                    <path
                      id="circleText"
                      d="
                        M100,100
                        m-72,0
                        a72,72 0 1,1 144,0
                        a72,72 0 1,1 -144,0
                        "
                    />
                  </defs>

                  <text
                    fill="#f97316"
                    fontSize="11"
                    letterSpacing="4"
                    fontWeight="600"
                  >
                    <textPath href="#circleText" className="uppercase">
                      Best Website Development • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl text-orange-500">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute right-0 bottom-0 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/web.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Website Development for Modern Businesses
              </h2>
              <p className="mb-4">
                At digital fueled, you get the most experienced and proficient
                mobile app developers for your Website Development. We always
                come up with innovative and creative ideas for your application.
                We always aim at providing maximum customer satisfaction to all
                our customers. The apps are designed keeping in mind the target
                audience and they are compatible with ios and android. We not
                only provide a comprehensive interface but also provide access
                to backend, custom analytics report, crash report, notification
                alert, and everything else that is needed to track the
                performance and the quality of your app in real-time.
              </p>
              <p className="mb-6 md:mb-8">
                We recognize what can change a raw application idea into a
                successful application as we have several years of experience in
                Website Development. The experience that we have gained has not
                only helped us to impress our customers but also gain an insight
                into the real world. Our Website Development team builds large
                and complex applications addressing challenging business
                problems and delivering quality performance and versatile
                solutions.
              </p>
              <AnimatedButton href="/enquiry">Enquire Now</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <h2 className="mb-8 md:mb-12 text-center font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            Enhance Your Company with <br className="hidden lg:block" />Delhi's Top Website Development agency
          </h2>
          {/* Top Section - Grid */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-4">
            {/* Column 1: Text Cards */}
            <div className="flex h-full flex-col gap-4 md:gap-6">
              <div className="group relative flex min-h-46 flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4 ring ring-orange-500">
                <div className="flex size-14 items-center justify-center">
                  <Image
                    src="/images/icons/ecom.png"
                    alt="software"
                    width={100}
                    height={100}
                    className="size-full object-contain"
                  />
                </div>
                <h3 className="md:text-lg leading-snug font-medium">
                  Create a website to expand quickly and attract more clients.
                </h3>
              </div>
              <div className="group relative flex min-h-46 flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4 ring ring-orange-500">
                <div className="flex size-14 items-center justify-center">
                  <Image
                    src="/images/icons/integration.png"
                    alt="software"
                    width={100}
                    height={100}
                    className="size-full object-contain"
                  />
                </div>
                <h3 className="md:text-lg leading-snug font-medium">
                  Create a website specifically for you to increase your
                  internet visibility.
                </h3>
              </div>
            </div>

            {/* Column 2: Large Image Card */}
            <div className="group/img relative h-full min-h-[400px] cursor-pointer overflow-hidden rounded-xl lg:col-span-2 lg:min-h-0">
              <img
                src="/images/demo/game-dev.jpg"
                alt="Eco-friendly tools"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              {/* Dark overlay gradient at bottom for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4 md:top-5 md:left-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <Code2Icon className="h-3.5 w-3.5" /> #BestInDelhi
              </div>

              {/* Bottom Content Box */}
              <div className="absolute right-4 bottom-4 left-4 md:right-5 md:bottom-5 md:left-5 flex flex-col items-start gap-8 rounded-lg border border-white/20 bg-white/20 p-3 md:p-4 md:px-6 backdrop-blur-md transition-all group-hover:bg-white/30">
                <h3 className="text-xl font-medium text-white md:text-2xl">
                  With a good website, we, as Delhi's website development
                  agency, enhance the perception of your company.
                </h3>
                <AnimatedButton href="/enquiry" variant="light">Build With Us</AnimatedButton>
              </div>
            </div>

            {/* Column 3: Stacked Image Cards */}
            <div className="flex h-full flex-col gap-4 md:gap-6">
              <div className="flex h-full flex-col gap-4 md:gap-6">
                <div className="group relative flex min-h-46 flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4 ring ring-orange-500">
                  <div className="flex size-14 items-center justify-center">
                    <Image
                      src="/images/icons/software.png"
                      alt="software"
                      width={100}
                      height={100}
                      className="size-full object-contain"
                    />
                  </div>
                  <h3 className="md:text-lg leading-snug font-medium">
                    Create a unique website to make your company stand out
                    online.
                  </h3>
                </div>
                <div className="group relative flex min-h-46 flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4 ring ring-orange-500">
                  <div className="flex size-14 items-center justify-center">
                    <Image
                      src="/images/icons/web-mobile.png"
                      alt="software"
                      width={100}
                      height={100}
                      className="size-full object-contain"
                    />
                  </div>
                  <h3 className="md:text-lg leading-snug font-medium">
                    Make user-friendly websites that draw in and keep visitors.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center">
            In today’s digital world, having a strong online presence is crucial
            for business success. A well-designed and highly functional website
            not only boosts credibility but also enhances customer engagement
            and drives revenue. If you’re looking to elevate your brand,
            partnering with Delhi’s top website development agency is the best
            decision you can make.
          </p>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-7 items-center gap-12 lg:gap-6">
            <div className="lg:col-span-3">
              {/* <div className="sticky top-28"> */}
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                We Take Pride in Our Technical Expertise
              </h2>
              <p className="mb-4 pr-8 font-geist">
                We create beautiful and user-friendly responsive web apps and
                work-flows, as well as efficient administrative desktop console
                web apps. We specialise in developing full-stack platforms and
                seamlessly integrating your proprietary APIs and other
                third-party APIs, as well as developing bespoke APIs to meet
                your specific needs. Our web solutions are built on a solid
                foundation of C# and cutting-edge technology.Framework for Net
                Core Web APIs.
              </p>
              <p className="mb-6 md:mb-8 pr-8 font-geist">
                Looking for a digital agency to become a long-term partner in
                assisting your business's online success?
              </p>
              <AnimatedButton href="/enquiry">Start Your Project</AnimatedButton>
              {/* </div> */}
            </div>
            <div className="lg:col-span-4">
              <div className="grid w-full sm:grid-cols-2 gap-4">
                <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-4 text-black ring hover:ring-blue-400 transition-all duration-300 ring-gray-300">
                  <div className="flex size-18 items-center justify-center rounded-sm bg-blue-100 p-1">
                    <svg
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      className="size-full object-contain"
                    >
                      <g>
                        <path
                          fill="#ffffff"
                          d="m463 104.618-36.22-1.771c8.475-26.842-3.474-49.616-40.967-52.408-37.847-2.814-52.808 19.248-45.474 49.86h-46.21c1.761-5.84 6.426-17.922 7.848-37.492 1.729-23.813-20.675-29.852-33.367-16.641a142.801 142.801 0 0 0-3.294-18.277c-4.757-19.154-21.288-21.465-31.245-12.872-8.822 7.61-8.715 19.22-8.664 24.798a243.99 243.99 0 0 0 1.278 27.233L178.355 6l-62 45.606c-10.857-27.252-35.05-35.568-64.92-14.743-31.328 21.821-28.63 48.402-3.803 67.373l-17.875 14.546a40.5 40.5 0 0 0-5.846 56.91l14.935 18.354c-10.908 2.976-22.424 8.748-27.525 19.923-5.94 13.01-1.344 28.478 13.657 45.974 10.182 11.876 19.943 19.187 29.59 22.126-16.437 7.408-31.362 18.445-21.32 33.422 6.676 9.948 17.38 7.77 27.974 4.613a17.165 17.165 0 0 0 6.348 14.214c10.685 8.36 23.322-.137 34.358-9.06l.467 47.61c-9.548-5.026-21.201-9.553-32.203-9.553-10.659 0-35.448 4.665-35.448 47.874 0 46.835 27.048 51.89 38.676 51.89 7.775 0 15.598-2.002 22.44-4.576l-.164 1.908A42.025 42.025 0 0 0 137.524 506c.427 0 .854-.006 1.285-.02l313.884-9.438a47.783 47.783 0 0 0 46.437-47.214c2.432-180.677 2.584-191.912 4.06-301.937A42.103 42.103 0 0 0 463 104.618z"
                          opacity="1"
                          data-original="#ffffff"
                          className=""
                        ></path>
                        <path
                          fill="#5ed4be"
                          d="M245.04 403.84c-1.652 50.702 39.257 22.89 39.257 22.89v62.508l-145.86 4.386a29.64 29.64 0 0 1-30.424-32.157l2.065-24.101s-62.972 43.352-62.972-26.177c0-69.512 67.877-15.54 67.877-15.54l-.81-82.334 53.972-.551s-29.447-56.157 22.907-53.696c52.337 2.444 22.907 54.247 22.907 54.247h70.338v71.302s-37.622-31.495-39.256 19.223z"
                          opacity="1"
                          data-original="#5ed4be"
                        ></path>
                        <path
                          fill="#fcc836"
                          d="M438.88 400.553c-2.462 46.571 48.05 29.36 48.291 18.794l-.402 29.814a35.52 35.52 0 0 1-34.447 35.025l-52.303 1.575s42.957-43.49-14.302-49.204c-57.258-5.731-17.176 50.15-17.176 50.15l-84.244 2.53V426.73s-40.909 27.812-39.256-22.89c1.634-50.718 39.256-19.223 39.256-19.223v-71.302h74.417s-35.986-42.82 20.463-42.407c56.433.43 22.89 42.407 22.89 42.407H488.6l-.964 71.302s-46.312-30.67-48.756 15.936z"
                          opacity="1"
                          data-original="#fcc836"
                        ></path>
                        <path
                          fill="#776cff"
                          d="M489.73 229.065s-58.213 43.083-52.488-13.635c5.725-56.717 52.919-18.535 52.92-18.533l.667-49.672a29.894 29.894 0 0 0-28.432-30.26l-54.599-2.67s31.89-47.449-22.907-51.527c-54.797-4.096-26.985 49.892-26.985 49.892h-68.704v66.786s-53.988-36.53-52.354 27.01c1.635 63.557 49.084 28.07 49.084 28.07l-1.635 78.789h74.417s-35.986-42.82 20.463-42.407c56.433.43 22.89 42.407 22.89 42.407H488.6l1.13-84.25z"
                          opacity="1"
                          data-original="#776cff"
                        ></path>
                        <path
                          fill="#ff3d81"
                          d="M244.78 109.823s-17.96 70.16-49.318 22.553C164.105 84.77 224.81 84.6 224.812 84.6L176.07 23.029 108.79 72.516s-5.212-56.932-50.29-25.51c-45.089 31.41 10.56 55.732 10.56 55.732L37.558 128.37a28.09 28.09 0 0 0-4.058 39.519l28.783 35.372s-69.293.383-27.92 48.636c41.383 48.266 55.788-9.208 55.788-9.208l48.46 62.144 57.722-46.97s-54.94-10.499-10.893-45.807c44.043-35.285 44.52 18.445 44.52 18.445l67.118-54.617z"
                          opacity="1"
                          data-original="#ff3d81"
                          className=""
                        ></path>
                        <g fill="#fcc836">
                          <path
                            d="M257.144 64.889a130.61 130.61 0 0 0-3.826-34.021c-3.354-13.494-15.728-10.564-15.55 8.835.143 15.51.534 54.978 15.192 47.43 5.969-3.075 4.06-15.974 4.184-22.244zM289.646 61.912c1.007-13.868-11.665-14.93-17.525 3.563-2.856 9.013-11.729 36.15-7.501 45.317 1.271 2.757 4.198 4.967 7.196 4.485 9.49-1.526 17.019-42.187 17.83-53.365zM74.127 301.633a94.447 94.447 0 0 1-23.287 8.401c-9.824 2.142-11.882-6.82.755-12.91 6.16-2.968 24.677-12.099 31.671-10.012 10.023 2.99.184 9.692-9.139 14.52zM82.593 323.664c-8.671 5.089-13.414-2.79-3.295-12.506 4.931-4.735 19.693-19.17 26.99-19.36 2.195-.058 4.564 1.133 5.21 3.231 2.046 6.644-21.915 24.533-28.905 28.635z"
                            fill="#fcc836"
                            opacity="1"
                            data-original="#fcc836"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">
                    Solution architects
                  </h3>
                  <p>
                    Our solution architects will carefully design your platform
                    to ensure maximum performance, scalability, extendability,
                    and stability.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-4 text-black ring hover:ring-blue-400 transition-all duration-300 ring-gray-300">
                  <div className="flex size-18 items-center justify-center rounded-sm bg-blue-100 p-1">
                    <svg
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      className="size-full object-contain"
                    >
                      <g>
                        <path
                          d="M223.249 71.831a95.2 95.2 0 0 0-46.583-47.57c-12.602-5.904-26.61-9.028-40.505-9.028a94.569 94.569 0 0 0-25.054 3.372 2.696 2.696 0 0 0-1.628 1.269 2.688 2.688 0 0 0-.264 2.054c.387 1.408 1.915 2.279 3.326 1.894a88.195 88.195 0 0 1 23.348-3.146c35.677 0 68.027 20.943 82.411 53.351 12.128 27.325 9.848 58.818-6.088 84.229-.644.95-.719 2.097-.201 3.07.47.884 1.336 1.433 2.26 1.433.556 0 1.625-.21 2.535-1.64 16.889-26.945 19.298-60.325 6.443-89.288zM119.938 198.735c-29.201-5.434-53.798-24.813-65.796-51.845-6.884-15.505-9.24-32.534-6.816-49.242a2.684 2.684 0 0 0-.509-2.006 2.68 2.68 0 0 0-1.78-1.057c-1.478-.228-2.857.835-3.067 2.287-2.571 17.717-.074 35.772 7.223 52.218 12.762 28.745 38.93 49.306 70.033 55.011.295.041.577.059.838.059 2.069 0 3.095-1.137 3.196-2.266.107-1.26-.878-2.727-3.322-3.159z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M69.183 98.427c-1.484-.225-2.86.832-3.075 2.279-3.371 22.537 4.332 45.451 20.611 61.291a2.698 2.698 0 0 0 1.887.763c.304 0 .604-.049.893-.15.394-.14.757-.371 1.047-.672a2.693 2.693 0 0 0-.053-3.827c-15.03-14.624-22.144-35.785-19.032-56.604a2.715 2.715 0 0 0-2.278-3.08zM51.043 85.682a2.908 2.908 0 0 0 3.424-2.263c4.571-22.525 19.864-41.627 40.906-51.1a2.877 2.877 0 0 0 1.521-1.616 2.874 2.874 0 0 0-.068-2.22c-.633-1.414-2.409-2.097-3.834-1.455-22.742 10.235-39.27 30.884-44.213 55.234a2.88 2.88 0 0 0 1.058 2.864c.356.276.772.467 1.206.556zM177.504 53.648c-12.067-8.65-26.342-13.22-41.282-13.22-17.97 0-35.061 6.661-48.126 18.756a71.555 71.555 0 0 0-9.488 10.77 2.683 2.683 0 0 0-.476 2.014 2.688 2.688 0 0 0 1.096 1.762c1.171.839 2.94.547 3.777-.621a66.116 66.116 0 0 1 8.768-9.951c12.064-11.171 27.85-17.324 44.448-17.324 13.801 0 26.986 4.224 38.128 12.215 23.795 17.055 33.369 48.194 23.277 75.75-.507 1.579.134 3.064 1.594 3.689.308.133.651.204.991.204 1.084 0 1.987-.651 2.418-1.755 11.1-29.89.769-63.727-25.125-82.289z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M38.052 306.518V397.5c0 7.69 6.508 13.919 14.536 13.919h252.463c8.026 0 14.532-6.229 14.532-13.919v-90.982H38.052z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M319.583 294.805c0-7.689-6.505-13.922-14.532-13.922H52.588c-8.028 0-14.536 6.233-14.536 13.922v11.713h281.53v-11.713z"
                          fill="#ff4e4e"
                          data-original="#ff4e4e"
                        ></path>
                        <path
                          d="M54.581 294.081a4.302 4.302 0 1 1-8.604.002 4.302 4.302 0 0 1 8.604-.002zM68.071 294.081a4.3 4.3 0 1 1-8.6 0 4.3 4.3 0 1 1 8.6 0zM81.566 294.081a4.302 4.302 0 1 1-8.604.002 4.302 4.302 0 0 1 8.604-.002z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M400.975 129.791c-.01.21-.058.931-.09 1.967 2.776.647 3.493 4.014 2.171 6.093.497.58.795 1.316.899 2.083l15.616-8.184c0-20.354 16.553-36.9 36.901-36.9V76.217c-29.965 0-54.463 23.859-55.497 53.574z"
                          fill="#568eaf"
                          data-original="#568eaf"
                        ></path>
                        <path
                          d="M456.472 76.217v18.634c20.346 0 36.9 16.546 36.9 36.9H512c0-30.624-24.905-55.534-55.528-55.534"
                          fill="#ff4e4e"
                          data-original="#ff4e4e"
                        ></path>
                        <path
                          d="M455.938 168.646v18.638c30.617 0 56.062-24.913 56.062-55.533h-18.628c0 20.347-17.092 36.895-37.434 36.895"
                          fill="#ffae24"
                          data-original="#ffae24"
                        ></path>
                        <path
                          d="M31.469 362.331c4.554 1.743 8.804 3.718 13.285 5.431 3.509 1.346 5.784 2.285 9.02 3.634 2.843 1.183 6.884 2.653 8.363 4.913 1.537 2.348 1.535 5.697 2.863 8.097 2.245 4.029 6.074 4.427 10.216 6.308 17.336 7.873 34.428 14.996 52.286 22.607 2.226.948 7.098 2.15 8.269 4.705 1.074 2.335-.483 6.66-1.021 9.342 0 0-20.438 69.584-25.221 69.19-1.782-.151-5.021-.98-7.279-1.941-15.339-6.54-32.731-14.142-47.337-20.373-15.572-6.63-31.343-13.371-47.335-20.365-3.35-1.464-6.069-2.203-7.381-6.585-.687-2.317.606-7.029 1.157-10.143 3.464-19.551 18.956-45.675 22.415-64.969.584-3.259.923-6.682 2.049-9.802.967-2.161 3.953-.704 5.651-.049"
                          fill="#ec9513"
                          data-original="#ec9513"
                        ></path>
                        <path
                          d="M128.713 407.747c0 10.48-8.498 18.985-18.986 18.985-10.48 0-18.982-8.504-18.982-18.985 0-10.487 8.502-18.983 18.982-18.983 10.488 0 18.986 8.496 18.986 18.983"
                          fill="#ff4e4e"
                          data-original="#ff4e4e"
                        ></path>
                        <path
                          d="m102.653 401.202-6.634 6.078 6.634 6.081 1.076-1.334-5.135-4.747 5.135-4.745zM105.805 413.622h1.884l4.931-12.687h-1.884zM115.754 401.202l-1.076 1.333 5.134 4.745-5.134 4.747 1.076 1.334 6.634-6.081z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M20.238 368.761c4.555 1.746 8.799 3.717 13.282 5.437 3.507 1.343 5.784 2.283 9.021 3.629 2.845 1.185 6.883 2.658 8.359 4.909 1.546 2.355 1.538 5.704 2.873 8.104 2.24 4.025 6.067 4.423 10.216 6.303 17.332 7.874 34.421 15 52.28 22.603 2.229.956 7.099 2.158 8.268 4.713 1.076 2.333-.482 6.654-1.018 9.338-3.668 18.353-7.346 35.467-11.18 54.104-.508 2.441-.763 7.601-2.809 8.658-1.591.816-5.021-.98-7.279-1.941-15.339-6.54-32.729-14.142-47.337-20.368-15.572-6.635-31.343-13.373-47.335-20.369-3.35-1.464-6.069-2.203-7.379-6.585-.692-2.317.604-7.029 1.155-10.143 3.467-19.551 7.723-39.242 11.18-58.54.583-3.253.928-6.678 2.053-9.799.966-2.168 3.948-.703 5.65-.053"
                          fill="#ffae24"
                          data-original="#ffae24"
                        ></path>
                        <path
                          d="M384.545 417.183a22.567 22.567 0 0 1 14.173-5.097l44.195-.214c6.028-.028 11.703 2.289 15.986 6.531 4.283 4.243 6.66 9.899 6.68 15.932l.038 7.218c.035 6.834-2.986 13.237-8.279 17.572a22.627 22.627 0 0 1-14.171 5.103l-15.575.072c-2.084.013-4.008.762-5.867 2.284-1.399 1.152-2.579 2.581-3.625 3.85a42.783 42.783 0 0 1-1.396 1.654c-.257.282-.533.591-.83.921-1.273 1.432-2.863 3.214-4.392 4.467-1.072.873-1.748 1.196-2.141 1.312-1.877.57-3.814-.206-4.521-1.245-.467-.682-.446-1.466-.355-3.026.03-.62.073-1.326.063-2.082 0-.235.005-.479.013-.736.045-1.865.143-5.738-3.937-6.983-1.13-.353-2.514-.534-4.116-.745-2.225-.297-4.749-.633-6.787-1.474-8.096-3.361-13.361-11.411-13.401-20.509l-.039-7.23a22.516 22.516 0 0 1 8.284-17.575"
                          fill="#ff4e4e"
                          data-original="#ff4e4e"
                        ></path>
                        <path
                          d="M397.655 436.276a3.987 3.987 0 0 1 2.508-.895 3.946 3.946 0 0 1 2.821 1.152 3.937 3.937 0 0 1 1.181 2.808 3.977 3.977 0 0 1-3.957 4.01 3.983 3.983 0 0 1-4.011-3.964 3.951 3.951 0 0 1 1.458-3.111M417.677 436.159a3.925 3.925 0 0 1 2.502-.895 3.98 3.98 0 0 1 4.006 3.962 3.966 3.966 0 0 1-3.963 4.004 3.931 3.931 0 0 1-2.825-1.148 3.958 3.958 0 0 1-1.185-2.811 3.971 3.971 0 0 1 1.465-3.112M437.694 436.043a3.936 3.936 0 0 1 2.503-.898 3.92 3.92 0 0 1 2.83 1.151 3.943 3.943 0 0 1 1.177 2.809 3.963 3.963 0 0 1-1.459 3.112 3.956 3.956 0 0 1-2.499.897 3.982 3.982 0 0 1-2.829-1.153 3.937 3.937 0 0 1-1.181-2.809 3.954 3.954 0 0 1 1.458-3.109"
                          fill="#ffffff"
                          data-original="#ffffff"
                        ></path>
                        <path
                          d="M234.085 384.96c.405 12.05 3.065 31.666 4.536 46.822 1.14 11.741 2.809 18.177-4.918 22.122-1.466.748-4.038.628-5.042 2.699 26.689-.274 54.467-.133 82.161-.018 7.765.033 22.929 1.281 24.82-3.724 1.41-3.768-2.119-13.2-3.014-17.38-3.836-18.056-7.058-35.581-11.262-52.356-28.818.284-58.109 1.124-87.281 1.835"
                          fill="#7ab0c9"
                          data-original="#7ab0c9"
                          className=""
                        ></path>
                        <path
                          d="m295.811 454.677 36.403.01c1.678-.048 2.742-.965 2.468-2.762-.541-3.624-9.672-51.287-13.313-68.8-.003-.274.015-.524.395-.484 2.445.868 7.304.003 9.273-.013 2.883 14.768 14.04 63.798 14.249 68.969.209 5.172-.949 9.334-5.084 11.856-1.599.979-3.447 1.312-5.406 1.403-.154.007-.299.038-.45.038l-38.539-.015c-3.286-.005-5.958-2.287-5.954-5.104-.001-2.819 2.67-5.098 5.958-5.098"
                          fill="#e3f6fc"
                          data-original="#e3f6fc"
                        ></path>
                        <path
                          d="M221.067 461.069c0 2.079 1.569 3.755 3.503 3.76l69.637.029c1.934 0 3.504-1.677 3.504-3.756v-2.67c0-2.073-1.565-3.755-3.502-3.757l-69.639-.033c-1.932 0-3.501 1.679-3.501 3.758l-.002 2.669z"
                          fill="#cce5ef"
                          data-original="#cce5ef"
                        ></path>
                        <path
                          d="m446.527 343.83.074-173.62c.011-24.647-19.958-44.632-44.607-44.642l21.607.01c24.647.01 44.62 19.997 44.608 44.64l-.078 173.618c-.013 24.647-20 44.618-44.651 44.606l-21.601-.01c24.651.008 44.64-19.963 44.648-44.602"
                          fill="#7ab0c9"
                          data-original="#7ab0c9"
                          className=""
                        ></path>
                        <path
                          d="m137.017 125.452 21.609.01 243.371.106c24.646.01 44.616 19.995 44.611 44.642l-.083 173.618c-.01 24.645-19.995 44.613-44.645 44.606l-243.364-.108-21.612-.013c-24.65-.01-44.618-19.998-44.608-44.642l.079-173.618c.005-24.642 19.989-44.615 44.642-44.601"
                          fill="#cce5ef"
                          data-original="#cce5ef"
                        ></path>
                        <path
                          d="m143.94 131.682 20.406.01 229.797.101c23.276.012 42.132 18.879 42.121 42.156l-.072 163.939c-.012 23.271-18.886 42.121-42.16 42.119l-229.8-.108-20.402-.005c-23.273-.013-42.13-18.883-42.118-42.154l.067-163.936c.016-23.273 18.883-42.129 42.161-42.122"
                          fill="#42758a"
                          data-original="#42758a"
                          className=""
                        ></path>
                        <path
                          d="M279.488 256.561c0 30.933-15.772 56.272-46.65 56.507l-.436.002c-31.079 0-56.278-25.2-56.278-56.278 0-31.084 25.2-56.283 56.278-56.283 18.565 0 35.026 8.993 45.277 22.86.048.064 1.809 20.764 1.809 33.192z"
                          fill="#ff4e4e"
                          data-original="#ff4e4e"
                        ></path>
                        <path
                          d="m365.514 355.037-76.833-153.668-76.83 153.668z"
                          fill="#ffae24"
                          data-original="#ffae24"
                        ></path>
                        <path
                          d="M288.681 256.791a56.007 56.007 0 0 0-11.002-33.423l-44.841 89.692c30.881-.242 55.843-25.336 55.843-56.269"
                          fill="#568eaf"
                          data-original="#568eaf"
                        ></path>
                        <path
                          d="M171.349 190.126h9.2v9.2h-9.2z"
                          transform="rotate(-44.992 175.93 194.721)"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M171.349 251.927h9.201v9.201h-9.201z"
                          transform="rotate(-45.017 175.945 256.53)"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M171.349 313.729h9.202v9.202h-9.202z"
                          transform="rotate(-45.017 175.944 318.331)"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M176.123 316.634a1.81 1.81 0 0 1-1.804-1.808V198.753c0-.997.806-1.809 1.804-1.809.999 0 1.806.811 1.806 1.809v116.074a1.809 1.809 0 0 1-1.806 1.807M263.231 264.396a1.95 1.95 0 0 0-.397 1.648c.186.859.906 1.446 1.332 1.798l.147.122c3.372 3.011 7.085 6.991 9.099 13.712.206.678.38 1.363.528 2.044 1.151 5.314.453 10.018-.383 13.916-.043.2-.073.411-.106.626-.02.141-.04.284-.063.41-10.274.23-23.082 6.799-24.837 15.387l-.078.365c-.117.507-.244 1.087-.229 1.673.058 2.801 1.386 4.991 3.723 6.206 2.768 1.434 6.85 1.386 10.407-.121 4.845-2.056 7.736-6.274 9.494-9.268 1.801-3.079 3.067-5.655 3.982-8.108.165-.435.277-.868.375-1.245.068-.262.131-.506.202-.728 7.878.444 15.485 2.98 22.629 7.543 8.616 5.5 13.817 11.917 16.876 20.806 1.2 3.492 2.078 7.462 2.609 11.762.44 3.601.511 7.273.198 10.615-.579 6.212-2.298 11.66-4.968 15.756-.054.077-.13.164-.205.257-.436.525-1.165 1.406-.913 2.57.054.248.151.488.289.714l.262.419.465.148c1.96.623 3.049-1.141 3.517-1.895l.16-.258a30.216 30.216 0 0 0 3.76-8.164c2.327-8.058 2.535-16.266.652-25.831a69.514 69.514 0 0 0-.254-1.218c-1.114-5.15-2.739-9.651-4.84-13.386-3.882-6.915-9.537-12.376-17.796-17.186-6.603-3.847-13.768-6.116-21.313-6.753.961-4.791 1.771-9.81.453-15.888a32.243 32.243 0 0 0-.99-3.55c-1.624-4.769-4.331-8.997-8.278-12.93l-.131-.132c-1.316-1.351-2.712-2.59-4.007-2.531a1.862 1.862 0 0 0-1.371.695zm8.55 39.274c-1.037 2.816-2.195 5.224-3.537 7.363-1.963 3.112-4.212 6.267-8.258 7.653-1.872.643-4.491.878-6.136-.051-.755-.422-1.21-1.052-1.397-1.922a4.417 4.417 0 0 1-.079-.519c-.073-.789.277-2.099.644-2.865 2.431-5.106 11.373-9.921 19.102-10.501-.025.058-.045.116-.068.172-.094.221-.189.449-.271.67z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M368.352 278.177h47.894v12.464h-47.894zM367.741 243.287h47.897v24.924h-47.897zM118.896 230.027h29.923v127.564h-29.923zM186.928 154.219h115.485v21.567H186.928z"
                          fill="#7ab0c9"
                          data-original="#7ab0c9"
                          className=""
                        ></path>
                        <path
                          d="M316.046 180.513h21.567v21.564h-21.567z"
                          fill="#cce5ef"
                          data-original="#cce5ef"
                        ></path>
                        <path
                          d="M316.046 154.219h21.567v21.567h-21.567z"
                          fill="#32c1a8"
                          data-original="#32c1a8"
                        ></path>
                        <path
                          d="M316.046 206.812h21.567v21.564h-21.567z"
                          fill="#ffc972"
                          data-original="#ffc972"
                        ></path>
                        <path
                          d="M342.068 180.513h21.567v21.564h-21.567z"
                          fill="#ff8777"
                          data-original="#ff8777"
                        ></path>
                        <path
                          d="M342.068 154.219h21.567v21.567h-21.567z"
                          fill="#7ab0c9"
                          data-original="#7ab0c9"
                          className=""
                        ></path>
                        <path
                          d="M367.615 154.219h21.564v21.567h-21.564zM367.615 180.513h21.564v21.564h-21.564z"
                          fill="#24004d"
                          data-original="#24004d"
                        ></path>
                        <path
                          d="M342.068 206.812h21.567v21.564h-21.567z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M367.615 206.812h21.564v21.564h-21.564z"
                          fill="#24004d"
                          data-original="#24004d"
                        ></path>
                        <path
                          d="M367.615 180.513h21.564v21.564h-21.564z"
                          fill="#cce5ef"
                          data-original="#cce5ef"
                        ></path>
                        <path
                          d="M367.615 154.219h21.564v21.567h-21.564z"
                          fill="#ff4e4e"
                          data-original="#ff4e4e"
                        ></path>
                        <path
                          d="M393.158 154.219h21.566v21.567h-21.566z"
                          fill="#ffae24"
                          data-original="#ffae24"
                        ></path>
                        <path
                          d="M393.158 180.513h21.566v21.564h-21.566z"
                          fill="#a8e0d4"
                          data-original="#a8e0d4"
                        ></path>
                        <path
                          d="M367.615 206.812h21.564v21.564h-21.564z"
                          fill="#ffa219"
                          data-original="#ffa219"
                        ></path>
                        <path
                          d="M393.158 206.812h21.566v21.564h-21.566z"
                          fill="#ffa097"
                          data-original="#ffa097"
                        ></path>
                        <path
                          d="m374.395 307.673-.291 1.17-1.221.182 2.372 21.186 16.393 9.26 10.849-9.667-7.32-17.344z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="m385.645 320.296-11.25-12.622-1.512 1.352 11.245 12.616a2.728 2.728 0 0 0 .408 3 2.707 2.707 0 0 0 3.821.216 2.702 2.702 0 0 0-2.712-4.562"
                          fill="#42758a"
                          data-original="#42758a"
                          className=""
                        ></path>
                        <path
                          d="M410.112 333.8a1.7 1.7 0 0 1-.138 2.4l-12.83 11.437a1.706 1.706 0 0 1-2.405-.136l-3.08-3.459a1.7 1.7 0 0 1 .139-2.399l12.834-11.44a1.7 1.7 0 0 1 2.398.136l3.082 3.461z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M184.719 114.339c0-26.87-21.783-48.652-48.651-48.652s-48.654 21.782-48.654 48.652c0 17.742 9.497 33.257 23.683 41.754v19.064a7.475 7.475 0 0 0 7.474 7.478h35.723a7.476 7.476 0 0 0 7.473-7.478v-19.508c13.781-8.59 22.952-23.878 22.952-41.31z"
                          fill="#ffae24"
                          data-original="#ffae24"
                        ></path>
                        <path
                          d="M146.179 135.471c-.013 12.556.048 35.52.206 48.609.005.748.065 1.815.03 2.86-.03 1.179.168 2.201-.776 2.762-.198.116-1.141.186-1.536-.106-1.092-.816-.682-4.202-.697-5.64-.156-12.941-.126-35.547-.208-48.431-4.513-.452-9.016-.112-13.531-.322.003 13.073.405 34.431.566 47.951.02 1.46.669 4.73-.563 5.626-.397.296-1.208.283-1.627-.014-.831-.595-.741-1.997-.756-2.868-.16-13.302-.493-34.59-.654-47.871-.008-.661.187-2.628.054-2.771-.222-.242-3.081-.003-3.784-.04-2.796-.151-6.208-.871-8.788-3.044-4.772-4.016-5.089-10.381-2.157-14.325 3.561-4.782 10.726-4.745 15.159.522 3.491 4.146 2.487 9.025 2.603 13.88 4.392.062 8.782.097 13.17.147-.206-2.217-.247-4.781.003-7.244.08-.796.07-1.683.244-2.406 1.66-6.919 10.308-10.688 15.801-5.909.033.028.06.062.09.089 4.507 4.505 4.517 11.579-.531 15.729-3.885 3.199-8.195 2.706-12.318 2.816zm11.644-6.667c2.082-2.663 2.048-7.153-.658-9.659-2.42-2.238-5.957-1.784-8.211 0-3.169 2.501-2.83 5.489-2.966 8.191-.098 1.898-.019 3.786.33 5.095 3.553.196 8.419.32 11.505-3.627zm-40.544-11.342c-1.336.415-3.296 2.425-3.746 3.712-.696 2.002-.304 5.318 1.353 7.339 2.604 3.189 6.181 3.648 9.062 3.678.818.01 2.33.27 2.614-.06.023-.028.055-1.83.061-2.594.01-1.079.007-2.11-.033-2.679-.204-2.924-.404-5.654-2.979-7.723-2.102-1.683-4.515-2.245-6.332-1.673z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M108.756 148.153a5.12 5.12 0 0 1-3.562-1.445 44.913 44.913 0 0 1-11.742-19.268 5.12 5.12 0 0 1 3.43-6.382 5.119 5.119 0 0 1 6.381 3.433 34.594 34.594 0 0 0 9.063 14.853 5.133 5.133 0 0 1 .111 7.253 5.131 5.131 0 0 1-3.681 1.556zM96.682 119.642a5.123 5.123 0 0 1-5.124-5.119c0-15.777 8.051-30.096 21.548-38.308a5.121 5.121 0 1 1 5.326 8.75c-10.41 6.338-16.624 17.385-16.624 29.558a5.124 5.124 0 0 1-5.126 5.119z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                        <path
                          d="M156.61 187.177v-2.082a2.626 2.626 0 0 0-2.629-2.625h-34.347a2.625 2.625 0 0 0-2.624 2.625v2.082a2.622 2.622 0 0 0 2.624 2.621 2.63 2.63 0 0 0-2.624 2.632v2.079a2.624 2.624 0 0 0 2.624 2.626 2.626 2.626 0 0 0-2.624 2.628v2.081a2.625 2.625 0 0 0 2.624 2.626h6.879c.032 5.249 4.297 9.499 9.554 9.499 5.258 0 9.523-4.25 9.554-9.499h8.359a2.626 2.626 0 0 0 2.629-2.626v-2.081a2.627 2.627 0 0 0-2.629-2.628 2.625 2.625 0 0 0 2.629-2.626v-2.079a2.63 2.63 0 0 0-2.629-2.632 2.623 2.623 0 0 0 2.63-2.621z"
                          fill="#f8faff"
                          data-original="#f8faff"
                          className=""
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">Web apps</h3>
                  <p>
                    From intuitive user experiences, to front end design and
                    backend web apps we tailor the experience to maximise the
                    efficiency of your work-flow.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-4 text-black ring hover:ring-blue-400 transition-all duration-300 ring-gray-300">
                  <div className="flex size-18 items-center justify-center rounded-sm bg-blue-100 p-1">
                    <svg
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      className="size-full object-contain"
                    >
                      <g>
                        <path
                          fill="#c6d5ff"
                          d="M505.843 330.051h-.194l-2.164-236.929a34.538 34.538 0 0 0-34.438-34.135L40.305 60.606A34.481 34.481 0 0 0 6 95.1c0 .767-.022-16.688.362 271.176a34.513 34.513 0 0 0 34.3 34.391l175.264.719v16.084h-46.889v35.543H343.3V417.47h-46.882v-15.755l57.125.234v25.578c0 14.053 10.745 25.485 23.951 25.485h81.349c13.206 0 23.951-11.432 23.951-25.485v-26.958A34.471 34.471 0 0 0 506 367.737Z"
                          opacity="1"
                          data-original="#ffffff"
                          className=""
                        ></path>
                        <path
                          fill="#b2aca3"
                          d="M228.217 373.477h55.908v61.764h-55.908z"
                          opacity="1"
                          data-original="#b2aca3"
                        ></path>
                        <path
                          fill="#eae5db"
                          d="M181.33 429.764h149.68v10.955H181.33zM493.706 367.787l-.107-10.973-2.408-263.586a22.139 22.139 0 0 0-22.224-21.947L40.348 72.9a22.139 22.139 0 0 0-22.054 22.182c0 .768-.023-16.693.362 271.171a22.138 22.138 0 0 0 22.054 22.118l430.771 1.769a22.16 22.16 0 0 0 22.225-22.353Z"
                          opacity="1"
                          data-original="#eae5db"
                          className=""
                        ></path>
                        <path
                          fill="#00abfe"
                          d="m50.716 124.485 188.1 1.782-4.182 177.91-186.362-1.241Z"
                          opacity="1"
                          data-original="#00abfe"
                          className=""
                        ></path>
                        <path
                          fill="#7ad001"
                          d="m49.551 209.577 30.786-29.17a27.748 27.748 0 0 1 40.781 2.841l36.369 45.606 15.255-13.9a27.216 27.216 0 0 1 35.321-1.147l28.166 22.507-1.6 67.867-186.357-1.245Z"
                          opacity="1"
                          data-original="#7ad001"
                          className=""
                        ></path>
                        <circle
                          cx="164.175"
                          cy="167.392"
                          r="16.328"
                          fill="#ffb020"
                          opacity="1"
                          data-original="#ffb020"
                        ></circle>
                        <path
                          fill="#ff605b"
                          d="m261.053 124.653-.222 51.54 191.009 2.512-.403-53.89-190.384-.162z"
                          opacity="1"
                          data-original="#ff605b"
                        ></path>
                        <path
                          fill="#ffb020"
                          d="m258.195 199.301-.938 38.844 96.311.231-1.901-37.118-93.472-1.957z"
                          opacity="1"
                          data-original="#ffb020"
                        ></path>
                        <path
                          fill="#b2aca3"
                          d="M254.009 273.37a2.5 2.5 0 0 1 0-5c61.128 0 125.187 2.13 184.271 1.772h.015a2.5 2.5 0 0 1 .015 5c-59.319.358-123.037-1.772-184.301-1.772ZM438.3 305.505h-.045c-19.008-.337-38.4-.452-57.152-.562-41.807-.247-85.036-.5-127.655-3.225a2.5 2.5 0 0 1 .32-4.99c42.473 2.714 85.63 2.969 127.364 3.215 18.768.111 38.174.225 57.211.563a2.5 2.5 0 0 1-.043 5Z"
                          opacity="1"
                          data-original="#b2aca3"
                        ></path>
                        <path
                          fill="#a369f7"
                          d="m493.706 367.787-.107-25.442H18.634l.022 23.908a22.138 22.138 0 0 0 22.054 22.118l430.771 1.769a22.16 22.16 0 0 0 22.225-22.353Z"
                          opacity="1"
                          data-original="#a369f7"
                          className=""
                        ></path>
                        <circle
                          cx="257.257"
                          cy="365.688"
                          r="11.366"
                          fill="#eae5db"
                          opacity="1"
                          data-original="#eae5db"
                          className=""
                        ></circle>
                        <path
                          fill="#00abfe"
                          d="M470.5 257.948v169.579c0 7.278-5.214 13.191-11.657 13.191h-81.35c-6.431 0-11.657-5.913-11.657-13.191V257.948c0-7.278 5.226-13.191 11.657-13.191h81.35c6.444 0 11.657 5.913 11.657 13.191Z"
                          opacity="1"
                          data-original="#00abfe"
                          className=""
                        ></path>
                        <path
                          fill="#eae5db"
                          d="M466.591 264.29v155.964c0 7.072-5.226 12.8-11.658 12.8h-73.528c-6.431 0-11.657-5.724-11.657-12.8V264.29c0-7.072 5.226-12.8 11.657-12.8h14.221v2.493c0 4.186 3.1 7.585 6.91 7.585H433.8c3.813 0 6.909-3.4 6.909-7.585v-2.493h14.221c6.435.003 11.661 5.728 11.661 12.8Z"
                          opacity="1"
                          data-original="#eae5db"
                          className=""
                        ></path>
                        <path
                          fill="#00abfe"
                          d="m376.054 269.6 85.126.807-1.893 80.514-84.339-.562Z"
                          opacity="1"
                          data-original="#00abfe"
                          className=""
                        ></path>
                        <path
                          fill="#7ad001"
                          d="m375.527 308.109 13.932-13.2a12.557 12.557 0 0 1 18.456 1.286l16.459 20.638 6.9-6.292a12.318 12.318 0 0 1 15.985-.519l12.746 10.186-.722 30.714-84.339-.562Z"
                          opacity="1"
                          data-original="#7ad001"
                          className=""
                        ></path>
                        <circle
                          cx="427.401"
                          cy="289.018"
                          r="7.389"
                          fill="#ffb020"
                          opacity="1"
                          data-original="#ffb020"
                        ></circle>
                        <path
                          fill="#ff605b"
                          d="m376.28 356.21-.078 18.075 66.986.881-.141-18.899-66.767-.057z"
                          opacity="1"
                          data-original="#ff605b"
                        ></path>
                        <path
                          fill="#ffb020"
                          d="m375.277 382.388-.329 13.623 33.776.081-.666-13.017-32.781-.687z"
                          opacity="1"
                          data-original="#ffb020"
                        ></path>
                        <path
                          fill="#b2aca3"
                          d="M377.035 409.4a2.5 2.5 0 0 1 0-5c21.644 0 44.231.752 65.448.629h.015a2.5 2.5 0 0 1 .015 5c-21.334.121-43.532-.629-65.478-.629ZM442.5 420.81h-.045c-21.782-.385-43.763.055-65.722-1.348a2.5 2.5 0 1 1 .319-4.99c21.8 1.393 43.794.954 65.491 1.339a2.5 2.5 0 0 1-.043 5Z"
                          opacity="1"
                          data-original="#b2aca3"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">Data storage</h3>
                  <p>
                    We're comfortable working with standard relational databases
                    like SQL and document databases like Cosmos, and we harness
                    the power of cloud storage for media content.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-4 text-black ring hover:ring-blue-400 transition-all duration-300 ring-gray-300">
                  <div className="flex size-18 items-center justify-center rounded-sm bg-blue-100 p-1">
                    <svg
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      className="size-full object-contain"
                    >
                      <g>
                        <rect
                          width="23.69"
                          height="78.95"
                          x="96.04"
                          y="402.21"
                          fill="#ff832f"
                          rx="4.83"
                          opacity="1"
                          data-original="#ff832f"
                        ></rect>
                        <path
                          fill="#ffb833"
                          d="M91.76 131a26 26 0 0 1 6.61 4.4 27.56 27.56 0 0 1 8 13.82 20.28 20.28 0 0 1 5-12.82 20.07 20.07 0 0 1 9.81-6 19 19 0 0 1-9-3.81 19.47 19.47 0 0 1-7-12 17.32 17.32 0 0 1-3 9.41 17.66 17.66 0 0 1-10.42 7zM116.23 144.9a9.08 9.08 0 0 1 2.23 1.49 9.26 9.26 0 0 1 2.7 4.65 6.67 6.67 0 0 1 5-6.34 6.42 6.42 0 0 1-3-1.28 6.6 6.6 0 0 1-2.36-4 5.78 5.78 0 0 1-1 3.17 5.88 5.88 0 0 1-3.57 2.31zM90.2 119.68a5.94 5.94 0 0 1 1.52 1 6.39 6.39 0 0 1 1.85 3.19 4.55 4.55 0 0 1 3.43-4.33 4.33 4.33 0 0 1-2.07-.88 4.49 4.49 0 0 1-1.62-2.77 3.94 3.94 0 0 1-3.09 3.79zM275.87 43.09a19 19 0 0 1 4.8 3.2 20 20 0 0 1 5.82 10 14.42 14.42 0 0 1 10.77-13.68 13.61 13.61 0 0 1-6.55-2.76 14.18 14.18 0 0 1-5.09-8.73 12.61 12.61 0 0 1-2.19 6.88 12.8 12.8 0 0 1-7.56 5.09zM293.65 53.17a6.22 6.22 0 0 1 1.62 1.08 6.69 6.69 0 0 1 2 3.38 5 5 0 0 1 1.23-3.14 4.89 4.89 0 0 1 2.4-1.47 4.56 4.56 0 0 1-2.21-.93 4.76 4.76 0 0 1-1.71-2.94 4.26 4.26 0 0 1-.74 2.3 4.34 4.34 0 0 1-2.59 1.72zM274.73 34.83a4.42 4.42 0 0 1 2.45 3.06 3.45 3.45 0 0 1 .84-2.15 3.36 3.36 0 0 1 1.64-1 3.13 3.13 0 0 1-1.51-.63 3.29 3.29 0 0 1-1.17-2 3 3 0 0 1-.5 1.58 3 3 0 0 1-1.75 1.14zM182 384.53l-55.55.42q5.05-33.26 10.1-66.49h55.55q-5.02 33.03-10.1 66.07z"
                          opacity="1"
                          data-original="#ffb833"
                          className=""
                        ></path>
                        <rect
                          width="201.99"
                          height="12.91"
                          x="85.8"
                          y="381.3"
                          fill="#ff832f"
                          rx="6.08"
                          opacity="1"
                          data-original="#ff832f"
                        ></rect>
                        <path
                          fill="#ff832f"
                          d="M301.15 344.75H70.43a11.18 11.18 0 0 1-11.13-10L44.43 190.06a11.19 11.19 0 0 1 11.13-12.34h220.57a11.19 11.19 0 0 1 11 9.28l25 144.66a11.18 11.18 0 0 1-10.98 13.09z"
                          opacity="1"
                          data-original="#ff832f"
                        ></path>
                        <path
                          fill="#fff3e3"
                          d="M70.43 334.65a1.08 1.08 0 0 1-1.09-1L54.48 189a1 1 0 0 1 .27-.84 1 1 0 0 1 .81-.36h220.57a1.08 1.08 0 0 1 1.08.91l25 144.65a1.09 1.09 0 0 1-1.08 1.27z"
                          opacity="1"
                          data-original="#fff3e3"
                          className=""
                        ></path>
                        <rect
                          width="352.22"
                          height="18.27"
                          x="32.91"
                          y="394.2"
                          fill="#ffb833"
                          rx="3.57"
                          opacity="1"
                          data-original="#ffb833"
                          className=""
                        ></rect>
                        <rect
                          width="137.84"
                          height="63.86"
                          x="141.49"
                          y="77.74"
                          fill="#ffb833"
                          rx="30.1"
                          opacity="1"
                          data-original="#ffb833"
                          className=""
                        ></rect>
                        <path
                          fill="#ffb833"
                          d="M230.25 134.67a20.49 20.49 0 0 0 1.86 10.61c3.48 7.2 10.64 10.25 15.74 11.54a2.63 2.63 0 0 0 3-3.7 31 31 0 0 1-2.29-20.29z"
                          opacity="1"
                          data-original="#ffb833"
                          className=""
                        ></path>
                        <circle
                          cx="389.7"
                          cy="134.68"
                          r="71.11"
                          fill="#ffdb99"
                          opacity="1"
                          data-original="#ffdb99"
                        ></circle>
                        <path
                          fill="#ffdb99"
                          d="M421.08 195.59c1.1 13.26 4.93 31 18.27 44 6.77 6.57 11.8 7.84 16.87 11.28 23.86 16.21 19.7 61.23 19 94.69-.62 29.58 1 70.18 10.82 120.32 0 0-87 34.41-175.28 0 0 0 4.57-13.09 9-31 6-24 7.45-44.21 8.25-59.93 4-77.73-12.51-102.43 5.08-118.44 13.89-12.64 32.19-4.53 42-21 0 0 2.37-4 7.44-34.51z"
                          opacity="1"
                          data-original="#ffdb99"
                        ></path>
                        <path
                          fill="#ffdb99"
                          d="M419.39 206.66c-50.77 16.88-72.9 9.23-83.75-.51-30-26.94-17.05-108.63-17.05-108.64s56.89-64 112.76-20.47c3.91 3 20 15 26.41 36.27 9.33 31.11-5.91 68.42-38.37 93.35z"
                          opacity="1"
                          data-original="#ffdb99"
                        ></path>
                        <path
                          fill="#383333"
                          d="M346.88 131.57a20.09 20.09 0 0 0-11.78-2.95c-2.81.14-6.61.31-7.62 2.59a3.07 3.07 0 0 0 .3 3.09c1.44 1.67 4.62-.16 10-.59 7-.56 11.78 1.77 12.17.73.24-.75-2.14-2.27-3.07-2.87z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                        <ellipse
                          cx="356.91"
                          cy="161.76"
                          fill="#ffc871"
                          rx="4.86"
                          ry="7.81"
                          transform="rotate(-89.4 356.647 161.841)"
                          opacity="1"
                          data-original="#ffc871"
                        ></ellipse>
                        <path
                          fill="#ffdb99"
                          d="M383.32 137.3a13.4 13.4 0 0 1 9.22-5.34 10.28 10.28 0 0 1 6.37 1.33c6.26 4.26 6.68 20.73-2.12 26.35-4.92 3.13-10.88 1.71-12.91 1.13l-.56-23.47z"
                          opacity="1"
                          data-original="#ffdb99"
                        ></path>
                        <path
                          fill="#383333"
                          d="M392.19 155.24a.34.34 0 0 1-.23-.08.37.37 0 0 1-.07-.52c1.86-2.45 2.51-4.76 1.95-6.87-1-3.67-5.33-5.57-5.37-5.59a.38.38 0 0 1-.23-.4.39.39 0 0 1 .34-.32l9.17-1a.37.37 0 0 1 .41.33.36.36 0 0 1-.33.41l-7.94.87c1.47.86 3.93 2.67 4.68 5.49.62 2.35-.08 4.88-2.08 7.52a.38.38 0 0 1-.3.16z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                        <path
                          fill="#383333"
                          fillRule="evenodd"
                          d="M337.4 153.45a5.88 5.88 0 1 1-.62-8.27 5.88 5.88 0 0 1 .62 8.27z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                        <path
                          fill="#383333"
                          d="M379.85 216.46a.5.5 0 0 1 0-1c11.28-.64 31.63-6.81 31.83-6.88a.52.52 0 0 1 .63.34.5.5 0 0 1-.34.62c-.2.06-20.66 6.27-32.06 6.92zM334.12 189a10.16 10.16 0 0 1-1.44-.1.37.37 0 0 1-.32-.42.36.36 0 0 1 .42-.32 9.49 9.49 0 0 0 8.57-3.25.38.38 0 0 1 .53-.05.37.37 0 0 1 0 .53 10.17 10.17 0 0 1-7.8 3.61z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                        <path
                          fill="#ffdb99"
                          d="M315.92 135.86s.69 9.6-5.56 14.46-.12 15 13.32 11.53c0 0 .69-26.99-7.76-25.99z"
                          opacity="1"
                          data-original="#ffdb99"
                        ></path>
                        <path
                          fill="#383333"
                          d="M328 374.94c-.8 15.72-2.29 35.9-8.25 59.93-4.44 17.91-9 31-9 31 88.32 34.41 175.28 0 175.28 0-9.78-50.14-11.44-90.74-10.82-120.32.7-33.46 4.86-78.48-19-94.69-3.09-2.1-6.17-3.39-9.63-5.57-29 10.27-81.87-.55-81.87-.55C355 249 343 247.53 333.1 256.5c-17.59 16.01-1.1 40.71-5.1 118.44z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                        <g fill="#ffb833">
                          <path
                            d="M89.64 205.34h-9a1.59 1.59 0 0 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM98.74 203.75a1.59 1.59 0 0 1 1.59-1.59 1.59 1.59 0 0 1 1.59 1.59 1.59 1.59 0 0 1-1.59 1.59 1.59 1.59 0 0 1-1.59-1.59z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M224.35 205.34a1.59 1.59 0 1 1 1.59-1.59 1.59 1.59 0 0 1-1.59 1.59zm-10.68 0h-18.18a1.6 1.6 0 0 1-1.08-.41 1.53 1.53 0 0 1-1.06.41 1.59 1.59 0 0 1 0-3.18 1.54 1.54 0 0 1 1.06.42 1.61 1.61 0 0 1 1.08-.42h18.18a1.59 1.59 0 0 1 0 3.18zm-31 0h-18.19a1.56 1.56 0 0 1-1.07-.41 1.54 1.54 0 0 1-1.07.41 1.59 1.59 0 1 1 1.07-2.76 1.57 1.57 0 0 1 1.07-.42h18.18a1.59 1.59 0 0 1 0 3.18zm-31 0h-18.2a1.57 1.57 0 0 1-1.07-.41 1.54 1.54 0 0 1-1.07.41 1.59 1.59 0 0 1 0-3.18 1.55 1.55 0 0 1 1.07.42 1.58 1.58 0 0 1 1.07-.42h18.18a1.59 1.59 0 0 1 0 3.18zm-31 0h-18.21a1.59 1.59 0 1 1 0-3.18h18.18a1.59 1.59 0 0 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M235.51 205.34h-9a1.59 1.59 0 1 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM93.53 222.38h-9a1.59 1.59 0 1 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM103.43 220.79a1.6 1.6 0 0 1 1.6-1.59 1.59 1.59 0 0 1 1.58 1.59 1.59 1.59 0 0 1-1.58 1.59 1.6 1.6 0 0 1-1.6-1.59z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M171.71 222.38a1.59 1.59 0 1 1 1.59-1.59 1.59 1.59 0 0 1-1.59 1.59zm-11.5 0h-19.54a1.57 1.57 0 0 1-1.15-.5 1.59 1.59 0 1 1-1.16-2.68 1.64 1.64 0 0 1 1.16.49 1.6 1.6 0 0 1 1.15-.49h19.54a1.59 1.59 0 0 1 0 3.18zm-33.35 0h-19.54a1.59 1.59 0 1 1 0-3.18h19.54a1.59 1.59 0 1 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M183 222.38h-9a1.59 1.59 0 1 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM93.53 238.12h-9a1.59 1.59 0 1 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM102.28 236.52a1.59 1.59 0 0 1 1.59-1.59 1.59 1.59 0 0 1 1.6 1.59 1.6 1.6 0 0 1-1.6 1.6 1.6 1.6 0 0 1-1.59-1.6z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M223.93 238.12a1.6 1.6 0 1 1 1.59-1.6 1.6 1.6 0 0 1-1.59 1.6zm-10.36 0H196a1.62 1.62 0 0 1-1-.39 1.53 1.53 0 0 1-1 .39 1.6 1.6 0 0 1 0-3.19 1.58 1.58 0 0 1 1 .38 1.66 1.66 0 0 1 1-.38h17.59a1.6 1.6 0 1 1 0 3.19zm-30 0H166a1.57 1.57 0 0 1-1-.39 1.59 1.59 0 1 1-1-2.8 1.64 1.64 0 0 1 1 .38 1.62 1.62 0 0 1 1-.38h17.6a1.6 1.6 0 0 1 0 3.19zm-30 0H136a1.53 1.53 0 0 1-1-.39 1.62 1.62 0 0 1-1 .39 1.6 1.6 0 0 1 0-3.19 1.66 1.66 0 0 1 1 .38 1.58 1.58 0 0 1 1-.38h17.6a1.6 1.6 0 0 1 0 3.19zm-30 0h-17.6a1.6 1.6 0 0 1 0-3.19h17.6a1.6 1.6 0 0 1 0 3.19z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M235 238.12h-9a1.59 1.59 0 1 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM96.74 254.18h-9a1.59 1.59 0 0 1 0-3.18h9a1.59 1.59 0 1 1 0 3.18zM103.91 252.6a1.59 1.59 0 0 1 1.59-1.6 1.59 1.59 0 0 1 1.58 1.59 1.59 1.59 0 0 1-1.58 1.59 1.59 1.59 0 0 1-1.59-1.58z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M156.28 254.19a1.59 1.59 0 1 1 1.6-1.58 1.59 1.59 0 0 1-1.6 1.58zm-8.76 0h-14.88a1.49 1.49 0 0 1-.87-.27 1.57 1.57 0 0 1-.88.27 1.59 1.59 0 1 1 0-3.18 1.64 1.64 0 0 1 .88.26 1.56 1.56 0 0 1 .87-.26h14.88a1.59 1.59 0 1 1 0 3.17zm-25.39 0h-14.89a1.59 1.59 0 0 1 0-3.18h14.88a1.59 1.59 0 1 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M167.05 254.2h-9a1.59 1.59 0 1 1 0-3.18h9a1.6 1.6 0 0 1 0 3.19zM100 270.42h-9a1.59 1.59 0 1 1 0-3.18h9a1.59 1.59 0 1 1 0 3.18zM108.49 268.83a1.59 1.59 0 0 1 1.59-1.58 1.59 1.59 0 0 1 1.59 1.58 1.59 1.59 0 0 1-1.59 1.59 1.59 1.59 0 0 1-1.59-1.59z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M198 270.45a1.59 1.59 0 0 1 0-3.18 1.55 1.55 0 0 1 1.13.47 1.52 1.52 0 0 1 .46 1.12 1.59 1.59 0 0 1-1.59 1.59zm-10.1 0h-17.2a1.62 1.62 0 0 1-1-.36 1.63 1.63 0 0 1-2.14-.11 1.57 1.57 0 0 1-.46-1.12 1.59 1.59 0 0 1 2.6-1.23 1.62 1.62 0 0 1 1-.36h17.18a1.57 1.57 0 0 1 1.12.47 1.54 1.54 0 0 1 .47 1.12 1.59 1.59 0 0 1-1.59 1.58zm-29.3 0h-17.19a1.65 1.65 0 0 1-1-.36 1.59 1.59 0 1 1 0-2.46 1.62 1.62 0 0 1 1-.36h17.18a1.59 1.59 0 1 1 0 3.18zm-29.3 0h-17.19a1.59 1.59 0 0 1-1.59-1.59 1.59 1.59 0 0 1 1.59-1.58h17.17a1.59 1.59 0 1 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M209 270.45h-9a1.59 1.59 0 0 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM103.26 286.85h-9a1.59 1.59 0 1 1 0-3.18h9a1.6 1.6 0 0 1 0 3.19zM113.56 285.25a1.59 1.59 0 0 1 1.59-1.58 1.59 1.59 0 0 1 1.59 1.59 1.59 1.59 0 0 1-1.59 1.59 1.6 1.6 0 0 1-1.59-1.6z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M184.13 286.88a1.59 1.59 0 1 1 0-3.18 1.56 1.56 0 0 1 1.13.47 1.52 1.52 0 0 1 .45 1.11 1.59 1.59 0 0 1-1.58 1.6zm-11.89 0h-20.22a1.58 1.58 0 0 1-1.19-.53 1.59 1.59 0 1 1 0-2.12 1.59 1.59 0 0 1 1.19-.53h20.22a1.57 1.57 0 0 1 1.12.47 1.55 1.55 0 0 1 .46 1.12 1.59 1.59 0 0 1-1.58 1.59zm-34.49 0h-20.22a1.59 1.59 0 1 1 0-3.18h20.22a1.53 1.53 0 0 1 1.12.47 1.54 1.54 0 0 1 .47 1.12 1.59 1.59 0 0 1-1.59 1.56z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M195.53 286.89h-9a1.59 1.59 0 0 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18zM106.58 303.45h-9a1.6 1.6 0 0 1 0-3.19h9a1.59 1.59 0 0 1 0 3.18zM115.6 301.87a1.59 1.59 0 0 1 1.59-1.59 1.59 1.59 0 0 1 1.59 1.59 1.59 1.59 0 0 1-1.59 1.59 1.6 1.6 0 0 1-1.59-1.59z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M240.31 303.5a1.59 1.59 0 1 1 1.12-2.72 1.61 1.61 0 0 1 .47 1.13 1.59 1.59 0 0 1-1.59 1.59zm-10.62 0h-18a1.59 1.59 0 0 1-1.06-.4 1.64 1.64 0 0 1-2.19-.07 1.56 1.56 0 0 1-.46-1.12 1.59 1.59 0 0 1 2.65-1.19 1.61 1.61 0 0 1 1-.4h18.05a1.59 1.59 0 0 1 0 3.18zm-30.78 0h-18a1.58 1.58 0 0 1-1.06-.4 1.67 1.67 0 0 1-1.07.4 1.59 1.59 0 0 1 0-3.18 1.57 1.57 0 0 1 1.08.4 1.49 1.49 0 0 1 1.06-.4h18a1.59 1.59 0 0 1 0 3.18zm-30.78 0h-18a1.57 1.57 0 0 1-1.07-.42 1.53 1.53 0 0 1-1.05.41 1.59 1.59 0 1 1 0-3.17 1.56 1.56 0 0 1 1.07.4 1.51 1.51 0 0 1 1.06-.4h18a1.58 1.58 0 0 1 1.13.46 1.55 1.55 0 0 1 .47 1.13 1.59 1.59 0 0 1-1.61 1.56zm-30.77 0h-18.05a1.59 1.59 0 1 1 0-3.18h18a1.59 1.59 0 1 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M251.45 303.51h-9a1.59 1.59 0 0 1 0-3.18h9a1.6 1.6 0 0 1 0 3.19zM109.94 320.24h-9a1.6 1.6 0 0 1 0-3.19h9a1.59 1.59 0 1 1 0 3.18zM119.05 318.65a1.59 1.59 0 0 1 1.6-1.58 1.59 1.59 0 0 1 1.58 1.59 1.59 1.59 0 0 1-1.59 1.59 1.6 1.6 0 0 1-1.59-1.6z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M213.77 320.31a1.6 1.6 0 1 1 1.13-2.72 1.56 1.56 0 0 1 .47 1.12 1.6 1.6 0 0 1-1.6 1.6zm-10.7 0h-18.2a1.51 1.51 0 0 1-1.07-.41 1.64 1.64 0 0 1-2.2-.05 1.6 1.6 0 0 1 1.13-2.72 1.6 1.6 0 0 1 1.07.41 1.6 1.6 0 0 1 1.07-.41h18.2a1.59 1.59 0 1 1 0 3.18zm-31 0h-18.21a1.59 1.59 0 0 1-1.07-.41 1.62 1.62 0 0 1-2.19-.05 1.59 1.59 0 0 1 1.12-2.71 1.56 1.56 0 0 1 1.07.41 1.6 1.6 0 0 1 1.08-.41H172a1.59 1.59 0 1 1 0 3.18zm-31 0h-18.29a1.57 1.57 0 0 1-1.12-.47 1.58 1.58 0 0 1 1.12-2.71H141a1.59 1.59 0 0 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                          <path
                            d="M224.94 320.31h-9a1.59 1.59 0 0 1 0-3.18h9a1.59 1.59 0 0 1 0 3.18z"
                            fill="#ffb833"
                            opacity="1"
                            data-original="#ffb833"
                            className=""
                          ></path>
                        </g>
                        <path
                          fill="#fff3e3"
                          d="M189.57 127.67a2 2 0 0 1-1.36-.53l-16.88-15.65a2.05 2.05 0 0 1-.65-1.43 2 2 0 0 1 .59-1.45l16.89-16.89a2 2 0 0 1 2.84 2.83L175.57 110l15.36 14.23a2 2 0 0 1-1.36 3.47zM231 127.67a2 2 0 0 1-1.46-.64 2 2 0 0 1 .11-2.83L245 110l-15.41-15.45a2 2 0 1 1 2.83-2.83l16.89 16.89a2 2 0 0 1-.06 2.88l-16.89 15.65a2 2 0 0 1-1.36.53zM200.54 133.79a1.93 1.93 0 0 1-.63-.1 2 2 0 0 1-1.27-2.53l14.83-44.67a2 2 0 1 1 3.79 1.26l-14.83 44.67a2 2 0 0 1-1.89 1.37z"
                          opacity="1"
                          data-original="#fff3e3"
                          className=""
                        ></path>
                        <path
                          fill="#ffdb99"
                          d="M209 361.37s-37 .53-44 1.94-37 15.74-34.65 20.34 6.8 3.76 12.24 1.17 16.23-2.47 25.6.13 28.41 8.95 36.48 7.54 4.33-31.12 4.33-31.12z"
                          opacity="1"
                          data-original="#ffdb99"
                        ></path>
                        <path
                          fill="#383333"
                          d="M349.93 248.64c-5.48.32-13.84 1.62-21.55 7-11.24 7.83-14 19.33-22.81 45.62-3.14 9.32-8.1 23.64-14.86 41.38l-87.52 17.5a35.8 35.8 0 0 0-5.84 33.42c45.19 7.2 78.42 5.91 99.2 3.71 7.7-.81 14.81-1.86 22.81-5.83 29.38-14.58 37.44-51.88 39.78-66.09 0-.01 5.45-63.54-9.21-76.71zM311.14 61.89S294.59 80.58 307.9 97s39 5 59.46 6.11-11.45 42.08 16 51.74c0 0-4.06-17.6 3.52-20.88s14.24-1.85 15.88 5.26-.35 21.87-11.75 22.51 9 56.44 35 44c24.58-11.73 62-83 31.24-123.09C443.1 64.22 413.4 52.2 388.17 56.3 365.59 60 349.79 76 326.43 69.44a47.68 47.68 0 0 1-15.29-7.55z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                        <path
                          fill="#ffffff"
                          d="M327.31 387.69a.49.49 0 0 1-.4-.21.51.51 0 0 1 .11-.7c29.68-21.87 29.4-78.06 29.39-78.63a.5.5 0 0 1 .49-.5.5.5 0 0 1 .5.49c0 .57.3 57.27-29.8 79.45a.54.54 0 0 1-.29.1zM341.36 97.7c-8.31 0-14.54-2.21-18.56-6.58-6.28-6.84-4.77-16.41-4.7-16.81a.5.5 0 0 1 1 .16c0 .1-1.49 9.5 4.47 16 4.44 4.84 11.83 6.88 21.94 6.08a.49.49 0 0 1 .49.45.5.5 0 0 1-.46.54c-1.43.1-2.83.16-4.18.16zM388.14 126.17h-.06a7.8 7.8 0 0 1-6.14-3.84c-4.55-7.74 1.48-24.51 3-28.54-37.77 7-46.25-7.9-46.6-8.55a.49.49 0 0 1 .2-.67.5.5 0 0 1 .68.2c.08.15 8.7 15.13 46.42 7.87a.51.51 0 0 1 .56.69c-.08.2-8.26 20.28-3.43 28.5a6.71 6.71 0 0 0 5.38 3.34.5.5 0 0 1 .44.56.5.5 0 0 1-.45.44zM436.77 185.93a.49.49 0 0 1-.38-.82c24-27.82 23.59-79.25 23.58-79.77a.5.5 0 0 1 .49-.5.49.49 0 0 1 .5.49c0 .52.42 52.32-23.83 80.43a.46.46 0 0 1-.36.17zM411.8 184.17a.5.5 0 0 1-.08-1c26-4.14 33.68-41.29 33.75-41.67a.49.49 0 0 1 .59-.39.51.51 0 0 1 .39.59c-.07.38-7.87 38.21-34.57 42.46zM409.54 160.38a.5.5 0 0 1-.45-.27.49.49 0 0 1 .22-.67c9.42-4.82 13.92-14.91 15.09-17.9-4.52 1-8.2.23-11-2.2-7.63-6.71-5.55-23.88-5.46-24.61a.5.5 0 1 1 1 .13c0 .17-2.1 17.37 5.14 23.73 2.67 2.36 6.36 3 10.95 1.77a.5.5 0 0 1 .49.14.49.49 0 0 1 .11.49c0 .14-4.44 13.48-15.9 19.34a.44.44 0 0 1-.19.05zM383.32 68.88a.49.49 0 0 1-.46-.3.5.5 0 0 1 .26-.66c.21-.09 20.82-8.66 34.69 0a.51.51 0 0 1 .16.69.5.5 0 0 1-.69.15c-13.43-8.42-33.57 0-33.77 0a.43.43 0 0 1-.19.12z"
                          opacity="1"
                          data-original="#ffffff"
                        ></path>
                        <path
                          fill="#383333"
                          d="M331.33 184.48a13.71 13.71 0 0 1-3.22-.33.51.51 0 0 1-.35-.62.52.52 0 0 1 .62-.35c.09 0 9.21 2.4 16.72-6.51a.49.49 0 0 1 .7-.06.49.49 0 0 1 .06.7c-5.12 6.09-10.99 7.17-14.53 7.17z"
                          opacity="1"
                          data-original="#383333"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">
                    DevOps and support
                  </h3>
                  <p>
                    Our commitment doesn't end at development. We provide DevOps
                    ser-vices and ongoing support and maintenance for your
                    platforms, ensuring they remain at peak performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HorizontalScroll />
      <section className="bg-gray-100 py-10 lg:py-20">
        <div className="container">
          <h2 className="mb-8 md:mb-12 md:text-center font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            Why Choose a Leading <br className="hidden lg:block" />
            Website Development Agency in Delhi?
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-3 md:grid-cols-12"
          >
            {featuresData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative flex flex-col overflow-hidden rounded-xl ring ring-border bg-white p-6 transition-all duration-500 ${item.colSpan}`}
              >
                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3
                    className={`mb-3 font-geist text-xl font-semibold text-black`}
                  >
                    {item.title}
                  </h3>
                  <p className={`relative z-10 font-geist text-black`}>
                    {item.description}
                  </p>
                  {item.features && (
                    <ul className="space-y-1.5 pt-6">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle
                            size={14}
                            className="mt-1 shrink-0 text-orange-500"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/demo/coding-bg-3.png')] bg-cover bg-center bg-no-repeat py-10 lg:py-20">
        <div className="container">
          <h2 className="mb-8 md:mb-12 md:text-center font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            Industries Benefiting from Delhi’s <br className='hidden lg:block' />
            Web Development Agencies
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseGeneral.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-geist text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="font-geist">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-10 pb-6 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-start gap-8 lg:gap-16">
            <div className="lg:mt-8 lg:sticky lg:top-32">
              <h2 className="mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Benefits of Web Development Company in Delhi NCR Business
              </h2>
              <p className="mb-4">
                Hiring a web development company in Delhi NCR can bring numerous
                benefits to your business, whether you're a startup, SME, or
                large enterprise. Here’s why investing in a professional web
                development firm in this region is a great choice:
              </p>
              <p className="mb-8">
                If you're planning to develop a website or revamp an existing
                one, hiring a web development company in Delhi NCRcan provide
                affordable, innovative, and scalable solutions to help grow your
                business. Would you like recommendations for the best web
                development firms in the region?
              </p>
              <AnimatedButton href="/enquiry">Enquire Now</AnimatedButton>
            </div>

            <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex-1"
              >
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className="w-full"
                >
                  {capabilitiesData.map((faq, index) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger className="group flex py-6 text-left hover:no-underline [&>.ic-a]:hidden">
                        <div className="flex items-start gap-4">
                          <span className="text-sm font-normal text-gray-400 md:text-base mt-1">
                            0{index + 1}
                          </span>
                          <span className="pr-4 text-lg md:text-xl font-medium text-[#111111]">
                            {faq.title}
                          </span>
                        </div>
                        <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-data-[state=open]:scale-x-[-1] group-data-[state=open]:rotate-180" />
                      </AccordionTrigger>

                      <AccordionContent className="pb-8">
                        {typeof faq.content === "string" ? (
                          <p className="pr-10 text-[15px] leading-relaxed text-gray-600">
                            {faq.content}
                          </p>
                        ) : (
                          faq.content
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <TechStackSection />
      <HowItsWork />
      <ContactForm />
    </>
  )
}


