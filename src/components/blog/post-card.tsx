import Link from 'next/link';
import type { Post } from '@/types';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const { slug, title, date, excerpt } = post;

  return (
    <article className="group relative flex flex-col space-y-2">
      <h2 className="text-2xl font-headline font-semibold">
        <Link href={`/blog/${slug}`} className="hover:underline">
         <span className="absolute inset-0"></span>
          {title}
        </Link>
      </h2>
      <p className="text-muted-foreground flex-grow">{excerpt}</p>
    </article>
  );
}
