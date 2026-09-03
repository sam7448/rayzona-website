const ServiceSchema = ({ name, description, url, areaServed = "Pune, Maharashtra" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.rayzonarenewablesenergy.com/#business",
      "name": "RAYZONA RENEWABLES ENERGY"
    },
    "areaServed": {
      "@type": "City",
      "name": areaServed
    },
    "serviceType": "Solar Energy",
    "category": "Renewable Energy"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
