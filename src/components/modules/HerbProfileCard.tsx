"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HerbNode } from "../../data/herbs";
import { getDomainColor } from "../../lib/domain-colors";

interface HerbProfileCardProps {
  herb: HerbNode;
}

export default function HerbProfileCard({ herb }: HerbProfileCardProps) {
  const domainColor = getDomainColor(herb.domain);

  return (
    <Link href={`/herbs/${herb.id}`} className="block h-full">
      <motion.div
        className="group relative min-h-[360px] overflow-hidden bg-[#071016] px-8 py-7 transition-colors duration-300"
        whileHover={{
          y: -4,
          backgroundColor: "#08121A",
        }}
        transition={{
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at top left, ${domainColor}14, transparent 46%)`,
          }}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.24em]"
                style={{ color: domainColor }}
              >
                {herb.domain}
              </p>

              <h3 className="mt-4 text-[24px] font-medium tracking-[-0.05em] text-[#F3F1EA]">
                {herb.name}
              </h3>
            </div>

            <div
              className="border px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/56"
              style={{
                borderColor: `${domainColor}33`,
                background: `${domainColor}08`,
              }}
            >
              Power {herb.power}
            </div>
          </div>

          <div className="mt-10 flex h-[210px] items-center justify-center border-y border-white/[0.05] bg-[#040B11]/35">
            <div
              className="relative h-[190px] w-[190px] opacity-85 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
              style={{
                filter: `drop-shadow(0 0 46px ${domainColor}22)`,
              }}
            >
              <Image
                src="/Cordyceps_sinensis.png"
                alt={herb.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-[1px] bg-white/[0.05]">
            {[
              ["Altitude", `${herb.altitude}M`],
              ["Readiness", `${herb.readiness}/100`],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#071016] p-4">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                  {label}
                </p>

                <p className="mt-3 text-[18px] text-[#F3F1EA]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
              <span>Commercial Signal</span>
              <span>{herb.readiness}%</span>
            </div>

            <div className="mt-3 h-[3px] overflow-hidden bg-white/[0.045]">
              <motion.div
                className="h-full"
                style={{
                  background: domainColor,
                  boxShadow: `0 0 24px ${domainColor}44`,
                }}
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

          <div className="mt-auto flex items-center justify-between border-t border-white/[0.05] pt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
              Intelligence Profile
            </p>

            <span
              className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
              style={{ color: `${domainColor}BF` }}
            >
              View →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}