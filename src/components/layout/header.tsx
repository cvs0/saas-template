"use client"

import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import { HoverMenu } from "@/components/hover-menu"
import {resourceItems} from "@/lib/data"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-white"></div>
          <span className="font-medium">Linear</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Product
          </Link>
          <HoverMenu
            trigger={
              <div className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                Resources <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            }
            items={resourceItems}
          />
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}
