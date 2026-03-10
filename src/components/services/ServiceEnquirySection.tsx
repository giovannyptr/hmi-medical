import Image from "next/image";
import Link from "next/link";

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}

export default function ServiceEnquirySection() {
  return (
    <section className="bg-white-50 w-full">
      <div className="max-w-[1366px] mx-auto" style={{ paddingTop: 60, paddingBottom: 60, paddingLeft: 71, paddingRight: 71 }}>
        <div
          className="relative w-full overflow-hidden flex flex-col justify-center gap-3"
          style={{ minHeight: 200, borderRadius: 16, paddingLeft: 80, paddingRight: 80 }}
        >
          {/* Background image */}
          <Image
            src="/images/service-inquiry-hero.avif"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-white font-bold text-2xl mb-2">
              Have questions?
            </h2>
            <p className="text-white/80 text-sm mb-5 max-w-md">
              Send us an enquiry and we will get back to you as soon as we can.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0047ab] font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Send an enquiry
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
