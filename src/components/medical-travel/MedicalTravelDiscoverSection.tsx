"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default function MedicalTravelDiscoverSection() {
  const { t } = useTranslation();
  const d = t.medicalTravel.discover;

  const items = [
    { title: d.specialistTitle, description: d.specialistDesc, image: "/images/specialists/colon-health.png", href: "/doctors" },
    { title: d.screeningTitle, description: d.screeningDesc, image: "/images/service-health-screening.jpg", href: "/health-screening" },
    { title: d.medisaveTitle, description: d.medisaveDesc, image: "/images/medical-travel/medisave.jpg", href: "/medical-travel/medisave" },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 5);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  };

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [updateBounds]);

  return (
    <section className="bg-white py-20 overflow-hidden relative">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-[88%] h-[520px] z-0 pointer-events-none">
        <svg viewBox="0 0 1200 520" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0 H1000 C1150 0 1200 80 1200 160 V520 H0 Z" fill="#f4f7ff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-6">
            <p className="text-[#00b5a3] text-xs font-bold tracking-[0.15em] uppercase mb-4">
              {d.label}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0047ab] leading-[1.2] tracking-tight">
              {d.heading}
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 pt-4">
            <p className="text-[#666] text-[17px] leading-relaxed mb-6 max-w-[440px]">{d.body}</p>
            <Link href="/services" className="inline-flex items-center gap-2 font-bold text-[#333] hover:text-[#0047ab] transition-colors group">
              {d.cta}
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={trackRef}
            onScroll={updateBounds}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
          >
            {items.map((item, i) => (
              <div key={i} className="min-w-[350px] md:min-w-[390px] snap-start">
                <div className="relative h-[450px] w-full mb-6 rounded-xl overflow-hidden shadow-sm">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <Link href={item.href} className="group inline-flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-[#333] group-hover:text-[#0047ab] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight />
                </Link>
                <p className="text-[#666] text-sm leading-relaxed max-w-[90%]">{item.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            disabled={atStart}
            className={`absolute -left-5 top-[225px] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-[#0047ab] transition-all z-20 ${atStart ? "opacity-0" : "opacity-100"}`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={atEnd}
            className={`absolute -right-5 top-[225px] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-[#0047ab] transition-all z-20 ${atEnd ? "opacity-0" : "opacity-100"}`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
