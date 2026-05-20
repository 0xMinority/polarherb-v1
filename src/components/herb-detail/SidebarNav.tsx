interface SidebarNavProps {
    sections: string[];
  }
  
  export function SidebarNav({ sections }: SidebarNavProps) {
    return (
      <aside className="bg-[#071016] p-8 lg:sticky lg:top-8 lg:self-start">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]">
          Profile Index
        </p>
  
        <div className="mt-8 space-y-[1px] bg-white/[0.05]">
          {sections.map((section, index) => {
            const isActive = index === 0;
  
            return (
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                key={section}
                className={`block px-4 py-4 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive
                    ? "bg-[#0A141D] text-[#F3F1EA]"
                    : "bg-[#071016] text-[#D7DCE2]/42 hover:bg-[#0A141D] hover:text-[#F3F1EA]"
                }`}
              >
                {String(index + 1).padStart(2, "0")} / {section}
              </a>
            );
          })}
        </div>
      </aside>
    );
  }