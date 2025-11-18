import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import logo from "../../assets/logo.jpg";
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaChevronUp,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const navbarRef = useRef(null);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 10 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", isActive);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpen(false);
  };

  return (
    <nav 
      className={`navbar ${active ? "navbar--scrolled" : ""} ${
        pathname !== "/" ? "navbar--solid" : ""
      }`} 
      ref={navbarRef}
    >
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo" onClick={closeAllMenus}>
            <div className="navbar__logo-icon">
              <img src={logo} alt="Sri Lanka Energies" />
              <div className="logo-glow"></div>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-title">Sri Lanka Energies</span>
              <span className="navbar__logo-subtitle">Powering The Future</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__navigation">
          <div className="navbar__links">
            <Link to="/" className="navbar__link" onClick={closeAllMenus}>
              <span className="navbar__link-text">Home</span>
              <div className="navbar__link-underline"></div>
            </Link>
            
            <Link to="/aboutus" className="navbar__link" onClick={closeAllMenus}>
              <span className="navbar__link-text">About Us</span>
              <div className="navbar__link-underline"></div>
            </Link>

            {/* SERVICES — SIMPLE LINK */}
            <Link to="#services" className="navbar__link" onClick={closeAllMenus}>
              <span className="navbar__link-text">Services</span>
              <div className="navbar__link-underline"></div>
            </Link>

            <Link to="/project" className="navbar__link" onClick={closeAllMenus}>
              <span className="navbar__link-text">Projects</span>
              <div className="navbar__link-underline"></div>
            </Link>

            <Link to="/contact" className="navbar__link" onClick={closeAllMenus}>
              <span className="navbar__link-text">Contact</span>
              <div className="navbar__link-underline"></div>
            </Link>
          </div>
        </div>

        {/* User Section */}
        <div className="navbar__user-section">
          {currentUser ? (
            <div className="user-menu">
              <div 
                className="user-avatar" 
                onClick={() => setOpen(!open)}
              >
                <div className="avatar-container">
                  <img 
                    src={currentUser.img || "/img/noavatar.jpg"} 
                    alt={currentUser.username} 
                  />
                  <div className="avatar-status"></div>
                </div>
                <span className="user-name">{currentUser.username}</span>
                <FaChevronDown className="user-arrow" />
              </div>
              
              {open && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <div className="user-avatar-sm">
                      <img 
                        src={currentUser.img || "/img/noavatar.jpg"} 
                        alt={currentUser.username} 
                      />
                    </div>
                    <div className="user-details">
                      <span className="user-display-name">{currentUser.username}</span>
                      <span className="user-email">{currentUser.email}</span>
                    </div>
                  </div>
                  
                  <div className="dropdown-divider"></div>
                  
                  <Link to="/dashboard" className="dropdown-item" onClick={closeAllMenus}>
                    <FaUser className="item-icon" />
                    <span>Dashboard</span>
                  </Link>
                  
                  <Link to="/appointments" className="dropdown-item" onClick={closeAllMenus}>
                    <FaCog className="item-icon" />
                    <span>Appointments</span>
                  </Link>
                  
                  <Link to="/messages" className="dropdown-item" onClick={closeAllMenus}>
                    <FaCog className="item-icon" />
                    <span>Messages</span>
                  </Link>
                  
                  <div className="dropdown-divider"></div>
                  
                  <button className="dropdown-item dropdown-item--logout" onClick={handleLogout}>
                    <FaSignOutAlt className="item-icon" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="#login" className="btn btn--secondary">
                Sign In
              </Link>
             <Link to="/" className="btn btn--primary" onClick={closeAllMenus}>
  Get Started
</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar__toggle ${mobileMenuOpen ? "navbar__toggle--active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileMenuOpen ? "navbar__mobile--open" : ""}`}>
        <div className="mobile-menu">

          <div className="mobile-menu__header">
            <div className="mobile-user">
              {currentUser ? (
                <div className="mobile-user-info">
                  <div className="mobile-avatar">
                    <img 
                      src={currentUser.img || "/img/noavatar.jpg"} 
                      alt={currentUser.username} 
                    />
                  </div>
                  <div className="mobile-user-details">
                    <span className="user-name">{currentUser.username}</span>
                    <span className="user-email">{currentUser.email}</span>
                  </div>
                </div>
              ) : (
                <div className="mobile-auth">
                  <Link to="/login" className="btn btn--outline" onClick={closeAllMenus}>
                    Sign In
                  </Link>
                  <Link to="/" className="btn btn--primary" onClick={closeAllMenus}>
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="mobile-menu__content">
            <Link to="/" className="mobile-link" onClick={closeAllMenus}>
              <span>Home</span>
            </Link>
            
            <Link to="/aboutus" className="mobile-link" onClick={closeAllMenus}>
              <span>About Us</span>
            </Link>

            {/* SERVICES — SIMPLE MOBILE LINK */}
            <Link to="/services" className="mobile-link" onClick={closeAllMenus}>
              <span>Services</span>
            </Link>

            <Link to="/project" className="mobile-link" onClick={closeAllMenus}>
              <span>Projects</span>
            </Link>
            
            <Link to="/contact" className="mobile-link" onClick={closeAllMenus}>
              <span>Contact</span>
            </Link>

            {currentUser && (
              <>
                <div className="mobile-divider"></div>
                <Link to="/dashboard" className="mobile-link" onClick={closeAllMenus}>
                  <FaUser className="link-icon" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/appointments" className="mobile-link" onClick={closeAllMenus}>
                  <FaCog className="link-icon" />
                  <span>Appointments</span>
                </Link>
                <Link to="/messages" className="mobile-link" onClick={closeAllMenus}>
                  <FaCog className="link-icon" />
                  <span>Messages</span>
                </Link>
                <button className="mobile-link mobile-link--logout" onClick={handleLogout}>
                  <FaSignOutAlt className="link-icon" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
