import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import HealthScreeningSection from "@/components/services/HealthScreeningSection";
import GPServicesSection from "@/components/services/GPServicesSection";
import SpecialistCareSection from "@/components/specialists/SpecialistCareSection";
import ServiceEnquirySection from "@/components/services/ServiceEnquirySection";
import { getHealthScreeningPackages } from "@/sanity/queries";

export const metadata = {
  title: "Our Services | HMI Medical",
};

export default async function ServicesPage() {
  const packages = await getHealthScreeningPackages();

  return (
    <main>
      <ServicesHeroSection />
      <HealthScreeningSection packages={packages} />
      <GPServicesSection />
      <SpecialistCareSection />
      <ServiceEnquirySection />
    </main>
  );
}
