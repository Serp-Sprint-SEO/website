import HeroSection from "@/app/components/HeroSection";
import ProblemSection from "@/app/components/ProblemSection";
import SolutionSection from "@/app/components/SolutionSection";
import PricingSection from "@/app/components/PricingSection";
import PricingPackageSection from "@/app/components/PricingPackageSection";
import FaqSection from "@/app/components/FaqSection";
import FooterSection from "@/app/components/FooterSection";
import CtaSection from "@/app/components/CtaSection";
import FounderVideoSection from "@/app/components/FounderVideoSection";
import FounderNoteSection from "@/app/components/FounderNoteSection";
import StatsSection from "@/app/components/StatsSection";
import TeamSection from "@/app/components/TeamSection";
import BentoGridSection from "@/app/components/BentoGridSection";
import LogoSection from "@/app/components/LogoSection";
import NewsletterSection from "@/app/components/NewsletterSection";
import FeatureSection from "@/app/components/FeatureSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoSection />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <FeatureSection />
      <BentoGridSection />
      <FounderNoteSection />
      <FounderVideoSection />
      <PricingSection />
      <PricingPackageSection />
      <FaqSection />
      <CtaSection />
      <TeamSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
