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
        opacity: 0.4 
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', width: '100%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 'clamp(30px, 6vw, 60px)' }}
        >
          <img src="/assets/images/logo.png" alt="Bahuchar Logo" style={{ height: 'clamp(80px, 12vw, 140px)', width: 'auto' }} />
          <div style={{ borderLeft: '3px solid var(--industrial-ochre)', paddingLeft: '30px' }}>
             <h3 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.8rem)', margin: 0, color: 'var(--slate-text)', lineHeight: 0.95, fontWeight: 900 }}>BAHUCHAR<br /><span style={{ color: 'var(--industrial-ochre)', fontSize: '0.8em' }}>ENGINEERING</span></h3>
             <span className="mono" style={{ fontSize: '0.9rem', marginTop: '12px', display: 'block', fontWeight: 700 }}>ESTABLISHED PRECISION</span>
          </div>
        </motion.div>

        <motion.h1 style={{ marginBottom: '0.4em', fontSize: 'clamp(2.0rem, 5vw, 4.0  rem)' }}>
          STABILITY FOR <br />
          <span style={{ color: 'var(--industrial-ochre)' }}>INDUSTRY.</span>
        </motion.h1>

        <motion.p 
          style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', 
            color: 'var(--iron-grey)', 
            maxWidth: '650px', 
            marginTop: '20px',
            lineHeight: 1.6
          }}
        >
          We provide reliable and high-quality fabrication and machining solutions for industrial applications. With a well-equipped workshop and experienced manpower, we deliver precision and durability in every project.<br /><br />
          <span style={{ color: 'var(--industrial-ochre)', fontWeight: 600 }}>👉 Your Trusted Partner in Fabrication & Machining</span>
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
          
          {/* <div className="frosted-steel" style={{ 
            padding: '12px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            fontSize: '0.9rem',
            fontWeight: 600
          }}>
            <ShieldCheck size={20} color="var(--industrial-ochre)" />
            ISO 9001:2015 CERTIFIED
          </div> */}
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
