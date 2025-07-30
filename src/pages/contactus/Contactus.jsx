import React from 'react';
import './contact.scss';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Connect With Us</h1>
            <p>We're here to help with your renewable energy needs. Reach out anytime.</p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">How to Reach Us</span>
            <h2>Multiple Ways to Connect</h2>
          </div>

          <div className="cards-grid">
            <div className="contact-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>info@srilankaenergies.com</p>
              <p>support@srilankaenergies.com</p>
              <a href="mailto:info@srilankaenergies.com" className="btn-secondary">
                Send Email
              </a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>0112186256</p>
              <p>0112186321 (24/7)</p>
              <a href="tel:+94112345678" className="btn-secondary">
                Call Now
              </a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3>Visit Us</h3>
              <p>Sethsiripaya Office Complex</p>
              <p>Battaramulla, Sri Jayawardenepura Kotte</p>
              <a href="https://maps.google.com/maps?q=Sethsiripaya+Office+Complex,+Battaramulla" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <span className="subtitle">Send Us a Message</span>
              <h2>Let's Start a Conversation</h2>
              <p>Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+94 76 123 4567" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="solar">Solar Solutions</option>
                  <option value="hydro">Hydro Power</option>
                  <option value="commercial">Commercial Projects</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Location</span>
            <h2>Find Us at Sethsiripaya, Battaramulla</h2>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4459002642175!2d79.91391508852573!3d6.903540898273963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259fee9a854eb%3A0x5e6db6fad9ae5723!2sSethsiripaya%20Office%20Complex%2C%20B240%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1753515702701!5m2!1sen!2slk" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Sri Lanka Energies Location at Sethsiripaya">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;