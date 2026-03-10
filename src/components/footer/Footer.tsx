"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/contexts/LanguageContext";

// ─── Icons ────────────────────────────────────────────────────────────────────


function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const { t } = useTranslation();
  const f = t.footer;
  const n = t.nav;

  const exploreLinks = [
    { label: n.findDoctor, href: "/doctors" },
    { label: n.findClinic, href: "/clinics" },
    { label: n.medicalTravel, href: "/medical-travel" },
    { label: "Corporate Healthcare", href: "/corporate" },
    { label: "Healthcare Education", href: "/education" },
    { label: "HMI One", href: "/hmi-one" },
  ];

  const serviceLinks = [
    { label: n.healthScreening, href: "/services/health-screening" },
    { label: n.megaTitle, href: "/services" },
    { label: "Day Surgery", href: "/services/day-surgery" },
    { label: "GP Services", href: "/services/gp-services" },
    { label: "Healthier SG", href: "/services/healthier-sg" },
    { label: "Radiology", href: "/services/radiology" },
    { label: "Vaccination", href: "/services/vaccination" },
    { label: "Home Care Services", href: "/services/home-care" },
    { label: "Aesthetics Treatments", href: "/services/aesthetics" },
  ];

  const aboutLinks = [
    { label: "About HMI Medical", href: "/about" },
    { label: "Mission & Values", href: "/about/mission" },
    { label: "Model", href: "/about/model" },
    { label: "Governance", href: "/about/governance" },
    { label: "Milestones", href: "/about/milestones" },
    { label: "Careers", href: "/careers" },
  ];

  const newsLinks = [
    { label: f.latestEvents, href: "/news/events" },
    { label: f.inTheNews, href: "/news" },
    { label: f.healthTips, href: "/news/health-tips" },
  ];

  return (
    <footer className="bg-[#004E89] text-white">
      {/* Main grid */}
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.2fr_1fr_1.2fr] gap-10">

          {/* Col 1 — Logo + app downloads */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/images/HMI-logo.svg"
                alt="HMI Medical"
                width={102}
                height={48}
                className="brightness-0 invert"
              />
            </Link>
            <div>
              <p className="text-white/50 text-xs mb-3 whitespace-pre-line">{f.downloadApp}</p>
              {/* App Store */}
              <a href="#" className="flex items-center gap-2.5 bg-black rounded-lg px-4 py-2.5 mb-2.5 w-fit hover:bg-gray-900 transition-colors">
                <AppleIcon />
                <div className="leading-none">
                  <p className="text-[9px] text-white/70">{f.downloadOn}</p>
                  <p className="text-sm font-semibold text-white">{f.appStore}</p>
                </div>
              </a>
              {/* Google Play */}
              <a href="#" className="flex items-center gap-2.5 bg-black rounded-lg px-4 py-2.5 w-fit hover:bg-gray-900 transition-colors">
                <PlayIcon />
                <div className="leading-none">
                  <p className="text-[9px] text-white/70">{f.getItOn}</p>
                  <p className="text-sm font-semibold text-white">{f.googlePlay}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2 — Explore HMI */}
          <div>
            <p className="text-white/50 text-sm mb-5">{f.exploreHmi}</p>
            <ul className="flex flex-col gap-3.5">
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-semibold text-sm hover:text-white/70 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Services */}
          <div>
            <p className="text-white/50 text-sm mb-5">{f.ourServices}</p>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-semibold text-sm hover:text-white/70 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — About Us + News & Resources */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-white/50 text-sm mb-5">{f.aboutUs}</p>
              <ul className="flex flex-col gap-3.5">
                {aboutLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="font-semibold text-sm hover:text-white/70 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-5">{f.news}</p>
              <ul className="flex flex-col gap-3.5">
                {newsLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="font-semibold text-sm hover:text-white/70 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 5 — Contact */}
          <div className="flex flex-col gap-5">
            <p className="font-bold text-base leading-snug whitespace-pre-line">{f.company}</p>
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <LocationIcon />
              <span>{f.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/80">
              <MailIcon />
              <a href="mailto:askus@hmimedical.com" className="hover:text-white transition-colors">
                askus@hmimedical.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white text-white text-sm font-semibold px-5 py-2.5 hover:bg-white hover:text-[#004E89] transition-colors w-fit"
            >
              {f.contactUs}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-sm text-white/60">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/company/hmi-medical"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <LinkedInIcon />
              </span>
              {f.linkedin}
            </a>
            <span className="text-white/30">·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">{f.privacy}</Link>
            <span className="text-white/30">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">{f.terms}</Link>
            <span className="text-white/30">·</span>
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <GlobeIcon />
              {f.language}
            </button>
          </div>
          <p className="text-white/50 text-xs">{f.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
