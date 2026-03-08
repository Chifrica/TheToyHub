// ProductGrid.js
import React from 'react';
import './styles.css';

import tricycle1 from '../../assets/tricycle1.png';
import excavator from "../../assets/Excavator.png"
import radioFlyScooter from "../../assets/radioFlyScooter.png"
import trikeGasScooter2 from "../../assets/trikeGasScooter2.png"
import toys22 from "../../assets/toys22.png"
import jellycatGray from "../../assets/JellycatGray.png"

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Easy Sofa", price: "$066.00", img: excavator },
    { id: 2, name: "Easy Sofa", price: "$126.00", img: tricycle1 },
    { id: 3, name: "Cabinet", price: "$138.00", img: radioFlyScooter },
    { id: 4, name: "Rumpi Chair", price: "$100.00", img: trikeGasScooter2 },
    { id: 5, name: "Romp Toll", price: "$086.00", img: toys22 },
    { id: 6, name: "Almirah", price: "$222.00", img: jellycatGray },
  ];

  return (
    <section className="product-grid-section">
      <h2 className="section-title">Our Best Quality Products</h2>

      <div className="filter-tabs">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Animal</button>
        <button className="filter-btn">Vehicles</button>
        <button className="filter-btn">Building</button>
        <button className="filter-btn">Education</button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
              <div className="card-arrow">↗</div>
            </div>
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;