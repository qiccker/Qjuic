import { useState } from 'react';
import { contactChannels, budgetOptions, serviceOptions } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'm interested in your web development services.\n\nName: ${formData.name || '—'}\nEmail: ${formData.email || '—'}\nBudget: ${formData.budget || '—'}\nService: ${formData.service || '—'}\nMessage: ${formData.message || 'I would like to discuss a project.'}`;
    window.open(`https://wa.me/917008414093?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-header-left">
            <span className="mono-label">Contact</span>
            <h2 className="display-lg">
              Transmit <span className="accent-text">Signal</span>
            </h2>
          </div>
          <div className="section-header-right">
            Let's Build<br />Something Bold
          </div>
        </div>

        <div className="contact-layout">
          {/* Left — Direct contact channels */}
          <div className="contact-info animate-on-scroll">
            <span className="mono-label">Get In Touch</span>
            <h3 className="display-md" style={{ marginBottom: '16px' }}>
              Ready to go <span className="accent-text">live</span>?
            </h3>
            <p className="mono-body">
              Click any channel below for instant connection.
              Whether it's a landing page or a full-scale platform —
              let's make it happen.
            </p>

            <div className="contact-channels">
              {contactChannels.map((ch) => (
                <a
                  key={ch.id}
                  id={ch.id}
                  href={ch.href}
                  target={ch.external ? '_blank' : undefined}
                  rel={ch.external ? 'noopener noreferrer' : undefined}
                  className="contact-channel"
                >
                  <div className="channel-icon">{ch.icon}</div>
                  <div className="channel-details">
                    <div className="channel-label">{ch.label}</div>
                    <div className="channel-value">{ch.value}</div>
                  </div>
                  <span className="channel-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Transmit Signal form */}
          <div className="contact-form-panel animate-on-scroll">
            <div className="form-header">
              <span className="dot-indicator"></span>
              <h3>Transmit Signal</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="f-name">Name</label>
                  <input className="form-input" type="text" id="f-name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-email">Email</label>
                  <input className="form-input" type="email" id="f-email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="f-phone">Phone</label>
                  <input className="form-input" type="tel" id="f-phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-budget">Budget Range</label>
                  <select className="form-select" id="f-budget" name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select budget</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="f-service">Service Required</label>
                <select className="form-select" id="f-service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="f-message">Project Brief</label>
                <textarea className="form-textarea" id="f-message" name="message" placeholder="Describe your project..." value={formData.message} onChange={handleChange} rows="4"></textarea>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-juice" id="submit-signal">
                  Transmit via WhatsApp →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
