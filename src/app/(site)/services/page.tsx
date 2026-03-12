import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import HealthScreeningSection from "@/components/services/HealthScreeningSection";
import GPServicesSection from "@/components/services/GPServicesSection";
import SpecialistCareSection from "@/components/specialists/SpecialistCareSection";
import ServiceEnquirySection from "@/components/services/ServiceEnquirySection";
import { getHealthScreeningPackages, getSpecialists } from "@/sanity/queries";

export const metadata = {
  title: "Our Services | HMI Medical",
};

export default async function ServicesPage() {
  const [packages, specialists] = await Promise.all([
    getHealthScreeningPackages(),
    getSpecialists(),
  ]);

  return (
    <main>
      <ServicesHeroSection />
      <HealthScreeningSection packages={packages} />
      <GPServicesSection />
      <SpecialistCareSection specialists={specialists ?? []} />
      <ServiceEnquirySection />
    </main>
  );
}
