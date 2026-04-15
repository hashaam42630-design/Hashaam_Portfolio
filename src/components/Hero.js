import React from 'react';
import './Hero.css';
import Pic from './Hello.jpeg';
// ============================================================
// HERO SECTION
// Edit the following:
//   - YOUR NAME: Look for "Alex Morgan" below
//   - YOUR TITLE: Look for "Frontend Web Developer"
//   - YOUR INTRO LINE: Look for the short intro paragraph
//   - YOUR PROFILE IMAGE: Replace the src in <img> tag
//   - CV DOWNLOAD: Update the href in the Download CV button
// ============================================================

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Decorative background circles */}
      <div className="hero__bg-circle hero__bg-circle--1" />
      <div className="hero__bg-circle hero__bg-circle--2" />

      <div className="container hero__inner">

        {/* ---- LEFT: TEXT CONTENT ---- */}
        <div className="hero__content">

          {/* EDIT: Change greeting label if needed */}
          <p className="section-label fade-up fade-up-delay-1">
            👋 Welcome to my portfolio
          </p>

          {/* EDIT: Change "Alex Morgan" to YOUR NAME */}
          <h1 className="hero__name fade-up fade-up-delay-2">
            Hashaam<br /><span>Haroon</span>
          </h1>

          {/* EDIT: Change title / role */}
          <p className="hero__title fade-up fade-up-delay-3">
            Frontend Web Developer
          </p>

          {/* EDIT: Change this intro line */}
          <p className="hero__intro fade-up fade-up-delay-4">
            I craft clean, responsive, and user-friendly web experiences
            with modern tools and a passion for thoughtful design.
          </p>

          {/* ---- BUTTONS ---- */}
          <div className="hero__actions fade-up fade-up-delay-4">
            {/* Hire Me scrolls to Contact */}
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>

            {/* EDIT: Replace href with your actual CV file path, e.g. "/Alex_Morgan_CV.pdf" */}
            <a href="./resume.pdf" download className="btn btn-outline">
              Download CV
            </a>
          </div>
        </div>

        {/* ---- RIGHT: PROFILE IMAGE ---- */}
        <div className="hero__image-wrap fade-up fade-up-delay-3">
          {/*
            EDIT: Replace the src below with your profile image.
            Options:
              1. Add your image to the /public folder and use: src="/your-image.jpg"
              2. Use a URL:  src="https://your-image-url.com/photo.jpg"
          */}
          <img
            src={Pic}
            alt="Alex Morgan — Frontend Developer"
            className="hero__image"
          />
          <div className="hero__image-ring" />

          {/* Floating badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for hire
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
