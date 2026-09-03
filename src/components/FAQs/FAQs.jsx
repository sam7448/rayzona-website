import './FAQs.css';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What partner models does Rayzona provide?',
      answer: 'Rayzona provides Distributor, Master Distributor and Channel Partner Franchise models. The Distributor model is the basic model, the Master Distributor model is the bigger growth model, and the Channel Partner Franchise model is the premium franchise-style model.'
    },
    {
      question: 'Can I include Digital AI with any partner model?',
      answer: 'Yes, every model can be discussed with Digital AI. You can choose Distributor + Digital AI, Master Distributor + Digital AI or Channel Partner Franchise + Digital AI depending on your business requirement.'
    },
    {
      question: 'What solar categories can partners deal in?',
      answer: 'Partners can deal in on-grid, off-grid and hybrid solar systems. These categories cover residential, commercial, industrial and special backup requirements.'
    },
    {
      question: 'Do I need prior solar experience to become a partner?',
      answer: 'Solar experience is helpful but not always mandatory. Business seriousness, local network, sales discipline and willingness to learn are important. Existing electrical, inverter, battery, construction, contractor and sales businesses can be a good fit.'
    },
    {
      question: 'What kind of income can I expect as a Rayzona partner?',
      answer: 'Income depends on partner effort, market demand, customer trust, lead quality, pricing, execution and local competition. Rayzona provides business structure and support, but results depend on real market performance. We do not present solar as a quick-income promise.'
    },
    {
      question: 'How does the Digital AI system help partners?',
      answer: 'The Digital AI system helps partners manage lead information, customer conversation history, follow-up reminders, site visit planning, quotation stages and internal business visibility. It supports the partner to stay faster, more disciplined and more professional.'
    },
    {
      question: 'What is the onboarding process for new partners?',
      answer: 'The onboarding process includes: Submit application → Discussion of models → Model selection → Training on systems and processes → Digital AI setup (if chosen) → Market launch with local sales support.'
    },
    {
      question: 'What kind of support do partners receive?',
      answer: 'Partners receive support for product understanding, customer pitching, project and quotation guidance, net metering process, installation workflow, maintenance support, and business automation through Digital AI tools.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs" id="faqs">
      <div className="faqs__container">
        <div className="faqs__header">
          <span className="faqs__badge">FAQs</span>
          <h2 className="faqs__title">
            Common Questions About Rayzona Partner Models
          </h2>
          <p className="faqs__description">
            Here are simple answers about our Distributor, Master Distributor and Channel Partner Franchise models, including solar categories and Digital AI support.
          </p>
        </div>

        <div className="faqs__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'faq-item--active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-item__question">
                <h3>{faq.question}</h3>
                <div className="faq-item__icon">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className={`faq-item__answer ${activeIndex === index ? 'faq-item__answer--visible' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="faqs__cta">
          <h3 className="faqs__cta-title">Still Have Questions?</h3>
          <p className="faqs__cta-description">
            Contact our team for more information about partner models and opportunities.
          </p>
          <button className="faqs__cta-button">
            Contact Us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FAQs;
