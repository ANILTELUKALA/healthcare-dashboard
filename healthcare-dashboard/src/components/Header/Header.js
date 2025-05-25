import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="app-title">Healthcare.</h1>
      </div>
      <div className="header-center">
        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
          />
        </div>
      </div>
      <div className="header-right">
        <span className="notification-icon">🔔</span>
        
      </div>
    </header>
  );
}

export default Header;