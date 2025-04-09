"use client";

import { useState } from "react";
import { Folder, ChevronRight, Users } from "lucide-react";

export default function CollaborativeDocument() {
  const [activeTab, setActiveTab] = useState("collaborative");

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-gray-600/10 to-black text-white">
      <div className="w-full md:w-[320px] p-8 flex flex-col">
        <h1 className="text-2xl font-semibold leading-tight mb-2">
          Ideate and specify what to build next
        </h1>

        <div className="mt-4">
          <button
            className={`flex items-center text-left w-full px-3 py-2 rounded-md transition-colors hover:cursor-pointer ${
              activeTab === "collaborative"
                ? "text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("collaborative")}
          >
            <div
              className={`w-1 h-5 mr-3 rounded-sm ${
                activeTab === "collaborative"
                  ? "bg-green-500"
                  : "bg-gray-600/50"
              }`}
            ></div>
            Collaborative documents
          </button>

          <button
            className={`flex items-center text-left w-full px-3 py-2 transition-colors hover:cursor-pointer ${
              activeTab === "inline"
                ? "text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("inline")}
          >
            <div
              className={`w-1 h-5 mr-3 rounded-sm ${
                activeTab === "inline" ? "bg-green-500" : "bg-gray-600/50"
              }`}
            ></div>
            Inline comments
          </button>

          <button
            className={`flex items-center text-left w-full px-3 py-2 rounded-md transition-colors hover:cursor-pointer ${
              activeTab === "text-to-issue"
                ? "text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("text-to-issue")}
          >
            <div
              className={`w-1 h-5 mr-3 rounded-sm ${
                activeTab === "text-to-issue"
                  ? "bg-green-500"
                  : "bg-gray-600/50"
              }`}
            ></div>
            Text-to-issue commands
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-3xl mx-auto border border-gray-600/10 p-2 rounded-xl">
          <div className="bg-[#0a0a0a] rounded-xl border border-gray-800/50 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-800/50 flex items-center text-sm text-gray-400">
              <Folder className="h-4 w-4 mr-2 opacity-70" />
              <span>Spice harvester</span>
              <ChevronRight className="h-4 w-4 mx-1 opacity-50" />
              <span>Project specs</span>
              <div className="ml-5 opacity-50">•••</div>
            </div>

            <div className="p-8 relative">
              <div className="absolute left-8 top-8">
                <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center">
                  <Users className="h-4 w-4 text-green-500" />
                </div>
              </div>

              <div className="mt-16 mb-6">
                <div className="inline-block bg-green-500/10 text-white border border-green-400 px-1 rounded-sm text-sm font-medium mb-3 relative">
                  Collaborate on
                  <div className="absolute -top-5 -right-7 bg-green-400 text-white text-xs px-1.5 py-0.5 rounded-sm">
                    Zoe
                  </div>
                </div>
                ideas
                <p className="text-gray-400 leading-relaxed">
                  Write down product ideas and work together on feature specs in
                  realtime, multiplayer project{" "}
                  <div className="absolute inline-block bg-green-500/10 text-green-500 border border-blue-500 h-5 rounded-md font-medium mb-3 mr-1">
                    <div className="absolute -top-2 -right-[1.85rem] bg-blue-500 text-white text-xs">
                      quinn
                    </div>
                  </div>
                  documents. Add <span className="font-bold">**style**</span>{" "}
                  and <span className="text-gray-300">##structure</span> with
                  rich-text formatting options.
                </p>
              </div>

              <div className="space-y-4 mt-12">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-2">
                    <div className="h-2 bg-gray-800/50 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-800/50 rounded-full w-[85%]"></div>
                    {i % 2 === 0 && (
                      <div className="h-2 bg-gray-800/50 rounded-full w-[70%]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
