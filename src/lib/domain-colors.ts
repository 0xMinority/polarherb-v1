import type { HerbDomain } from "../types/herb";

export function getDomainColor(domain: HerbDomain) {
  const colors: Record<HerbDomain, string> = {
    Energy: "#D0A85C",
    Immunity: "#7FAE8D",
    Cognitive: "#8FA7D6",
    Respiratory: "#6FAFCF",
    Longevity: "#B08FD6",
  };

  return colors[domain];
}