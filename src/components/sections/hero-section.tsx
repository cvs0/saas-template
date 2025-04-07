import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";
import { BlurFade } from "../magicui/blur-fade";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative z-10 container px-4 mx-auto">
      <div className="max-w-4xl">
        <TextAnimate
          animation="blurInUp"
          by="word"
          once
          duration={1}
          className="text-6xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-8"
        >
          Linear is a purpose-built tool for planning and building products
        </TextAnimate>

        <BlurFade delay={0.25} inView>
          <p className="text-[#b5b6b6] text-xl mb-10 max-w-2xl">
            Meet the system for modern software development.
            <br />
            Streamline issues, projects, and product roadmaps.
          </p>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="rounded-md bg-[#f5f5f5] px-6 py-4 text-sm font-semibold text-black hover:bg-gray-200 transition-colors w-fit hover:cursor-pointer"
            >
              Start building
            </Button>
            <Button variant={"ghost"} className="hover:bg-[#0a0a0a] hover:cursor-pointer">
              <Link
                href="#"
                className="flex items-center text-sm font-semibold transition-opacity w-fit bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Introducing Sub-teams{" "}
                <ChevronRight className="ml-1 h-4 w-4 text-wh text-gray-400" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
