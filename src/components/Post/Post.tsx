import React from 'react';
import { Post as PostType } from '../../types';
import './Post.scss';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const renderContent = (content: string) => {
    // Split content by hashtags and render them with bold styling
    const parts = content.split(/(#\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('#')) {
        return <strong key={index} className="post__hashtag">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <article className="post">
      <div className="post__header">
        <div className="post__author">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="post__author-avatar"
          />
          <div className="post__author-info">
            <h3 className="post__author-name">{post.author.name}</h3>
            <p className="post__author-title">{post.author.title}</p>
            <p className="post__timestamp">{post.timestamp}</p>
          </div>
        </div>
        <button className="post__more-btn">
          <svg viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      <div className="post__content">
        <p className="post__text">{renderContent(post.content)}</p>
        {post.image && (
          <div className="post__image-container">
            <img 
              src={post.image} 
              alt="Post content" 
              className="post__image"
            />
          </div>
        )}
      </div>

      <div className="post__stats">
        <div className="post__likes">
          <div className="post__likes-icons">
            <svg className="post__like-icon post__like-icon--thumbs" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
            </svg>
            <svg className="post__like-icon post__like-icon--heart" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <svg className="post__like-icon post__like-icon--clap" viewBox="0 0 24 24">
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
            </svg>
          </div>
          <span className="post__likes-count">{formatNumber(post.likes)}</span>
        </div>
        <div className="post__comments-shares">
          <span className="post__comments">{post.comments} comments</span>
          <span className="post__shares">{post.shares} shares</span>
        </div>
      </div>

      <div className="post__actions">
        <button className="post__action-btn">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span>Like</span>
        </button>
        <button className="post__action-btn">
          <svg viewBox="0 0 24 24">
            <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          <span>Comment</span>
        </button>
        <button className="post__action-btn">
          <svg viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
          </svg>
          <span>Share</span>
        </button>
        <button className="post__action-btn">
          <svg viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>Send</span>
        </button>
      </div>
    </article>
  );
};

export default Post; 