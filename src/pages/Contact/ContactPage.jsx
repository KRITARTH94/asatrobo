import React, { useEffect } from 'react';
import { Cpu, Settings2, ShieldCheck } from 'lucide-react';
import Contact from '../../components/Contact/Contact';
import './ContactPage.css';

const trustPoints = [
  { icon: Cpu, text: 'IIT Kanpur & IIM Kozhikode Incubated' },
  { icon: Settings2, text: '100% Custom UAV Builds' },
  { icon: ShieldCheck, text: 'Reliable Drone as a Service' },
];

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

      <div className="contact-trust-strip">
        {trustPoints.map((item, i) => {
          const Icon = item.icon;
          return (
            <div className="contact-trust-item" key={i}>
              <Icon size={18} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>

      <Contact hideTitle />
    </main>
  );
};

export default ContactPage;
