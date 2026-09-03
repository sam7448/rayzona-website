import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';
import { FaSolarPanel, FaHome, FaBuilding, FaIndustry, FaCheckCircle, FaTools, FaPhoneAlt } from 'react-icons/fa';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const SolarInstallationPune = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const faqs = [
    {
      q: 'How much does solar installation cost in Pune?',
      a: 'Solar installation cost in Pune depends on system size, type (on-grid, hybrid), and rooftop conditions. A 3 kW residential system typically ranges from ₹1.5–2 lakh after subsidy. Contact Rayzona for a free customised quote.'
    },
    {
      q: 'Is there a solar subsidy available in Pune?',
      a: 'Yes. Under PM Surya Ghar Muft Bijli Yojana, residential consumers can get a central government subsidy of up to 40% for systems up to 2 kW and 20% for 2–3 kW. Rayzona guides you through the entire subsidy application process.'
    },
    {
      q: 'How long does solar installation take in Pune?',
      a: 'A typical residential solar installation in Pune takes 2–4 days from site survey to commissioning, including panel mounting, inverter installation, and net metering application.'
    },
    {
      q: 'What areas in Pune does Rayzona serve?',
      a: 'Rayzona serves all of Pune including Hadapsar, Hinjewadi, Baner, Kothrud, Kharadi, Viman Nagar, Pimpri-Chinchwad, Wakad, Balewadi, Aundh, and surrounding areas.'
    },
    {
      q: 'What is the ROI on solar in Pune?',
      a: 'Most customers in Pune recover their solar investment in 4–6 years and enjoy free electricity for 20+ years. With rising electricity tariffs in Maharashtra, the savings compound each year.'
    }
  ];

  return (
    <div className="service-page">
      <Helmet>
        <title>Solar Panel Installation in Pune | RAYZONA RENEWABLES ENERGY</title>
        <meta name="description" content="Expert solar panel installation in Pune by RAYZONA RENEWABLES ENERGY. Residential, commercial & industrial solar for Pune, Pimpri-Chinchwad, Hinjewadi & all of Maharashtra. Free site survey. Call +91 7448299293." />
        <meta name="keywords" content="solar installation Pune, solar panel installation Pune, solar company Pune, best solar company Pune, solar EPC Pune, solar subsidy Pune" />
        <link rel="canonical" href={`${SITE_URL}/solar-installation-pune`} />
        <meta property="og:url" content={`${SITE_URL}/solar-installation-pune`} />
        <meta property="og:title" content="Solar Panel Installation in Pune | RAYZONA RENEWABLES ENERGY" />
        <meta property="og:description" content="Expert solar panel installation in Pune. Residential, commercial & industrial solar. Free site survey & subsidy guidance. Call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Solar Installation in Pune', url: `${SITE_URL}/solar-installation-pune` }
      ]} />
      <ServiceSchema
        name="Solar Panel Installation in Pune"
        description="Expert residential, commercial, and industrial solar panel installation across Pune and Maharashtra. Includes site survey, system design, installation, net metering, and subsidy guidance."
        url={`${SITE_URL}/solar-installation-pune`}
      />

      {/* Hero */}
      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Solar Installation in Pune</span>
          </nav>
          <h1 className="service-page__h1">Solar Panel Installation in Pune</h1>
          <p className="service-page__hero-desc">
            RAYZONA RENEWABLES ENERGY is Pune's trusted solar EPC company. We deliver end-to-end solar panel installation for homes, businesses, and industries — from free site survey to commissioning and net metering.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want a free solar installation quote for my property in Pune.')}>
              Get Free Solar Quote
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Request Site Survey</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">

        {/* Intro */}
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>Why Choose Rayzona for Solar Installation in Pune?</h2>
            <p>Rayzona Renewables Energy is a certified solar EPC (Engineering, Procurement & Construction) company based in Hadapsar, Pune. With 150+ successful solar installations across residential, commercial, and industrial segments, we bring the expertise and local knowledge needed to maximise your solar investment.</p>
            <p>We handle everything — free rooftop assessment, system design, quality panel procurement, professional installation, MSEDCL net metering application, and solar subsidy documentation under PM Surya Ghar Muft Bijli Yojana.</p>
            <p>Our installations serve customers across Pune, Pimpri-Chinchwad, Hinjewadi, Baner, Kothrud, Kharadi, Hadapsar, Viman Nagar, and all surrounding areas.</p>
          </div>
          <div className="service-page__intro-image">
            <img src="/src/assets/images/ResidentialSolar.webp" alt="Solar panel installation on residential rooftop in Pune by Rayzona Renewables Energy" loading="lazy" />
          </div>
        </div>

        {/* Benefits */}
        <div className="service-page__benefits">
          <h2 className="service-page__section-title">Benefits of Solar Installation in Pune</h2>
          <div className="service-page__benefits-grid">
            {[
              { icon: <FaSolarPanel />, title: 'Cut Electricity Bills by 90%', desc: 'Pune receives excellent solar radiation (5.5 kWh/m²/day). A correctly sized system can eliminate most of your monthly electricity bill.' },
              { icon: <FaCheckCircle />, title: 'Government Subsidy', desc: 'Get up to 40% central subsidy on residential rooftop solar under PM Surya Ghar. We handle all paperwork for you.' },
              { icon: <FaTools />, title: '25-Year Performance Warranty', desc: 'We use Tier-1 solar panels with 25-year output warranty, ensuring reliable long-term energy production.' },
              { icon: <FaHome />, title: 'Net Metering Benefit', desc: 'Export surplus solar energy to MSEDCL grid and earn credits on your electricity bill — maximising your savings.' },
              { icon: <FaBuilding />, title: 'Increase Property Value', desc: 'Homes and commercial properties with solar installations command higher resale value in Pune\'s real estate market.' },
              { icon: <FaIndustry />, title: 'Zero Carbon Footprint', desc: 'Solar energy is 100% clean and renewable — reduce your carbon footprint while saving money every month.' },
            ].map((b, i) => (
              <div key={i} className="service-page__benefit-card">
                <div className="service-page__benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="service-page__process">
          <h2 className="service-page__section-title">Our Solar Installation Process</h2>
          <div className="service-page__steps">
            {[
              { n: '1', title: 'Free Site Survey', desc: 'Our engineer visits your property in Pune to assess rooftop area, shading, structural strength, and electricity consumption.' },
              { n: '2', title: 'System Design & Proposal', desc: 'We design the optimal solar system size and provide a detailed proposal with expected savings, ROI, and subsidy calculations.' },
              { n: '3', title: 'Subsidy Application', desc: 'We handle all documentation for PM Surya Ghar Muft Bijli Yojana subsidy and MSEDCL approval on your behalf.' },
              { n: '4', title: 'Quality Installation', desc: 'Our certified installation team installs Tier-1 panels, mounting structures, and inverters with precision and care.' },
              { n: '5', title: 'Net Metering & Commissioning', desc: 'We complete MSEDCL net metering application and commission your system with full monitoring setup.' },
              { n: '6', title: 'After-Sales Support', desc: 'We provide AMC, cleaning, and ongoing technical support to ensure your system performs at its best for 25+ years.' },
            ].map((s, i) => (
              <div key={i} className="service-page__step">
                <div className="service-page__step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="service-page__faq">
          <h2 className="service-page__section-title">Frequently Asked Questions — Solar Installation Pune</h2>
          <div className="service-page__faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="service-page__faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related pages */}
        <div className="service-page__related">
          <h2 className="service-page__section-title">Explore Our Solar Services</h2>
          <div className="service-page__related-grid">
            <Link to="/residential-solar" className="service-page__related-link">Residential Solar</Link>
            <Link to="/commercial-solar" className="service-page__related-link">Commercial Solar</Link>
            <Link to="/rooftop-solar" className="service-page__related-link">Rooftop Solar</Link>
            <Link to="/on-grid-solar" className="service-page__related-link">On-Grid Solar</Link>
            <Link to="/solar-maintenance" className="service-page__related-link">Solar Maintenance</Link>
            <Link to="/ev-charging" className="service-page__related-link">EV Charging</Link>
            <Link to="/products-services" className="service-page__related-link">Solar Products</Link>
            <Link to="/contact" className="service-page__related-link">Contact Us</Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="service-page__bottom-cta">
          <h2>Ready to Go Solar in Pune?</h2>
          <p>Get a free rooftop assessment and customised solar proposal from Rayzona Renewables Energy. No obligation, no pressure — just expert advice on the best solar solution for your property.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want to schedule a free solar site survey for my property in Pune.')}>
            Request Free Site Survey
          </button>
        </div>

      </div>
    </div>
  );
};

export default SolarInstallationPune;
