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
    <section className="section-padding" style={{ backgroundColor: 'var(--slate-text)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        
        <div style={{ marginBottom: '40px', color: 'white' }}>
          <span className="mono" style={{ opacity: 0.6 }}>Behind the Scenes</span>
          <h2 style={{ fontSize: '3rem', marginTop: '16px' }}>THE ART OF <br /><span style={{ color: 'var(--industrial-ochre)' }}>HEAVY FABRICATION.</span></h2>
        </div>

        {/* Industrial Frame */}
        <div style={{ 
          position: 'relative', 
          border: '10px solid #2A2A2A', 
          background: '#000',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
        }}>
          {/* Decorative Bolts */}
          <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '40px', height: '40px', background: '#333', borderRadius: '50%', border: '4px solid #1A1A1A' }} />
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '40px', height: '40px', background: '#333', borderRadius: '50%', border: '4px solid #1A1A1A' }} />
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '40px', height: '40px', background: '#333', borderRadius: '50%', border: '4px solid #1A1A1A' }} />
          <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '40px', height: '40px', background: '#333', borderRadius: '50%', border: '4px solid #1A1A1A' }} />
          
          <video 
            ref={videoRef}
            src="/assets/videos/company_profile.mp4" 
            style={{ width: '100%', height: 'auto', opacity: 0.8 }}
            loop
            muted
            onClick={togglePlay}
          />

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
