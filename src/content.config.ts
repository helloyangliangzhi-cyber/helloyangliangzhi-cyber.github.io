import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cases = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    service: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    industry: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    color: z.string().default("#d9d9d4"),
    category: z.enum(["brand-strategy", "content-editorial", "creative-experience"]),
    tags: z.array(z.string()).min(1).max(3),
  }),
});

export const collections = { cases };
