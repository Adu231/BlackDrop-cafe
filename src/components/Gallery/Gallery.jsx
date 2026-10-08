import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../../data/gallery';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge-gold">
            VISUAL GALLERY
          </div>
          <h2 className="section-title font-display">
            Life At <span className="text-gold">Black Drop</span>
          </h2>
          <p className="section-subtitle">
            Take a visual tour through our coffee creations, freshly made bites, and warm cafe aesthetic.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-tabs">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`gallery-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-editorial-grid">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-card ${item.span || ''}`}
              onClick={() => openLightbox(index)}
            >
              <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
              <div className="gallery-card-overlay">
                <div className="gallery-card-meta">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={24} />
            </button>

            <button className="lightbox-nav-btn prev" onClick={prevImage} aria-label="Previous Image">
              <ChevronLeft size={24} />
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={filteredImages[lightboxIndex].image}
                alt={filteredImages[lightboxIndex].title}
                className="lightbox-img"
              />
              <div className="lightbox-caption text-center">
                <h3>{filteredImages[lightboxIndex].title}</h3>
                <p>{filteredImages[lightboxIndex].description}</p>
              </div>
            </div>

            <button className="lightbox-nav-btn next" onClick={nextImage} aria-label="Next Image">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
