import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './aboutus.scss';
import ceoimg from "../../assets/minihydro.png";
import signature from "../../assets/signature.png";
import sethsiripaya from "../../assets/sethsiripaya.jpg";
import deduruoyax from "../../assets/minihydro.png";
import companyVideo from "../../assets/Seethawaka.mp4";
import companyvideo2 from "../../assets/SLE HD.mp4";

const AboutUs = () => {
  // THIS FIXES YOUR PROBLEM: Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '13+', label: 'Years Experience' },
    { value: '20GWH+', label: 'Energy Capacity' },
    { value: '100%', label: 'Renewable Focus' },
    { value: '24/7', label: 'Support' }
  ];

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
    <div className="sle-about-page">
      {/* Glass Morphism Background Elements */}
      <div className="glass-morphisms">
        <div className="glass-shape shape-1"></div>
        <div className="glass-shape shape-2"></div>
        <div className="glass-shape shape-3"></div>
        <div className="glass-shape shape-4"></div>
      </div>

      {/* Modern Hero Section */}
      <section className="modern-about-hero">
        <div className="hero-background">
          <div className="hero-liquid"></div>
          <div className="hero-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>

        <div className="modern-hero__video-overlay"></div>
        <video 
          className="modern-hero__video" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={sethsiripaya}
        >
          <source src={companyVideo} type="video/mp4" />
          <p>Your browser does not support the video tag. <a href={companyVideo}>Download the video</a>.</p>
        </video>
        
        <div className="modern-hero__content">
          <motion.div 
            className="modern-hero__text-container"
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
              <span>About Sri Lanka Energies</span>
            </motion.div>

            <motion.h1 
              className="modern-hero__title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="modern-hero__title-line">Powering Sri Lanka's</span>
              <span className="modern-hero__title-line gradient-text">Sustainable Future</span>
            </motion.h1>
            
            <motion.p 
              className="modern-hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Leading the renewable energy revolution with innovative solar, hydro, 
              and green technology solutions for over a decade
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="modern-hero__cta-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="modern-hero__cta modern-hero__cta--primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Solutions
                <svg className="modern-hero__cta-icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
              <motion.button 
                className="modern-hero__cta modern-hero__cta--secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Our Story
                <svg className="modern-hero__cta-icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="modern-video-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <motion.div
              className="section-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>Our Story</span>
            </motion.div>
            <h2>Discover Sri Lanka Energies</h2>
            <p>Watch our journey in transforming Sri Lanka's energy landscape through sustainable innovation</p>
          </motion.div>

          <motion.div 
            className="video-container glass-card"
            {...fadeInUp}
            whileHover={{ y: -10 }}
          >
            <div className="video-wrapper">
              <video controls poster={sethsiripaya} className="company-video">
                <source src={companyvideo2} type="video/mp4" />
                <p>Your browser does not support the video tag. <a href={companyvideo2}>Download the video</a>.</p>
              </video>
              <div className="video-glow"></div>
            </div>
            <div className="video-caption">
              <p>Sri Lanka Energies - Powering a Sustainable Future Since 2012</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="modern-about-content">
        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="content-col"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="section-header">
                <div className="section-badge"><span>About Us</span></div>
                <h2>Sri Lanka Energies (Pvt) Ltd</h2>
                <div className="divider"></div>
              </div>
              
              <div className="content-text">
                <p>Sri Lanka Energies (Pvt) Ltd is a premier renewable energy company in Sri Lanka specializing in the development and operation of sustainable energy solutions. Our company is committed to driving the nation's transition to clean energy through solar power, mini hydro, and other green technologies.</p>
                
                <p>Established with a vision to contribute to national energy security and environmental sustainability, we pride ourselves on delivering high-quality, efficient, and cost-effective energy solutions.</p>
                
                <div className="highlight-box glass-card">
                  <div className="quote-icon">"</div>
                  <p>Our mission is to lead in energy innovation while ensuring environmental responsibility, community engagement, and long-term economic value.</p>
                </div>
                
                <p>With a team of skilled engineers and energy experts, Sri Lanka Energies continues to expand its portfolio across the island, building a sustainable future powered by renewable resources.</p>
                
                <p>We are headquartered in Colombo, Sri Lanka, and work closely with local and international partners to ensure every project meets global standards.</p>
              </div>
              
              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Contact Us
                </motion.button>
                <motion.button className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Our Projects
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="image-col"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="image-stack">
                <motion.div className="main-image glass-card" whileHover={{ y: -10, rotate: 1 }}>
                  <img src={sethsiripaya} alt="Solar farm" />
                  <div className="image-overlay"></div>
                </motion.div>
                <motion.div className="secondary-image glass-card" whileHover={{ y: -10, rotate: -1 }}>
                  <img src={deduruoyax} alt="Hydro plant" />
                  <div className="image-overlay"></div>
                </motion.div>
                <motion.div className="image-badge" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }}>
                  <span>Est. 2012</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="modern-vision-mission" id="vision">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2>Our Vision & Mission</h2>
            <p>Driving sustainable energy transformation across Sri Lanka</p>
          </motion.div>

          <div className="vm-grid">
            <motion.div className="vision-card glass-card" {...fadeInUp} whileHover={{ y: -15, scale: 1.02 }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To lead Sri Lanka towards a sustainable future by harnessing renewable energy to power every home, business, and community with clean, reliable, and affordable energy solutions.</p>
              <div className="card-glow"></div>
            </motion.div>
            
            <motion.div className="mission-card glass-card" {...fadeInUp} whileHover={{ y: -15, scale: 1.02 }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To deliver innovative and efficient renewable energy systems, including solar, wind, and hydro solutions, while fostering environmental stewardship and empowering communities through sustainable energy practices.</p>
              <div className="card-glow"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      
<section className="modern-ceo-section">
  <div className="container">
    <motion.div
      className="ceo-grid"
      variants={staggerChildren}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {/* CEO Image & Info */}
      
      {/* CEO Message */}
      <motion.div className="ceo-message" variants={fadeInUp}>
        <div className="section-header">
          <div className="section-badge">
            <span>Message from Leadership</span>
          </div>
          <h2>Our Commitment to Sustainable Energy</h2>
          <div className="divider"></div>
        </div>

        <div className="message-content">
          <p>
            At Sri Lanka Energies, we believe that sustainable energy is not just a business opportunity, but a responsibility we owe to future generations. Since our founding in 2012, we’ve been driven by a singular vision – to transform Sri Lanka’s energy landscape through innovative renewable solutions.
          </p>

          <p>
            Our journey hasn’t been without challenges, but the dedication of our team and the trust of our partners have enabled us to become a leader in Sri Lanka’s renewable energy sector. We’ve successfully implemented projects that deliver clean energy while preserving our beautiful island’s natural resources.
          </p>

          <p>
            As we look to the future, we remain committed to pushing boundaries in renewable technology, creating meaningful employment opportunities, and contributing to Sri Lanka’s energy independence. I invite you to join us in this important mission.
          </p>
        </div>

        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read Full Message
        </motion.button>
      </motion.div>
      <motion.div className="ceo-image" variants={fadeInUp}>
        <div className="image-wrapper">
          {/* Replace with your actual CEO photo */}
          <img
            src={ceoimg}   
            alt="Dr. Kamal Perera – CEO of Sri Lanka Energies"
            className="ceo-photo"
          />

          

          {/* Optional handwritten signature */}
         
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>

      {/* Stats Section */}
      <section className="modern-stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                className="stat-card glass-card"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="modern-team-cta">
        <div className="cta-background">
          <div className="liquid-shape"></div>
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="cta-content glass-card"
            {...fadeInUp}
            whileHover={{ y: -10 }}
          >
            <h2>Join Us in Building a Greener Future</h2>
            <p>Our team of experts is dedicated to transforming Sri Lanka's energy landscape. We're always looking for passionate individuals to join our mission.</p>
            
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Careers at SLE
            </motion.button>
            
            <div className="cta-glow"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;