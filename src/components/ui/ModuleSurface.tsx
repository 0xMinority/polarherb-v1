import { ReactNode } from "react";

interface ModuleSurfaceProps {
  children: ReactNode;
}

export default function ModuleSurface({
  children,
}: ModuleSurfaceProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.06]
        bg-[#071016]
      "
    >
      {children}
    </div>
  );
}