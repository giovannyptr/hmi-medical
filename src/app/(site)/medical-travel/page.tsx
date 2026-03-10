import MedicalTravelDiscoverSection from "@/components/medical-travel/MedicalTravelDiscoverSection";
import MedicalTravelHeroSection from "@/components/medical-travel/MedicalTravelHeroSection";
import MedicalTravelIntroSection from "@/components/medical-travel/MedicalTravelIntroSection";
import MedicalTravelPackagesSection from "@/components/medical-travel/MedicalTravelPackagesSection";
import MedicalTravelTabsSection from "@/components/medical-travel/MedicalTravelTabsSection";

export const metadata = {
  title: "Medical Travel | HMI Medical",
};

export default function MedicalTravelPage() {
  return (
    <main>
      <MedicalTravelHeroSection />
      <MedicalTravelIntroSection />
      <MedicalTravelTabsSection />
      <MedicalTravelPackagesSection />
      <MedicalTravelDiscoverSection />
    </main>
  );
}
