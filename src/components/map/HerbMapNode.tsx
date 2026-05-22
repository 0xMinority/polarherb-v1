"use client";

import { motion } from "framer-motion";
import type { HerbNode } from "../../data/herbs";

interface HerbMapNodeProps {
  herb: HerbNode;
  isSelected: boolean;
  onSelect: () => void;
}

const sizeMap = {
  1: 8,
  2: 10,
  3: 12,
  4: 14,
  5: 18,
};

const colorMap = {
  Energy: "#D0A85C",
  Immunity: "#7FAE8D",
  Cognitive: "#8FA7D6",
  Respiratory: "#6FAFCF",
  Longevity: "#B08FD6",
};

export default function HerbMapNode({
  herb,
  isSelected,
  onSelect,
}: HerbMapNodeProps) {
  const x = herb.readiness;
  const y = 100 - (herb.altitude / 6000) * 100;

  const color = colorMap[herb.domain as keyof typeof colorMap];
  const size = sizeMap[herb.power as keyof typeof sizeMap];
  const nodeOpacity = 0.42 + herb.power * 0.12;

  return (
    <motion.div
      className="group absolute cursor-pointer"
      onClick={onSelect}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${isSelected ? 1.18 : 1})`,
        filter: `
          drop-shadow(0 0 12px ${color}22)
          drop-shadow(0 0 28px ${color}14)
        `,
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="rounded-full transition-transform duration-500"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `
            radial-gradient(
              circle at 30% 30%,
              rgba(255,255,255,0.22),
              ${color}CC 32%,
              ${color}55 68%,
              rgba(0,0,0,0.16) 100%
            )
          `,
          border: `1px solid ${color}55`,
          opacity: nodeOpacity,
          boxShadow: isSelected
            ? `0 0 56px ${color}BB, 0 0 120px ${color}33`
            : `0 0 32px ${color}66`,
          backdropFilter: "blur(8px)",
        }}
        animate={{
          opacity: isSelected ? 1 : nodeOpacity * 0.72,
          scale: isSelected ? [1.24, 1.34, 1.24] : [0.92, 1, 0.92],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {isSelected && (
        <div className="pointer-events-none absolute left-1/2 top-[30px] -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-[#F3F1EA]/72">
          {herb.name}
        </div>
      )}

      <motion.div className="pointer-events-none absolute left-1/2 top-[-72px] w-[230px] -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:opacity-100">
        <div
          className="border px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-[14px]"
          style={{
            borderColor: `${color}22`,
            background: "rgba(7,16,22,0.92)",
          }}
        >
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-medium tracking-[0.01em] text-[#F3F1EA]">
              {herb.name}
            </p>

            <div
              className="h-2 w-2 rounded-full"
              style={{
                background: color,
                boxShadow: `0 0 18px ${color}88`,
              }}
            />
          </div>

          <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/58">
            <span>{herb.altitude}m</span>
            <span>•</span>
            <span>{herb.domain}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}