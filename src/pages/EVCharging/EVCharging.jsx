import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const EVCharging = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="service-page">
      <Helmet>
        <title>EV Charging Station Installation Pune | Solar EV Charging | RAYZONA</title>
        <meta name="description" content="EV charging station installation in Pune for homes, offices, apartments & commercial complexes. Solar-powered EV charging solutions by RAYZONA RENEWABLES ENERGY. Free consultation — call +91 7448299293." />
        <meta name="keywords" content="EV charging station Pune, electric vehicle charging Pune, solar EV charging Pune, home EV charger installation Pune, commercial EV charging Pune" />
        <link rel="canonical" href={`${SITE_URL}/ev-charging`} />
        <meta property="og:url" content={`${SITE_URL}/ev-charging`} />
        <meta property="og:title" content="EV Charging Station Installation Pune | RAYZONA RENEWABLES ENERGY" />
        <meta property="og:description" content="EV charging station installation in Pune for homes & businesses. Solar-powered EV charging. Free consultation. Call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Solar Services', url: `${SITE_URL}/solar-installation-pune` },
        { name: 'EV Charging', url: `${SITE_URL}/ev-charging` }
      ]} />
      <ServiceSchema
        name="EV Charging Station Installation in Pune"
        description="EV charging station installation for homes, offices, apartments, and commercial complexes in Pune. Solar-powered EV charging solutions for sustainable mobility."
        url={`${SITE_URL}/ev-charging`}
      />

      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/solar-installation-pune">Our Services</Link>
            <span>›</span>
            <span>EV Charging</span>
          </nav>
          <h1 className="service-page__h1">EV Charging Station Installation in Pune</h1>
          <p className="service-page__hero-desc">
            Power your electric vehicle with clean solar energy. Rayzona Renewables Energy installs EV charging stations for homes, apartments, offices, and commercial complexes across Pune — including solar-integrated EV charging solutions for maximum sustainability and savings.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to install an EV charging station at my property in Pune.')}>
              Get EV Charging Quote
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>EV Charging Solutions for Pune Homes & Businesses</h2>
            <p>With electric vehicle adoption rapidly growing in Pune — across two-wheelers, cars, and commercial fleets — reliable EV charging infrastructure is becoming essential. Rayzona provides professional EV charging station installation across all types of properties in Pune.</p>
            <p>We install AC home chargers (Level 2) for residential use, DC fast chargers for commercial applications, and solar-integrated EV charging systems that let you charge your EV from your own solar panels — at near-zero fuel cost.</p>
            <p>Our EV charging installations cover housing societies, individual homes, office parking lots, hotels, commercial complexes, and fleet charging facilities across Hadapsar, Hinjewadi, Baner, Kharadi, Viman Nagar, and all of Pune.</p>
          </div>
          <div className="service-page__intro-image">
            <img src="/src/assets/images/AgriculturalSolarSystem.webp" alt="EV charging station installation at home and office in Pune" loading="lazy" />
          </div>
        </div>

        <div className="service-page__faq">
          <h2 className="service-page__section-title">FAQ — EV Charging in Pune</h2>
          <div className="service-page__faq-list">
            {[
              { q: 'How much does EV charging station installation cost in Pune?', a: 'Home EV charger installation (AC, Level 2) in Pune typically costs ₹8,000–₹20,000 for the charger and installation. Commercial DC fast chargers are more expensive. Rayzona provides transparent quotes based on your specific requirements.' },
              { q: 'Can I charge my EV from my solar panels in Pune?', a: 'Yes. A solar-integrated EV charging system uses energy from your rooftop solar panels to charge your electric vehicle — essentially giving you "free" fuel from sunshine. This is one of the most sustainable and cost-effective options for Pune EV owners.' },
              { q: 'What type of EV charger is best for home use in Pune?', a: 'For most Pune homeowners, a 7.4 kW AC Type-2 home charger is ideal. It can fully charge a typical electric car overnight. If you have solar panels, we pair the charger with your solar system for maximum savings.' },
              { q: 'Can EV charging stations be installed in housing societies in Pune?', a: 'Yes. Rayzona specialises in multi-point EV charging installations for cooperative housing societies in Pune. We design systems for shared parking areas, basements, and open car parks — with individual metering for each resident.' },
            ].map((f, i) => (
              <div key={i} className="service-page__faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page__related">
          <h2 className="service-page__section-title">Related Services</h2>
          <div className="service-page__related-grid">
            <Link to="/solar-installation-pune" className="service-page__related-link">Solar Installation Pune</Link>
            <Link to="/residential-solar" className="service-page__related-link">Residential Solar</Link>
            <Link to="/commercial-solar" className="service-page__related-link">Commercial Solar</Link>
            <Link to="/rooftop-solar" className="service-page__related-link">Rooftop Solar</Link>
            <Link to="/solar-maintenance" className="service-page__related-link">Solar Maintenance</Link>
            <Link to="/contact" className="service-page__related-link">Contact Us</Link>
          </div>
        </div>

        <div className="service-page__bottom-cta">
          <h2>Charge Your EV with Solar Energy in Pune</h2>
          <p>Combine rooftop solar with EV charging for the ultimate energy-saving solution. Contact Rayzona Renewables Energy for a free EV charging consultation in Pune.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to know more about EV charging station installation in Pune.')}>
            Get Free EV Charging Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EVCharging;
