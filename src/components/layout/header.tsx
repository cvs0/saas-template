"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";
import { HoverMenu } from "@/components/hover-menu";
import { resourceItems } from "@/lib/data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800/50">
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

            {!isMenuOpen && (
              <button
                className="md:hidden flex items-center justify-center w-8 h-8"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="h-[73px]"></div>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: isMenuOpen ? "blur(16px)" : "blur(0px)",
          transitionProperty: "opacity, backdrop-filter",
        }}
      >
        <div className="container mx-auto px-4 pt-4 flex justify-end">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <div
          className={`container mx-auto p-4 pt-6 transition-all duration-300 transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          <nav className="flex flex-col gap-6">
            <Link
              href="#"
              className="text-lg text-white font-medium border-b border-gray-800/50 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>

            <div className="border-b border-gray-800/50 pb-4">
              <button
                className="flex items-center justify-between w-full text-lg text-white font-medium"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  isResourcesOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {resourceItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-800/50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                      style={{ background: item.gradient }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-sm text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#"
              className="text-lg text-white font-medium border-b border-gray-800/50 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-lg text-white font-medium border-b border-gray-800/50 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-lg text-white font-medium border-b border-gray-800/50 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-lg text-white font-medium border-b border-gray-800/50 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-lg text-white font-medium pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
