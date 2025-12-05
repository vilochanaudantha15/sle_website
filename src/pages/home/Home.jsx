import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import kumbalgamuwa from "../../assets/kum.jpeg";
import mempcover from "../../assets/memp54.jpeg";
import Aluminumcover from "../../assets/alu.jpeg";
import consultaion from "../../assets/energy-consultation.jpg";
import manpower from "../../assets/manpower.jpeg";
import slecover from "../../assets/sle1.jpg";
import sethsiripaya from "../../assets/sethsiripaya.jpg";
import minihydro from "../../assets/minihydro.png";

function Home() {
  // THIS LINE FIXES IT → Always start from the top when Home loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* GLASS MORPHISM BACKGROUND ELEMENTS */}
      <div className="glass-morphisms">
        <div className="glass-shape shape-1"></div>
        <div className="glass-shape shape-2"></div>
        <div className="glass-shape shape-3"></div>
        <div className="glass-shape shape-4"></div>
      </div>

      {/* NEW HERO SECTION */}
      <section className="modern-hero">
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
                <span>Renewable Energy</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Powering The Future With
                <span className="gradient-text"> Clean Energy</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Sri Lanka Energies delivers cutting-edge renewable energy solutions 
                that drive sustainability, reduce costs, and create a greener tomorrow 
                for businesses and communities.
              </motion.p>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="stat">
                  <h3>10+</h3>
                  <span>Projects Completed</span>
                </div>
                <div className="stat">
                  <h3>20GWH+</h3>
                  <span>Energy Generated</span>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <span>Client Satisfaction</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(254, 161, 22, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Projects
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="visual-container">
                <motion.div
                  className="main-visual glass-card"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={sethsiripaya}
                    alt="Solar Energy" 
                  />
                  <div className="visual-overlay">
                    <div className="pulse-dot"></div>
                    <span>Live Project Monitoring</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="floating-card card-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="card-icon">☀️</div>
                  <h4>Solar Solutions</h4>
                  <p>Efficient & Sustainable</p>
                </motion.div>
                
                <motion.div
                  className="floating-card card-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="card-icon">⚡</div>
                  <h4>Energy Generation</h4>
                  <p>24/7 Power Supply</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED SECTION */}
      <motion.section
        className="trusted-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <TrustedBy />
      </motion.section>

      {/* UPDATED CATEGORY SLIDER */}
     

      {/* EXPLORE SECTION */}
      <section className="explore-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Explore Our Energy Solutions</h2>
            <p>Innovative technologies driving the future of renewable energy</p>
          </motion.div>

          <motion.div
            className="solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEbby6hNcedOlUzhWxlGKl6YqYlIEjqnM6g&s",
                title: "Solar Power Development",
                description: "Harness the power of the sun with our advanced solar solutions"
              },
              { 
                src: mempcover, 
                title: "Meter Board Manufacturing",
                description: "Precision-engineered metering solutions for accurate energy monitoring"
              },
              { 
                src: minihydro, 
                title: "Energy Generation",
                description: "Reliable and efficient power generation systems"
              },
              { 
                src: Aluminumcover, 
                title: "Aluminium Recycling",
                description: "Sustainable recycling processes for a greener future"
              },
              { 
                src: consultaion, 
                title: "Energy Consulting",
                description: "Expert guidance for your energy optimization needs"
              },
              { 
                src: manpower, 
                title: "SLE Man Power",
                description: "Skilled workforce solutions for the energy sector"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="solution-card"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-glass">
                  <motion.div 
                    className="image-container"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src={item.src} alt={item.title} />
                    <div className="glass-overlay"></div>
                  </motion.div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <motion.button 
                      className="glass-button"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

<section className="projects-showcase">
  <div className="container">
    <motion.div 
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Our Landmark Projects</h2>
      <p>Delivering excellence in renewable energy across Sri Lanka</p>
    </motion.div>

    <div className="projects-slider">
      <Slide slidesToShow={3.2} 
      arrowsScroll={1}
      responsive={[
        { breakpoint: 1280, slidesToShow: 2.5 },
        { breakpoint: 1024, slidesToShow: 2 },
        { breakpoint: 640,  slidesToShow: 1.1 }
      ]}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card-wrapper"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div className="project-card">
              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="tag">{project.type}</span>
                    <h4>{project.title}</h4>
                    <p>{project.location}</p>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="info-header">
                  <h3>{project.title}</h3>
                  <span className="capacity">{project.capacity}</span>
                </div>
                <div className="info-stats">
                  <div className="stat">
                    <span className="icon">Power</span>
                    <span>{project.energy}</span>
                  </div>
                  <div className="stat">
                    <span className="icon">CO2</span>
                    <span>{project.co2}</span>
                  </div>
                </div>
              </div>

              <div className="card-glow-effect"></div>
            </div>
          </motion.div>
        ))}
      </Slide>
    </div>
  </div>
</section>


      {/* FEATURES SECTION */}
      <section className="features-section dark">
        <div className="features-background">
          <div className="liquid-shape"></div>
        </div>
        <div className="container">
          <div className="features-grid">
            {/* LEFT SIDE TEXT */}
            <motion.div
              className="features-content"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="company-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>Sri Lanka Energies</span>
              </motion.div>
              
              <h1>
                Renewable Energy <span className="gradient-text">Solutions</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Upgrade to a tailored energy experience with cutting-edge tools and services designed for commercial success and sustainable growth.
              </motion.p>
              
              <div className="features-list">
                {[
                  "Connect with Expert Energy Consultants",
                  "Customized Solutions by Energy Specialists",
                  "Optimize Energy Efficiency with Advanced Tools",
                  "24/7 Monitoring and Support Services",
                  "Sustainable and Eco-friendly Solutions",
                ].map((text, i) => (
                  <motion.div
                    className="feature-item"
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                className="cta-button"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(254, 161, 22, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span>Explore Business Energy Solutions</span>
                <div className="button-glow"></div>
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE IMAGES */}
            <motion.div
              className="features-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="visual-container">
                <motion.div
                  className="image-card glass-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -10, rotate: 1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="Business Energy"
                  />
                </motion.div>
                
                <motion.div
                  className="image-card glass-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -10, rotate: -1 }}
                >
                  <img src={slecover} alt="SLE Cover" />
                </motion.div>
                
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SHOWCASE */}
      

      {/* CTA SECTION */}
<motion.section
  className="cta-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="cta-container">
    {/* Background Elements */}
    <div className="cta-background">
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="energy-grid"></div>
    </div>
    
    {/* Main CTA Card */}
    <motion.div 
      className="cta-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Header Section */}
      <div className="cta-header">
        <motion.div 
          className="sparkle-icon"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ⚡
        </motion.div>
        
        <motion.h3
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Ready to Power Your Future?
        </motion.h3>
        
        <motion.div 
          className="title-underline"
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        ></motion.div>
      </div>

      {/* Content Section */}
      <motion.p
        className="cta-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Join the energy revolution with cutting-edge solutions tailored to your needs. 
        Let's build a sustainable future together.
      </motion.p>

      {/* Stats Section */}
      <motion.div 
        className="cta-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Expert Support</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">99%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        className="cta-actions"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="cta-button primary"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(254, 161, 22, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="button-content">
            <span className="button-text">Get Started Today</span>
            <span className="button-icon">→</span>
          </span>
          <div className="button-shine"></div>
        </motion.button>
        
        <motion.button
          className="cta-button secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="button-content">
            <span className="button-text">Schedule Consultation</span>
            <span className="button-icon">📅</span>
          </span>
        </motion.button>
      </motion.div>

      {/* Trust Badge */}
      <motion.div 
        className="trust-badge"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="trusted-by">Trusted by industry leaders</div>
        <div className="trust-logos">
          <span><img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Ceylon-Electricity-Board.png/180px-Ceylon-Electricity-Board.png" alt="" /></span>
          <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO04EZf3avmPYnwBRoF_SKerGFGCQ62s1qnQ&s" alt="" /></span>
          
        </div>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
    </motion.div>
  );
}

export default Home;