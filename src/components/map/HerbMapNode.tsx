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
      className="group absolute cursor-pointer transition-transform duration-500"
      onClick={onSelect}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${isSelected ? 1.18 : 1})`,
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: color,
          opacity: nodeOpacity,
          boxShadow: isSelected
            ? `0 0 48px ${color}AA`
            : `0 0 28px ${color}66`,
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

      <motion.div className="pointer-events-none absolute left-1/2 top-[-64px] w-[220px] -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:opacity-100">
        <div className="border border-white/[0.06] bg-[#071016]/92 px-4 py-3 backdrop-blur-[10px]">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium tracking-[0.01em] text-[#F3F1EA]">
              {herb.name}
            </p>

            <div
              className="h-2 w-2 rounded-full"
              style={{
                background: color,
              }}
            />
          </div>

          <div className="mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/58">
            <span>{herb.altitude}m</span>
            <span>•</span>
            <span>{herb.domain}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}