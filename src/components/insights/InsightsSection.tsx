import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

type NewsItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
};

const fallbackFeatured = {
  title: "HealthierSG for Pioneers",
  description:
    "Healthy habits and preventive care can help older people to stay active and maintain a good quality of life.",
  image: "/images/insights/hmi-alternative.png",
  href: "/news/healthiersg-for-pioneers",
};

const fallbackSecondary = [
  {
    title: "Using MediSave in our Malaysia Hospital",
    image: "/images/insights/medisave-malaysia.png",
    href: "/news/medisave-malaysia-hospital",
  },
  {
    title: "HMI Medical as an alternative",
    image: "/images/insights/healthiersg-pioneers.png",
    href: "/news/hmi-medical-alternative",
  },
];

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function InsightsSection({ news }: { news?: NewsItem[] }) {
  const featured = news && news.length > 0
    ? {
        title: news[0].title,
        description: news[0].excerpt ?? "",
        image: news[0].imageUrl ?? fallbackFeatured.image,
        href: `/news/${news[0].slug}`,
      }
    : fallbackFeatured;

  const secondary = news && news.length > 1
    ? news.slice(1, 3).map((n) => ({
        title: n.title,
        image: n.imageUrl ?? "/images/insights/medisave-malaysia.png",
        href: `/news/${n.slug}`,
      }))
    : fallbackSecondary;
  return (
    <section className="bg-blue-50 py-16">
      <Container>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Sharing more insights
        </h2>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-3">
          {/* Featured card — tall */}
          <Link
            href={featured.href}
            className="group relative rounded-2xl overflow-hidden w-full"
            style={{ height: "400px" }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-bold text-lg mb-1.5 leading-snug">
                {featured.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {featured.description}
              </p>
            </div>
          </Link>

          {/* Secondary cards — small */}
          {secondary.map(({ title, image, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative rounded-2xl overflow-hidden w-full"
              style={{ height: "80px" }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center px-5">
                <h3 className="text-white font-bold text-sm leading-snug">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: original grid layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_0.45fr_0.35fr] gap-4 h-[520px]">
          {/* Featured card — large */}
          <Link
            href={featured.href}
            className="group relative rounded-2xl overflow-hidden"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="text-white font-bold text-xl mb-2 leading-snug">
                {featured.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {featured.description}
              </p>
            </div>
          </Link>

          {/* Secondary cards */}
          {secondary.map(({ title, image, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative rounded-2xl overflow-hidden"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg leading-snug">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 rounded-full bg-blue-700 text-white font-semibold px-8 py-3.5 hover:bg-blue-800 transition-colors"
          >
            View more
            <ArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}
