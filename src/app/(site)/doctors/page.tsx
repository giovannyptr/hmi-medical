import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getDoctors } from "@/sanity/queries";

export const metadata = {
  title: "Our Doctors | HMI Medical",
};

type Doctor = {
  _id: string;
  name: string;
  slug?: string;
  specialty: string;
  bio?: string;
  clinic?: string;
  availability?: string;
  imageUrl?: string;
};

function ClinicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DoctorCard({ doc }: { doc: Doctor }) {
  const cardContent = (
    <>
      <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-100 shrink-0">
        {doc.imageUrl ? (
          <Image src={doc.imageUrl} alt={doc.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>
      <h2 className="text-base font-bold text-gray-900 text-center leading-tight">{doc.name}</h2>
      <p className="text-sm font-semibold text-[#3b82f6] text-center">{doc.specialty}</p>
      {doc.clinic && (
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <ClinicIcon />
          <span>{doc.clinic}</span>
        </div>
      )}
      <div className="flex-1" />
      {doc.availability && (
        <span className="mt-2 w-full text-center rounded-full border border-gray-300 text-gray-500 text-sm font-medium py-2.5 px-4">
          {doc.availability}
        </span>
      )}
    </>
  );

  const className = "bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-6 gap-3 hover:shadow-md transition-shadow";

  if (doc.slug) {
    return <Link href={`/doctors/${doc.slug}`} className={className}>{cardContent}</Link>;
  }
  return <div className={className}>{cardContent}</div>;
}

export default async function DoctorsPage() {
  const doctors: Doctor[] = await getDoctors().catch(() => []);

  return (
    <main className="py-16 bg-[#f0f4ff] min-h-screen">
      <Container>
        <p className="text-[#00b5a3] text-xs font-bold tracking-[0.15em] uppercase mb-4">OUR TEAM</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0047ab] mb-12">Our Specialist Doctors</h1>

        {doctors.length === 0 ? (
          <p className="text-gray-400">No doctors found. Add some in Sanity Studio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <DoctorCard key={doc._id} doc={doc} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
