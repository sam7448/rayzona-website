import './ServiceAreas.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const areas = [
  'Hadapsar', 'Viman Nagar', 'Kharadi', 'Hinjewadi', 'Wakad',
  'Baner', 'Balewadi', 'Kothrud', 'Aundh', 'Bavdhan',
  'Pimple Saudagar', 'Pimpri-Chinchwad', 'Chinchwad', 'Bhosari', 'Moshi', 'Talegaon'
];

const ServiceAreas = () => {
  return (
    <section className="service-areas" id="service-areas" aria-label="Service areas in Pune">
      <div className="service-areas__container">
        <div className="service-areas__header">
          <span className="service-areas__badge">WHERE WE SERVE</span>
          <h2 className="service-areas__title">Solar Installation Service Areas in Pune</h2>
          <p className="service-areas__subtitle">
            RAYZONA RENEWABLES ENERGY provides expert solar panel installation across Pune and the surrounding Pune Metropolitan Region. Whether you're in central Pune, Pimpri-Chinchwad, or the rapidly growing western suburbs, our team is ready to help you switch to solar.
          </p>
        </div>

        <div className="service-areas__grid">
          {areas.map((area, index) => (
            <div key={index} className="service-areas__card">
              <FaMapMarkerAlt className="service-areas__icon" aria-hidden="true" />
              <span className="service-areas__name">{area}</span>
            </div>
          ))}
        </div>

        <div className="service-areas__cta">
          <p className="service-areas__cta-text">
            Don't see your area? <strong>We cover all of Pune and Maharashtra.</strong>
          </p>
          <Link to="/contact" className="service-areas__cta-link">
            Check if we serve your area →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
