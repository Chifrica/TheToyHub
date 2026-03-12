import React from 'react';
import './styles.css';

import toys21 from "../../assets/toys21.jpg";
import bearChildren from '../../assets/bearChildren.png';
import chairImage from '../../assets/toys23.png';

const HomeScreen = () => {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-title">
          Built for Adventure, Designed for Childhood. <br />
          {/* <span className="title-badge-gray">🛋️</span> */}
          The Home of Timeless Play
        </h2>

        <div className="hero-grid">
          {/* Large Main Image */}
          <div className="main-banner">
            <img src={toys21} alt="Sofa" />
            <button className="shop-now-btn">Shop Now ↗</button>
          </div>

          {/* Side Product Cards */}
          <div className="side-stack">
            <div className="side-card blue-bg">
              <img src={chairImage} alt="" />
              <div className="card-info">
                <p>Bear</p>
                <p className="price">$126.00</p>
              </div>
            </div>
            <div className="side-card orange-bg">
              <img src={bearChildren} alt="Elite Chair" style={{ objectFit: 'fill', height: "140px" }} />
              <div className="card-info">
                <p>Pikish Bear</p>
                <p className="price">$150.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>18K+</h2>
          <p>Happy and loyal customers buy our products.</p>
        </div>
        <div className="stat-item">
          <h2>700+</h2>
          <p>Products that we have created and sold on the market.</p>
        </div>
        <div className="stat-item">
          <h2>95%</h2>
          <p>Customers who have purchased and next come back.</p>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;