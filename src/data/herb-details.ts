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

      altitude: "3,800 - 5,500m",
      region: "Tibetan Plateau",
      regionDetail: "(Yushu)",
      developmentStage: "Commercial-Ready",
      bioactivePower: "Level 5",
      domain: "Energy",

      heroImage: "/herb/001_cordyceps-sinensis/Cordyceps_sinensis.png",
      atlasId: "#0001",

      functionalDomains: [
        { domain: "Energy", score: 5 },
        { domain: "Respiratory", score: 4.5 },
        { domain: "Immunity", score: 4 },
        { domain: "Longevity", score: 3.5 },
        { domain: "Cognitive", score: 3 },
      ],
      developmentScore: 85,
      developmentBlurb:
        "A flagship high-altitude bioactive for energy and resilience, built for premium products where rarity justifies value.",
    },

    originNarratives: {
      subtitle:
        "The story behind Cordyceps sinensis — shaped by altitude, rarity, and tradition.",
      cards: [
        {
          category: "EXTREME ENVIRONMENT",
          title: "Life at the Edge of Survival",
          body:
            "The Tibetan Plateau rises above 4,000 meters, where oxygen thins, temperatures drop, and life slows to its limits.\n\nCordyceps sinensis emerges in this extreme environment — not despite the conditions, but because of them.",
          image: "/herb/001_cordyceps-sinensis/module3_origin_narratives/origin_01.png",
        },
        {
          category: "BIOLOGICAL RARITY",
          title: "A Rare Union of Nature",
          body:
            "Unlike conventional plants, Cordyceps is a fusion of fungus and host, developing underground for years before emerging.\n\nIts growth is slow, unpredictable, and rare — making each specimen a biological exception rather than a scalable crop.",
          image: "/herb/001_cordyceps-sinensis/module3_origin_narratives/origin_02.png",
        },
        {
          category: "CULTURAL VALUE",
          title: "A Heritage of Vitality",
          body:
            "For centuries, Cordyceps has been regarded as one of the most valuable natural substances across the Himalayan region.\n\nIts rarity, combined with perceived vitality benefits, has positioned it as both a cultural symbol and a high-value natural resource.",
          image: "/herb/001_cordyceps-sinensis/module3_origin_narratives/origin_03.png",
        },
      ],
    },

    productSnapshots: {
      snapshots: [
        {
          category: "Functional Beverage",
          title: "Performance Shot",
          image: "/herb/001_cordyceps-sinensis/module2_product_snapshot/product_snapshot_01.png",
        },
        {
          category: "Dietary Supplement",
          title: "Performance Capsules",
          image: "/herb/001_cordyceps-sinensis/module2_product_snapshot/product_snapshot_02.png",
        },
        {
          category: "Functional Ingredient",
          title: "Standardized Extract",
          image: "/herb/001_cordyceps-sinensis/module2_product_snapshot/product_snapshot_03.png",
        },
        {
          category: "Dermo-Cosmetic Active",
          title: "Cellular Energy Complex",
          image: "/herb/001_cordyceps-sinensis/module2_product_snapshot/product_snapshot_04.png",
        },
      ],
      idealFor: [
        {
          label: "PERFORMANCE",
          items: ["Sports nutrition brands", "Functional beverage lines"],
        },
        {
          label: "WELLNESS",
          items: ["Supplement & Longevity products"],
        },
        {
          label: "COSMETIC",
          items: ["Anti-fatigue skincare"],
        },
      ],
    },

    bioactiveIntelligence: {
      subtitle: "From molecule to function — AI-predicted pathways of Cordyceps sinensis.",
      applicationContext: [
        "Functional Nutrition",
        "Performance",
        "Skincare/Cosmetic",
        "Sensory",
      ],
      keyBioactives: ["Cordycepin", "Adenosine", "D-Mannitol", "Ergosterol"],
      intro:
        "AI integrates multi-omics, pharmacokinetic and systems biology to predict how key compounds work in the human body.",
      mechanismStages: [
        {
          stage: "STAGE 01",
          title: "Absorption & Survivability",
          body:
            "AI-predicted pharmacokinetic analysis suggests that several Cordyceps compounds may remain biologically active after oral intake, supporting circulation and systemic delivery.",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/mechanism_stage/icon_01.png",
          image:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/mechanism_stage/image_01.png",
        },
        {
          stage: "STAGE 02",
          title: "Target Interaction",
          body:
            "AI-predicted target interaction suggests that Cordyceps compounds may influence pathways linked to oxygen efficiency, cellular energy metabolism and fatigue adaptation.",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/mechanism_stage/icon_02.png",
          image:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/mechanism_stage/image_02.png",
        },
        {
          stage: "STAGE 03",
          title: "Functional Outcome",
          body:
            "AI pathway convergence indicates potential support for endurance, oxygen utilization and resilience under high-stress physiological conditions.",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/mechanism_stage/icon_03.png",
          image:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/mechanism_stage/image_03.png",
        },
      ],
      bioactiveInsight: {
        icon:
          "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/bioactive_insight/icon_01.png",
        body:
          "Cordyceps appears biologically aligned with high-altitude stress adaptation, particularly in pathways related to oxygen efficiency and endurance resilience.",
        traits: [
          {
            label: "Adapted to Hypoxia",
            icon:
              "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/bioactive_insight/icon_02.png",
          },
          {
            label: "Energy Endurance",
            icon:
              "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/bioactive_insight/icon_03.png",
          },
          {
            label: "Resilience Support",
            icon:
              "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/bioactive_insight/icon_04.png",
          },
        ],
      },
      aiPredictedUsing: [
        {
          name: "ADMET Predictor",
          description: "PK & toxicity modeling",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/AI-predicted_using/icon_01.png",
        },
        {
          name: "SwissTargetPrediction",
          description: "Target probability scoring",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/AI-predicted_using/icon_02.png",
        },
        {
          name: "DiffDock",
          description: "Molecular docking",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/AI-predicted_using/icon_03.png",
        },
        {
          name: "KEGG Pathway",
          description: "Pathway enrichment",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/AI-predicted_using/icon_04.png",
        },
        {
          name: "Literature Mining",
          description: "Evidence integration",
          icon:
            "/herb/001_cordyceps-sinensis/module4_bioactive_intelligence/AI-predicted_using/icon_05.png",
        },
      ],
      developerDashboardCta: {
        label: "Open in Developer Dashboard",
        description:
          "Explore detailed molecular data, targets, pathways, docking results and experimental evidence in the Atlas Developer Dashboard.",
        href: "#",
      },
    },

    comparativeMatchup: {
      subtitle:
        "Compare Cordyceps sinensis against other high-altitude botanicals across function, rarity, and commercial readiness.",
      primary: {
        name: "Cordyceps Sinensis",
        image: "/herb/001_cordyceps_sinensis/Cordyceps_sinensis.png",
        altitude: "3,800 - 5,500m",
        coreTrait: "High-altitude oxygen adaptation",
        scores: {
          bioactivePower: 95,
          commercialReadiness: 88,
          evidenceStrength: 72,
          originRarity: 95,
          applicationFit: 90,
        },
      },
      defaultChallengerId: "rhodiola-rosea",
      insightIcon: "/herb/001_cordyceps_sinensis/module5_comparative_matchup/icon_01.png",
      challengers: [
        {
          id: "rhodiola-rosea",
          name: "Rhodiola Rosea",
          image: "/herb/002_rhodiola_rosea/Rhodiola_rosea.png",
          altitude: "2,400 - 4,500m",
          coreTrait: "Stress resilience and cognitive stamina",
          scores: {
            bioactivePower: 78,
            commercialReadiness: 86,
            evidenceStrength: 74,
            originRarity: 68,
            applicationFit: 82,
          },
          insight:
            "Cordyceps leads in premium energy and rarity positioning, while Rhodiola offers stronger cognitive-stamina narratives and broader adaptogen familiarity.",
        },
        {
          id: "snow-lotus",
          name: "Snow Lotus",
          image: "/herb/004_snow_lotus/Snow_lotus.png",
          altitude: "4,000 - 5,600m",
          coreTrait: "Extreme alpine scarcity signaling",
          scores: {
            bioactivePower: 82,
            commercialReadiness: 62,
            evidenceStrength: 58,
            originRarity: 92,
            applicationFit: 70,
          },
          insight:
            "Cordyceps leads in premium energy and rarity positioning, while Snow Lotus amplifies ultra-rare alpine storytelling with lower formulation scalability.",
        },
        {
          id: "sea-buckthorn",
          name: "Sea Buckthorn",
          image: "/herb/005_sea_buckthorn/Sea_buckthorn.png",
          altitude: "1,500 - 3,500m",
          coreTrait: "Antioxidant-rich supply accessibility",
          scores: {
            bioactivePower: 70,
            commercialReadiness: 84,
            evidenceStrength: 76,
            originRarity: 55,
            applicationFit: 88,
          },
          insight:
            "Cordyceps leads in premium energy and rarity positioning, while Sea Buckthorn offers stronger scalability and broader formulation flexibility.",
        },
        {
          id: "fritillaria",
          name: "Fritillaria",
          image: "/herb/006_fritillaria_cirrhosa/Fritillaria_cirrhosa.png",
          altitude: "2,800 - 4,200m",
          coreTrait: "Respiratory and mucosal support heritage",
          scores: {
            bioactivePower: 72,
            commercialReadiness: 78,
            evidenceStrength: 70,
            originRarity: 75,
            applicationFit: 74,
          },
          insight:
            "Cordyceps leads in premium energy and rarity positioning, while Fritillaria provides differentiated respiratory positioning with moderate commercial scale.",
        },
      ],
    },

    synergyNetwork: {
      subtitle: "Explore how Cordyceps Sinensis works in synergy with other herbs.",
      defaultApplicationContextId: "functional-nutrition",
      applicationContexts: [
        {
          id: "functional-nutrition",
          label: "Functional Nutrition",
          icon: "/herb/001_cordyceps_sinensis/module6_synergy_network/icon_01.png",
        },
        {
          id: "performance",
          label: "Performance",
          icon: "/herb/001_cordyceps_sinensis/module6_synergy_network/icon_02.png",
        },
        {
          id: "skincare-cosmetic",
          label: "Skincare / Cosmetic",
          icon: "/herb/001_cordyceps_sinensis/module6_synergy_network/icon_03.png",
        },
        {
          id: "sensory",
          label: "Sensory",
          icon: "/herb/001_cordyceps_sinensis/module6_synergy_network/icon_04.png",
        },
      ],
      centerHerb: {
        name: "Cordyceps Sinensis",
        image: "/herb/001_cordyceps_sinensis/Cordyceps_sinensis.png",
      },
      defaultPairingId: "rhodiola-rosea",
      pairingNodes: [
        {
          id: "astragalus",
          name: "Astragalus",
          image: "/herb/016_astragalus/Astragalus.png",
          angle: 42,
        },
        {
          id: "rhodiola-rosea",
          name: "Rhodiola Rosea",
          image: "/herb/002_rhodiola_rosea/Rhodiola_rosea.png",
          angle: 95,
        },
        {
          id: "gymnadenia",
          name: "Gymnadenia",
          image: "/herb/020_gymnadenia_conopsea/Gymnadenia_conopsea.png",
          angle: 148,
        },
        {
          id: "potentilla",
          name: "Potentilla",
          image: "/herb/015_potentilla_anserina/Potentilla_anserina.png",
          angle: 218,
        },
        {
          id: "ginseng",
          name: "Ginseng",
          image: "/herb/035_ginseng/Ginseng.png",
          angle: 278,
        },
      ],
      stacks: [
        {
          pairingHerbId: "astragalus",
          tags: ["Immunity", "Recovery", "Endurance", "Adaptation", "Respiratory"],
          activeTag: "Immunity",
          title: "Immunity + Vitality",
          effects: [
            {
              title: "Supports Immune Modulation",
              description: "May help balance immune response under physiological stress.",
            },
            {
              title: "Enhances Energy Resilience",
              description: "Supports stamina when paired with adaptogenic botanicals.",
            },
            {
              title: "Promotes Recovery Balance",
              description: "Supports post-exertion recovery pathways.",
            },
          ],
          evidenceFilled: 3,
          evidenceLabel: "Moderate",
          suggestedApplications: ["Immunity", "Recovery", "Wellness"],
        },
        {
          pairingHerbId: "rhodiola-rosea",
          tags: ["Energy", "Recovery", "Endurance", "Adaptation", "Respiratory"],
          activeTag: "Energy",
          title: "Energy + Adaptation",
          effects: [
            {
              title: "Enhances ATP Production",
              description: "Supports cellular energy generation and recovery.",
            },
            {
              title: "Improves Oxygen Utilization",
              description: "Enhances oxygen uptake and efficiency under stress.",
            },
            {
              title: "Reduces Fatigue & Improves Endurance",
              description: "Supports physical and mental stamina.",
            },
          ],
          evidenceFilled: 4,
          evidenceLabel: "High",
          suggestedApplications: ["Energy", "Adaptation", "Endurance"],
        },
        {
          pairingHerbId: "gymnadenia",
          tags: ["Energy", "Recovery", "Endurance", "Adaptation", "Respiratory"],
          activeTag: "Adaptation",
          title: "Adaptation + Resilience",
          effects: [
            {
              title: "Supports Stress Adaptation",
              description: "May modulate stress-response signaling under load.",
            },
            {
              title: "Enhances Metabolic Flexibility",
              description: "Supports energy balance across variable demand.",
            },
            {
              title: "Promotes Alpine Resilience",
              description: "Aligns with high-altitude functional positioning.",
            },
          ],
          evidenceFilled: 3,
          evidenceLabel: "Moderate",
          suggestedApplications: ["Adaptation", "Endurance", "Energy"],
        },
        {
          pairingHerbId: "potentilla",
          tags: ["Recovery", "Digestive", "Adaptation", "Wellness", "Respiratory"],
          activeTag: "Recovery",
          title: "Recovery + Balance",
          effects: [
            {
              title: "Supports Recovery Signaling",
              description: "May assist restorative pathways after exertion.",
            },
            {
              title: "Promotes Systemic Balance",
              description: "Supports general wellness equilibrium.",
            },
            {
              title: "Enhances Functional Comfort",
              description: "Supports comfort-oriented formulation narratives.",
            },
          ],
          evidenceFilled: 2,
          evidenceLabel: "Emerging",
          suggestedApplications: ["Recovery", "Wellness", "Balance"],
        },
        {
          pairingHerbId: "ginseng",
          tags: ["Energy", "Cognitive", "Endurance", "Adaptation", "Vitality"],
          activeTag: "Energy",
          title: "Energy + Vitality",
          effects: [
            {
              title: "Enhances Vitality Signaling",
              description: "Supports broad energy and vigor narratives.",
            },
            {
              title: "Improves Cognitive Stamina",
              description: "May support focus under fatigue conditions.",
            },
            {
              title: "Supports Endurance Capacity",
              description: "Aligns with performance-oriented product stories.",
            },
          ],
          evidenceFilled: 4,
          evidenceLabel: "High",
          suggestedApplications: ["Energy", "Vitality", "Performance"],
        },
      ],
    },

    formulationReadiness: {
      subtitle: "Key formulation compatibility and commercialization readiness insights.",
      considerations: [
        {
          title: "Formulation Compatibility",
          description:
            "Water extracts integrate well with most beverage, capsule, and functional food systems.",
          score: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/key_fomulation_considerations/icon_01.png",
        },
        {
          title: "Effective Dosage Practicality",
          description:
            "Functional benefits typically achieved within 1–3 g/day of extract, fitting standard servings.",
          score: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/key_fomulation_considerations/icon_02.png",
        },
        {
          title: "Sensory Burden",
          description:
            "Mild earthy aroma and slight bitterness; minimal impact in most formulations.",
          score: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/key_fomulation_considerations/icon_03.png",
        },
        {
          title: "Processing Resilience",
          description:
            "Stable under drying, heat processing, and storage with proper handling.",
          score: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/key_fomulation_considerations/icon_04.png",
        },
      ],
      suitableFormats: [
        {
          name: "Powder / Drink Mix",
          suitability: "Very Suitable",
          filledBars: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/suitable_product_formats/icon_01.png",
        },
        {
          name: "Capsule / Tablet",
          suitability: "Very Suitable",
          filledBars: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/suitable_product_formats/icon_02.png",
        },
        {
          name: "Liquid / Tonic",
          suitability: "Very Suitable",
          filledBars: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/suitable_product_formats/icon_03.png",
        },
        {
          name: "Functional Food",
          suitability: "Very Suitable",
          filledBars: 4,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/suitable_product_formats/icon_04.png",
        },
        {
          name: "Topical / Cosmetic",
          suitability: "Possible",
          filledBars: 3,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/suitable_product_formats/icon_05.png",
        },
        {
          name: "Sensory / Experiential",
          suitability: "Possible",
          filledBars: 3,
          icon:
            "/herb/001_cordyceps_sinensis/module7_formulation_readiness/suitable_product_formats/icon_06.png",
        },
      ],
      readinessInsight: {
        centerImage:
          "/herb/001_cordyceps_sinensis/module7_formulation_readiness/readiness_insights/image_01.png",
        overallLabel: "OVERALL",
        headline: "Commercial-Ready Ingredient",
        description: "Suitable across beverage, capsule, and functional food systems.",
        indicators: [
          {
            label: "Technically Feasible",
            icon:
              "/herb/001_cordyceps_sinensis/module7_formulation_readiness/readiness_insights/icon_01.png",
          },
          {
            label: "Manufacturing Ready",
            icon:
              "/herb/001_cordyceps_sinensis/module7_formulation_readiness/readiness_insights/icon_02.png",
          },
          {
            label: "Market Appropriate",
            icon:
              "/herb/001_cordyceps_sinensis/module7_formulation_readiness/readiness_insights/icon_03.png",
          },
        ],
      },
    },

    regulatoryStatus: {
      subtitle:
        "Understand where Cordyceps Sinensis can be legally commercialized and to what extent across global markets.",
      defaultMarketId: "united-states",
      footerNote:
        "Regulatory status may evolve. Always confirm with up-to-date local regulations before launch.",
      markets: [
        {
          id: "united-states",
          countryName: "United States",
          flagEmoji: "🇺🇸",
          accessLabel: "Broadly Accessible",
          columns: [
            {
              heading: "Regulatory Status",
              text:
                "Cordyceps Sinensis is recognized as a food ingredient. It can be used in foods, functional foods, and dietary supplements.",
            },
            {
              heading: "Permitted Uses",
              text:
                "Functional foods, beverages, capsules, tonics, powdered blends, and dietary supplement systems.",
            },
            {
              heading: "Claims Permissibility",
              text:
                "Structure-function claims may be used within applicable dietary supplement and food regulatory frameworks.",
            },
          ],
          commercializationLabels: ["Very Limited", "Limited", "Moderate", "Broad", "Very Broad"],
          commercializationFilled: 4,
          deploymentNotes: [
            "No Novel Food Barrier",
            "Functional Claims Possible",
            "Supplement Category Compatible",
          ],
        },
      ],
    },

    evidenceLevel: {
      subtitle:
        "Summary of the real-world evidence supporting the PolarHerb® Atlas Profile of Cordyceps Sinensis.",
      glance: [
        {
          value: "186+",
          valueVariant: "number",
          label: "Supporting Literatures",
          caption: "Peer-reviewed articles from scientific databases",
        },
        {
          value: "25+",
          valueVariant: "number",
          label: "Human Studies",
          caption: "Clinical trials and observational studies",
        },
        {
          value: "Widely",
          valueVariant: "text",
          label: "Commercialized",
          caption: "Present in supplements, functional food & tonics worldwide",
        },
        {
          value: "1000+ Years",
          valueVariant: "text",
          label: "Traditional Use",
          caption:
            "Long-standing use in both TCM and Folk Medicine in the Tibetan Plateau region.",
        },
      ],
      composition: [
        {
          dimension: "Traditional Knowledge",
          level: "Very Strong",
          filledBars: 5,
          tone: "strong",
          description:
            "Extensive historical use in traditional medicine systems for vitality, energy and respiratory support.",
        },
        {
          dimension: "Preclinical Research",
          level: "Strong",
          filledBars: 4,
          tone: "strong",
          description:
            "Substantial preclinical evidence supporting immune modulation, mitochondrial function, and anti-inflammatory activities.",
        },
        {
          dimension: "Human Research",
          level: "Moderate",
          filledBars: 3,
          tone: "moderate",
          description:
            "Emerging clinical and observational studies indicating benefits in exercise performance, fatigue reduction and quality of life.",
        },
        {
          dimension: "Commercial Adoption",
          level: "Strong",
          filledBars: 4,
          tone: "strong",
          description:
            "Widely used in supplements, functional foods and tonics globally with consistent market demand.",
        },
        {
          dimension: "AI Mechanistic Confidence",
          level: "Very Strong",
          filledBars: 3,
          tone: "moderate",
          description:
            "AI analysis indicates plausible mechanisms aligned with known bioactivities, with moderate confidence.",
        },
      ],
      insight: [
        {
          title: "Well-Supported Domains",
          body:
            "Energy & endurance, oxygen utilization, respiratory support, immune modulation, and antioxidant activities.",
        },
        {
          title: "Evidence Gaps",
          body:
            "Long-term clinical validation, disease-specific claims, standardized dosing outcomes in diverse populations.",
        },
        {
          title: "Next Break-Through",
          body:
            "Well-designed human trials on performance, longevity, and specific health outcomes.",
        },
      ],
      developerDashboardCta: {
        label: "Open in Developer Dashboard",
        description:
          "Explore detailed molecular data, targets, pathways, docking results and experimental evidence in the Atlas Developer Dashboard.",
        href: "#",
      },
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

const herbDetailBySlug = new Map(
  herbDetails.map((herb) => [herb.slug, herb] as const)
);

export function getHerbDetailBySlug(slug: string) {
  return herbDetailBySlug.get(slug);
}