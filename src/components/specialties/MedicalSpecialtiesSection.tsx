"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";

const MOBILE_PAGE_SIZE = 6;

const specialties = [
  {
    title: "Bones, Muscles & Joints",
    description: "Treating sports injuries, age-related muscle and bone conditions.",
    image: "/images/icon-medical/bone.png",
    href: "/specialty-care",
  },
  {
    title: "Colon Health",
    description: "Offering minimally-invasive procedures for colorectal issues.",
    image: "/images/icon-medical/colon.png",
    href: "/specialty-care",
  },
  {
    title: "Digestive System",
    description: "Adept at treating different cases with minimally invasive techniques.",
    image: "/images/icon-medical/stomach.png",
    href: "/specialty-care",
  },
  {
    title: "Ear, Nose & Throat",
    description: "Receive care for ear, nose, throat, head & neck conditions.",
    image: "/images/icon-medical/ear-nose-throat.png",
    href: "/specialty-caret",
  },
  {
    title: "Endoscopy",
    description: "Providing a range of diagnostic and endoscopic procedures.",
    image: "/images/icon-medical/endoscopy.png",
    href: "/specialty-care",
  },
  {
    title: "General Surgery",
    description: "Providing minimally-invasive procedures for speedy recovery.",
    image: "/images/icon-medical/general-surgery.png",
    href: "/specialty-care",
  },
  {
    title: "Heart",
    description: "Treating heart diseases, along with cardiovascular risk factors.",
    image: "/images/icon-medical/heart.png",
    href: "/specialty-care",
  },
  {
    title: "Infant & Children's Health",
    description: "Catering to the needs and health of your babies and children.",
    image: "/images/icon-medical/children-health.png",
    href: "/specialty-care",
  },
  {
    title: "Radiology",
    description: "Offering same-day consultations and imaging tests in the same area.",
    image: "/images/icon-medical/radiology.png",
    href: "/specialty-care",
  },
  {
    title: "Respiratory",
    description: "Offering medical care relating to the airways and lungs.",
    image: "/images/icon-medical/respiratory.png",
    href: "/specialty-care",
  },
  {
    title: "Skin Health",
    description: "Providing treatment for various skin and cosmetic concerns.",
    image: "/images/icon-medical/skin.png",
    href: "/specialty-care",
  },
  {
    title: "Sleep Medicine",
    description: "Providing care and treatment for a wide spectrum of sleep disorders.",
    image: "/images/icon-medical/sleep-medicine.png",
    href: "/specialty-care",
  },
];

export default function MedicalSpecialtiesSection() {
  const total = specialties.length;
  const [visibleCount, setVisibleCount] = useState(MOBILE_PAGE_SIZE);

  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-12 max-w-lg">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            Medical Specialties
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We prioritise reducing healthcare hassles – from department
            transitions to staff knowing your name.
          </p>
        </div>

        {/* Cards grid — mobile shows 6 with load more, desktop shows all */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map(({ title, description, image, href }, index) => (
            <Link
              key={title}
              href={href}
              className={`group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all ${index >= visibleCount ? "hidden sm:flex" : "flex"}`}
            >
              <div className="relative w-20 h-20 rounded-full bg-blue-50 overflow-hidden shrink-0">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More — mobile only */}
        <div className="sm:hidden mt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">
            Showing {Math.min(visibleCount, total)} of {total} results
          </p>
          {visibleCount < total && (
            <button
              onClick={() => setVisibleCount(total)}
              className="px-8 py-3 rounded-full border-2 border-blue-700 text-blue-700 font-semibold text-sm hover:bg-blue-700 hover:text-white transition-colors"
            >
              Load More
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
