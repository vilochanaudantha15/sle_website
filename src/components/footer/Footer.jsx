import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Company</h2>
            <span>About Us</span>
            <span>Our Vision & Mission</span>
            <span>Leadership</span>
            <span>News & Media</span>
            <span>Careers</span>
            <span>Contact</span>
          </div>
          <div className="item">
            <h2>Our Services</h2>
            <span>Solar Power Solutions</span>
            <span>Electrical Engineering</span>
            <span>Energy Audits</span>
            <span>Consultancy</span>
            <span>Project Management</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help Center</span>
            <span>Customer Service</span>
            <span>Installation Guidance</span>
            <span>Warranty & Repairs</span>
            <span>Safety Guidelines</span>
          </div>
          <div className="item">
            <h2>Legal</h2>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Licensing</span>
            <span>Compliance</span>
          </div>
          <div className="item">
            <h2>Connect</h2>
            <span>Facebook</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Blog</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Sri Lanka Energies (Pvt) Ltd</h2>
            <span>© 2025 Sri Lanka Energies. All rights reserved.</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="Twitter" />
              <img src="/img/facebook.png" alt="Facebook" />
              <img src="/img/linkedin.png" alt="LinkedIn" />
              <img src="/img/instagram.png" alt="Instagram" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="Language" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="Currency" />
              <span>LKR</span>
            </div>
            <img src="/img/accessibility.png" alt="Accessibility" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
