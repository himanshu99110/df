"use client"
import React, { useEffect, useRef } from "react"

interface MouseState {
  x: number | null
  y: number | null
  radius: number
}

const FluidDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const mouse: MouseState = { x: null, y: null, radius: 400 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    class Particle {
      x: number
      y: number
      baseSize: number
      baseOpacity: number
      vx: number
      vy: number
      currentSize: number
      currentOpacity: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height

        this.baseSize = Math.random() * 4 + 1
        this.baseOpacity = 0

        this.currentSize = this.baseSize
        this.currentOpacity = this.baseOpacity

        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 1.5 + 0.5
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
      }

      draw() {
        if (this.currentOpacity <= 0.01) return

        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2)
        ctx!.closePath()
        ctx!.fillStyle = `rgba(255, 255, 255, ${this.currentOpacity})`
        ctx!.fill()
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < -50) this.x = canvas!.width + 50
        if (this.x > canvas!.width + 50) this.x = -50
        if (this.y < -50) this.y = canvas!.height + 50
        if (this.y > canvas!.height + 50) this.y = -50

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const proximityRatio = 1 - distance / mouse.radius

            const targetSize = this.baseSize + 40 * proximityRatio
            const targetOpacity = this.baseOpacity + 1 * proximityRatio

            this.currentSize += (targetSize - this.currentSize) * 0.1
            this.currentOpacity += (targetOpacity - this.currentOpacity) * 0.1
          } else {
            this.currentSize += (this.baseSize - this.currentSize) * 0.05
            this.currentOpacity +=
              (this.baseOpacity - this.currentOpacity) * 0.05
          }
        } else {
          this.currentSize += (this.baseSize - this.currentSize) * 0.05
          this.currentOpacity += (this.baseOpacity - this.currentOpacity) * 0.05
        }

        this.currentOpacity = Math.max(0, Math.min(1, this.currentOpacity))
        this.currentSize = Math.max(0.1, this.currentSize)

        this.draw()
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < 25; i++) {
        particles.push(new Particle())
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute top-0 left-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  )
}

export default FluidDots
