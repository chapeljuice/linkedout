import React from 'react';
import Post from '../Post/Post';
import { Post as PostType } from '../../types';
import './Feed.scss';

interface FeedProps {
  posts: PostType[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="feed">
      <div className="feed__container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed; 