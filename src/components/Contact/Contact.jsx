import React, { useState } from 'react';
import './Contact.css';

const initialForm = { fullName: '', companyName: '', email: '', phone: '', requirements: '' };

const Contact = ({ hideTitle }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-container">
          {!hideTitle && <h2 className="contact-title">Get in Touch</h2>}

          {status === 'sent' ? (
            <div className="success-message">
              <p>Thanks for submitting!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name <span className="required-mark">*</span></label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name <span className="required-mark">*</span></label>
                  <input type="text" name="companyName" value={form.companyName} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address <span className="required-mark">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number <span className="required-mark">*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Product Requirements <span className="required-mark">*</span></label>
                <textarea rows="3" name="requirements" value={form.requirements} onChange={handleChange} required className="form-input"></textarea>
              </div>
              {status === 'error' && (
                <p className="form-error">Something went wrong sending your message. Please try again.</p>
              )}
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
