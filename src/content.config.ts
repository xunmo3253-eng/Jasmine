import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const promise = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/promise" }),
});

const rules = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/rules" }),
});

export const collections = { promise, rules };