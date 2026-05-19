"use client";

import { motion } from "framer-motion";
import { HerbNode } from "../../data/herbs";

interface ActiveHerbPanelProps {
  herb: HerbNode;
}

export default function ActiveHerbPanel({ herb }: ActiveHerbPanelProps) {
  return (
    <motion.div
      key={herb.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-10 right-10 w-[340px] overflow-hidden border border-white/[0.05] bg-[#071016]/88 backdrop-blur-[18px]"
    >
      <div className="border-b border-white/[0.05] px-6 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#D0A85C]">
          Active Herb Node
        </p>
      </div>

      <div className="px-6 py-6">
        <h3 className="text-[30px] font-medium tracking-[-0.04em] text-[#F3F1EA]">
          {herb.name}
        </h3>

        <div className="mt-8 grid grid-cols-2 gap-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
              Altitude
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
              {herb.altitude}m
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
              Domain
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
              {herb.domain}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
              Readiness
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
              {herb.readiness}/100
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
              Bioactive Power
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
              Level {herb.power}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}