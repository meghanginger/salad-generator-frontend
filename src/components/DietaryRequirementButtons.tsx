import React from 'react';
import dietaryTypes from "../data/dietaryRequirements.json";

const DRButtons = () => {
  return (
    <div>
      {
        dietaryTypes.map(diet => (
          <button>{diet}</button>
        ))
      }
    </div>
  )
}

export default DRButtons;