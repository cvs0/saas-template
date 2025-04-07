"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  type: "layers" | "speed" | "create";
  description?: string;
}

export function FeatureCard({ title, type, description }: FeatureCardProps) {
  return (
    <div className="bg-[#08090b] rounded-xl p-8 relative group overflow-hidden transition-colors duration-500 hover:bg-[#0e0f13] w-[320px] hover:cursor-pointer">
      <div className="h-48 mb-8 flex items-center justify-center relative z-10">
        {type === "layers" && (
          <div className="relative w-full h-full bg-[#08090b] rounded-xl overflow-hidden">
            {" "}
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Layers"
              fill
              className="object-cover absolute top-0 left-0"
            />
          </div>
        )}
        {type === "speed" && (
          <div className="relative w-full h-full bg-[#08090b] rounded-xl overflow-hidden">
            {" "}
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e6d3edd-cd37-4bf8-c1bf-b93960169400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Speed"
              fill
              className="object-cover absolute top-0 left-0"
            />
          </div>
        )}
        {type === "create" && (
          <div className="relative w-full h-full bg-[#08090b] rounded-xl overflow-hidden">
            {" "}
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/99eeb9b8-3d99-4191-0081-9f302d26f400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Create"
              fill
              className="object-cover absolute top-0 left-0"
            />
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
      {description && (
        <p className="text-gray-400 text-sm mb-6 relative z-10">
          {description}
        </p>
      )}

      <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#08090b] flex items-center justify-center group-hover:bg-[#3b3b41] transition-all duration-300 z-10 ring ring-gray-800/50">
        <Plus className="w-4 h-4 text-white/50 group-hover:text-white" />
      </button>
    </div>
  );
}
