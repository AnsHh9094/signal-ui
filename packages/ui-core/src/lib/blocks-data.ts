export type BlockCategory = "Marketing" | "Application" | "E-commerce"

export interface BlockData {
  name: string
  slug: string
  description: string
  category: BlockCategory
}

export const blocksData: BlockData[] = [
  {
    name: "Hero Section",
    slug: "hero-section",
    description: "A massive, beautiful hero section with animated gradient text and particles.",
    category: "Marketing"
  },
  {
    name: "Pricing Bento",
    slug: "pricing-bento",
    description: "A sleek 3-tier pricing section with a glowing Pro card.",
    category: "Marketing"
  },
  {
    name: "Testimonial Carousel",
    slug: "testimonial-carousel",
    description: "A beautiful scrolling carousel of user reviews.",
    category: "Marketing"
  },
  {
    name: "Feature Bento",
    slug: "feature-bento",
    description: "A bento grid layout showcasing core features with spotlight glowing cards.",
    category: "Marketing"
  },
  {
    name: "Logo Ticker",
    slug: "logo-ticker",
    description: "An infinitely scrolling horizontal strip of partner/customer logos.",
    category: "Marketing"
  },
  {
    name: "CTA Banner",
    slug: "cta-banner",
    description: "A premium full-width call-to-action banner with deep gradient background.",
    category: "Marketing"
  },
  {
    name: "Footer Block",
    slug: "footer-block",
    description: "A multi-column footer with logo, links, newsletter sign-up and social icons.",
    category: "Marketing"
  }
]
