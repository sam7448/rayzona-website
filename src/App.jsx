import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Layout
import TopHeader from './components/TopHeader/TopHeader';
import GreenNav from './components/GreenNav/GreenNav';
import Footer from './components/Footer/Footer';

// Home sections
import GreenHero from './components/GreenHero/GreenHero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import BrandLogos from './components/BrandLogos/BrandLogos';
import SolarSolutions from './components/SolarSolutions/SolarSolutions';
import ServicesScope from './components/ServicesScope/ServicesScope';
import SolarCalculator from './components/SolarCalculator/SolarCalculator';
import Testimonials from './components/Testimonials/Testimonials';
import ApplyNow from './components/ApplyNow/ApplyNow';
import FAQs from './components/FAQs/FAQs';
import CTA from './components/CTA/CTA';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';
import FloatingActions from './components/FloatingActions/FloatingActions';

// Pages
import ProductsServices from './pages/ProductsServices/ProductsServices';
import AboutPage from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SolarCalculatorPage from './pages/SolarCalculator/SolarCalculatorPage';
import SolarInstallationPune from './pages/SolarInstallationPune/SolarInstallationPune';
import ResidentialSolar from './pages/ResidentialSolar/ResidentialSolar';
import CommercialSolar from './pages/CommercialSolar/CommercialSolar';
import RooftopSolar from './pages/RooftopSolar/RooftopSolar';
import OnGridSolar from './pages/OnGridSolar/OnGridSolar';
import SolarMaintenance from './pages/SolarMaintenance/SolarMaintenance';
import EVCharging from './pages/EVCharging/EVCharging';
import NotFound from './pages/NotFound/NotFound';

// SEO
import LocalBusinessSchema from './seo/LocalBusinessSchema';
import FAQSchema from './seo/FAQSchema';
import WebsiteSchema from './seo/WebsiteSchema';

const SITE_URL = 'https://www.rayzonarenewablesenergy.com';

const HomePage = () => (
  <>
    <Helmet>
      <title>Rayzona Renewables Energy | Solar Panel Installation in Pune</title>
      <meta name="description" content="Rayzona Renewables Energy — expert solar panel installation in Pune for homes, businesses & industries. Residential & commercial rooftop solar, EV charging & maintenance. Free site survey. Call +91 7448299293." />
      <meta name="keywords" content="solar panel installation Pune, solar company Pune, best solar company Pune, rooftop solar Pune, residential solar Pune, commercial solar Pune, solar EPC Pune, solar subsidy Pune, PM Surya Ghar Pune" />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:site_name" content="Rayzona Renewables Energy" />
      <meta property="og:title" content="Rayzona Renewables Energy | Solar Panel Installation in Pune" />
      <meta property="og:description" content="Expert solar panel installation in Pune for homes & businesses. Reduce bills by 90%. Free site survey. Call +91 7448299293." />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Rayzona Renewables Energy | Solar Panel Installation in Pune" />
      <meta name="twitter:description" content="Expert solar panel installation in Pune for homes & businesses. Reduce bills by 90%. Call +91 7448299293." />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
    </Helmet>
    <WebsiteSchema />
    <LocalBusinessSchema />
    <FAQSchema />
    <GreenHero />
    <Stats />
    <About />
    <BrandLogos />
    <SolarSolutions />
    <SolarCalculator />
    <ServicesScope />
    <Testimonials />
    <ApplyNow />
    <ServiceAreas />
    <FAQs />
    <CTA />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <TopHeader />
          <GreenNav />
          <main className="app__main">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Info & Tool pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products-services" element={<ProductsServices />} />
              <Route path="/solar-calculator" element={<SolarCalculatorPage />} />

              {/* Service pages */}
              <Route path="/solar-installation-pune" element={<SolarInstallationPune />} />
              <Route path="/residential-solar" element={<ResidentialSolar />} />
              <Route path="/commercial-solar" element={<CommercialSolar />} />
              <Route path="/rooftop-solar" element={<RooftopSolar />} />
              <Route path="/on-grid-solar" element={<OnGridSolar />} />
              <Route path="/solar-maintenance" element={<SolarMaintenance />} />
              <Route path="/ev-charging" element={<EVCharging />} />

              {/* 404 catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
