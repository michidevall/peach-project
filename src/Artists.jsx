import React from 'react';
import artistsBackground from './images/artistsBackground.png';
import docIcon from './images/doc-icon.png';
import rinneIcon from './images/rinne-icon.png';
import marissaIcon from './images/marissa-icon.png';
import zanderIcon from './images/zander-icon.png';

const Artists = () => {
    return (
        <div style={{ backgroundImage: `url(${artistsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}>

        <a href="https://www.instagram.com/itdocx/">
            <img src={docIcon} alt="Docx" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
        </a>
        <a href="https://www.instagram.com/__livmas__/">
            <img src={marissaIcon} alt="Marissa" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
        </a>
        <a href="https://www.instagram.com/ironhox/">
            <img src={rinneIcon} alt="Rinne" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
        </a><a href="https://www.instagram.com/boys.panting/">
            <img src={zanderIcon} alt="Zander" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
        </a> 



    
        <h1>Artists</h1>
        </div>
    );
    };  

export default Artists;