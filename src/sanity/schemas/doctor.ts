import { defineType, defineField } from "sanity";

export const doctor = defineType({
  name: "doctor",
  title: "Doctor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "specialty",
      title: "Specialty",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "clinic",
      title: "Clinic / Location",
      type: "string",
      description: "Comma-separated if multiple, e.g. HMI OneCare Clinic Tampines MRT, HMI OneCare Clinic Tiong Bahru",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      description: 'e.g. "Walk-in Only", "By Appointment", "Walk-in & Appointment"',
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "string",
      description: "Comma-separated, e.g. In-Person, Health screening, Healthier SG",
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "string",
      description: "Comma-separated, e.g. English, Mandarin",
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. MBBS (London), GDFM (Singapore)",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),
  ],
});
