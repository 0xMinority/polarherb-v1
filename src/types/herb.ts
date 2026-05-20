export type HerbDomain =
  | "Energy"
  | "Immunity"
  | "Cognitive"
  | "Respiratory"
  | "Longevity";

export type HerbPower = 1 | 2 | 3 | 4 | 5;

export interface Herb {
  id: string;
  name: string;
  altitude: number;
  domain: HerbDomain;
  readiness: number;
  power: HerbPower;
  summary: string;
}