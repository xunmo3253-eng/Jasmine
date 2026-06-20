import { defineCollection, z } from 'astro:content';

const promise = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const rules = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { promise, rules };