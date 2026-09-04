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
import SolarSolutions from './components/SolarSolutions/SolarSolutions';
import ServicesScope from './components/ServicesScope/ServicesScope';
import ApplyNow from './components/ApplyNow/ApplyNow';
import FAQs from './components/FAQs/FAQs';
import CTA from './components/CTA/CTA';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';

// Pages
import ProductsServices from './pages/ProductsServices/ProductsServices';
import AboutPage from './pages/About/About';
import Contact from './pages/Contact/Contact';
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
      <title>RAYZONA RENEWABLES ENERGY</title>
      <meta name="description" content="RAYZONA RENEWABLES ENERGY — expert solar panel installation in Pune for homes, businesses & industries. Residential & commercial rooftop solar, EV charging & maintenance. Free site survey. Call +91 7448299293." />
      <meta name="keywords" content="solar panel installation Pune, solar company Pune, best solar company Pune, rooftop solar Pune, residential solar Pune, commercial solar Pune, solar EPC Pune, solar subsidy Pune" />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:title" content="Solar Panel Installation in Pune | RAYZONA RENEWABLES ENERGY" />
      <meta property="og:description" content="Expert solar panel installation in Pune for homes & businesses. Reduce bills by 90%. Free site survey. Call +91 7448299293." />
    </Helmet>
    <WebsiteSchema />
    <LocalBusinessSchema />
    <FAQSchema />
    <GreenHero />
    <Stats />
    <About />
    <SolarSolutions />
    <ServicesScope />
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

              {/* Info pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products-services" element={<ProductsServices />} />

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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
