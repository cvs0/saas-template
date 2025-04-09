"use client";

import {
  ChevronRight,
  DiamondIcon,
  DiamondMinus,
  Loader2,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
  TriangleAlert,
  UserIcon,
  UserRoundIcon,
} from "lucide-react";
import { BlurFade } from "../magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

const ProductDirection = () => {
  return (
    <section className="py-20 md:py-32 w-screen bg-gradient-to-b from-[#121114] via-gray-500/10 to-gray-600/10">
      <BlurFade inView>
        <div className="flex flex-col">
          <div className="lg:px-10 xl:px-20">
            <div className="flex flex-col lg:flex-row items-start lg:justify-center lg:items-center px-10 text-start lg:text-center">
              {" "}
              <Link href="#" className="group">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-2 bg-green-500/70 rounded-xl" />
                  <h2 className="ml-2 text-sm tracking-tighter font-semibold flex items-center text-gray-300">
                    Project and long-term planning
                    <ChevronRight className="ml-1 h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </h2>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 max-w-[500px] lg:max-w-[1200px] mb-10">
                  Set the product direction
                </h2>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center px-10 items-start gap-16 text-start lg:mr-[18em]">
              <p className="text-gray-400 text-lg max-w-[440px] lg:max-w-[400px] sm:mb-[-200px] z-20 relative">
                {" "}
                <span className="text-white">
                  Align your team around a unified product timeline.
                </span>{" "}
                Plan, manage, and track all product initiatives with
                Linear&apos;s visual planning tools.
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-lg relative z-10 overflow-hidden items-center sm:mt[10rem] md:mt-[4rem] lg:mt-[1rem]">
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Linear app interface"
              width={1800}
              height={1200}
              className="max-w-[2000px] rounded-lg shadow-2xl object-cover scale-100 sm:scale-80 md:scale-110 lg:scale-100 -mt-10 z-10"
              priority
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 30%, transparent 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 30%, transparent 75%, transparent 100%)",
              }}
            />
          </div>
          <div className="mx-7 lg:mx-20">
            <div className="w-full border-t border-gray-400/10 border-b -mt-60 sm:-mt-50 md:sm-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-400/10 max-w-screen-lg mx-auto">
                <div className="p-6 relative">
                  <div style={{ zIndex: 1 }}>
                    <h3 className="text-xl font-semibold text-white">
                      Manage projects end-to-end
                    </h3>

                    <p className="text-gray-400 max-w-[255px]">
                      Consolidate specs, milestones, tasks, and other
                      documentation in one centralized location.
                    </p>
                  </div>

                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 40%, rgba(8, 9, 11, 1) 70%)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(to bottom right, transparent 40%, rgba(8, 9, 11, 1) 80%)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(8, 9, 11, 1) 85%)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div className="ring ring-gray-600/10 p-[5.5px] mt-10 rounded-xl">
                    <div className="w-full bg-gray-900/5 rounded-xl ring-[1px] ring-gray-700/40 px-5 relative">
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background:
                            "radial-gradient(at top left, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 10%, transparent 55%)",
                          zIndex: 1,
                        }}
                      ></div>
                      <h2 className="text-white text-xl font-semibold tracking-tighter mb-4 pt-5 relative">
                        Project Overview
                      </h2>

                      <div className="space-y-5">
                        <div className="flex items-center space-x-10 text-white">
                          <h4>Properties</h4>
                          <div className="flex items-center space-x-2">
                            <Loader2 className="h-4 w-4 text-yellow-400" />{" "}
                            <span className="text-white font-semibold">
                              In Progress
                            </span>{" "}
                            <UserRoundIcon className="h-4 w-4" />
                            <span>ENG</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-10 text-white">
                          <h4>Resources</h4>
                          <div className="flex items-center space-x-2">
                            <div className="bg-gray-500/7 text-sm flex p-1 rounded-sm">
                              <FigmaLogoIcon className="h-4 w-4 mt-[2px] mr-[1.5px]" />{" "}
                              Exploration
                            </div>

                            <div className="bg-gray-500/7 text-sm flex p-1 rounded-sm">
                              <TriangleAlert className="h-4 w-4 mt-[2px] mr-[1.5px]" />{" "}
                              User in
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-4 text-white pb-5">
                          <div className="flex items-center space-x-10 mb-2">
                            <h4>Milestones</h4>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <DiamondIcon className="w-4 h-4 fill-blue-500 text-blue-500" />
                              <span className="text-white font-semibold mr-2">
                                Design Review
                              </span>{" "}
                              100%
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 ml-29 mt-2">
                            <DiamondIcon className="w-4 h-4 fill-blue-500 text-blue-500" />
                            <span className="text-white font-semibold mr-2">
                              Internal Alpha
                            </span>{" "}
                            100%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="mr-15 z-20 relative mb-[8rem] md:mb-[4rem]">
                    <h3 className="text-xl font-semibold text-white">
                      Project updates
                    </h3>
                    <p className="text-gray-400 max-w-[255px]">
                      Communicate progress and project health with built-in
                      project updates.
                    </p>
                  </div>

                  <div className="relative mt-6 mb-[12rem] md:mb-0">
                    <div className="relative">
                      <div className="relative">
                        <div className="relative -top-4 md:-top-0 left-5 w-[500px] md:w-[300px] h-[120px] bg-gray-600/10 ring-[1px] ring-gray-700/40 backdrop-blur-2xl rounded-xl -skew-y-8 shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-25px] hover:bg-gray-400/11 z-10">
                          <div className="h-full w-full flex flex-col pointer-events-none">
                            <h1 className="p-4 flex items-center flex-shrink-0">
                              <div className="bg-red-800/50 text-white p-[3px] rounded-full">
                                <TrendingDown className="w-3 h-3 text-red-500" />
                              </div>
                              <span className="text-red-500 ml-2">
                                Off Track
                              </span>
                            </h1>
                            <p className="px-4 text-sm text-gray-300 flex-grow overflow-hidden text-ellipsis">
                              Unexpected roadblocks forced us to take
                            </p>
                            <h1 className="px-4 py-2 text-gray-500/60 text-xs absolute bottom-0 left-0">
                              Oct 10
                            </h1>
                          </div>
                        </div>

                        <div className="absolute top-5 left-10 w-[500px] md:w-[300px] h-[120px] bg-gray-600/10 ring-[1px] ring-gray-700/40 backdrop-blur-2xl rounded-xl -skew-y-8 shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-25px] hover:bg-gray-400/11 z-20">
                          <div className="h-full w-full flex flex-col pointer-events-none">
                            <h1 className="p-4 flex items-center flex-shrink-0">
                              <div className="bg-yellow-700/50 text-white p-[3px] rounded-full">
                                <TrendingUpDown className="w-3 h-3 text-yellow-500" />
                              </div>
                              <span className="text-yellow-500 ml-2">
                                At risk
                              </span>
                            </h1>
                            <p className="px-4 text-sm text-gray-300 flex-grow overflow-hidden text-ellipsis">
                              Progress slowed down last week because
                            </p>
                            <h1 className="px-4 py-2 text-gray-500/60 text-xs absolute bottom-0 left-0">
                              Oct 8
                            </h1>
                          </div>
                        </div>

                        <div className="absolute top-14 md:top-10 left-15 w-[500px] md:w-[300px] h-[120px] bg-gray-600/10 ring-[1px] ring-gray-700/40 backdrop-blur-2xl rounded-xl -skew-y-8 shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-25px] hover:bg-gray-400/11 z-30">
                          <div className="h-full w-full flex flex-col pointer-events-none">
                            <h1 className="p-4 flex items-center flex-shrink-0">
                              <div className="bg-green-700/50 text-white p-[3px] rounded-full">
                                <TrendingUp className="w-3 h-3 text-green-500" />
                              </div>
                              <span className="text-green-500 ml-2">
                                On Track
                              </span>
                            </h1>
                            <p className="px-4 text-sm text-gray-300 flex-grow overflow-hidden text-ellipsis">
                              We are ready to launch next
                            </p>
                            <h1 className="px-4 py-2 text-gray-500/60 text-xs absolute bottom-0 left-0">
                              Sep 8
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default ProductDirection;
