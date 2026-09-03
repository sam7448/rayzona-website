import './PrivacyPolicy.css';
import aboutBg from '../../assets/images/aboutbg.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-page__hero">
        <div className="privacy-policy-page__hero-bg" style={{ backgroundImage: `url(${aboutBg})` }}></div>
        <div className="privacy-policy-page__hero-overlay"></div>
        <div className="privacy-policy-page__container">
          <h1 className="privacy-policy-page__title">Privacy Policy</h1>
          <div className="privacy-policy-page__title-underline"></div>
          <p className="privacy-policy-page__subtitle">
            Your privacy is important to us
          </p>
        </div>
        <div className="privacy-policy-page__wave">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,85 1440,90 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="privacy-policy-page__content">
        <div className="privacy-policy-page__container">
          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">Last Updated: September 2024</h2>
            <p className="privacy-policy-page__text">
              At Rayzona Renewable Energy ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">1. Information We Collect</h2>
            <h3 className="privacy-policy-page__subsection-title">Personal Information</h3>
            <p className="privacy-policy-page__text">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="privacy-policy-page__list">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Account information (username, password)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="privacy-policy-page__subsection-title">Automatically Collected Information</h3>
            <p className="privacy-policy-page__text">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="privacy-policy-page__list">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Referring website and pages viewed</li>
              <li>Time and date of visit</li>
            </ul>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">2. How We Use Your Information</h2>
            <p className="privacy-policy-page__text">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="privacy-policy-page__list">
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending technical notices and support messages</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Improving our products and services</li>
              <li>Conducting analytics and market research</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">3. Information Sharing</h2>
            <p className="privacy-policy-page__text">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="privacy-policy-page__list">
              <li><strong>With Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.</li>
              <li><strong>For Legal Reasons:</strong> We may disclose information when required by law or to protect our rights, property, or safety.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
            </ul>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">4. Data Security</h2>
            <p className="privacy-policy-page__text">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">5. Your Privacy Rights</h2>
            <p className="privacy-policy-page__text">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="privacy-policy-page__list">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
            </ul>
            <p className="privacy-policy-page__text">
              To exercise these rights, please contact us at rayzonarenewablesenergy@gmail.com
            </p>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">6. Cookies</h2>
            <p className="privacy-policy-page__text">
              We use cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">7. Third-Party Links</h2>
            <p className="privacy-policy-page__text">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
            </p>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">8. Changes to This Policy</h2>
            <p className="privacy-policy-page__text">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div className="privacy-policy-page__section">
            <h2 className="privacy-policy-page__section-title">9. Contact Us</h2>
            <p className="privacy-policy-page__text">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="privacy-policy-page__list">
              <li>Email: rayzonarenewablesenergy@gmail.com</li>
              <li>Phone: +91 7448299293 / +91 7499802124</li>
              <li>Address: Phadtare Niwas next to Akshay Terrace, Gadital Hadapsar, Pune - 411028</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
