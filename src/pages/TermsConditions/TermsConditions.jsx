import './TermsConditions.css';
import aboutBg from '../../assets/images/aboutbg.jpg';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page">
      <div className="terms-conditions-page__hero">
        <div className="terms-conditions-page__hero-bg" style={{ backgroundImage: `url(${aboutBg})` }}></div>
        <div className="terms-conditions-page__hero-overlay"></div>
        <div className="terms-conditions-page__container">
          <h1 className="terms-conditions-page__title">Terms & Conditions</h1>
          <div className="terms-conditions-page__title-underline"></div>
          <p className="terms-conditions-page__subtitle">
            Please read these terms carefully before using our services
          </p>
        </div>
        <div className="terms-conditions-page__wave">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,85 1440,90 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="terms-conditions-page__content">
        <div className="terms-conditions-page__container">
          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">Last Updated: September 2024</h2>
            <p className="terms-conditions-page__text">
              Welcome to Rayzona Renewable Energy. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, please do not use our services.
            </p>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">1. Acceptance of Terms</h2>
            <p className="terms-conditions-page__text">
              By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">2. Changes to Terms</h2>
            <p className="terms-conditions-page__text">
              We reserve the right to modify these terms at any time. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
            </p>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">3. Products and Services</h2>
            <p className="terms-conditions-page__text">
              Rayzona Renewable Energy offers solar energy products and installation services. We strive to provide accurate product descriptions and high-quality services. However, we do not warrant that product descriptions are error-free.
            </p>
            <ul className="terms-conditions-page__list">
              <li>All prices are subject to change without notice</li>
              <li>We reserve the right to discontinue any product at any time</li>
              <li>Product images are for illustrative purposes only</li>
              <li>Installation services are subject to site assessment and feasibility</li>
            </ul>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">4. Orders and Payments</h2>
            <p className="terms-conditions-page__text">
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing, or suspected fraud.
            </p>
            <ul className="terms-conditions-page__list">
              <li>Payment must be received before order processing</li>
              <li>We accept various payment methods as indicated on our website</li>
              <li>All transactions are processed securely</li>
              <li>Refund policies may vary based on product type and service</li>
            </ul>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">5. Installation Services</h2>
            <p className="terms-conditions-page__text">
              For installation services, the following terms apply:
            </p>
            <ul className="terms-conditions-page__list">
              <li>Site assessment is required before installation</li>
              <li>Installation timelines are estimates and subject to weather conditions</li>
              <li>Customer must provide necessary access and permissions</li>
              <li>Additional costs may apply for complex installations</li>
              <li>Warranty terms are as specified in the product documentation</li>
            </ul>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">6. User Accounts</h2>
            <p className="terms-conditions-page__text">
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
            <ul className="terms-conditions-page__list">
              <li>You must provide accurate and complete information</li>
              <li>You must notify us of any unauthorized use of your account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>We reserve the right to disable accounts at our discretion</li>
            </ul>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">7. Intellectual Property</h2>
            <p className="terms-conditions-page__text">
              All content on this website, including text, graphics, logos, images, and software, is the property of Rayzona Renewable Energy or its content suppliers and is protected by intellectual property laws.
            </p>
            <ul className="terms-conditions-page__list">
              <li>You may not reproduce, distribute, or create derivative works</li>
              <li>Unauthorized use may violate copyright, trademark, and other laws</li>
              <li>You may not use our trademarks without prior written consent</li>
            </ul>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">8. Limitation of Liability</h2>
            <p className="terms-conditions-page__text">
              To the fullest extent permitted by law, Rayzona Renewable Energy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from:
            </p>
            <ul className="terms-conditions-page__list">
              <li>Your access to or use of or inability to access or use the website</li>
              <li>Any conduct or content of any third party on the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">9. Indemnification</h2>
            <p className="terms-conditions-page__text">
              You agree to indemnify and hold harmless Rayzona Renewable Energy and its affiliates from any claims, damages, or expenses arising from your use of the website or violation of these terms.
            </p>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">10. Governing Law</h2>
            <p className="terms-conditions-page__text">
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">11. Termination</h2>
            <p className="terms-conditions-page__text">
              We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice or liability, for any reason whatsoever, including but not limited to a breach of these Terms & Conditions.
            </p>
          </div>

          <div className="terms-conditions-page__section">
            <h2 className="terms-conditions-page__section-title">12. Contact Information</h2>
            <p className="terms-conditions-page__text">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <ul className="terms-conditions-page__list">
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

export default TermsConditions;
