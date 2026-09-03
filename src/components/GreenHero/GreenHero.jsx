import './GreenHero.css';
import heroBackground from '../../assets/images/herobg.png';

const GreenHero = () => {
  const handleBookNow = () => {
    const whatsappNumber = '917448299293';
    const message = 'Hi, I would like to book a solar consultation.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="green-hero" id="home" aria-label="Hero section">
      <div className="green-hero__background">
        <img
          src={heroBackground}
          alt="Solar panels installed on rooftop in Pune, Maharashtra"
          fetchpriority="high"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>

      <div className="green-hero__overlay">
        <div className="green-hero__container">
          <div className="green-hero__content">
            <span className="green-hero__subtitle" aria-hidden="true">Solar Energy</span>
            <h1 className="green-hero__title">
              Solar Panel Installation in Pune
            </h1>
            <p className="green-hero__description">
              Switch to solar energy and reduce your electricity bills by up to 90%. Rayzona Renewables Energy delivers expert solar panel installation for homes and businesses across Pune and Maharashtra.
            </p>
            <div className="green-hero__buttons">
              <button className="green-hero__button green-hero__button--filled" onClick={handleBookNow}>
                Get Free Solar Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenHero;
