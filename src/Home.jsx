import React from 'react';
import { Link } from 'react-router-dom';
import homeBackground from './images/homeBackground.png';
import artistsIcon from './images/artist-star.png';
import contactIcon from './images/contact-star.png';
import mplogo from './images/mplogo.png';
import musicIcon from './images/music-star.png';
import starIcon from './images/star-icon.png.png';
import youtubeIcon from './images/youtube-icon.png';
import tumblrIcon from './images/tumblr-icon.png';


const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${homeBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw'}}> 
        <img src={mplogo} alt="MP Logo" style={{width: '250px', height: '250px', position: 'relative', top: '30px', left: '600px' }} />  
        <Link to="/music">
        <img src={musicIcon} alt="Music" style={{width: '260px', height: '260px', position:'relative', top:'80px', right: '100px' }} />
      </Link>
      
      <Link to="/artists">
        <img src={artistsIcon} alt="Artists" style={{width: '250px', height: '250px', position:'relative', top:'80px', left: '25px' }} />
        </Link>
      
        <Link to="/contact">
        <img src={contactIcon} alt="Contact" style={{width: '250px', height: '250px', postion: 'relative', top: '00px', right: '100px' }} />
      </Link>
     
      <a href="https://morepeaches.tumblr.com/">
        <img src={tumblrIcon} alt="Tumblr" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
      </a>

      <a href="https://www.youtube.com/channel/UCK8OeNkDAoEtaMB5DyeaTyg">
        <img src={youtubeIcon} alt="Youtube" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
      </a>
      
      <img src={starIcon} alt="Star" style={{width: '250px', height: '250px', position: 'relative', top: '300px', left: '600px' }} />
      
    
        </div>
    );
    };  

export default Home;