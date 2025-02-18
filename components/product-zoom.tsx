"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ProductZoomProps {
  src: string
  alt: string
}

export function ProductZoom({ src, alt }: ProductZoomProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showZoom, setShowZoom] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setPosition({ x, y })
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-muted">
      <div
        className="relative aspect-square"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        {showZoom && (
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              transform: "scale(2)",
            }}
          />
        )}
      </div>
    </div>
  )
}

