import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, GraduationCap, Clock } from 'lucide-react';
import Contact from '../../components/Contact/Contact';
import './JobDetails.css';

const JobDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="job-details-page">
      <div className="job-details-header-bg"></div>
      
      <div className="container job-details-container">
        <Link to="/jobs" className="back-link">
          <ArrowLeft size={18} /> Back to Careers
        </Link>
        
        <div className="job-details-card">
          <div className="job-card-header">
            <div className="job-icon-wrapper">
              <Briefcase size={28} className="job-icon" />
            </div>
            <div className="job-badges">
              <span className="job-badge bg-primary">Hiring</span>
              <span className="job-badge bg-secondary">Full-time</span>
            </div>
          </div>
          
          <h1 className="job-title-large">Propulsion Engineer</h1>
          
          <div className="job-meta-grid">
            <div className="meta-item">
              <MapPin size={20} className="meta-icon" />
              <div>
                <span className="meta-label">Location</span>
                <span className="meta-value">IIT Kanpur Outreach Center Noida Sector-62, India</span>
              </div>
            </div>
            <div className="meta-item">
              <GraduationCap size={20} className="meta-icon" />
              <div>
                <span className="meta-label">Education</span>
                <span className="meta-value">M.Tech or Ph.D</span>
              </div>
            </div>
            <div className="meta-item">
              <Clock size={20} className="meta-icon" />
              <div>
                <span className="meta-label">Type</span>
                <span className="meta-value">Full-time, On-site</span>
              </div>
            </div>
          </div>
          
          <div className="job-description-content">
            <h3>About the Role</h3>
            <p>
              We are looking for an experienced engineer for internal combustion engine design. If you have a passion for aerospace and cutting-edge propulsion technology, come build the future with us. 
              Asatrobo is rapidly expanding its capabilities in UAS/Drone technologies and we need forward-thinking engineers to join our incubated setup at IIT Kanpur.
            </p>
            
            <h3>Key Responsibilities</h3>
            <ul>
              <li>Design, develop, and test advanced internal combustion engines for drone applications.</li>
              <li>Perform thermodynamic, fluid, and structural analyses on engine components.</li>
              <li>Collaborate with the aerodynamics and structural teams to ensure seamless integration into UAV frames.</li>
              <li>Troubleshoot and resolve complex propulsion-related issues during testing phases.</li>
            </ul>
            
            <h3>Requirements</h3>
            <ul>
              <li>M.Tech or Ph.D in Aerospace, Mechanical Engineering, or a closely related field.</li>
              <li>Proven experience in IC engine design and testing.</li>
              <li>Familiarity with simulation software and CAD tools.</li>
              <li>Strong problem-solving skills and a passion for drone technology.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Reusing Contact component for "Apply" section */}
      <div id="apply-section">
        <Contact />
      </div>
    </main>
  );
};

export default JobDetails;
