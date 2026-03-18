import React, { useState, useEffect } from "react";
import "./styles.css";
import { useCart } from "../../context/CartContext";
import { supabase } from "../../supabaseClient";

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  category: string;
  description: string;
}

const Stores = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, searchTerm } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // For now, use hardcoded, later fetch from Supabase
    const hardcodedProducts: Product[] = [
      {
        id: 1,
        name: "Excavator",
        price: "₦66.00",
        img: "/src/assets/Excavator.png",
        category: "Vehicles",
        description: "A durable toy excavator with movable arm and realistic design. Perfect for sandbox play and imaginative construction adventures.",
      },
      {
        id: 2,
        name: "Tricycle",
        price: "₦126.00",
        img: "/src/assets/tricycle1.png",
        category: "Vehicles",
        description: "Sturdy steel-frame tricycle built for kids aged 2–5. Non-slip pedals and a wide stable base ensure a safe, fun ride.",
      },
      {
        id: 3,
        name: "Radio Fly Scooter",
        price: "₦138.00",
        img: "/src/assets/radioFlyScooter.png",
        category: "Vehicles",
        description: "Remote-controlled scooter with smooth gliding wheels and responsive steering. A thrilling ride for kids on the go.",
      },
      {
        id: 4,
        name: "Trike Gas Scooter",
        price: "₦100.00",
        img: "/src/assets/trikeGasScooter2.png",
        category: "Vehicles",
        description: "Three-wheel gas-style scooter with a sporty look and stable ride. Great for outdoor play and developing balance skills.",
      },
      {
        id: 5,
        name: "Caterpillar",
        price: "₦86.00",
        img: "/src/assets/toys22.png",
        category: "Building",
        description: "Colorful building caterpillar toy that sparks creativity and fine motor skills. Stack, connect, and build to your imagination.",
      },
      {
        id: 6,
        name: "Jelly Cat",
        price: "₦222.00",
        img: "/src/assets/JellycatGray.png",
        category: "Animal",
        description: "Ultra-soft plush Jellycat companion made from premium hypoallergenic fabric. A perfect cuddle buddy for children of all ages.",
      },
    ];
    setProducts(hardcodedProducts);
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="stores-section" id="stores">
      <h2 className="section-title">Our Store</h2>
      <div className="product-grid">
        {products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
              <p className="product-description">{product.description}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
