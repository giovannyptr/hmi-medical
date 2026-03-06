import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface HeroData {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface HeroSectionProps {
  data?: HeroData;
}

const defaults: Required<HeroData> = {
  heading: "Your Health, Our Priority",
  subheading:
    "Expert medical care delivered with compassion. Book your appointment today and take the first step toward a healthier you.",
  ctaLabel: "Book Appointment",
  ctaHref: "/contact",
};

const btnBase =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors h-12 px-7 text-base";

export default function HeroSection({ data }: HeroSectionProps) {
  const { heading, subheading, ctaLabel, ctaHref } = { ...defaults, ...data };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-24">
      <Container className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
          {heading}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">{subheading}</p>
        <div className="flex gap-4 mt-2">
          <Link
            href={ctaHref}
            className={cn(btnBase, "bg-blue-600 text-white hover:bg-blue-700")}
          >
            {ctaLabel}
          </Link>
          <Link
            href="/services"
            className={cn(btnBase, "border border-blue-600 text-blue-600 hover:bg-blue-50")}
          >
            Our Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
