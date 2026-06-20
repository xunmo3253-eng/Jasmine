import { defineCollection, z } from 'astro:content';

const promise = defineCollection({
  type: 'content',
  schema: z.object({}),
});

const rules = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = { promise, rules };