import Link from "next/link";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

type Props = {
  title: string;
  description: string;
  price: number;
  bookingUrl?: string;
};

export default function HealthScreeningPackageCard({ title, description, price, bookingUrl }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between gap-4">
      {/* Title row */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <ArrowRight />
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
        {description}
      </p>

      {/* Price + CTA */}
      <div>
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xl font-bold text-gray-900">S${price.toLocaleString()}</p>
            <p className="text-xs text-gray-400">w/o GST</p>
          </div>
          {bookingUrl ? (
            <Link
              href={bookingUrl}
              className="bg-[#0047ab] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          ) : (
            <button
              disabled
              className="bg-[#0047ab] text-white font-bold text-sm px-6 py-3 rounded-full opacity-60 cursor-not-allowed"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
