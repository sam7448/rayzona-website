const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.rayzonarenewablesenergy.com/#website",
    "name": "RAYZONA RENEWABLES ENERGY",
    "alternateName": "Rayzona Energy",
    "url": "https://www.rayzonarenewablesenergy.com",
    "description": "Solar panel installation company in Pune, Maharashtra offering residential, commercial, and industrial solar solutions, EV charging stations, and solar maintenance.",
    "publisher": {
      "@id": "https://www.rayzonarenewablesenergy.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.rayzonarenewablesenergy.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebsiteSchema;
