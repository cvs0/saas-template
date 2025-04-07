import { HeroSection } from "@/components/sections/hero-section";
import { AppPreview } from "@/components/sections/app-preview";
import { FeaturesSection } from "@/components/sections/features-section";
import CustomerShowcase from "@/components/sections/customer-showcase";
import CTASection from "@/components/sections/cta-section";
import ProductDirection from "@/components/sections/product-direction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AppPreview />
      <CustomerShowcase />
      <FeaturesSection />
      <ProductDirection />
      <CTASection />
    </>
  );
}
