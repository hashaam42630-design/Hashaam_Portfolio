import React from 'react';
import './About.css';

// ============================================================
// ABOUT SECTION
// Edit:
//   - YOUR ABOUT TEXT: Find the <p> tags inside .about__text
//   - YOUR STATS: Find the aboutStats array below
// ============================================================

// EDIT: Change these numbers to reflect your experience
const aboutStats = [
  { number: '1+',  label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
];

function About() {
  return (
    <section id="about" className="about" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">

        <div className="about__inner">

          {/* ---- LEFT: HEADING + IMAGE BLOCK ---- */}
          <div className="about__left">
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">
              Passionate About<br /><span>Great Design</span>
            </h2>
            <div className="section-divider" />

            {/* Stats row */}
            <div className="about__stats">
              {aboutStats.map(stat => (
                <div className="about__stat" key={stat.label}>
                  <span className="about__stat-number">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ---- RIGHT: ABOUT TEXT ---- */}
          <div className="about__right">

            {/*
              EDIT: Change this paragraph to describe yourself.
              Keep it professional and concise (2-3 short paragraphs max).
            */}
            <p className="about__text">
              I'm a Frontend Web Developer based in Pakistan, with over 1+ years of
              experience building modern, responsive, and performance-optimized web
              applications. I specialize in turning creative concepts into clean,
              functional code.
            </p>

            <p className="about__text">
              My work spans from crafting pixel-perfect UIs with HTML & CSS to building
              dynamic single-page applications with React JS. I'm passionate about
              accessibility, clean code, and delivering polished user experiences.
            </p>

            {/* EDIT: Change this tagline if needed */}
            <blockquote className="about__quote">
              "I build interfaces that feel as good as they look."
            </blockquote>

            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
