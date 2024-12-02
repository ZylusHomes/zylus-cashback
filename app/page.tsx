"use client";

import Hero from "@/components/Home/hero";
import Header from "@/components/Menu/menu";
import PlatformsSection from "@/components/Home/platform";
import FinanceSection from "@/components/Home/finance";
import LoanSavingsSection from "@/components/Home/LoanSaving";
import CaseStudySection from "@/components/Home/caseStudySection";
import FooterSection from "@/components/Footer/footer";
import Vision from "@/components/Home/vision";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Vision />
      <PlatformsSection />
      <FinanceSection />
      <LoanSavingsSection />
      <CaseStudySection />
      <FooterSection />
    </main>
  );
}
