import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const OnGridSolar = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="service-page">
      <Helmet>
        <title>On-Grid Solar System Pune | Grid-Connected Solar | RAYZONA</title>
        <meta name="description" content="On-grid solar system installation in Pune for homes and businesses. Grid-connected solar with MSEDCL net metering to reduce electricity bills by 90%. Expert installation by RAYZONA RENEWABLES ENERGY. Free quote." />
        <meta name="keywords" content="on-grid solar Pune, on-grid solar system Pune, grid connected solar Pune, net metering solar Pune, solar net metering MSEDCL Pune" />
        <link rel="canonical" href={`${SITE_URL}/on-grid-solar`} />
        <meta property="og:url" content={`${SITE_URL}/on-grid-solar`} />
        <meta property="og:title" content="On-Grid Solar System Pune | RAYZONA RENEWABLES ENERGY" />
        <meta property="og:description" content="On-grid solar system in Pune with MSEDCL net metering. Reduce electricity bills by 90%. Professional installation. Free quote — call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Solar Installation', url: `${SITE_URL}/solar-installation-pune` },
        { name: 'On-Grid Solar', url: `${SITE_URL}/on-grid-solar` }
      ]} />
      <ServiceSchema
        name="On-Grid Solar System Installation in Pune"
        description="Grid-connected on-grid solar system installation with MSEDCL net metering for residential and commercial properties in Pune."
        url={`${SITE_URL}/on-grid-solar`}
      />

      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/solar-installation-pune">Solar Installation</Link>
            <span>›</span>
            <span>On-Grid Solar</span>
          </nav>
          <h1 className="service-page__h1">On-Grid Solar System Installation in Pune</h1>
          <p className="service-page__hero-desc">
            The most popular and cost-effective solar solution in Pune — on-grid solar systems connect to the MSEDCL electricity grid, letting you use solar during the day and export surplus power for bill credits through net metering.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to install an on-grid solar system in Pune.')}>
              Get On-Grid Solar Quote
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>What is an On-Grid Solar System?</h2>
            <p>An on-grid (or grid-tied) solar system is connected directly to the electricity distribution grid — in Pune, that means the MSEDCL (Maharashtra State Electricity Distribution Company Limited) grid. During daylight hours, solar panels generate electricity that powers your home or business. Any surplus electricity is exported to the grid through a net meter.</p>
            <p>On-grid systems are the most cost-effective type of solar installation because they don't require expensive battery storage. They're ideal for properties in Pune that have reliable grid power and want to reduce their electricity bills with maximum savings per rupee invested.</p>
            <p>On-grid systems are eligible for the PM Surya Ghar Muft Bijli Yojana subsidy for residential customers in Pune — making them even more affordable.</p>
          </div>
          <div className="service-page__intro-image">
            <img src="/src/assets/images/ResidentialSolar.webp" alt="On-grid solar system installed on rooftop in Pune with MSEDCL net metering" loading="lazy" />
          </div>
        </div>

        <div className="service-page__faq">
          <h2 className="service-page__section-title">FAQ — On-Grid Solar in Pune</h2>
          <div className="service-page__faq-list">
            {[
              { q: 'How does on-grid solar net metering work in Pune?', a: 'With MSEDCL net metering, a bi-directional meter measures how much electricity your solar system exports to the grid vs how much you import. At the end of the billing cycle, you pay only for the net units consumed. If you export more than you import, the excess is carried forward as credit.' },
              { q: 'What is the on-grid solar subsidy in Pune?', a: 'Residential customers in Pune can get a central government subsidy of ₹30,000 for a 1 kW system, ₹60,000 for 2 kW, and ₹78,000 for 3 kW under PM Surya Ghar Muft Bijli Yojana. Rayzona handles the complete subsidy registration and claim process.' },
              { q: 'What happens during a power cut with an on-grid solar system?', a: 'On-grid systems automatically shut down during power outages — this is a safety requirement to protect MSEDCL linemen. If you need power during outages, a hybrid solar system with battery backup is the right choice.' },
              { q: 'How many units does a 3 kW on-grid solar system generate in Pune?', a: 'In Pune, a 3 kW on-grid solar system generates approximately 350–420 units of electricity per month on average, accounting for seasonal variation. This is enough for most residential consumers.' },
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
          <h2>Get an On-Grid Solar System in Pune</h2>
          <p>Contact Rayzona Renewables Energy for a free on-grid solar assessment and custom quote. We make the entire process smooth — from subsidy to commissioning.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to know more about on-grid solar systems for Pune.')}>
            Get Free On-Grid Solar Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnGridSolar;
