import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getNewsArticle, getNews } from "@/sanity/queries";
import Container from "@/components/ui/Container";

export async function generateStaticParams() {
  const articles = await getNews();
  return (articles ?? [])
    .filter((a: { slug?: string }) => a.slug)
    .map((a: { slug: string }) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);
  return { title: article ? `${article.title} | HMI Medical` : "HMI Medical" };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) notFound();

  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="bg-white min-h-screen">
      {/* Cover image */}
      {article.imageUrl && (
        <div className="relative w-full h-[420px] bg-gray-900">
          <Image src={article.imageUrl} alt={article.title} fill className="object-cover opacity-80" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <Container>
        <div className="py-14 max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700">News & Insights</span>
          </div>

          {publishedDate && (
            <p className="text-sm text-blue-600 font-medium mb-3">{publishedDate}</p>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-lg text-gray-500 leading-relaxed mb-10 border-l-4 border-blue-200 pl-5">
              {article.excerpt}
            </p>
          )}

          {article.body && article.body.length > 0 && (
            <div className="prose prose-blue max-w-none">
              <PortableText value={article.body} />
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
