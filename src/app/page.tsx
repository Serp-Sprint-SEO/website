import HeroSection from "@/app/components/HeroSection";
import FaqSection from "@/app/components/FaqSection";
import FooterSection from "@/app/components/FooterSection";
import TeamSection from "@/app/components/TeamSection";
import NewsletterSection from "@/app/components/NewsletterSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import WhyPartnerSection from "@/app/components/WhyPartnerSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import WhySeoNotWorkingSection from "@/app/components/WhySeoNotWorkingSection";
import WorkWithUsCtaSection from "@/app/components/WorkWithUsCtaSection";
import SimpleOfferCtaSection from "@/app/components/SimpleOfferCtaSection";
import SuperchargeWebsiteSeoCtaSection from "@/app/components/SuperchargeWebsiteSeoCtaSection";
import FixBrokenSeoCtaSection from "@/app/components/FixBrokenSeoCtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      {/* Pricing Section (Table View) */}
      <SimpleOfferCtaSection />
      <WhyPartnerSection />
      {/* What issues are covered (Issue -> Description -> List) */}
      <BenefitsSection />
      <WhySeoNotWorkingSection />
      <SuperchargeWebsiteSeoCtaSection />
      {/* Pricing Section (Table View) */}
      {/* Deliverables section (20 deliverables) */}
      <FixBrokenSeoCtaSection />
      <FaqSection />
      <WorkWithUsCtaSection />
      <TeamSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
