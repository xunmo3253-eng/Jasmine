import { defineCollection } from 'astro:content';

const promiseCollection = defineCollection({ type: 'content' });
const rulesCollection = defineCollection({ type: 'content' });

export const collections = {
  'promise': promiseCollection,
  'rules': rulesCollection,
};