import './ApplyNow.css';
import { useState } from 'react';
import applyImage from '../../assets/images/applyimage.jpeg';
import { FaUser, FaPhone, FaList } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const ApplyNow = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
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
    const message = `*New Application*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Requirement:* ${formData.requirement}\n\n*Message:*\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      requirement: '',
      message: ''
    });
  };

  return (
    <section className="apply-now" id="apply-now">
      <div className="apply-now__container">
        <div className="apply-now__content">
          <span className="apply-now__badge">APPLY NOW</span>
          <h2 className="apply-now__title">
            From Enquiry to Operational <span className="apply-now__title--highlight">Solar Business</span>
          </h2>
          <p className="apply-now__description">
            Rayzona partner onboarding is designed to be simple and structured. We first understand the partner profile, location, business background and interest level, then suggest the right model.
          </p>
        </div>

        <div className="apply-now__form-card">
          <div className="apply-now__form-header">
            <div>
              <h3 className="apply-now__form-title">Start your solar journey</h3>
              <p className="apply-now__form-subtitle">Share a few details for a tailored conversation.</p>
            </div>
          </div>

          <form className="apply-now__form" onSubmit={handleSubmit}>
            <div className="apply-now__form-row">
              <div className="apply-now__form-group">
                <label htmlFor="name">
                  <FaUser />
                  Full Name *
                </label>
                <div className="apply-now__input-wrapper">
                  <input 
                    className="apply-now__input"
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="apply-now__form-group">
                <label htmlFor="phone">
                  <FaPhone />
                  Phone Number *
                </label>
                <div className="apply-now__input-wrapper">
                  <input 
                    className="apply-now__input"
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="apply-now__form-group">
              <label htmlFor="requirement">
                <FaList />
                I'M LOOKING FOR *
              </label>
              <div className="apply-now__input-wrapper">
                <select 
                  className="apply-now__select"
                  id="requirement" 
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                >
                  <option value="">select requirement</option>
                  <option value="residential">Residential solar installation</option>
                  <option value="commercial">Commercial solar system</option>
                  <option value="products">Solar products</option>
                  <option value="maintenance">Maintenance & service</option>
                  <option value="ev">EV charging solution</option>
                </select>
              </div>
            </div>

            <div className="apply-now__form-group">
              <label htmlFor="message">
                <FaMessage />
                Additional Message
              </label>
              <div className="apply-now__input-wrapper">
                <textarea 
                  className="apply-now__textarea"
                  id="message" 
                  name="message"
                  placeholder="Tell us about your detailed requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="apply-now__submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
