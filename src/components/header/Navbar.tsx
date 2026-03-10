"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/LanguageContext";

// ─── Icons ────────────────────────────────────────────────────────────────────

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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

// ─── Mega Menu ────────────────────────────────────────────────────────────────

function SpecialtyMegaMenu({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const s = t.nav.specialty;

  const specialtyColumns = [
    [
      { label: s.bariatric, href: "/specialty-care/bariatric-surgery" },
      { label: s.cardiology, href: "/specialty-care/cardiology" },
      { label: s.colorectal, href: "/specialty-care/colorectal" },
      { label: s.dermatology, href: "/specialty-care/dermatology" },
      { label: s.ent, href: "/specialty-care/ent" },
      { label: s.gastro, href: "/specialty-care/gastroenterology" },
    ],
    [
      { label: s.gynae, href: "/specialty-care/gynaecology" },
      { label: s.family, href: "/specialty-care/family-medicine" },
      { label: s.internal, href: "/specialty-care/internal-medicine" },
      { label: s.ortho, href: "/specialty-care/orthopaedic" },
      { label: s.paeds, href: "/specialty-care/paediatrics" },
      { label: s.renal, href: "/specialty-care/renal-medicine" },
    ],
    [
      { label: s.respiratory, href: "/specialty-care/respiratory" },
      { label: s.sleep, href: "/specialty-care/sleep-medicine" },
      { label: s.urology, href: "/specialty-care/urology" },
      { label: s.internalTwo, href: "/specialty-care/internal-medicine-2" },
    ],
  ];

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50">
      <Container className="py-10">
        <div className="flex gap-10">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-blue-600 mb-6">
              {t.nav.specialtyCare}
            </p>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {specialtyColumns.map((col, ci) => (
                <ul key={ci} className="flex flex-col gap-4">
                  {col.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} onClick={onClose} className="text-sm text-gray-800 hover:text-blue-700 transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="w-px bg-gray-100 shrink-0" />

          <div className="w-72 shrink-0 flex flex-col gap-4">
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100">
              <Image src="/images/specialists/doctor-feature.jpg" alt="Medical Specialties" fill className="object-cover" />
            </div>
            <div>
              <Link href="/services" onClick={onClose} className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                {t.nav.megaTitle}
              </Link>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{t.nav.megaDesc}</p>
              <Link href="/services" onClick={onClose} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-700 mt-3 transition-colors">
                {t.nav.seeAll}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { label: t.nav.findDoctor, href: "/doctors", hasMega: false },
    { label: t.nav.findClinic, href: "/clinics", hasMega: false },
    { label: t.nav.services, href: "/services", hasMega: false },
    { label: t.nav.specialtyCare, href: "/specialty-care", hasMega: true },
    { label: t.nav.healthScreening, href: "/health-screening", hasMega: false },
    { label: t.nav.medicalTravel, href: "/medical-travel", hasMega: false },
  ];

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <Container className="flex items-center justify-between h-[72px] gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/images/HMI-logo.svg" alt="HMI Medical" width={102} height={48} priority />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map(({ label, href, hasMega }) => (
            <li
              key={href}
              onMouseEnter={hasMega ? openMega : undefined}
              onMouseLeave={hasMega ? closeMega : undefined}
              className="relative"
            >
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium whitespace-nowrap transition-colors hover:text-blue-700",
                  pathname === href || (hasMega && megaOpen) ? "text-blue-700" : "text-gray-700"
                )}
              >
                {label}
              </Link>
              {hasMega && megaOpen && (
                <span className="absolute -bottom-[26px] left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 hover:bg-blue-700 transition-colors shrink-0"
        >
          {t.nav.makeAppointment}
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-700 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={t.nav.toggleNav}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mega menu */}
      {megaOpen && (
        <div onMouseEnter={openMega} onMouseLeave={closeMega}>
          <SpecialtyMegaMenu onClose={() => setMegaOpen(false)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <Container className="py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "py-2.5 text-sm font-medium transition-colors hover:text-blue-700",
                  pathname === href ? "text-blue-700" : "text-gray-700"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 hover:bg-blue-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.makeAppointment}
            </Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
