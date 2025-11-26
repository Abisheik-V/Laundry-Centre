import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHome, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/style/style.css';

const BookNow = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'wash-fold',
    date: '',
    time: '',
    address: '',
    specialInstructions: ''
  });

  // Calculate delivery time (4 hours after pickup time)
  const calculateDeliveryTime = () => {
    if (!formData.date || !formData.time) return '';

    const [hours, minutes] = formData.time.split(':');
    const pickupTime = new Date(formData.date);
    pickupTime.setHours(parseInt(hours, 10), parseInt(minutes, 10));

    const deliveryTime = new Date(pickupTime);
    deliveryTime.setHours(deliveryTime.getHours() + 4);

    return deliveryTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    // Show receipt modal instead of alert
    setShowReceipt(true);
    // You can add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const closeReceipt = () => {
    setShowReceipt(false);
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'wash-fold',
      date: '',
      time: '',
      address: '',
      specialInstructions: ''
    });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
              <Link to="/pricing" className="nav-link active" onClick={toggleMenu}>
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
              <Link to="/register" className="nav-link login-btn" onClick={toggleMenu}>
                <FaUser /> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Book Your Laundry Service</h1>
          <p>Schedule a pickup and we'll take care of the rest. Fast, reliable, and convenient laundry services at your doorstep.</p>
          <div className="hero-buttons">
            <a href="#booking-form" className="btn btn-primary">Book Now</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </header>

      {/* Booking Form Section */}
      <section id="booking-form" className="booking-section">
        <div className="container">
          <div className="section-header">
            <h2>Book a Service</h2>
            <p>Fill out the form below to schedule your laundry service</p>
          </div>
          <div className="booking-container">
            <div className="booking-form-container">
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
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

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (123) 456-7890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Type</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="wash-fold">Wash & Fold</option>
                    <option value="dry-cleaning">Dry Cleaning</option>
                    <option value="home-linens">Home Linens</option>
                    <option value="ironing">Ironing Service</option>
                    <option value="special-care">Special Care</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date"><FaCalendarAlt /> Pickup Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time"><FaClock /> Preferred Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address"><FaMapMarkerAlt /> Pickup Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full address"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="specialInstructions">Special Instructions</label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special instructions for our team?"
                    rows="2"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Book Now</button>
              </form>
            </div>

            <div className="booking-info">
              <h3>Why Choose Us?</h3>
              <div className="info-card">
                <div className="info-icon">🚚</div>
                <h4>Free Pickup & Delivery</h4>
                <p>We'll come to you to pick up and deliver your laundry.</p>
              </div>

              <div className="info-card">
                <div className="info-icon">⏱️</div>
                <h4>Same Day Service</h4>
                <p>Need it fast? We offer same-day service for most orders.</p>
              </div>

              <div className="info-card">
                <div className="info-icon">🌿</div>
                <h4>Eco-Friendly</h4>
                <p>We use environmentally friendly detergents and processes.</p>
              </div>

              <div className="contact-info">
                <h4>Need Help?</h4>
                <p><FaPhone /> <a href="tel:+1234567890">(123) 456-7890</a></p>
                <p><FaEnvelope /> <a href="mailto:info@laundrycenter.com">info@laundrycenter.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="modal-overlay" onClick={closeReceipt}>
          <div className="receipt-modal" onClick={e => e.stopPropagation()}>
            <div className="receipt-header">
              <h3>Booking Confirmation</h3>
              <button className="close-btn" onClick={closeReceipt}>&times;</button>
            </div>
            <div className="receipt-body">
              <div className="receipt-icon">
                <div className="icon-circle">
                  <FaCalendarAlt />
                </div>
              </div>
              <h4>Thank You, {formData.name}!</h4>
              <p>Your booking has been confirmed.</p>

              <div className="receipt-details">
                <div className="detail-row">
                  <span className="detail-label">Booking ID:</span>
                  <span className="detail-value">#{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Service:</span>
                  <span className="detail-value">
                    {formData.service === 'wash-fold' ? 'Wash & Fold' :
                      formData.service === 'dry-clean' ? 'Dry Cleaning' : 'Premium Laundry'}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Pickup Date & Time:</span>
                  <span className="detail-value">
                    {new Date(formData.date).toLocaleDateString()} at {formData.time}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Estimated Delivery:</span>
                  <span className="detail-value">
                    {new Date(formData.date).toLocaleDateString()} by {calculateDeliveryTime()}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{formData.address}</span>
                </div>
                {formData.specialInstructions && (
                  <div className="detail-row">
                    <span className="detail-label">Special Instructions:</span>
                    <span className="detail-value">{formData.specialInstructions}</span>
                  </div>
                )}
              </div>

              <div className="receipt-actions">
                <button className="btn btn-primary" onClick={closeReceipt}>Done</button>
                <button className="btn btn-secondary">
                  <FaPhone /> Call Support
                </button>
              </div>

              <div className="receipt-footer">
                <p>We'll send a confirmation email to {formData.email}</p>
                <p>For any changes, please contact our support team</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <li><Link to="/book-now">Book Now</Link></li>
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

export default BookNow;