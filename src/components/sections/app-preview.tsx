"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlurFade } from "../magicui/blur-fade";

export function AppPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const finalTransform = "rotateY(10deg) rotateX(5deg) rotateZ(-7deg)";

  return (
    <section className="relative mt-[-20px] overflow-hidden md:overflow-visible container px-4 mx-auto">
      <BlurFade inView>
        <div
          className="relative mx-auto w-[1400px]"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={imageRef}
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-20"
            }`}
            style={{
              zIndex: 1,
              transform: isVisible
                ? finalTransform
                : "rotateY(15deg) rotateX(15deg) rotateZ(-20deg)",
              transformOrigin: "left center",
            }}
          >
            <div className="rounded-lg relative z-10">
              <Image
                src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                alt="Linear app interface"
                width={1400}
                height={800}
                className="max-w-[1400px] rounded-lg shadow-2xl"
                priority
              />

              <div
                className={`absolute inset-0 rounded-lg transition-opacity duration-1000 w-screen ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(to top, black 0%, rgba(0, 0, 0, 0.95) 10%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)",
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
