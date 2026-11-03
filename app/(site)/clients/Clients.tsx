"use client"

import { motion } from "framer-motion"
import { Sparkle } from "lucide-react"
import Image from "next/image"

const clients = [
  { src: "/images/client/prakash.svg", alt: "Prakash Hospital" },
  { src: "/images/client/Shivohum.png", alt: "Shivohum" },
  { src: "/images/client/theacharya.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/bhartiyaschoolnigeria.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/Agarwal-packers.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/slps.webp", alt: "SLPS" },
  { src: "/images/client/sehgalneohospital.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/canon.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/harmonia.png", alt: "Sehgal Hospital" },
  { src: "/images/client/ahpi.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/supervity.webp", alt: "Sehgal Hospital" },
  { src: "/images/client/caho.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/p4psi.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/WWF.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo-indorama.png", alt: "Sehgal Hospital" },
  { src: "/images/client/mono-bbip-s.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/ftv-logo.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/FHRAI_Logo.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/paraslogo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/havells-logo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/aavi-stores-logo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/ims-logo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/sc-logo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/CLASSCURE_logo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/alleviater-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/insurcue-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/kpac-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/pratichi-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/shooes-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/tajsolitaires-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/udayshoes-logo-hp.png", alt: "Sehgal Hospital" },
  { src: "/images/client/wi.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/rg.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/bowl.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/tf.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/pc.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/venturaindia.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/sitm.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/fhrai.png", alt: "Sehgal Hospital" },
  { src: "/images/client/aeb.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/ally.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/eurasi.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/medicos.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/mg.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/munafa.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/ph.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/sscg.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/tos.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo40.png", alt: "Sehgal Hospital" },
  { src: "/images/client/logo41.png", alt: "Sehgal Hospital" },
  { src: "/images/client/adhish.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/BalajiTyping.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/fabpiks.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/kronoiinc.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/medilo.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/Micro.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/neetudaan1.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/rishabhgroup.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo.png", alt: "Sehgal Hospital" },
  { src: "/images/client/logo2.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo4.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo5.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo6.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo7.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo8.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo11.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo12.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo14.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo15.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo17.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo18.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo22.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo23.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo24.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo25.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo26.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo27.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo28.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo29.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo30.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo31.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo32.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo33.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo34.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo35.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo36.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo37.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/logo38.png", alt: "Sehgal Hospital" },
  { src: "/images/client/logo39.png", alt: "Sehgal Hospital" },
  { src: "/images/client/pag.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/oto.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/fauji.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/fibro.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/dil.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/ftv.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/milaan.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/brightlawhouse.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/Gaur-City-mall.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/Mayheview-Foundation.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/Modern-College.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/mygleeo.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/Nature-Connect.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/taleswithradhika.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/tulic-logo.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/AGRI-PRO.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/akrivispackaging.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/baeroastedcoffee.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/dost.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/gdexindia.jpg", alt: "Sehgal Hospital" },
  { src: "/images/client/REATLTY-HUB.jpg", alt: "Sehgal Hospital" },
]

const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
}

const logoItemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 } as const,
  },
}

export default function Clients() {
  return (
    <>
      <div className="bg-[url('/images/bg1.avif')] bg-cover bg-no-repeat py-12">
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
              {/* Tag */}
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
                Trusted. Proven. Delivered.
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
                Notable{" "}
                <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                  Clients.
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
                We are proud to have partnered with leading organizations and
                brands, delivering solutions that help them achieve their goals
                and create lasting impact.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="py-14 lg:py-20">
        <div className="container">
          <motion.div
            variants={logoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 md:grid-cols-4 lg:grid-cols-5 p-1"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={logoItemVariants}
                className="group flex h-32 items-center ring ring-border rounded-lg justify-center bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:ring-blue-300"
              >
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <HowItsWork /> */}
    </>
  )
}
