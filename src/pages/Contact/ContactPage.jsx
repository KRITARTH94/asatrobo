import React, { useEffect } from 'react';
import Contact from '../../components/Contact/Contact';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <Contact hideTitle />
    </main>
  );
};

export default ContactPage;
