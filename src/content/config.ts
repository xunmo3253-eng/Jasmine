import { defineCollection } from 'astro:content';

export const collections = {
  'promise': defineCollection({ type: 'content' }),
  'rules': defineCollection({ type: 'content' }),
};