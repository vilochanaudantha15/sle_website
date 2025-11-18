import React from 'react';
import '../../pages/services/service.scss';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive energy solutions powering Sri Lanka's sustainable future</p>
            <a href="#our-services" className="btn-primary">Explore Our Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="our-services" className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What We Offer</span>
            <h2>Our Specialized Services</h2>
            <p>Delivering excellence across the energy spectrum with innovative and reliable solutions</p>
          </div>

          <div className="services-grid">
            {/* Solar Power Development */}
            <div className="service-card">
              <div className="service-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEbby6hNcedOlUzhWxlGKl6YqYlIEjqnM6g&s" alt="Solar Power Development" />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-solar-panel"></i>
                </div>
                <h3>Solar Power Development</h3>
                <p>Comprehensive solar energy solutions from planning to implementation for residential, commercial, and industrial applications.</p>
                <ul className="service-features">
                  <li>Solar farm development</li>
                  <li>Rooftop solar installations</li>
                  <li>Grid-tied and off-grid systems</li>
                  <li>Maintenance and optimization</li>
                </ul>
                <a href="#" className="btn-secondary">Learn More</a>
              </div>
            </div>

            {/* Meter Board Manufacturing */}
            <div className="service-card">
              <div className="service-image">
                <img src="http://124.43.4.17:3000/assets/memmp-background-DvTLsyFW.jpg" alt="Meter Board Manufacturing" />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>Meter Board Manufacturing</h3>
                <p>High-quality, reliable meter boards designed to meet Sri Lanka's energy distribution requirements.</p>
                <ul className="service-features">
                  <li>Custom meter board designs</li>
                  <li>Quality certified components</li>
                  <li>Safety compliance assurance</li>
                  <li>Bulk order fulfillment</li>
                </ul>
                <a href="#" className="btn-secondary">Learn More</a>
              </div>
            </div>

            {/* Energy Consulting */}
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Energy Consulting" />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Energy Consulting</h3>
                <p>Expert guidance for optimizing energy usage, reducing costs, and implementing sustainable practices.</p>
                <ul className="service-features">
                  <li>Energy efficiency audits</li>
                  <li>Renewable integration planning</li>
                  <li>Regulatory compliance guidance</li>
                  <li>Cost-benefit analysis</li>
                </ul>
                <a href="#" className="btn-secondary">Learn More</a>
              </div>
            </div>

            {/* Energy Generation */}
            <div className="service-card">
              <div className="service-image">
                <img src="http://www.srilankaenergies.lk/assets/deduruoya7-491368de.jpg" alt="Energy Generation" />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <h3>Energy Generation</h3>
                <p>Reliable power generation solutions utilizing diverse energy sources to meet Sri Lanka's growing needs.</p>
                <ul className="service-features">
                  <li>Renewable energy projects</li>
                  <li>Conventional power generation</li>
                  <li>Hybrid system implementation</li>
                  <li>Capacity expansion planning</li>
                </ul>
                <a href="#" className="btn-secondary">Learn More</a>
              </div>
            </div>

            {/* Aluminium Recycling */}
            <div className="service-card">
              <div className="service-image">
                <img src="	http://124.43.4.17:3000/uploads/1751723194875.jpg" alt="Aluminium Recycling" />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <h3>Aluminium Recycling</h3>
                <p>Environmentally responsible aluminium recycling services supporting Sri Lanka's circular economy.</p>
                <ul className="service-features">
                  <li>Collection and processing</li>
                  <li>Quality sorting techniques</li>
                  <li>Eco-friendly processing</li>
                  <li>Industrial grade output</li>
                </ul>
                <a href="#" className="btn-secondary">Learn More</a>
              </div>
            </div>

            {/* SLE Man Power */}
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="SLE Man Power" />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>SLE Man Power</h3>
                <p>Skilled workforce solutions specialized in energy sector projects and technical implementations.</p>
                <ul className="service-features">
                  <li>Technical staffing solutions</li>
                  <li>Project-based manpower</li>
                  <li>Training and certification</li>
                  <li>Specialized energy expertise</li>
                </ul>
                <a href="#" className="btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Energize Your Projects?</h2>
            <p>Contact us today to discuss how our services can power your success</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get In Touch</a>
              <a href="/projects" className="btn-secondary">View Our Projects</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;