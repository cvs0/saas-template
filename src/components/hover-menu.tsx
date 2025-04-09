"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface MenuItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  gradient: string
}

interface HoverMenuProps {
  trigger: React.ReactNode
  items: MenuItem[]
}

export function HoverMenu({ trigger, items }: HoverMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    if (!menuRef.current) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })

    setActiveCardIndex(index)
  }

  const handleMouseLeaveCard = () => {
    setActiveCardIndex(null)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={menuRef}>
      <div>{trigger}</div>

      <div
        className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-[520px] rounded-xl shadow-2xl bg-black/95 backdrop-blur-md border border-gray-800 overflow-hidden z-50 p-4 transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-3">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative overflow-hidden rounded-lg p-4 transition-all duration-200 bg-gray-900/80 hover:bg-gray-800/80"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeaveCard}
            >
              {activeCardIndex === index && (
                <div
                  className="absolute w-[150px] h-[150px] rounded-full transition-all duration-100 ease-out opacity-20 pointer-events-none"
                  style={{
                    background: item.gradient,
                    top: mousePosition.y - 75,
                    left: mousePosition.x - 75,
                    filter: "blur(20px)",
                  }}
                />
              )}

              <div
                className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                style={{ background: item.gradient }}
              />

              <div className="relative z-10 flex items-start">
                <div className="mr-4 mt-1 rounded-md bg-black/95 backdrop-blur-2xl p-2 transition-all duration-200">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-white group-hover:text-white/90 flex items-center transition-all duration-200">
                    {item.title}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" />
                  </h4>
                  <p className="mt-1 text-xs text-gray-400 line-clamp-2 transition-all duration-200 group-hover:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

