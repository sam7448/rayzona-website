import { useState, useId } from 'react';
import { 
  FaCalculator, 
  FaSun, 
  FaRupeeSign, 
  FaBolt, 
  FaLeaf, 
  FaShieldAlt, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaCheckCircle, 
  FaClock, 
  FaHome,
  FaArrowRight,
  FaGift
} from 'react-icons/fa';
import './SolarCalculator.css';

const SolarCalculator = ({ title, subtitle }) => {
  const [calcMode, setCalcMode] = useState('bill'); // 'bill' or 'capacity'
  const [monthlyBill, setMonthlyBill] = useState(3500);
  const [systemKw, setSystemKw] = useState(3);

  const billSliderId = useId();
  const kwSliderId = useId();

  // Quick preset bill values
  const billPresets = [1500, 3000, 5000, 8000, 12000, 20000];
  const kwPresets = [1, 2, 3, 4, 5, 10];

  // Calculation logic based on active mode
  let kw = 3;
  if (calcMode === 'bill') {
    if (monthlyBill <= 1800) kw = 1;
    else if (monthlyBill <= 3500) kw = 2;
    else if (monthlyBill <= 5500) kw = 3;
    else if (monthlyBill <= 7500) kw = 4;
    else if (monthlyBill <= 10000) kw = 5;
    else if (monthlyBill <= 14000) kw = 7;
    else kw = Math.min(15, Math.max(1, Math.round(monthlyBill / 1400)));
  } else {
    kw = systemKw;
  }

  // PM Surya Ghar Central Government Subsidy Structure
  // 1 kW = ₹30,000 | 2 kW = ₹60,000 | 3 kW and above = ₹78,000 max central cap
  const getSubsidy = (capacity) => {
    if (capacity <= 0) return 0;
    if (capacity === 1) return 30000;
    if (capacity === 2) return 60000;
    return 78000; // 3 kW+ capped at ₹78,000
  };

  const subsidy = getSubsidy(kw);

  // Generation & Savings metrics (Pune average ~4.2 units/kW/day)
  const monthlyUnits = Math.round(kw * 125);
  const annualUnits = monthlyUnits * 12;
  const avgElectricityTariff = 8.5; // Avg MSEDCL residential slab rate ₹8.5 / unit
  const estimatedMonthlySavings = Math.round(monthlyUnits * avgElectricityTariff);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const lifetimeSavings25Yrs = estimatedAnnualSavings * 25;
  const rooftopAreaSqFt = kw * 90; // ~90 sq.ft per kW
  const co2OffsetTonnes = (annualUnits * 0.82 / 1000).toFixed(1);

  // WhatsApp click handler with prefilled details (NO hardcoded prices)
  const handleWhatsAppBooking = () => {
    const text = `Hi Rayzona Renewables Energy!\n\nI used your *PM Surya Ghar Solar Calculator*:\n• *Recommended System:* ${kw} kW Rooftop Solar\n• *Monthly Electricity Bill:* ₹${calcMode === 'bill' ? monthlyBill : Math.round(kw * 1400)}/month\n• *Eligible Central Subsidy:* ₹${subsidy.toLocaleString('en-IN')}\n• *Est. Monthly Generation:* ~${monthlyUnits} Units/mo\n• *Est. Monthly Savings:* ~₹${estimatedMonthlySavings.toLocaleString('en-IN')}/mo\n\nI want to get a *Custom Best-Price Quote* & book a *Free Site Survey in Pune*. Please assist me!`;
    const url = `https://wa.me/917448299293?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="solar-calc" id="solar-calculator">
      <div className="solar-calc__container">
        
        {/* Header */}
        <div className="solar-calc__header">
          <span className="solar-calc__badge">
            <FaCalculator /> PM SURYA GHAR CALCULATOR
          </span>
          <h2 className="solar-calc__title">
            {title || (
              <>
                Calculate Your Solar Subsidy &amp; <span className="solar-calc__highlight">Savings in Pune</span>
              </>
            )}
          </h2>
          <p className="solar-calc__subtitle">
            {subtitle || 'Find out your eligible Government Subsidy and monthly electricity bill savings under PM Surya Ghar Muft Bijli Yojana with Rayzona Renewables Energy.'}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="solar-calc__grid">
          
          {/* Controls Column (Left) */}
          <div className="solar-calc__controls-card">
            
            {/* Mode Switcher */}
            <div className="solar-calc__mode-tabs">
              <button 
                type="button"
                className={`solar-calc__mode-btn ${calcMode === 'bill' ? 'solar-calc__mode-btn--active' : ''}`}
                onClick={() => setCalcMode('bill')}
              >
                <FaRupeeSign /> By Monthly Bill
              </button>
              <button 
                type="button"
                className={`solar-calc__mode-btn ${calcMode === 'capacity' ? 'solar-calc__mode-btn--active' : ''}`}
                onClick={() => setCalcMode('capacity')}
              >
                <FaSun /> By System Size (kW)
              </button>
            </div>

            {/* Input Slider & Presets */}
            {calcMode === 'bill' ? (
              <div className="solar-calc__input-group">
                <div className="solar-calc__input-header">
                  <label htmlFor={billSliderId} className="solar-calc__label">Your Average Monthly Electricity Bill</label>
                  <div className="solar-calc__input-val">
                    ₹{monthlyBill.toLocaleString('en-IN')} <span>/ month</span>
                  </div>
                </div>

                <input 
                  id={billSliderId}
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="solar-calc__slider"
                  aria-label="Monthly Electricity Bill in Rupees"
                />

                <div className="solar-calc__presets">
                  {billPresets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`solar-calc__preset-chip ${monthlyBill === val ? 'solar-calc__preset-chip--active' : ''}`}
                      onClick={() => setMonthlyBill(val)}
                    >
                      ₹{val.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="solar-calc__input-group">
                <div className="solar-calc__input-header">
                  <label htmlFor={kwSliderId} className="solar-calc__label">Desired Solar Capacity</label>
                  <div className="solar-calc__input-val">
                    {systemKw} kW <span>Rooftop Solar</span>
                  </div>
                </div>

                <input 
                  id={kwSliderId}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={systemKw}
                  onChange={(e) => setSystemKw(Number(e.target.value))}
                  className="solar-calc__slider"
                  aria-label="Solar Capacity in Kilowatts"
                />

                <div className="solar-calc__presets">
                  {kwPresets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`solar-calc__preset-chip ${systemKw === val ? 'solar-calc__preset-chip--active' : ''}`}
                      onClick={() => setSystemKw(val)}
                    >
                      {val} kW
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Summary Highlights */}
            <div className="solar-calc__specs-row">
              <div className="solar-calc__spec-box">
                <FaSun className="solar-calc__spec-icon" />
                <div>
                  <span className="solar-calc__spec-label">Recommended Size</span>
                  <strong className="solar-calc__spec-value">{kw} kW System</strong>
                </div>
              </div>
              <div className="solar-calc__spec-box">
                <FaBolt className="solar-calc__spec-icon" />
                <div>
                  <span className="solar-calc__spec-label">Monthly Generation</span>
                  <strong className="solar-calc__spec-value">~{monthlyUnits} Units/mo</strong>
                </div>
              </div>
              <div className="solar-calc__spec-box">
                <FaHome className="solar-calc__spec-icon" />
                <div>
                  <span className="solar-calc__spec-label">Roof Area Needed</span>
                  <strong className="solar-calc__spec-value">~{rooftopAreaSqFt} sq. ft.</strong>
                </div>
              </div>
              <div className="solar-calc__spec-box">
                <FaClock className="solar-calc__spec-icon" />
                <div>
                  <span className="solar-calc__spec-label">Bill Reduction</span>
                  <strong className="solar-calc__spec-value">Up to 90%</strong>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="solar-calc__trust-list">
              <div className="solar-calc__trust-item">
                <FaCheckCircle className="solar-calc__trust-icon" />
                <span>100% PM Surya Ghar subsidy paperwork handled by Rayzona</span>
              </div>
              <div className="solar-calc__trust-item">
                <FaCheckCircle className="solar-calc__trust-icon" />
                <span>MSEDCL net metering approval &amp; bi-directional meter setup</span>
              </div>
              <div className="solar-calc__trust-item">
                <FaShieldAlt className="solar-calc__trust-icon" />
                <span>25-Year Tier-1 Solar Panel Performance Warranty</span>
              </div>
            </div>

          </div>

          {/* Subsidy & Benefits Column (Right) */}
          <div className="solar-calc__results-card">
            
            <div className="solar-calc__results-header">
              <h3 className="solar-calc__results-title">Subsidy &amp; Benefit Summary</h3>
              <span className="solar-calc__govt-tag">Direct Bank Transfer</span>
            </div>

            {/* Subsidy Highlight Card */}
            <div className="solar-calc__subsidy-hero-card">
              <div className="solar-calc__subsidy-hero-badge">
                <FaGift /> Eligible Government Subsidy
              </div>
              <div className="solar-calc__subsidy-hero-amount">
                ₹{subsidy.toLocaleString('en-IN')}
              </div>
              <p className="solar-calc__subsidy-hero-desc">
                Credited directly to your Aadhaar-linked bank account under Central PM Surya Ghar Muft Bijli Yojana.
              </p>
            </div>

            {/* Savings Box */}
            <div className="solar-calc__savings-banner">
              <div className="solar-calc__savings-stat">
                <span className="solar-calc__savings-title">Estimated Monthly Savings</span>
                <span className="solar-calc__savings-num">~₹{estimatedMonthlySavings.toLocaleString('en-IN')} / mo</span>
              </div>
              <div className="solar-calc__savings-divider"></div>
              <div className="solar-calc__savings-stat">
                <span className="solar-calc__savings-title">25-Year Lifetime Savings</span>
                <span className="solar-calc__savings-num solar-calc__savings-num--gold">
                  ₹{(lifetimeSavings25Yrs / 100000).toFixed(1)} Lakhs+
                </span>
              </div>
            </div>

            {/* Quotation Note */}
            <div className="solar-calc__quote-banner">
              <FaCheckCircle className="solar-calc__quote-icon" />
              <div>
                <strong>Custom Best-Price Quotation</strong>
                <span>Tailored for your roof structure, panel efficiency &amp; power requirements after free site survey.</span>
              </div>
            </div>

            {/* Eco Impact */}
            <div className="solar-calc__eco-impact">
              <FaLeaf className="solar-calc__eco-icon" />
              <span>Reduces <strong>{co2OffsetTonnes} Tonnes</strong> of CO2 emissions annually (~{Math.round(annualUnits * 0.04)} trees planted equivalent).</span>
            </div>

            {/* Actions */}
            <div className="solar-calc__actions">
              <button 
                type="button"
                onClick={handleWhatsAppBooking}
                className="solar-calc__cta-whatsapp"
                aria-label="Claim Subsidy on WhatsApp"
              >
                <FaWhatsapp /> Claim ₹{subsidy.toLocaleString('en-IN')} Subsidy &amp; Get Quote
              </button>

              <div className="solar-calc__secondary-actions">
                <a 
                  href="tel:+917448299293" 
                  className="solar-calc__cta-call"
                  aria-label="Call Solar Advisor"
                >
                  <FaPhoneAlt /> Call: +91 7448299293
                </a>
                <a 
                  href="#apply-now" 
                  className="solar-calc__cta-survey"
                  aria-label="Book Free Site Survey"
                >
                  Book Free Visit <FaArrowRight />
                </a>
              </div>
            </div>

            <p className="solar-calc__disclaimer">
              *Subsidy as per official MNRE PM Surya Ghar guidelines in Maharashtra. Customized system price quote provided after free physical site survey.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SolarCalculator;
