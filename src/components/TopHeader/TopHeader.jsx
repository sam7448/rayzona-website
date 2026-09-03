import './TopHeader.css';
import logo from '../../assets/logo/rayzonaLogo.png';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header__container">
        <div className="top-header__logo">
          <Link to="/">
            <img
              src={logo}
              alt="Rayzona Renewables Energy — Solar Panel Installation Company in Pune"
              className="top-header__logo-img"
              width="160"
              height="60"
            />
          </Link>
        </div>

        <div className="top-header__book">
          <a href="https://wa.me/917448299293" target="_blank" rel="noopener noreferrer" aria-label="Book solar consultation on WhatsApp">
            <button className="top-header__book-button">GET FREE QUOTE</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
