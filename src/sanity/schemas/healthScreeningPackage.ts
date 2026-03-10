import { defineType, defineField } from "sanity";

export const healthScreeningPackage = defineType({
  name: "healthScreeningPackage",
  title: "Health Screening Package",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Package Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Price (S$)",
      type: "number",
      validation: (r) => r.required().positive(),
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
