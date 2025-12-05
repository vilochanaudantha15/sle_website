import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { powerPlants } from '../../data.js';
import './PowerPlantDetails.scss';

const PowerPlantDetails = () => {
  const { plantId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const plant = powerPlants.find((p) => p.id === Number(plantId));

  // THIS IS THE ONLY CHANGE — Scroll to top when page loads or plant changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [plantId]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % (plant.images?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + (plant.images?.length || 1)) % (plant.images?.length || 1)
    );
  };

  const getTabs = () => {
    switch (plant.plantType) {
      case 'HeadOffice':
      case 'MEMP':
      case 'SCALP':
        return ['overview', 'management', 'location', 'analytics'];
      case 'Production':
      case 'Recycling':
        return ['overview', 'operations', 'specifications', 'performance'];
      default:
        return ['overview', 'specifications', 'location', 'performance'];
    }
  };

  const tabs = getTabs();

  if (!plant) {
    return (
      <motion.div
        className="powerplant-details-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="powerplant-glass-morphisms">
          <div className="powerplant-glass-shape powerplant-shape-1"></div>
          <div className="powerplant-glass-shape powerplant-shape-2"></div>
          <div className="powerplant-glass-shape powerplant-shape-3"></div>
          <div className="powerplant-glass-shape powerplant-shape-4"></div>
        </div>

        <div className="powerplant-error-container">
          <motion.div className="powerplant-error-card powerplant-glass-card" variants={itemVariants}>
            <div className="powerplant-card-glow" />
            <motion.div
              className="powerplant-error-icon"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="powerplant-icon-wrapper">⚡</div>
            </motion.div>
            <h1 className="powerplant-error-title">Facility Not Found</h1>
            <p className="powerplant-error-description">
              The requested power generation facility is not available in our system database.
            </p>
            <div className="powerplant-button-group">
              <motion.button
                className="powerplant-btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="powerplant-btn-content">Return to Dashboard</span>
              </motion.button>
              <motion.button
                className="powerplant-btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <motion.div
        className="powerplant-details-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="powerplant-glass-morphisms">
          <div className="powerplant-glass-shape powerplant-shape-1"></div>
          <div className="powerplant-glass-shape powerplant-shape-2"></div>
          <div className="powerplant-glass-shape powerplant-shape-3"></div>
          <div className="powerplant-glass-shape powerplant-shape-4"></div>
        </div>

        <div className="powerplant-loading-container">
          <motion.div className="powerplant-loader" variants={itemVariants}>
            <div className="powerplant-loader-orbit">
              <motion.div
                className="powerplant-orbit-circle"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
              <motion.div
                className="powerplant-orbit-circle"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
              <motion.div
                className="powerplant-orbit-circle"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
            </div>
            <div className="powerplant-loader-content">
              <h3>Initializing Facility Data</h3>
              <p>Loading {plant.title} specifications</p>
              <motion.div
                className="powerplant-progress-bar"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="powerplant-progress-fill" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const plantMetrics = {
  kumbalgamuwa: {
    energyOutput: '7.04 GWH',
    outputUnit: 'GWH',
    availability: '79.34',
    efficiency: '94.7',
    waterFlowRate: '12.4 m³/s',
    turbineType: 'Francis Turbine',
  },
  deduruoya: {
    energyOutput: '4.98 GWH',
    outputUnit: 'GWH',
    availability: '72.32',
    efficiency: '92.3',
    waterFlowRate: '25.7 m³/s',
    turbineType: 'Kaplan Turbine',
  },
  biomed: {
    energyOutput: '6.69 GWH',
    outputUnit: 'GWH',
    availability: '33.29',
    efficiency: '89.6',
    waterFlowRate: '3.2 m³/s',
    turbineType: 'Pelton Turbine',
  },
};


  const currentMetrics = plantMetrics[plant.title.toLowerCase().replace(/\s+/g, '')] || {
    energyOutput: '',
    outputUnit: 'MWh',
    capacityFactor: '',
    availability: '',
    turbineType: '',
    efficiency: '',
  };

  const shouldShowStats = !['HeadOffice', 'MEMP', 'SCALP'].includes(plant.plantType);

  return (
    <motion.div
      className="powerplant-details-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="powerplant-glass-morphisms">
        <div className="powerplant-glass-shape powerplant-shape-1"></div>
        <div className="powerplant-glass-shape powerplant-shape-2"></div>
        <div className="powerplant-glass-shape powerplant-shape-3"></div>
        <div className="powerplant-glass-shape powerplant-shape-4"></div>
      </div>

      <motion.div className="powerplant-content" variants={containerVariants}>
        <motion.header className="powerplant-header" variants={itemVariants}>
          <div className="powerplant-header-content">
            <div className="powerplant-header-main">
              <div className="powerplant-title-section">
                <motion.div
                  className="powerplant-facility-badge"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="powerplant-badge-text">{plant.plantType}</span>
                  <div className="powerplant-badge-glow" />
                </motion.div>
                <h1 className="powerplant-facility-title">
                  <motion.span
                    className="powerplant-title-text"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {plant.title}
                  </motion.span>
                  <span className="powerplant-title-accent" />
                </h1>
                <motion.p
                  className="powerplant-facility-description"
                  variants={itemVariants}
                >
                  {plant.desc}
                </motion.p>
              </div>

              <div className="powerplant-header-actions">
                <motion.div
                  className="powerplant-status-widget"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="powerplant-status-content">
                    <motion.div
                      className="powerplant-status-indicator powerplant-live"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <div className="powerplant-pulse-dot" />
                      Operational
                    </motion.div>
                    <div className="powerplant-status-metric">
                      <span className="powerplant-metric-value">{currentMetrics.availability}%</span>
                      <span className="powerplant-metric-label">Plant Factor</span>
                    </div>
                  </div>
                </motion.div>

                <div className="powerplant-action-buttons">
                  <motion.button
                    className="powerplant-btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="powerplant-btn-icon">📊</span>
                    Report
                  </motion.button>
                  <motion.button
                    className="powerplant-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="powerplant-btn-icon">🔗</span>
                    Connect
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {shouldShowStats && (
          <motion.div
            className="powerplant-stats-overview"
            variants={containerVariants}
          >
            {[
              { icon: '⚡', label: 'Installed Capacity', value: plant.capacity, trend: '+2.3%' },
              { icon: '🌿', label: 'Daily Output', value: currentMetrics.energyOutput, trend: '+1.7%' },
              { icon: '📈', label: 'Water FlowRate', value: `${currentMetrics.waterFlowRate}%`, trend: '±0.0%' },
              { icon: '🌍', label: 'Turbine Type', value: currentMetrics.turbineType, trend: '+5.2%', highlight: true },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`powerplant-stat-card powerplant-glass-card ${stat.highlight ? 'powerplant-highlight' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="powerplant-stat-icon">{stat.icon}</div>
                <div className="powerplant-stat-content">
                  <div className="powerplant-stat-value">{stat.value}</div>
                  <div className="powerplant-stat-label">{stat.label}</div>
                </div>
                <div className="powerplant-stat-trend powerplant-up">{stat.trend}</div>
                <div className="powerplant-card-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div className="powerplant-content-grid" variants={containerVariants}>
          <motion.div className="powerplant-left-column" variants={itemVariants}>
            <motion.div
              className="powerplant-gallery-card powerplant-glass-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="powerplant-card-header">
                <h3 className="powerplant-card-title">Facility Media</h3>
                <div className="powerplant-card-actions">
                  <span className="powerplant-image-count">{plant.images?.length || 0} Assets</span>
                  <motion.button
                    className="powerplant-icon-btn powerplant-small"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="powerplant-btn-icon">⛶</span>
                  </motion.button>
                </div>
              </div>

              {plant.images && plant.images.length > 0 ? (
                <div className="powerplant-gallery-container">
                  <div className="powerplant-main-viewport">
                    <AnimatePresence>
                      <motion.div
                        key={currentImageIndex}
                        className="powerplant-image-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={plant.images[currentImageIndex]}
                          alt={`${plant.title} facility view`}
                          className="powerplant-main-image"
                        />
                        <div className="powerplant-image-overlay" />
                      </motion.div>
                    </AnimatePresence>

                    {plant.images.length > 1 && (
                      <>
                        <motion.button
                          className="powerplant-gallery-nav powerplant-prev"
                          onClick={prevImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <div className="powerplant-nav-arrow" />
                        </motion.button>
                        <motion.button
                          className="powerplant-gallery-nav powerplant-next"
                          onClick={nextImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <div className="powerplant-nav-arrow" />
                        </motion.button>
                      </>
                    )}

                    <div className="powerplant-view-controls">
                      <div className="powerplant-image-counter">
                        {currentImageIndex + 1} / {plant.images.length}
                      </div>
                      <div className="powerplant-zoom-controls">
                        <motion.button
                          className="powerplant-control-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          +
                        </motion.button>
                        <motion.button
                          className="powerplant-control-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          −
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <div className="powerplant-thumbnail-rail">
                    {plant.images.map((img, index) => (
                      <motion.div
                        key={index}
                        className={`powerplant-thumbnail-item ${index === currentImageIndex ? 'powerplant-active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="powerplant-thumbnail-frame">
                          <img src={img} alt={`View ${index + 1}`} />
                          <div className="powerplant-thumbnail-overlay" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="powerplant-media-empty">
                  <div className="powerplant-empty-icon">📷</div>
                  <p>No media assets available</p>
                  <motion.button
                    className="powerplant-btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Upload Images
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div className="powerplant-right-column" variants={itemVariants}>
            <motion.div className="powerplant-info-panel powerplant-glass-card" variants={itemVariants}>
              <div className="powerplant-enhanced-tabs">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab}
                    className={`powerplant-enhanced-tab ${activeTab === tab ? 'powerplant-active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={tabVariants}
                  >
                    <span className="powerplant-tab-label">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                    <div className="powerplant-tab-indicator" />
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="powerplant-enhanced-content"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabVariants}
                >
                  {activeTab === 'overview' && (
                    <div className="powerplant-content-panel">
                      <div className="powerplant-panel-header">
                        <h4>Facility Overview</h4>
                        <div className="powerplant-panel-badge">Active</div>
                      </div>
                      <motion.div
                        className="powerplant-panel-body"
                        variants={containerVariants}
                      >
                        <p className="powerplant-facility-bio">{plant.description}</p>
                        <div className="powerplant-feature-grid">
                          {(plant.plantType === 'HeadOffice' || plant.plantType === 'MEMP' || plant.plantType === 'SCALP'
                            ? [
                                { icon: '🏢', label: 'Organization', value: plant.companyName, type: 'text' },
                                { icon: '⚙️', label: 'Core Function', value: plant.function, type: 'text' },
                                { icon: '👥', label: 'Departments', value: plant.departments, type: 'badge' },
                                { icon: '📅', label: 'Established', value: plant.established, type: 'date' },
                                { icon: '🏭', label: 'Parent Entity', value: plant.parentCompany, type: 'text' },
                              ]
                            : [
                                { icon: '💪', label: 'Capacity', value: plant.capacity, type: 'highlight' },
                                { icon: '🔧', label: 'Technology', value: plant.type, type: 'text' },
                                { icon: '🟢', label: 'Status', value: plant.status, type: 'status' },
                                { icon: '📊', label: 'Commissioned', value: plant.commissioningDate, type: 'date' },
                                { icon: '📍', label: 'Location', value: plant.location, type: 'location' },
                              ]
                          ).map((feature, index) => (
                            <motion.div
                              key={index}
                              className="powerplant-feature-item"
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="powerplant-feature-icon">{feature.icon}</div>
                              <div className="powerplant-feature-content">
                                <span className="powerplant-feature-label">{feature.label}</span>
                                <span className={`powerplant-feature-value powerplant-${feature.type}`}>{feature.value}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'specifications' && !['HeadOffice', 'MEMP', 'SCALP'].includes(plant.plantType) && (
                    <div className="powerplant-content-panel">
                      <div className="powerplant-panel-header">
                        <h4>Technical Specifications</h4>
                      </div>
                      <motion.div
                        className="powerplant-panel-body"
                        variants={containerVariants}
                      >
                        <div className="powerplant-specs-display">
                          {plant.specifications &&
                            Object.entries(plant.specifications).map(([key, value]) => (
                              <motion.div
                                key={key}
                                className="powerplant-spec-item"
                                variants={itemVariants}
                              >
                                <div className="powerplant-spec-header">
                                  <span className="powerplant-spec-key">
                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                  </span>
                                  <div className="powerplant-spec-dots" />
                                </div>
                                <span className="powerplant-spec-value">{value.toString()}</span>
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'location' && (
                    <div className="powerplant-content-panel">
                      <div className="powerplant-panel-header">
                        <h4>Geographic Location</h4>
                      </div>
                      <motion.div
                        className="powerplant-panel-body"
                        variants={containerVariants}
                      >
                        <div className="powerplant-location-display">
                          <div className="powerplant-coordinates-panel">
                            <motion.div
                              className="powerplant-coord-item"
                              variants={itemVariants}
                            >
                              <label>Latitude</label>
                              <div className="powerplant-coord-value">{plant.coordinates.lat}</div>
                            </motion.div>
                            <motion.div
                              className="powerplant-coord-item"
                              variants={itemVariants}
                            >
                              <label>Longitude</label>
                              <div className="powerplant-coord-value">{plant.coordinates.lng}</div>
                            </motion.div>
                          </div>
                          <div className="powerplant-map-visualization">
                            <motion.div
                              className="powerplant-map-container"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="powerplant-map-grid" />
                              <motion.div
                                className="powerplant-location-pin"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                              >
                                <div className="powerplant-pin-core" />
                                <div className="powerplant-pin-ripple" />
                                <div className="powerplant-pin-ripple powerplant-delay" />
                              </motion.div>
                              <div className="powerplant-map-overlay">
                                <div className="powerplant-location-info">
                                  <strong>{plant.location}</strong>
                                  <span>Power Generation Facility</span>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'performance' && (
                    <div className="powerplant-content-panel">
                      <div className="powerplant-panel-header">
                        <h4>Performance Analytics</h4>
                      </div>
                      <motion.div
                        className="powerplant-panel-body"
                        variants={containerVariants}
                      >
                        <div className="powerplant-analytics-dashboard">
                          {[
                            { icon: '⚡', value: '98.2%', label: 'Operational Uptime', trend: '+0.3%' },
                            { icon: '🔧', value: '24/7', label: 'Monitoring Active', trend: 'Active' },
                            { icon: '🌱', value: '99.8%', label: 'Compliance Rate', trend: '+0.1%' },
                          ].map((analytic, index) => (
                            <motion.div
                              key={index}
                              className="powerplant-analytics-card"
                              variants={itemVariants}
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="powerplant-analytics-icon">{analytic.icon}</div>
                              <div className="powerplant-analytics-content">
                                <div className="powerplant-analytics-value">{analytic.value}</div>
                                <div className="powerplant-analytics-label">{analytic.label}</div>
                                <div className="powerplant-analytics-trend powerplant-up">{analytic.trend}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PowerPlantDetails;