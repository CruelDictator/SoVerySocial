import mongoose, { Schema, model, models } from 'mongoose';

export interface IPost {
  _id?: string;
  content: string;
  author: {
    name: string;
    username: string;
    image?: string;
  };
  likes: number;
  comments: number;
  createdAt: Date;
}

const postSchema = new Schema<IPost>({
  content: {
    type: String,
    required: [true, 'Content is required'],
    maxlength: [280, 'Content cannot exceed 280 characters'],
  },
  author: {
    name: {
      type: String,
      required: [true, 'Author name is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Use the existing model if it exists, or create a new one
export const Post = models.Post || model<IPost>('Post', postSchema); 