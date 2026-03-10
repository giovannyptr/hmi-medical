import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { doctor } from "./src/sanity/schemas/doctor";
import { clinic } from "./src/sanity/schemas/clinic";
import { service } from "./src/sanity/schemas/service";
import { news } from "./src/sanity/schemas/news";
import { healthScreeningPackage } from "./src/sanity/schemas/healthScreeningPackage";

export default defineConfig({
  name: "hmi-medical",
  basePath: "/studio",
  title: "HMI Medical",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("doctor").title("Doctors"),
            S.documentTypeListItem("clinic").title("Clinics"),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("news").title("News"),
            S.documentTypeListItem("healthScreeningPackage").title("Health Screening Packages"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [doctor, clinic, service, news, healthScreeningPackage],
  },
});
