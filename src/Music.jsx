import React from 'react';
import musicBackground from './images/musicBackground.jpeg';

const Music = () => {
    return (
        <div style={{ backgroundImage: `url(${musicBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>Music</h1>
        </div>
    );
    };  

export default Music;