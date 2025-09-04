import Link from 'next/link';
import { getAllTags } from '@/lib/posts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-2">
            <Tag className="h-6 w-6" />
            All Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {tags.map(({ tag, count }) => (
              <Badge key={tag} variant="secondary" className="text-lg p-2" asChild>
                <Link href={`/tags/${tag}`}>
                  {tag} ({count})
                </Link>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
