import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';
import rooftopImg from '../../assets/images/RooftopSolar.webp';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const RooftopSolar = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="service-page">
      <Helmet>
        <title>Rooftop Solar Installation Pune | Rooftop Solar Panel | RAYZONA</title>
        <meta name="description" content="Rooftop solar panel installation in Pune for homes and businesses. On-grid rooftop solar with net metering, subsidy & 25-year warranty. Hadapsar, Hinjewadi, Baner & all Pune. RAYZONA RENEWABLES ENERGY." />
        <meta name="keywords" content="rooftop solar Pune, rooftop solar installation Pune, rooftop solar panel Pune, rooftop solar system Pune, rooftop solar for home Pune" />
        <link rel="canonical" href={`${SITE_URL}/rooftop-solar`} />
        <meta property="og:url" content={`${SITE_URL}/rooftop-solar`} />
        <meta property="og:title" content="Rooftop Solar Installation Pune | RAYZONA RENEWABLES ENERGY" />
        <meta property="og:description" content="Rooftop solar installation in Pune for homes & businesses. Net metering, subsidy, 25-year warranty. Free rooftop assessment. Call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Solar Installation', url: `${SITE_URL}/solar-installation-pune` },
        { name: 'Rooftop Solar', url: `${SITE_URL}/rooftop-solar` }
      ]} />
      <ServiceSchema
        name="Rooftop Solar Panel Installation in Pune"
        description="Rooftop solar panel installation for residential and commercial buildings in Pune. On-grid systems with MSEDCL net metering, PM Surya Ghar subsidy, and 25-year warranty."
        url={`${SITE_URL}/rooftop-solar`}
      />

      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/solar-installation-pune">Solar Installation</Link>
            <span>›</span>
            <span>Rooftop Solar</span>
          </nav>
          <h1 className="service-page__h1">Rooftop Solar Installation in Pune — Reduce Bills by 90%</h1>
          <p className="service-page__hero-desc">
            Harness Pune's abundant sunshine with a rooftop solar system. Rayzona Renewables Energy designs and installs on-grid rooftop solar panels for homes and businesses across Pune — with MSEDCL net metering, government subsidy support, and 25-year panel warranty.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want a free rooftop solar assessment for my property in Pune.')}>
              Get Free Rooftop Assessment
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>Why Rooftop Solar is Ideal for Pune Properties</h2>
            <p>Pune is one of India's sunniest cities, receiving an average of 5.5 kWh of solar radiation per square metre per day. This makes rooftop solar an exceptionally effective investment — your unused rooftop becomes a power generation asset that pays for itself in 4–6 years.</p>
            <p>Whether you own a bungalow in Baner, a flat complex in Kothrud, an office in Hinjewadi, or a factory in Pimpri-Chinchwad, Rayzona can design the right rooftop solar system for your specific situation.</p>
            <p>We conduct free structural assessments to ensure your roof can safely support solar panels, and handle all documentation for subsidy and net metering approvals.</p>
          </div>
          <div className="service-page__intro-image">
            <img src={rooftopImg} alt="Rooftop solar panel installation in Pune on residential and commercial building" loading="lazy" />
          </div>
        </div>

        <div className="service-page__process">
          <h2 className="service-page__section-title">Rooftop Solar Installation Process in Pune</h2>
          <div className="service-page__steps">
            {[
              { n: '1', title: 'Free Rooftop Assessment', desc: 'We visit your Pune property, measure available rooftop area, check shading, structural strength, and current electricity consumption.' },
              { n: '2', title: 'System Sizing & Design', desc: 'Based on your consumption and rooftop area, we design the optimal kW system with panel layout and expected generation output.' },
              { n: '3', title: 'Subsidy Registration', desc: 'We register your rooftop solar under PM Surya Ghar Muft Bijli Yojana and process subsidy application before installation.' },
              { n: '4', title: 'Rooftop Installation', desc: 'Our certified team installs mounting structure, solar panels, DC cables, inverter, and AC wiring safely and professionally.' },
              { n: '5', title: 'MSEDCL Net Metering', desc: 'We handle the complete MSEDCL net metering application, meter change, and commissioning for your Pune property.' },
              { n: '6', title: 'Monitoring & AMC', desc: 'Real-time monitoring setup and annual maintenance services to ensure your rooftop solar system performs optimally for 25+ years.' },
            ].map((s, i) => (
              <div key={i} className="service-page__step">
                <div className="service-page__step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page__faq">
          <h2 className="service-page__section-title">FAQ — Rooftop Solar in Pune</h2>
          <div className="service-page__faq-list">
            {[
              { q: 'How much rooftop area is needed for solar in Pune?', a: 'As a rule of thumb, you need approximately 100 sq ft (10 sq m) of shadow-free rooftop area per kW of solar capacity. A 3 kW system needs roughly 300 sq ft and is sufficient for most Pune homes.' },
              { q: 'What type of roof is suitable for solar panel installation?', a: 'RCC (concrete) rooftops are ideal. Mangalore tile, metal sheet, and trapezoidal sheet roofs are also suitable with the right mounting structure. Rayzona assesses your roof type during the free site visit.' },
              { q: 'Can rooftop solar work during power cuts in Pune?', a: 'Standard on-grid rooftop solar does not work during power cuts for safety reasons. If you need power backup, a hybrid solar system with battery storage is the right solution. We offer both.' },
              { q: 'What is the lifespan of rooftop solar panels in Pune?', a: 'Tier-1 solar panels are warranted for 25 years and have a productive life of 30+ years. Inverters typically last 10–15 years. Pune\'s dry climate is ideal for solar panel longevity.' },
            ].map((f, i) => (
              <div key={i} className="service-page__faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page__related">
          <h2 className="service-page__section-title">Related Solar Services</h2>
          <div className="service-page__related-grid">
            <Link to="/solar-installation-pune" className="service-page__related-link">Solar Installation Pune</Link>
            <Link to="/residential-solar" className="service-page__related-link">Residential Solar</Link>
            <Link to="/commercial-solar" className="service-page__related-link">Commercial Solar</Link>
            <Link to="/on-grid-solar" className="service-page__related-link">On-Grid Solar</Link>
            <Link to="/solar-maintenance" className="service-page__related-link">Solar Maintenance</Link>
            <Link to="/contact" className="service-page__related-link">Contact Us</Link>
          </div>
        </div>

        <div className="service-page__bottom-cta">
          <h2>Turn Your Rooftop into a Power Plant</h2>
          <p>Your unused rooftop is a valuable energy asset. Let Rayzona Renewables Energy turn it into a solar power plant that saves you money every month for 25+ years.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to install rooftop solar panels at my property in Pune.')}>
            Start My Rooftop Solar Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default RooftopSolar;
