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

export interface HeroFunctionalDomain {
  domain: HerbDomain;
  score: number;
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

export interface OriginNarrativeCard {
  category: string;
  title: string;
  body: string;
  image: string;
}

export interface HerbOriginNarrativesData {
  subtitle: string;
  cards: OriginNarrativeCard[];
}

export interface HerbOriginNarrative {
  title: string;
  description: string;
}

export interface ProductSnapshotItem {
  category: string;
  title: string;
  image: string;
}

export interface IdealForGroup {
  label: string;
  items: string[];
}

export interface HerbProductSnapshotsData {
  snapshots: ProductSnapshotItem[];
  idealFor: IdealForGroup[];
}

export interface BioactiveIntelligenceStage {
  stage: string;
  title: string;
  body: string;
  icon: string;
  image: string;
}

export interface BioactiveInsightTrait {
  label: string;
  icon: string;
}

export interface AiPredictionTool {
  name: string;
  description: string;
  icon: string;
}

export interface HerbBioactiveIntelligenceData {
  subtitle: string;
  applicationContext: string[];
  keyBioactives: string[];
  intro: string;
  mechanismStages: BioactiveIntelligenceStage[];
  bioactiveInsight: {
    icon: string;
    body: string;
    traits: BioactiveInsightTrait[];
  };
  aiPredictedUsing: AiPredictionTool[];
  developerDashboardCta: {
    label: string;
    description: string;
    href: string;
  };
}

export interface MatchupMetricScores {
  bioactivePower: number;
  commercialReadiness: number;
  evidenceStrength: number;
  originRarity: number;
  applicationFit: number;
}

export interface MatchupHerbProfile {
  name: string;
  image: string;
  altitude: string;
  coreTrait: string;
  scores: MatchupMetricScores;
}

export interface ComparativeChallenger extends MatchupHerbProfile {
  id: string;
  insight: string;
}

export interface HerbComparativeMatchupData {
  subtitle: string;
  primary: MatchupHerbProfile;
  challengers: ComparativeChallenger[];
  defaultChallengerId: string;
  insightIcon: string;
}

export interface SynergyApplicationContext {
  id: string;
  label: string;
  icon: string;
}

export interface SynergyPairingNode {
  id: string;
  name: string;
  image: string;
  angle: number;
}

export interface SynergeticEffect {
  title: string;
  description: string;
}

export interface SynergyActiveStack {
  pairingHerbId: string;
  tags: string[];
  activeTag: string;
  title: string;
  effects: SynergeticEffect[];
  evidenceFilled: number;
  evidenceLabel: string;
  suggestedApplications: string[];
}

export interface HerbSynergyNetworkData {
  subtitle: string;
  applicationContexts: SynergyApplicationContext[];
  defaultApplicationContextId: string;
  centerHerb: {
    name: string;
    image: string;
  };
  pairingNodes: SynergyPairingNode[];
  stacks: SynergyActiveStack[];
  defaultPairingId: string;
}

export interface FormulationConsideration {
  title: string;
  description: string;
  score: number;
  icon: string;
}

export interface SuitableProductFormat {
  name: string;
  suitability: string;
  filledBars: number;
  icon: string;
}

export interface ReadinessIndicator {
  label: string;
  icon: string;
}

export interface HerbFormulationReadinessData {
  subtitle: string;
  considerations: FormulationConsideration[];
  suitableFormats: SuitableProductFormat[];
  readinessInsight: {
    centerImage: string;
    overallLabel: string;
    headline: string;
    description: string;
    indicators: ReadinessIndicator[];
  };
}

export interface RegulatoryStatusColumn {
  heading: string;
  text: string;
}

export interface RegulatoryMarketProfile {
  id: string;
  countryName: string;
  flagEmoji: string;
  accessLabel: string;
  columns: RegulatoryStatusColumn[];
  commercializationLabels: string[];
  commercializationFilled: number;
  deploymentNotes: string[];
}

export interface HerbRegulatoryStatusData {
  subtitle: string;
  defaultMarketId: string;
  markets: RegulatoryMarketProfile[];
  footerNote: string;
}

export interface EvidenceGlanceMetric {
  value: string;
  valueVariant: "number" | "text";
  label: string;
  caption: string;
}

export type EvidenceStrengthTone = "strong" | "moderate";

export interface EvidenceCompositionRow {
  dimension: string;
  level: string;
  filledBars: number;
  tone: EvidenceStrengthTone;
  description: string;
}

export interface EvidenceInsightColumn {
  title: string;
  body: string;
}

export interface HerbEvidenceLevelData {
  subtitle: string;
  glance: EvidenceGlanceMetric[];
  composition: EvidenceCompositionRow[];
  insight: EvidenceInsightColumn[];
  developerDashboardCta: {
    label: string;
    description: string;
    href: string;
  };
}

export interface HerbDetailData {
  slug: string;

  hero: {
    latinName: string;
    commonName: string;
    tagline: string;
    summary: string;

    altitude: string;
    region: string;
    regionDetail?: string;
    developmentStage: string;
    bioactivePower: string;
    domain: HerbDomain;

    heroImage: string;
    atlasId: string;

    functionalDomains: HeroFunctionalDomain[];
    developmentScore: number;
    developmentBlurb: string;

    metrics?: HeroMetric[];
  };

  originNarratives: HerbOriginNarrativesData;

  productSnapshots: HerbProductSnapshotsData;

  bioactiveIntelligence: HerbBioactiveIntelligenceData;

  comparativeMatchup: HerbComparativeMatchupData;

  synergyNetwork: HerbSynergyNetworkData;

  formulationReadiness: HerbFormulationReadinessData;

  regulatoryStatus: HerbRegulatoryStatusData;

  evidenceLevel: HerbEvidenceLevelData;

  evidence: HerbEvidenceData;

  mechanism: HerbMechanismData;

  commercial: HerbCommercialData;

  regulatory: HerbRegulatoryData;
}