import type { Post } from '@/types';

const posts: Post[] = [
  {
    slug: 'embracing-minimalism',
    title: 'Embracing Minimalism in Web Design',
    date: '2024-07-21',
    excerpt: 'Discover how stripping back the non-essentials can lead to more effective and beautiful websites.',
    content: `Minimalism isn't just an aesthetic; it's a philosophy. In web design, it translates to faster load times, easier navigation, and a focus on what truly matters: the content. By removing visual clutter, we guide the user's attention and create a more serene and impactful experience. This post explores the core principles of minimalist design, from ample white space to purposeful typography, and showcases examples of websites that do it right.`,
    tags: ['design', 'webdev', 'ui/ux'],
  },
  {
    slug: 'the-power-of-server-components',
    title: 'The Power of React Server Components',
    date: '2024-07-15',
    excerpt: 'A deep dive into how React Server Components are changing the game for performance and developer experience.',
    content: `React Server Components (RSCs) represent a paradigm shift in how we build React applications. By moving component rendering to the server, we can significantly reduce the amount of JavaScript shipped to the client. This results in faster initial page loads and a snappier user experience. We'll explore the mental model behind RSCs, how they interact with Client Components, and practical tips for adopting them in your Next.js projects.`,
    tags: ['react', 'nextjs', 'performance'],
  },
  {
    slug: 'a-guide-to-css-variables',
    title: 'A Practical Guide to Modern CSS with Variables',
    date: '2024-06-30',
    excerpt: 'Unlock the full potential of your stylesheets with CSS Custom Properties, also known as CSS Variables.',
    content: `Forget the limitations of preprocessors. CSS Custom Properties (or variables) bring the power of dynamic variables directly into your CSS. They are fantastic for theming, responsive design, and reducing repetition in your code. This guide will walk you through the syntax, scoping rules, and advanced techniques like using them with JavaScript to create highly interactive and maintainable user interfaces.`,
    tags: ['css', 'webdev', 'frontend'],
  },
  {
    slug: 'building-accessible-components',
    title: 'Building Accessible Components from the Ground Up',
    date: '2024-06-12',
    excerpt: 'Accessibility is not an afterthought. Learn how to create inclusive web components that work for everyone.',
    content: `Web accessibility (a11y) is a fundamental aspect of responsible web development. Building accessible components means ensuring that people with disabilities can perceive, understand, navigate, and interact with your website. We'll cover key concepts like semantic HTML, ARIA attributes, keyboard navigation, and color contrast. By the end of this post, you'll have a practical checklist for making your components more inclusive.`,
    tags: ['accessibility', 'ui/ux', 'html'],
  },
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagCounts = posts
    .flatMap((post) => post.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): Post[] {
    return getAllPosts().filter(post => post.tags.includes(tag));
}
