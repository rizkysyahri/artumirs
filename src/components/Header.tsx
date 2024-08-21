"use client";

import * as React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const equalOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeEqual = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="block h-20 w-full border-b border-gray-200 bg-white/75">
        <MaxWidthWrapper>
          <div className="flex h-20 items-center justify-between border-b border-zinc-200">
            <Link href="/">
              <span className="font-bold text-3xl font-sans">
                Artumirs Gallery
              </span>
            </Link>

            <div
              className={cn(
                "fixed z-[100] right-2 lg:right-8 bg-gray-800 py-2 px-2 rounded-full cursor-pointer",
                { "pointer-events-none": isMenuOpen }
              )}
              onClick={equalOpen}
            >
              <Equal className="stroke-white" />
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ y: "5%", opacity: 0 }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.65, 0, 0.35, 1],
                    },
                  }}
                  exit={{
                    y: "5%",
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.65, 0, 0.35, 1],
                    },
                  }}
                  className="fixed top-[18px] left-0 lg:left-[calc(100vw-540px)] w-full lg:w-[495px] h-[600px] z-[200] bg-[#f0efee] p-6 rounded-[35px]"
                  key="menu"
                >
                  <div
                    className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                    onClick={closeEqual}
                  >
                    <div className="bg-gray-800 p-2 rounded-full">
                      <X className="stroke-white" />
                    </div>
                  </div>
                  <div className="flex flex-col pt-8 font-sans font-semibold ">
                    <Link
                      href="/gallery"
                      className="border-t border-b border-black py-4 text-2xl hover:underline"
                    >
                      Gallery
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-10 border-b border-black py-4 text-2xl hover:underline"
                    >
                      Artist Program
                      <span className="text-base">In coming</span>
                    </Link>
                    <Link
                      href="/store"
                      className="border-b border-black py-4 text-2xl hover:underline"
                    >
                      Store
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </MaxWidthWrapper>
      </nav>
    </div>
  );
};

export default Header;
