import { getAllPosts } from '@/lib/posts';
import Profile from '@/components/home/profile';
import PostCard from '@/components/blog/post-card';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Profile />
      <section className="mt-12">
        <h2 className="text-3xl font-headline font-bold mb-8 text-center">
          Latest Posts
        </h2>
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
