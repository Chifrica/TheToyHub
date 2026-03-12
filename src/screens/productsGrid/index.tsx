import React, { useState } from "react";
import "./styles.css";

import tricycle1 from "../../assets/tricycle1.png";
import excavator from "../../assets/Excavator.png";
import radioFlyScooter from "../../assets/radioFlyScooter.png";
import trikeGasScooter2 from "../../assets/trikeGasScooter2.png";
import toys22 from "../../assets/toys22.png";
import jellycatGray from "../../assets/JellycatGray.png";

const ProductGrid = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    { id: 1, name: "Excavator", price: "$066.00", img: excavator, category: "Vehicles" },
    { id: 2, name: "Tricycle", price: "$126.00", img: tricycle1, category: "Vehicles" },
    { id: 3, name: "Radio Fly Scooter", price: "$138.00", img: radioFlyScooter, category: "Vehicles" },
    { id: 4, name: "Trike Gas Scooter", price: "$100.00", img: trikeGasScooter2, category: "Vehicles" },
    { id: 5, name: "Caterpillar", price: "$086.00", img: toys22, category: "Building" },
    { id: 6, name: "Jelly Cat", price: "$222.00", img: jellycatGray, category: "Animal" },
  ];

  const categories = ["All", "Animal", "Vehicles", "Building", "Education"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(product => product.category === activeCategory);

  return (
    <section className="product-grid-section">
      <h2 className="section-title">Our Best Quality Products</h2>

      <div className="filter-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
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