import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const specialties = [
  {
    title: "Bones, Muscles & Joints",
    description: "Treating sports injuries, age-related muscle and bone conditions.",
    image: "/images/icon-medical/bone.png",
    href: "/services/bones-muscles-joints",
  },
  {
    title: "Colon Health",
    description: "Offering minimally-invasive procedures for colorectal issues.",
    image: "/images/icon-medical/colon.png",
    href: "/services/colon-health",
  },
  {
    title: "Digestive System",
    description: "Adept at treating different cases with minimally invasive techniques.",
    image: "/images/icon-medical/stomach.png",
    href: "/services/digestive-system",
  },
  {
    title: "Ear, Nose & Throat",
    description: "Receive care for ear, nose, throat, head & neck conditions.",
    image: "/images/icon-medical/ear-nose-throat.png",
    href: "/services/ear-nose-throat",
  },
  {
    title: "Endoscopy",
    description: "Providing a range of diagnostic and endoscopic procedures.",
    image: "/images/icon-medical/endoscopy.png",
    href: "/services/endoscopy",
  },
  {
    title: "General Surgery",
    description: "Providing minimally-invasive procedures for speedy recovery.",
    image: "/images/icon-medical/general-surgery.png",
    href: "/services/general-surgery",
  },
  {
    title: "Heart",
    description: "Treating heart diseases, along with cardiovascular risk factors.",
    image: "/images/icon-medical/heart.png",
    href: "/services/heart",
  },
  {
    title: "Infant & Children's Health",
    description: "Catering to the needs and health of your babies and children.",
    image: "/images/icon-medical/children-health.png",
    href: "/services/infant-children-health",
  },
  {
    title: "Radiology",
    description: "Offering same-day consultations and imaging tests in the same area.",
    image: "/images/icon-medical/radiology.png",
    href: "/services/radiology",
  },
  {
    title: "Respiratory",
    description: "Offering medical care relating to the airways and lungs.",
    image: "/images/icon-medical/respiratory.png",
    href: "/services/respiratory",
  },
  {
    title: "Skin Health",
    description: "Providing treatment for various skin and cosmetic concerns.",
    image: "/images/icon-medical/skin.png",
    href: "/services/skin-health",
  },
  {
    title: "Sleep Medicine",
    description: "Providing care and treatment for a wide spectrum of sleep disorders.",
    image: "/images/icon-medical/sleep-medicine.png",
    href: "/services/sleep-medicine",
  },
];

export default function MedicalSpecialtiesSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-12 max-w-lg">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            Medical Specialties
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We prioritise reducing healthcare hassles – from department
            transitions to staff knowing your name.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map(({ title, description, image, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
            >
              {/* Circle image */}
              <div className="relative w-20 h-20 rounded-full bg-blue-50 overflow-hidden shrink-0">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
