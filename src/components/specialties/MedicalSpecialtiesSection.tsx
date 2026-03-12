"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";

const MOBILE_PAGE_SIZE = 6;

export type MedicalSpecialtyItem = {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  iconUrl?: string;
};

export default function MedicalSpecialtiesSection({ specialties }: { specialties: MedicalSpecialtyItem[] }) {
  const total = specialties.length;
  const [visibleCount, setVisibleCount] = useState(MOBILE_PAGE_SIZE);

  if (!specialties || specialties.length === 0) return null;

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
          {specialties.map(({ _id, title, slug, description, iconUrl }, index) => (
            <Link
              key={_id}
              href={slug ? `/specialty-care/${slug}` : "/specialty-care"}
              className={`group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all ${index >= visibleCount ? "hidden sm:flex" : "flex"}`}
            >
              <div className="relative w-20 h-20 rounded-full bg-blue-50 overflow-hidden shrink-0">
                {iconUrl && (
                  <Image src={iconUrl} alt={title} fill className="object-cover" />
                )}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                {description && (
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                )}
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
