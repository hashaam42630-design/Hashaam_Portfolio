import React from 'react';
import './Contact.css';

// ============================================================
// CONTACT SECTION
// EDIT:
//   - YOUR EMAIL: Change the email in contactInfo
//   - YOUR PHONE: Change the phone number
//   - YOUR LINKEDIN: Change the LinkedIn URL and handle
//   - YOUR GITHUB: Change the GitHub URL and handle
// ============================================================

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    // EDIT: Your email address
    value: 'developers.hub42630@gmail.com',
    href: 'mailto:developers.hub42630@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    // EDIT: Your phone number
    value: '+92 3004263040',
    href: 'tel:+923004263040',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    // EDIT: Your GitHub handle and URL
    value: 'github.com/hashaam42630-design',
    href: 'https://github.com/hashaam42630-design',
  },
];

function Contact() {
  return (
    <section id="contact" className="contact" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">

        {/* ---- HEADER ---- */}
        <div className="contact__header">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="section-divider" />
          <p className="contact__subtitle">
            I'm currently open to new opportunities. Whether you have a project in mind
            or just want to say hello — my inbox is always open.
          </p>
        </div>

        {/* ---- CONTACT CARDS ---- */}
        <div className="contact__grid">
          {contactInfo.map(item => (
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              key={item.label}
            >
              <span className="contact-card__icon">{item.icon}</span>
              <div>
                <p className="contact-card__label">{item.label}</p>
                <p className="contact-card__value">{item.value}</p>
              </div>
              <span className="contact-card__arrow">→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;
