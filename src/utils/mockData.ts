import { IPost } from '../models/Post';

export const mockPosts: IPost[] = [
  {
    content: "Just launched SoVerySocial! This platform is going to change how we connect online. #SocialMedia #Launch",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    likes: 42,
    comments: 7,
    createdAt: new Date(Date.now() - 1000 * 60 * 10) // 10 minutes ago
  },
  {
    content: "Working on some exciting new features for our users. Can't wait to share what we've been building! #Development #Innovation",
    author: {
      name: "John Doe",
      username: "johndoe",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    likes: 23,
    comments: 3,
    createdAt: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
  },
  {
    content: "Beautiful day for coding outside! #DeveloperLife #Coding #Spring",
    author: {
      name: "Alex Chen",
      username: "alexc",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    likes: 15,
    comments: 1,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3) // 3 hours ago
  },
  {
    content: "Just pushed a major update to our backend. Improved performance by 40%! #TechNews #Performance",
    author: {
      name: "Mike Johnson",
      username: "mikej",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    likes: 31,
    comments: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6) // 6 hours ago
  },
  {
    content: "Thoughts on the latest web development trends? I think serverless is the future. #WebDev #Serverless",
    author: {
      name: "Sarah Williams",
      username: "sarahw",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    likes: 19,
    comments: 8,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12) // 12 hours ago
  }
]; 