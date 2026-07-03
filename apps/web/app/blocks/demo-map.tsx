import dynamic from "next/dynamic"

export const blocksDemoMap: Record<string, any> = {
  "hero-section": dynamic(() => import("@/registry/new-york/blocks/hero-section.demo").then((mod) => mod.HeroSectionDemo)),
  "pricing-bento": dynamic(() => import("@/registry/new-york/blocks/pricing-bento.demo").then((mod) => mod.PricingBentoDemo)),
  "testimonial-carousel": dynamic(() => import("@/registry/new-york/blocks/testimonial-carousel.demo").then((mod) => mod.TestimonialCarouselDemo)),
  "feature-bento": dynamic(() => import("@/registry/new-york/blocks/feature-bento.demo").then((mod) => mod.FeatureBentoDemo)),
  "logo-ticker": dynamic(() => import("@/registry/new-york/blocks/logo-ticker.demo").then((mod) => mod.LogoTickerDemo)),
  "cta-banner": dynamic(() => import("@/registry/new-york/blocks/cta-banner.demo").then((mod) => mod.CTABannerDemo)),
  "footer-block": dynamic(() => import("@/registry/new-york/blocks/footer-block.demo").then((mod) => mod.FooterBlockDemo)),
}
