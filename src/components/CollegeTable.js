import React, { useRef, useCallback, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CollegeRow from './CollegeRow';
import './CollegeTable.css';

const CollegeTable = ({ colleges, loadMore, hasMore }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView && hasMore) {
        loadMore();
      }
    },
  });

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className="table-container">
      <table className="college-table">
        <thead>
          <tr>
            <th>CD Rank</th>
            <th>Colleges</th>
            <th>Course Fees</th>
            <th>Placement</th>
            <th>User Reviews</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <CollegeRow
              key={college.name}
              college={college}
              rank={index + 1}
              ref={index === colleges.length - 1 ? ref : null}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`
                ${index === hoveredRow ? 'highlight' : ''}
                ${index === hoveredRow - 1 || index === hoveredRow + 1 ? 'highlight-adjacent' : ''}
              `}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
