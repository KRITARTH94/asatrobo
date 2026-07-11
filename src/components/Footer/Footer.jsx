import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin, Globe, MessageCircle, Camera, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img
              src="https://static.wixstatic.com/media/7177f3_cef1291d90f24c189b686d3c8c51f0f1~mv2.png"
              alt="ASATRobo"
              className="footer-logo-img"
            />
            <div className="footer-badges">
              <div className="footer-badge">
                <img src="https://static.wixstatic.com/media/7177f3_c670597f16f246279d3c164465c9e844~mv2.png" alt="IIT Kanpur" />
              </div>
              <div className="footer-badge">
                <img src="https://static.wixstatic.com/media/7177f3_b2f2bd44ba7247b28e86034b1e3001b6~mv2.png" alt="Innovation and Incubation Centre, IIT Kanpur" />
              </div>
              <div className="footer-badge">
                <img src="https://static.wixstatic.com/media/7177f3_79ff79a2d0da4a2a873a78cabb7405e6~mv2.png" alt="C3iHub" />
              </div>
            </div>
            <p className="footer-desc">
              We are an IIT Kanpur incubated company, engaged in making drones and its subsystems. We design custom drones and give integration support.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Camera size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#drones">Custom Drones</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="#book">Book Online</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <span className="contact-icon-wrapper"><MapPin size={16} /></span>
                <span>IIT Kanpur, Uttar Pradesh, India</span>
              </li>
              <li>
                <span className="contact-icon-wrapper"><Phone size={16} /></span>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </li>
              <li>
                <span className="contact-icon-wrapper"><Mail size={16} /></span>
                <a href="mailto:info@asatrobo.com">info@asatrobo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2020 ASATRobo Technologies Pvt. Ltd.</p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
