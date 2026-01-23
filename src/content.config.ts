import { defineCollection, z } from "astro:content";

const caseStudySchema = z.object({
  title: z.string(),
  summary: z.string(),
});

export const collections = {
  "pl-case-studies": defineCollection({ type: "content", schema: caseStudySchema }),
  "en-case-studies": defineCollection({ type: "content", schema: caseStudySchema }),
};