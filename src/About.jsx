import React from 'react';
import aboutBackground from './images/aboutBackground.jpg';

const About = () => {
    return (
        <div style={{ backgroundImage: `url(${aboutBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>About Page</h1>
        </div>
    );
    };  

export default About;