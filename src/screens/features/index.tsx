// WhyChooseUs.js
import React from 'react';
import './styles.css';

import toy23 from "../../assets/toys23.png"

const WhyChooseUs = () => {
  const items = [
    { title: "Sustainability", icon: "+" },
    { title: "Unrivaled quality", icon: "×", active: true },
    { title: "Unmatched variety", icon: "+" },
    { title: "Legacy of excellence", icon: "+" },
  ];

  return (
    <section className="why-choose-us">
      <div className="video-column">
        <div className="video-thumb">
          <img src={toy23} alt="Interior" />
          <div className="play-btn"><span>▶</span></div>
        </div>
        <p className="video-caption">Watch the video and learn more about Modulive</p>
      </div>

      <div className="content-column">
        <h2 className="column-title">Why Choose Us</h2>
        <p className="column-desc">Here are the reasons why Modulive stands out as the ultimate choice in lighting solutions</p>

        <div className="accordion">
          {items.map((item, idx) => (
            <div className={`accordion-item ${item.active ? 'active' : ''}`} key={idx}>
              <span className="item-title">{item.title}</span>
              <span className="item-icon">{item.icon}</span>
              {item.active && <p className="item-text">Lorem ipsum dolor sit amet consectetur. Tincidunt est uma diam blandit fermentum nunc dolor.</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;