import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './contact.scss';

const ContactUs = () => {
  // THIS FIXES THE SCROLL PROBLEM — Page always starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');

    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    viewport: { once: true }
  };

  return (
    <div className="modern-contact-page">
      {/* Glass Morphism Background Elements */}
      <div className="glass-morphisms">
        <div className="glass-shape shape-1"></div>
        <div className="glass-shape shape-2"></div>
        <div className="glass-shape shape-3"></div>
        <div className="glass-shape shape-4"></div>
      </div>

      {/* Modern Hero Section */}
      <section className="modern-contact-hero">
        <div className="hero-background">
          <div className="hero-liquid"></div>
          <div className="hero-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Contact Our Experts</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Transform Your Energy
                <span className="gradient-text"> Infrastructure</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We specialize in cutting-edge renewable energy solutions tailored to Sri Lanka's unique landscape. 
                From residential solar installations to large-scale hydro projects, our expertise powers progress.
              </motion.p>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="stat">
                  <h3>24/7</h3>
                  <span>Expert Support</span>
                </div>
                
                <div className="stat">
                  <h3>100%</h3>
                  <span>Satisfaction</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="action-card glass-card">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Ready to Get Started?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Connect with our energy specialists today
                </motion.p>

                <div className="action-buttons">
                  <motion.a
                    href="mailto:general@slenergies.lk"
                    className="action-btn email-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <span>Send Email</span>
                  </motion.a>

                  <motion.a
                    href="tel:+94 11 218 6286"
                    className="action-btn phone-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <span>Call Now</span>
                  </motion.a>

                  <motion.a
                    href="#contact-form"
                    className="action-btn primary-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                      </svg>
                    </div>
                    <span>Get Quote</span>
                  </motion.a>
                </div>

                <motion.div 
                  className="response-time"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="response-badge">
                    <div className="pulse-dot"></div>
                    <span>Average response: 2 hours</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="modern-contact-cards">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <motion.div
              className="section-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>How to Reach Us</span>
            </motion.div>
            <h2>Multiple Ways to Connect</h2>
            <p>Choose your preferred method to get in touch with our energy experts</p>
          </motion.div>

          <motion.div 
            className="cards-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="contact-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>general@slenergies.lk</p>
              <motion.a 
                href="mailto:general@slenergies.lk" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.a>
              <div className="card-glow"></div>
            </motion.div>

            <motion.div 
              className="contact-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>+94 11 218 6256</p>
              <motion.a 
                href="tel:+94112186256" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
              <div className="card-glow"></div>
            </motion.div>

            <motion.div 
              className="contact-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Visit Us</h3>
              <p>Sethsiripaya Office Complex<br />Battaramulla</p>
              <motion.a 
                href="https://maps.google.com/maps?q=Sethsiripaya+Office+Complex,+Battaramulla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.a>
              <div className="card-glow"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="modern-contact-form">
        <div className="container">
          <div className="form-container">
            <motion.div 
              className="form-content"
              {...fadeInUp}
            >
              <div className="section-header">
                <div className="section-badge">
                  <span>Send Us a Message</span>
                </div>
                <h2>Let's Start a Conversation</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <div className="form-features">
                <div className="feature">
                  <span className="check-icon">Check</span>
                  Expert consultation
                </div>
                <div className="feature">
                  <span className="check-icon">Check</span>
                  Quick response
                </div>
                <div className="feature">
                  <span className="check-icon">Check</span>
                  No obligation
                </div>
              </div>
            </motion.div>

            <motion.form 
              className="main-form glass-card"
              onSubmit={handleSubmit}
              {...fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Smith" 
                  />
                  <div className="input-underline"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com" 
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+94 76 123 4567" 
                />
                <div className="input-underline"></div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <div className="select-wrapper">
                  <select 
                    id="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="solar">Solar Solutions</option>
                    <option value="hydro">Hydro Power</option>
                    <option value="wind">Wind Energy</option>
                    <option value="commercial">Commercial Projects</option>
                    <option value="careers">Careers</option>
                  </select>
                  <div className="select-arrow">Down Arrow</div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="How can we help you with your energy needs?"
                ></textarea>
                <div className="input-underline"></div>
              </div>

              <motion.button 
                type="submit" 
                className={`btn-primary ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="modern-contact-map">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <motion.div
              className="section-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>Our Location</span>
            </motion.div>
            <h2>Find Us at Sethsiripaya, Battaramulla</h2>
          </motion.div>

          <motion.div 
            className="map-container glass-card"
            {...fadeInUp}
            whileHover={{ y: -10 }}
          >
            <div className="map-overlay">
              <div className="location-info">
                <h3>Sri Lanka Energies HQ</h3>
                <p>Sethsiripaya Office Complex<br />Battaramulla, Sri Jayawardenepura Kotte</p>
                <motion.a 
                  href="https://maps.google.com/maps?q=Sethsiripaya+Office+Complex,+Battaramulla" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open in Maps
                </motion.a>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4459002642175!2d79.91391508852573!3d6.903540898273963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259fee9a854eb%3A0x5e6db6fad9ae5723!2sSethsiripaya%20Office%20Complex!5e0!3m2!1sen!2slk!4v1753515702701!5m2!1sen!2slk"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Sri Lanka Energies Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;