import Link from 'next/link';
import type { Post } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag } from 'lucide-react';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const { slug, title, date, excerpt, tags } = post;

  return (
    <Card className="flex flex-col transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-2 pt-2">
          <Calendar className="h-4 w-4" />
          <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex-wrap gap-2">
        <Tag className="h-4 w-4 text-muted-foreground" />
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" asChild>
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
