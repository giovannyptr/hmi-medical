import Container from "@/components/ui/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";

export const metadata = {
  title: "Contact Us | HMI Medical",
};

export default function ContactPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="flex flex-col gap-6">
            <MapSection />
          </div>
        </div>
      </Container>
    </main>
  );
}
