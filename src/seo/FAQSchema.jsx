const FAQSchema = ({ items }) => {
  const defaultFaqs = [
    {
      question: 'Which is the best solar panel installation company in Pune?',
      answer: 'Rayzona Renewables Energy is rated among the best solar panel installation companies in Pune. We provide Tier-1 solar modules with 25-year warranty, complete PM Surya Ghar Muft Bijli Yojana subsidy paperwork (saving up to ₹78,000), quick 2-4 day installation, and end-to-end MSEDCL net metering across Pune, Hadapsar, Kharadi, Hinjewadi, and PCMC.'
    },
    {
      question: 'How much does solar panel installation cost in Pune with PM Surya Ghar subsidy?',
      answer: 'Solar panel installation cost in Pune depends on system size (1 kW, 2 kW, 3 kW to 10 kW). Under the PM Surya Ghar Muft Bijli Yojana, residential consumers receive direct central subsidy up to ₹78,000, bringing down the net cost drastically. Contact Rayzona for a free site assessment and customized quote.'
    },
    {
      question: 'How much can I save on electricity bills by installing solar in Pune?',
      answer: 'A rooftop solar system from Rayzona Renewables Energy reduces monthly MSEDCL electricity bills by up to 80% to 90%. Most homeowners and commercial businesses in Pune recover their initial solar investment within 3 to 5 years and enjoy free power for over 20 years.'
    },
    {
      question: 'How does MSEDCL net metering work for rooftop solar in Maharashtra?',
      answer: 'With an on-grid rooftop solar system, excess power generated during the day is sent back to the MSEDCL grid via a bi-directional net meter. At the end of the billing cycle, MSEDCL credits your units, resulting in near-zero electricity bills. Rayzona handles the complete MSEDCL application and meter testing process.'
    },
    {
      question: 'What areas in Pune does Rayzona Renewables Energy serve?',
      answer: 'Rayzona provides complete solar panel installation across all Pune areas including Hadapsar, Kharadi, Viman Nagar, Hinjewadi, Wakad, Baner, Kothrud, Magarpatta, Wagholi, Bhosari, Chakan, Moshi, and Pimpri-Chinchwad.'
    },
    {
      question: 'How long does a residential solar installation take in Pune?',
      answer: 'A residential solar installation by Rayzona typically takes 2 to 4 days from structural mounting to electrical wiring, followed by rapid coordination with MSEDCL for net metering commissioning.'
    }
  ];

  const source = items && items.length > 0 ? items : defaultFaqs;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": source.map((faq) => ({
      "@type": "Question",
      "name": faq.question || faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer || faq.a
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
