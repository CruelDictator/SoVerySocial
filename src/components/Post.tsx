"use client";

import { IPost } from '@/models/Post';
import Image from 'next/image';

interface PostProps {
  post: IPost;
}

export default function Post({ post }: PostProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-secondary">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 h-10 w-10 relative">
          <Image
            className="rounded-full"
            src={post.author.image || 'https://i.pravatar.cc/150?img=1'}
            alt={post.author.name}
            fill
            sizes="40px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1">
            <p className="font-medium text-text truncate">{post.author.name}</p>
            <span className="text-gray-500 text-sm">@{post.author.username}</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-500 text-sm">{formatDate(post.createdAt)}</span>
          </div>
          <p className="mt-1 text-text">{post.content}</p>
          <div className="mt-3 flex items-center space-x-8 text-gray-500 text-sm">
            <button className="flex items-center space-x-1 hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-pink-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{post.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 