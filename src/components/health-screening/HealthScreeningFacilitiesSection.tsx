"use client";

import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const facilities = [
  {
    name: "HMI Health Screening (Farrer Park)",
    image: "/images/facilities/farrer-park.jpg",
  },
  {
    name: "HMI Health Screening (Amara)",
    image: "/images/facilities/amara.jpg",
  },
  {
    name: "HMI OneCare Clinic (more than 35 locations islandwide)",
    image: "/images/facilities/onecare.jpeg",
  },
  {
    name: "HMI OneCare Clinic @ Raffles Place",
    image: "/images/facilities/raffles.jpg",
  },
];

export default function HealthScreeningFacilitiesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0047ab] leading-tight">
            {t.facilities.heading}
          </h2>
          <p className="text-gray-500 leading-relaxed pt-1">
            {t.facilities.body}
          </p>
        </div>

        {/* Facility cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((facility) => (
            <div key={facility.name} className="relative h-[320px] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Label */}
              <p className="absolute bottom-5 left-5 right-5 text-white font-bold text-[15px] leading-snug">
                {facility.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
