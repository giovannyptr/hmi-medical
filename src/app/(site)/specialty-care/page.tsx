import SpecialtyCareHeroSection from "@/components/specialty-care/SpecialtyCareHeroSection";
import ServiceEnquirySection from "@/components/services/ServiceEnquirySection";
import MedicalSpecialtiesSection from "@/components/specialties/MedicalSpecialtiesSection";

export const metadata = {
  title: "Specialty Care | HMI Medical",
};

export default function SpecialtyCarePage() {
  return (
    <main>
      <SpecialtyCareHeroSection />
      <MedicalSpecialtiesSection />
      <ServiceEnquirySection />
    </main>
  );
}
