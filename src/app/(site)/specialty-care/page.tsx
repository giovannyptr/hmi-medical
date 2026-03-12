import SpecialtyCareHeroSection from "@/components/specialty-care/SpecialtyCareHeroSection";
import ServiceEnquirySection from "@/components/services/ServiceEnquirySection";
import MedicalSpecialtiesSection from "@/components/specialties/MedicalSpecialtiesSection";
import { getMedicalSpecialties } from "@/sanity/queries";

export const metadata = {
  title: "Specialty Care | HMI Medical",
};

export default async function SpecialtyCarePage() {
  const specialties = await getMedicalSpecialties();

  return (
    <main>
      <SpecialtyCareHeroSection />
      <MedicalSpecialtiesSection specialties={specialties ?? []} />
      <ServiceEnquirySection />
    </main>
  );
}
