import { getAllPosts } from '@/lib/posts';
import Profile from '@/components/home/profile';
import PostCard from '@/components/blog/post-card';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <Profile />
      <section className="mt-16">
        <div className="grid gap-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
