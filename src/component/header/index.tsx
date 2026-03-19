import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'; // Optional icon library
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from "../../assets/ToyHub Logo2.png"

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const handleSearch = () => {
    // Implement search logic, perhaps scroll to products and filter
    console.log('Search for:', searchTerm);
  };

  return (
    <header className="header">
      <img src={logo} alt="" height={40} width={40} />
      <p className="headerTxt">ToyHub Enterprise</p>

      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <a href="#products">Products</a>
        <a href="#about-us">About Us</a>
        <Link to="/stores" onClick={() => setIsMobileMenuOpen(false)}>Our Store</Link>
      </nav>

      <div className="header-icons">
        <div className="search-container">
          <Search size={20} onClick={() => setIsSearchOpen(!isSearchOpen)} />
          {isSearchOpen && (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
          )}
        </div>
        <Link to="/cart" className="cart-icon">
          <ShoppingBag size={20} />
          {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
        </Link>
        <User size={20} />
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
      </div>
    </header>
  );
};

export default Header;