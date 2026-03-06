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
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      description: 'e.g. "Walk-in Only", "By Appointment", "Walk-in & Appointment"',
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),
  ],
});
