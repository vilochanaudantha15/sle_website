import React from 'react';
import './aboutus.scss';
import ceoimg from "../../assets/ceo.jpg"
import signature from "../../assets/signature.png"
import sethsiripaya from "../../assets/sethsiripaya.jpg"
import deduruoyax from "../../assets/deduruoya8.jpg"
const AboutUs = () => {
  const hydroPlants = [
    { name: 'Kumbalgamuwa Mini Hydro', location: 'Belihuloya, Balangoda' },
    { name: 'Daduru Oya Mini Hydro', location: 'Deduruoya, Kurunegala' }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50MW+', label: 'Energy Capacity' },
    { value: '100%', label: 'Renewable Focus' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <div className="sle-about-page">
      {/* Hero Section */}
      <section className="modern-hero">
  <div className="modern-hero__video-overlay"></div>
  <video 
    className="modern-hero__video" 
    autoPlay 
    loop 
    muted 
    playsInline
    poster="https://example.com/poster.jpg" // Fallback image
  >
    <source src="https://videos.pexels.com/video-files/4540070/4540070-hd_1920_1080_30fps.mp4" type="video/mp4" />
  </video>
  
  <div className="modern-hero__content">
    <div className="modern-hero__text-container">
      <h1 className="modern-hero__title">
        <span className="modern-hero__title-line">Powering Sri Lanka's</span>
        <span className="modern-hero__title-line modern-hero__title-line--highlight">Sustainable Future</span>
      </h1>
      
      <p className="modern-hero__subtitle">
        Leading the renewable energy revolution with innovative solar, hydro, 
        and green technology solutions
      </p>
      
      <div className="modern-hero__cta-container">
        <button className="modern-hero__cta modern-hero__cta--primary">
          Explore Our Solutions
          <svg className="modern-hero__cta-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <button className="modern-hero__cta modern-hero__cta--secondary">
          Watch Our Story
          <svg className="modern-hero__cta-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div className="modern-hero__scroll-indicator">
      <span className="modern-hero__scroll-text">Scroll to explore</span>
      <div className="modern-hero__scroll-line"></div>
    </div>
  </div>
</section>

      {/* About Content Section */}
      <section className="sle-about-content-section">
        <div className="sle-container">
          <div className="sle-grid-layout">
            <div className="sle-content-col">
              <div className="sle-section-header">
                <span className="sle-section-label">About Us</span>
                <h2 className="sle-section-title">Sri Lanka Energies (Pvt) Ltd</h2>
                <div className="sle-divider"></div>
              </div>
              
              <div className="sle-content-text">
                <p>Sri Lanka Energies (Pvt) Ltd is a premier renewable energy company in Sri Lanka specializing in the development and operation of sustainable energy solutions. Our company is committed to driving the nation's transition to clean energy through solar power, mini hydro, and other green technologies.</p>
                
                <p>Established with a vision to contribute to national energy security and environmental sustainability, we pride ourselves on delivering high-quality, efficient, and cost-effective energy solutions.</p>
                
                <div className="sle-highlight-box">
                  <p>Our mission is to lead in energy innovation while ensuring environmental responsibility, community engagement, and long-term economic value.</p>
                </div>
                
                <h3 className="sle-content-subtitle">Our Key Projects:</h3>
                <ul className="sle-projects-list">
                  {hydroPlants.map((plant, index) => (
                    <li key={index} className="sle-project-item">
                      <span className="sle-project-name">{plant.name}</span>
                      <span className="sle-project-location">{plant.location}</span>
                    </li>
                  ))}
                </ul>
                
                <p>With a team of skilled engineers and energy experts, Sri Lanka Energies continues to expand its portfolio across the island, building a sustainable future powered by renewable resources.</p>
                
                <p>We are headquartered in Colombo, Sri Lanka, and work closely with local and international partners to ensure every project meets global standards.</p>
              </div>
              
              <div className="sle-cta-buttons">
                <a href="#" className="sle-primary-button">Contact Us</a>
                <a href="#" className="sle-secondary-button">Our Projects</a>
              </div>
            </div>
            
            <div className="sle-image-col">
              <div className="sle-image-stack">
                <div className="sle-main-image">
                  <img src={sethsiripaya} alt="Solar farm" />
                </div>
                <div className="sle-secondary-image">
                  <img src={deduruoyax} alt="Hydro plant" />
                </div>
                <div className="sle-image-badge">
                  <span>Established in 2012</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="sle-ceo-section">
        <div className="sle-container">
          <div className="sle-ceo-grid">
            <div className="sle-ceo-image">
              <img src={ceoimg} alt="CEO of Sri Lanka Energies" />
              <div className="sle-ceo-info">
                <h4 className="sle-ceo-name">Eng. Nandika Pathirage</h4>
                <p className="sle-ceo-title">General Manager & CEO</p>
              </div>
            </div>
            <div className="sle-ceo-message">
              <div className="sle-section-header">
                <span className="sle-section-label">Message from CEO</span>
                <h3 className="sle-section-title">Our Commitment to Sustainable Energy</h3>
                <div className="sle-divider"></div>
              </div>
              <div className="sle-message-content">
                <p>At Sri Lanka Energies, we believe that sustainable energy is not just a business opportunity, but a responsibility we owe to future generations. Since our founding in 2010, we've been driven by a singular vision - to transform Sri Lanka's energy landscape through innovative renewable solutions.</p>
                
                <p>Our journey hasn't been without challenges, but the dedication of our team and the trust of our partners have enabled us to become a leader in Sri Lanka's renewable energy sector. We've successfully implemented projects that deliver clean energy while preserving our beautiful island's natural resources.</p>
                
                <p>As we look to the future, we remain committed to pushing boundaries in renewable technology, creating meaningful employment opportunities, and contributing to Sri Lanka's energy independence. I invite you to join us in this important mission.</p>
                
                <div className="sle-signature">
                  <img src={signature} alt="CEO Signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="sle-stats-section">
        <div className="sle-container">
          <div className="sle-stats-grid">
            {stats.map((stat, index) => (
              <div className="sle-stat-item" key={index}>
                <div className="sle-stat-value">{stat.value}</div>
                <div className="sle-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="sle-vision-mission-section">
        <div className="sle-container">
          <div className="sle-vm-grid">
            <div className="sle-vision-card">
              <div className="sle-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To lead Sri Lanka towards a sustainable future by harnessing renewable energy to power every home, business, and community with clean, reliable, and affordable energy solutions.</p>
            </div>
            
            <div className="sle-mission-card">
              <div className="sle-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To deliver innovative and efficient renewable energy systems, including solar, wind, and hydro solutions, while fostering environmental stewardship and empowering communities through sustainable energy practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="sle-team-cta-section">
        <div className="sle-container">
          <div className="sle-cta-content">
            <h2>Join Us in Building a Greener Future</h2>
            <p>Our team of experts is dedicated to transforming Sri Lanka's energy landscape. We're always looking for passionate individuals to join our mission.</p>
            <a href="#" className="sle-outline-button">Careers at SLE</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;