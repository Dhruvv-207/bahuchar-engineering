import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Zap, Cpu, Maximize2, Drill, Hammer, Wrench } from 'lucide-react';

const CapacityItem = ({ title, spec, icon: Icon, desc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="frosted-steel"
    style={{ 
      padding: '30px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px',
      borderLeft: '4px solid var(--industrial-ochre)'
    }}
  >
    <Icon size={32} color="var(--industrial-ochre)" />
    <div>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{title}</h4>
      <p style={{ color: 'var(--iron-grey)', fontSize: '0.95rem', lineHeight: 1.6 }}>
        {desc} <span className="mono" style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--slate-text)', marginLeft: '8px' }}>[{spec}]</span>
      </p>
    </div>
  </motion.div>
);

const Capacity = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
          <span className="mono">Infrastructure Powerhouse</span>
          <h2 style={{ fontSize: '3rem', margin: '16px 0' }}>TECHNICAL <br /><span style={{ color: 'var(--industrial-ochre)' }}>CAPACITY.</span></h2>
          <p style={{ color: 'var(--iron-grey)', fontSize: '1.1rem', marginTop: '20px', lineHeight: 1.6 }}>
            Bahuchar Engineering is an Ahmedabad-based fabrication workshop engaged in structural fabrication and machine base frame manufacturing. We are capable of handling heavy and precision fabrication jobs efficiently.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 100%, 350px), 1fr))', 
          gap: 'clamp(20px, 4vw, 30px)' 
        }}>
          {/* Infrastructure & General Capacity */}
          <CapacityItem 
            title="Facility Space" 
            spec="330 SQ. YARD" 
            icon={Maximize2} 
            desc="Our dedicated Ahmedabad workshop is optimized for industrial flow and managing large-scale fabrication projects."
          />
          <CapacityItem 
            title="High-Lift Crane" 
            spec="CAPACITY 5 TON" 
            icon={Anchor} 
            desc="Handles massive steel assemblies and heavy block fabrications safely throughout the production cycle."
          />
          
          {/* Fabrication & Assembly */}
          <CapacityItem 
            title="MIG Welding Machine" 
            // spec="3 INDUSTRIAL UNITS" 
            icon={Zap} 
            desc="High-speed, clean, and strong joints in structural steel, ensuring machine frames are built for long-term durability."
          />
          <CapacityItem 
            title="Arc Welding Machine" 
            // spec="2 HEAVY UNITS" 
            icon={Hammer} 
            desc="Deep-penetration welds in thick steel plates, providing the structural 'spine' for heavy-load-bearing foundations."
          />
          <CapacityItem 
            title="Precision Drilling" 
            spec="PILLAR & MAGNET" 
            icon={Drill} 
            desc="Accurate hole-boring and tapping on components of any size, from small brackets to massive frames."
          />

          {/* Heavy Machining */}
          <CapacityItem 
            title="Plano Milling Machine" 
            spec="3200 x 6700 MM" 
            icon={Maximize2} 
            desc="Surgical precision on massive structural beds and long-frame machine bases, ensuring perfect flatness over large surfaces."
          />
          <CapacityItem 
            title="VMC Precision" 
            spec="2600 x 5000 MM" 
            icon={Cpu} 
            desc="High-accuracy vertical machining for complex components with tight tolerances in high-tech industrial applications."
          />
        </div>
      </div>
    </section>
  );
};

export default Capacity;
