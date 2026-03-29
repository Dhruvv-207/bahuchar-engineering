import React, { useRef, useState } from 'react';
import { Play, Pause, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoStage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--slate-text)', color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '60px' }}>
          <span className="mono" style={{ color: 'var(--industrial-ochre)' }}>Cinematic Showcase</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginTop: '16px' }}>THE ART OF <br />HEAVY FABRICATION.</h2>
        </div>

        {/* Video Container - Optimized for Portrait 9:16 */}
        <div style={{ 
          position: 'relative', 
          maxWidth: '500px', // Portrait constraint on desktop
          margin: '0 auto',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          background: '#000'
        }}>
          {/* Decorative Industrial Bolts */}
          <div style={{ position: 'absolute', top: '10px', left: '10px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5 }} />
          <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5 }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5 }} />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5 }} />

          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            ref={videoRef}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: 'block',
              aspectRatio: '9/16'
            }}
          >
            <source src="/assets/videos/company_profile.mp4" type="video/mp4" />
          </video>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'var(--industrial-ochre)',
              border: 'none',
              cursor: 'pointer',
              display: isPlaying ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
              zIndex: 2
            }}
          >
            <Play fill="white" color="white" size={40} style={{ marginLeft: '4px' }} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default VideoStage;
