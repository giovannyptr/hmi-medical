import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import HealthScreeningSection from "@/components/services/HealthScreeningSection";
import ServiceEnquirySection from "@/components/services/ServiceEnquirySection";
import HealthScreeningFAQSection from "@/components/health-screening/HealthScreeningFAQSection";
import HealthScreeningFacilitiesSection from "@/components/health-screening/HealthScreeningFacilitiesSection";
import { getHealthScreeningPackages } from "@/sanity/queries";

export const metadata = {
  title: "Health Screening | HMI Medical",
};

export default async function HealthScreeningPage() {
  const packages = await getHealthScreeningPackages();

  return (
    <main>
      <ServicesHeroSection />
      <HealthScreeningSection packages={packages} />
      <HealthScreeningFAQSection />
      <HealthScreeningFacilitiesSection />
    </main>
  );
}
