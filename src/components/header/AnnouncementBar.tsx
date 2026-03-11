"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1a56c4] text-white text-sm text-center py-2.5 px-4">
      <Link
        href="/health-screening"
        className="hover:underline hover:text-white/90 transition-colors"
      >
        {t.announcement}
      </Link>
    </div>
  );
}
