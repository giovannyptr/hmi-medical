import HeroSection from "@/components/hero/HeroSection";
import FindUsSection from "@/components/find-us/FindUsSection";
import MedicalSpecialtiesSection from "@/components/specialties/MedicalSpecialtiesSection";
import SpecialistCareSection from "@/components/specialists/SpecialistCareSection";
import InsightsSection from "@/components/insights/InsightsSection";
import CorporateEnquirySection from "@/components/corporate/CorporateEnquirySection";
import { getMedicalSpecialties, getSpecialists, getNews } from "@/sanity/queries";

export default async function Home() {
  const [specialties, specialists, news] = await Promise.all([
    getMedicalSpecialties(),
    getSpecialists(),
    getNews(),
  ]);

  return (
    <main>
      <HeroSection />
      <FindUsSection />
      <MedicalSpecialtiesSection specialties={specialties ?? []} />
      <SpecialistCareSection specialists={specialists ?? []} />
      <InsightsSection news={news ?? []} />
      <CorporateEnquirySection />
    </main>
  );
}
