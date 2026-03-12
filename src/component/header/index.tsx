import { Search, ShoppingBag, User } from 'lucide-react'; // Optional icon library
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <p className="headerTxt">ToyHub Enterprise</p>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#about-us">About Us</a>
        <a href="#">Our Store</a>
      </nav>

      <div className="header-icons">
        <Search size={20} />
        <ShoppingBag size={20} />
        <User size={20} />
      </div>
    </header>
  );
};

export default Header;