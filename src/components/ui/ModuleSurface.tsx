import { ReactNode } from "react";

interface ModuleSurfaceProps {
  children: ReactNode;
}

export default function ModuleSurface({ children }: ModuleSurfaceProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#071016]/94 shadow-[0_50px_160px_rgba(0,0,0,0.34)] backdrop-blur-sm">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(208,168,92,0.055), transparent 34%),
            linear-gradient(to bottom, rgba(255,255,255,0.018), transparent 28%)
          `,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}