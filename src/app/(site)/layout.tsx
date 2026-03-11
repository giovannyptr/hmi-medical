import AnnouncementBar from "@/components/header/AnnouncementBar";
import TopBar from "@/components/header/TopBar";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
