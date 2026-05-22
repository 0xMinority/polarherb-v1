export const herbProfileSections = [
    "Origin Signal",
    "Bioactive Mechanism",
    "Commercial Readiness",
    "Regulatory Outlook",
    "Evidence Layer",
  ] as const;
  
  export type HerbProfileSection = (typeof herbProfileSections)[number];