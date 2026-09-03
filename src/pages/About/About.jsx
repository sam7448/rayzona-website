import './About.css';
import { Helmet } from 'react-helmet-async';
import aboutBg from '../../assets/images/aboutbg.jpg';
import { FaLeaf, FaAward, FaUsers, FaShieldAlt, FaCertificate, FaThumbsUp, FaTags, FaFileInvoiceDollar, FaTools, FaHeadset } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Rayzona Renewable Energy Pune</title>
        <meta name="description" content="Learn about Rayzona Renewable Energy — our mission, vision, and commitment to sustainable solar solutions across Maharashtra. Certified solar experts in Pune." />
        <meta name="keywords" content="about Rayzona Energy, solar company Pune, renewable energy company Maharashtra, solar installation experts" />
        <link rel="canonical" href="https://www.rayzonarenewablesenergy.com/about" />
        <meta property="og:url" content="https://www.rayzonarenewablesenergy.com/about" />
        <meta property="og:title" content="About Us | Rayzona Renewable Energy Pune" />
        <meta property="og:description" content="Learn about Rayzona Renewable Energy — our mission, vision, and commitment to sustainable solar solutions across Maharashtra." />
      </Helmet>
      <div className="about-page__hero">
        <div className="about-page__hero-bg" style={{ backgroundImage: `url(${aboutBg})` }}></div>
        <div className="about-page__hero-overlay"></div>
        <div className="about-page__container">
          <h1 className="about-page__title">
            About <span className="about-page__title--highlight">Rayzona</span>
          </h1>
          <div className="about-page__title-underline"></div>
          <p className="about-page__subtitle">
            Empowering the future with sustainable solar energy solutions.
          </p>
        </div>
        <div className="about-page__wave">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,85 1440,90 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="about-page__content">
        <div className="about-page__container">
          <div className="about-page__section">
            <h2 className="about-page__section-title">Our Story</h2>
            <p className="about-page__text">
              Rayzona is a leading solar energy company dedicated to providing sustainable and affordable solar solutions. Founded with a vision to make clean energy accessible to everyone, we have grown into a trusted partner for residential, commercial, and industrial solar installations across India.
            </p>
            <p className="about-page__text">
              Our team of experienced professionals combines technical expertise with customer-centric service to deliver solar solutions that meet the unique needs of each client. We believe in transparency, quality, and long-term partnerships.
            </p>
          </div>

          <div className="about-page__mission-vision">
            <div className="about-page__section">
              <h2 className="about-page__section-title">Our Mission</h2>
              <p className="about-page__text">
                To accelerate the adoption of solar energy by providing innovative, reliable, and cost-effective solutions that help our customers reduce their carbon footprint and energy costs while contributing to a sustainable future.
              </p>
            </div>

            <div className="about-page__section">
              <h2 className="about-page__section-title">Our Vision</h2>
              <p className="about-page__text">
                To be India's most trusted solar energy company, known for excellence in service, innovation in technology, and commitment to environmental sustainability. We envision a future where every home and business is powered by clean, renewable energy.
              </p>
            </div>
          </div>

          <div className="about-page__values">
            <h2 className="about-page__section-title about-page__section-title--center">Our Core Values</h2>
            <div className="about-page__values-grid">
              <div className="about-page__value-card">
                <div className="about-page__value-icon">
                  <FaLeaf />
                </div>
                <h3 className="about-page__value-title">Sustainability</h3>
                <p className="about-page__value-text">
                  Committed to environmental protection and promoting clean energy solutions.
                </p>
              </div>
              <div className="about-page__value-card">
                <div className="about-page__value-icon">
                  <FaAward />
                </div>
                <h3 className="about-page__value-title">Excellence</h3>
                <p className="about-page__value-text">
                  Delivering highest quality products and services with professional expertise.
                </p>
              </div>
              <div className="about-page__value-card">
                <div className="about-page__value-icon">
                  <FaUsers />
                </div>
                <h3 className="about-page__value-title">Customer Focus</h3>
                <p className="about-page__value-text">
                  Putting our customers first with personalized solutions and support.
                </p>
              </div>
              <div className="about-page__value-card">
                <div className="about-page__value-icon">
                  <FaShieldAlt />
                </div>
                <h3 className="about-page__value-title">Integrity</h3>
                <p className="about-page__value-text">
                  Operating with honesty, transparency, and ethical business practices.
                </p>
              </div>
            </div>
          </div>

          <div className="about-page__why-choose">
            <h2 className="about-page__section-title about-page__section-title--center">
              Why <span className="about-page__title--highlight">Choose Us?</span>
            </h2>
            <div className="about-page__why-grid">
              <div className="about-page__why-card">
                <div className="about-page__why-icon">
                  <FaCertificate />
                </div>
                <h3 className="about-page__why-title">Certified & Experienced Team</h3>
                <p className="about-page__why-text">
                  Skilled professionals ensuring quality and safety.
                </p>
              </div>
              <div className="about-page__why-card">
                <div className="about-page__why-icon">
                  <FaThumbsUp />
                </div>
                <h3 className="about-page__why-title">Premium Quality Solar Products</h3>
                <p className="about-page__why-text">
                  Top tier products for maximum performance.
                </p>
              </div>
              <div className="about-page__why-card">
                <div className="about-page__why-icon">
                  <FaTags />
                </div>
                <h3 className="about-page__why-title">Competitive Pricing</h3>
                <p className="about-page__why-text">
                  Best value solutions with affordable pricing.
                </p>
              </div>
              <div className="about-page__why-card">
                <div className="about-page__why-icon">
                  <FaFileInvoiceDollar />
                </div>
                <h3 className="about-page__why-title">Flexible Payment Options</h3>
                <p className="about-page__why-text">
                  Easy EMI and financing options available.
                </p>
              </div>
              <div className="about-page__why-card">
                <div className="about-page__why-icon">
                  <FaTools />
                </div>
                <h3 className="about-page__why-title">Expert Installation</h3>
                <p className="about-page__why-text">
                  Timely and professional installation for long-term efficiency.
                </p>
              </div>
              <div className="about-page__why-card">
                <div className="about-page__why-icon">
                  <FaHeadset />
                </div>
                <h3 className="about-page__why-title">Dedicated After-Sales Support</h3>
                <p className="about-page__why-text">
                  We are always here for your maintenance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
