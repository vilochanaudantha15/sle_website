import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import { powerPlants } from '../../data.js';
import './Slide.scss';

const Slide = ({ slidesToShow = 3, arrowsScroll = 1 }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!sliderRef.current) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          sliderRef.current.prev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          sliderRef.current.next();
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

  const handleBeforeChange = useCallback((oldIndex, newIndex) => {
    setActiveIndex(newIndex);
  }, []);

  const getResponsiveSettings = () => {
    return {
      slidesToShow: isMobile ? 1.1 : slidesToShow,
      centerMode: isMobile,
      centerPadding: isMobile ? '10px' : '0',
      arrowsScroll: isMobile ? 1 : arrowsScroll,
    };
  };

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Helper to render the correct quick-stats per plant
  const renderQuickStats = (plant) => {
    const isHeadOffice = plant.id === 'headoffice';

    if (isHeadOffice) {
      // Head Office → show nothing
      return null;
    }

    // Regular power plants → show MW + Plant Factor (no Eff.)
    return (
      <>
        <div className="stat">
          <span className="stat-value">{plant.capacity || '250'}</span>
          <span className="stat-label">MW</span>
        </div>
        <div className="stat">
          <span className="stat-value">{plant.factor || '92'}</span>
          <span className="stat-label">Plant Factor %</span>
        </div>
      </>
    );
  };

  return (
    <div className="slide-modern">
      <div className="container">
        {/* Header unchanged */}
        <div className="section-header">
          <div className="header-content">
            <div className="title-wrapper">
              <span className="section-subtitle">Advanced Energy Solutions</span>
              <h2 className="section-title">
                Our <span className="gradient-text">Power Facilities</span>
              </h2>
            </div>
            <p className="section-description">
              Discover our state-of-the-art energy facilities driving sustainable power generation and innovative energy solutions
            </p>
          </div>

          <div className="header-controls">
            <div className="slider-nav">
              <button
                className="nav-btn prev"
                onClick={() => sliderRef.current?.prev()}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="nav-btn next"
                onClick={() => sliderRef.current?.next()}
                aria-label="Next slide"
              >
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

        {/* Carousel */}
        <div className="carousel-wrapper">
          <Slider
            ref={sliderRef}
            {...getResponsiveSettings()}
            beforeChange={handleBeforeChange}
            className="modern-carousel"
            key={isMobile ? 'mobile' : 'desktop'}
          >
            {powerPlants.map((plant, index) => (
              <div
                key={plant.id}
                className={`slide-card ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleTileClick(plant.id)}
              >
                <div className="card-inner">
                  {/* Image Section */}
                  <div className="card-image">
                    <img
                      src={plant.images[0] || 'https://via.placeholder.com/400x300'}
                      alt={plant.title}
                      loading="lazy"
                    />
                    <div className="image-overlay" />

                    <div className="card-badge">
                      <span className="badge-text">{plant.type || 'Energy'}</span>
                    </div>

                    <div className="card-actions">
                      <button className="action-btn favorite" aria-label="Add to favorites">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Conditional Quick Stats */}
                    <div className="quick-stats">
                      {renderQuickStats(plant)}
                    </div>
                  </div>

                  {/* Content unchanged */}
                  <div className="card-content">
                    <div className="content-main">
                      <div className="plant-header">
                        <h3 className="plant-title">{plant.title}</h3>
                        <div className="status-indicator active"></div>
                      </div>

                      <p className="plant-description">{plant.desc}</p>

                      <div className="plant-features">
                        <div className="feature">
                          <div className="feature-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 2L13.09 8.26L20 9L14.55 13.47L16.18 20L12 16.77L7.82 20L9.45 13.47L4 9L10.91 8.26L12 2Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <span>Renewable</span>
                        </div>
                        <div className="feature">
                          <div className="feature-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <span>24/7</span>
                        </div>
                        <div className="feature">
                          <div className="feature-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M22 12H2M12 2L12 22M2 12L12 2L22 12M12 22L22 12" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <span>Eco-Friendly</span>
                        </div>
                      </div>
                    </div>

                    <div className="content-footer">
                      <button className="cta-button">
                        <span>Explore Facility</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Progress & Dots unchanged */}
        <div className="slider-controls">
          <div className="slider-progress">
            <div
              className="progress-fill"
              style={{ width: `${((activeIndex + 1) / powerPlants.length) * 100}%` }}
            />
          </div>

          <div className="slider-dots">
            {powerPlants.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;