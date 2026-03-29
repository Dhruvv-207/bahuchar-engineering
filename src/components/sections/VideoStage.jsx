import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoStage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
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
        <div 
          style={{ 
            position: 'relative', 
            maxWidth: '500px', 
            margin: '0 auto',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            background: '#000',
            cursor: 'pointer',
            aspectRatio: '9/16'
          }} 
          onClick={togglePlay}
        >
          {/* Decorative Industrial Bolts */}
          <div style={{ position: 'absolute', top: '15px', left: '15px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5, zIndex: 10 }} />
          <div style={{ position: 'absolute', top: '15px', right: '15px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5, zIndex: 10 }} />
          <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5, zIndex: 10 }} />
          <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--industrial-ochre)', opacity: 0.5, zIndex: 10 }} />

          {/* Play Overlay */}
          {!isPlaying && (
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.4)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              zIndex: 5
            }}>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  border: '2px solid var(--industrial-ochre)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                 <Play fill="var(--industrial-ochre)" color="var(--industrial-ochre)" size={32} style={{ marginLeft: '4px' }} />
              </motion.div>
            </div>
          )}

          <video 
            muted 
            loop 
            playsInline
            ref={videoRef}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: 'block'
            }}
          >
            <source src="/assets/videos/company_profile.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoStage;
