import React, { useState, useEffect } from 'react';
import './Intro.scss';

const Intro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro before
    const hasSeenIntro = localStorage.getItem('hasSeenLinkedOutIntro');
    if (!hasSeenIntro) {
      setIsVisible(true);
      localStorage.setItem('hasSeenLinkedOutIntro', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleShowIntro = () => {
    setIsVisible(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {/* Floating Show Intro Button */}
      <button className="intro-toggle" onClick={handleShowIntro}>
        <span className="intro-toggle__text">Show Intro</span>
        <span className="intro-toggle__icon">ℹ️</span>
      </button>

      {/* Modal */}
      {isVisible && (
        <div className="intro-modal" onClick={handleBackdropClick}>
          <div className="intro-modal__content">
            <button className="intro-modal__close" onClick={handleClose}>
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className="intro-modal__container">
              <h1 className="intro-modal__title">Welcome to LinkedOut!</h1>
              <p className="intro-modal__subtitle">(A satirical take on LinkedIn culture)</p>
              
              <div className="intro-modal__content">
                <p className="intro-modal__description">
                  This is a parody of LinkedIn that highlights the platform's tendency to reward performative success stories, 
                  corporate speak, and toxic hustle culture while often ignoring authentic human experiences.
                </p>
                
                <div className="intro-modal__features">
                    <h3>Featuring:</h3>
                  <div className="intro-modal__feature">
                    <span className="intro-modal__feature-icon">🎭</span>
                    <span>Satirical posts that parody typical LinkedIn content</span>
                  </div>
                  <div className="intro-modal__feature">
                    <span className="intro-modal__feature-icon">📊</span>
                    <span>An engagement disparity between "#winning" posts and more emotional, authentic posts</span>
                  </div>
                  <div className="intro-modal__feature">
                    <span className="intro-modal__feature-icon">💡</span>
                    <span>Commentary on LinkedIn's culture of toxic positivity and the need for more authentic, human-centered content</span>
                  </div>
                </div>
                
                <div className="intro-modal__cta">
                  <p className="intro-modal__cta-text">
                    Feel free to share any of these posts to LinkedIn or send us ideas of new posts to add!
                  </p>
                  <div className="intro-modal__cta-buttons">
                    <button className="intro-modal__cta-btn intro-modal__cta-btn--primary">
                      Share on LinkedIn
                    </button>
                    <button className="intro-modal__cta-btn intro-modal__cta-btn--secondary">
                      Suggest New Posts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Intro; 