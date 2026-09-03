import './Footer.css';
import logo from '../../assets/logo/rayzonaLogo.png';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__section">
            <div className="footer__logo">
              <Link to="/">
                <img src={logo} alt="Rayzona Renewables Energy — Solar Company Pune" loading="lazy" />
              </Link>
            </div>
            <p className="footer__description">
              RAYZONA RENEWABLES ENERGY — trusted solar panel installation company in Pune, Maharashtra. Residential, commercial & industrial solar solutions with expert installation and long-term support.
            </p>
            <div className="footer__social">
              <a href="https://www.instagram.com/rayzona_renewables_energy" className="footer__social-link" aria-label="Rayzona Renewables Energy on Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/solar-installation-pune">Solar Installation Pune</Link></li>
              <li><Link to="/products-services">Solar Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer__section">
            <h3 className="footer__title">Our Solar Services</h3>
            <ul className="footer__links">
              <li><Link to="/residential-solar">Residential Solar</Link></li>
              <li><Link to="/commercial-solar">Commercial Solar</Link></li>
              <li><Link to="/rooftop-solar">Rooftop Solar</Link></li>
              <li><Link to="/on-grid-solar">On-Grid Solar</Link></li>
              <li><Link to="/solar-maintenance">Solar Maintenance</Link></li>
              <li><Link to="/ev-charging">EV Charging Station</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer__section">
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__contact">
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <address style={{ fontStyle: 'normal' }}>
                  Phadtare Niwas, next to Akshay Terrace,<br />
                  Gadital, Hadapsar, Pune – 411028
                </address>
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:rayzonarenewablesenergy@gmail.com">rayzonarenewablesenergy@gmail.com</a>
              </li>
              <li>
                <FaPhone aria-hidden="true" />
                <span>
                  <a href="tel:+917448299293">+91 7448299293</a>
                  {' / '}
                  <a href="tel:+917499802124">+91 7499802124</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 RAYZONA RENEWABLES ENERGY. All rights reserved. | Solar Panel Installation in Pune
          </p>
          <div className="footer__legal">
            <Link to="/about">About Us</Link>
            <span>|</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
