import React from 'react';
import zineBackground from './images/zineBackground.jpeg';

const Zine = () => {
    return (
        <div style={{ backgroundImage: `url(${zineBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>Zine</h1>
        </div>
    );
    };  

export default Zine;