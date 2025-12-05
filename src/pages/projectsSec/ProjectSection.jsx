import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../pages/projectsSec/projectsec.scss';

import memp from "../../assets/memmp-background.jpg";
import deduruoya from "../../assets/minihydro.png";
import kumbalgamuwa from "../../assets/kum687.png";
import biomed from "../../assets/walapane.png";
import scalp from "../../assets/Aluminum coil.jpeg";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'DMHPP',
      category: 'energy',
      image: deduruoya,
      description: 'Deduru Oya Mini Hydro Power Plant',
      completion: '2021',
      features: ['Turbine upgrades', 'Control system modernization', 'Capacity increase', 'Environmental impact reduction'],
      location: 'Deduru Oya Lake',
      client: 'Ceylon Electricity Board',
      capacity: '1.3 MW',
      impact: '72.32%',
      duration: '18 Months'
    },
    {
      id: 2,
      title: 'BMHPP',
      category: 'energy',
      image: biomed,
      description: 'Biomed Mini Hydro Power Plant',
      completion: '2023',
      features: ['Turbine upgrades', 'Control system modernization', 'Capacity increase', 'Environmental impact reduction'],
      location: 'Mahaweli River, Kandy',
      client: 'Ceylon Electricity Board',
      capacity: '0.9 MW',
      impact: '33.29%',
      duration: '18 Months'
    },
    {
      id: 3,
      title: 'KMHPP',
      category: 'energy',
      image: kumbalgamuwa,
      description: 'Kumbalgamuwa Mini Hydro Power Plant',
      completion: '2017',
      features: ['Turbine upgrades', 'Control system modernization', 'Capacity increase', 'Environmental impact reduction'],
      location: 'Samanala Wewa, Balangoda',
      client: 'Ceylon Electricity Board',
      capacity: '1.3 MW',
      impact: '79.43%',
      duration: '18 Months'
    },
    {
      id: 4,
      title: 'Meter Enclosure Manufacturing Plant – Galigamuwa',
      category: 'meter',
      image: memp,
      description: 'Advanced metering infrastructure for commercial district in Sri Lanka.',
      completion: '2015',
      features: ['500+ meter boards', 'Smart monitoring', 'Remote reading capability', 'Fault detection system'],
      location: 'Galigamuwa Industrial Zone',
      client: 'Ceylon Electricity Board',
      capacity: '500+ Units',
      impact: '75%',
      duration: '18 Months'
    },
    // EPC & Subcontractor Card – Fully Clickable
    {
      id: 5,
      title: 'Solar Power Development',
      category: 'consulting',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      description: 'SLE operates through two primary engagement models to deliver projects efficiently and professionally.',
      completion: 'Ongoing',
      location: 'Nationwide',
      client: 'Multiple Partners',
      capacity: 'Flexible',
      impact: '100%',
      duration: 'Project-specific',
      engagementModels: [
        {
          title: 'Engineering, Procurement and Construction (EPC)',
          description: 'SLE acts as the main contractor, taking full responsibility for engineering design, material procurement, construction, testing, and commissioning of the complete power project.'
        },
        {
          title: 'Subcontractor Role',
          description: 'We provide specialized services under a principal contractor, excelling in civil works, electrical & mechanical installation, testing, and commissioning of energy infrastructure.'
        }
      ]
    },
    {
      id: 6,
      title: 'Aluminium Recycling - Galgamuwa',
      category: 'recycling',
      image: scalp,
      description: 'State-of-the-art aluminum processing and recycling plant with zero waste policy.',
      completion: '2025',
      features: ['100 tons/month capacity', 'Closed-loop water system', 'Energy recovery', 'Quality certification'],
      location: 'Gampaha Industrial Zone',
      client: 'Lanka Aluminum Products',
      capacity: '100T/Month',
      impact: '80%',
      duration: '14 Months'
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <div className="modern-projects-page">
      <div className="glass-morphisms">
        <div className="glass-shape shape-1"></div>
        <div className="glass-shape shape-2"></div>
        <div className="glass-shape shape-3"></div>
        <div className="glass-shape shape-4"></div>
      </div>

      {/* Hero Section */}
      <section className="modern-projects-hero">
        <div className="hero-background">
          <div className="hero-liquid"></div>
          <div className="hero-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>

        <div className="container">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
              <span>Our Portfolio</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Innovative Energy<span className="gradient-text"> Projects</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Showcasing our commitment to sustainable energy solutions across Sri Lanka
            </motion.p>
            <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <div className="stat"><h3>10+</h3><span>Projects Completed</span></div>
              <div className="stat"><h3>20GWh+</h3><span>Energy Capacity</span></div>
              <div className="stat"><h3>87Mn</h3><span>Total Revenue</span></div>
            </motion.div>
            <motion.a href="#projects-grid" className="btn-primary"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span>Explore Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="modern-projects-section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div className="section-badge"><span>Our Work</span></motion.div>
            <h2>Successfully Delivered Projects</h2>
            <p>Explore our diverse portfolio and flexible partnership models</p>
          </motion.div>

          <motion.div className="project-filters" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {['all', 'energy', 'meter', 'recycling', 'consulting'].map(f => (
              <motion.button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>
                  {f === 'all' ? 'All Projects' : f === 'energy' ? 'Energy Generation' : f === 'meter' ? 'Meter Boards' : f === 'recycling' ? 'Recycling' : 'Consulting & EPC'}
                </span>
                <div className="filter-glow"></div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                onClick={() => setActiveProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-glass">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay"></div>
                    <div className="project-category"><span>{project.category}</span></div>
                    <div className="project-actions">
                      <button className="action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-meta">
                      <div className="meta-item"><span className="meta-icon">Power</span><span>{project.capacity}</span></div>
                      <div className="meta-item"><span className="meta-icon">Plant Factor</span><span>{project.impact}</span></div>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-footer">
                      <div className="completion-badge">Completed {project.completion}</div>
                      <motion.button className="view-details-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        View Details
                      </motion.button>
                    </div>
                  </div>
                  <div className="card-glow"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="modern-projects-cta">
        <div className="cta-background">
          <div className="liquid-shape"></div>
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
        </div>
        <div className="container">
          <motion.div className="cta-content glass-card"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
            <h2>Have an Energy Project in Mind?</h2>
            <p>Let's discuss how we can bring your vision to life with our expertise and experience</p>
            <div className="cta-buttons">
              <motion.a href="/contact" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Start a Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </motion.a>
              <motion.a href="/services" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Our Services</span>
              </motion.a>
            </div>
            <div className="cta-glow"></div>
          </motion.div>
        </div>
      </section>

      {/* MODAL – SHARP IMAGE (NO BLUR) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div className="project-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}>
            <motion.div className="modal-glass"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              <motion.button className="modal-close" onClick={() => setActiveProject(null)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <span></span><span></span>
              </motion.button>

              {/* Sharp Image */}
              <div className="modal-image">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'none !important',
                  }}
                />
                <div className="modal-overlay" style={{
                  background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)',
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none'
                }}>
                  <div className="modal-badge"><span>{activeProject.category}</span></div>
                </div>
              </div>

              <div className="modal-content">
                <div className="modal-header">
                  <h2>{activeProject.title}</h2>
                  <p className="project-description">{activeProject.description}</p>
                </div>

                {/* EPC & Subcontractor Special Content */}
                {activeProject.engagementModels ? (
                  <div style={{ marginTop: '2rem' }}>
                    {activeProject.engagementModels.map((model, idx) => (
                      <div key={idx} style={{
                        background: 'rgba(255,255,255,0.08)',
                        padding: '1.8rem',
                        borderRadius: '16px',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.12)',
                        backdropFilter: 'blur(12px)'
                      }}>
                        <h3 style={{ color: '#00ffb3', marginBottom: '0.8rem', fontSize: '1.4rem' }}>
                          {model.title}
                        </h3>
                        <p style={{ color: '#e0e0e0', lineHeight: '1.7', fontSize: '1.1rem' }}>
                          {model.description}
                        </p>
                      </div>
                    ))}
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                      <span style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(90deg, #00d4ff, #00ffb3)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        Flexible Partnership — EPC or Subcontractor, We Deliver Excellence
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="modal-stats">
                      <div className="modal-stat"><div className="stat-value">{activeProject.capacity}</div><div className="stat-label">Capacity</div></div>
                      <div className="modal-stat"><div className="stat-value">{activeProject.impact}</div><div className="stat-label">Impact</div></div>
                      <div className="modal-stat"><div className="stat-value">{activeProject.duration}</div><div className="stat-label">Duration</div></div>
                    </div>

                    <div className="modal-details">
                      <div className="detail-section">
                        <h4>Project Details</h4>
                        <div className="detail-grid">
                          <div className="detail-item"><span className="detail-label">Completion</span><span className="detail-value">{activeProject.completion}</span></div>
                          <div className="detail-item"><span className="detail-label">Location</span><span className="detail-value">{activeProject.location}</span></div>
                          <div className="detail-item"><span className="detail-label">Client</span><span className="detail-value">{activeProject.client}</span></div>
                        </div>
                      </div>

                      {activeProject.features?.length > 0 && (
                        <div className="detail-section">
                          <h4>Key Features</h4>
                          <div className="features-list">
                            {activeProject.features.map((f, i) => (
                              <div key={i} className="feature-item">
                                <span className="feature-icon">Check</span>
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                <motion.a href="/contact" className="btn-primary modal-cta" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <span>Get in Touch</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;