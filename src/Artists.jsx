import React from 'react';
import artistsBackground from './images/artistsBackground.jpg';

const Artists = () => {
    return (
        <div style={{ backgroundImage: `url(${artistsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>  
        <h1>Artists</h1>
        </div>
    );
    };  

export default Artists;