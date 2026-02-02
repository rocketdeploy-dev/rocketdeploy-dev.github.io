import { defineCollection, z } from "astro:content";

const caseStudySchema = z.object({
  title: z.string(),
  summary: z.string(),

  // Optional metadata for grouping & ordering
  category: z.string().optional(),        // e.g. "CMS & Operations"
  featured: z.boolean().optional(),       // true -> Featured section
  priority: z.number().optional(),        // higher -> earlier
  tags: z.array(z.string()).optional(),   // e.g. ["wordpress","woocommerce","api"]

  // Optional links (e.g. deep dive)
  links: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
        kind: z.enum(["deep-dive", "repo", "demo", "cta"]).optional(),
      })
    )
    .optional(),
});

export const collections = {
  "pl-case-studies": defineCollection({ type: "content", schema: caseStudySchema }),
  "en-case-studies": defineCollection({ type: "content", schema: caseStudySchema }),
};