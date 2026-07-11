import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { useTilt } from '../../hooks/useTilt';
import './Services.css';

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const tiltRef = useTilt({ max: 8, scale: 1.03 });

  return (
    <Link to={`/services/${service.id}`} className="service-card tilt-card" ref={tiltRef}>
      <div className="service-image-wrapper">
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description" style={{ textAlign: 'justify' }}>{service.description}</p>
        <div style={{ marginTop: '1rem', color: 'var(--secondary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          Learn More <span>→</span>
        </div>
      </div>
      <span className="tilt-glare"></span>
    </Link>
  );
};

export default Services;
