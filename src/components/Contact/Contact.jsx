import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ hideTitle }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-container">
          {!hideTitle && <h2 className="contact-title">Get in Touch</h2>}

          {submitted ? (
            <div className="success-message">
              <p>Thanks for submitting!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name <span className="required-mark">*</span></label>
                  <input type="text" required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name <span className="required-mark">*</span></label>
                  <input type="text" required className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address <span className="required-mark">*</span></label>
                  <input type="email" required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number <span className="required-mark">*</span></label>
                  <input type="tel" required className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Product Requirements <span className="required-mark">*</span></label>
                <textarea rows="5" required className="form-input"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
