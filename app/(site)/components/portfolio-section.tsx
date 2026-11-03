"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

const projects = [
  {
    id: 1,
    title: "Wild Wisdom",
    type: "Interactive Nature Quiz",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/wildwisdom.png",
    link: "#",
  },
  {
    id: 3,
    title: "Harmonia",
    type: "Psychotherapy Platform",
    tags: ["Healthcare", "SaaS"],
    image: "/images/OnlineProject/FullSmallSizeProject/harmonia.png",
    link: "#",
  },
  {
    id: 4,
    title: "RewardsApp",
    type: "SaaS Corporate Gifting",
    tags: ["B2B", "SaaS Platform"],
    image: "/images/OnlineProject/FullSmallSizeProject/lukit.png",
    link: "#",
  },
  {
    id: 5,
    title: "Gaur City Mall",
    type: "Commercial Mall Website",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/gaurmall.png",
    link: "#",
  },
  {
    id: 6,
    title: "Sehgal Neo Hospital",
    type: "Healthcare & Hospital Website",
    tags: ["Healthcare", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/sehgal.png",
    link: "#",
  },
  {
    id: 7,
    title: "ECHO",
    type: "SaaS Corporate Gifting",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/echo.png",
    link: "#",
  },
  {
    id: 8,
    title: "One Planet Academy",
    type: "Educational Platform",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/opa.png",
    link: "#",
  },
  {
    id: 9,
    title: "SanjayVan",
    type: "Nature",
    tags: ["B2C", "Web Application"],
    image: "/images/OnlineProject/FullSmallSizeProject/sanjayvan.png",
    link: "#",
  },
]

export default function ProjectCarouselSection() {
  return (
    <section className="py-14 lg:py-20" id="portfolio">
      <div className="container">
        <div className="mb-8 md:mb-12 flex items-center justify-center text-center">
          <div>
            {/* <h2 className="font-gra text-3xl font-bold tracking-tight sm:text-4xl">
              Real Products We’ve <span className="text-[#080C5E]"> Built</span>
            </h2> */}
            <h2
              className="font-geist text-[28px] leading-[1.2] font-semibold text-[#111] tracking-tighter md:text-[40px] lg:text-[48px]"
            >
              Real Products We’ve{" "}
              <span className="bg-linear-to-tl from-[#0091DA] via-[#143DA7] to-[#080C5E] bg-clip-text text-transparent">
                Built
              </span>
            </h2>
            <p className="mt-4 text-black max-w-prose md:text-lg">
              Explore platforms and applications delivered through our scalable
              web app development service and enterprise-ready software
              expertise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              href='/work'
              key={project.id}
              className="group block cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md"
            >
              {/* Image Container */}
              {/* Using a soft background color in case the image fails to load or has transparency */}
              <div className="relative h-62 lg:h-96 w-full overflow-hidden bg-indigo-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>

              {/* Content Container */}
              <div className="p-4 md:p-8">
                {/* Tags area (matches the "E-commerce" / "Sports platform" placement) */}
                <p className="mb-3 text-sm font-medium text-gray-800">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </p>

                {/* Title (matches "Off-White" / "Tournated" placement) */}
                <h3 className="mb-3 font-geist text-2xl md:text-3xl font-semibold text-black">
                  {project.title}
                </h3>

                {/* Type/Description area (matches the paragraph text placement) */}
                <p className="max-w-sm text-base leading-relaxed text-gray-700">
                  {project.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
