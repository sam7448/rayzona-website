import './ProductsServices.css';
import { Helmet } from 'react-helmet-async';
import aboutBg from '../../assets/images/aboutbg.jpg';
import Solar_LED_Street_Light from '../../assets/images/Solar_LED_Street_Light.png';
import Solar_LED_Street_Light_2 from '../../assets/images/SolarLED2.png';
import Solar_LED_Street_Light_3 from '../../assets/images/SolarLED3.png';
import Solar_LED_Street_Light_4 from '../../assets/images/SolarLED.png';
import ServicesScope from '../../components/ServicesScope/ServicesScope';

const ProductsServices = () => {
  const solarStreetLights = [
    { 
      title: 'Solar led Street Light 400w',
      description: '    Solar Street LED Light - 400W Brighten up your outdoor...',
      image: Solar_LED_Street_Light
    },    
    {
      title: 'Solar led Street Light 300w',
      description: 'Solar Street LED Light - 300W Brighten up your outdoor...',
      image: Solar_LED_Street_Light_3
    },
    {
      title: 'Solar led Street Light 240w',
      description: 'Solar Street LED Light - 240W Brighten up your outdoor...',
      image: Solar_LED_Street_Light_4
    },
    {
      title: 'Solar led Street Light 180w',
      description: 'Solar Street LED Light - 180W Brighten up your outdoor...',
      image: Solar_LED_Street_Light_2
    }
  ];

  const whatsappLink = "https://wa.me/917448299293";

  const handleOrderNow = (product) => {
    const message = `Hi, I'm interested in ordering:\n\nProduct: ${product.title}\nDescription: ${product.description}\n\nPlease provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="products-services">
      <Helmet>
        <title>Solar Products &amp; Services | Rayzona Renewable Energy Pune</title>
        <meta name="description" content="Explore Rayzona's solar products and services: residential solar, commercial solar, EV charging stations, solar street lights, and solar maintenance in Pune, Maharashtra." />
        <meta name="keywords" content="solar products Pune, solar street lights, EV charging station Pune, residential solar Maharashtra, commercial solar installation, solar maintenance Pune" />
        <link rel="canonical" href="https://www.rayzonarenewablesenergy.com/products-services" />
        <meta property="og:url" content="https://www.rayzonarenewablesenergy.com/products-services" />
        <meta property="og:title" content="Solar Products & Services | Rayzona Renewable Energy Pune" />
        <meta property="og:description" content="Explore Rayzona's solar products and services: residential solar, commercial solar, EV charging stations, and solar street lights in Pune." />
      </Helmet>
      <div className="products-services__hero">
        <div className="products-services__hero-bg" style={{ backgroundImage: `url(${aboutBg})` }}></div>
        <div className="products-services__hero-overlay"></div>
        <div className="products-services__container">
          <h1 className="products-services__title">
            Products <span className="products-services__title--highlight">& Services</span>
          </h1>
          <div className="products-services__title-underline"></div>
          <p className="products-services__subtitle">
            Complete solar solutions from premium products to professional services.
          </p>
        </div>
        <div className="products-services__wave">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,85 1440,90 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="products-services__content">
        <div className="products-services__container">
          <span className="products-services__badge">PRODUCTS & SERVICES</span>
          <h2 className="products-services__section-title">Solar Street Lights</h2>
          <p className="products-services__section-subtitle">Discover our range of high-quality solar street lights designed for efficient and sustainable outdoor lighting.</p>
          <div className="products-services__products-grid">
            {solarStreetLights.map((product, index) => (
              <div key={index} className="products-services__product-card">
                <div className="products-services__product-image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="products-services__product-content">
                  <h3 className="products-services__product-title">{product.title}</h3>
                  <p className="products-services__product-description">{product.description}</p>
                  <button 
                    className="products-services__product-btn"
                    onClick={() => handleOrderNow(product)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServicesScope/>
    </div>
  );
};

export default ProductsServices;
