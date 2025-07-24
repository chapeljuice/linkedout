export interface Author {
  name: string;
  title: string;
  avatar: string;
  company: string;
}

export interface Post {
  id: number;
  author: Author;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  image: string | null;
} 