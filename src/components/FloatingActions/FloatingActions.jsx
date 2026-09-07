import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './FloatingActions.css';

const FloatingActions = () => {
  const phoneNumber = '+917448299293';
  const whatsappUrl = 'https://wa.me/917448299293?text=Hi%20Rayzona%20Renewables%20Energy,%20I%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20solar%20installation%20in%20Pune.';

  return (
    <>
      {/* Desktop Floating Corner Button */}
      <div className="floating-desktop" aria-label="Quick contact widget">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-desktop__whatsapp"
          aria-label="Chat with Rayzona Solar Advisor on WhatsApp"
        >
          <span className="floating-desktop__pulse"></span>
          <FaWhatsapp className="floating-desktop__icon" />
          <span className="floating-desktop__label">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <aside className="floating-mobile" aria-label="Mobile quick contact bar">
        <div className="floating-mobile__container">
          <a 
            href={`tel:${phoneNumber}`} 
            className="floating-mobile__btn floating-mobile__btn--call"
            aria-label="Call Rayzona Solar Team"
          >
            <FaPhoneAlt className="floating-mobile__icon" />
            <span>Call Now</span>
          </a>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="floating-mobile__btn floating-mobile__btn--whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="floating-mobile__icon" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default FloatingActions;
