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
  1: 22,
  2: 26,
  3: 30,
  4: 34,
  5: 40,
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
  const nodeOpacity = 0.62 + herb.power * 0.06;

  return (
    <motion.div
      className="group absolute z-[2] cursor-pointer"
      onClick={onSelect}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            width: `${size * 1.4}px`,
            height: `${size * 1.4}px`,
            background: `radial-gradient(circle, ${color}${isSelected ? "44" : "28"} 0%, transparent 72%)`,
          }}
        />

        <div
          className="relative flex items-center justify-center rounded-full border"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: `${color}${isSelected ? "99" : "44"}`,
            background: `
              radial-gradient(circle at 35% 28%, rgba(255,255,255,0.14), transparent 42%),
              rgba(8,18,26,0.62)
            `,
            boxShadow: isSelected
              ? `0 0 24px ${color}66, inset 0 0 12px ${color}18`
              : `0 0 14px ${color}33`,
            opacity: nodeOpacity,
            transform: isSelected ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.35s ease, box-shadow 0.35s ease",
          }}
        >
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              width: `${size * 0.68}px`,
              height: `${size * 0.68}px`,
            }}
          >
            <Image
              src="/Cordyceps_sinensis.png"
              alt=""
              fill
              className="object-contain opacity-88"
              style={{
                filter: `saturate(1.05) hue-rotate(${herb.domain === "Energy" ? "0deg" : herb.domain === "Immunity" ? "40deg" : herb.domain === "Cognitive" ? "180deg" : herb.domain === "Respiratory" ? "200deg" : "260deg"})`,
              }}
            />
          </div>
        </div>

        <p
          className="pointer-events-none mt-1 max-w-[96px] text-center text-[8px] font-medium leading-tight text-[#F3F1EA]/82"
          style={{ opacity: isSelected ? 1 : 0.72 }}
        >
          {herb.name}
        </p>
      </div>

      <div className="pointer-events-none absolute left-[calc(100%+8px)] top-1/2 z-30 w-[max-content] max-w-[168px] -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div
          className="rounded-md border px-2.5 py-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-md"
          style={{
            borderColor: `${color}24`,
            background: "rgba(6,14,20,0.94)",
          }}
        >
          <p className="text-[9px] font-medium leading-snug text-[#F3F1EA]">
            {herb.name}
          </p>
          <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-[#D7DCE2]/48">
            {herb.altitude}m · {herb.domain}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
