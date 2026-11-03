"use client"

import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedButton } from "../common/AnimatedButton"

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Clients", href: "/clients" },
  { title: "Work", href: "/work" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Career", href: "/career" },
  { title: "Sitemap", href: "/sitemap" },
]
const designAndDev = [
  { title: "Website Design & Development", href: "/website-design-and-development" },
  { title: "Software Development", href: "/software-development" },
  { title: "Mobile App Development", href: "/mobile-app-development" },
  { title: "Content Development Services", href: "/content-development-services" },
  { title: "WhatsApp API Solution", href: "/whatsapp-api-solution" },
]
const digitalMarketing = [
  { title: "Social Media Marketing", href: "/social-media-marketing" },
  { title: "Search Engine Optimization", href: "/search-engine-optimization" },
  { title: "Community / Influencer Marketing", href: "/community-influencer-marketing" },
  { title: "Video Marketing", href: "/video-marketing" },
]
const brandSolutions = [
  { title: "Brand Strategy / Positioning", href: "/brand-strategy-and-positioning" },
  { title: "Brand Identity Development", href: "/brand-identity-development" },
  { title: "Brand Experience Design", href: "/brand-experience-and-design" },
]
export default function Footer() {
  return (
    <footer className="w-full bg-[#161515] pt-14 lg:pt-20 pb-8 font-sans text-white">
      <div className="container">
        {/* ── Top Section: Brand & Links Grid ────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_3fr] lg:gap-4">
          {/* Left Column: Brand Info */}
          <div className="flex flex-col lg:pr-4">
            <Image src="/images/logo-white.png" alt="DigitalFueled" width={200} height={100} className="w-30 lg:w-40 mb-4" />
            {/* <h2 className="mb-4 font-geist text-2xl font-semibold">
              DigitalFueled
            </h2> */}
            <p className="mb-8 text-sm leading-relaxed lg:max-w-xs text-white">
              DigitalFueled is a global UI/UX design agency that boosts brand
              value with user-friendly, effective designs for web, mobile, and
              SaaS platforms.
            </p>

            <div className="mb-10">
              <AnimatedButton href='/enquiry'>Build With Us</AnimatedButton>
            </div>

            <div className="flex gap-4">
              {[
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/digitalfueled",
                  path: (
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  ),
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/digitalfueled/",
                  path: (
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A2.5 2.5 0 0120 9v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 20V9a2.5 2.5 0 012.5-2.5z" />
                  ),
                },
                {
                  name: "LinkedIn",
                  url: "https://in.linkedin.com/company/digitalfueled",
                  path: (
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"
                      fill="currentColor"
                    />
                  ),
                },
                {
                  name: "X",
                  url: "https://x.com/digitalfueled",
                  path: (
                    <path
                      stroke="none"
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="currentColor"
                    />
                  ),
                },
                {
                  name: "YouTube",
                  url: "https://www.youtube.com/@digitalfueled",
                  path: (
                    <path
                      stroke="none"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="currentColor"
                    />
                  ),
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-white hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Links Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-[1.2fr_2fr_2fr_2fr]">
            {/* Col 1: Quick Links */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="mb-4 text-lg font-medium text-white">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                  {quickLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 2: Design and Development */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="mb-4 text-lg font-medium text-white">
                  Design and Development
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                  {designAndDev.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 3: Marketing & Brand Solutions */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="mb-4 text-lg font-medium text-white">
                  Digital Marketing Solutions
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                  {digitalMarketing.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-medium text-white">
                  Brand Solutions
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                  {brandSolutions.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 4: Contact */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Contact
                </h4>
                <div className="mb-6">
                  <h4 className="mb-1 text-[13px] text-gray-400">
                    Drop us a line
                  </h4>
                  <a
                    href="mailto:hello@DigitalFueled.agency"
                    className="text-[14px] font-semibold text-white hover:underline"
                  >
                    hello@DigitalFueled.agency
                  </a>
                </div>
                <div>
                  <h4 className="mb-2 text-[13px] text-gray-400">Call us</h4>
                  <a
                    href="tel:+917838152753"
                    className="flex items-center gap-2 text-[14px] font-semibold text-white hover:underline"
                  >
                    <Phone size={18} />
                    +91 7838 152 753
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────────────────────── */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left mt-6 pt-6 custom-border-t-gray">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Digital Fueled. All rights reserved.
          </p>

          {/* Contact */}
          <div className="flex flex-col items-center gap-1 text-sm text-gray-400 sm:items-end">
            <p>Digital Fueled IT Pvt Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}