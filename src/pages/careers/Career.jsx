// src/components/Career.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaChevronRight,
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaHeart,
  FaArrowRight,
  FaCogs,
  FaProjectDiagram,
  FaHardHat,
  FaUserTie,
  FaWrench,
  FaFileAlt,
  FaTimes,
  FaUpload,
} from "react-icons/fa";
import "./Career.scss";

const Career = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    passportNo: "",
    jobIndustry: "",
    interestedPosition: "",
    experienceLocation: "",
    yearsOfExperience: "",
    cvFile: null,
  });

  // Fetch jobs from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => {
        setJobListings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        setError("Failed to load job openings. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Dynamic categories based on real data
  const uniqueCategories = [...new Set(jobListings.map((job) => job.category))];

  const jobCategories = [
    { id: "all", name: "All Positions", icon: <FaBriefcase />, count: jobListings.length },
    ...uniqueCategories.map((cat) => ({
      id: cat,
      name: cat,
      icon: getCategoryIcon(cat),
      count: jobListings.filter((j) => j.category === cat).length,
    })),
  ];

  const companyValues = [
    { icon: <FaUsers />, title: "Team Collaboration", description: "Work alongside industry experts in a supportive environment" },
    { icon: <FaGraduationCap />, title: "Growth Opportunities", description: "Continuous training and clear career progression paths" },
    { icon: <FaLightbulb />, title: "Innovation Driven", description: "Encourage creative solutions and cutting-edge technology" },
    { icon: <FaHeart />, title: "Work-Life Balance", description: "Flexible schedules and comprehensive wellness programs" },
  ];

  const handleJobClick = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData((prev) => ({
      ...prev,
      interestedPosition: job.title,
      jobIndustry: job.subcategory || job.category || "Renewable Energy",
    }));
    setShowApplicationForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cvFile: e.target.files[0] }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cvFile) {
      alert("Please upload your CV.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("fullName", formData.fullName);
    uploadData.append("mobileNo", formData.mobileNo);
    uploadData.append("email", formData.email);
    uploadData.append("passportNo", formData.passportNo);
    uploadData.append("jobIndustry", formData.jobIndustry);
    uploadData.append("interestedPosition", formData.interestedPosition);
    uploadData.append("experienceLocation", formData.experienceLocation);
    uploadData.append("yearsOfExperience", formData.yearsOfExperience);
    uploadData.append("cvFile", formData.cvFile);

    try {
      const res = await axios.post("http://localhost:5000/api/jobs/apply", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message || "Application submitted successfully!");
      setShowApplicationForm(false);
      setFormData({
        fullName: "", mobileNo: "", email: "", passportNo: "",
        jobIndustry: "", interestedPosition: "", experienceLocation: "",
        yearsOfExperience: "", cvFile: null
      });
      setSelectedJob(null);
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to submit application.";
      alert(msg);
    }
  };

  const filteredJobs = activeTab === "all"
    ? jobListings
    : jobListings.filter((job) => job.category === activeTab);

  function getCategoryIcon(category) {
    const icons = {
      Engineers: <FaCogs />,
      "Project Manager": <FaProjectDiagram />,
      "Project Engineer": <FaHardHat />,
      Superintendent: <FaUserTie />,
      "Skilled Labour": <FaWrench />,
      "Labour Office Clerk": <FaFileAlt />,
    };
    return icons[category] || <FaBriefcase />;
  }

  if (loading) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2>Loading career opportunities...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "100px 20px", color: "red" }}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <motion.div className="career-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="glass-morphisms">
        <div className="glass-shape shape-1"></div>
        <div className="glass-shape shape-2"></div>
        <div className="glass-shape shape-3"></div>
        <div className="glass-shape shape-4"></div>
      </div>

      {/* Hero Section */}
      <section className="career-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div className="hero-content" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h1>Power Your Future with Sri Lanka Energies</h1>
            <p>Join our mission to revolutionize renewable energy in Sri Lanka. Build your career with purpose.</p>
            <motion.button
              className="cta-button glass-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("job-openings").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Opportunities <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join-us">
        <div className="container">
          <div className="section-header">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Why Build Your Career With Us?
            </motion.h2>
            <p>Be part of a team that's shaping the future of sustainable energy</p>
          </div>

          <div className="values-grid">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="stats-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="stats-grid">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "15+", label: "Years Experience" },
                { number: "200+", label: "Team Members" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="job-openings" className="job-openings">
        <div className="container">
          <div className="section-header">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Current Career Opportunities
            </motion.h2>
            <p>Find your perfect role in our growing team of energy professionals</p>
          </div>

          <motion.div className="category-filters" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="categories-grid">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  className={`category-card glass-card ${activeTab === category.id ? "active" : ""}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h4>{category.name}</h4>
                    <span className="job-count">{category.count} Position{category.count !== 1 ? "s" : ""}</span>
                  </div>
                  <FaChevronRight className="arrow-icon" />
                </button>
              ))}
            </div>
          </motion.div>

          <div className="job-listings">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className={`job-card glass-card ${expandedJob === job.id ? "expanded" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="job-header" onClick={() => handleJobClick(job.id)}>
                    <div className="job-category">
                      <span className="category-icon">{getCategoryIcon(job.category)}</span>
                      <span className="category-label">{job.category}</span>
                    </div>
                    <div className="job-title-section">
                      <h3>{job.title}</h3>
                      {job.subcategory && <p className="subcategory">{job.subcategory}</p>}
                    </div>
                    <div className="job-meta">
                      <div className="meta-item"><FaMapMarkerAlt /><span>{job.location || "Sri Lanka"}</span></div>
                      <div className="meta-item"><FaBriefcase /><span>{job.type || "Full-time"}</span></div>
                    </div>
                    <div className="job-salary">
                      <span className="salary">{job.salary || "Competitive"}</span>
                    </div>
                  </div>

                  <div className="job-description">
                    <p>{job.description || "Join our dynamic team in renewable energy."}</p>
                  </div>

                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        className="job-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="details-grid">
                          <div className="detail-section">
                            <h4>Description</h4>
                            <p>{job.description || "No detailed description available."}</p>
                          </div>
                        </div>

                        <div className="action-buttons">
                          <motion.button
                            className="apply-now-btn glass-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleApplyClick(job)}
                          >
                            Apply Now
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="expand-indicator" onClick={() => handleJobClick(job.id)}>
                    <FaChevronRight className={expandedJob === job.id ? "expanded" : ""} />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-jobs glass-card">
                <h3>No positions currently available in this category</h3>
                <p>Check back soon for new opportunities!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Modal - 100% your original design */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            className="application-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowApplicationForm(false)}
          >
            <motion.div
              className="application-modal glass-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Apply for {selectedJob?.title}</h2>
                <button className="close-btn" onClick={() => setShowApplicationForm(false)}>
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="application-form">
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="glass-input" placeholder="Enter your full name" />
                  </div>

                  <div className="form-group">
                    <label>Mobile No *</label>
                    <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} required className="glass-input" placeholder="+94 77 123 4567" />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="glass-input" placeholder="you@example.com" />
                  </div>

                  <div className="form-group">
                    <label>Passport No *</label>
                    <input type="text" name="passportNo" value={formData.passportNo} onChange={handleInputChange} required className="glass-input" placeholder="e.g. N1234567" />
                  </div>

                  <div className="form-group">
                    <label>Job Industry / Area *</label>
                    <input type="text" name="jobIndustry" value={formData.jobIndustry} readOnly className="glass-input" />
                  </div>

                  <div className="form-group">
                    <label>Interested Job Position *</label>
                    <input type="text" name="interestedPosition" value={formData.interestedPosition} readOnly className="glass-input" />
                  </div>

                  <div className="form-group">
                    <label>Location of Experience *</label>
                    <input type="text" name="experienceLocation" value={formData.experienceLocation} onChange={handleInputChange} required className="glass-input" placeholder="e.g. Colombo, Dubai" />
                  </div>

                  <div className="form-group">
                    <label>Years of Experience *</label>
                    <input type="text" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleInputChange} required className="glass-input" placeholder="e.g. 5 years" />
                  </div>

                  <div className="form-group full-width">
                    <label>Upload CV *</label>
                    <div className="file-upload glass-input">
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                      <div className="upload-content">
                        <FaUpload />
                        <span>{formData.cvFile ? formData.cvFile.name : "Choose file (PDF, DOC, DOCX)"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowApplicationForm(false)}>
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    className="submit-btn glass-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Career;