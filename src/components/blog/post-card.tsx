import Link from 'next/link';
import type { Post } from '@/types';
import { Badge } from '@/components/ui/badge';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const { slug, title, date, excerpt, tags } = post;

  return (
    <article className="group relative flex flex-col space-y-2">
       <span className="text-sm text-muted-foreground">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      <h2 className="text-2xl font-headline font-semibold">
        <Link href={`/blog/${slug}`} className="hover:underline">
         <span className="absolute inset-0"></span>
          {title}
        </Link>
      </h2>
      <p className="text-muted-foreground flex-grow">{excerpt}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
