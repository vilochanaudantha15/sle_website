// src/pages/Admin/JobManagement.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBriefcase, FaPlus, FaEdit, FaTrash, FaEye,
  FaCalendarAlt, FaMapMarkerAlt, FaDollarSign,
  FaBusinessTime, FaTag, FaSearch, FaFilter,
  FaTimes, FaCheck, FaClock, FaFire, FaStar,
  FaExternalLinkAlt, FaCopy, FaShareAlt,
  FaChartLine, FaUsers, FaFileContract,
  FaSortAmountDown, FaSortAmountUp
} from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import "./jobManagement.scss";

const API_BASE_URL = "http://localhost:5000/api";

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    draft: 0,
    expired: 0
  });

  const navigate = useNavigate();
  const modalRef = useRef();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full-time",
    experience: "Mid-level",
    description: "",
    requirements: "",
    benefits: "",
    status: "active",
    deadline: "",
    tags: ""
  });

  useEffect(() => {
    fetchJobs();
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    calculateStats();
  }, [jobs]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
      setEditingJob(null);
      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "Full-time",
        experience: "Mid-level",
        description: "",
        requirements: "",
        benefits: "",
        status: "active",
        deadline: "",
        tags: ""
      });
    }
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/jobs`);
      setJobs(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load jobs. Please check if backend is running.");
      setLoading(false);
      console.error("Error fetching jobs:", err);
    }
  };

  const calculateStats = () => {
    const total = jobs.length;
    const active = jobs.filter(job => job.status === "active").length;
    const draft = jobs.filter(job => job.status === "draft").length;
    const expired = jobs.filter(job => job.status === "expired").length;
    
    setStats({ total, active, draft, expired });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJob) {
        // Update existing job
        await axios.put(`${API_BASE_URL}/jobs/${editingJob.id}`, formData);
        setSuccessMessage("Job updated successfully!");
      } else {
        // Create new job
        await axios.post(`${API_BASE_URL}/jobs`, formData);
        setSuccessMessage("Job created successfully!");
      }
      
      fetchJobs(); // Refresh the list
      setShowModal(false);
      setEditingJob(null);
      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "Full-time",
        experience: "Mid-level",
        description: "",
        requirements: "",
        benefits: "",
        status: "active",
        deadline: "",
        tags: ""
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error saving job:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to save job. Please try again.");
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title || "",
      company: job.company || "",
      location: job.location || "",
      salary: job.salary || "",
      type: job.type || "Full-time",
      experience: job.experience || "Mid-level",
      description: job.description || "",
      requirements: job.requirements || "",
      benefits: job.benefits || "",
      status: job.status || "active",
      deadline: job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : "",
      tags: Array.isArray(job.tags) ? job.tags.join(", ") : (job.tags || "")
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/jobs/${id}`);
      fetchJobs(); // Refresh the list
      setDeleteConfirm(null);
      setSuccessMessage("Job deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error deleting job:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to delete job. Please try again.");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "#10b981";
      case "draft": return "#f59e0b";
      case "expired": return "#ef4444";
      default: return "#64748b";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active": return <FaCheck className="status-icon" />;
      case "draft": return <FaClock className="status-icon" />;
      case "expired": return <FaTimes className="status-icon" />;
      default: return null;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-time": return "#6366f1";
      case "Part-time": return "#8b5cf6";
      case "Contract": return "#f59e0b";
      case "Remote": return "#10b981";
      case "Internship": return "#3b82f6";
      default: return "#64748b";
    }
  };

  const filteredJobs = jobs
    .filter(job => {
      const matchesSearch = [job.title, job.company, job.location].some(field =>
        field?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesStatus = statusFilter === "all" || job.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt || b.created_at) - new Date(a.createdAt || a.created_at);
        case "oldest":
          return new Date(a.createdAt || a.created_at) - new Date(b.createdAt || b.created_at);
        case "title":
          return a.title.localeCompare(b.title);
        case "salary-high":
          return (parseInt(b.salary) || 0) - (parseInt(a.salary) || 0);
        case "salary-low":
          return (parseInt(a.salary) || 0) - (parseInt(b.salary) || 0);
        default:
          return 0;
      }
    });

  if (loading) return (
    <div className="job-loading">
      <div className="liquid-spinner">
        <div className="liquid-drop liquid-drop-1"></div>
        <div className="liquid-drop liquid-drop-2"></div>
        <div className="liquid-drop liquid-drop-3"></div>
      </div>
      <p>Loading jobs...</p>
    </div>
  );

  return (
    <motion.div 
      className="job-management-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Error message display */}
      {error && (
        <div className="error-alert">
          <span>{error}</span>
          <button onClick={() => setError("")}>×</button>
        </div>
      )}

      {/* Success message display */}
      {successMessage && (
        <div className="success-alert">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage("")}>×</button>
        </div>
      )}

      {/* Liquid Background */}
      <div className="liquid-background">
        <div className="liquid-shape liquid-1"></div>
        <div className="liquid-shape liquid-2"></div>
        <div className="liquid-shape liquid-3"></div>
        <div className="liquid-shape liquid-4"></div>
        <div className="liquid-shape liquid-5"></div>
      </div>

      <div className="container">
        {/* Header */}
        <header className="page-header">
          <div className="header-content">
            <motion.div 
              className="header-icon-wrapper"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaBriefcase className="header-icon" />
            </motion.div>
            <div>
              <h1>Job Management</h1>
              <p className="subtitle">Manage and publish job vacancies</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="publish-btn"
            onClick={() => setShowModal(true)}
          >
            <FaPlus /> Publish New Job
          </motion.button>
        </header>

        {/* Stats Dashboard */}
        <div className="stats-dashboard">
          <motion.div 
            className="stat-card glass-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="stat-icon-wrapper total">
              <FaBriefcase className="stat-icon" />
            </div>
            <h3>{stats.total}</h3>
            <p>Total Jobs</p>
            <div className="stat-trend">
              <FaChartLine /> +12% this month
            </div>
          </motion.div>

          <motion.div 
            className="stat-card glass-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="stat-icon-wrapper active">
              <FaCheck className="stat-icon" />
            </div>
            <h3>{stats.active}</h3>
            <p>Active Jobs</p>
            <div className="stat-trend">
              <FaUsers /> {stats.active > 0 ? Math.floor(stats.active/stats.total*100) : 0}% of total
            </div>
          </motion.div>

          <motion.div 
            className="stat-card glass-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="stat-icon-wrapper draft">
              <FaClock className="stat-icon" />
            </div>
            <h3>{stats.draft}</h3>
            <p>Drafts</p>
            <div className="stat-trend">
              <FaFileContract /> {stats.draft > 0 ? Math.floor(stats.draft/stats.total*100) : 0}% pending
            </div>
          </motion.div>

          <motion.div 
            className="stat-card glass-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-icon-wrapper expired">
              <FaFire className="stat-icon" />
            </div>
            <h3>{stats.expired}</h3>
            <p>Expired</p>
            <div className="stat-trend">
              <FaChartLine /> Needs review
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="controls-section glass-card">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search jobs, companies, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="liquid-search"
            />
            <div className="search-actions">
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <FaFilter className="filter-icon" />
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
                className="liquid-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="expired">Expired</option>
              </select>
            </div>
            
            <div className="filter-group">
              <FaSortAmountDown className="filter-icon" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="liquid-select"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="salary-high">Salary (High to Low)</option>
                <option value="salary-low">Salary (Low to High)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="jobs-grid">
          <AnimatePresence>
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id || index}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  borderColor: "rgba(99, 102, 241, 0.3)"
                }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className="job-card glass-card"
              >
                {/* Job Header */}
                <div className="job-card-header">
                  <div className="job-type-badge" style={{ backgroundColor: getTypeColor(job.type) }}>
                    {job.type}
                  </div>
                  <div className="job-status" style={{ color: getStatusColor(job.status) }}>
                    {getStatusIcon(job.status)}
                    <span>{job.status}</span>
                  </div>
                </div>

                {/* Job Content */}
                <div className="job-card-content">
                  <div className="job-title-section">
                    <IoIosBusiness className="company-icon" />
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <p className="company-name">{job.company}</p>
                    </div>
                  </div>

                  <div className="job-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{job.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaDollarSign className="detail-icon" />
                      <span>{job.salary || "Negotiable"}</span>
                    </div>
                    <div className="detail-item">
                      <FaBusinessTime className="detail-icon" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="detail-item">
                      <FaCalendarAlt className="detail-icon" />
                      <span>{job.deadline ? new Date(job.deadline).toLocaleDateString() : "No deadline"}</span>
                    </div>
                  </div>

                  <div className="job-description">
                    <p>{job.description?.substring(0, 120)}...</p>
                  </div>

                  <div className="job-tags">
                    {Array.isArray(job.tags) && job.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag">
                        <FaTag /> {tag}
                      </span>
                    ))}
                    {Array.isArray(job.tags) && job.tags.length > 3 && (
                      <span className="tag-more">+{job.tags.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Job Actions */}
                <div className="job-card-actions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="action-btn view-btn"
                    onClick={() => navigate(`/jobs/${job.id}`)}
                  >
                    <FaEye /> View
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="action-btn edit-btn"
                    onClick={() => handleEdit(job)}
                  >
                    <FaEdit /> Edit
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="action-btn delete-btn"
                    onClick={() => setDeleteConfirm(job.id)}
                  >
                    <FaTrash /> Delete
                  </motion.button>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  <button className="quick-btn" title="Copy Job Link">
                    <FaCopy />
                  </button>
                  <button className="quick-btn" title="Share Job">
                    <FaShareAlt />
                  </button>
                  <button className="quick-btn" title="View Analytics">
                    <FaChartLine />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredJobs.length === 0 && (
          <motion.div 
            className="empty-state glass-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="empty-icon">📋</div>
            <h3>No jobs found</h3>
            <p>Try adjusting your search or create a new job vacancy</p>
            <button 
              className="create-btn"
              onClick={() => setShowModal(true)}
            >
              <FaPlus /> Create Your First Job
            </button>
          </motion.div>
        )}
      </div>

      {/* Create/Edit Job Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay liquid-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="job-modal glass-card"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="modal-header">
                <h2>{editingJob ? "Edit Job" : "Publish New Job"}</h2>
                <button 
                  className="close-modal"
                  onClick={() => {
                    setShowModal(false);
                    setEditingJob(null);
                    setFormData({
                      title: "",
                      company: "",
                      location: "",
                      salary: "",
                      type: "Full-time",
                      experience: "Mid-level",
                      description: "",
                      requirements: "",
                      benefits: "",
                      status: "active",
                      deadline: "",
                      tags: ""
                    });
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="job-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Job Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Senior Frontend Developer"
                      required
                      className="liquid-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      required
                      className="liquid-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Remote, New York, etc."
                      required
                      className="liquid-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Salary</label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      placeholder="e.g., $80,000 - $120,000"
                      className="liquid-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Job Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="liquid-select"
                      required
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Experience Level *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="liquid-select"
                      required
                    >
                      <option value="Entry-level">Entry-level</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior">Senior</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Status *</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="liquid-select"
                      required
                    >
                      <option value="active">Active</option>
                      <option value="draft">Draft</option>
                      <option value="expired">Expired</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Application Deadline</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="liquid-input"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Job Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe the job responsibilities..."
                      rows="4"
                      required
                      className="liquid-textarea"
                    ></textarea>
                  </div>

                  <div className="form-group full-width">
                    <label>Requirements</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="List the requirements..."
                      rows="3"
                      className="liquid-textarea"
                    ></textarea>
                  </div>

                  <div className="form-group full-width">
                    <label>Benefits</label>
                    <textarea
                      name="benefits"
                      value={formData.benefits}
                      onChange={handleInputChange}
                      placeholder="List the benefits..."
                      rows="3"
                      className="liquid-textarea"
                    ></textarea>
                  </div>

                  <div className="form-group full-width">
                    <label>Tags (comma separated)</label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      placeholder="e.g., React, Node.js, AWS, UI/UX"
                      className="liquid-input"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => {
                      setShowModal(false);
                      setEditingJob(null);
                      setFormData({
                        title: "",
                        company: "",
                        location: "",
                        salary: "",
                        type: "Full-time",
                        experience: "Mid-level",
                        description: "",
                        requirements: "",
                        benefits: "",
                        status: "active",
                        deadline: "",
                        tags: ""
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    {editingJob ? "Update Job" : "Publish Job"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="confirm-modal glass-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="confirm-icon">⚠️</div>
              <h3>Delete Job</h3>
              <p>Are you sure you want to delete this job? This action cannot be undone.</p>
              <div className="confirm-actions">
                <button
                  className="confirm-cancel"
                  onClick={() => setDeleteConfirm(null)}
                >
                  Cancel
                </button>
                <button
                  className="confirm-delete"
                  onClick={() => handleDelete(deleteConfirm)}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default JobManagement;