import React from 'react';
import './About.css';

export default function About() {
  const pillars = [
    {
      title: 'Craft Beverages',
      description: 'Rich espresso drinks, chilled ice cream cold coffees, and signature Kit Kat shakes.'
    },
    {
      title: 'Fresh Quality Ingredients',
      description: 'Made-to-order grilled veg cheese sandwiches, thin crust pizzas, and steamed paneer momos.'
    },
    {
      title: 'Warm & Welcoming Atmosphere',
      description: 'A cozy dark aesthetic cafe designed for friendly conversations and memorable coffee breaks.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Left Column: Cafe Image */}
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img
              src="/images/about_cafe_ambience.png"
              alt="Black Drop Cafe Ambience"
              className="about-image"
              loading="lazy"
            />
            <div className="about-image-overlay"></div>
            
            <div className="about-editorial-label">
              <span>Dharashiv · Dine-in & Takeaway</span>
            </div>
          </div>
        </div>

        {/* Right Column: Story & Content */}
        <div className="about-content-column">
          <div className="badge-gold section-badge">
            ABOUT BLACK DROP CAFÉ
          </div>
          
          <h2 className="about-title font-display">
            Crafting Moments, <br />
            <span className="text-gold">One Drop At A Time.</span>
          </h2>

          <p className="about-lead">
            Located in Surya Complex, Samarth Nagar, Dharashiv — Black Drop Cafe is a premium dark-themed sanctuary for coffee lovers and food enthusiasts alike.
          </p>

          <p className="about-text">
            Whether you are dropping in for a quick takeaway, taking a break with a rich Cold Coffee topped with ice cream, or sitting down with friends over hot grilled cheese sandwiches and momos, we aim to make every visit enjoyable.
          </p>

          {/* Pillars */}
          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-border-accent"></div>
                <div className="pillar-info">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
