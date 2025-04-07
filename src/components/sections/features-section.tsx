"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { BlurFade } from "../magicui/blur-fade";
import { useRef } from "react";

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340; // width + gap
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-32 w-screen bg-gradient-to-b from-black to-[#121114]">
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center items-start gap-16 px-10 text-start md:text-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-[500px]">
              Made for modern product teams
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-base leading-relaxed mb-6 md:max-w-[590px] lg:max-w-[375px] mt-10">
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.{" "}
              <Link
                href="#"
                className="text-white font-medium inline-flex items-center hover:opacity-80 transition-opacity"
              >
                Make the switch <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <button
            onClick={() => scroll("left")}
            className="absolute md:block hidden left-0 top-1/2 -translate-y-1/2 z-[100] bg-black/60 hover:bg-black/80 p-2 rounded-full ml-2"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex w-full justify-center overflow-x-auto no-scrollbar px-10"
          >
            <div className="flex space-x-10">
              <FeatureCard
                title="Purpose-built for product development"
                type="layers"
              />
              <FeatureCard title="Designed to move fast" type="speed" />
              <FeatureCard title="Crafted to perfection" type="create" />
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute md:block hidden right-0 top-1/2 -translate-y-1/2 z-[100] bg-black/60 hover:bg-black/80 p-2 rounded-full mr-2"
          >
            <ChevronRight />
          </button>
        </div>
      </BlurFade>
    </section>
  );
}
