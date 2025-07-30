import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import logo from "../../assets/logo.jpg";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
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
    if (servicesMenuOpen) setServicesMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setOpen(false);
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/" onClick={closeAllMenus}>
            <img src={logo} alt="Sri Lanka Energies Logo" className="logo-img" />
            <span className="text">Sri Lanka Energies</span>
          </Link>
        </div>

        {isMobile && (
          <div className="hamburger" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        <div className={`links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <Link className="link" to="/" onClick={closeAllMenus}>
            <span>Home</span>
          </Link>
          <Link className="link" to="/aboutus" onClick={closeAllMenus}>
            <span>About Us</span>
          </Link>
          
          {isMobile ? (
            <div className="mobile-services-container">
              <div className="services-link" onClick={toggleServicesMenu}>
                <span>Services</span>
                {servicesMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div className={`services-dropdown ${servicesMenuOpen ? "open" : ""}`}>
                <Link className="link" to="/services/solar-solutions" onClick={closeAllMenus}>
                  Solar Energy Systems
                </Link>
                <Link className="link" to="/services/wind-energy" onClick={closeAllMenus}>
                  Wind Energy Solutions
                </Link>
                <Link className="link" to="/services/energy-consulting" onClick={closeAllMenus}>
                  Energy Consulting
                </Link>
                <Link className="link" to="/services/energy-audits" onClick={closeAllMenus}>
                  Energy Audits
                </Link>
                <Link className="link" to="/services/ev-infrastructure" onClick={closeAllMenus}>
                  EV Charging Infrastructure
                </Link>
                <Link className="link" to="/services/biomass-energy" onClick={closeAllMenus}>
                  Biomass Energy Solutions
                </Link>
                <Link className="link" to="/services/energy-storage" onClick={closeAllMenus}>
                  Energy Storage Systems
                </Link>
              </div>
            </div>
          ) : (
            <Link className="link" to="/services" onClick={closeAllMenus}>
              <span>Services</span>
            </Link>
          )}
          
          <Link className="link" to="/projects" onClick={closeAllMenus}>
            <span>Projects</span>
          </Link>
          <Link className="link" to="/contact" onClick={closeAllMenus}>
            <span>Contact</span>
          </Link>
          
          {currentUser ? (
            <div className={`user ${isMobile ? "mobile-user" : ""}`} onClick={() => !isMobile && setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="avatar" />
              <span>{currentUser?.username}</span>
              {isMobile ? (
                <div className="mobile-options">
                  <Link className="link" to="/dashboard" onClick={closeAllMenus}>
                    Dashboard
                  </Link>
                  <Link className="link" to="/appointments" onClick={closeAllMenus}>
                    Appointments
                  </Link>
                  <Link className="link" to="/messages" onClick={closeAllMenus}>
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              ) : (
                open && (
                  <div className="options">
                    <Link className="link" to="/dashboard" onClick={closeAllMenus}>
                      Dashboard
                    </Link>
                    <Link className="link" to="/appointments" onClick={closeAllMenus}>
                      Appointments
                    </Link>
                    <Link className="link" to="/messages" onClick={closeAllMenus}>
                      Messages
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )
              )}
            </div>
          ) : (
            <>
             
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && !isMobile && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/services/solar-solutions">
              Solar Power Development
            </Link>
            <Link className="link menuLink" to="/services/wind-energy">
              Meter Board Manufacturing
            </Link>
            <Link className="link menuLink" to="/services/energy-consulting">
              Energy Consulting
            </Link>
            <Link className="link menuLink" to="/services/energy-audits">
              Energy Generation
            </Link>
            <Link className="link menuLink" to="/services/ev-infrastructure">
              Aluminium Recycling
            </Link>
            <Link className="link menuLink" to="/services/biomass-energy">
             SLE Man Power 
            </Link>
            
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;