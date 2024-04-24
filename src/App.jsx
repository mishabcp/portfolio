import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import Particle from '/src/assets/Particle.jsx'; // Import Particle component
import Home from './Home.jsx';
import Project3 from '/src/components/Project3.jsx'; // Import the new page component

function App() {
  return (
    <Router basename="/portfolio">
      <Particle /> {/* Include Particle component */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new-page" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App;
