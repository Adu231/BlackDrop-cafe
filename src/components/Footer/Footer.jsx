import React from 'react';
import { MapPin, ArrowUp, Globe } from 'lucide-react';
import logoImg from '../../assets/branding/black-drop-logo.jpg';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers & Specials', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src={logoImg} alt="Black Drop Cafe Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="brand-title">BLACK DROP</span>
                <span className="brand-subtitle font-display">CAFÉ</span>
              </div>
            </div>

            <p className="footer-about-text">
              A premium dark-themed cafe portfolio website presenting craft coffees, signature cold beverages, artisanal sandwiches, pizzas & momos in Dharashiv, Maharashtra.
            </p>

            <div className="footer-services">
              <span className="footer-s-pill">Dine-in</span>
              <span className="footer-s-pill">Takeaway</span>
            </div>
          </div>

          {/* Quick Nav Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cafe Information & Address Column */}
          <div className="footer-info-col">
            <h4 className="footer-heading">Visit Black Drop</h4>
            <div className="footer-location-block">
              <MapPin size={18} className="text-gold flex-shrink-0" />
              <p>
                Surya Complex, Samarth Nagar, Lakshmi Nagar, Dharashiv, Maharashtra 413501
              </p>
            </div>
            
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" title="Instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" title="Facebook" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="social-btn" title="Google Listing" aria-label="Google Listing">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Black Drop Cafe. All Rights Reserved. Designed with dark gold cafe elegance.
          </p>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
