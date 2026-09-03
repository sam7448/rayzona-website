import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';
import { FaHome, FaSolarPanel, FaCheckCircle, FaRupeeSign, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const ResidentialSolar = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="service-page">
      <Helmet>
        <title>Residential Solar Panel Installation Pune | Home Solar | RAYZONA</title>
        <meta name="description" content="Residential solar panel installation in Pune for homes and housing societies. Reduce home electricity bills by 90%. Subsidy guidance, net metering & AMC included. Free home visit by RAYZONA RENEWABLES ENERGY." />
        <meta name="keywords" content="residential solar Pune, home solar panel installation Pune, rooftop solar for home Pune, solar for housing society Pune, solar subsidy home Pune" />
        <link rel="canonical" href={`${SITE_URL}/residential-solar`} />
        <meta property="og:url" content={`${SITE_URL}/residential-solar`} />
        <meta property="og:title" content="Residential Solar Panel Installation Pune | RAYZONA" />
        <meta property="og:description" content="Residential solar for homes in Pune. Cut electricity bills by 90%, get government subsidy, net metering. Free home visit. Call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Residential Solar', url: `${SITE_URL}/residential-solar` }
      ]} />
      <ServiceSchema
        name="Residential Solar Panel Installation in Pune"
        description="Home solar panel installation for residential properties in Pune. On-grid rooftop solar systems with subsidy guidance, MSEDCL net metering, and annual maintenance."
        url={`${SITE_URL}/residential-solar`}
      />

      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/solar-installation-pune">Solar Installation</Link>
            <span>›</span>
            <span>Residential Solar</span>
          </nav>
          <h1 className="service-page__h1">Residential Solar Panel Installation in Pune</h1>
          <p className="service-page__hero-desc">
            Power your home in Pune with clean, affordable solar energy. Rayzona Renewables Energy provides end-to-end residential solar installation — from free home visit and subsidy documentation to installation and net metering with MSEDCL.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want a free solar quote for my home in Pune.')}>
              Get Free Home Solar Quote
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Book Free Home Visit</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>Solar Energy for Your Home in Pune</h2>
            <p>Pune's abundant sunshine (5.5 kWh/m²/day) makes it one of India's best cities for residential solar. With rising MSEDCL electricity tariffs and government subsidies available, there has never been a better time for Pune homeowners to switch to solar.</p>
            <p>Rayzona installs on-grid rooftop solar systems for individual homes, bungalows, villas, and housing societies across Hadapsar, Hinjewadi, Baner, Kothrud, Kharadi, Pimpri-Chinchwad, and all of Pune.</p>
            <p>Our residential installations include PM Surya Ghar Muft Bijli Yojana subsidy processing, MSEDCL net metering application, and 25-year panel performance warranty.</p>
          </div>
          <div className="service-page__intro-image">
            <img src="/src/assets/images/ResidentialSolar.webp" alt="Residential rooftop solar installation on home in Pune" loading="lazy" />
          </div>
        </div>

        <div className="service-page__benefits">
          <h2 className="service-page__section-title">Benefits of Home Solar in Pune</h2>
          <div className="service-page__benefits-grid">
            {[
              { icon: <FaRupeeSign />, title: 'Save ₹3,000–₹8,000/Month', desc: 'A 3–5 kW home solar system in Pune can eliminate 80–100% of your monthly electricity bill.' },
              { icon: <FaSolarPanel />, title: 'Govt Subsidy up to 40%', desc: 'Central government subsidises residential solar: 40% for ≤2kW, 20% for 2–3kW systems.' },
              { icon: <FaCheckCircle />, title: 'Net Metering with MSEDCL', desc: 'Sell excess electricity back to MSEDCL grid and earn bill credits — maximise your returns.' },
              { icon: <FaHome />, title: '4–6 Year Payback', desc: 'With subsidies and net metering, most Pune homeowners recover investment in 4–6 years.' },
              { icon: <FaShieldAlt />, title: '25-Year Warranty', desc: 'Tier-1 solar panels with 25-year output guarantee and 5-year workmanship warranty.' },
              { icon: <FaLeaf />, title: 'Zero Carbon Emissions', desc: 'One home solar system prevents ~2 tonnes of CO₂ emissions per year — a meaningful climate contribution.' },
            ].map((b, i) => (
              <div key={i} className="service-page__benefit-card">
                <div className="service-page__benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page__process">
          <h2 className="service-page__section-title">How We Install Residential Solar in Pune</h2>
          <div className="service-page__steps">
            {[
              { n: '1', title: 'Free Home Visit', desc: 'Our solar expert visits your Pune home to assess rooftop space, shading, structure, and energy consumption.' },
              { n: '2', title: 'Custom System Design', desc: 'We design the optimal kW system for your home\'s load, roof area, and budget — with expected savings.' },
              { n: '3', title: 'Subsidy Processing', desc: 'We register your system under PM Surya Ghar and file subsidy claim — you receive subsidy directly in your bank account.' },
              { n: '4', title: 'Professional Installation', desc: 'Certified technicians install panels, mounting structure, inverter, and wiring safely and neatly on your rooftop.' },
              { n: '5', title: 'Net Metering Setup', desc: 'We apply to MSEDCL for net metering and handle all paperwork so you start exporting surplus solar energy.' },
              { n: '6', title: 'AMC & Support', desc: 'We provide annual maintenance, cleaning, and 24/7 support to keep your home solar system running at peak efficiency.' },
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
          <h2 className="service-page__section-title">FAQ — Residential Solar in Pune</h2>
          <div className="service-page__faq-list">
            {[
              { q: 'What size solar system do I need for my home in Pune?', a: 'For an average Pune home consuming 300–500 units/month, a 3–5 kW on-grid solar system is typically recommended. Our engineer will calculate the exact size based on your actual consumption and rooftop space.' },
              { q: 'How much does a home solar system cost in Pune?', a: 'A 3 kW home solar system in Pune costs approximately ₹1.5–2 lakh after PM Surya Ghar subsidy. Without subsidy, total cost is around ₹2–2.5 lakh. Rayzona provides transparent, competitive pricing.' },
              { q: 'Can I install solar in a flat or apartment in Pune?', a: 'For apartments, a group net metering or cooperative housing society solar installation is possible. Individual rooftop solar works best for independent houses, bungalows, and villas.' },
              { q: 'What is the maintenance required for home solar panels?', a: 'Solar panels need minimal maintenance — primarily bi-annual cleaning to remove dust. Rayzona offers Annual Maintenance Contracts (AMC) to ensure your system runs efficiently throughout its lifetime.' },
              { q: 'Will solar work during Maharashtra monsoon?', a: 'Yes. Solar panels still generate electricity on overcast days, though at reduced capacity. Pune\'s high annual sunshine hours (more than 300 sunny days) more than compensates for cloudy monsoon periods.' },
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
            <Link to="/commercial-solar" className="service-page__related-link">Commercial Solar</Link>
            <Link to="/rooftop-solar" className="service-page__related-link">Rooftop Solar</Link>
            <Link to="/on-grid-solar" className="service-page__related-link">On-Grid Solar</Link>
            <Link to="/solar-maintenance" className="service-page__related-link">Solar Maintenance</Link>
            <Link to="/contact" className="service-page__related-link">Contact Us</Link>
          </div>
        </div>

        <div className="service-page__bottom-cta">
          <h2>Start Saving on Your Home Electricity Bills Today</h2>
          <p>Join 150+ happy Pune homeowners who have switched to solar with Rayzona Renewables Energy. Get your free home solar assessment and customised quote — no obligation.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to book a free home solar visit in Pune.')}>
            Book Free Home Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentialSolar;
