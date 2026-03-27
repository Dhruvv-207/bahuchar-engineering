import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      position: 'relative', 
      minHeight: 'clamp(500px, 100vh, 1000px)', 
      display: 'flex', 
      alignItems: 'center',
      padding: '0 5%',
      overflow: 'hidden',
      backgroundColor: 'var(--ivory-white)'
    }}>
      <div style={{ 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        width: 'clamp(30%, 50%, 60%)', 
        height: '100%', 
        background: 'url(/assets/images/indian_workshop_interior.png) center/cover no-repeat',
        opacity: 0.15 
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', width: '100%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: 'clamp(20px, 4vw, 40px)' }}
        >
          <img src="/assets/images/logo.png" alt="Bahuchar Logo" style={{ height: 'clamp(40px, 6vw, 80px)', width: 'auto' }} />
          <div>
            <span className="mono" style={{ fontSize: 'clamp(0.6rem, 1vw, 0.8rem)' }}>ESTABLISHED PRECISION</span>
            <div style={{ width: 'clamp(40px, 8vw, 100px)', height: '1px', background: 'var(--industrial-ochre)', marginTop: '4px' }} />
          </div>
        </motion.div>

        <motion.h1 style={{ marginBottom: '0.5em' }}>
          STABILITY FOR <br />
          <span style={{ color: 'var(--industrial-ochre)' }}>INDUSTRY.</span>
        </motion.h1>

        <motion.p 
          style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', 
            color: 'var(--iron-grey)', 
            maxWidth: '550px', 
            marginTop: '20px' 
          }}
        >
          Heavy-duty fabrication of high-precision machine bases. Zero-vibration engineering for industrial lasers and molding systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ marginTop: '48px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}
        >
          <a href="#contact" className="btn-industrial">
            Request Quote <ChevronRight size={20} />
          </a>
          
          <div className="frosted-steel" style={{ 
            padding: '12px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            fontSize: '0.9rem',
            fontWeight: 600
          }}>
            <ShieldCheck size={20} color="var(--industrial-ochre)" />
            ISO 9001:2015 CERTIFIED
          </div>
        </motion.div>
      </div>

      {/* Floating Precision Decoration */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ 
          position: 'absolute', 
          right: '-5%', 
          top: '10%', 
          fontSize: '15rem', 
          opacity: 0.03,
          fontWeight: 900,
          pointerEvents: 'none'
        }}
      >
        BAHUCHAR
      </motion.div>
    </section>
  );
};

export default Hero;
