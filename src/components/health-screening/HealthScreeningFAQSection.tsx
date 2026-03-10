"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-1 self-stretch bg-[#0047ab] rounded-full shrink-0" />
          <span className="font-semibold text-gray-800 text-[15px]">{question}</span>
        </div>
        <span className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <ChevronDown />
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5 pl-[calc(1.5rem+1rem+0.25rem)]">
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HealthScreeningFAQSection() {
  const { t } = useTranslation();
  const f = t.faq;

  const faqs = [
    { question: f.q1, answer: f.a1 },
    { question: f.q2, answer: f.a2 },
    { question: f.q3, answer: f.a3 },
    { question: f.q4, answer: f.a4 },
    { question: f.q5, answer: f.a5 },
    { question: f.q6, answer: f.a6 },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#00b5a3] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            {f.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0047ab] mb-3">
            {f.heading}
          </h2>
          <p className="text-gray-500 text-sm mb-4">{f.subheading}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-[#0047ab] transition-colors text-sm"
          >
            {f.contact}
            <ArrowRight />
          </Link>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
