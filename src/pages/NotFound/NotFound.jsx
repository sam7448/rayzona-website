import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <Helmet>
        <title>Page Not Found | RAYZONA RENEWABLES ENERGY</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Rayzona Renewables Energy homepage for solar installation in Pune." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="not-found__content">
        <div className="not-found__icon" aria-hidden="true">☀️</div>
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__description">
          Sorry, the page you're looking for doesn't exist. It may have been moved or the URL may be incorrect.
        </p>
        <div className="not-found__links">
          <Link to="/" className="not-found__btn-home">Go to Homepage</Link>
          <Link to="/solar-installation-pune" className="not-found__btn-service">Solar Installation in Pune</Link>
          <Link to="/contact" className="not-found__btn-service">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
