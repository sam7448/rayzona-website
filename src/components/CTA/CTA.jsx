import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  const handleWhatsApp = () => {
    const whatsappNumber = '917448299293';
    const message = 'Hi, I would like to get a free solar installation quote for my property in Pune.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="cta" aria-label="Call to action">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">Get a Free Solar Consultation in Pune</h2>
          <p className="cta__description">
            Reduce your electricity bills by up to 90% with expert solar panel installation.
            Talk to our solar expert today — free site survey, no obligation.
          </p>
        </div>
        <div className="cta__action">
          <button className="cta__button" onClick={handleWhatsApp}>
            Get Free Solar Quote
          </button>
          <Link to="/contact" className="cta__secondary-link">
            Talk to Our Solar Expert →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
