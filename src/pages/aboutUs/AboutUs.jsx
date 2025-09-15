import React, { useEffect, useRef } from 'react';
import './aboutus.scss';
import ceoimg from "../../assets/ceo.jpg";
import signature from "../../assets/signature.png";
import sethsiripaya from "../../assets/sethsiripaya.jpg";
import deduruoyax from "../../assets/deduruoya8.jpg";
import companyVideo from "../../assets/Seethawaka.mp4"; // Local video asset as fallback for hero section
import companyvideo2 from "../../assets/SLE HD.mp4"; // Local video asset as fallback for company video section

const AboutUs = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Ensure the video source is loaded
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Hero video is playing automatically");
          })
          .catch((error) => {
            console.error("Hero video autoplay failed:", error);
            video.play().catch((err) => {
              console.error("Hero video retry playback failed:", err);
            });
          });
      }
    }
  }, []);

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
          ref={videoRef}
          className="modern-hero__video"
          autoPlay
          loop
          muted
          playsInline
          poster={sethsiripaya} // Use local image as poster
        >
          <source src="https://drive.google.com/uc?export=download&id=1f5PMzy-hTI4LyNSU5mxMp2EBS5jtrvQp" type="video/mp4" />
          <source src={companyVideo} type="video/mp4" /> {/* Fallback to local video */}
          <p>Your browser does not support the video tag. <a href="https://drive.google.com/uc?export=download&id=1f5PMzy-hTI4LyNSU5mxMp2EBS5jtrvQp">Download the video</a>.</p>
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

      {/* Company Video Section */}
      <section className="sle-company-video-section">
        <div className="sle-container">
          <div className="sle-video-container">
            <div className="sle-section-header">
              <span className="sle-section-label">Our Story</span>
              <h2 className="sle-section-title">Discover Sri Lanka Energies</h2>
              <div className="sle-divider"></div>
              <p className="sle-video-description">
                Watch our story and learn how we're transforming Sri Lanka's energy landscape
                through sustainable solutions and innovative technologies.
              </p>
            </div>

            <div className="sle-video-player">
              <video
                controls
                poster={sethsiripaya}
                className="sle-company-video"
              >
                <source src="https://drive.google.com/uc?export=download&id=1TxYT9A2J6_YdRC8iiFrLBSpJu-YAL3s6" type="video/mp4" />
                <source src={companyvideo2} type="video/mp4" /> {/* Fallback to local video */}
                <p>Your browser does not support the video tag. <a href="https://drive.google.com/uc?export=download&id=1TxYT9A2J6_YdRC8iiFrLBSpJu-YAL3s6">Download the video</a>.</p>
              </video>
            </div>

            <div className="sle-video-caption">
              <p>Sri Lanka Energies - Powering a Sustainable Future</p>
            </div>
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
      <section className="executive-message">
        <div className="message-container">
          <div className="message-grid">
            <div className="message-content">
              <div className="content-header">
                <span className="section-label">Message from Leadership</span>
                <h3 className="section-title">Our Commitment to Sustainable Energy</h3>
                <div className="divider"></div>
              </div>
              <div className="message-text">
                <p>At Sri Lanka Energies, we believe that sustainable energy is not just a business opportunity, but a responsibility we owe to future generations. Since our founding in 2010, we've been driven by a singular vision - to transform Sri Lanka's energy landscape through innovative renewable solutions.</p>

                <p>Our journey hasn't been without challenges, but the dedication of our team and the trust of our partners have enabled us to become a leader in Sri Lanka's renewable energy sector. We've successfully implemented projects that deliver clean energy while preserving our beautiful island's natural resources.</p>

                <p>As we look to the future, we remain committed to pushing boundaries in renewable technology, creating meaningful employment opportunities, and contributing to Sri Lanka's energy independence. I invite you to join us in this important mission.</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .executive-message {
            padding: 5rem 0;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .message-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }

          .message-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .message-grid:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          }

          .message-content {
            padding: 3rem;
          }

          .content-header {
            text-align: center;
            margin-bottom: 2.5rem;
          }

          .section-label {
            display: inline-block;
            font-size: 0.9rem;
            font-weight: 600;
            color: #4e9f3d;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 1rem;
            position: relative;
          }

          .section-label::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 3px;
            background: #4e9f3d;
            border-radius: 2px;
          }

          .section-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: #1e201e;
            margin: 1rem 0 1.5rem;
            line-height: 1.3;
          }

          .divider {
            height: 1px;
            background: linear-gradient(to right, transparent 0%, #ddd 50%, transparent 100%);
            margin: 1.5rem auto;
            max-width: 200px;
          }

          .message-text {
            color: #4a4a4a;
            line-height: 1.8;
            font-size: 1.05rem;
          }

          .message-text p {
            margin-bottom: 1.5rem;
            position: relative;
            padding-left: 1.5rem;
          }

          .message-text p::before {
            content: '"';
            position: absolute;
            left: 0;
            top: -5px;
            font-size: 2rem;
            color: #4e9f3d;
            font-family: Georgia, serif;
          }

          @media (min-width: 768px) {
            .message-grid {
              grid-template-columns: 1fr;
              padding: 2rem;
            }

            .message-content {
              padding: 2.5rem;
            }

            .section-title {
              font-size: 2.5rem;
            }
          }

          @media (min-width: 992px) {
            .message-grid {
              grid-template-columns: 1fr;
              padding: 3rem;
            }

            .message-content {
              padding: 3.5rem;
            }
          }
        `}</style>
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
