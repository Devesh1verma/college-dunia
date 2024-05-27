import React from 'react';
import { FaArrowRight, FaDownload, FaExchangeAlt } from 'react-icons/fa';
import './CollegeRow.css';
import Badge from './Badge';
import BadgeH from './BadgeH';
import YearGenerator from './Year';
import Ribbon from './Ribbon';



const CollegeRow = React.forwardRef(({ college, rank, onMouseEnter, onMouseLeave }, ref) => {
  const randomReviews = Math.floor(Math.random() * 100) + 1;
  const randomRev = Math.floor(Math.random() * 1000) + 100;
  const doublePlacement = college.placement * 2;
  
  return (
    <tr
      ref={ref}
      className={`college-row ${college.featured ? 'featured' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <td><strong>#{rank}</strong></td>
      <td>
        <div className="college-info">
        <Ribbon/>
          <div className="college-name-logo">
            <img src={college.logo} alt={`${college.name} logo`} className="college-logo" />
            <div style={{ paddingBottom: '5px', fontSize: '20px' }}>
              <strong>{college.name} - {college.location}</strong>
            </div>
          </div>
          <div style={{ backgroundColor: '#ffd447', paddingLeft: '2px', width: '80%', borderLeft: '5px solid rgb(255, 165, 0)', paddingTop: '1px', paddingBottom: '2px' }}>
            <span style={{ color: 'black' }}>B.Tech Computer Science Engineering<br />JEE-Advanced 2023 Cut-off: {randomRev} </span>
          </div>
          <div className="actions">
            <button className="apply-now"><FaArrowRight /> Apply Now</button>
            <button className="download-brochure" style={{color: 'rgb(0, 198, 116)'}}><FaDownload /> Download Brochure</button>
            <div className="compare-checkbox">
              <input type="checkbox" id={`compare-${rank}`} />
              <label htmlFor={`compare-${rank}`}>Add to compare</label>
            </div>
          </div>
        </div>
      </td>
      <td style={{ color: 'rgb(0, 198, 116)' }}>
        <strong>₹{college.fees.toLocaleString()} </strong><br />
        <div style={{ padding: '5px', color: 'black' }}>BE/B.Tech <br />- 1st Year Fees</div>
        <strong><div className="compare-info"><FaExchangeAlt /> Compare Fees</div></strong>
      </td>
      <td style={{ color: 'rgb(0, 198, 116)' }}>
        <strong>₹{college.placement.toLocaleString()}</strong><br />
        <span style={{ padding: '5px', color: 'black' }}>Average Package</span><br />
        <strong>₹{doublePlacement.toLocaleString()}</strong><br />
        <span style={{ padding: '5px', color: 'black' }}>Highest Package</span>
        <div className="compare-info"><FaExchangeAlt /> <strong>Compare Placement</strong></div>
      </td>
      <td>
        <div className="orange-circle"></div> {/* Orange round filled circle */}
        {college.reviews}/10
        <div>Based on {randomReviews} users<br />Reviews</div><Badge/>
      </td>
      <td>#{college.ranking}/<span style={{ color: 'lightblue' }}>{randomRev}</span> in India<YearGenerator/><BadgeH/></td>
    </tr>
  );
});

export default CollegeRow;
