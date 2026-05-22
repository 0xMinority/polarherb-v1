import type { HerbDomain } from "./herb";

export interface EvidenceLayer {
  label: string;
  score: number;
  note: string;
}

export interface MechanismPathway {
  label: string;
  strength: number;
  description: string;
}

export interface CommercialFactor {
  label: string;
  value: number;
  note: string;
}

export interface RegulatoryItem {
  label: string;
  value: string;
  note: string;
  status: "Defined" | "Controlled" | "Watch" | "Required";
}

export interface HeroMetric {
  label: string;
  value: string;
}

export interface HerbEvidenceData {
  supportingLiteratures: string;
  confidence: string;
  breakthroughPotential: string;
  layers: EvidenceLayer[];
}

export interface HerbMechanismData {
  predictedTargets: string;
  pathwayConfidence: string;
  mechanisticConvergence: string;
  pathways: MechanismPathway[];
}

export interface HerbCommercialData {
  readiness: number;
  factors: CommercialFactor[];
}

export interface HerbRegulatoryData {
  items: RegulatoryItem[];
}

export interface HerbOriginNarrative {
  title: string;
  description: string;
}

export interface HerbDetailData {
  slug: string;

  hero: {
    latinName: string;
    commonName: string;
    tagline: string;
    summary: string;

    altitude: string;
    developmentStage: string;
    bioactivePower: string;
    domain: HerbDomain;

    heroImage: string;

    metrics: HeroMetric[];
  };

  originNarrative: HerbOriginNarrative;

  evidence: HerbEvidenceData;

  mechanism: HerbMechanismData;

  commercial: HerbCommercialData;

  regulatory: HerbRegulatoryData;
}