"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HerbNode } from "../../data/herbs";

interface HerbProfileCardProps {
  herb: HerbNode;
}

export default function HerbProfileCard({
  herb,
}: HerbProfileCardProps) {
  return (
    <motion.div
      className="group relative min-h-[300px] overflow-hidden bg-[#071016] px-7 py-6"
      whileHover={{
        y: -2,
        backgroundColor: "#09131B",
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]">
              {herb.domain}
            </p>

            <h3 className="mt-3 text-[20px] font-medium tracking-[-0.035em] text-[#F3F1EA]">
              {herb.name}
            </h3>
          </div>

          <div className="border border-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/46">
            Power {herb.power}
          </div>
        </div>

        <div className="mt-8 flex h-[180px] items-center justify-center border-y border-white/[0.05] bg-[#040B11]/35">
          <div className="relative h-[165px] w-[165px] opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100">
            <Image
              src="/Cordyceps_sinensis.png"
              alt={herb.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/[0.05] pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
              Altitude
            </p>

            <p className="mt-2 text-[18px] text-[#F3F1EA]">
              {herb.altitude}M
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
              Readiness
            </p>

            <p className="mt-2 text-[18px] text-[#F3F1EA]">
              {herb.readiness}/100
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
            <span>Commercial Signal</span>
            <span>{herb.readiness}%</span>
          </div>

          <div className="mt-3 h-[3px] overflow-hidden bg-white/[0.045]">
            <motion.div
              className="h-full bg-[#D0A85C]"
              initial={{ width: 0 }}
              animate={{
                width: `${herb.readiness}%`,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}