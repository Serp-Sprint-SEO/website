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
import WhyUsSection from "@/app/components/WhyUsSection";
import DeliverableSection from "@/app/components/DeliverableSection";
import PricingMatrixSection from "@/app/components/PricingMatrixSection";
import SolvedIssuesSection from "@/app/components/SolvedIssuesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <WhyUsSection />
      <SimpleOfferCtaSection />
      <WhyPartnerSection />
      <SolvedIssuesSection />
      <BenefitsSection />
      <WhySeoNotWorkingSection />
      <SuperchargeWebsiteSeoCtaSection />
      <PricingMatrixSection />
      <DeliverableSection />
      <FixBrokenSeoCtaSection />
      <FaqSection />
      <WorkWithUsCtaSection />
      <TeamSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
