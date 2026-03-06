import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { hero } from "./src/sanity/schemas/hero";
import { doctor } from "./src/sanity/schemas/doctor";
import { service } from "./src/sanity/schemas/service";
import { news } from "./src/sanity/schemas/news";

export default defineConfig({
  name: "hmi-medical",
  title: "HMI Medical",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [hero, doctor, service, news],
  },
});
