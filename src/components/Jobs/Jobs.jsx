import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import './Jobs.css';

const Jobs = () => {
  return (
    <section className="section jobs-section" id="jobs">
      <div className="jobs-hero">
        <div className="jobs-hero-bg"></div>
        <div className="jobs-header container">
          <span className="eyebrow eyebrow-center">Join The Team</span>
          <h2 className="section-title">Career Opportunities</h2>
          <p className="section-subtitle">Join our team of pioneers in the UAS/Drone field</p>
        </div>
      </div>

      <div className="container">
        <div className="jobs-grid">
          <div className="job-card">
            <div className="job-card-header">
              <div className="job-icon-wrapper">
                <Briefcase size={24} className="job-icon" />
              </div>
              <div className="job-badges">
                <span className="job-badge bg-primary">Hiring</span>
                <span className="job-badge bg-secondary">Full-time</span>
              </div>
            </div>
            
            <h3 className="job-title">Propulsion Engineer</h3>
            
            <div className="job-details">
              <div className="job-detail-item">
                <MapPin size={16} />
                <span>IIT Kanpur Outreach Center Noida Sector-62, India</span>
              </div>
              <div className="job-detail-item">
                <GraduationCap size={16} />
                <span>M.Tech or Ph.D</span>
              </div>
            </div>
            
            <p className="job-description">
              We are looking for an experienced engineers for internal combustion engine design. If you have a passion for aerospace and cutting-edge propulsion technology, come build the future with us.
            </p>
            
            <Link to="/jobs/propulsion-engineer" className="btn btn-outline apply-btn">
              View Details & Apply <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
