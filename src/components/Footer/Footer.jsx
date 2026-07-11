import React from 'react';
import './Footer.css';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
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
