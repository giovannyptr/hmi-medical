
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function CorporateEnquirySection() {
  return (
    <section className="bg-blue-50 w-full">
      <div className="max-w-[1366px] mx-auto px-5 lg:px-[71px]" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div
          className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400 flex flex-col justify-center gap-2 px-6 lg:px-20"
          style={{
            minHeight: 200,
            borderRadius: 16,
          }}
        >
          <h2 className="text-white font-bold text-2xl">
            For corporate enquiries
          </h2>
          <a
            href="mailto:askus@hmimedical.com.sg"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
          >
            <MailIcon />
            askus@hmimedical.com.sg
          </a>
        </div>
      </div>
    </section>
  );
}
