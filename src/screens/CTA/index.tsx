// NewsletterCTA.js
import React from 'react';
import './styles.css';

const NewsletterCTA = () => {
  return (
    <div className="cta-newsletter-wrapper">
      {/* Visual CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h1>Legacy of Play that focuses on physical development and outdoor exploration.</h1>
          <button className="btn-white">See Products</button>
        </div>
        <button className="appointment-pill">Book an appointment ↗</button>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <h2>Subscribe to our newsletter and grab <span className="highlight">30% OFF</span></h2>
        <div className="newsletter-input-group">
          <span className="mail-icon">✉️</span>
          <input type="email" placeholder="Your Email..." />
          <button className="sub-btn">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default NewsletterCTA;