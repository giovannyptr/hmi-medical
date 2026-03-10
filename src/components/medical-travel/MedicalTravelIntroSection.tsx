"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export default function MedicalTravelIntroSection() {
  const { t } = useTranslation();
  const i = t.medicalTravel.intro;

  return (
    <section className="bg-[#0047ab] py-12 px-8 sm:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-4">{i.heading}</h2>
        <p className="text-white/80 leading-relaxed text-[15px]">{i.body}</p>
      </div>
    </section>
  );
}
