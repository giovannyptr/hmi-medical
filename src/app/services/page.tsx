import Container from "@/components/ui/Container";
import { getServices } from "@/sanity/queries";

export const metadata = {
  title: "Our Services | HMI Medical",
};

export default async function ServicesPage() {
  const services = await getServices().catch(() => []);

  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h1>
        <p className="text-gray-600 mb-10">
          Comprehensive medical services designed around your wellbeing.
        </p>

        {services.length === 0 ? (
          <p className="text-gray-400">No services found. Add some in Sanity Studio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc: { _id: string; title: string; description?: string; icon?: string }) => (
              <div
                key={svc._id}
                className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {svc.icon && (
                  <span className="text-3xl mb-4 block">{svc.icon}</span>
                )}
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {svc.title}
                </h2>
                {svc.description && (
                  <p className="text-sm text-gray-600">{svc.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
