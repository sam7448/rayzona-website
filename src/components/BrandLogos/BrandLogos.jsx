import { FaShieldAlt, FaAward, FaCheckCircle, FaBolt, FaSolarPanel } from 'react-icons/fa';
import './BrandLogos.css';

import tataSolarLogo from '../../assets/brands/tata-solar.svg';
import adaniSolarLogo from '../../assets/brands/adani-solar.svg';
import waareeLogo from '../../assets/brands/waaree.svg';
import vikramSolarLogo from '../../assets/brands/vikram-solar.svg';
import sungrowLogo from '../../assets/brands/sungrow.svg';
import growattLogo from '../../assets/brands/growatt.svg';
import havellsLogo from '../../assets/brands/havells.svg';
import polycabLogo from '../../assets/brands/polycab.svg';
import microtekLogo from '../../assets/brands/microtek.svg';

const BrandLogos = () => {
  const brands = [
    { name: 'Tata Power Solar', category: 'Tier-1 Mono PERC Panels', logo: tataSolarLogo },
    { name: 'Adani Solar', category: 'High-Efficiency Modules', logo: adaniSolarLogo },
    { name: 'Waaree Energies', category: 'TopCon Solar Panels', logo: waareeLogo },
    { name: 'Vikram Solar', category: 'High-Wattage Panels', logo: vikramSolarLogo },
    { name: 'Sungrow', category: 'Smart Grid Inverters', logo: sungrowLogo },
    { name: 'Growatt', category: 'On-Grid & Hybrid Inverters', logo: growattLogo },
    { name: 'Havells Solar', category: 'Certified Inverters', logo: havellsLogo },
    { name: 'Polycab Solar', category: 'Solar Cables & Inverters', logo: polycabLogo },
    { name: 'Microtek', category: 'Grid-Tied Systems', logo: microtekLogo }
  ];

  const certifications = [
    { icon: <FaShieldAlt />, title: '25-Year Warranty', desc: 'Linear performance warranty on all Tier-1 modules' },
    { icon: <FaAward />, title: 'MNRE Approved', desc: 'Compliant with Ministry of New and Renewable Energy' },
    { icon: <FaCheckCircle />, title: 'MSEDCL Net Metering', desc: '100% compliant bi-directional meter synchronization' },
    { icon: <FaBolt />, title: 'BIS & IEC Certified', desc: 'Certified safety, surge protection & earthing standards' }
  ];

  return (
    <section className="brand-logos" aria-label="Authorized Brands & Equipment">
      <div className="brand-logos__container">
        
        <div className="brand-logos__header">
          <span className="brand-logos__badge">
            <FaSolarPanel /> PREMIUM TIER-1 EQUIPMENT
          </span>
          <h2 className="brand-logos__title">
            Trusted Solar Brands &amp; <span className="brand-logos__highlight">Certified Hardware</span>
          </h2>
          <p className="brand-logos__subtitle">
            Rayzona installs only 100% authentic Tier-1 solar panels, certified on-grid inverters, and heavy-duty galvanized mounting structures.
          </p>
        </div>

        {/* Brands Grid / Tags */}
        <div className="brand-logos__grid">
          {brands.map((b, i) => (
            <div key={i} className="brand-logos__card">
              <div className="brand-logos__img-wrapper">
                <img src={b.logo} alt={`${b.name} Logo`} className="brand-logos__img" loading="lazy" width="160" height="44" />
              </div>
              <span className="brand-logos__brand-name">{b.name}</span>
              <span className="brand-logos__brand-cat">{b.category}</span>
            </div>
          ))}
        </div>

        {/* Trust & Quality Guarantees */}
        <div className="brand-logos__cert-grid">
          {certifications.map((c, i) => (
            <div key={i} className="brand-logos__cert-card">
              <div className="brand-logos__cert-icon">{c.icon}</div>
              <div>
                <h3 className="brand-logos__cert-title">{c.title}</h3>
                <p className="brand-logos__cert-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandLogos;
