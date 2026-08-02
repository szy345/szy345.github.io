import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // 栏目：与博客规划对应
    category: z.enum(['db-ops', 'ai-db', 'service', 'story']),
    tags: z.array(z.string()).default([]),
    // 是否展示在首页精选
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
