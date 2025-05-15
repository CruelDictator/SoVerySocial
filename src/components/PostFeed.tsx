"use client";

import Post from '@/components/Post';
import { IPost } from '@/models/Post';
import { useEffect, useState } from 'react';
import { mockPosts } from '@/utils/mockData';

export default function PostFeed() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Using mock data instead.');
        // Fallback to mock data if API fails
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full"></div>
              <div className="flex-1 space-y-3">
                <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                <div className="h-3 bg-gray-400 rounded"></div>
                <div className="h-3 bg-gray-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error && posts.length === 0) {
    return <div className="text-red-500 bg-white p-4 rounded-lg shadow">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post._id || Math.random().toString()} post={post} />
      ))}
    </div>
  );
} 