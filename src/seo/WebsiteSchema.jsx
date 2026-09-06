const WebsiteSchema = () => {
  const SITE_URL = 'https://www.rayzonarenewablesenergy.com';

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": "RAYZONA RENEWABLES ENERGY",
        "alternateName": ["Rayzona Energy", "Rayzona Pune", "Rayzona Renewables"],
        "url": SITE_URL,
        "description": "Solar panel installation company in Pune, Maharashtra offering residential, commercial, and industrial rooftop solar solutions, EV charging stations, and solar AMC maintenance.",
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#navigation`,
        "name": "Primary Navigation",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Solar Installation Pune",
            "description": "Complete solar panel installation services across Pune with subsidy and net metering",
            "url": `${SITE_URL}/solar-installation-pune`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Residential Solar",
            "description": "Home rooftop solar systems with PM Surya Ghar Muft Bijli Yojana subsidy guidance",
            "url": `${SITE_URL}/residential-solar`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Commercial Solar",
            "description": "Industrial and commercial solar panel installation to cut business electricity bills by 70-90%",
            "url": `${SITE_URL}/commercial-solar`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Rooftop Solar",
            "description": "On-grid rooftop solar systems with 25-year warranty for Pune properties",
            "url": `${SITE_URL}/rooftop-solar`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "On-Grid Solar",
            "description": "Grid-connected solar system with MSEDCL net metering and zero battery maintenance",
            "url": `${SITE_URL}/on-grid-solar`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "Solar Maintenance & AMC",
            "description": "Professional solar panel cleaning, inverter health check, and AMC services in Pune",
            "url": `${SITE_URL}/solar-maintenance`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 7,
            "name": "EV Charging Stations",
            "description": "Electric vehicle charging station installation for homes and commercial parking in Pune",
            "url": `${SITE_URL}/ev-charging`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 8,
            "name": "About Us",
            "description": "Learn about RAYZONA RENEWABLES ENERGY team, experience, and mission in Pune",
            "url": `${SITE_URL}/about`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 9,
            "name": "Contact & Free Quote",
            "description": "Book a free rooftop survey or speak with our solar consultant in Hadapsar Pune",
            "url": `${SITE_URL}/contact`
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

export default WebsiteSchema;
