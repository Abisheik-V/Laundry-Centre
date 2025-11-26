import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHome, FaLock, FaEnvelope, FaPhone, FaUserPlus, FaSignInAlt, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/style/style.css';

const Register = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log('Login data:', { email: formData.email, password: formData.password });
      // Redirect to home after successful login
      navigate('/');
    } else {
      // Handle signup logic
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log('Signup data:', formData);
      // Redirect to login after successful signup
      setIsLogin(true);
      alert('Registration successful! Please login.');
    }
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">Laundry<span>Center</span></Link>
          
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          
          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                <FaHome className="nav-icon" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link" onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link login-btn active" onClick={toggleMenu}>
                <FaUser /> {isLogin ? 'Login' : 'Sign Up'}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h1>
          <p>{isLogin ? 'Sign in to access your laundry services and manage your account' : 'Join us today for fast, reliable, and professional laundry services'}</p>
          <div className="hero-buttons">
            <button 
              className={`btn ${isLogin ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`btn ${!isLogin ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Auth Section */}
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-tabs">
              <button 
                className={`tab-btn ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                <FaSignInAlt /> Login
              </button>
              <button 
                className={`tab-btn ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                <FaUserPlus /> Sign Up
              </button>
            </div>

            <div className="auth-form-container">
              <h2>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
              <p>{isLogin ? 'Sign in to access your account' : 'Join us today for a better laundry experience'}</p>
              
              <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <div className="input-group">
                      <span className="input-icon"><FaUser /></span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={!isLogin}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-group">
                    <span className="input-icon"><FaEnvelope /></span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="input-group">
                      <span className="input-icon"><FaPhone /></span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required={!isLogin}
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <span className="input-icon"><FaLock /></span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your password"
                      minLength="6"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-group">
                      <span className="input-icon"><FaLock /></span>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={!isLogin}
                        placeholder="Confirm your password"
                        minLength="6"
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="form-options">
                    <label className="remember-me">
                      <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <Link to="/forgot-password" className="forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-block">
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <div className="auth-divider">
                  <span>or</span>
                </div>

                <div className="social-login">
                  <button type="button" className="btn btn-social btn-google">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
                    {isLogin ? 'Login with Google' : 'Sign up with Google'}
                  </button>
                </div>

                <p className="auth-toggle">
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                  <button 
                    type="button" 
                    className="toggle-link"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LaundryCenter</h3>
            <p>Your trusted partner for all your laundry needs. Fast, reliable, and professional service.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><FaMapMarkerAlt /> 123 Laundry St, Clean City</li>
              <li><FaPhone /> (123) 456-7890</li>
              <li><FaEnvelope /> info@laundrycenter.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Business Hours</h3>
            <ul className="business-hours">
              <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LaundryCenter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;