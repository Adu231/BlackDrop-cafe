import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin } from 'lucide-react';
import logoImg from '../../assets/branding/black-drop-logo.jpg';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'featured', 'menu', 'offers', 'gallery', 'reviews', 'location'];
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Original Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="navbar-brand">
            <img
              src={logoImg}
              alt="Black Drop Cafe BDC Logo"
              className="navbar-logo-img"
            />
            <div className="brand-text-wrapper">
              <span className="brand-title">BLACK DROP</span>
              <span className="brand-subtitle font-display">CAFÉ</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                  {isActive && <span className="active-dot"></span>}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="navbar-actions">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="btn-primary desktop-cta-btn"
            >
              <span>Explore Menu</span>
            </a>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-brand-wrapper">
            <img src={logoImg} alt="Black Drop Cafe Logo" className="mobile-logo-img" />
            <div className="brand-text-wrapper">
              <span className="brand-title">BLACK DROP</span>
              <span className="brand-subtitle font-display">CAFÉ</span>
            </div>
          </div>
          <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="mobile-nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, '#menu')}
            className="btn-primary mobile-menu-cta"
          >
            <span>Explore Menu</span>
          </a>
          <a
            href="#location"
            onClick={(e) => handleNavClick(e, '#location')}
            className="btn-secondary mobile-location-cta"
          >
            <MapPin size={16} />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </>
  );
}
