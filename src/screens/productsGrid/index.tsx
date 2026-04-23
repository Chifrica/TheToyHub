import React, { useState } from "react";
import "./styles.css";
import { useCart } from "../../context/CartContext";

import tricycle1 from "../../assets/tricycle1.png";
import excavator from "../../assets/Excavator.png";
import radioFlyScooter from "../../assets/radioFlyScooter.png";
import trikeGasScooter2 from "../../assets/trikeGasScooter2.png";
import toys22 from "../../assets/toys22.png";
import jellycatGray from "../../assets/JellycatGray.png";
import space_rocket from "../../assets/space_rocket.jpg"

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  category: string;
  description: string;
}

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [flippedId, setFlippedId] = useState<number | null>(null);
  const { addToCart, searchTerm } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Excavator",
      price: "₦66.00",
      img: excavator,
      category: "Building",
      description: "A durable toy excavator with movable arm and realistic design. Perfect for sandbox play and imaginative construction adventures.",
    },
    {
      id: 2,
      name: "Tricycle",
      price: "₦126.00",
      img: tricycle1,
      category: "Vehicles",
      description: "Sturdy steel-frame tricycle built for kids aged 2–5. Non-slip pedals and a wide stable base ensure a safe, fun ride.",
    },
    {
      id: 3,
      name: "Radio Fly Scooter",
      price: "₦138.00",
      img: radioFlyScooter,
      category: "Animal",
      description: "Remote-controlled scooter with smooth gliding wheels and responsive steering. A thrilling ride for kids on the go.",
    },
    {
      id: 4,
      name: "Trike Gas Scooter",
      price: "₦100.00",
      img: trikeGasScooter2,
      category: "Vehicles",
      description: "Three-wheel gas-style scooter with a sporty look and stable ride. Great for outdoor play and developing balance skills.",
    },
    {
      id: 5,
      name: "Caterpillar",
      price: "₦86.00",
      img: toys22,
      category: "Building",
      description: "Colorful building caterpillar toy that sparks creativity and fine motor skills. Stack, connect, and build to your imagination.",
    },
    {
      id: 6,
      name: "Jelly Cat",
      price: "₦222.00",
      img: jellycatGray,
      category: "Animal",
      description: "Ultra-soft plush Jellycat companion made from premium hypoallergenic fabric. A perfect cuddle buddy for children of all ages.",
    },
    {
      id: 7,
      name: "Space Rocket",
      price: "₦222.00",
      img: space_rocket,
      category: "Vehicles",
      description: "Ultra-soft plush Jellycat companion made from premium hypoallergenic fabric. A perfect cuddle buddy for children of all ages.",
    },
    {
      id: 8,
      name: "Jelly Cat",
      price: "₦222.00",
      img: jellycatGray,
      category: "Animal",
      description: "Ultra-soft plush Jellycat companion made from premium hypoallergenic fabric. A perfect cuddle buddy for children of all ages.",
    },
  ];

  const categories = ["All", "Animal", "Vehicles", "Building", "Education"];

  const filteredProducts =
    activeCategory === "All"
      ? products.filter(
        p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : products.filter((p) => p.category === activeCategory && (
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const handleFlip = (id: number) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="product-grid-section" id="products">
      <h2 className="section-title">Our Best Quality Products</h2>

      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setFlippedId(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            className={`product-card ${flippedId === product.id ? "flipped" : ""}`}
            key={product.id}
            onClick={() => handleFlip(product.id)}
          >
            <div className="card-inner">
              {/* Front */}
              <div className="card-face card-front">
                <div className="product-image-container">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>

              {/* Back */}
              <div className="card-face card-back">
                <h3 className="back-title">{product.name}</h3>
                <p className="back-description">{product.description}</p>
                <div className="back-footer">
                  <span className="back-price">{product.price}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;