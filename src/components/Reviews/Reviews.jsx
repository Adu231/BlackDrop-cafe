import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS_OVERVIEW, SELECTED_REVIEWS } from '../../data/reviews';
import './Reviews.css';

export default function Reviews() {
  const handleViewReviewsClick = () => {
    window.open(
      'https://www.google.com/search?q=Black+Drop+Cafe+Dharashiv+reviews',
      '_blank'
    );
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge-gold">
            CUSTOMER FEEDBACK
          </div>
          <h2 className="section-title font-display">
            Sourced <span className="text-gold">Reviews</span>
          </h2>
          <p className="section-subtitle">
            Verified rating statistics & authentic excerpts from customer visits in Dharashiv.
          </p>
        </div>

        {/* Rating Hero Summary Card */}
        <div className="reviews-summary-card glass-card">
          <div className="summary-left-box">
            <div className="big-rating-number">{REVIEWS_OVERVIEW.rating}</div>
            <div className="stars-row">
              {[1, 2, 3].map((s) => (
                <Star key={s} size={18} className="star-filled" />
              ))}
              <Star size={18} className="star-half" />
              <Star size={18} className="star-empty" />
            </div>
            <div className="summary-meta">
              <span className="total-reviews-count">Based on {REVIEWS_OVERVIEW.totalReviews} Ratings</span>
              <span className="platform-tag">{REVIEWS_OVERVIEW.platform}</span>
            </div>
          </div>

          <div className="summary-right-box">
            <h3 className="summary-headline font-display">
              Transparent & Honest Feedback
            </h3>
            <p className="summary-desc">
              We take pride in preparing quality cold coffees, hot craft beverages, grilled sandwiches and momos for our Dharashiv visitors. Every review helps us continually elevate our service and quality.
            </p>

            <button onClick={handleViewReviewsClick} className="btn-secondary view-reviews-btn">
              <span>View On Google</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="reviews-grid">
          {SELECTED_REVIEWS.map((review) => (
            <div key={review.id} className="review-card glass-card">
              <div className="review-card-header">
                <span className="review-highlight-tag">{review.highlight}</span>
                <div className="review-stars-mini">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} className="star-filled" />
                  ))}
                </div>
              </div>

              <p className="review-text">"{review.text}"</p>

              <div className="review-author-meta">
                <span className="author-name">{review.author}</span>
                <span className="author-visit">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
