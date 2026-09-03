import './Contact.css';
import { Helmet } from 'react-helmet-async';
import aboutBg from '../../assets/images/aboutbg.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';
import { MdSubject } from "react-icons/md";
import { useState } from 'react';
import { FaMessage } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappNumber = '917448299293';
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Rayzona | Solar Energy Company Pune</title>
        <meta name="description" content="Contact Rayzona Renewable Energy for solar panel installation, maintenance, and EV charging solutions in Pune. Call +91 7448299293 or visit us at Hadapsar, Pune - 411028." />
        <meta name="keywords" content="contact Rayzona Energy, solar company contact Pune, solar installation Hadapsar, solar energy Pune phone number" />
        <link rel="canonical" href="https://www.rayzonarenewablesenergy.com/contact" />
        <meta property="og:url" content="https://www.rayzonarenewablesenergy.com/contact" />
        <meta property="og:title" content="Contact Rayzona | Solar Energy Company Pune" />
        <meta property="og:description" content="Get in touch with Rayzona Renewable Energy for solar solutions in Pune. Call +91 7448299293 or visit Hadapsar, Pune." />
      </Helmet>
      <div className="contact-page__hero">
        <div className="contact-page__hero-bg" style={{ backgroundImage: `url(${aboutBg})` }}></div>
        <div className="contact-page__hero-overlay"></div>
        <div className="contact-page__container">
          <h1 className="contact-page__title">
            Contact <span className="contact-page__title--highlight">Us</span>
          </h1>
          <div className="contact-page__title-underline"></div>
          <p className="contact-page__subtitle">
            Get in touch with us for any queries or support.
          </p>
        </div>
        <div className="contact-page__wave">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,85 1440,90 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="contact-page__content">
        <div className="contact-page__container">
          <div className="contact-page__grid">
            <div className="contact-page__info">
              <h2 className="contact-page__section-title">Get In Touch</h2>
              <p className="contact-page__text">
                Have questions about our solar solutions? We're here to help. Reach out to us through any of the following channels or fill out the form.
              </p>

              <div className="contact-page__contact-item">
                <div className="contact-page__contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-page__contact-details">
                  <h3 className="contact-page__contact-label">Phone</h3>
                  <p className="contact-page__contact-value">
                    <a href="tel:+917448299293">+91 7448299293</a>
                  </p>
                </div>
              </div>

              <div className="contact-page__contact-item">
                <div className="contact-page__contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-page__contact-details">
                  <h3 className="contact-page__contact-label">Email</h3>
                  <p className="contact-page__contact-value">
                    <a href="mailto:rayzonarenewablesenergy@gmail.com">rayzonarenewablesenergy@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-page__contact-item">
                <div className="contact-page__contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-page__contact-details">
                  <h3 className="contact-page__contact-label">Address</h3>
                  <p className="contact-page__contact-value">
                    <a href="https://www.google.com/maps/dir/18.5387626,73.8753588/Rayzona+Renewables+Energy,+Phadtare+Niwas,+28,+next+to+akshay+terrace,+Parijat+Colony,+Gadital,+Hadapsar,+Pune,+Maharashtra+411028/@18.5195422,73.8676266,16489m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2c342742d1a75:0xb20bdcdf2395db2b!2m2!1d73.9429625!2d18.5009698?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                      Phadtare Niwas next to Akshay Terrace, Gadital Hadapsar, Pune - 411028
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-page__form-wrapper">
              <h2 className="contact-page__section-title">Send Us a Message</h2>
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <div className="contact-page__form-group">
                  <label className="contact-page__form-label">
                    <FaUser/>
                    Full Name
                    </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-page__form-input"
                    placeholder="Enter your full name"
                    required
                  />
                   <label className="contact-page__form-label">
                    <FaPhone/>
                    Phone Number
                    </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-page__form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="contact-page__form-group">
                  <label className="contact-page__form-label">
                    <FaEnvelope/>
                    Email Address
                    </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-page__form-input"
                    placeholder="Enter your email"
                    required
                  />

                   <label className="contact-page__form-label">
                   <MdSubject />
                    Subject
                    </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-page__form-input"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="contact-page__form-group">
                  <label className="contact-page__form-label">
                    <FaMessage/>
                    Message
                    </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-page__form-textarea"
                    placeholder="Enter your message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact-page__submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
