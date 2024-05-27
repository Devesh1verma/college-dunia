import React from 'react';
import './Badge.css'; // Import the CSS file

const Badge = () => {
  return (
    <div className="badge">
      <span className="badge-text">Best in Social Life</span>
      <span className="dropdown-arrow">▼</span>
    </div>
  );
};

export default Badge;
