import { Herb } from "../types/herb";

export type HerbNode = Herb;

export const herbNodes: HerbNode[] = [
  {
    id: "cordyceps-sinensis",
    name: "Cordyceps Sinensis",
    altitude: 4200,
    domain: "Energy",
    readiness: 92,
    power: 5,
    summary:
      "A high-altitude parasitic fungi associated with energy metabolism, endurance support, and commercialization-grade adaptogenic potential.",
  },

  {
    id: "rhodiola-rosea",
    name: "Rhodiola Rosea",
    altitude: 3800,
    domain: "Cognitive",
    readiness: 88,
    power: 4,
    summary:
      "An alpine adaptogen studied for fatigue resilience, cognitive performance, and stress-response modulation.",
  },

  {
    id: "saussurea-involucrata",
    name: "Saussurea Involucrata",
    altitude: 4500,
    domain: "Longevity",
    readiness: 66,
    power: 4,
    summary:
      "A rare snow-lotus botanical linked to longevity positioning, oxidative stress modulation, and premium wellness narratives.",
  },

  {
    id: "nardostachys-jatamansi",
    name: "Nardostachys Jatamansi",
    altitude: 3600,
    domain: "Cognitive",
    readiness: 58,
    power: 3,
    summary:
      "A Himalayan aromatic root traditionally associated with neurological balance and cognitive restoration.",
  },

  {
    id: "rheum-palmatum",
    name: "Rheum Palmatum",
    altitude: 3200,
    domain: "Immunity",
    readiness: 81,
    power: 3,
    summary:
      "A medicinal rhubarb species with strong traditional use and established phytochemical commercial relevance.",
  },

  {
    id: "hippophae-rhamnoides",
    name: "Hippophae Rhamnoides",
    altitude: 2800,
    domain: "Respiratory",
    readiness: 84,
    power: 3,
    summary:
      "A nutrient-dense sea buckthorn species positioned around respiratory resilience and antioxidant applications.",
  },
];