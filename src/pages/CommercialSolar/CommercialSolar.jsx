import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../ServicePage.css';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ServiceSchema from '../../seo/ServiceSchema';
import { FaBuilding, FaIndustry, FaChartLine, FaRupeeSign, FaBolt, FaShieldAlt } from 'react-icons/fa';
import commercialImg from '../../assets/images/CommercialSolar.webp';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';
const WHATSAPP = '917448299293';

const CommercialSolar = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="service-page">
      <Helmet>
        <title>Commercial Solar Installation Pune | Business Solar | RAYZONA</title>
        <meta name="description" content="Commercial solar panel installation in Pune for offices, shops, warehouses & industries. Reduce business electricity costs by 70–90%. RAYZONA RENEWABLES ENERGY — trusted commercial solar EPC in Pune. Free energy audit." />
        <meta name="keywords" content="commercial solar Pune, solar for business Pune, commercial solar installation Pune, industrial solar Pune, solar EPC commercial Pune, office solar panel Pune" />
        <link rel="canonical" href={`${SITE_URL}/commercial-solar`} />
        <meta property="og:url" content={`${SITE_URL}/commercial-solar`} />
        <meta property="og:title" content="Commercial Solar Installation Pune | Business Solar | RAYZONA" />
        <meta property="og:description" content="Commercial solar installation in Pune for offices, shops & industries. Save 70–90% on business electricity. Free energy audit. Call +91 7448299293." />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Solar Installation', url: `${SITE_URL}/solar-installation-pune` },
        { name: 'Commercial Solar', url: `${SITE_URL}/commercial-solar` }
      ]} />
      <ServiceSchema
        name="Commercial Solar Installation in Pune"
        description="Commercial and industrial solar panel installation for offices, shops, warehouses, and factories in Pune. On-grid systems with net metering and energy audit."
        url={`${SITE_URL}/commercial-solar`}
      />

      <section className="service-page__hero">
        <div className="service-page__hero-inner">
          <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/solar-installation-pune">Solar Installation</Link>
            <span>›</span>
            <span>Commercial Solar</span>
          </nav>
          <h1 className="service-page__h1">Commercial Solar Installation in Pune</h1>
          <p className="service-page__hero-desc">
            Cut your business electricity costs by 70–90% with commercial solar installation in Pune. Rayzona Renewables Energy designs and installs solar systems for offices, factories, warehouses, hotels, schools, and commercial complexes across Pune and Pimpri-Chinchwad.
          </p>
          <div className="service-page__hero-cta">
            <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I need commercial solar installation for my business in Pune.')}>
              Get Commercial Solar Quote
            </button>
            <Link to="/contact" className="service-page__btn-secondary">Book Free Energy Audit</Link>
          </div>
        </div>
      </section>

      <div className="service-page__content">
        <div className="service-page__intro">
          <div className="service-page__intro-text">
            <h2>Solar Energy Solutions for Pune Businesses</h2>
            <p>For businesses in Pune, electricity is one of the largest operational costs. Commercial electricity tariffs in Maharashtra are significantly higher than residential rates — making solar an essential business investment with strong ROI.</p>
            <p>Rayzona designs and installs commercial solar systems from 10 kW to 500+ kW for offices in Hinjewadi IT Park, factories in Pimpri-Chinchwad, warehouses in Bhosari, hotels across Pune, and commercial complexes throughout the city.</p>
            <p>Our commercial solar installations include detailed energy audits, custom system design, MSEDCL commercial net metering, and long-term AMC support to ensure your investment delivers maximum returns.</p>
          </div>
          <div className="service-page__intro-image">
            <img src={commercialImg} alt="Commercial solar panel installation on office rooftop in Pune" loading="lazy" />
          </div>
        </div>

        <div className="service-page__benefits">
          <h2 className="service-page__section-title">Why Businesses in Pune Choose Solar</h2>
          <div className="service-page__benefits-grid">
            {[
              { icon: <FaRupeeSign />, title: 'Reduce OpEx Significantly', desc: 'Commercial electricity in Maharashtra is expensive. Solar directly reduces operating costs and improves profit margins.' },
              { icon: <FaChartLine />, title: '3–5 Year ROI for Businesses', desc: 'Commercial solar in Pune typically delivers ROI in 3–5 years with the system running profitably for 20+ years.' },
              { icon: <FaBolt />, title: 'Accelerated Depreciation', desc: 'Businesses can claim 40% accelerated depreciation on solar assets under the Income Tax Act, further improving ROI.' },
              { icon: <FaBuilding />, title: 'Net Metering for Businesses', desc: 'Export surplus solar power to the grid and receive bill credits — even on weekends and holidays when output may exceed consumption.' },
              { icon: <FaIndustry />, title: 'Scalable from 10kW–1MW', desc: 'We design commercial solar systems that match your exact load and roof space — from small shops to large factories.' },
              { icon: <FaShieldAlt />, title: 'ESG & CSR Compliance', desc: 'Solar adoption demonstrates environmental commitment, supporting your ESG reporting, CSR goals, and green certifications.' },
            ].map((b, i) => (
              <div key={i} className="service-page__benefit-card">
                <div className="service-page__benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page__faq">
          <h2 className="service-page__section-title">FAQ — Commercial Solar in Pune</h2>
          <div className="service-page__faq-list">
            {[
              { q: 'What size solar system does a Pune office or factory need?', a: 'System size depends on your monthly electricity consumption and available rooftop area. A 50 kW system generates roughly 5,500–6,000 units/month in Pune. Rayzona conducts a free energy audit to determine the exact size for your business.' },
              { q: 'Is there a subsidy for commercial solar in Pune?', a: 'Central subsidies under PM Surya Ghar are primarily for residential consumers. However, businesses in Maharashtra can avail of 40% accelerated depreciation benefit and state-level incentives. We advise on all available commercial solar benefits.' },
              { q: 'How long does commercial solar installation take?', a: 'A standard commercial solar installation in Pune (10–100 kW) typically takes 5–15 working days depending on system size, structural work required, and MSEDCL approval timelines.' },
              { q: 'Which industries in Pune benefit most from commercial solar?', a: 'IT companies in Hinjewadi, manufacturing units in Pimpri-Chinchwad, warehouses in Bhosari, hotels and restaurants, hospitals, educational institutions, and retail complexes across Pune — all benefit significantly from commercial solar installation.' },
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
            <Link to="/rooftop-solar" className="service-page__related-link">Rooftop Solar</Link>
            <Link to="/on-grid-solar" className="service-page__related-link">On-Grid Solar</Link>
            <Link to="/solar-maintenance" className="service-page__related-link">Solar Maintenance</Link>
            <Link to="/contact" className="service-page__related-link">Contact Us</Link>
          </div>
        </div>

        <div className="service-page__bottom-cta">
          <h2>Reduce Your Business Electricity Costs with Solar</h2>
          <p>Get a free commercial energy audit and solar proposal for your business in Pune. Rayzona Renewables Energy specialises in commercial solar EPC from 10 kW to 1 MW+.</p>
          <button className="service-page__btn-primary" onClick={() => handleWhatsApp('Hi, I want a free commercial solar energy audit for my business in Pune.')}>
            Book Free Energy Audit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialSolar;
