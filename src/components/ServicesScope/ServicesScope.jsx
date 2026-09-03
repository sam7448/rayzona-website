import './ServicesScope.css';
import ResidentialSolar from '../../assets/images/ResidentialSolar.webp';
import CommercialSolar from '../../assets/images/CommercialSolar.webp';
import IndustrialSolar from '../../assets/images/IndustrialSolar.webp';
import RooftopSolar from '../../assets/images/RooftopSolar.webp';
import LargeScaleSolar from '../../assets/images/LargeScaleSolarFarm.webp';
import AgriculturalSolar from '../../assets/images/AgriculturalSolarSystem.webp';
import { FaHome, FaBuilding, FaCheckCircle, FaChartLine, FaRoad, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesScope = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Solar Installation',
      description: 'Expert solar panel installation for residential and commercial properties in Pune. We handle everything from site survey to commissioning and net metering.',
      image: ResidentialSolar,
      imageAlt: 'Residential solar panel installation on rooftop in Pune',
      link: '/solar-installation-pune'
    },
    {
      icon: <FaTools />,
      title: 'Solar Maintenance',
      description: 'Regular AMC and maintenance services to keep your solar system running at peak performance. We offer cleaning, inspection, and inverter health checks.',
      image: CommercialSolar,
      imageAlt: 'Solar panel maintenance and AMC service in Pune',
      link: '/solar-maintenance'
    },
    {
      icon: <FaCheckCircle />,
      title: 'System Monitoring',
      description: 'Real-time monitoring of your solar system output. Track energy generation, consumption, and savings to ensure your investment is performing optimally.',
      image: IndustrialSolar,
      imageAlt: 'Solar system performance monitoring and tracking',
      link: '/on-grid-solar'
    },
    {
      icon: <FaChartLine />,
      title: 'Solar Consultation',
      description: 'Free site surveys and energy audits for homes and businesses across Pune. We design the right solar system size for your specific energy needs and roof space.',
      image: RooftopSolar,
      imageAlt: 'Free solar consultation and site survey in Pune',
      link: '/solar-installation-pune'
    },
    {
      icon: <FaRoad />,
      title: 'Rooftop Solar',
      description: 'Rooftop solar solutions for residential and commercial buildings in Pune. On-grid rooftop systems with net metering to maximize savings on electricity bills.',
      image: LargeScaleSolar,
      imageAlt: 'Rooftop solar panel installation in Pune Maharashtra',
      link: '/rooftop-solar'
    },
    {
      icon: <FaBuilding />,
      title: 'EV Charging & More',
      description: 'EV charging station installation and inverter repair services in Pune. Complete renewable energy solutions for homes, businesses, and commercial spaces.',
      image: AgriculturalSolar,
      imageAlt: 'EV charging station installation and inverter repair Pune',
      link: '/ev-charging'
    }
  ];

  return (
    <section className="services-scope" id="services-scope" aria-label="Our solar services">
      <div className="services-scope__container">
        <div className="services-scope__header">
          <span className="services-scope__badge">WHAT WE DO</span>
          <h2 className="services-scope__title">Our Solar Services in Pune</h2>
          <p className="services-scope__subtitle">
            Rayzona Renewables Energy offers comprehensive solar services across Pune and Maharashtra — from initial consultation and rooftop installation to ongoing maintenance and EV charging.
          </p>
        </div>

        <div className="services-scope__grid">
          {services.map((service, index) => (
            <div key={index} className="services-scope__card">
              <div className="services-scope__card-image">
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
                <div className="services-scope__card-image-overlay"></div>
                <div className="services-scope__card-icon-wrapper">
                  <div className="services-scope__card-icon">
                    {service.icon}
                  </div>
                  <h3 className="services-scope__card-title-overlay">{service.title}</h3>
                </div>
              </div>
              <div className="services-scope__card-content">
                <p className="services-scope__card-description">{service.description}</p>
                <Link to={service.link} className="services-scope__card-link">
                  LEARN MORE
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScope;
