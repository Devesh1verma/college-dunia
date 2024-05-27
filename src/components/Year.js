import React from 'react';

class RandomYearGenerator extends React.Component {
  generateRandomYear = () => {
    const startYear = 2018;
    const endYear = 2024;
    // Generate a random number between 0 and the number of years
    const randomOffset = Math.floor(Math.random() * (endYear - startYear + 1));
    // Add the random offset to the start year to get a random year within the range
    const randomYear = startYear + randomOffset;
    return randomYear;
  };

  render() {
    const randomYear = this.generateRandomYear();
    return (
      <div style={{padding:'-3px'}}>
       
        <p>{randomYear}</p>
      </div>
    );
  }
}

export default RandomYearGenerator;
