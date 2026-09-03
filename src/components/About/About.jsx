import './About.css';
import { FaQuoteLeft } from 'react-icons/fa';
import aboutImage from '../../assets/images/aboutsection.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Main Content */}
        <div className="about__main">
          <div className="about__image-section">
            <div className="about__image-wrapper">
              <img src={aboutImage} alt="About Rayzona" className="about__image" loading="lazy" />
            </div>
          </div>

          <div className="about__content-section">
            <span className="about__badge">WHO WE ARE</span>
            <h2 className="about__title">Leading Solar Energy Provider</h2>
            
            <div className="about__quote">
              <FaQuoteLeft className="about__quote-icon" />
              <p className="about__quote-text">
                Our mission is to accelerate the world's transition to sustainable energy by delivering innovative solar solutions that empower communities and protect our planet.
              </p>
            </div>

            <p className="about__description">
              Rayzona is dedicated to delivering innovative solar energy solutions that power homes, businesses, and communities. With years of expertise in renewable energy, we transform sunlight into sustainable power. Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner in the transition to clean energy.
            </p>

            <div className="about__signature">
              <div className="about__signature-info">
                <h4 className="about__signature-name">Rayzona Energy</h4>
                <span className="about__signature-role">Solar Solutions Provider</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
