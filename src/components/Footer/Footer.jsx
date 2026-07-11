import React from 'react';
import './Footer.css';
import { Globe, MessageCircle, Camera, ArrowUp } from 'lucide-react';

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
            <p className="footer-desc">
              We are an IIT Kanpur incubated company, engaged in making drones and its subsystems. We design custom drones and give integration support.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Camera size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© All Right Reserved.</p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
