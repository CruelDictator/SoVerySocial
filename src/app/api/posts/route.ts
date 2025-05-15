import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { Post, IPost } from '@/models/Post';
import { mockPosts } from '@/utils/mockData';

// Initialize the database with mock data if it's empty
async function initializeDatabase() {
  try {
    const count = await Post.countDocuments();
    if (count === 0) {
      await Post.insertMany(mockPosts);
      console.log('Database initialized with mock data');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    
    // Initialize with mock data if needed
    await initializeDatabase();
    
    // Fetch posts from the database
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
} 