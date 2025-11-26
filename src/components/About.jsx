import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHome, FaCheck, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../assets/style/style.css';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
              <Link to="/pricing" className="nav-link" onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" onClick={toggleMenu}>
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
          <h1>About LaundryCenter</h1>
          <p>Your trusted partner for all your laundry needs</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, LaundryCenter has been providing top-quality laundry services to our community. 
                What started as a small local business has grown into a trusted name in the industry, thanks to 
                our commitment to quality, reliability, and customer satisfaction.
              </p>
              <p>
                Our mission is to make your life easier by taking care of your laundry needs with the utmost 
                care and professionalism. We understand that your time is valuable, which is why we offer 
                convenient pickup and delivery services.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://rjkool.com/wp-content/uploads/2022/08/Tips-for-Commercial-Laundry-Equipment-Maintenance.jpg" 
                alt="Our laundry facility"
              />
            </div>
          </div>

          <div className="team-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Team Member 1"
                  />
                </div>
                <h3>Sarah Johnson</h3>
                <p className="position">Founder & CEO</p>
                <p className="bio">With over 10 years of experience in the laundry industry, Sarah founded LaundryCenter with a vision to revolutionize laundry services.</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Team Member 2"
                  />
                </div>
                <h3>Michael Chen</h3>
                <p className="position">Operations Manager</p>
                <p className="bio">Michael ensures that every piece of clothing is treated with the utmost care and attention to detail.</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Team Member 3"
                  />
                </div>
                <h3>Emily Rodriguez</h3>
                <p className="position">Customer Service</p>
                <p className="bio">Emily is dedicated to ensuring every customer has an exceptional experience with LaundryCenter.</p>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Quality</h3>
                <p>We use only the best detergents and equipment to ensure your clothes look their best.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">♻️</div>
                <h3>Sustainability</h3>
                <p>We're committed to eco-friendly practices that reduce our environmental impact.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⏱️</div>
                <h3>Convenience</h3>
                <p>With our easy scheduling and delivery options, we make laundry day effortless for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to experience the LaundryCenter difference?</h2>
          <p>Join thousands of satisfied customers who trust us with their laundry needs.</p>
          <div className="cta-buttons">
            <Link to="/book-now" className="btn btn-light">Book Now</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
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

export default About;