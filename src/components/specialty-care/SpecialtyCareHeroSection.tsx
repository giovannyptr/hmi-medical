import Image from "next/image";
import Link from "next/link";

export default function SpecialtyCareHeroSection() {
  return (
    <section className="relative w-full h-[320px] overflow-hidden bg-gray-800">
      <Image
        src="/images/hero-specialty.webp"
        alt="Specialty Care"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <p className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-3">
          Our Specialists
        </p>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
          Find Specialist Care to Your Needs
        </h1>
      </div>

      <div className="absolute bottom-4 left-8 sm:left-16 lg:left-24 z-10 flex items-center gap-2 text-sm">
        <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
        <span className="text-white/40">/</span>
        <span className="text-white font-medium">Specialty Care</span>
      </div>
    </section>
  );
}
