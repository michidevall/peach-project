import React from 'react';
import visualsBackground from './images/visualsBackground.jpeg';

const Visuals = () => {
    return (
        <div style={{ backgroundImage: `url(${visualsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>Visuals</h1>
        </div>
    );
    };  

export default Visuals;