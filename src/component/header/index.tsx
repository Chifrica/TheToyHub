import { Search, ShoppingBag, User } from 'lucide-react'; // Optional icon library
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <p className="headerTxt">ToyHub Enterprise</p>

      <nav className="nav-links">
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Our Store</a>
        <a href="#">Delivery</a>
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