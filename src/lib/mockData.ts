export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  user: User;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    username: 'janesmith',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    username: 'bobjohnson',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    content: 'Just launched my new website! Check it out at https://example.com',
    createdAt: '2025-05-14T12:00:00Z',
    likes: 15,
    comments: 5,
    user: mockUsers[0],
  },
  {
    id: '2',
    content: 'Beautiful day for a hike! #nature #outdoors',
    createdAt: '2025-05-14T10:30:00Z',
    likes: 24,
    comments: 3,
    user: mockUsers[1],
  },
  {
    id: '3',
    content: 'Working on a new project with React and Next.js. So far loving the developer experience!',
    createdAt: '2025-05-14T09:15:00Z',
    likes: 32,
    comments: 8,
    user: mockUsers[2],
  },
  {
    id: '4',
    content: 'Just finished reading "The Pragmatic Programmer". Highly recommend for all developers!',
    createdAt: '2025-05-13T22:45:00Z',
    likes: 45,
    comments: 12,
    user: mockUsers[0],
  },
  {
    id: '5',
    content: 'Learning TypeScript has been a game changer for my projects. The type safety is worth the learning curve.',
    createdAt: '2025-05-13T20:30:00Z',
    likes: 28,
    comments: 7,
    user: mockUsers[1],
  },
]; 