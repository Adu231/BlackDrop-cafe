import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import './Location.css';

export default function Location() {
  const addressString = 'Surya Complex, Samarth Nagar, Lakshmi Nagar, Dharashiv, Maharashtra 413501';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Black Drop Cafe ' + addressString)}`;

  return (
    <section id="location" className="location-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge-gold">
            VISIT US
          </div>
          <h2 className="section-title font-display">
            Location & <span className="text-gold">Cafe Info</span>
          </h2>
          <p className="section-subtitle">
            Find us easily in Dharashiv. Stop by for dine-in or grab your coffee takeaway on the go.
          </p>
        </div>

        <div className="location-grid">
          {/* Info Card */}
          <div className="location-info-card glass-card">
            <div className="info-card-header">
              <span className="marathi-title font-display">ब्लैक ड्रॉप कैफे</span>
              <h3 className="english-title">BLACK DROP CAFE</h3>
              <p className="cafe-type-tag">Coffee Shop & Gourmet Snacks</p>
            </div>

            <div className="info-items-list">
              {/* Address */}
              <div className="info-item">
                <div className="info-text">
                  <span className="info-label">Address</span>
                  <p className="info-value">{addressString}</p>
                </div>
              </div>

              {/* Service Types */}
              <div className="info-item">
                <div className="info-text">
                  <span className="info-label">Services Available</span>
                  <div className="service-badges">
                    <span className="s-badge">Dine-in</span>
                    <span className="s-badge">Takeaway</span>
                  </div>
                </div>
              </div>

              {/* Average Spend */}
              <div className="info-item">
                <div className="info-text">
                  <span className="info-label">Approximate Average Spend</span>
                  <p className="info-value spend-highlight">₹200 – ₹400 per person</p>
                </div>
              </div>

              {/* Hours / Phone placeholder */}
              <div className="info-item placeholder-item">
                <div className="info-text">
                  <span className="info-label">Opening Hours</span>
                  <p className="info-value muted-val">Confirm with cafe during visit</p>
                </div>
              </div>
            </div>

            <div className="info-actions">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary get-directions-btn">
                <Navigation size={15} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Card */}
          <div className="location-map-card glass-card">
            <iframe
              title="Black Drop Cafe Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15197.886008681534!2d76.0354157!3d18.1873891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5a3637e1a3d93%3A0x89d2d0b5e4c6c9a!2sDharashiv%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
            
            <div className="map-floating-overlay">
              <div className="map-badge">
                <MapPin size={13} className="text-gold" />
                <span>Samarth Nagar, Dharashiv</span>
              </div>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="map-open-link">
                Open in Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
