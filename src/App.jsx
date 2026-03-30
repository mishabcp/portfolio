import React from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { LenisContext } from './contexts/LenisContext';
import Layout from './components/Layout';
import Home from './Home';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  const [lenis, setLenis] = React.useState(null);

  React.useEffect(() => {
    const instance = new Lenis({
      lerp: 0.05, // Lower value = smoother, more "weighty" scroll
      wheelMultiplier: 1.1,
      gestureMultiplier: 1,
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    const { pathname, hash } = window.location;
    const isAppRoot = pathname === '/' || pathname === '';
    const preserveHashTarget = isAppRoot && hash.length > 1;
    if (!preserveHashTarget) {
      instance.scrollTo(0, { immediate: true });
    }

    setLenis(instance);

    function raf(time) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      setLenis(null);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="never">
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            </Route>
          </Routes>
        </Router>
      </MotionConfig>
    </LenisContext.Provider>
  );
}

export default App;
