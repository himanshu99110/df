// "use client"

// import { useEffect, useState } from "react"
// import { motion, useMotionValue, useSpring } from "framer-motion"
// import { ArrowUpRight } from "lucide-react"

// export default function ModernCursor() {
//   const [isHovering, setIsHovering] = useState(false)

//   // useMotionValue avoids React state re-renders for buttery 120fps performance
//   const cursorX = useMotionValue(-100)
//   const cursorY = useMotionValue(-100)

//   // Extremely tight spring config so it feels snappy, not floaty
//   const springConfig = { damping: 25, stiffness: 400, mass: 0.2 }
//   const cursorXSpring = useSpring(cursorX, springConfig)
//   const cursorYSpring = useSpring(cursorY, springConfig)

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       cursorX.set(e.clientX)
//       cursorY.set(e.clientY)
//     }

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement
//       // Check if hovering over a button, link, or any element with cursor-pointer
//       if (
//         target.tagName.toLowerCase() === "button" ||
//         target.tagName.toLowerCase() === "a" ||
//         target.closest("button") ||
//         target.closest("a") ||
//         window.getComputedStyle(target).cursor === "pointer"
//       ) {
//         setIsHovering(true)
//       } else {
//         setIsHovering(false)
//       }
//     }

//     window.addEventListener("mousemove", moveCursor)
//     window.addEventListener("mouseover", handleMouseOver)

//     return () => {
//       window.removeEventListener("mousemove", moveCursor)
//       window.removeEventListener("mouseover", handleMouseOver)
//     }
//   }, [cursorX, cursorY])

//   return (
//     <motion.div
//       className="pointer-events-none fixed top-0 left-0 z-[9999] hidden items-center justify-center overflow-hidden rounded-full md:flex"
//       style={{
//         x: cursorXSpring,
//         y: cursorYSpring,
//         translateX: "-50%", // Perfectly centers the cursor on the mouse tip
//         translateY: "-50%",
//       }}
//       animate={{
//         width: isHovering ? 56 : 10,
//         height: isHovering ? 56 : 10,
//         // Uses your brand's lime green on hover, crisp white otherwise
//         backgroundColor: isHovering ? "#d5f04b" : "#ffffff",
//         // Blends into backgrounds normally, but overrides colors on hover
//         mixBlendMode: isHovering ? "normal" : "difference",
//       }}
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//     >
//       {/* The inner icon that reveals itself on hover */}
//       <motion.div
//         animate={{
//           opacity: isHovering ? 1 : 0,
//           scale: isHovering ? 1 : 0,
//           rotate: isHovering ? 0 : -45, // Adds a slick twist animation
//         }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//       >
//         <ArrowUpRight className="h-6 w-6 stroke-[2.5px] text-black" />
//       </motion.div>
//     </motion.div>
//   )
// }
