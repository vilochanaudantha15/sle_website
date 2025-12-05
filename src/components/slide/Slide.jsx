import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { powerPlants } from '../../data.js';
import './Slide.scss';

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ slidesToShow = 3 }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Arrow key navigation - WORKS PERFECTLY with react-slick
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      if (!sliderRef.current) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          sliderRef.current.slickPrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          sliderRef.current.slickNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTileClick = (plantId) => {
    navigate(`/plant/${plantId}`);
  };

  const handleBeforeChange = (currentSlide, nextSlide) => {
    setActiveIndex(nextSlide);
  };

  // react-slick settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1.1 : slidesToShow,
    slidesToScroll: 1,
    centerMode: isMobile,
    centerPadding: isMobile ? '15px' : '0px',
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          centerMode: true,
          centerPadding: '15px',
        }
      }
    ]
  };

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const renderQuickStats = (plant) => {
    const isHeadOffice = plant.id === 'headoffice';
    if (isHeadOffice || !plant.capacity) return null;

    return (
      <div className="stat">
        <span className="stat-value">{plant.capacity}</span>
        <span className="stat-label">MW</span>
      </div>
    );
  };

  return (
    <div className="slide-modern">
      <div className="container">
        {/* Header - Same as before */}
        <div className="section-header">
          <div className="header-content">
            <div className="title-wrapper">
           
              
            </div>
            
          </div>

          <div className="header-controls">
            <div className="slider-nav">
              <button className="nav-btn prev" onClick={handlePrev}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="nav-btn next" onClick={handleNext}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="slide-counter">
              <span className="current">{activeIndex + 1}</span>
              <span className="divider">/</span>
              <span className="total">{powerPlants.length}</span>
            </div>
          </div>
        </div>

        {/* Carousel with react-slick */}
        <div className="carousel-wrapper">
          <Slider ref={sliderRef} {...settings} className="modern-carousel">
            {powerPlants.map((plant, index) => (
              <div
                key={plant.id}
                className={`slide-card ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleTileClick(plant.id)}
              >
                <div className="card-inner">
                  {/* Card content - same as before */}
                  <div className="card-image">
                    <img src={plant.images[0] || 'https://via.placeholder.com/400x300'} alt={plant.title} />
                    <div className="image-overlay" />
                    <div className="card-badge">
                      <span className="badge-text">{plant.type || 'Energy'}</span>
                    </div>
                    <div className="card-actions">
                      <button className="action-btn favorite" onClick={(e) => e.stopPropagation()}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                    <div className="quick-stats">
                      {renderQuickStats(plant)}
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="content-main">
                      <div className="plant-header">
                        <h3 className="plant-title">{plant.title}</h3>
                        <div className="status-indicator active"></div>
                      </div>
                      <p className="plant-description">{plant.desc}</p>
                      <div className="plant-features">
                        <div className="feature">
                          <div className="feature-icon">⭐</div>
                          <span>Renewable</span>
                        </div>
                        <div className="feature">
                          <div className="feature-icon">⏰</div>
                          <span>24/7</span>
                        </div>
                        <div className="feature">
                          <div className="feature-icon">🌿</div>
                          <span>Eco-Friendly</span>
                        </div>
                      </div>
                    </div>
                    <div className="content-footer">
                      <button className="cta-button">
                        <span>Explore Facility</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Progress & Dots - same as before */}
        <div className="slider-controls">
          <div className="slider-progress">
            <div className="progress-fill" style={{ width: `${((activeIndex + 1) / powerPlants.length) * 100}%` }} />
          </div>
          <div className="slider-dots">
            {powerPlants.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;