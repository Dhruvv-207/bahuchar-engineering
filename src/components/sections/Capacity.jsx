import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Zap, Cpu, Maximize2, Drill, Hammer, Wrench } from 'lucide-react';

const CapacityItem = ({ title, spec, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="frosted-steel"
    style={{ 
      padding: '30px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '15px',
      borderLeft: '4px solid var(--industrial-ochre)'
    }}
  >
    <Icon size={24} color="var(--industrial-ochre)" />
    <div>
      <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{title}</h4>
      <p className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-text)' }}>{spec}</p>
    </div>
  </motion.div>
);

const Capacity = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <span className="mono">Infrastructure Powerhouse</span>
          <h2 style={{ fontSize: '3rem', marginTop: '16px' }}>TECHNICAL <br /><span style={{ color: 'var(--industrial-ochre)' }}>CAPACITY.</span></h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: 'clamp(15px, 2vw, 24px)' 
        }}>
          {/* Machine Inventory */}
          <CapacityItem title="Planomiller Machine" spec="3200 x 6700 MM" icon={Maximize2} />
          <CapacityItem title="VMC Precision" spec="2600 x 5000 MM" icon={Cpu} />
          <CapacityItem title="Heavy Crane capacity" spec="5 TON SYSTEM" icon={Anchor} />
          <CapacityItem title="Facility Size" spec="108 x 45 SIZE" icon={Maximize2} />
          
          <CapacityItem title="MIG Welding Fleet" spec="3 INDUSTRIAL UNITS" icon={Zap} />
          <CapacityItem title="Arc Welding Unit" spec="2 HEAVY UNITS" icon={Hammer} />
          <CapacityItem title="Surface finishing" spec="6 GRINDING UNITS" icon={Wrench} />
          <CapacityItem title="Precision Drilling" spec="PILLAR & MAGNET" icon={Drill} />
        </div>
      </div>
    </section>
  );
};

export default Capacity;
