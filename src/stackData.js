export const stacks = {
  "sleep": {
    goal: "Sleep Quality",
    primary_supplements: [
      {
        name: "Magnesium Glycinate",
        mechanism: "Supports healthy GABA receptor activity and nervous system relaxation",
        typical_dose: "200-400mg, 30-60 min before bed"
      },
      {
        name: "Ashwagandha (KSM-66)",
        mechanism: "Activates cortisol regulation pathways, supports healthy stress response",
        typical_dose: "300-600mg daily"
      },
      {
        name: "L-Theanine",
        mechanism: "Supports alpha brain wave activity associated with calm wakefulness",
        typical_dose: "100-200mg before bed"
      }
    ],
    note: "Most people notice changes within 2-3 weeks of consistent use",
    affiliate_tag: "stackedgoods06-20"
  },
  "fat-loss": {
    goal: "Body Composition / Fat Loss Support",
    primary_supplements: [
      {
        name: "Berberine",
        mechanism: "Activates AMPK pathway, supports healthy glucose metabolism",
        typical_dose: "500mg, 2-3x daily with meals"
      },
      {
        name: "Green Tea Extract (EGCG)",
        mechanism: "Supports healthy metabolic rate and fat oxidation pathways",
        typical_dose: "300-500mg daily"
      },
      {
        name: "L-Carnitine",
        mechanism: "Supports fatty acid transport into mitochondria for energy use",
        typical_dose: "1-2g daily"
      }
    ],
    note: "Most people notice changes within 4-6 weeks combined with dietary consistency",
    affiliate_tag: "stackedgoods06-20"
  },
  "cognition": {
    goal: "Cognitive Performance",
    primary_supplements: [
      {
        name: "Lion's Mane Mushroom",
        mechanism: "Supports nerve growth factor (NGF) activity and neural health pathways",
        typical_dose: "500-1000mg daily"
      },
      {
        name: "Omega-3 (EPA/DHA)",
        mechanism: "Backed by peer reviewed research supporting brain cell membrane health",
        typical_dose: "1-2g combined EPA/DHA daily"
      },
      {
        name: "Citicoline (CDP-Choline)",
        mechanism: "Supports acetylcholine synthesis and healthy neuronal membrane function",
        typical_dose: "250-500mg daily"
      }
    ],
    note: "Most people notice changes within 3-4 weeks of daily use",
    affiliate_tag: "stackedgoods06-20"
  },
  "immune": {
    goal: "Immune Support",
    primary_supplements: [
      {
        name: "Vitamin D3 + K2",
        mechanism: "Supports healthy immune cell signaling and calcium regulation pathways",
        typical_dose: "5000 IU D3 + 100mcg K2 daily"
      },
      {
        name: "Zinc Picolinate",
        mechanism: "Supports healthy levels of zinc-dependent immune enzyme activity",
        typical_dose: "15-30mg daily"
      },
      {
        name: "Vitamin C",
        mechanism: "Backed by peer reviewed research supporting white blood cell function",
        typical_dose: "500-1000mg daily"
      }
    ],
    note: "Most people notice changes within 2-3 weeks of consistent supplementation",
    affiliate_tag: "stackedgoods06-20"
  },
  "energy": {
    goal: "Energy & Mitochondrial Support",
    primary_supplements: [
      {
        name: "CoQ10 (Ubiquinol)",
        mechanism: "Supports mitochondrial ATP production pathways",
        typical_dose: "100-200mg daily"
      },
      {
        name: "B-Complex",
        mechanism: "Supports healthy levels of B-vitamin-dependent energy metabolism",
        typical_dose: "1 serving daily per label"
      },
      {
        name: "Creatine Monohydrate",
        mechanism: "Supports cellular ATP regeneration and phosphocreatine stores",
        typical_dose: "5g daily"
      }
    ],
    note: "Most people notice changes within 1-2 weeks for creatine, 3-4 weeks for CoQ10/B-complex",
    affiliate_tag: "stackedgoods06-20"
  }
};

export function getStack(goal) {
  const key = goal.toLowerCase().trim();
  return stacks[key] || null;
}

export function listStacks() {
  return Object.keys(stacks).map(key => ({
    slug: key,
    goal: stacks[key].goal
  }));
}
