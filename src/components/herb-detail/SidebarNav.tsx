"use client";

import { useEffect, useState } from "react";
import { getDomainColor } from "../../lib/domain-colors";
import type { HerbDomain } from "../../types/herb";

interface SidebarNavProps {
    sections: string[];
    domain: HerbDomain;
}

export function SidebarNav({
    sections,
    domain,
}: SidebarNavProps) {
    const [activeSection, setActiveSection] = useState(sections[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const section = sections.find(
                        (item) =>
                            item.toLowerCase().replace(/\s+/g, "-") === entry.target.id
                    );

                    if (section) {
                        setActiveSection(section);
                    }
                });
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            const id = section.toLowerCase().replace(/\s+/g, "-");
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <aside className="bg-[#071016] p-8 lg:sticky lg:top-8 lg:self-start">
            <p
                className="text-[10px] uppercase tracking-[0.22em]"
                style={{ color: getDomainColor(domain) }}
            >
                Profile Index
            </p>

            <div className="mt-8 space-y-[1px] bg-white/[0.05]">
                {sections.map((section, index) => {
                    const isActive = activeSection === section;

                    return (
                        <a
                            href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                            key={section}
                            className="block px-4 py-4 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300"
                            style={{
                                background: isActive
                                    ? `${getDomainColor(domain)}12`
                                    : "#071016",

                                color: isActive
                                    ? getDomainColor(domain)
                                    : "rgba(215,220,226,0.42)",

                                borderLeft: isActive
                                    ? `1px solid ${getDomainColor(domain)}`
                                    : "1px solid transparent",
                            }}
                        >
                            {String(index + 1).padStart(2, "0")} / {section}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
}