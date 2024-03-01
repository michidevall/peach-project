import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './images/home-button.png';


const NavigationButtons = () => {
  return (
    <div>
      <Link to="/">
        <img src={homeIcon} alt="Home" style={{width: '50px', height: '50px', }} />
      </Link>
     </div>
  );
};
  export default NavigationButtons;
