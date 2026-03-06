import Container from "@/components/ui/Container";
import { getDoctors } from "@/sanity/queries";

export const metadata = {
  title: "Our Doctors | HMI Medical",
};

export default async function DoctorsPage() {
  const doctors = await getDoctors().catch(() => []);

  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Doctors</h1>
        <p className="text-gray-600 mb-10">
          Meet our team of experienced medical professionals.
        </p>

        {doctors.length === 0 ? (
          <p className="text-gray-400">No doctors found. Add some in Sanity Studio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc: { _id: string; name: string; specialty: string; bio?: string }) => (
              <div
                key={doc._id}
                className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                  🩺
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{doc.name}</h2>
                <p className="text-sm text-blue-600 mb-2">{doc.specialty}</p>
                {doc.bio && (
                  <p className="text-sm text-gray-600 line-clamp-3">{doc.bio}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
