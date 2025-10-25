import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Project3 from '/src/components/Project3.jsx';

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new-page" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App;