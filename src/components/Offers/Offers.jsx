import React from 'react';
import { ACTIVE_OFFERS, OFFERS_CONFIG } from '../../data/offers';
import './Offers.css';

export default function Offers() {
  const hasOffers = ACTIVE_OFFERS && ACTIVE_OFFERS.length > 0;

  const handleMenuClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offers" className="offers-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge-gold">
            CAFE SPECIALS
          </div>
          <h2 className="section-title font-display">
            {OFFERS_CONFIG.sectionTitle}
          </h2>
          <p className="section-subtitle">
            {OFFERS_CONFIG.subtitle}
          </p>
        </div>

        {hasOffers ? (
          <div className="offers-grid">
            {ACTIVE_OFFERS.map((offer) => (
              <div key={offer.id} className="offer-card glass-card">
                {offer.image && <img src={offer.image} alt={offer.title} className="offer-img" />}
                <div className="offer-content">
                  <span className="offer-badge">{offer.badge || 'Special Offer'}</span>
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-desc">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Neutral Fallback Card */
          <div className="offers-neutral-card glass-card text-center">
            <h3 className="neutral-title font-display">
              Daily Handcrafted Specials
            </h3>

            <p className="neutral-description">
              {OFFERS_CONFIG.fallbackMessage}
            </p>

            <div className="specials-features-row">
              <span className="special-feature">Fresh Brewed Coffee</span>
              <span className="special-feature-divider">/</span>
              <span className="special-feature">Signature Shakes</span>
              <span className="special-feature-divider">/</span>
              <span className="special-feature">Made to Order Snacks</span>
            </div>

            <div className="neutral-action">
              <a href="#menu" onClick={handleMenuClick} className="btn-primary">
                <span>{OFFERS_CONFIG.ctaText}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
