import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { DescriptionSection } from "@/components/description-section"
import { CharacteristicsSection } from "@/components/characteristics-section"
import { FunFactsSection } from "@/components/fun-facts-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <DescriptionSection />
        <CharacteristicsSection />
        <FunFactsSection />
      </main>
      <SiteFooter />
    </>
  )
}
