import Link from "next/link";
import Container from "@/components/ui/Container";

const topLinks = [
  { label: "About Us", href: "/about" },
  { label: "News & Resources", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="border-b border-gray-200 bg-white text-sm text-gray-600">
      <Container className="flex items-center justify-between h-10">
        {/* Language selector */}
        <button className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
          <GlobeIcon />
          <span className="font-medium">EN</span>
          <ChevronDown />
        </button>

        {/* Right links + search */}
        <div className="flex items-center gap-6">
          {topLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-900 transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Divider */}
          <span className="h-4 w-px bg-gray-300" aria-hidden="true" />

          <button
            className="hover:text-gray-900 transition-colors"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>
      </Container>
    </div>
  );
}
