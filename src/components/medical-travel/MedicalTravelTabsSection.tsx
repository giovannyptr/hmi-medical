"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function MedicalTravelTabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();
  const tb = t.medicalTravel.tabs;

  const tabs = [tb.tab1, tb.tab2, tb.tab3];

  const tabContent = [
    {
      title: tb.costTitle,
      description: tb.costDesc1,
      cards: [
        { image: "/images/medical-travel/medisave.jpg", label: tb.medisaveLabel, text: tb.medisaveText, href: "/medical-travel/medisave" },
        { image: "/images/medical-travel/treatment-costs.jpg", label: tb.costsLabel, text: tb.costsText, href: "/medical-travel/estimated-costs" },
      ],
    },
    {
      title: tb.costTitle,
      description: tb.costDesc2,
      cards: [
        { image: "/images/medical-travel/medisave.jpg", label: tb.packagesLabel, text: tb.packagesText, href: "/medical-travel/treatment-packages" },
        { image: "/images/medical-travel/treatment-costs.jpg", label: tb.costsLabel, text: tb.costsText, href: "/medical-travel/estimated-costs" },
      ],
    },
    {
      title: tb.costTitle,
      description: tb.costDesc3,
      cards: [
        { image: "/images/medical-travel/medisave.jpg", label: tb.specialistLabel, text: tb.specialistText, href: "/medical-travel/specialist-care" },
        { image: "/images/medical-travel/treatment-costs.jpg", label: tb.costsLabel, text: tb.costsText, href: "/medical-travel/estimated-costs" },
      ],
    },
  ];

  const content = tabContent[activeTab];

  return (
    <section className="bg-white">
      {/* Tab bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="flex justify-center gap-0 overflow-x-auto no-scrollbar">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === i
                    ? "border-[#0047ab] text-[#0047ab]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-16">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0047ab] mb-4">{content.title}</h2>
          <p className="text-gray-500 leading-relaxed">{content.description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {content.cards.map((card) => (
            <div key={card.label}>
              <div className="relative h-[340px] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <Image src={card.image} alt={card.label} fill className="object-cover" />
              </div>
              <Link
                href={card.href}
                className="text-[#0047ab] font-bold text-lg hover:underline block mb-2"
              >
                {card.label}
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
