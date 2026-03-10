"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function MedicalTravelHeroSection() {
  const { t } = useTranslation();
  const h = t.medicalTravel.hero;

  return (
    <section className="relative w-full h-[380px] overflow-hidden bg-gray-800">
      <Image
        src="/images/hero-medical-travel.jpg"
        alt="Medical Travel"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          {h.label}
        </p>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-lg">
          {h.heading}
        </h1>
      </div>

      <div className="absolute bottom-4 left-8 sm:left-16 lg:left-24 z-10 flex items-center gap-2 text-sm">
        <Link href="/" className="text-white/60 hover:text-white transition-colors">{h.home}</Link>
        <span className="text-white/40">/</span>
        <span className="text-white font-medium">{h.breadcrumb}</span>
      </div>
    </section>
  );
}
