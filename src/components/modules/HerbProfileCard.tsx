"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HerbNode } from "../../data/herbs";

interface HerbProfileCardProps {
  herb: HerbNode;
  index: number;
}

function barWidth(herb: HerbNode, domain: HerbNode["domain"]) {
  if (herb.domain === domain) return herb.readiness;
  return Math.round(herb.readiness * (0.35 + herb.power * 0.08));
}

export default function HerbProfileCard({ herb, index }: HerbProfileCardProps) {
  const profileId = `#${String(index + 1).padStart(3, "0")}`;

  const metrics = [
    { label: "Energy", color: "#D0A85C", width: barWidth(herb, "Energy") },
    { label: "Immunity", color: "#7FAE8D", width: barWidth(herb, "Immunity") },
    { label: "Respiratory", color: "#6FAFCF", width: barWidth(herb, "Respiratory") },
  ];

  return (
    <Link href={`/herbs/${herb.id}`} className="block h-full">
      <motion.article
        className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#08121A]/90 transition-colors duration-300 hover:border-white/[0.12] hover:bg-[#0A151D]"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative m-3 mb-0 aspect-[4/3] overflow-hidden rounded-[10px] bg-[#1A2229]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[78%] w-[78%] opacity-90 transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src="/Cordyceps_sinensis.png"
                alt={herb.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
          <div className="flex items-center justify-between text-[10px] tracking-[0.06em] text-[#D7DCE2]/42">
            <span>{profileId}</span>
            <span>Altitude: {herb.altitude}m</span>
          </div>

          <h3 className="mt-2.5 text-[15px] font-medium tracking-[-0.03em] text-[#F3F1EA]">
            {herb.name}
          </h3>

          <div className="mt-4 space-y-2.5">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="mb-1 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-[#D7DCE2]/38">
                  <span>{metric.label}</span>
                </div>
                <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: metric.color,
                      boxShadow: `0 0 12px ${metric.color}33`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
