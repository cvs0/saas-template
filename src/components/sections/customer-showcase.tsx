"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "../magicui/blur-fade";

export default function CustomerShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  const customers = [
    { name: "Google", logo: "Google" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Amazon", logo: "Amazon" },
    { name: "Netflix", logo: "Netflix" },
    { name: "YouTube", logo: "YouTube" },
    { name: "Spotify", logo: "Spotify" },
  ];

  return (
    <section className=" text-white py-24 px-6 relative mt-[-300px] z-20">
      <BlurFade delay={0.5 * 2} inView>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold">
              Powering the world&apos;s best product teams.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              From next-gen startups to established enterprises.
            </p>
          </div>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 items-center justify-items-center transition-all duration-300 ${
                isHovered ? "blur-sm" : ""
              }`}
            >
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="h-12 flex items-center justify-center"
                >
                  <Image
                    src={`https://cdn.magicui.design/companies/${customer.logo}.svg`}
                    alt={`${customer.name} logo`}
                    width={150}
                    height={40}
                    className="max-h-10 w-auto object-contain filter sepia-0 saturate-0 brightness-0 contrast-0 transition-all duration-300 group-hover:filter-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pill button that appears on hover */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg hover:cursor-pointer">
              Meet our customers
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
