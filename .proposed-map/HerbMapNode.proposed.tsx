"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HerbNode } from "../../data/herbs";

interface HerbMapNodeProps {
  herb: HerbNode;
  isSelected: boolean;
  onSelect: () => void;
}

const sizeMap = {
  1: 36,
  2: 44,
  3: 52,
  4: 62,
  5: 74,
};

const colorMap = {
  Energy: "#D0A85C",
  Immunity: "#7FAE8D",
  Cognitive: "#8FA7D6",
  Respiratory: "#6FAFCF",
  Longevity: "#B08FD6",
};

function plotPosition(herb: HerbNode) {
  const x = 7 + herb.readiness * 0.86;
  const y = 11 + (100 - (herb.altitude / 6000) * 100) * 0.72;
  return { x, y };
}

export default function HerbMapNode({
  herb,
  isSelected,
  onSelect,
}: HerbMapNodeProps) {
  const { x, y } = plotPosition(herb);

  const color = colorMap[herb.domain as keyof typeof colorMap];
  const size = sizeMap[herb.power as keyof typeof sizeMap];
  const nodeOpacity = 0.55 + herb.power * 0.09;

  return (
    <motion.div
      className="group absolute z-[1] cursor-pointer"
      onClick={onSelect}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%)`,
      }}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative flex flex-col items-center"
        animate={{ scale: isSelected ? 1.08 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-500"
          style={{
            width: `${size * 1.65}px`,
            height: `${size * 1.65}px`,
            background: `radial-gradient(circle, ${color}${isSelected ? "55" : "33"} 0%, transparent 72%)`,
            opacity: isSelected ? 1 : 0.72,
          }}
        />

        <motion.div
          className="relative flex items-center justify-center rounded-full border transition-transform duration-500"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: `${color}${isSelected ? "AA" : "55"}`,
            background: `
              radial-gradient(circle at 35% 28%, rgba(255,255,255,0.18), transparent 42%),
              radial-gradient(circle at 50% 100%, rgba(0,0,0,0.45), transparent 58%),
              rgba(8,18,26,0.55)
            `,
            boxShadow: isSelected
              ? `0 0 48px ${color}88, 0 12px 36px rgba(0,0,0,0.45), inset 0 0 24px ${color}22`
              : `0 0 28px ${color}44, 0 8px 24px rgba(0,0,0,0.35), inset 0 0 16px ${color}14`,
            opacity: nodeOpacity,
          }}
          animate={{
            opacity: isSelected ? 1 : nodeOpacity * 0.88,
            y: isSelected ? [0, -2, 0] : [0, -1, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              width: `${size * 0.72}px`,
              height: `${size * 0.72}px`,
              filter: `drop-shadow(0 4px 14px ${color}44)`,
            }}
          >
            <Image
              src="/Cordyceps_sinensis.png"
              alt=""
              fill
              className="object-contain opacity-90"
              style={{
                filter: `saturate(1.05) hue-rotate(${herb.domain === "Energy" ? "0deg" : herb.domain === "Immunity" ? "40deg" : herb.domain === "Cognitive" ? "180deg" : herb.domain === "Respiratory" ? "200deg" : "260deg"})`,
              }}
            />
          </div>
        </motion.div>

        <p
          className="pointer-events-none mt-2 max-w-[120px] text-center text-[10px] font-medium leading-tight tracking-[0.02em] text-[#F3F1EA]/88 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          style={{
            opacity: isSelected ? 1 : 0.78,
            textShadow: `0 0 18px ${color}33`,
          }}
        >
          {herb.name}
        </p>
      </motion.div>

      <motion.div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-[220px] -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:opacity-100">
        <div
          className="rounded-lg border px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-md"
          style={{
            borderColor: `${color}28`,
            background: "rgba(6,14,20,0.94)",
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-medium text-[#F3F1EA]">{herb.name}</p>
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: color, boxShadow: `0 0 12px ${color}` }}
            />
          </div>
          <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#D7DCE2]/52">
            {herb.altitude}m · {herb.domain} · Power {herb.power}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
