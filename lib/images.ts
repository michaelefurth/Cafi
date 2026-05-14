/**
 * Single source of truth for site imagery.
 *
 * Drop production photos into /public/images/ using the filenames below.
 * Each path is a local URL so the CSP can stay tight (img-src 'self').
 *
 * Recommended specs:
 *   - Heroes (full-bleed): 2400 wide, AVIF or WebP, <250KB
 *   - State cards (portrait): 1600x1200
 *   - Case study portraits: 1600x2000
 */

export const heroImages = {
  home: "/images/hero-home.jpg",
  funding: "/images/hero-funding.jpg",
  about: "/images/hero-about.jpg",
  team: "/images/hero-team.jpg",
  caseStudies: "/images/hero-case-studies.jpg",
  contact: "/images/hero-contact.jpg",
  texas: "/images/hero-texas.jpg",
  arizona: "/images/hero-arizona.jpg",
  newMexico: "/images/hero-new-mexico.jpg"
} as const;

export const stateCardImages = {
  texas: "/images/state-card-tx.jpg",
  arizona: "/images/state-card-az.jpg",
  newMexico: "/images/state-card-nm.jpg"
} as const;

export const caseStudyImages = {
  baseRealignmentAnchor: "/images/case-base-realignment.jpg",
  baseRealignmentFull: "/images/case-base-realignment-full.jpg",
  federalServices: "/images/case-federal-services.jpg",
  phoenixMep: "/images/case-phoenix-mep.jpg"
} as const;
