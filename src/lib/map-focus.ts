import { HerbNode } from "../data/herbs";

export function calculateMapFocus(herb: HerbNode) {
  const herbY = 100 - (herb.altitude / 6000) * 100;

  return {
    scale: 1.45,

    offset: {
      x: (42 - herb.readiness) * 7,
      y: (46 - herbY) * 4.8,
    },
  };
}