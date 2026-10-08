import React from 'react';
import { MapPin } from 'lucide-react';
import './VisitCTA.css';

export default function VisitCTA() {
  const handleMenuClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDirectionsClick = () => {
    window.open('https://maps.google.com/?q=Black+Drop+Cafe+Surya+Complex+Samarth+Nagar+Dharashiv', '_blank');
  };

  return (
    <section className="visit-cta-section">
      <div className="container">
        <div className="visit-cta-box glass-card text-center">
          <h2 className="visit-cta-title font-display">
            Your Next Coffee Break <br />
            <span className="text-gold">Starts Here.</span>
          </h2>

          <p className="visit-cta-desc">
            Visit Black Drop Cafe in Dharashiv today for craft coffees, ice cream cold coffee, gourmet sandwiches, and steamed momos.
          </p>

          <div className="visit-cta-actions">
            <a href="#menu" onClick={handleMenuClick} className="btn-primary">
              <span>Explore Menu</span>
            </a>
            <button onClick={handleDirectionsClick} className="btn-secondary">
              <MapPin size={15} />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
