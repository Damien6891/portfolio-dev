import { defineCollection, defineContentConfig } from '@nuxt/content';

import { z } from 'zod';

// Schéma commun pour les projets
const projectSchema = z.object({
  order: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string().optional(),
  date: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  image: z.string().optional(),
  imageCard: z.string().optional(),
  scrollImage: z.string().optional(),
  featured: z.boolean().default(false),
  url: z.string().optional(),
  collaboration: z.boolean().optional().default(false),
  client: z.string().optional(),
  agency: z.string().optional(),
  agencyUrl: z.string().url().optional(),
  role: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    projects_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/projects/**',
        prefix: '/projects',
      },
      schema: projectSchema,
    }),

    projects_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/projects/**',
        prefix: '/projects',
      },
      schema: projectSchema,
    }),
  },
});
