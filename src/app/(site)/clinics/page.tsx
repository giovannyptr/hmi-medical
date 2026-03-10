import Container from "@/components/ui/Container";
import { getClinics } from "@/sanity/queries";

export const metadata = {
  title: "Find a Clinic | HMI Medical",
};

type OpeningHour = {
  days: string;
  hours: string;
};

type Clinic = {
  _id: string;
  type: string;
  name: string;
  address: string;
  phone?: string;
  openingHours?: OpeningHour[];
};

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-gray-400">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-gray-400">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ClinicCard({ clinic }: { clinic: Clinic }) {
  const typeColor = clinic.type === "GP Clinic" ? "text-[#00b5a3]" : "text-[#00b5a3]";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col p-6 gap-4">
      {/* Type */}
      <p className={`text-xs font-bold tracking-[0.15em] uppercase ${typeColor}`}>
        {clinic.type}
      </p>

      {/* Name */}
      <h2 className="text-xl font-bold text-[#0047ab] leading-snug">{clinic.name}</h2>

      {/* Address */}
      <div className="flex items-start gap-2 text-sm text-gray-600">
        <LocationIcon />
        <span>{clinic.address}</span>
      </div>

      {/* Opening Hours */}
      {clinic.openingHours && clinic.openingHours.length > 0 && (
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <ClockIcon />
          <div className="flex flex-col gap-2 flex-1">
            {clinic.openingHours.map((oh, i) => (
              <div key={i}>
                <p className="font-medium text-gray-700">{oh.days}</p>
                <p className="text-gray-500">{oh.hours}</p>
                {i < clinic.openingHours!.length - 1 && (
                  <div className="border-t border-gray-100 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Call Us button */}
      {clinic.phone ? (
        <a
          href={`tel:${clinic.phone}`}
          className="w-full text-center rounded-full bg-[#2b4bbf] text-white font-semibold text-sm py-3.5 hover:bg-[#2340a8] transition-colors"
        >
          Call Us
        </a>
      ) : (
        <button
          disabled
          className="w-full text-center rounded-full bg-[#2b4bbf] text-white font-semibold text-sm py-3.5 opacity-60 cursor-not-allowed"
        >
          Call Us
        </button>
      )}
    </div>
  );
}

export default async function ClinicPage() {
  const clinics: Clinic[] = await getClinics().catch(() => []);

  return (
    <main className="bg-[#f0f4ff] min-h-screen py-16">
      <Container>
        <p className="text-[#00b5a3] text-xs font-bold tracking-[0.15em] uppercase mb-4">OUR LOCATIONS</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0047ab] mb-12">Find a Clinic</h1>

        {clinics.length === 0 ? (
          <p className="text-gray-400">No clinics found. Add some in Sanity Studio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((c) => (
              <ClinicCard key={c._id} clinic={c} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
