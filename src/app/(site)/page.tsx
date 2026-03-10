import HeroSection from "@/components/hero/HeroSection";
import FindUsSection from "@/components/find-us/FindUsSection";
import MedicalSpecialtiesSection from "@/components/specialties/MedicalSpecialtiesSection";
import SpecialistCareSection from "@/components/specialists/SpecialistCareSection";
import InsightsSection from "@/components/insights/InsightsSection";
import CorporateEnquirySection from "@/components/corporate/CorporateEnquirySection";
import { getNews } from "@/sanity/queries";

export default async function Home() {
  const news = await getNews();

  return (
    <main>
      <HeroSection />
      <FindUsSection />
      <MedicalSpecialtiesSection />
      <SpecialistCareSection />
      <InsightsSection news={news} />
      <CorporateEnquirySection />
    </main>
  );
}
