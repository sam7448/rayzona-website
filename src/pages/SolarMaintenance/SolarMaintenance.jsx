import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';
import commercialImg from '../../assets/images/CommercialSolar.webp';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const SolarMaintenance = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="service-page">
      <Helmet>
        <title>Solar Panel Maintenance & AMC in Pune | RAYZONA RENEWABLES ENERGY</title>
        <meta name="description" content="Professional solar panel maintenance and AMC (Annual Maintenance Contract) services in Pune. Panel cleaning, inverter health check, system inspection. Keep your solar system at peak efficiency. RAYZONA RENEWABLES ENERGY." />
        <meta name="keywords" content="solar maintenance Pune, solar AMC Pune, solar panel cleaning Pune, solar inverter repair Pune, solar system maintenance Pune, solar panel service Pune" />
        <link rel="canonical" href={`${SITE_URL}/solar-maintenance`} />
        <meta property="og:url" content={`${SITE_URL}/solar-maintenance`} />
        <meta property="og:title" content="Solar Panel Maintenance & AMC Pune | RAYZONA RENEWABLES ENERGY" />
        <meta property="og:description" content="Solar maintenance and AMC in Pune. Panel cleaning, inverter health check, system inspection. Keep solar at peak output. Call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Solar Installation', url: `${SITE_URL}/solar-installation-pune` },
        { name: 'Solar Maintenance', url: `${SITE_URL}/solar-maintenance` }
      ]} />
      <ServiceSchema
        name="Solar Panel Maintenance and AMC Services in Pune"
        description="Professional solar panel maintenance, cleaning, and Annual Maintenance Contract (AMC) services for residential and commercial solar systems in Pune."
        url={`${SITE_URL}/solar-maintenance`}
      />

      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/solar-installation-pune">Solar Services</Link>
            <span>›</span>
            <span>Solar Maintenance</span>
          </nav>
          <h1 className="service-page__h1">Solar Panel Maintenance & AMC Services in Pune</h1>
          <p className="service-page__hero-desc">
            Keep your solar system running at peak performance with professional maintenance and AMC services from Rayzona Renewables Energy. We serve residential and commercial solar customers across Pune with regular cleaning, inspection, and inverter health checks.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to get solar panel maintenance and AMC for my system in Pune.')}>
              Book Solar Maintenance
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Get AMC Quote</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>Why Solar Maintenance Matters in Pune</h2>
            <p>Pune's climate — with dusty summers, monsoon debris, and bird droppings — can significantly reduce solar panel output if panels are not cleaned regularly. Studies show that dirty solar panels can lose 15–25% of their energy output.</p>
            <p>Regular maintenance also includes checking inverter performance, cable connections, mounting hardware, and monitoring data — catching small issues before they become expensive repairs.</p>
            <p>Rayzona offers flexible Annual Maintenance Contracts (AMC) for residential and commercial solar systems across all of Pune, including Hadapsar, Hinjewadi, Baner, Kothrud, and Pimpri-Chinchwad.</p>
          </div>
          <div className="service-page__intro-image">
            <img src={commercialImg} alt="Solar panel maintenance and cleaning service in Pune by Rayzona technician" loading="lazy" />
          </div>
        </div>

        <div className="service-page__benefits">
          <h2 className="service-page__section-title">What Our Solar AMC Covers</h2>
          <div className="service-page__benefits-grid">
            {[
              { icon: '🧹', title: 'Panel Cleaning', desc: 'Regular cleaning to remove dust, bird droppings, and debris that reduce solar panel output in Pune\'s dusty climate.' },
              { icon: '⚡', title: 'Inverter Health Check', desc: 'Complete inverter diagnostic to check voltage, frequency, fault codes, and performance efficiency.' },
              { icon: '🔌', title: 'DC/AC Wiring Inspection', desc: 'Inspection of all solar cables, connectors, and junction boxes for damage, corrosion, and loose connections.' },
              { icon: '📊', title: 'Performance Analysis', desc: 'Review of monitoring data to identify any underperforming panels or generation shortfalls compared to expected output.' },
              { icon: '🔩', title: 'Mounting Structure Check', desc: 'Inspection of panel mounting structure, clamps, and bolts — especially important after Pune\'s monsoon season.' },
              { icon: '📋', title: 'Maintenance Report', desc: 'Detailed written report after every service visit with findings, work done, and recommendations.' },
            ].map((b, i) => (
              <div key={i} className="service-page__benefit-card">
                <div className="service-page__benefit-icon" style={{fontSize:'2rem'}}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page__faq">
          <h2 className="service-page__section-title">FAQ — Solar Maintenance in Pune</h2>
          <div className="service-page__faq-list">
            {[
              { q: 'How often should solar panels be cleaned in Pune?', a: 'In Pune, solar panels should be cleaned at least 4 times per year — before summer, after monsoon, and twice during the dry season. Panels near construction sites or heavily trafficked areas may need more frequent cleaning.' },
              { q: 'What is the cost of solar AMC in Pune?', a: 'Solar AMC pricing depends on system size and scope. Contact Rayzona for a customised AMC quote. We offer competitive rates for both residential (1–10 kW) and commercial (10 kW+) systems across Pune.' },
              { q: 'Can Rayzona maintain solar systems installed by other companies?', a: 'Yes. Rayzona provides maintenance services for solar systems in Pune regardless of who installed them. We can diagnose issues and provide ongoing AMC support.' },
              { q: 'What happens if my solar inverter breaks down?', a: 'Rayzona provides inverter repair and replacement services for all major brands available in India. Our technicians carry common spare parts and can typically restore your system within 24–48 hours in Pune.' },
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
            <Link to="/ev-charging" className="service-page__related-link">EV Charging</Link>
            <Link to="/contact" className="service-page__related-link">Contact Us</Link>
          </div>
        </div>

        <div className="service-page__bottom-cta">
          <h2>Keep Your Solar System at Peak Performance</h2>
          <p>Don't let dust and dirt reduce your solar savings. Book a Rayzona maintenance service or AMC for your solar system in Pune today.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to book solar panel maintenance / AMC for my system in Pune.')}>
            Book Solar Maintenance Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolarMaintenance;
