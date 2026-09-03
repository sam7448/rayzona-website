import './SolarSolutions.css';
import { FaSolarPanel, FaBatteryFull, FaExchangeAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const SolarSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const solutions = [
    {
      icon: FaSolarPanel,
      title: 'On-Grid Solar System',
      description: 'On-grid solar systems are connected to the electricity grid and are commonly used for reducing monthly electricity bills.',
      features: [
        'Rooftop solar for homes and businesses',
        'Net metering process guidance',
        'Best for electricity bill reduction',
        'Common for residential and commercial projects'
      ]
    },
    {
      icon: FaBatteryFull,
      title: 'Off-Grid Solar System',
      description: 'Off-grid solar systems work with batteries and are useful where backup power is important or where grid supply is weak.',
      features: [
        'Battery-based solar power solution',
        'Useful for backup and remote locations',
        'Can support essential loads during power cuts',
        'Good for areas with unstable electricity supply'
      ]
    },
    {
      icon: FaExchangeAlt,
      title: 'Hybrid Solar System',
      description: 'Hybrid solar systems combine grid connection with battery backup for customers who want bill savings plus energy backup.',
      features: [
        'Grid-connected solar with battery support',
        'Better flexibility for power management',
        'Suitable for premium and critical-use customers',
        'Useful for customers who want savings and backup'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [solutions.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return 'solar-solutions__card--active';
    if (index === (currentIndex - 1 + solutions.length) % solutions.length) return 'solar-solutions__card--prev';
    if (index === (currentIndex + 1) % solutions.length) return 'solar-solutions__card--next';
    return '';
  };

  return (
    <section className="solar-solutions" id="solar-solutions">
      <div className="solar-solutions__container">
        <div className="solar-solutions__header">
          <span className="solar-solutions__badge">SOLAR SOLUTIONS</span>
          <h2 className="solar-solutions__title">
            Solar Systems for Every Need
          </h2>
          <p className="solar-solutions__description">
            We provide On-Grid, Off-Grid, and Hybrid solar solutions for residential, commercial, and industrial applications.
          </p>
        </div>

        <div className="solar-solutions__slider">
          <button className="solar-solutions__nav solar-solutions__nav--prev" onClick={prevSlide}>
            ‹
          </button>

          <div 
            className="solar-solutions__track"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className={`solar-solutions__card ${getCardClass(index)}`}
                >
                  <div className="solar-solutions__icon">
                    <Icon />
                  </div>
                  <h3 className="solar-solutions__card-title">{solution.title}</h3>
                  <p className="solar-solutions__card-description">
                    {solution.description}
                  </p>
                  <ul className="solar-solutions__features">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <button className="solar-solutions__nav solar-solutions__nav--next" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="solar-solutions__dots">
          {solutions.map((_, index) => (
            <button
              key={index}
              className={`solar-solutions__dot ${
                index === currentIndex ? 'solar-solutions__dot--active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarSolutions;
