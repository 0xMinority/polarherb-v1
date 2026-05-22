import type { HerbDetailData } from "../types/herb-detail";

export const herbDetails: HerbDetailData[] = [
  {
    slug: "cordyceps-sinensis",

    hero: {
      latinName: "Ophiocordyceps sinensis",
      commonName: "Cordyceps Sinensis",
      tagline: "A rare alpine fungus shaped by altitude, scarcity, and biological resilience.",
      summary:
        "Cordyceps Sinensis represents one of the most commercially recognized high-altitude bioresources, combining strong cultural familiarity, energy-positioning potential, and emerging mechanistic relevance across resilience, fatigue, and immune-support narratives.",

      altitude: "3,000–5,000m",
      developmentStage: "Commercial-Ready",
      bioactivePower: "Level 5",
      domain: "Energy",

      heroImage: "/Cordyceps_sinensis.png",

      metrics: [
        ["Altitude", "3,000–5,000m"],
        ["Domain", "Energy"],
        ["Development", "Commercial-Ready"],
        ["Bioactive Power", "Level 5"],
      ].map(([label, value]) => ({ label, value })),
    },

    originNarrative: {
      title: "Born from the pressure of high-altitude survival.",
      description:
        "Its origin story is inseparable from alpine ecology, scarcity, and traditional recognition, making it a powerful anchor for premium functional positioning.",
    },

    evidence: {
      supportingLiteratures: "186+",
      confidence: "Moderate",
      breakthroughPotential: "High",
      layers: [
        {
          label: "Traditional Use",
          score: 4,
          note: "Historical usage signals across regional materia medica traditions.",
        },
        {
          label: "Preclinical Evidence",
          score: 3,
          note: "Mechanistic and animal-level findings suggest functional direction.",
        },
        {
          label: "Human Evidence",
          score: 2,
          note: "Limited clinical translation; requires stronger human validation.",
        },
        {
          label: "Commercial Adoption",
          score: 4,
          note: "Existing market familiarity supports practical product readiness.",
        },
        {
          label: "AI Mechanistic Prediction",
          score: 3,
          note: "Computational inference indicates plausible multi-target activity.",
        },
      ],
    },

    mechanism: {
      predictedTargets: "42",
      pathwayConfidence: "High",
      mechanisticConvergence: "78%",
      pathways: [
        {
          label: "AMPK Activation",
          strength: 82,
          description:
            "Energy-sensing pathway associated with metabolic resilience and cellular efficiency.",
        },
        {
          label: "Mitochondrial Support",
          strength: 74,
          description:
            "Predicted support for ATP-linked mitochondrial performance and fatigue resistance.",
        },
        {
          label: "Neuroinflammation Modulation",
          strength: 68,
          description:
            "Possible interaction with inflammatory signaling relevant to cognitive recovery.",
        },
        {
          label: "Oxidative Stress Reduction",
          strength: 91,
          description:
            "Strong antioxidant-direction signal across stress response and cellular protection pathways.",
        },
      ],
    },

    commercial: {
      readiness: 88,
      factors: [
        {
          label: "Market Familiarity",
          value: 86,
          note: "Existing consumer awareness and category recognition.",
        },
        {
          label: "Supply Plausibility",
          value: 72,
          note: "Practical sourcing potential under realistic commercial constraints.",
        },
        {
          label: "Formulation Fit",
          value: 81,
          note: "Compatibility with functional foods, beverages, and lifestyle products.",
        },
        {
          label: "Brand Differentiation",
          value: 94,
          note: "Ability to create distinctive positioning beyond generic botanicals.",
        },
      ],
    },

    regulatory: {
      items: [
        {
          label: "Ingredient Category",
          value: "Botanical / Herbal Ingredient",
          note: "Positioned as a functional botanical ingredient rather than a drug-like active.",
          status: "Defined",
        },
        {
          label: "Claim Boundary",
          value: "Structure-function positioning preferred",
          note: "Marketing should avoid disease-treatment language and focus on wellness support.",
          status: "Controlled",
        },
        {
          label: "Market Entry Risk",
          value: "Medium",
          note: "Requires market-specific review before claims, labeling, and product launch.",
          status: "Watch",
        },
        {
          label: "Documentation Need",
          value: "Identity, safety, evidence package",
          note: "Core dossier should include botanical identity, safety basis, and evidence summary.",
          status: "Required",
        },
      ],
    },
  },
];

export function getHerbDetailBySlug(slug: string) {
  return herbDetails.find((herb) => herb.slug === slug);
}