import { defineCollection, z } from 'astro:content';

const rules = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = { 
  'rules': rules 
};