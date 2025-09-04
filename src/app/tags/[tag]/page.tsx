import { notFound } from 'next/navigation';
import { getAllTags, getPostsByTag } from '@/lib/posts';
import PostCard from '@/components/blog/post-card';
import { Tag } from 'lucide-react';

type TagPageProps = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((t) => ({
    tag: t.tag,
  }));
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const posts = getPostsByTag(decodeURIComponent(tag));

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <h1 className="font-headline text-4xl font-bold mb-8 flex items-center gap-3">
        <Tag className="h-8 w-8" />
        Posts tagged with "{decodeURIComponent(tag)}"
      </h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
