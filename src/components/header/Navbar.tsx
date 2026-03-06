"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

// ─── Specialty Care mega menu data ────────────────────────────────────────────

const specialtyColumns = [
  [
    { label: "Bariatric Surgery", href: "/specialty-care/bariatric-surgery" },
    { label: "Cardiology", href: "/specialty-care/cardiology" },
    { label: "Colorectal", href: "/specialty-care/colorectal" },
    { label: "Dermatology", href: "/specialty-care/dermatology" },
    { label: "Ear, Nose & Throat", href: "/specialty-care/ent" },
    { label: "Gastroenterology", href: "/specialty-care/gastroenterology" },
  ],
  [
    { label: "Gynaecology & Obstetrics", href: "/specialty-care/gynaecology" },
    { label: "Family Medicine", href: "/specialty-care/family-medicine" },
    { label: "Internal Medicine", href: "/specialty-care/internal-medicine" },
    { label: "Orthopaedic", href: "/specialty-care/orthopaedic" },
    { label: "Paediatrics", href: "/specialty-care/paediatrics" },
    { label: "Renal Medicine", href: "/specialty-care/renal-medicine" },
  ],
  [
    { label: "Respiratory & Intensive Care Medicine", href: "/specialty-care/respiratory" },
    { label: "Sleep Medicine", href: "/specialty-care/sleep-medicine" },
    { label: "Urology & Male Subfertility", href: "/specialty-care/urology" },
    { label: "Internal Medicine", href: "/specialty-care/internal-medicine-2" },
  ],
];

// ─── Nav links ────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Find a Doctor", href: "/doctors", hasMega: false },
  { label: "Find a Clinic", href: "/clinics", hasMega: false },
  { label: "Our Services", href: "/services", hasMega: false },
  { label: "Specialty Care", href: "/specialty-care", hasMega: true },
  { label: "Health Screening", href: "/health-screening", hasMega: false },
  { label: "Medical Travel", href: "/medical-travel", hasMega: false },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function HmiLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="0,22 10,8 14,12 6,22 14,32 10,36" fill="#2BA3A3" />
        <polygon points="8,22 18,8 22,12 14,22 22,32 18,36" fill="#2BA3A3" />
        <polygon points="26,22 36,8 40,12 32,22 40,32 36,36" fill="#1A3A6B" />
        <polygon points="34,22 44,8 48,12 40,22 48,32 44,36" fill="#1A3A6B" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[22px] font-extrabold text-[#1A3A6B] tracking-wide">HMI</span>
        <span className="text-[9px] font-semibold text-[#1A3A6B] tracking-[0.18em] uppercase">Medical</span>
      </div>
    </Link>
  );
}

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
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50">
      <Container className="py-10">
        <div className="flex gap-10">
          {/* Left — specialty links */}
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-blue-600 mb-6">
              Specialty Care
            </p>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {specialtyColumns.map((col, ci) => (
                <ul key={ci} className="flex flex-col gap-4">
                  {col.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={onClose}
                        className="text-sm text-gray-800 hover:text-blue-700 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-100 shrink-0" />

          {/* Right — feature card */}
          <div className="w-72 shrink-0 flex flex-col gap-4">
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/specialists/doctor-feature.jpg"
                alt="Medical Specialties"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Link
                href="/services"
                onClick={onClose}
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
              >
                Medical Specialties
              </Link>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                Choosing the right type of specialist, depends on your condition. Begin your journey by selecting from our 16 specialty types of care.
              </p>
              <Link
                href="/services"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-700 mt-3 transition-colors"
              >
                See all specialties
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        <HmiLogo />

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
                  pathname === href || (hasMega && megaOpen)
                    ? "text-blue-700"
                    : "text-gray-700"
                )}
              >
                {label}
              </Link>

              {/* Active indicator line */}
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
          Make Appointment
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-700 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mega menu */}
      {megaOpen && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
        >
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
              Make Appointment
            </Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
