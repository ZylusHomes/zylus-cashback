"use client";

import Hero from "@/components/Home/hero";
import Header from "@/components/Menu/menu";
import PlatformsSection from "@/components/Home/platform";
import FinanceSection from "@/components/Home/finance";
import LoanSavingsSection from "@/components/Home/LoanSaving";
import CaseStudySection from "@/components/Home/caseStudySection";
import FooterSection from "@/components/Footer/footer";
import Vision from "@/components/Home/vision";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" type="image/png" href="../public/smallLogo.png" />
      </Head>
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
