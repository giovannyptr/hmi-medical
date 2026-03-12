"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 6000; // ms per slide

const slides = [
  {
    tag: "Community Outreach",
    heading: "HMI Cares for All\nSingaporeans",
    description:
      "The event marks the official launch of HMI Cares, our new community health initiative in honour of SG60.",
    cta: { label: "Find out more", href: "/health-screening" },
    image: "/images/hero.png",
    slideLabel: "HMI Cares for all Singaporeans",
  },
  {
    tag: "Milestones",
    heading: "25 Years\nof Care",
    description:
      "Celebrating 25 years of delivering trusted, compassionate healthcare to communities across the region.",
    cta: { label: "Find out more", href: "/health-screening" },
    image: "/images/hero2.jpg",
    slideLabel: "25 Years of Care",
  },
  {
    tag: "Milestones",
    heading: "40 Years of\nTotal Defence",
    description:
      "HMI Medical proudly marks 40 years of commitment to national resilience and community health.",
    cta: { label: "Find out more", href: "/health-screening" },
    image: "/images/hero3.png",
    slideLabel: "40 years of Total Defence",
  },
];

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
  }, []);

  // Auto-advance + progress bar
  useEffect(() => {
    setProgress(0);
    const startTime = performance.now();

    const raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setActive((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [active]);

  const slide = slides[active];

  return (
    <section className="relative w-full h-[calc(100vh-82px)] min-h-[480px] max-h-[700px] overflow-hidden bg-gray-900">
      {/* Background images — preload all, show active */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === active ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={s.image}
            alt={s.slideLabel}
            fill
            className="object-cover"
            priority={i === 0}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Content — bottom-left */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-xl">
          {/* Tag */}
          <p className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {slide.tag}
          </p>

          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight uppercase whitespace-pre-line mb-5">
            {slide.heading}
          </h1>

          {/* Description */}
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            {slide.description}
          </p>

          {/* CTA */}
          <Link
            href={slide.cta.href}
            className="inline-flex items-center gap-3 rounded-full border border-white text-white font-semibold text-sm px-7 py-3 hover:bg-white hover:text-gray-900 transition-colors"
          >
            {slide.cta.label}
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Slide navigation — bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "flex-1 text-left px-6 sm:px-10 lg:px-14 py-4 border-t transition-colors",
                i === active
                  ? "border-white/40 bg-white/10"
                  : "border-white/20 bg-transparent hover:bg-white/5"
              )}
            >
              <span
                className={cn(
                  "block text-xs sm:text-sm font-medium truncate mb-2",
                  i === active ? "text-white" : "text-white/60"
                )}
              >
                {s.slideLabel}
              </span>

              {/* Progress bar track */}
              <div className="h-0.5 w-full bg-white/25 rounded-full overflow-hidden">
                {i === active ? (
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${progress}%`, transition: "none" }}
                  />
                ) : i < active ? (
                  <div className="h-full bg-white/60 rounded-full w-full" />
                ) : null}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
