import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Settings, Ruler } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, img }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="base-card frosted-steel" 
      style={{ 
        padding: 'clamp(30px, 5vw, 50px) clamp(20px, 4vw, 40px)', 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: 'clamp(350px, 50vh, 450px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: `linear-gradient(rgba(253, 251, 247, 0.95), rgba(253, 251, 247, 0.85)), url(${img}) center/cover no-repeat`
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, transform: 'translateY(-10px)' }}>
        <Icon size={40} color="var(--industrial-ochre)" style={{ marginBottom: '24px' }} />
        <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>{title}</h3>
        <p style={{ color: 'var(--iron-grey)', fontSize: '1rem', lineHeight: '1.6' }}>{desc}</p>
        
        <div style={{ 
          marginTop: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Ruler size={16} />
          <span className="mono" style={{ fontSize: '0.75rem' }}>Precision: +/- 0.05 MM</span>
        </div>
      </div>
      
      {/* Dimension Overlay Decorative */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        right: '20px', 
        width: '100px', 
        height: '1px', 
        background: 'rgba(163, 126, 44, 0.2)' 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        right: '20px', 
        width: '1px', 
        height: '100px', 
        background: 'rgba(163, 126, 44, 0.2)' 
      }} />
    </motion.div>
  );
};

const Services = () => {
  const cards = [
    { 
      icon: Target, 
      title: "Laser Machine Bases", 
      desc: "Stress-relieved, high-rigidity steel structures designed to eliminate harmonic vibrations in high-speed optical systems.",
      img: "/assets/images/laser_base_positioning.png"
    },
    { 
      icon: Layers, 
      title: "Molding Machine Frames", 
      desc: "Heavy-duty structural frames engineered to withstand massive clamping forces in injection and blow molding processes.",
      img: "/assets/images/molding_machine_base_cast.png"
    },
    { 
      icon: Settings, 
      title: "Custom Heavy Fabrication", 
      desc: "Turnkey fabrication for multi-axis machinery foundations, robotic cells, and specialized automated cell bases.",
      img: "/assets/images/heavy_hydraulic_press.png"
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <span className="mono">Our Capability</span>
          <h2 style={{ fontSize: '3rem', marginTop: '16px' }}>ENGINEERED TO <br /><span style={{ color: 'var(--industrial-ochre)' }}>SUPPORT SCALE.</span></h2>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 'clamp(20px, 4vw, 30px)',
          perspective: '1000px'
        }}>
          {cards.map((card, i) => <Card key={i} {...card} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
