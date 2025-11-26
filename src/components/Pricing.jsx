import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHome, FaCheck, FaTshirt, FaSocks, FaBed, FaTshirt as FaTowel, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../assets/style/style.css';

const Pricing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('laundry');

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

  const pricingPlans = {
    laundry: [
      {
        name: "Basic Wash",
        price: "₹150",
        per: "per 5kg",
        popular: false,
        features: [
          "Wash & Fold",
          "Same Day Service",
          "Eco-friendly Detergent",
          "Free Pickup & Delivery",
          "5kg Minimum"
        ]
      },
      {
        name: "Premium Care",
        price: "₹250",
        per: "per 5kg",
        popular: true,
        features: [
          "Wash, Dry & Fold",
          "Same Day Service",
          "Premium Detergent",
          "Free Pickup & Delivery",
          "5kg Minimum",
          "Fabric Softener"
        ]
      },
      {
        name: "Family Pack",
        price: "₹1,000",
        per: "per month",
        popular: false,
        features: [
          "Up to 30kg per month",
          "Wash, Dry & Fold",
          "Free Pickup & Delivery",
          "Monthly Subscription",
          "Priority Service"
        ]
      }
    ],
    dryCleaning: [
      {
        name: "Shirt",
        price: "₹100",
        per: "per item",
        popular: false
      },
      {
        name: "Pants",
        price: "₹120",
        per: "per item",
        popular: false
      },
      {
        name: "Suit (2pc)",
        price: "₹400",
        per: "per set",
        popular: true
      },
      {
        name: "Dress",
        price: "₹250",
        per: "per item",
        popular: false
      },
      {
        name: "Coat/Blazer",
        price: "₹300",
        per: "per item",
        popular: false
      },
      {
        name: "Sweater",
        price: "₹180",
        per: "per item",
        popular: false
      }
    ]
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
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that works best for your laundry needs</p>
          <div className="hero-buttons">
            <a href="#pricing-plans" className="btn btn-primary">View Plans</a>
            <Link to="/book-now" className="btn btn-secondary">Book Now</Link>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section id="pricing-plans" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Pricing Plans</h2>
            <p>Choose the plan that works best for you</p>
            
            <div className="pricing-tabs">
              <button 
                className={`tab-btn ${activeTab === 'laundry' ? 'active' : ''}`}
                onClick={() => setActiveTab('laundry')}
              >
                <FaTshirt /> Laundry Services
              </button>
              <button 
                className={`tab-btn ${activeTab === 'dryCleaning' ? 'active' : ''}`}
                onClick={() => setActiveTab('dryCleaning')}
              >
                <FaTowel /> Dry Cleaning
              </button>
            </div>
          </div>

          {activeTab === 'laundry' && (
            <div className="pricing-grid">
              {pricingPlans.laundry.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="popular-tag">Most Popular</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    {plan.price} <span>/{plan.per}</span>
                  </div>
                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}><FaCheck className="check-icon" /> {feature}</li>
                    ))}
                  </ul>
                  <Link to="/book-now" className="btn btn-primary btn-block">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'dryCleaning' && (
            <div className="dry-cleaning-grid">
              {pricingPlans.dryCleaning.map((item, index) => (
                <div key={index} className={`item-card ${item.popular ? 'popular' : ''}`}>
                  {item.popular && <div className="popular-tag">Popular</div>}
                  <h4>{item.name}</h4>
                  <div className="price">
                    {item.price} <span>/{item.per}</span>
                  </div>
                  <Link to="/book-now" className="btn btn-outline">
                    Add to Cart
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="pricing-faq">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How is the weight calculated?</h4>
                <p>We weigh your laundry after it's been washed and dried. You're charged based on the final weight.</p>
              </div>
              <div className="faq-item">
                <h4>Is there a minimum order?</h4>
                <p>Yes, we have a 5kg minimum for laundry services. Dry cleaning has no minimum order.</p>
              </div>
              <div className="faq-item">
                <h4>How long does it take?</h4>
                <p>Standard service is 24-48 hours. Express service (additional charge) is available for same-day delivery.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer discounts?</h4>
                <p>Yes! We offer 10% off for students and seniors. Contact us for bulk and corporate rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to get your laundry done?</h2>
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

export default Pricing;