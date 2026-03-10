import Image from "next/image";
import Link from "next/link";
import HealthScreeningPackageCard from "./HealthScreeningPackageCard";

type Package = {
  _id: string;
  title: string;
  description: string;
  price: number;
  bookingUrl?: string;
};

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}

export default function HealthScreeningSection({ packages = [] }: { packages?: Package[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#00b5a3] text-xs font-bold tracking-[0.15em] uppercase mb-4">
              Health Screening
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0047ab] leading-tight mb-6">
              Essential checks for your everyday health
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Includes blood tests, cancer markers, and lifestyle indicators to help you understand your overall health.
            </p>
          </div>

          
        </div>

        {/* Packages grid */}
        {packages.length > 0 && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <HealthScreeningPackageCard
                key={pkg._id}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                bookingUrl={pkg.bookingUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
