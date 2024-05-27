import React from 'react';
import './BadgeH.css'; // Import the CSS file

const BadgeH = () => {
  return (
    <div className="badge-container" style={{ borderLeft: '5px solid #007BFF'}}>
      <div className="badge-header">
        <span className="badge-title">THE WEEK 2023</span>
      </div>
      <div className="badge-body">
        <img src="path/to/icon1.png" alt="Icon 1" className="badge-icon" />
        <img src="path/to/icon2.png" alt="Icon 2" className="badge-icon" />
        <img src="path/to/icon3.png" alt="Icon 3" className="badge-icon" />
        <span className="badge-more">+ 9 More</span>
        <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

export default BadgeH;
