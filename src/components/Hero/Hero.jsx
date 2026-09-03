import './Hero.css';
import heroImage from '../../assets/images/herosolar.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Energize society by reliable energy systems
          </h1>
          <p className="hero__description">
            Join the green revolution and generate your own electricity with our reliable solar solutions.
          </p>
          <div className="hero__buttons">
            <button className="hero__button hero__button--primary">OUR SERVICE</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="Solar Energy Solutions" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
