"use client";

import { motion } from "framer-motion";
import { HerbNode } from "../../data/herbs";

interface HerbProfileCardProps {
  herb: HerbNode;
}

export default function HerbProfileCard({
  herb,
}: HerbProfileCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-[#071018]/92 p-5"
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,168,92,0.08),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]">
              {herb.domain}
            </p>

            <h3 className="mt-3 text-[24px] font-light text-[#F3F1EA]">
              {herb.name}
            </h3>
          </div>

          <div className="rounded-full border border-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/50">
            Power {herb.power}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">
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

          <div className="mt-3 h-[4px] overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              className="h-full rounded-full bg-[#D0A85C]"
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