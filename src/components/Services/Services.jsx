import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './Services.css';

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-center">What We Do</span>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <Link to={`/services/${service.id}`} className="service-card" key={service.id}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
