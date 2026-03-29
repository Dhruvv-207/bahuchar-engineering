import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Laser Machine Base', message: '' });
  const { sendMessage } = useWhatsApp("919265198686");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData);
  };

  return (
    <section className="section-padding" id="contact" style={{ backgroundColor: 'white' }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 500px), 1fr))', 
        gap: 'clamp(40px, 8vw, 80px)' 
      }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono">Get in Touch</span>
          <h2 style={{ fontSize: '3rem', marginTop: '16px' }}>Ready to <br /><span style={{ color: 'var(--industrial-ochre)' }}>START FABRICATION?</span></h2>
          <p style={{ color: 'var(--iron-grey)', fontSize: '1.1rem', margin: '32px 0' }}>Connect with our engineering team directly on WhatsApp for rapid estimates and technical consultation.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--pearl-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={20} color="var(--industrial-ochre)" />
              </div>
              <span className="mono" style={{ fontSize: '1rem', color: 'var(--slate-text)' }}>+91 92651 98686</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--pearl-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={20} color="var(--industrial-ochre)" />
              </div>
              <span className="mono" style={{ fontSize: '1rem', color: 'var(--slate-text)' }}>bhahucharengineering@gmail.com</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--pearl-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={20} color="var(--industrial-ochre)" />
              </div>
              <span className="mono" style={{ fontSize: '1rem', color: 'var(--slate-text)' }}>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ padding: '50px', background: 'white', border: '2px solid var(--slate-text)', background: 'linear-gradient(135deg, white 0%, var(--pearl-grey) 100%)' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Full Name</label>
              <input 
                required 
                type="text" 
                placeholder="Ex. Rahul Sharma" 
                style={{ width: '100%', padding: '16px', border: '1px solid #DDD', background: 'white' }} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Email Address</label>
              <input 
                required 
                type="email" 
                placeholder="Ex. rahul@industry.com" 
                style={{ width: '100%', padding: '16px', border: '1px solid #DDD', background: 'white' }} 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Interested Section</label>
              <select 
                style={{ width: '100%', padding: '16px', border: '1px solid #DDD', background: 'white' }}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>Laser Machine Base</option>
                <option>Molding Machine Base</option>
                <option>Custom Engineering</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Project Message</label>
              <textarea 
                rows="4" 
                placeholder="Describe your machine requirements..." 
                style={{ width: '100%', padding: '16px', border: '1px solid #DDD', background: 'white' }} 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-industrial" 
              style={{ background: '#25D366', color: 'white', border: 'none', justifyContent: 'center' }}
            >
              Contact on WhatsApp <MessageCircle size={20} />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
