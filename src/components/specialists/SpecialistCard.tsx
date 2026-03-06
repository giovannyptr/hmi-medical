import Image from "next/image";
import Link from "next/link";

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

interface SpecialistCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function SpecialistCard({ title, description, image, href }: SpecialistCardProps) {
  return (
    <div className="shrink-0 snap-start flex flex-col" style={{ width: 392, height: 540 }}>
      {/* Image — tall rounded rectangle, no white wrapper */}
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 430 }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text sits on the section background */}
      <div className="flex flex-col gap-1.5 pt-4" style={{ height: 110 }}>
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-blue-700 transition-colors text-sm"
        >
          {title}
          <ArrowRight />
        </Link>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
