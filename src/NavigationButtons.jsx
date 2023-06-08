import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './images/home-button.png';
import artistsIcon from './images/artist-button.png';
import datesIcon from './images/dates-button.png';
import musicIcon from './images/music-button.png';
import visualsIcon from './images/visuals-button.png';
import zineIcon from './images/zine-button.png';
import aboutIcon from './images/about-button.png';
import contactIcon from './images/contact-button.png';

const NavigationButtons = () => {
  return (
    <div>
      <Link to="/">
        <img src={homeIcon} alt="Home" style={{width: '50px', height: '50px', }} />
      </Link>
      <Link to="/about">
        <img src={aboutIcon} alt="About" style={{width: '50px', height: '50px' }} />
      </Link>
      <Link to="/artists">
        <img src={artistsIcon} alt="Artists" style={{width: '50px', height: '50px' }} />
      </Link>
      <Link to="/contact">
        <img src={contactIcon} alt="Contact" style={{width: '50px', height: '50px' }} />
      </Link>
      <Link to="/dates">
        <img src={datesIcon} alt="Dates" style={{width: '50px', height: '50px' }} />
      </Link>
      <Link to="/music">
        <img src={musicIcon} alt="Music" style={{width: '50px', height: '50px' }} />
      </Link>
      <Link to="/visuals">
        <img src={visualsIcon} alt="Visuals" style={{width: '50px', height: '50px' }} />
      </Link>
      <Link to="/zine">
        <img src={zineIcon} alt="Zine" style={{width: '50px', height: '50px' }} />
      </Link>
      
    </div>
  );
};

export default NavigationButtons;
