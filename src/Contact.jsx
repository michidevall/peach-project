import React from 'react';
import contactBackground from './images/contactBackground.jpeg';

const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${contactBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>   
        <h1>Contact</h1>
        </div>
    );
    };  

export default Contact;