export const peptides = {
  "bpc-157": {
    name: "BPC-157",
    category: "Healing & Repair",
    mechanism: "Stable gastric pentadecapeptide; supports angiogenesis and tissue repair pathways, modulates growth factor expression (VEGF, EGF)",
    typical_dose_range: "200-500 mcg, 1-2x daily",
    reconstitution: "Typically reconstituted with bacteriostatic water; common vial size 5mg",
    administration_route: "Subcutaneous injection, most commonly near site of injury",
    research_notes: "Most studied for tendon, ligament, and gut lining research applications. Half-life is short, multiple daily dosing is common in research protocols.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "tb-500": {
    name: "TB-500",
    category: "Healing & Repair",
    mechanism: "Synthetic fragment of Thymosin Beta-4; promotes actin regulation, cell migration, and angiogenesis",
    typical_dose_range: "2-2.5 mg, 1-2x weekly",
    reconstitution: "Bacteriostatic water; common vial size 5-10mg",
    administration_route: "Subcutaneous or intramuscular injection",
    research_notes: "Often researched in combination with BPC-157 for systemic vs. localized repair signaling.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "cjc-1295-ipamorelin": {
    name: "CJC-1295 / Ipamorelin Stack",
    category: "Growth Hormone Optimization",
    mechanism: "CJC-1295 is a GHRH analog extending GH pulse duration; Ipamorelin is a selective GH secretagogue with minimal cortisol/prolactin impact",
    typical_dose_range: "CJC-1295: 1-2mg/week split doses; Ipamorelin: 200-300mcg, 1-3x daily",
    reconstitution: "Combined vials commonly mixed at 2mg CJC-1295 / 2mg Ipamorelin per 2ml bacteriostatic water",
    administration_route: "Subcutaneous injection, typically pre-bed and/or post-workout",
    research_notes: "One of the most common stacks in longevity and recomposition research due to synergistic GH pulse amplification.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "semax": {
    name: "Semax",
    category: "Cognitive & Neuroprotective",
    mechanism: "ACTH(4-10) analog; modulates BDNF and dopamine/serotonin pathways, researched for neuroprotective and nootropic effects",
    typical_dose_range: "200-600 mcg/day, often split into 2 doses",
    reconstitution: "Common formulation: 10mg in 10ml saline = 1mg/ml = 100mcg per spray (nasal)",
    administration_route: "Intranasal spray most common in research protocols; subcutaneous also used",
    research_notes: "Researched extensively in Russia for cognitive and stroke-recovery applications.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "selank": {
    name: "Selank",
    category: "Cognitive & Anxiolytic",
    mechanism: "Synthetic analog of Tuftsin; modulates GABA and serotonin systems, researched for anxiolytic and immune-modulating properties",
    typical_dose_range: "200-300 mcg/day, intranasal",
    reconstitution: "Common formulation: 10mg in 5ml saline = 2000 mcg/ml",
    administration_route: "Intranasal spray",
    research_notes: "Often researched alongside Semax for combined cognitive/anxiolytic protocols.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "retatrutide": {
    name: "Retatrutide",
    category: "Metabolic / GLP-1 Class",
    mechanism: "Triple agonist: GLP-1, GIP, and glucagon receptor agonism; researched for metabolic rate and appetite signaling",
    typical_dose_range: "Titration protocol typically starting at 1mg/week, escalating over weeks per research protocols",
    reconstitution: "30mg vial commonly reconstituted in 3ml bacteriostatic water = 10mg/ml",
    administration_route: "Subcutaneous injection, weekly",
    research_notes: "Among the most potent GLP-1 class molecules in current metabolic research; titration approach is critical due to GI side effect profile at higher doses.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "tesamorelin": {
    name: "Tesamorelin",
    category: "Growth Hormone Optimization",
    mechanism: "GHRH analog; stimulates pulsatile GH release, particularly researched for visceral adipose tissue reduction",
    typical_dose_range: "1-2mg/day",
    reconstitution: "Common vial size 5-10mg reconstituted with bacteriostatic water",
    administration_route: "Subcutaneous injection",
    research_notes: "One of the few peptides with FDA-approved precedent (Egrifta) for HIV-associated lipodystrophy, giving it a stronger safety research base than most peptides.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "ghk-cu": {
    name: "GHK-Cu",
    category: "Healing & Repair",
    mechanism: "Copper-binding tripeptide; researched for collagen synthesis, anti-inflammatory signaling, and tissue remodeling",
    typical_dose_range: "1-2mg/day systemic; topical formulations vary widely",
    reconstitution: "Common vial size 50mg reconstituted with bacteriostatic water",
    administration_route: "Subcutaneous injection or topical application",
    research_notes: "Widely researched in dermatology/cosmetic contexts for skin remodeling in addition to systemic repair applications.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "mots-c": {
    name: "MOTS-c",
    category: "Mitochondrial / Metabolic",
    mechanism: "Mitochondrial-derived peptide; researched for AMPK activation and metabolic regulation, often termed an exercise mimetic",
    typical_dose_range: "5-10mg/week, split doses",
    reconstitution: "Common vial size 10mg in 1-2ml bacteriostatic water",
    administration_route: "Subcutaneous injection",
    research_notes: "Researched as a potential exercise-mimetic for metabolic health applications in aging populations.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  },
  "epithalon": {
    name: "Epithalon",
    category: "Longevity",
    mechanism: "Synthetic tetrapeptide; researched for telomerase activation and pineal gland/melatonin regulation",
    typical_dose_range: "5-10mg/day for 10-20 day research cycles",
    reconstitution: "Common vial size 50-100mg reconstituted with bacteriostatic water",
    administration_route: "Subcutaneous injection",
    research_notes: "Most research originates from Russian gerontology studies (Khavinson et al.) on telomere length and circadian regulation.",
    disclaimer: "Research use only. Not evaluated by FDA. Not for human consumption."
  }
};

export function getPeptide(name) {
  const key = name.toLowerCase().trim();
  return peptides[key] || null;
}

export function listPeptides() {
  return Object.keys(peptides).map(key => ({
    slug: key,
    name: peptides[key].name,
    category: peptides[key].category
  }));
}
