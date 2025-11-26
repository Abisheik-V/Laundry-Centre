import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHome, FaInfoCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaTshirt, FaSocks, FaBed, FaTshirt as FaTshirtAlt, FaTshirt as FaShirt, FaTshirt as FaTowel } from 'react-icons/fa';
import '../assets/style/style.css';

const Services = () => {
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

  const services = [
    {
      id: 1,
      icon: <FaTshirt className="service-icon" />,
      title: 'Wash & Fold',
      description: 'Professional washing, drying, and folding of your everyday clothes. We handle all types of fabrics with care.',
      price: '$2.50/lb',
      features: ['Same-day service', 'Eco-friendly detergents', 'Free pickup & delivery']
    },
    {
      id: 2,
      icon: <FaShirt className="service-icon" />,
      title: 'Dry Cleaning',
      description: 'Expert dry cleaning for your delicate and special garments. We treat each item with the utmost care.',
      price: 'From $5.99',
      features: ['Suit cleaning', 'Dress cleaning', 'Professional pressing']
    },
    {
      id: 3,
      icon: <FaBed className="service-icon" />,
      title: 'Home Linens',
      description: 'Deep cleaning for your bed sheets, comforters, blankets, and other home linens.',
      price: 'From $12.99',
      features: ['Bedding sets', 'Comforters', 'Pillows & cushions']
    },
    {
      id: 4,
      icon: <FaTowel className="service-icon" />,
      title: 'Bath & Kitchen',
      description: 'Specialized cleaning for towels, bath mats, tablecloths, and kitchen linens.',
      price: 'From $8.99',
      features: ['Bath towels', 'Hand towels', 'Kitchen towels']
    },
    {
      id: 5,
      icon: <FaTshirtAlt className="service-icon" />,
      title: 'Ironing Service',
      description: 'Professional pressing and ironing to keep your clothes looking crisp and neat.',
      price: 'From $3.50',
      features: ['Shirts', 'Pants', 'Dresses']
    },
    {
      id: 6,
      icon: <FaSocks className="service-icon" />,
      title: 'Special Care',
      description: 'Specialized cleaning for delicate items that require extra attention.',
      price: 'Price on request',
      features: ['Wool', 'Silk', 'Leather']
    }
  ];

  return (
    <div className="app">
      {/* Navbar - Same as Index */}
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
              <Link to="/services" className="nav-link active" onClick={toggleMenu}>
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
              <Link to="/register" className="nav-link login-btn" onClick={toggleMenu}>
                <FaUser /> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Services Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Professional laundry and dry cleaning services tailored to your needs</p>
          <div className="hero-buttons">
            <Link to="/pricing" className="btn btn-primary">View Pricing</Link>
            <Link to="/book-now" className="btn btn-secondary">Book Now</Link>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="services-page">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/book-now" className="btn btn-primary">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Schedule a Pickup</h3>
              <p>Book online or call us to schedule a pickup at your convenience.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Clean Your Clothes</h3>
              <p>Our experts clean your clothes using the best methods and eco-friendly products.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Delivery Back to You</h3>
              <p>We deliver your fresh, clean clothes right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Sign up now and get 20% off your first order!</p>
          <Link to="/register" className="btn btn-primary">Sign Up Now</Link>
        </div>
      </section>

      {/* Footer - Same as Index */}
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
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LaundryCenter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;