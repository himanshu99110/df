"use client"

import { motion } from "framer-motion"
import {
    LayoutGrid,
    Sparkle
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// const projects = [
//   {
//     title: "Academy wwfindia",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/academy.wwfindia.org.png",
//   },
//   {
//     title: "Agarwal Packers",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/agarwalpackers.png",
//   },
//   {
//     title: "Bright Law House",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/brightlawhouse.png",
//   },
//   {
//     title: "AllyKart",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Buy-Gifts-For-Company.png",
//   },
//   {
//     title: "Caffee Bae",
//     category: "Website Development",
//     image:
//       "/images/OnlineProject/WebsiteProject/Coffee-BAE-Before-Anything-Else.png",
//   },
//   {
//     title: "Gaur City Mall",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Gaur-City-Mall.png",
//   },
//   {
//     title: "IKI CHIC",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/IKICHIC.png",
//   },
//   {
//     title: "Indian Vyapaar",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Indian-Vyapaar.png",
//   },
//   {
//     title: "School Of Performing Arts",
//     category: "Website Development",
//     image:
//       "/images/OnlineProject/WebsiteProject/Leading-Performing-Arts-School-in-India-FTV-SOPA.png",
//   },
//   {
//     title: "Magik Lighting",
//     category: "Website Development",
//     image:
//       "/images/OnlineProject/WebsiteProject/Magik-Lighting-Best-LED-Lights-Manufacturer-in-India-Century-LED.png",
//   },
//   {
//     title: "Mathview Foundation",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Mathview-Foundation.png",
//   },
//   {
//     title: "My Gleeo",
//     category: "Website Development",
//     image:
//       "/images/OnlineProject/WebsiteProject/myGleeo-Health-Care-of-Tomorrow.png",
//   },
//   {
//     title: "Nature Connect",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Nature-Connect.png",
//   },
//   {
//     title: "P4PSI",
//     category: "Website Development",
//     image:
//       "/images/OnlineProject/WebsiteProject/P4PSI-Patients-For-Patient-Safety-initiatives-in-india.png",
//   },
//   {
//     title: "Punerealty",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/punerealty.png",
//   },
//   {
//     title: "Siva Fashions",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/sivafashions.png",
//   },
//   {
//     title: "Supervity",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Supervity.png",
//   },
//   {
//     title: "Tales With Radhika",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/taleswithradhika.png",
//   },
//   {
//     title: "Thin Threads",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/Thin-Threads.png",
//   },
//   {
//     title: "Ventura India",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/venturaindia.png",
//   },
//   {
//     title: "Wild Wisdom",
//     category: "Website Development",
//     image:
//       "/images/OnlineProject/WebsiteProject/Wild-Wisdom-Global-Challenge-2024-.png",
//   },
//   {
//     title: "Echo",
//     category: "Website Development",
//     image: "/images/OnlineProject/WebsiteProject/wwfindia.png",
//   },
//   {
//     title: "Gleeo",
//     category: "Mobile App Development",
//     image: "/images/OnlineProject/MobileProject/mobile-app-1.jpg",
//   },
//   {
//     title: "We Care",
//     category: "Mobile App Development",
//     image: "/images/OnlineProject/MobileProject/mobile-app-2.jpg",
//   },
//   {
//     title: "Scientific Pathology",
//     category: "Mobile App Development",
//     image: "/images/OnlineProject/MobileProject/mobile-app-3.jpg",
//   },
//   {
//     title: "New Cairo",
//     category: "Mobile App Development",
//     image: "/images/OnlineProject/MobileProject/mobile-app-4.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/1.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/2.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/3.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/4.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/5.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/6.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/7.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/8.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/9.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/10.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/11.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/12.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/13.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/14.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/15.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/16.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/17.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/18.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/19.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/20.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/21.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/22.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/23.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/24.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/25.jpg",
//   },
//   {
//     category: "Social Media",
//     image: "/images/social/26.jpg",
//   },
// ]
const projects = [
  {
    title: "Wild Wisdom",
    type: "Interactive Nature Quiz",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/wildwisdom.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Harmonia",
    type: "Psychotherapy Platform",
    tags: ["Healthcare", "SaaS"],
    image: "/images/OnlineProject/FullSmallSizeProject/harmonia.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "RewardsApp",
    type: "SaaS Corporate Gifting",
    tags: ["B2B", "SaaS Platform"],
    image: "/images/OnlineProject/FullSmallSizeProject/lukit.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Gaur City Mall",
    type: "Commercial Mall Website",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/gaurmall.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Sehgal Neo Hospital",
    type: "Healthcare & Hospital Website",
    tags: ["Healthcare", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/sehgal.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "ECHO",
    type: "Environmental",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/echo.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "One Planet Academy",
    type: "Educational Platform",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/opa.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "SanjayVan",
    type: "Nature",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/sanjayvan.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Agarwal Packers",
    type: "Logistics and Relocation",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/aggrawal.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Bright Law House",
    type: "E- book Store",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/bright-law.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "AllyKart",
    type: "Ecommerce",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/allykart.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "IKI CHIC",
    type: "Fashion",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/iki.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "School Of Performing Arts",
    type: "Educational Platform",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/school.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Magik Lighting",
    type: "Lighting Solutions",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/magik.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "My Gleeo",
    type: "Healthcare",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/gleoo.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "P4PSI",
    type: "Non-Profit organization",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/pfpsi-2.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Siva Fashions",
    type: "Fashion",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/siva.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Punerealty",
    type: "Property",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/pune-reality.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Supervity",
    type: "Agentic AI platform",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/supervity.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Thin Threads",
    type: "Ethnic apparel",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/thintread.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Ventura India",
    type: "Architecture",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/sanjayvan.png",
    link: "#",
    category: "Website Development",
  },
  {
    title: "Gleeo",
    category: "Mobile App Development",
    type: "Healthcare",
    tags: ["B2C", "Mobile Application"],
    image: "/images/OnlineProject/MobileProject/mobile-app-1.jpg",
    link: "#",
  },
  {
    title: "We Care",
    category: "Mobile App Development",
    type: "Nature",
    tags: ["B2C", "Mobile Application"],
    image: "/images/OnlineProject/MobileProject/mobile-app-2.jpg",
    link: "#",
  },
  {
    title: "Scientific Pathology",
    category: "Mobile App Development",
    type: "Nature",
    tags: ["B2C", "Mobile Application"],
    image: "/images/OnlineProject/MobileProject/mobile-app-3.jpg",
    link: "#",
  },
  {
    title: "New Cairo",
    category: "Mobile App Development",
    type: "Nature",
    tags: ["B2C", "Mobile Application"],
    image: "/images/OnlineProject/MobileProject/mobile-app-4.jpg",
    link: "#",
  },
  {
    category: "Social Media",
    image: "/images/social/1.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/2.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/3.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/4.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/5.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/6.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/7.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/8.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/9.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/10.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/11.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/12.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/13.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/14.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/15.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/16.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/17.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/18.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/19.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/20.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/21.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/22.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/23.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/24.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/25.jpg",
  },
  {
    category: "Social Media",
    image: "/images/social/26.jpg",
  },
]

const categories = [
  "All Work",
  "Website Development",
  "Mobile App Development",
  "Social Media",
]

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All Work")
  const [visibleSocialCount, setVisibleSocialCount] = useState(12)
  const handleFilterChange = (category: any) => {
    setActiveFilter(category)
    setVisibleSocialCount(12)
  }

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Work") return project.category !== "Social Media"
    return project.category === activeFilter
  })

  const gridProjects = filteredProjects.filter(
    (p) => p.category !== "Social Media"
  )
  const masonryProjects = filteredProjects.filter(
    (p) => p.category === "Social Media"
  )

  // Slice the social media projects based on how many should be visible
  const visibleMasonryProjects = masonryProjects.slice(0, visibleSocialCount)
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
                Built. Delivered. Scaled.
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
                Our{" "}
                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                  Work.
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                className="max-w-5xl lg:text-lg font-medium text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                Discover the work we have proudly delivered to our clients,
                highlighting our expertise, creativity, and dedication to
                achieving outstanding results.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="pt-14 lg:pt-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`rounded-full px-4 md:px-6 py-3 text-sm font-medium transition-all duration-300 ${activeFilter === category
                    ? "bg-orange-100 text-orange-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "border border-neutral-800 bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="pt-12 lg:pt-18">
            {gridProjects.length > 0 && (
              <div className="mb-10 md:mb-16 grid grid-cols-1 gap-x-6 gap-y-8 lg:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {gridProjects.map((project: any, index) => (
                  // <div
                  //   key={index}
                  //   className="group block cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-linear-to-br from-[#0d127c] via-[#1E28A4] to-[#080C5E] bg-size-[200%_200%] animate-gradient transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  // >
                  <div
                    key={index}
                    className="group block cursor-default overflow-hidden rounded-xl ring ring-gray-300 bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  >
                    {/* Image Container */}
                    {/* Using a soft background color in case the image fails to load or has transparency */}
                    <div className="relative h-60 w-full overflow-hidden bg-indigo-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
                        width={500}
                        height={300}
                      />
                    </div>

                    {/* Content Container */}
                    <div className="p-4 md:p-6">
                      {/* Tags area (matches the "E-commerce" / "Sports platform" placement) */}
                      <p className="mb-3 text-sm font-medium text-gray-800">
                        {project.tags.map((tag: any, index: any) => (
                          <span
                            key={index}
                            className="mr-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-accent ring ring-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>

                      {/* Title (matches "Off-White" / "Tournated" placement) */}
                      <h3 className="font-geist text-2xl font-semibold text-black">
                        {project.title}
                      </h3>

                      {/* Type/Description area (matches the paragraph text placement) */}
                      {/* <p className="max-w-sm text-base leading-relaxed text-black">
                        {project.type}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {masonryProjects.length > 0 && (
              <div className="mb-10 md:mb-16">
                <div className="columns-2 gap-4 md:gap-6 space-y-6 md:columns-3 lg:columns-4">
                  {visibleMasonryProjects.map((project, index) => (
                    <div
                      key={index}
                      className="group relative cursor-default break-inside-avoid overflow-hidden rounded-xl bg-neutral-900"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle overlay on hover, no text */}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {masonryProjects.length > visibleSocialCount && (
                  <div className="mt-8 md:mt-12 flex justify-center">
                    <button
                      onClick={() => setVisibleSocialCount((prev) => prev + 4)}
                      className="rounded-full border border-neutral-800 bg-neutral-900 px-8 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:bg-white hover:text-neutral-950"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="py-32 text-center text-neutral-500">
                <LayoutGrid className="mx-auto mb-4 h-12 w-12 opacity-50" />
                <p className="text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <HowItsWork /> */}
    </>
  )
}
