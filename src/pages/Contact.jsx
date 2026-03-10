// ===== CONTACT PAGE =====

import { useState } from 'react';
import './Contact.css';

const INITIAL = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="container">
          <p className="section-tag">Get in Touch</p>
          <h1 className="contact-hero__title">We'd Love to Hear From You</h1>
          <p className="contact-hero__subtitle">
            Questions, partnerships, or just want to say hello — our team is always ready to help.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          {/* Info Cards */}
          <div className="contact-info">
            {[
              { icon: '📍', title: 'Head Office', lines: ['1200 Pacific Coast Highway', 'Los Angeles, CA 90210'] },
              { icon: '📞', title: 'Phone', lines: ['+1 (800) DRIVANA', 'Mon–Sun: 8am – 10pm PST'] },
              { icon: '✉️', title: 'Email', lines: ['hello@drivana.com', 'support@drivana.com'] },
              { icon: '🕐', title: 'Support Hours', lines: ['24/7 Roadside Assistance', 'Mon–Fri office: 9am – 6pm'] },
            ].map((info) => (
              <div key={info.title} className="contact-info-card">
                <div className="contact-info-card__icon">{info.icon}</div>
                <div>
                  <h4 className="contact-info-card__title">{info.title}</h4>
                  {info.lines.map((line) => (
                    <p key={line} className="contact-info-card__line">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="contact-map">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Office location map"
                className="contact-map__image"
              />
              <div className="contact-map__overlay">
                <span className="contact-map__pin">📍 Our Office</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">💌</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out, <strong>{form.name}</strong>. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setForm(INITIAL); setSubmitted(false); }}
                  className="btn-outline"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2 className="contact-form__title">Send a Message</h2>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`contact-input ${errors.name ? 'contact-input--error' : ''}`}
                    />
                    {errors.name && <span className="contact-error">{errors.name}</span>}
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`contact-input ${errors.email ? 'contact-input--error' : ''}`}
                    />
                    {errors.email && <span className="contact-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`contact-input ${errors.subject ? 'contact-input--error' : ''}`}
                  />
                  {errors.subject && <span className="contact-error">{errors.subject}</span>}
                </div>

                <div className="contact-field">
                  <label className="contact-label">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="6"
                    className={`contact-input contact-textarea ${errors.message ? 'contact-input--error' : ''}`}
                  />
                  {errors.message && <span className="contact-error">{errors.message}</span>}
                </div>

                <button type="submit" className="contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
