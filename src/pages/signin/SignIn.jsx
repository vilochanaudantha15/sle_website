// src/pages/signin/SignIn.jsx
import React, { useState } from 'react';
import './signin.scss';
import { FaApple, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);

      // Save authentication data
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setMessage('Login successful! Redirecting to Admin Panel...');

      // Redirect to /admin/applications (your existing route)
      setTimeout(() => {
        navigate('/admin/applications');
      }, 1200);

    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-panel">
        <h1 className="logo">Sri Lanka Energies</h1>

        <div className="form-content">
          <h2 className="title">Sign in to your account</h2>
          <p className="subtitle">Welcome back! Please enter your details.</p>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="admin@srilankaenergies.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <div className="password-input-group">
              <input
                type="password"
                name="password"
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="password-toggle">Eye</span>
            </div>

            <a href="#" className="forgot-password-link">Forgot Password?</a>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="social-login-separator">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-button apple">
              <FaApple /> Apple
            </button>
            <button type="button" className="social-button google">
              <FaGoogle /> Google
            </button>
          </div>
        </div>

        <div className="footer-links">
          <p>Don't have an account? <a href="/signup">Create an account</a></p>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <div className="signup-visual-panel">
        <div className="content-overlay">
          <div className="task-review-card">
            <strong>Task Review With Team</strong>
            <br />
            09:30am-10:00am
          </div>
          <div className="daily-meeting-card">
            <strong>Daily Meeting</strong>
            <br />
            10:00am-01:00pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;