import React, { useState, useMemo } from 'react';
import { Search, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menu';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge-gold">
            DIGITAL MENU
          </div>
          <h2 className="section-title font-display">
            Explore Our <span className="text-gold">Menu</span>
          </h2>
          <p className="section-subtitle">
            Browse our full selection of artisanal beverages, signature shakes, fresh grilled sandwiches, pizzas & steamed momos.
          </p>
        </div>

        {/* Search & Filter Control Panel */}
        <div className="menu-controls">
          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search cappuccino, momos, sandwich..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs - Mobile Touch Swipe Support */}
          <div className="category-tabs-scroll-container no-scrollbar">
            <div className="category-tabs">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-items-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card glass-card">
                <div className="menu-card-img-wrapper">
                  <img src={item.image} alt={item.name} className="menu-card-img" loading="lazy" />
                  {item.tags && item.tags.length > 0 && (
                    <span className="menu-tag">
                      {item.tags[0]}
                    </span>
                  )}
                </div>

                <div className="menu-card-body">
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.name}</h3>
                    <span className="menu-card-price">
                      {item.price ? `₹${item.price}` : 'Ask at Counter'}
                    </span>
                  </div>

                  <p className="menu-card-desc">{item.description}</p>

                  <div className="menu-card-footer">
                    <div className="menu-tags-list">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="sub-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-menu-results glass-card text-center">
            <h3>No items found</h3>
            <p>Try clearing your search query or selecting another category.</p>
            <button className="btn-secondary" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Informational Disclaimer Box */}
        <div className="menu-disclaimer-card">
          <Info size={16} className="disclaimer-icon text-gold" />
          <div className="disclaimer-text">
            <strong>Informational Menu:</strong> Items & prices are subject to seasonal availability at Black Drop Cafe. Please verify exact prices and today's counter specials with cafe staff during your visit.
          </div>
        </div>
      </div>
    </section>
  );
}
