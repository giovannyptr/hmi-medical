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
      description: "Lower number = shown first",
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
