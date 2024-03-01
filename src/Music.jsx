import React from 'react';
// import { Link } from 'react-router-dom';
import musicBackground from './images/musicBackground.png';
import soundcloudIcon from './images/soundcloud.png';
import bandcampIcon from './images/bandcamp-icon.png';


const Music = () => {
    return (
        <div style={{ backgroundImage: `url(${musicBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>Music</h1>
        <a href="https://soundcloud.com/morepeaches">
            <img src={soundcloudIcon} alt="Soundcloud" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
        </a>
        <a href="https://morepeaches.bandcamp.com/">
            <img src={bandcampIcon} alt="Bandcamp" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
        </a>
        </div>
    );
    };  

export default Music;