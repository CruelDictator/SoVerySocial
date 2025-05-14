import Post from '@/components/Post';
import { mockPosts, Post as PostType } from '@/lib/mockData';

export default function PostFeed() {
  return (
    <div className="space-y-4">
      {mockPosts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
} 