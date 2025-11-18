import React, { useState } from "react";
import "./Footer.scss";
import logo from "../../assets/logo.jpg";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Powered with Latest Updates</h3>
              <p>Subscribe to our newsletter for renewable energy insights and project updates</p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn">
                  {isSubscribed ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Subscribe
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <img src={logo} alt="Sri Lanka Energies" className="logo-image" />
                <div className="brand-text">
                  <h2>Sri Lanka Energies</h2>
                  <span className="brand-tagline">Powering a Sustainable Future</span>
                </div>
              </div>
              <p className="brand-description">
                Leading renewable energy solutions provider in Sri Lanka, 
                committed to delivering innovative and sustainable power generation.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <span>Sethsiripaya Office Complex</span>
                    <span>Battaramulla, Sri Jayawardenepura Kotte</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22 20.52 21.53 20.99 20.97 21.08C20.16 21.21 19.31 21.29 18.42 21.29C10.05 21.29 3.20999 14.45 3.20999 6.08C3.20999 5.19 3.28999 4.34 3.41999 3.53C3.50999 2.97 3.97999 2.5 4.57999 2.5H7.57999C8.12999 2.5 8.57999 2.95 8.57999 3.5C8.57999 4.03 8.62999 4.54 8.71999 5.04C8.84999 5.78 8.57999 6.53 8.00999 7.01L7.08999 7.79C7.95999 9.83 9.16999 11.04 11.21 11.91L12 11.16C12.47 10.69 13.22 10.42 13.96 10.55C14.46 10.64 14.97 10.69 15.5 10.69C16.05 10.69 16.5 11.14 16.5 11.69V14.69C16.5 15.24 16.05 15.69 15.5 15.69Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <span>+94 11 218 6286</span>
                    <span>+94 11 218 6321 (24/7 Support)</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <span>general@slenergies.lk</span>
                    <span>general@slenergies.lk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <div className="link-group">
                <h3 className="link-title">Company</h3>
                <ul className="link-list">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="#vision">Vision & Mission</a></li>
                  <li><a href="#news">News & Media</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#leadership">Leadership</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h3 className="link-title">Our Services</h3>
                <ul className="link-list">
                  <li><a href="#solar-power">Solar Power Solutions</a></li>
                  <li><a href="#power-generation">Power Generation</a></li>
                  <li><a href="#meter-enclosure">Meter Enclosure</a></li>
                  <li><a href="#aluminium-recycling">Aluminium Recycling</a></li>
                  <li><a href="#manpower">Man Power Services</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h3 className="link-title">Support</h3>
                <ul className="link-list">
                  <li><a href="#help-center">Help Center</a></li>
                  <li><a href="#customer-service">Customer Service</a></li>
                  <li><a href="#installation">Installation Guidance</a></li>
                  <li><a href="#warranty">Warranty & Repairs</a></li>
                  <li><a href="#safety">Safety Guidelines</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h3 className="link-title">Legal</h3>
                <ul className="link-list">
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#licensing">Licensing</a></li>
                  <li><a href="#compliance">Compliance</a></li>
                  <li><a href="#cookies">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="copyright">
              <span>© 2025 Sri Lanka Energies (Pvt) Ltd. All rights reserved.</span>
              <div className="legal-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
                <a href="/sitemap">Sitemap</a>
              </div>
            </div>

            <div className="footer-actions">
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C8.396 0 7.987.016 6.756.072 5.527.127 4.713.333 3.995.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.857.127 5.672.072 6.901.016 8.13 0 8.54 0 12.017c0 3.476.016 3.887.072 5.116.055 1.229.261 2.044.558 2.762.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.718.297 1.533.503 2.762.558 1.23.056 1.64.072 5.117.072 3.476 0 3.887-.016 5.116-.072 1.229-.055 2.044-.261 2.762-.558.79-.306 1.459-.717 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.718.503-1.533.558-2.762.056-1.23.072-1.64.072-5.117 0-3.476-.016-3.887-.072-5.116-.055-1.229-.261-2.044-.558-2.762-.306-.79-.717-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.718-.297-1.533-.503-2.762-.558C15.87.016 15.46 0 12.017 0zm0 2.158c3.413 0 3.808.014 5.026.07 1.2.054 1.85.25 2.284.415.57.217.976.477 1.403.904.427.427.687.833.904 1.403.165.434.361 1.084.415 2.284.056 1.218.07 1.613.07 5.026 0 3.413-.014 3.808-.07 5.026-.054 1.2-.25 1.85-.415 2.284-.217.57-.477.976-.904 1.403-.427.427-.833.687-1.403.904-.434.165-1.084.361-2.284.415-1.218.056-1.613.07-5.026.07-3.413 0-3.808-.014-5.026-.07-1.2-.054-1.85-.25-2.284-.415-.57-.217-.976-.477-1.403-.904-.427-.427-.687-.833-.904-1.403-.165-.434-.361-1.084-.415-2.284-.056-1.218-.07-1.613-.07-5.026 0-3.413.014-3.808.07-5.026.054-1.2.25-1.85.415-2.284.217-.57.477-.976.904-1.403.427-.427.833-.687 1.403-.904.434-.165 1.084-.361 2.284-.415 1.218-.056 1.613-.07 5.026-.07z"/>
                    <path d="M12.017 5.838a6.18 6.18 0 1 0 0 12.358 6.18 6.18 0 0 0 0-12.358zm0 10.177a3.997 3.997 0 1 1 0-7.994 3.997 3.997 0 0 1 0 7.994z"/>
                    <circle cx="18.406" cy="5.595" r="1.439"/>
                  </svg>
                </a>
              </div>

              <div className="utility-links">
                <button className="utility-btn" aria-label="Change Language">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>English</span>
                </button>

                <button className="utility-btn" aria-label="Change Currency">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>LKR</span>
                </button>

                <button className="utility-btn" aria-label="Accessibility Options">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.75V19.25M18.25 12H5.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.25 6.75H9.75V17.25H14.25V6.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;