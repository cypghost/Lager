"use client";
import FAQs from "@/components/landing/FAQs";
import CTA from "@/components/landing/CTA";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import Feature from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen w-full mx-auto font-sans">
      <Hero />
      <Feature />
      <Services />
      <HowItWorks />
      <CTA />
      <FAQs />
    </main>
  );
}
