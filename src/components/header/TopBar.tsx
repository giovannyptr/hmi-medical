"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

const localeLabels: Record<Locale, string> = { en: "EN", id: "ID" };

export default function TopBar() {
  const { t, locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const topLinks = [
    { label: t.topbar.aboutUs, href: "/about" },
    { label: t.topbar.news, href: "/news" },
    { label: t.topbar.contact, href: "/contact" },
  ];

  return (
    <div className="border-b border-gray-200 bg-white text-sm text-gray-600">
      <Container className="flex items-center justify-between h-10">
        {/* Language selector */}
        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
          >
            <GlobeIcon />
            <span className="font-medium">{localeLabels[locale]}</span>
            <ChevronDown />
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50 min-w-[160px]">
              {(["en", "id"] as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => { setLocale(loc); setOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 hover:bg-gray-50 transition-colors ${locale === loc ? "text-[#0047ab] font-semibold" : "text-gray-700"}`}
                >
                  <GlobeIcon />
                  {loc === "en" ? "English" : "Bahasa Indonesia"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right links + search */}
        <div className="flex items-center gap-6">
          {topLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:text-gray-900 transition-colors">
              {label}
            </Link>
          ))}
          <span className="h-4 w-px bg-gray-300" aria-hidden="true" />
          <button className="hover:text-gray-900 transition-colors" aria-label={t.topbar.search}>
            <SearchIcon />
          </button>
        </div>
      </Container>
    </div>
  );
}
