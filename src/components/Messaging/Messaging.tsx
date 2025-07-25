import React, { useState } from 'react';
import './Messaging.scss';

const fakeMessages = [
  {
    id: 1,
    sender: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=1',
    text: 'Hey! Have you seen my latest post about certifications? #AlwaysLearning',
    unread: true,
  },
  {
    id: 2,
    sender: 'Michael Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=2',
    text: 'Let me know if you want to join my next webinar on productivity hacks!',
    unread: false,
  },
  {
    id: 3,
    sender: 'Lisa Park',
    avatar: 'https://i.pravatar.cc/150?img=5',
    text: 'We are looking for a rockstar dev. Interested?',
    unread: true,
  },
  {
    id: 4,
    sender: 'Tom Anderson',
    avatar: 'https://i.pravatar.cc/150?img=15',
    text: 'Just closed a $10M deal! Let’s catch up soon.',
    unread: false,
  },
];

const Messaging: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`messaging${open ? ' messaging--open' : ''}`}>  
      <div className="messaging__bar" onClick={() => setOpen((v) => !v)}>
        <svg className="messaging__icon" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
        </svg>
        <span className="messaging__label">Messaging</span>
        <span className="messaging__chevron">{open ? '▼' : '▲'}</span>
      </div>
      {open && (
        <div className="messaging__panel">
          <div className="messaging__header">
            <span>Messaging</span>
            <button className="messaging__close" onClick={() => setOpen(false)} title="Close">×</button>
          </div>
          <div className="messaging__list">
            {fakeMessages.map((msg) => (
              <div key={msg.id} className={`messaging__message${msg.unread ? ' messaging__message--unread' : ''}`}> 
                <img src={msg.avatar} alt={msg.sender} className="messaging__avatar" />
                <div className="messaging__body">
                  <div className="messaging__sender">{msg.sender}</div>
                  <div className="messaging__text">{msg.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Messaging; 