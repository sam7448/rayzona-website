const FAQSchema = () => {
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
      answer: 'Income depends on partner effort, market demand, customer trust, lead quality, pricing, execution and local competition. Rayzona provides business structure and support, but results depend on real market performance.'
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FAQSchema;
