import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/assets/images/indian_workshop_interior.png', size: 'large' },
  { id: 2, src: '/assets/images/indian_engineer_precision.png', size: 'small' },
  { id: 3, src: '/assets/images/welding_precision_bases.png', size: 'medium' },
  { id: 4, src: '/assets/images/laser_base_positioning.png', size: 'large' },
  { id: 5, src: '/assets/images/molding_machine_base_cast.png', size: 'small' },
  { id: 6, src: '/assets/images/finished_bases_ready_shipping.png', size: 'medium' },
  { id: 7, src: '/assets/images/machined_steel_closeup.png', size: 'small' },
  { id: 8, src: '/assets/images/steel_plate_inventory.png', size: 'large' },
  { id: 9, src: '/assets/images/factory_night_shift_soft.png', size: 'medium' },
  { id: 10, src: '/assets/images/cnc_frame_machining.png', size: 'large' },
  { id: 11, src: '/assets/images/oxy_fuel_cutting_sparks.png', size: 'small' },
  { id: 12, src: '/assets/images/loading_delivery_truck.png', size: 'medium' },
  { id: 13, src: '/assets/images/heavy_hydraulic_press.png', size: 'large' },
  { id: 14, src: '/assets/images/indian_technicians_plan.png', size: 'small' },
  { id: 15, src: '/assets/images/quality_check_sticker.png', size: 'medium' }
];

const Gallery = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '60px' }}>CINEMATIC <br /><span style={{ color: 'var(--industrial-ochre)' }}>PORTFOLIO.</span></h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 30vw, 300px), 1fr))', 
          gridAutoFlow: 'dense',
          gap: 'clamp(10px, 2vw, 20px)'
        }}>
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              style={{ 
                gridRow: img.size === 'large' ? 'span 2' : 'span 1',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--pearl-grey)',
                height: img.size === 'small' ? '300px' : '400px'
              }}
            >
              <img 
                src={img.src} 
                alt="Industrial Work" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  filter: 'grayscale(0.1) brightness(0.9)',
                  transition: '0.6s'
                }}
                loading="lazy"
                onMouseOver={(e) => e.target.style.filter = 'grayscale(0) brightness(1)'}
                onMouseOut={(e) => e.target.style.filter = 'grayscale(0.1) brightness(0.9)'}
              />
              
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                padding: '20px', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                color: 'white',
                opacity: 0
              }} className="gallery-caption">
                <span className="mono" style={{ fontSize: '0.7rem' }}>BAHUCHAR ENGINEERING</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
