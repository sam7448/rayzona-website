import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaGoogle, FaUserCircle } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Sachin Kulkarni',
    location: 'Kothrud, Pune',
    system: '3 kW On-Grid Rooftop Solar',
    rating: 5,
    date: 'August 2026',
    text: 'Installed a 3 kW On-Grid system under PM Surya Ghar. Our monthly electricity bill dropped from ₹4,200 down to just ₹180! Rayzona handled all MSEDCL net metering and subsidy paperwork with zero hassle.'
  },
  {
    name: 'Rohit Deshmukh',
    location: 'Hadapsar, Pune',
    system: '5 kW Residential Solar',
    rating: 5,
    date: 'July 2026',
    text: 'Excellent team and workmanship. Completed the entire rooftop installation in just 2 days. The ₹78,000 subsidy was credited directly to my bank account within 35 days. Highly recommend Rayzona in Pune!'
  },
  {
    name: 'Aniket Patil',
    location: 'Magarpatta City, Hadapsar',
    system: '15 kW Society Solar (Common Areas)',
    rating: 5,
    date: 'June 2026',
    text: 'Rayzona set up a 15 kW solar plant for our housing society common areas (lifts, water pumps & clubhouse lighting). Our monthly common electricity expenses have reduced by 85%. Great long-term savings!'
  },
  {
    name: 'Pooja Shinde',
    location: 'Baner, Pune',
    system: '4 kW Home Solar System',
    rating: 5,
    date: 'May 2026',
    text: 'From the initial roof shade survey to the bi-directional net meter installation, Rayzona made the entire journey smooth and transparent. Quality Tier-1 panels and clean cabling work.'
  },
  {
    name: 'Vikas Agarwal',
    location: 'Bhosari MIDC, Pune',
    system: '25 kW Commercial Solar Plant',
    rating: 5,
    date: 'April 2026',
    text: 'Installed a 25 kW commercial rooftop plant for our manufacturing facility in Bhosari. Tremendous cost reduction on industrial power tariffs along with accelerated depreciation tax benefits.'
  },
  {
    name: 'Dr. Sandeep More',
    location: 'Wakad, Pune',
    system: '3 kW Residential Rooftop',
    rating: 5,
    date: 'March 2026',
    text: 'Very knowledgeable solar engineers. The generation tracking app is fantastic — I can see my daily unit generation anytime. Best solar EPC company in Pune for home solar installation.'
  }
];

const Testimonials = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'residential', 'commercial'

  const filteredReviews = testimonialsData.filter((item) => {
    if (filter === 'residential') return item.system.toLowerCase().includes('residential') || item.system.toLowerCase().includes('home') || item.system.toLowerCase().includes('on-grid');
    if (filter === 'commercial') return item.system.toLowerCase().includes('commercial') || item.system.toLowerCase().includes('society');
    return true;
  });

  return (
    <section className="testimonials" id="testimonials" aria-label="Customer Reviews & Testimonials">
      <div className="testimonials__container">
        
        {/* Header */}
        <div className="testimonials__header">
          <span className="testimonials__badge">
            <FaStar /> VERIFIED CUSTOMER REVIEWS
          </span>
          <h2 className="testimonials__title">
            What Pune Homeowners &amp; Businesses <span className="testimonials__highlight">Say About Rayzona</span>
          </h2>
          <p className="testimonials__subtitle">
            Trusted by 150+ happy families and commercial establishments across Pune and Maharashtra.
          </p>

          {/* Rating Summary Pill */}
          <div className="testimonials__summary-card">
            <div className="testimonials__rating-block">
              <FaGoogle className="testimonials__google-icon" />
              <div>
                <div className="testimonials__stars-row">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="testimonials__star" />
                  ))}
                  <strong className="testimonials__score">4.9 / 5.0</strong>
                </div>
                <span className="testimonials__rating-count">Based on 150+ Solar Installations in Pune</span>
              </div>
            </div>

            <a 
              href="https://wa.me/917448299293?text=Hi%20Rayzona%20Renewables%20Energy,%20I%20would%20like%20to%20know%20more%20about%20your%20customer%20references%20in%20Pune." 
              target="_blank" 
              rel="noopener noreferrer"
              className="testimonials__review-cta"
            >
              Ask For Client References in Your Area
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="testimonials__filters">
            <button 
              type="button" 
              className={`testimonials__filter-btn ${filter === 'all' ? 'testimonials__filter-btn--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Stories (6)
            </button>
            <button 
              type="button" 
              className={`testimonials__filter-btn ${filter === 'residential' ? 'testimonials__filter-btn--active' : ''}`}
              onClick={() => setFilter('residential')}
            >
              Residential &amp; Homes
            </button>
            <button 
              type="button" 
              className={`testimonials__filter-btn ${filter === 'commercial' ? 'testimonials__filter-btn--active' : ''}`}
              onClick={() => setFilter('commercial')}
            >
              Societies &amp; Commercial
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="testimonials__grid">
          {filteredReviews.map((t, index) => (
            <div key={index} className="testimonials__card">
              
              <div className="testimonials__card-header">
                <div className="testimonials__user-info">
                  <FaUserCircle className="testimonials__avatar-icon" />
                  <div>
                    <h3 className="testimonials__name">{t.name}</h3>
                    <span className="testimonials__location">{t.location}</span>
                  </div>
                </div>
                <FaQuoteLeft className="testimonials__quote-icon" />
              </div>

              <div className="testimonials__meta-row">
                <div className="testimonials__card-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="testimonials__system-tag">
                  <FaCheckCircle /> {t.system}
                </span>
              </div>

              <p className="testimonials__text">"{t.text}"</p>

              <div className="testimonials__card-footer">
                <span className="testimonials__verified-tag">
                  <FaCheckCircle /> Verified Installation
                </span>
                <span className="testimonials__date">{t.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
