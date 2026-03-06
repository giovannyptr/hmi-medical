import Container from "@/components/ui/Container";

export default function TopBar() {
  return (
    <div className="bg-blue-700 text-white text-sm py-2">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span>📞 +1 (555) 123-4567</span>
          <span>✉️ info@hmimedical.com</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Mon - Fri: 8:00 AM – 6:00 PM</span>
        </div>
      </Container>
    </div>
  );
}
