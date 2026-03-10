import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDoctor, getDoctors } from "@/sanity/queries";

export async function generateStaticParams() {
  const doctors = await getDoctors().catch(() => []);
  return doctors
    .filter((d: { slug?: string }) => d.slug)
    .map((d: { slug: string }) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = await getDoctor(slug).catch(() => null);
  return { title: doctor ? `${doctor.name} | HMI Medical` : "Doctor | HMI Medical" };
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-500">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-500">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-500 mt-0.5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = await getDoctor(slug).catch(() => null);

  if (!doctor) notFound();

  return (
    <main className="bg-[#f0f4ff] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0047ab] mb-8 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to all doctors
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left card */}
          <div className="w-full md:w-[320px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Photo */}
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              {doctor.imageUrl ? (
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-3">
              <div>
                <h1 className="text-lg font-bold text-[#0047ab]">{doctor.name}</h1>
                <p className="text-sm font-semibold text-[#3b82f6]">{doctor.specialty}</p>
              </div>

              <div className="flex flex-col gap-2.5 text-sm text-gray-600">
                {doctor.services && (
                  <div className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{doctor.services}</span>
                  </div>
                )}
                {doctor.languages && (
                  <div className="flex items-start gap-2">
                    <ChatIcon />
                    <span>{doctor.languages}</span>
                  </div>
                )}
                {doctor.clinic && (
                  <div className="flex items-start gap-2">
                    <LocationIcon />
                    <span>{doctor.clinic}</span>
                  </div>
                )}
              </div>

              {doctor.email ? (
                <a
                  href={`mailto:${doctor.email}`}
                  className="mt-2 w-full text-center rounded-full bg-[#0047ab] text-white text-sm font-semibold py-3 hover:bg-[#003d91] transition-colors"
                >
                  Contact us
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="mt-2 w-full text-center rounded-full bg-[#0047ab] text-white text-sm font-semibold py-3 hover:bg-[#003d91] transition-colors"
                >
                  Contact us
                </Link>
              )}
            </div>
          </div>

          {/* Right card */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {doctor.bio && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#0047ab] mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{doctor.bio}</p>
              </div>
            )}

            {doctor.qualifications && doctor.qualifications.length > 0 && (
              <div>
                <div className="inline-block bg-[#0047ab] text-white text-sm font-semibold px-5 py-2 rounded-full mb-4">
                  Qualifications
                </div>
                <ul className="flex flex-col gap-2">
                  {doctor.qualifications.map((q: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
