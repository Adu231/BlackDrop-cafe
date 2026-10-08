import React from 'react';
import { MapPin, Star, ChevronDown } from 'lucide-react';
import nameplateImg from '../../assets/branding/black-drop-nameplate.png';
import './Hero.css';

export default function Hero() {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDirectionsClick = (e) => {
    e.preventDefault();
    window.open('https://maps.google.com/?q=Black+Drop+Cafe+Surya+Complex+Samarth+Nagar+Dharashiv', '_blank');
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image Layer */}
      <div className="hero-bg-wrapper">
        <img
          src="/images/hero_coffee_bg.png"
          alt="Black Drop Cafe Craft Coffee"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow">
            <span className="badge-gold">
              BLACK DROP CAFE · DHARASHIV
            </span>
          </div>

          {/* Original Nameplate Signboard */}
          <div className="hero-nameplate-wrapper">
            <img
              src={nameplateImg}
              alt="Black Drop Cafe"
              className="hero-nameplate-img"
            />
          </div>

          {/* Main Headline */}
          <h1 className="hero-title font-display">
            COFFEE. FOOD. <br />
            <span className="text-gradient-gold">MOMENTS.</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero-description">
            Experience artisanal coffees, decadent ice cream shakes, crispy grilled sandwiches & freshly baked pizzas in a relaxed, warm aesthetic atmosphere.
          </p>

          {/* Service & Rating Info Strip */}
          <div className="hero-info-strip">
            <div className="service-pills">
              <span className="pill">Dine-in</span>
              <span className="pill-divider">/</span>
              <span className="pill">Takeaway</span>
            </div>
            
            <div className="hero-rating-badge">
              <Star size={13} className="star-icon" />
              <span className="rating-score">3.6</span>
              <span className="rating-count">(77 Google Reviews)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#menu" onClick={handleScrollToMenu} className="btn-primary hero-btn-main">
              <span>Explore Menu</span>
            </a>
            <button onClick={handleDirectionsClick} className="btn-secondary hero-btn-sub">
              <MapPin size={15} />
              <span>Get Directions</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
          <span className="scroll-text">DISCOVER MORE</span>
          <ChevronDown size={15} className="scroll-arrow" />
        </a>
      </div>
    </section>
  );
}
