"use client";

import { useEffect, useMemo, useState } from "react";
import { getDomainColor } from "../../lib/domain-colors";
import type { HerbDomain } from "../../types/herb";
import type { HerbProfileSection } from "../../config/herb-sections";

interface SidebarNavProps {
    sections: readonly HerbProfileSection[];
    domain: HerbDomain;
}

const toSectionId = (section: string) => section.toLowerCase().replace(/\s+/g, "-");

export function SidebarNav({ sections, domain }: SidebarNavProps) {
    const domainColor = getDomainColor(domain);
    const sectionIds = useMemo(() => sections.map(toSectionId), [sections]);
    const [activeSection, setActiveSection] = useState(sections[0]);

    useEffect(() => {
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (!visibleEntry) return;

                const activeIndex = sectionIds.findIndex(
                    (id) => id === visibleEntry.target.id
                );

                if (activeIndex >= 0) {
                    setActiveSection(sections[activeIndex]);
                }
            },
            {
                rootMargin: "-28% 0px -58% 0px",
                threshold: [0, 0.12, 0.24, 0.4],
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections, sectionIds]);

    return (
        <aside className="relative overflow-hidden bg-[#071016]/96 p-5 shadow-[0_32px_100px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7 lg:sticky lg:top-10 lg:self-start xl:p-10">
            <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                    background: `radial-gradient(circle at top left, ${domainColor}10, transparent 42%)`,
                }}
            />

            <div className="relative z-10">
                <p
                    className="text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: domainColor }}
                >
                    Profile Index
                </p>

                <div className="mt-6 max-h-[420px] space-y-[1px] overflow-y-auto bg-white/[0.05] md:mt-8 lg:max-h-[calc(100vh-160px)] xl:mt-10">
                    {sections.map((section, index) => {
                        const isActive = activeSection === section;
                        const sectionId = sectionIds[index];

                        return (
                            <a
                                href={`#${sectionId}`}
                                key={section}
                                className="group block px-4 py-4 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 md:px-5 md:py-5 md:text-[11px] md:tracking-[0.2em]"
                                style={{
                                    background: isActive ? `${domainColor}12` : "#071016",
                                    color: isActive
                                        ? domainColor
                                        : "rgba(215,220,226,0.42)",
                                    borderLeft: isActive
                                        ? `1px solid ${domainColor}`
                                        : "1px solid transparent",
                                    boxShadow: isActive
                                        ? `inset 0 0 40px ${domainColor}08`
                                        : "none",
                                }}
                            >
                                <span className="mr-3 text-[#D7DCE2]/28">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="transition-colors duration-300 group-hover:text-[#F3F1EA]">
                                    {section}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}