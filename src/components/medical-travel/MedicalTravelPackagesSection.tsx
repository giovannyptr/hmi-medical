"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function MedicalTravelPackagesSection() {
  const { t } = useTranslation();
  const p = t.medicalTravel.packages;

  const packages = [
    { name: p.simple, description: p.simpleDesc, image: "/images/gp-services/gp-service1.webp", href: "#" },
    { name: p.signature, description: p.signatureDesc, image: "/images/gp-services/gp-service2.png", href: "#" },
    { name: p.signaturePlus, description: p.signaturePlusDesc, image: "/images/gp-services/gp-service3.webp", href: "#" },
    { name: p.supreme, description: p.supremeDesc, image: "/images/medical-travel/treatment-costs.jpg", href: "#" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0047ab] to-[#00c6e0] py-16 px-8 sm:px-16 lg:px-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
        <div>
          <p className="text-white/70 text-xs font-bold tracking-[0.18em] uppercase mb-4">
            {p.label}
          </p>
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            {p.heading}
          </h2>
        </div>
        <p className="text-white/85 leading-relaxed lg:pt-10">{p.body}</p>
      </div>

      {/* Package cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="bg-white rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative h-52">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover"
              />
              {/* Arrow button */}
              <Link
                href={pkg.href}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-md hover:bg-[#00b5c4] transition-colors"
                aria-label={`Learn more about ${pkg.name}`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-bold text-gray-900 text-[15px]">{pkg.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
