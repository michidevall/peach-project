import React from 'react';
import homeBackground from './images/homeBackground.png';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${homeBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>Home</h1>
        </div>
    );
    };  

export default Home;