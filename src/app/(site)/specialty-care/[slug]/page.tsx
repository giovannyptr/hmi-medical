import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getMedicalSpecialty, getMedicalSpecialties } from "@/sanity/queries";
import Container from "@/components/ui/Container";

export async function generateStaticParams() {
  const specialties = await getMedicalSpecialties();
  return (specialties ?? [])
    .filter((s: { slug?: string }) => s.slug)
    .map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialty = await getMedicalSpecialty(slug);
  return { title: specialty ? `${specialty.title} | HMI Medical` : "HMI Medical" };
}

export default async function MedicalSpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialty = await getMedicalSpecialty(slug);

  if (!specialty) notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-blue-700 py-16">
        <Container>
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/specialty-care" className="hover:text-white transition-colors">Specialty Care</Link>
            <span>/</span>
            <span className="text-white">{specialty.title}</span>
          </div>
          <div className="flex items-center gap-6">
            {specialty.iconUrl && (
              <div className="relative w-20 h-20 rounded-full bg-white/10 overflow-hidden shrink-0">
                <Image src={specialty.iconUrl} alt={specialty.title} fill className="object-cover" />
              </div>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{specialty.title}</h1>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container>
        <div className="py-14 max-w-3xl">
          {specialty.description && (
            <p className="text-lg text-gray-600 leading-relaxed mb-10">{specialty.description}</p>
          )}
          {specialty.body && specialty.body.length > 0 && (
            <div className="prose prose-blue max-w-none">
              <PortableText value={specialty.body} />
            </div>
          )}
          <div className="mt-12">
            <Link
              href="/specialty-care"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              ← Back to Specialty Care
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
