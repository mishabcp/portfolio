import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import PreviewHub from './previews/PreviewHub';
import MinimalPreview from './previews/MinimalPreview';
import TechPreview from './previews/TechPreview';
import CreativePreview from './previews/CreativePreview';
import CorporatePreview from './previews/CorporatePreview';
import GlassmorphismPreview from './previews/GlassmorphismPreview';
import BrutalistPreview from './previews/BrutalistPreview';
import RetroPreview from './previews/RetroPreview';
import Mix1 from './previews/Mix1';
import Mix2 from './previews/Mix2';
import Mix3 from './previews/Mix3';
import Mix4 from './previews/Mix4';
import Mix5 from './previews/Mix5';
import DarkMix1 from './previews/DarkMix1';
import DarkMix2 from './previews/DarkMix2';
import DarkMix3 from './previews/DarkMix3';
import DarkMix4 from './previews/DarkMix4';
import AbhayInspiredPreview from './previews/AbhayInspiredPreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/preview" element={<PreviewHub />} />
        <Route path="/preview/minimal" element={<MinimalPreview />} />
        <Route path="/preview/tech" element={<TechPreview />} />
        <Route path="/preview/creative" element={<CreativePreview />} />
        <Route path="/preview/corporate" element={<CorporatePreview />} />
        <Route path="/preview/glass" element={<GlassmorphismPreview />} />
        <Route path="/preview/brutalist" element={<BrutalistPreview />} />
        <Route path="/preview/retro" element={<RetroPreview />} />
        <Route path="/preview/mix1" element={<Mix1 />} />
        <Route path="/preview/mix2" element={<Mix2 />} />
        <Route path="/preview/mix3" element={<Mix3 />} />
        <Route path="/preview/mix4" element={<Mix4 />} />
        <Route path="/preview/mix5" element={<Mix5 />} />
        <Route path="/preview/dark1" element={<DarkMix1 />} />
        <Route path="/preview/dark2" element={<DarkMix2 />} />
        <Route path="/preview/dark3" element={<DarkMix3 />} />
        <Route path="/preview/dark4" element={<DarkMix4 />} />
        <Route path="/preview/abhay" element={<AbhayInspiredPreview />} />
      </Routes>
    </Router>
  );
}

export default App;