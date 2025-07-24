import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <svg className="header__logo-icon" viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg">
              {/* LinkedIn-style background square */}
              <rect x="0" y="0" width="32" height="32" rx="4" fill="#0a66c2"/>
              
              {/* "out" text in white */}
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">out</text>
            </svg>
            <span className="header__logo-text">LinkedOut</span>
          </div>
          <div className="header__search">
            <div className="header__search-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21.41 18.29l-5.01-5.01c.96-1.06 1.54-2.46 1.54-3.97 0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c1.51 0 2.91-.58 3.97-1.54l5.01 5.01c.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="header__search-input"
            />
          </div>
        </div>
        
        <nav className="header__nav">
          <a href="#" className="header__nav-item header__nav-item--active">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Home</span>
          </a>
          <a href="#" className="header__nav-item">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>My Network</span>
          </a>
          <a href="#" className="header__nav-item">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
            </svg>
            <span>Messaging</span>
          </a>
          <a href="#" className="header__nav-item">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Notifications</span>
          </a>
          <a href="#" className="header__nav-item">
            <div className="header__profile">
              <img 
                src="https://i.pravatar.cc/150?img=9" 
                alt="Profile" 
                className="header__profile-img"
              />
            </div>
            <span>Me</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 