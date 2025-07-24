import React, { useState, useEffect } from 'react';
import { Header, Feed } from './components';
import { Post } from './types';
import postsData from './data/posts.json';
import './App.scss';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Load posts data
    setPosts(postsData as Post[]);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Feed posts={posts} />
      </main>
    </div>
  );
}

export default App;
