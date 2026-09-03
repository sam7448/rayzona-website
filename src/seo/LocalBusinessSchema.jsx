const LocalBusinessSchema = () => {
  const SITE_URL = 'https://www.rayzonarenewablesenergy.com';

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        "name": "RAYZONA RENEWABLES ENERGY",
        "alternateName": "Rayzona Energy",
        "description": "RAYZONA RENEWABLES ENERGY is a solar panel installation company in Pune, Maharashtra providing residential, commercial, and industrial solar solutions, EV charging stations, solar maintenance, and on-grid solar systems with net metering.",
        "url": SITE_URL,
        "telephone": ["+91-7448299293", "+91-7499802124"],
        "email": "rayzonarenewablesenergy@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Phadtare Niwas, next to Akshay Terrace, Gadital Hadapsar",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411028",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5009698",
          "longitude": "73.9429625"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/rayzona_renewables_energy"
        ],
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Bank Transfer, EMI, UPI",
        "areaServed": [
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Pimpri-Chinchwad" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Solar Energy Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Solar Panel Installation in Pune",
                "url": `${SITE_URL}/solar-installation-pune`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Solar Installation",
                "url": `${SITE_URL}/residential-solar`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Solar Installation",
                "url": `${SITE_URL}/commercial-solar`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rooftop Solar Installation",
                "url": `${SITE_URL}/rooftop-solar`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "On-Grid Solar System",
                "url": `${SITE_URL}/on-grid-solar`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Solar Panel Maintenance & AMC",
                "url": `${SITE_URL}/solar-maintenance`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "EV Charging Station Installation",
                "url": `${SITE_URL}/ev-charging`
              }
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "RAYZONA RENEWABLES ENERGY",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/og-image.jpg`
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-7448299293",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-7448299293",
            "contactType": "sales",
            "areaServed": "IN"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
