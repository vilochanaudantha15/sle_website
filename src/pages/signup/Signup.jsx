import React, { useState } from 'react';
import './signup.scss';
import { FaApple, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // optional, for redirect

const SignupPage = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      setMessage(res.data.message);
      setTimeout(() => navigate('/signin'), 2000); // redirect to signin after success
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Left Panel: Form */}
      <div className="signup-form-panel">
        <h1 className="logo">Sri Lanka Energies</h1>

        <div className="form-content">
          <h2 className="title">Create an account</h2>
          <p className="subtitle">Sign up and get 30 day free trial</p>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label htmlFor="full-name">Full name</label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              placeholder="Amélie Laurent"
              value={formData.full_name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="amelielaurent7622@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
              <span className="password-toggle">Eye</span>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Creating Account...' : 'Submit'}
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
          <p>Already have an account? <a href="/signin">Sign in</a></p>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      {/* Right Panel */}
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

export default SignupPage;