import { HerbNode } from "../data/herbs";

interface MapViewportState {
  scale: number;
  offset: {
    x: number;
    y: number;
  };
}

export function isHerbLikelyVisible(
  herb: HerbNode,
  viewport: MapViewportState
) {
  const x = herb.readiness;
  const y = 100 - (herb.altitude / 6000) * 100;

  const margin = viewport.scale > 1.4 ? 18 : 10;

  return (
    x >= -margin &&
    x <= 100 + margin &&
    y >= -margin &&
    y <= 100 + margin
  );
}