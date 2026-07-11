import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getServiceById } from '../../data/servicesData';
import Contact from '../../components/Contact/Contact';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Link to="/#services" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <main className="service-details-page">
      <div className="service-hero">
        <div className="service-hero-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
        <div className="service-hero-content container">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} /> Back
          </button>
          <h1 className="service-title-large">{service.title}</h1>
        </div>
      </div>

      <div className="container service-content-container">
        <div className="service-main-content">
          <div className="service-description-card">
            <h2>Overview</h2>
            <p className="service-lead-text">{service.description}</p>
            
            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Detailed Capabilities</h3>
            <p className="service-long-text">{service.longDescription}</p>
            
            
            <div className="benefits-list">
              <div className="benefit-item">
                <CheckCircle2 className="benefit-icon" />
                <span>Cost-effective and time-saving solutions</span>
              </div>
              <div className="benefit-item">
                <CheckCircle2 className="benefit-icon" />
                <span>High-resolution actionable data</span>
              </div>
              <div className="benefit-item">
                <CheckCircle2 className="benefit-icon" />
                <span>Zero safety risk for human personnel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-service">
        <div style={{ textAlign: 'center', marginBottom: '-2rem', position: 'relative', zIndex: 10 }}>
          <h2 className="section-title">Inquire About This Service</h2>
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default ServiceDetails;
