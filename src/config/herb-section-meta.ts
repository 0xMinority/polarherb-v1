import type { HerbProfileSection } from "./herb-sections";

export const herbSectionMeta: Record<
    HerbProfileSection,
    {
        description: string;
        priority: boolean;
    }
> = {
    "Origin Signal": {
        description:
            "Ecological origin and biological positioning of the herb.",
        priority: true,
    },

    "Bioactive Mechanism": {
        description:
            "AI-assisted pathway convergence and target interaction analysis.",
        priority: true,
    },

    "Commercial Readiness": {
        description:
            "Commercialization maturity and formulation deployment readiness.",
        priority: true,
    },

    "Regulatory Outlook": {
        description:
            "Global compliance pathway and market-entry overview.",
        priority: false,
    },

    "Evidence Layer": {
        description:
            "Scientific evidence structure supporting biological claims.",
        priority: false,
    },
};