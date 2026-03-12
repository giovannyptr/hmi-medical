import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getSpecialist, getSpecialists } from "@/sanity/queries";
import Container from "@/components/ui/Container";

export async function generateStaticParams() {
  const specialists = await getSpecialists();
  return (specialists ?? [])
    .filter((s: { slug?: string }) => s.slug)
    .map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialist = await getSpecialist(slug);
  return { title: specialist ? `${specialist.title} | HMI Medical` : "HMI Medical" };
}

export default async function SpecialistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialist = await getSpecialist(slug);

  if (!specialist) notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#0047ab] py-16">
        <Container>
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/specialty-care" className="hover:text-white transition-colors">Specialist Care</Link>
            <span>/</span>
            <span className="text-white">{specialist.title}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">{specialist.title}</h1>
        </Container>
      </div>

      {/* Content */}
      <Container>
        <div className="py-14 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            {specialist.description && (
              <p className="text-lg text-gray-600 leading-relaxed mb-10">{specialist.description}</p>
            )}
            {specialist.body && specialist.body.length > 0 && (
              <div className="prose prose-blue max-w-none">
                <PortableText value={specialist.body} />
              </div>
            )}
            <div className="mt-12">
              <Link
                href="/specialty-care"
                className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
              >
                ← Back to Specialist Care
              </Link>
            </div>
          </div>
          {specialist.imageUrl && (
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-md shrink-0">
              <Image src={specialist.imageUrl} alt={specialist.title} fill className="object-cover" />
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
