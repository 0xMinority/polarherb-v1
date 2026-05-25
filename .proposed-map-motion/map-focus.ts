import { HerbNode } from "../data/herbs";

export function calculateMapFocus(herb: HerbNode) {
  const herbY = 100 - (herb.altitude / 6000) * 100;

  return {
    scale: 1.14,

    offset: {
      x: (42 - herb.readiness) * 3.1,
      y: (46 - herbY) * 2.1,
    },
  };
}