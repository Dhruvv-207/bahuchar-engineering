import React from 'react';
import './styles/global.css';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Capacity from './components/sections/Capacity';
import Gallery from './components/sections/Gallery';
import VideoStage from './components/sections/VideoStage';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="app-container">
      {/* Navbar (Internal Component) */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        padding: 'clamp(10px, 2vw, 20px) 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        zIndex: 1000,
        backgroundColor: 'rgba(253, 251, 247, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--steel-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 15px)' }}>
          <img src="/assets/images/logo.png" alt="Bahuchar Logo" style={{ height: 'clamp(30px, 4vw, 40px)', width: 'auto' }} />
          <div style={{ fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--slate-text)', display: 'block' }}>BAHUCHAR</span>
            <span style={{ fontSize: 'clamp(0.5rem, 1vw, 0.6rem)', color: 'var(--industrial-ochre)', display: 'block' }}>ENGINEERING</span>
          </div>
        </div>
        <div>
          <a href="#contact" className="btn-industrial" style={{ padding: '8px 15px', fontSize: '0.75rem' }}>GET QUOTE</a>
        </div>
      </nav>

      <main style={{ paddingTop: 'clamp(60px, 10vw, 80px)' }}>
        <Hero />
        <Services />
        <Capacity />
        <Gallery />
        <VideoStage />
        <Contact />
      </main>

      <footer className="section-padding" style={{ backgroundColor: 'var(--slate-text)', color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px' }}>
               <img src="/assets/images/logo.png" alt="Bahuchar Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
               <h2 style={{ fontSize: '1.5rem', margin: 0 }}>BAHUCHAR ENGINEERING</h2>
            </div>
            <p style={{ opacity: 0.6, maxWidth: '300px' }}>The foundation of industrial excellence. Built with precision, engineered for scale.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap' }}>
            <div>
              <h4 className="mono" style={{ marginBottom: '20px', color: 'var(--industrial-ochre)' }}>Sections</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.8 }}>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Hero</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Process</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mono" style={{ marginBottom: '20px', color: 'var(--industrial-ochre)' }}>Legal</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.8 }}>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Certification ISO</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={{ maxWidth: '1400px', margin: '60px auto 0', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', opacity: 0.4 }}>
          <span>© 2026 Bahuchar Engineering. All rights reserved.</span>
          <span>Made with Precision.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
