export interface HerbNode {
    id: string;
    name: string;
    altitude: number;
    readiness: number;
    domain: "Energy" | "Immunity" | "Cognitive" | "Respiratory" | "Longevity";
    power: 1 | 2 | 3 | 4 | 5;
  }
  
  export const herbNodes: HerbNode[] = [
    {
      id: "cordyceps-sinensis",
      name: "Cordyceps Sinensis",
      altitude: 4600,
      readiness: 82,
      domain: "Energy",
      power: 5,
    },
    {
      id: "rhodiola-rosea",
      name: "Rhodiola Rosea",
      altitude: 3900,
      readiness: 74,
      domain: "Cognitive",
      power: 4,
    },
    {
      id: "snow-lotus",
      name: "Snow Lotus",
      altitude: 4300,
      readiness: 52,
      domain: "Immunity",
      power: 4,
    },
    {
      id: "seabuckthorn",
      name: "Seabuckthorn",
      altitude: 2800,
      readiness: 88,
      domain: "Longevity",
      power: 3,
    },
  ];