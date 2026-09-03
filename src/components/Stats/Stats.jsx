import { useEffect, useState, useRef } from 'react';
import { FaUsers, FaProjectDiagram, FaUserTie, FaAward } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { number: 150, suffix: '+', label: 'Satisfied Clients', icon: FaUsers },
    { number: 150, suffix: '+', label: 'Projects Completed', icon: FaProjectDiagram },
    { number: 50, suffix: '+', label: 'Dedicated Members', icon: FaUserTie },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const duration = 2000;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, target]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats__container">
        {stats.map((stat, index) => (
          <div key={index} className="stats__item">
            <div className="stats__icon">
              <stat.icon />
            </div>
            <div className="stats__number">
              <Counter target={stat.number} suffix={stat.suffix} />
            </div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
