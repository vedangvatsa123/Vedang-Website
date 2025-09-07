import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { Badge } from '@/components/ui/badge';
import { Calendar, UserCircle } from 'lucide-react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl mx-auto py-12 px-4">
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            <span>Vedang Vatsa</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none text-lg">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
