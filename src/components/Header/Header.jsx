import { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo/rayzonaLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Rayzona Logo" />
        </div>
        
        <button 
          className={`header__mobile-toggle ${isMenuOpen ? 'header__mobile-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li><a href="#home" className="header__nav-link header__nav-link--active">Home</a></li>
            <li><a href="#about" className="header__nav-link">About Us</a></li>
            <li><a href="#services" className="header__nav-link">Services</a></li>
            <li><a href="#portfolio" className="header__nav-link">Portfolio</a></li>
            <li><a href="#blogs" className="header__nav-link">Blogs</a></li>
            <li><a href="#contact" className="header__nav-link">Contact</a></li>
          </ul>
          <button className="header__cta-button">ENQUIRE ON</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
