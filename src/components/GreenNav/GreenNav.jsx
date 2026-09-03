import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import './GreenNav.css';

const GreenNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const serviceLinks = [
    { to: '/solar-installation-pune', label: 'Solar Installation Pune' },
    { to: '/residential-solar', label: 'Residential Solar' },
    { to: '/commercial-solar', label: 'Commercial Solar' },
    { to: '/rooftop-solar', label: 'Rooftop Solar' },
    { to: '/on-grid-solar', label: 'On-Grid Solar' },
    { to: '/solar-maintenance', label: 'Solar Maintenance' },
    { to: '/ev-charging', label: 'EV Charging' },
  ];

  const isServiceActive = serviceLinks.some(s => location.pathname === s.to)
    || location.pathname === '/products-services';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (isMenuOpen) {
        const menu = document.querySelector('.green-nav__list');
        const toggle = document.querySelector('.green-nav__mobile-toggle');
        if (menu && !menu.contains(event.target) && toggle && !toggle.contains(event.target)) {
          closeMenu();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="green-nav" aria-label="Main navigation">
      <div className="green-nav__container">
        <button
          className={`green-nav__mobile-toggle ${isMenuOpen ? 'green-nav__mobile-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`green-nav__list ${isMenuOpen ? 'green-nav__list--open' : ''}`} role="menubar">
          <li role="none">
            <Link
              to="/"
              className={`green-nav__link ${location.pathname === '/' ? 'green-nav__link--active' : ''}`}
              onClick={closeMenu}
              role="menuitem"
            >HOME</Link>
          </li>
          <li role="none">
            <Link
              to="/about"
              className={`green-nav__link ${location.pathname === '/about' ? 'green-nav__link--active' : ''}`}
              onClick={closeMenu}
              role="menuitem"
            >ABOUT US</Link>
          </li>

          {/* Services Dropdown */}
          <li className="green-nav__dropdown-wrapper" ref={servicesRef} role="none">
            <button
              className={`green-nav__link green-nav__dropdown-trigger ${isServiceActive ? 'green-nav__link--active' : ''}`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              role="menuitem"
            >
              SERVICES <FaChevronDown className={`green-nav__chevron ${isServicesOpen ? 'green-nav__chevron--open' : ''}`} aria-hidden="true" />
            </button>
            {isServicesOpen && (
              <ul className="green-nav__dropdown" role="menu" aria-label="Services submenu">
                {serviceLinks.map((s) => (
                  <li key={s.to} role="none">
                    <Link
                      to={s.to}
                      className="green-nav__dropdown-link"
                      onClick={closeMenu}
                      role="menuitem"
                    >{s.label}</Link>
                  </li>
                ))}
                <li role="none">
                  <Link to="/products-services" className="green-nav__dropdown-link" onClick={closeMenu} role="menuitem">
                    Solar Products
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li role="none">
            <Link
              to="/contact"
              className={`green-nav__link ${location.pathname === '/contact' ? 'green-nav__link--active' : ''}`}
              onClick={closeMenu}
              role="menuitem"
            >CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GreenNav;
