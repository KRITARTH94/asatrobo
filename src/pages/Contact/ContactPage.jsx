import React, { useEffect } from 'react';
import Contact from '../../components/Contact/Contact';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <div className="contact-page-hero">
        <div className="container">
          <span className="eyebrow eyebrow-center">Get In Touch</span>
          <h1 className="contact-page-title">Let's Build Your Next UAV</h1>
          <p className="contact-page-lead">
            Tell us about your mission requirements and our team will get back to you shortly.
          </p>
        </div>
      </div>

      <Contact hideTitle />
    </main>
  );
};

export default ContactPage;
