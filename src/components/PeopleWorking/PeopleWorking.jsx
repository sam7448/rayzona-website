import './PeopleWorking.css';
import { FaTrash, FaDesktop, FaTint } from 'react-icons/fa';

const PeopleWorking = () => {
  const features = [
    {
      id: 1,
      icon: <FaTrash />,
      title: 'Recycling System',
      description: 'Het is al geruime tijd een bekend geven dateen lezetijdens het bekijken vande late layout van een pagina.'
    },
    {
      id: 2,
      icon: <FaDesktop />,
      title: 'Solar System',
      description: 'Het is al geruime tijd een bekend geven dateen lezetijdens het bekijken vande late layout van een pagina.'
    },
    {
      id: 3,
      icon: <FaTint />,
      title: 'Water Refining',
      description: 'Het is al geruime tijd een bekend geven dateen lezetijdens het bekijken vande late layout van een pagina.'
    }
  ];

  return (
    <section className="people-working">
      <div className="people-working__container">
        <div className="people-working__header">
          <h2 className="people-working__title">20000 + People Working With Us</h2>
          <p className="people-working__subtitle">For over 35 years Plan</p>
        </div>

        <div className="people-working__grid">
          {features.map((feature) => (
            <div key={feature.id} className="people-working__card">
              <div className="people-working__card-icon">
                {feature.icon}
              </div>
              <h3 className="people-working__card-title">{feature.title}</h3>
              <p className="people-working__card-description">{feature.description}</p>
              <button className="people-working__card-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleWorking;
