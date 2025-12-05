// src/pages/Admin/AdminApplications.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaDownload,
  FaSearch,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaCalendarAlt,
  FaUserCircle,
  FaSignOutAlt,
  FaFilter,
  FaSort,
  FaChevronDown,
  FaCrown,
  FaEye,
  FaStar,
  FaBell,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "./adminApplicationsUnique.scss";

// Clean relative URLs — works everywhere
const API_BASE = "/api";
const UPLOADS_BASE = "/uploads";

const AdminApplicationsUnique = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  // Get admin info
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const adminName = user?.full_name || "Admin";
  const adminEmail = user?.email || "admin@example.com";
  const adminInitials = adminName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Fetch applications on mount
  useEffect(() => {
    fetchApplications();

    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/jobs/applications/all`);
      setApplications(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError("Failed to load applications.");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signIn");
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "#10b981";
      case "rejected":
        return "#ef4444";
      case "pending":
        return "#f59e0b";
      default:
        return "#64748b";
    }
  };

  // Filter & Sort Applications
  const filteredApps = applications
    .filter((app) => {
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        app.fullName?.toLowerCase().includes(search) ||
        app.email?.toLowerCase().includes(search) ||
        app.interestedPosition?.toLowerCase().includes(search);
      const matchesStatus = statusFilter === "all" || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.created_at) - new Date(a.created_at);
      if (sortBy === "oldest") return new Date(a.created_at) - new Date(b.created_at);
      if (sortBy === "name") return a.fullName.localeCompare(b.fullName);
      return 0;
    });

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    approved: applications.filter((a) => a.status === "approved").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  // Loading State
  if (loading) {
    return (
      <div className="admin-loading-unique">
        <div className="modern-spinner-unique">
          <div className="spinner-ring-unique"></div>
          <div className="spinner-ring-unique"></div>
          <div className="spinner-ring-unique"></div>
        </div>
        <p>Loading applications...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="admin-error-unique">
        <div className="error-icon-unique">Warning</div>
        <p>{error}</p>
        <button onClick={fetchApplications} className="retry-btn-unique">
          Retry
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className={`admin-applications-page-unique ${isDarkMode ? "dark" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Effects */}
      <div className="background-elements-unique">
        <div className="bg-circle-1-unique"></div>
        <div className="bg-circle-2-unique"></div>
        <div className="bg-grid-unique"></div>
      </div>

      <div className="container-unique">
        {/* Navbar */}
        <nav className="admin-navbar-unique">
          <div className="nav-left-unique">
            <div className="brand-logo-unique">
              <FaCrown className="logo-icon-unique" />
              <span className="logo-text-unique">TalentFlow</span>
              <span className="logo-badge-unique">Admin</span>
            </div>
          </div>

          <div className="nav-center-unique">
            <div className="search-container-unique">
              <FaSearch className="search-icon-unique" />
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="modern-search-unique"
              />
            </div>
          </div>

          <div className="nav-right-unique">
            <button
              className="theme-toggle-unique"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button className="notifications-btn-unique">
              <FaBell />
              <span className="notification-badge-unique">3</span>
            </button>

            <div className="user-profile-container-unique" ref={userMenuRef}>
              <button
                className="user-profile-btn-unique"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="avatar-gradient-unique">
                  <span className="avatar-initials-unique">{adminInitials}</span>
                </div>
                <div className="user-info-unique">
                  <span className="user-name-unique">{adminName}</span>
                  <span className="user-role-unique">Super Admin</span>
                </div>
                <FaChevronDown
                  className={`dropdown-icon-unique ${showUserMenu ? "rotate" : ""}`}
                />
              </button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    className="user-dropdown-unique"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="dropdown-header-unique">
                      <div className="dropdown-avatar-unique">
                        <span>{adminInitials}</span>
                      </div>
                      <div>
                        <h4>{adminName}</h4>
                        <p>{adminEmail}</p>
                      </div>
                    </div>

                    <div className="dropdown-menu-unique">
                      <button
                        onClick={handleLogout}
                        className="menu-item-unique logout-item-unique"
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        {/* Stats */}
        <div className="dashboard-stats-unique">
          <motion.div className="stat-card-unique" whileHover={{ y: -5 }}>
            <div className="stat-icon-unique total-unique"><FaUsers /></div>
            <h3>{stats.total}</h3>
            <p>Total Applications</p>
          </motion.div>
          <motion.div className="stat-card-unique" whileHover={{ y: -5 }}>
            <div className="stat-icon-unique pending-unique"><FaCalendarAlt /></div>
            <h3>{stats.pending}</h3>
            <p>Pending Review</p>
          </motion.div>
          <motion.div className="stat-card-unique" whileHover={{ y: -5 }}>
            <div className="stat-icon-unique approved-unique"><FaStar /></div>
            <h3>{stats.approved}</h3>
            <p>Approved</p>
          </motion.div>
          <motion.div className="stat-card-unique" whileHover={{ y: -5 }}>
            <div className="stat-icon-unique rejected-unique"><FaTimes /></div>
            <h3>{stats.rejected}</h3>
            <p>Rejected</p>
          </motion.div>
        </div>

        {/* Main Content */}
        <main className="main-content-unique">
          <div className="content-header-unique">
            <div>
              <h1>Applications Dashboard</h1>
              <p className="subtitle-unique">Manage and review all job applications</p>
            </div>

            <div className="controls-unique">
              <div className="filter-controls-unique">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="modern-select-unique"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="modern-select-unique"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>

              <button className="refresh-btn-unique" onClick={fetchApplications}>
                Refresh
              </button>
              <button
                className="refresh-btn-unique"
                onClick={() => navigate("/jobmanagement")}
              >
                Current Jobs Vacancy
              </button>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="applications-grid-unique">
            <AnimatePresence>
              {filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  transition={{ delay: index * 0.05 }}
                  className="application-card-unique"
                >
                  <div className="card-header-unique">
                    <div className="applicant-avatar-unique">
                      <span>{app.fullName.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="applicant-info-unique">
                      <h3>{app.fullName}</h3>
                      <div className="applicant-meta-unique">
                        <span className="position-tag-unique">{app.interestedPosition}</span>
                        <span
                          className="status-badge-unique"
                          style={{ backgroundColor: getStatusColor(app.status) }}
                        >
                          {app.status || "pending"}
                        </span>
                      </div>
                    </div>
                    <span className="card-date-unique">
                      {new Date(app.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <div className="card-body-unique">
                    <div className="info-row-unique">
                      <FaEnvelope className="info-icon-unique" />
                      <span>{app.email}</span>
                    </div>
                    <div className="info-row-unique">
                      <FaPhone className="info-icon-unique" />
                      <span>{app.mobileNo}</span>
                    </div>
                    <div className="info-row-unique">
                      <FaBriefcase className="info-icon-unique" />
                      <span>{app.yearsOfExperience} years experience</span>
                    </div>
                  </div>

                  <div className="card-footer-unique">
                    <div className="card-actions-unique">
                      <button
                        className="view-btn-unique"
                        onClick={() => setSelectedApp(app)}
                      >
                        <FaEye /> View
                      </button>
                      <a
                        href={`${UPLOADS_BASE}/${app.cvFile}`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn-unique"
                      >
                        <FaDownload /> CV
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredApps.length === 0 && (
              <div className="no-results-unique">
                <div className="empty-state-unique">
                  <div className="empty-icon-unique">No applications</div>
                  <h3>No applications found</h3>
                  <p>Try adjusting your search or filters</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* End container-unique */}

      {/* Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="modal-overlay-unique"
            onClick={() => setSelectedApp(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modern-modal-unique"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header-unique">
                <div className="modal-avatar-unique">
                  <span>{selectedApp.fullName.charAt(0).toUpperCase()}</span>
                </div>
                <div className="modal-title-unique">
                  <h2>{selectedApp.fullName}</h2>
                  <p>{selectedApp.interestedPosition}</p>
                </div>
                <button
                  className="close-btn-unique"
                  onClick={() => setSelectedApp(null)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="modal-content-unique">
                <div className="detail-grid-unique">
                  <div className="detail-card-unique">
                    <FaEnvelope className="detail-icon-unique" />
                    <div><label>Email</label><p>{selectedApp.email}</p></div>
                  </div>
                  <div className="detail-card-unique">
                    <FaPhone className="detail-icon-unique" />
                    <div><label>Phone</label><p>{selectedApp.mobileNo}</p></div>
                  </div>
                  <div className="detail-card-unique">
                    <FaBriefcase className="detail-icon-unique" />
                    <div><label>Experience</label><p>{selectedApp.yearsOfExperience} years</p></div>
                  </div>
                  <div className="detail-card-unique">
                    <FaCalendarAlt className="detail-icon-unique" />
                    <div><label>Applied</label><p>{new Date(selectedApp.created_at).toLocaleString()}</p></div>
                  </div>
                </div>

                <div className="modal-actions-unique">
                  <a
                    href={`${UPLOADS_BASE}/${selectedApp.cvFile}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-download-btn-unique"
                  >
                    <FaDownload /> Download CV
                  </a>
                  <button className="modal-contact-btn-unique">
                    <FaEnvelope /> Contact Candidate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AdminApplicationsUnique;
