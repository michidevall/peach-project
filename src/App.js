import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationButtons from './NavigationButtons';
import Home from './Home';
import Artists from './Artists';
import Music from './Music';
import Zine from './Zine';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<Music />} />
        <Route path="zine" element={<Zine />} />        
      </Routes>
      <NavigationButtons />
    </Router>
  );
        
}

export default App;