import { Helmet } from 'react-helmet-async';
import SolarCalculator from '../../components/SolarCalculator/SolarCalculator';
import FAQSchema from '../../seo/FAQSchema';
import BreadcrumbSchema from '../../seo/BreadcrumbSchema';
import ApplyNow from '../../components/ApplyNow/ApplyNow';
import CTA from '../../components/CTA/CTA';
import './SolarCalculatorPage.css';

const SITE_URL = 'https://rayzonarenewablesenergy.com';

const calculatorFaqs = [
  {
    q: 'How much subsidy do I get under PM Surya Ghar Muft Bijli Yojana in Pune?',
    a: 'Under PM Surya Ghar, residential consumers receive ₹30,000 for a 1 kW system, ₹60,000 for a 2 kW system, and a maximum central subsidy of ₹78,000 for systems of 3 kW or higher. Rayzona handles the complete registration and subsidy filing on the national portal.'
  },
  {
    q: 'How is the subsidy disbursed to my account?',
    a: 'After Rayzona completes your solar installation and MSEDCL installs the net-meter, we upload the commissioning report and inspection details to the PM Surya Ghar National Portal. The central government transfers the subsidy directly to your Aadhaar-linked bank account within 30 to 45 days.'
  },
  {
    q: 'How much rooftop area is required for a 3 kW solar system in Pune?',
    a: 'A standard 3 kW residential solar system requires approximately 250 to 300 square feet of shadow-free rooftop space. High-efficiency Mono PERC / TopCon panels are used to generate maximum electricity in minimal space.'
  },
  {
    q: 'How do I get an exact price quotation for my rooftop?',
    a: 'Solar system pricing is customized based on your roof type, structural elevation, inverter specifications, and energy consumption. Rayzona provides a free on-site survey and a transparent quotation with maximum eligible government subsidies deducted.'
  },
  {
    q: 'Can housing societies (RWAs / Apartment complexes) claim PM Surya Ghar subsidy in Pune?',
    a: 'Yes. Group Housing Societies (GHS) and Resident Welfare Associations (RWA) in Pune can receive ₹18,000 per kW for common area lighting and EV charging solar setups (up to 500 kW capacity).'
  }
];

const SolarCalculatorPage = () => {
  return (
    <div className="solar-calc-page">
      <Helmet>
        <title>PM Surya Ghar Solar Subsidy Calculator Pune | Rayzona Renewables Energy</title>
        <meta 
          name="description" 
          content="Calculate your PM Surya Ghar Muft Bijli Yojana subsidy, rooftop solar system generation, and monthly savings in Pune with Rayzona Renewables Energy. Claim up to ₹78,000 subsidy." 
        />
        <meta 
          name="keywords" 
          content="PM Surya Ghar calculator Pune, solar subsidy calculator Pune, rooftop solar Pune, solar savings calculator, PM Surya Ghar subsidy Maharashtra, solar installation subsidy" 
        />
        <link rel="canonical" href={`${SITE_URL}/solar-calculator`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/solar-calculator`} />
        <meta property="og:site_name" content="Rayzona Renewables Energy" />
        <meta property="og:title" content="PM Surya Ghar Solar Subsidy Calculator Pune | Rayzona Renewables Energy" />
        <meta property="og:description" content="Calculate your PM Surya Ghar subsidy, generation capacity, and monthly electricity bill savings in Pune instantly." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PM Surya Ghar Solar Subsidy Calculator Pune | Rayzona Renewables Energy" />
        <meta name="twitter:description" content="Calculate your PM Surya Ghar subsidy and solar savings in Pune." />
      </Helmet>

      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'PM Surya Ghar Solar Calculator', url: `${SITE_URL}/solar-calculator` }
        ]}
      />

      <FAQSchema faqs={calculatorFaqs} />

      {/* Hero Header */}
      <div className="solar-calc-page__hero">
        <div className="solar-calc-page__hero-container">
          <span className="solar-calc-page__badge">OFFICIAL SUBSIDY GUIDE 2026</span>
          <h1 className="solar-calc-page__title">
            PM Surya Ghar <span className="solar-calc-page__highlight">Solar Subsidy Calculator</span> Pune
          </h1>
          <p className="solar-calc-page__desc">
            Find out your eligible subsidy under PM Surya Ghar Muft Bijli Yojana, generation capacity, and monthly power bill savings in Pune and Maharashtra.
          </p>
        </div>
      </div>

      {/* Interactive Calculator Component */}
      <SolarCalculator />

      {/* Subsidy Slab Guide Table (NO PRICES) */}
      <section className="solar-calc-page__table-section">
        <div className="solar-calc-page__table-container">
          <h2 className="solar-calc-page__section-title">
            PM Surya Ghar Muft Bijli Yojana — <span className="solar-calc-page__highlight">Subsidy Slabs 2026</span>
          </h2>
          <p className="solar-calc-page__section-subtitle">
            Government of India Central Financial Assistance (CFA) for Residential Rooftop Solar
          </p>

          <div className="solar-calc-page__table-responsive">
            <table className="solar-calc-page__table">
              <thead>
                <tr>
                  <th>System Capacity</th>
                  <th>Suitable Monthly Bill</th>
                  <th>PM Surya Ghar Subsidy</th>
                  <th>Est. Monthly Generation</th>
                  <th>Monthly Bill Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 kW System</strong></td>
                  <td>₹1,000 – ₹1,800</td>
                  <td className="solar-calc-page__subsidy-td">₹30,000</td>
                  <td>~120–130 Units</td>
                  <td>Up to 90% (~₹1,200/mo)</td>
                </tr>
                <tr>
                  <td><strong>2 kW System</strong></td>
                  <td>₹1,800 – ₹3,500</td>
                  <td className="solar-calc-page__subsidy-td">₹60,000</td>
                  <td>~240–260 Units</td>
                  <td>Up to 90% (~₹2,500/mo)</td>
                </tr>
                <tr className="solar-calc-page__highlight-row">
                  <td><strong>3 kW System (Most Popular)</strong></td>
                  <td>₹3,500 – ₹5,500</td>
                  <td className="solar-calc-page__subsidy-td"><strong>₹78,000</strong> (Max Cap)</td>
                  <td><strong>~360–400 Units</strong></td>
                  <td><strong>Up to 90% (~₹4,200/mo)</strong></td>
                </tr>
                <tr>
                  <td><strong>4 kW System</strong></td>
                  <td>₹5,500 – ₹7,500</td>
                  <td className="solar-calc-page__subsidy-td">₹78,000</td>
                  <td>~480–520 Units</td>
                  <td>Up to 90% (~₹5,500/mo)</td>
                </tr>
                <tr>
                  <td><strong>5 kW System</strong></td>
                  <td>₹7,500 – ₹10,000</td>
                  <td className="solar-calc-page__subsidy-td">₹78,000</td>
                  <td>~600–650 Units</td>
                  <td>Up to 90% (~₹7,200/mo)</td>
                </tr>
                <tr>
                  <td><strong>10 kW System</strong></td>
                  <td>₹15,000+</td>
                  <td className="solar-calc-page__subsidy-td">₹78,000</td>
                  <td>~1,200–1,300 Units</td>
                  <td>Up to 90% (~₹15,000+/mo)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step by Step Process Section */}
      <section className="solar-calc-page__steps-section">
        <div className="solar-calc-page__steps-container">
          <h2 className="solar-calc-page__section-title">
            How Rayzona Processes Your <span className="solar-calc-page__highlight">PM Surya Ghar Subsidy</span>
          </h2>
          
          <div className="solar-calc-page__steps-grid">
            <div className="solar-calc-page__step-card">
              <span className="solar-calc-page__step-num">1</span>
              <h3>Free Site Survey</h3>
              <p>Our engineers visit your property in Pune to measure roof shadow patterns and analyze your MSEDCL electricity bill.</p>
            </div>
            <div className="solar-calc-page__step-card">
              <span className="solar-calc-page__step-num">2</span>
              <h3>Portal Registration</h3>
              <p>We register your application on the official PM Surya Ghar National Portal and obtain DISCOM (MSEDCL) approval.</p>
            </div>
            <div className="solar-calc-page__step-card">
              <span className="solar-calc-page__step-num">3</span>
              <h3>Turnkey Installation</h3>
              <p>We install Tier-1 solar panels, branded on-grid inverters, certified earthing, and lightning arresters.</p>
            </div>
            <div className="solar-calc-page__step-card">
              <span className="solar-calc-page__step-num">4</span>
              <h3>Net-Meter &amp; Subsidy Direct Credit</h3>
              <p>MSEDCL installs the bi-directional net-meter. The government transfers up to ₹78,000 directly to your bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="solar-calc-page__faqs-section">
        <div className="solar-calc-page__faqs-container">
          <h2 className="solar-calc-page__section-title">
            Frequently Asked <span className="solar-calc-page__highlight">Questions</span>
          </h2>
          <div className="solar-calc-page__faqs-grid">
            {calculatorFaqs.map((faq, index) => (
              <div key={index} className="solar-calc-page__faq-card">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form & CTA */}
      <ApplyNow />
      <CTA />
    </div>
  );
};

export default SolarCalculatorPage;
