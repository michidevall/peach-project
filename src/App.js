import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationButtons from './NavigationButtons';
import Home from './Home';
import About from './About';
import Artists from './Artists';
import Dates from './Dates';
import Music from './Music';
import Visuals from './Visuals';
import Zine from './Zine';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="artists" element={<Artists />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dates" element={<Dates />} />
        <Route path="music" element={<Music />} />
        <Route path="visuals" element={<Visuals />} />
        <Route path="zine" element={<Zine />} />        
      </Routes>
      <NavigationButtons />
    </Router>
  );
        
}

export default App;