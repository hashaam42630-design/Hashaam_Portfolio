import React, { useState, useEffect } from 'react';
import './Navbar.css';

// ============================================================
// NAVBAR COMPONENT
// Edit: Your name/logo text in the <a className="logo"> tag
// ============================================================

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow/bg when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home',    href: '#home' },
    { label: 'About',   href: '#about' },
    { label: 'Skills',  href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ---- LOGO / YOUR NAME ---- */}
        {/* EDIT: Change "Alex Morgan" to your name */}
        <a href="#home" className="navbar__logo">
          Hashaam<span>.</span>
        </a>

        {/* ---- DESKTOP LINKS ---- */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* ---- HIRE ME BUTTON (desktop) ---- */}
        <a href="#contact" className="btn btn-primary navbar__cta">
          Hire Me
        </a>

        {/* ---- HAMBURGER (mobile) ---- */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ---- MOBILE MENU ---- */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}
          style={{ width: 'fit-content', marginTop: '8px' }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
