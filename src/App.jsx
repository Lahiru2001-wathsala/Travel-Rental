// ===== APP COMPONENT =====
// Main router setup with all pages and shared layout

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: '150px 24px', textAlign: 'center', minHeight: '60vh' }}>
              <h1 style={{ fontFamily: 'Instrument Serif, ui-serif, Georgia, Times New Roman, serif', fontSize: '4rem', color: '#0b1020', marginBottom: '16px', letterSpacing: '-0.03em' }}>404</h1>
              <p style={{ color: 'rgba(11,16,32,0.6)', marginBottom: '24px' }}>This page doesn't exist.</p>
              <a href="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Go Home
              </a>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
