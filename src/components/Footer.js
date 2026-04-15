import React from 'react';
import './Footer.css';

// ============================================================
// FOOTER
// EDIT: Change "Alex Morgan" and the year if needed
// ============================================================

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* EDIT: Change logo name */}
        <a href="#home" className="footer__logo">Hashaam<span>.</span></a>

        {/* EDIT: Change your name in the copyright line */}
        <p className="footer__copy">
          © {year} Hashaam Haroon. All rights reserved.
        </p>

        <p className="footer__tag">Designed & Built with ♥</p>

      </div>
    </footer>
  );
}

export default Footer;
