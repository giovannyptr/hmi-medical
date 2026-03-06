import HeroSection from "@/components/hero/HeroSection";
import { getHero } from "@/sanity/queries";

export default async function Home() {
  const hero = await getHero().catch(() => null);

  return (
    <main>
      <HeroSection data={hero ?? undefined} />
    </main>
  );
}
