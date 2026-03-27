import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    id: "01", 
    title: "CAD & Structural Design", 
    desc: "Detailed finite element analysis to ensure the machine base can handle dynamic vibrational loads.",
    img: "/assets/images/indian_technicians_plan.png"
  },
  { 
    id: "02", 
    title: "Precision Laser Cutting", 
    desc: "Automated high-power steel plate cutting ensure exact fitment before assembly begins.",
    img: "/assets/images/oxy_fuel_cutting_sparks.png"
  },
  { 
    id: "03", 
    title: "Robotic & Manual Welding", 
    desc: "Specialized multi-pass welding techniques that eliminate stress points in the frame's core.",
    img: "/assets/images/welding_precision_bases.png"
  },
  { 
    id: "04", 
    title: "Final Precision Audit", 
    desc: "Every base undergoes strict laser-aligned quality checks before final industrial painting.",
    img: "/assets/images/quality_check_sticker.png"
  }
];

const Process = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--pearl-grey)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '80px', fontSize: '3rem' }}>THE FABRICATION <br /><span style={{ color: 'var(--industrial-ochre)' }}>JOURNEY.</span></h2>
        
        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '40px', 
          paddingBottom: '40px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }} className="no-scrollbar">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              viewport={{ once: true }}
              style={{ 
                minWidth: '350px', 
                flex: '0 0 auto', 
                background: 'white', 
                padding: '40px', 
                border: '1px solid var(--steel-border)' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <span style={{ fontSize: '4rem', fontWeight: 900, opacity: 0.1, lineHeight: 0.8 }}>{step.id}</span>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--industrial-ochre)' }}>
                  <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{step.title}</h4>
              <p style={{ color: 'var(--iron-grey)', fontSize: '0.95rem' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator for mobile */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
         <div style={{ width: '40px', height: '4px', background: 'var(--slate-text)', borderRadius: '2px', opacity: 0.2 }} />
      </div>
    </section>
  );
};

export default Process;
