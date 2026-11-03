"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  Command,
  Gift,
  GraduationCap,
  Menu,
  MessageCircle,
  MessageSquare,
  Users,
  Video,
  X,
} from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { AnimatedButton } from "../common/AnimatedButton"
import CodeWindowIcon from "../icons/code-window-icon"
import MobileAppIcon from "../icons/mobile-app"
import SoftwareIcon from "../icons/software-icon"
import ContentIcon from "../icons/content-icon"
import WhatsAppApiIcon from "../icons/whatsapp-icons"
import SocialMediaIcon from "../icons/social-media-icon"
import SeoIcon from "../icons/seo-icon"
import CommunityIcon from "../icons/community-icon"
import BrandIcon from "../icons/brand-icon"
import EnquiryModal from "../common/EnquiryFormPopup"

type MenuItem = {
  title: string;
  href: string;
  items?: {
    title: string;
    href: string;
    icon?: React.ElementType;    // Make icon optional
    description?: string;        // Make description optional
  }[];
};

const servicesData = [
  {
    category: "Design and Development",
    icon: <Command size={18} className="text-indigo-600" />,
    links: [
      {
        title: "Website Design & Development",
        description: "Modern, responsive websites built for performance.",
        href: "/website-design-and-development",
        icon: CodeWindowIcon,
      },
      {
        title: "Software Development",
        description: "Custom software tailored to your business needs.",
        href: "/software-development",
        icon: SoftwareIcon,
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications.",
        href: "/mobile-app-development",
        icon: MobileAppIcon,
      },
      {
        title: "Content Development Services",
        description: "High-quality content that informs and converts.",
        href: "/content-development-services",
        icon: ContentIcon,
      },
      {
        title: "WhatsApp API Solution",
        description: "Automate customer communication on WhatsApp.",
        href: "/whatsapp-api-solution",
        icon: WhatsAppApiIcon,
      },
    ],
  },
  {
    category: "Digital Marketing Solutions",
    icon: <Command size={18} className="text-orange-500" />,
    links: [
      {
        title: "Social Media Marketing",
        description: "Grow your audience across social platforms.",
        href: "/social-media-marketing",
        icon: SocialMediaIcon,
      },
      {
        title: "Search Engine Optimization",
        description: "Improve rankings and drive organic traffic.",
        href: "/search-engine-optimization",
        icon: SeoIcon,
      },
      {
        title: "Community / Influencer Marketing",
        description: "Build trust through creators and communities.",
        href: "/community-influencer-marketing",
        icon: CommunityIcon,
      },
      {
        title: "Video Marketing",
        description: "Engaging video campaigns that increase reach.",
        href: "/video-marketing",
        icon: Video,
      },
    ],
  },
  {
    category: "Brand Solutions",
    icon: <Command size={18} className="text-black" />,
    links: [
      {
        title: "Brand Strategy / Positioning",
        description: "Define a unique and competitive brand strategy.",
        href: "/brand-strategy-and-positioning",
        icon: BrandIcon,
      },
      {
        title: "Brand Identity Development",
        description: "Create memorable visual brand identities.",
        href: "/brand-identity-development",
        icon: BrandIcon,
      },
      {
        title: "Brand Experience Design",
        description: "Design consistent experiences across touchpoints.",
        href: "/brand-experience-and-design",
        icon: BrandIcon,
      },
    ],
  },
];

const mainLinks: MenuItem[] = [
  {
    title: "Products",
    href: "/products",
    items: [
      {
        title: "Chatbot",
        href: "/chatbot",
        icon: MessageSquare,
        description: "Automate responses and engage visitors 24/7.",
      },
      {
        title: "Online Chat Platform",
        href: "/online-chat-platform",
        icon: MessageCircle,
        description: "Seamless real-time communication for your team.",
      },
      {
        title: "Appointment Scheduled",
        href: "/appointment-scheduled",
        icon: CalendarCheck,
        description: "Effortless booking and calendar management.",
      },
      {
        title: "Lead Management Software",
        href: "/lead-management-software",
        icon: Users,
        description: "Manage leads and learning systems in one place.",
      },
      {
        title: "Admission CRM",
        href: "/admission-crm",
        icon: GraduationCap,
        description: "Streamline student enrollments and tracking.",
      },
      {
        title: "Reward Platform",
        href: "/reward-platform",
        icon: Gift,
        description: "Boost loyalty with custom incentive programs.",
      },
      {
        title: "Whatsapp CRM",
        href: "/whatsapp-crm",
        icon: WhatsAppApiIcon,
        description: "Automate customer communication on WhatsApp.",
      },
    ],
  },
  {
    title: "About", href: "/about", items: [
      { title: "Overview", href: "/about" },
      { title: "Leadership", href: "/about#team" },
      { title: "Our Team", href: "/about#team" },
      { title: "Our Vision", href: "/about#vision" },
    ]
  },
  { title: "Clients", href: "/clients" },
  { title: "Work", href: "/work" },
  { title: "Contact Us", href: "/contact" },
]

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const [isProductsOpen, setIsProductsOpen] = React.useState(false)
  const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false)
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  const [isSticky, setIsSticky] = React.useState(false)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null)

  const phoneNumber = "+91 7838 152 753"
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`

  const toggleMobileAccordion = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section)
  }

  React.useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("enquiry_popup_seen_v2")

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsEnquiryOpen(true)
        sessionStorage.setItem("enquiry_popup_seen_v2", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  React.useEffect(() => {
    if (isEnquiryOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isEnquiryOpen])

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY) {
          setIsSticky(true)
        }
      } else {
        setIsSticky(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <>
      {(isServicesOpen || isProductsOpen) && (
        <div
          className="fixed inset-0 z-40 h-screen w-screen"
          onMouseEnter={() => {
            setIsServicesOpen(false)
            setIsProductsOpen(false)
          }}
        />
      )}
      <header
        // className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white transition-all"
        className={`${isSticky ? "animate-slidedown sticky top-0" : "relative"} right-0 left-0 z-50 w-full border-b border-gray-200 bg-white ${isSticky ? "translate-y-0" : "translate-y-0"}`}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="container mx-auto flex h-22 items-center justify-between px-3 md:px-6 md:py-4">
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center transition-transform hover:scale-105"
          >
            <Image
              src="/images/logo.png"
              width={160}
              height={45}
              alt="Digital Fueled"
              className="w-30 object-contain lg:w-40"
            />
          </Link>

          <nav className="hidden h-full lg:flex lg:items-center">
            <div
              className="relative flex h-full cursor-pointer items-center px-4 py-2"
              onMouseEnter={() => {
                setIsServicesOpen(true)
                setIsProductsOpen(false)
                setHoveredItem("Services")
              }}
            >
              {/* {hoveredItem === "Services" && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-[#d9e5ff7d]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )} */}
              <span className="flex items-center gap-1 text-[14px] font-semibold text-black uppercase transition-colors hover:text-accent">
                Services
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent">
                  <ArrowDown
                    size={14}
                    strokeWidth={3}
                    className={cn(
                      "text-white transition-transform duration-300",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </span>
              </span>
            </div>
            {mainLinks.map((link) => {
              // 1. Explicitly check for "Products" to open the mega-menu
              if (link.title === "Products" && link.items) {
                return (
                  <div
                    key={link.title}
                    className="group relative flex h-full cursor-pointer items-center px-4 py-2"
                    onMouseEnter={() => {
                      setIsProductsOpen(true)
                      setIsServicesOpen(false)
                      setHoveredItem(link.title)
                    }}
                  >
                    <span className="flex items-center gap-1 text-[14px] font-semibold text-black uppercase transition-colors group-hover:text-accent">
                      {link.title}
                    </span>
                  </div>
                )
              }

              // 2. Specific check for "About" to show a simple, small CSS dropdown
              if (link.title === "About" && link.items) {
                return (
                  <div
                    key={link.title}
                    className="group relative flex h-full cursor-pointer items-center px-4 py-2"
                    onMouseEnter={() => {
                      // Ensure mega-menus are closed when hovering over About
                      setIsProductsOpen(false)
                      setIsServicesOpen(false)
                      setHoveredItem(link.title)
                    }}
                  >
                    <Link href={link.href} className="flex items-center gap-1 text-[14px] font-semibold text-black uppercase transition-colors group-hover:text-accent">
                      {link.title}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Simple Small Dropdown Wrapper */}
                    <div className="absolute left-0 top-full hidden pt-2 group-hover:block z-50">
                      <div className="flex w-48 flex-col rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-accent"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              // 3. Standard Links (Clients, Work, Contact Us)
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-[14px] font-semibold text-black uppercase transition-colors hover:text-accent"
                  onMouseEnter={() => {
                    setHoveredItem(link.title)
                    setIsServicesOpen(false)
                    setIsProductsOpen(false)
                  }}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>

          {/* ACTIONS */}
          <div className="relative z-50 flex items-center gap-4 lg:gap-8">

            <div className="hidden lg:flex">
              <AnimatedButton variant="outline" href="/enquiry">
                Enquire Now
              </AnimatedButton>
            </div>
            <div className="flex lg:hidden">
              <Link href='/enquiry' className="text-sm font-semibold underline underline-offset-2 decoration-blue-500">
                Start a Project
              </Link>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-full hover:bg-gray-100 lg:hidden"
                >
                  <svg width="512" height="512" x="0" y="0" viewBox="0 0 24 24" className="size-full object-contain">
                    <g>
                      <path d="M21 6.75H8a.75.75 0 0 1 0-1.5h13a.75.75 0 0 1 0 1.5zm.75 5.25a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 .75-.75zm0 6a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 .75-.75z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                    </g>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-full flex-col bg-white p-0 data-[side=right]:w-full sm:max-w-lg">
                <SheetHeader className="border-b ">
                  <SheetTitle className="mt-1.5">
                    <Image src="/images/logo.png"
                      width={160}
                      height={45}
                      alt="Digital Fueled"
                      className="w-30"
                    />
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Main Menu
                  </SheetDescription>
                </SheetHeader>
                {/* Mobile Menu Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 pb-24">
                  {/* <p className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Menu
                  </p> */}

                  <div className="flex flex-col gap-3">
                    {/* Services Accordion for Mobile */}
                    <div className="border-b border-gray-200 pb-3">
                      <button
                        onClick={() => toggleMobileAccordion("services")}
                        className="flex w-full items-center justify-between text-xl text-gray-900"
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-300 text-gray-400",
                            mobileExpanded === "services" && "rotate-180 text-accent"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "services" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 flex flex-col gap-8">
                              {servicesData.map((group) => (
                                <div key={group.category}>
                                  <h3 className="mb-4 text-[11px] font-medium tracking-widest text-gray-500 uppercase">
                                    {group.category}
                                  </h3>
                                  <div className="flex flex-col gap-3">
                                    {group.links.map((link) => (
                                      <Link
                                        key={link.title}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-start gap-4 rounded-xl bg-gray-50/80 p-2 transition-colors active:bg-blue-50"
                                      >
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-xs">
                                          <link.icon className="h-5 w-5 object-contain" />
                                        </span>
                                        <div className="flex flex-col justify-center">
                                          <span className="text-[15px] font-medium text-gray-900 group-active:text-accent">
                                            {link.title}
                                          </span>
                                          <span className="text-xs text-gray-500 line-clamp-1">{link.description}</span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Main Links (Products + Rest) */}
                    {mainLinks.map((link) => {
                      // Products Accordion for Mobile
                      if (link.items) {
                        return (
                          <div key={link.title} className="border-b border-gray-200 pb-3">
                            <button
                              onClick={() => toggleMobileAccordion(link.title)}
                              className="flex w-full items-center justify-between text-xl text-gray-900"
                            >
                              {link.title}
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 transition-transform duration-300 text-gray-400",
                                  mobileExpanded === link.title && "rotate-180 text-accent"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileExpanded === link.title && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-6 flex flex-col gap-3">
                                    {link.items.map((subItem) => (
                                      <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-start gap-4 rounded-xl bg-gray-50/80 p-2 transition-colors active:bg-blue-50"
                                      >
                                        {subItem.icon && (
                                          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-xs">
                                            <subItem.icon className="h-5 w-5" />
                                          </span>
                                        )}
                                        <div className="flex flex-col justify-center">
                                          <span className="text-[15px] font-medium text-gray-900 group-active:text-accent">
                                            {subItem.title}
                                          </span>
                                          <span className="text-xs text-gray-500 line-clamp-1">{subItem.description}</span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      }

                      // Standard Links for Mobile
                      return (
                        <Link
                          key={link.title}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="border-b border-gray-200 pb-3 text-xl text-gray-900 flex w-full items-center justify-between"
                        >
                          {link.title}
                          <ArrowRight
                            strokeWidth={1.5}
                            className="h-5 w-5 transition-transform duration-300 text-gray-400"
                          />
                        </Link>
                      )
                    })}
                  </div>

                  <div className="mt-10 flex flex-col gap-3 w-full">
                    <Link
                      href='/enquiry'
                      onClick={() => setIsOpen(false)}
                      className="flex w-full items-center justify-center gap-2 border-2 border-blue-500 rounded-md bg-white px-5 py-3.5 text-base font-semibold text-black active:bg-accent active:text-white"
                    >
                      Enquire Now
                      <ArrowUpRight />
                    </Link>
                    <Link
                      href={whatsappLink}
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#25D366] bg-[#25D366] px-5 py-3.5 text-base font-semibold text-white active:bg-white active:text-[#25D366]"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Connect on WhatsApp
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              exit={{ opacity: 0, }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full border-t border-b border-gray-200 bg-white shadow-xl"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {servicesData.map((group, index) => (
                    <div
                      key={group.category}
                      className={cn(
                        "group border-r border-gray-200 py-10 last:border-none",
                        index === 1 && "bg-gray-100 px-8",
                        index === 2 && "pl-8",
                      )}
                    >
                      <div className="mb-8 flex flex-col items-start gap-3">
                        {/* <span className="border size-9 rounded-md flex items-center justify-center">
                          {group.icon}
                        </span> */}
                        <h3 className="text-[12px] font-light text-gray-900 uppercase">
                          {group.category}
                        </h3>
                      </div>

                      <ul className="space-y-6">
                        {group.links.map((link) => (
                          <li key={link.title}>
                            <Link
                              href={link.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="group group/link flex items-center justify-between transition-all duration-300 hover:translate-x-1"
                            >
                              <div className="flex items-start gap-5">
                                <span className="shrink-0 size-12 bg-blue-50 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/link:bg-accent">
                                  <link.icon className="object-contain text-accent group-hover/link:text-white transition-all duration-300" />
                                </span>
                                <div>
                                  <h2 className="text-[16px] font-semibold text-black transition-colors group-hover/link:text-accent">
                                    {link.title}
                                  </h2>
                                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-600">{link.description}</p>
                                </div>
                              </div>
                              {/* <ArrowRight className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover/link:text-accent" /> */}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer of Mega Menu */}
                <div className="flex flex-col items-center justify-between border-t border-gray-200 bg-gray-50/50 px-8 py-6 md:flex-row">
                  <div className="mb-4 flex items-center gap-4 md:mb-0">
                    <span className="text-[12px] font-medium tracking-widest text-gray-600 uppercase">
                      Ready to Grow?
                    </span>
                    <span className="text-[14px] font-semibold text-gray-900">
                      Every great partnership starts with a conversation.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold tracking-wide text-black uppercase underline underline-offset-2 transition-colors hover:text-[#1e5bce]"
                  >
                    Book a Strategy Call{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================= */}
        {/* PRODUCTS MEGA MENU                        */}
        {/* ========================================= */}
        <AnimatePresence>
          {isProductsOpen && (
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              exit={{ opacity: 0, }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full border-t border-b border-gray-200 bg-white shadow-xl"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="container mx-auto">
                {/* Product Mega Menu Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4">
                  {/* Left Side: 2-Column Links Layout */}
                  <div className="col-span-3 grid grid-cols-2 gap-1 gap-x-8 border-r border-gray-200 px-10 py-8 pr-12">
                    {mainLinks[0].items?.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        onClick={() => setIsProductsOpen(false)}
                        className="group/link flex items-start gap-5 rounded-xl p-3 transition-colors bg-gray-50 hover:bg-gray-100"
                      >
                        {/* Icon */}
                        {subItem.icon && (
                          <div className="flex shrink-0 items-center justify-center rounded-lg bg-blue-50 p-3 text-accent transition-colors group-hover/link:bg-accent group-hover/link:text-white">
                            <subItem.icon size={22} />
                          </div>
                        )}
                        {/* Text Content */}
                        <div>
                          <h4 className="text-[16px] font-semibold text-black transition-colors group-hover/link:text-accent">
                            {subItem.title}
                          </h4>
                          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-600">
                            {subItem.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Side: Image Showcase */}
                  <div className="col-span-1 px-10 py-10">
                    <div className="relative h-full min-h-60 w-full overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src="/images/demo/social-ana.avif"
                        alt="Products Showcase"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Image Overlay */}
                      {/* <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/30 to-transparent p-5">
                        <div>
                          <h5 className="text-base font-bold text-white">
                            Explore Solutions
                          </h5>
                          <p className="mt-1 text-xs leading-relaxed text-gray-300">
                            Discover our full suite of tools to scale your
                            business.
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Footer of Mega Menu (Shared UI logic) */}
                <div className="flex flex-col items-center justify-between border-t border-gray-200 bg-gray-50/50 px-8 py-6 md:flex-row">
                  <div className="mb-4 flex items-center gap-4 md:mb-0">
                    <span className="text-[12px] font-medium tracking-widest text-gray-600 uppercase">
                      Ready to Grow?
                    </span>
                    <span className="text-[14px] font-semibold text-gray-900">
                      Every great partnership starts with a conversation.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold tracking-wide text-black uppercase underline underline-offset-2 transition-colors hover:text-[#1e5bce]"
                  >
                    Book a Strategy Call{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* <AnimatePresence>
        {isEnquiryOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEnquiryOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md min-w-[480px] overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
            >
              <button
                onClick={() => setIsEnquiryOpen(false)}
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
                    className="space-y-4"
                  >
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-900">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-md ring ring-gray-200 px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-900">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-md ring ring-gray-200 px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-900">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 234 567 890"
                        className="w-full rounded-md ring ring-gray-200 px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-gray-800"
                      >
                        What are you looking for?
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-md ring ring-gray-200 px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black">
                        <option value="">Select Service..</option>
                        <option value="website-design-development">
                          Website Design & Development
                        </option>
                        <option value="software-development">
                          Software Development
                        </option>
                        <option value="mobile-app-development">
                          Mobile App Development
                        </option>
                        <option value="content-development-services">
                          Content Development Services
                        </option>
                        <option value="whatsapp-api-solution">
                          WhatsApp API Solution
                        </option>
                        <option value="social-media-marketing">
                          Social Media Marketing
                        </option>
                        <option value="search-engine-optimization">
                          Search Engine Optimization (SEO)
                        </option>
                        <option value="community-influencer-marketing">
                          Community / Influencer Marketing
                        </option>
                        <option value="video-marketing">
                          Video Marketing
                        </option>
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
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-900">
                        How can we help?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your project..."
                        className="w-full resize-none rounded-md ring ring-gray-200 px-3 py-2.5 text-sm transition-colors outline-none focus:ring-black"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-accent py-3 text-[14px] font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence> */}

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  )
}
