import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/header/TopBar";
import Navbar from "@/components/header/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HMI Medical",
  description: "Expert medical care delivered with compassion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-gray-900`}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
