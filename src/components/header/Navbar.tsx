"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-blue-700">
          HMI Medical
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === href ? "text-blue-600" : "text-gray-600"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="hidden md:inline-flex">Book Appointment</Button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <Container className="py-4 flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === href ? "text-blue-600" : "text-gray-600"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button className="w-full mt-2">Book Appointment</Button>
          </Container>
        </div>
      )}
    </nav>
  );
}
