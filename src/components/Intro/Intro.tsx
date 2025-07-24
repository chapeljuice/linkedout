import React from 'react';
import './Intro.scss';

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <h1 className="intro__title">Welcome to LinkedOut</h1>
        <p className="intro__subtitle">A satirical take on LinkedIn culture</p>
        
        <div className="intro__content">
          <p className="intro__description">
            This is a humorous parody of LinkedIn that highlights the platform's tendency to reward performative success stories, 
            corporate speak, and toxic hustle culture while often ignoring authentic human experiences.
          </p>
          
          <div className="intro__features">
            <div className="intro__feature">
              <span className="intro__feature-icon">🎭</span>
              <span>Satirical posts that parody typical LinkedIn content</span>
            </div>
            <div className="intro__feature">
              <span className="intro__feature-icon">📊</span>
              <span>Notice the engagement disparity between "winning" and authentic posts</span>
            </div>
            <div className="intro__feature">
              <span className="intro__feature-icon">💡</span>
              <span>Commentary on LinkedIn's culture of toxic positivity</span>
            </div>
          </div>
          
          <div className="intro__cta">
            <p className="intro__cta-text">
              Feel free to share any of these posts to LinkedIn or send us ideas of new posts to add!
            </p>
            <div className="intro__cta-buttons">
              <button className="intro__cta-btn intro__cta-btn--primary">
                Share on LinkedIn
              </button>
              <button className="intro__cta-btn intro__cta-btn--secondary">
                Suggest New Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro; 