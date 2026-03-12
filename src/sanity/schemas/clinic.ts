import { defineType, defineField, defineArrayMember } from "sanity";

export const clinic = defineType({
  name: "clinic",
  title: "Clinic",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Clinic Type",
      type: "string",
      options: {
        list: [
          { title: "Specialist Centre", value: "Specialist Centre" },
          { title: "GP Clinic", value: "GP Clinic" },
          { title: "Health Screening", value: "Health Screening" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "name",
      title: "Clinic Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "e.g. +65 9655 2101",
    }),
    defineField({
      name: "generalEmail",
      title: "General Enquiries Email",
      type: "string",
    }),
    defineField({
      name: "feedbackEmail",
      title: "Feedback Email",
      type: "string",
    }),
    defineField({
      name: "mapsEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "The full src URL from a Google Maps embed iframe",
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "openingHourEntry",
          fields: [
            defineField({ name: "days", title: "Days", type: "string" }),
            defineField({ name: "hours", title: "Hours", type: "string" }),
          ],
          preview: {
            select: { title: "days", subtitle: "hours" },
          },
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first. Set to 1 for the main clinic.",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
