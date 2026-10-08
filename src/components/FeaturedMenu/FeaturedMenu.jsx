import React from 'react';
import { MENU_ITEMS } from '../../data/menu';
import './FeaturedMenu.css';

export default function FeaturedMenu() {
  const featuredItems = MENU_ITEMS.filter((item) => item.isFeatured);

  const handleFullMenuClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge-gold">
            CAFE FAVORITES
          </div>
          <h2 className="section-title font-display">
            Featured <span className="text-gold">Selection</span>
          </h2>
          <p className="section-subtitle">
            Hand-picked items crafted with quality ingredients to make your cafe visit memorable.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <div key={item.id} className="featured-card glass-card">
              <div className="featured-image-box">
                <img src={item.image} alt={item.name} className="featured-img" loading="lazy" />
                <div className="featured-image-overlay"></div>
                
                {item.tags && item.tags.length > 0 && (
                  <span className="featured-tag-badge">
                    {item.tags[0]}
                  </span>
                )}
              </div>

              <div className="featured-content">
                <div className="featured-header-row">
                  <h3 className="featured-item-name">{item.name}</h3>
                  <span className="featured-price">
                    {item.price ? `₹${item.price}` : 'Ask at Counter'}
                  </span>
                </div>
                <p className="featured-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="featured-footer-cta text-center">
          <a href="#menu" onClick={handleFullMenuClick} className="btn-primary">
            <span>View Full Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
