import React from 'react';
import './Skills.css';

// ============================================================
// SKILLS SECTION
// EDIT: Add, remove, or change skills in the `skills` array below.
// Each skill has: name, icon (emoji), level (0-100), and description.
// ============================================================

const skills = [
  {
    name: 'HTML5',
    icon: '🌐',
    level: 95,
    description: 'Semantic markup, accessibility, and modern HTML structure.',
  },
  {
    name: 'CSS3',
    icon: '🎨',
    level: 90,
    description: 'Flexbox, Grid, animations, and responsive design.',
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    level: 85,
    description: 'ES6+, DOM manipulation, async/await, and APIs.',
  },
  {
    name: 'React JS',
    icon: '⚛️',
    level: 82,
    description: 'Components, hooks, state management, and routing.',
  },
  {
    name: 'PHP',
    icon: '🐘',
    level: 70,
    description: 'Server-side scripting, forms, and MySQL integration.',
  },
];

function Skills() {
  return (
    <section id="skills" className="skills" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">

        {/* Section heading */}
        <div className="skills__header">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="section-divider" />
        </div>

        {/* Skills grid */}
        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              {/* Icon & name */}
              <div className="skill-card__top">
                <span className="skill-card__icon">{skill.icon}</span>
                <div>
                  <h3 className="skill-card__name">{skill.name}</h3>
                  <p className="skill-card__desc">{skill.description}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="skill-card__bar-wrap">
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar-fill"
                    style={{ '--skill-level': `${skill.level}%` }}
                  />
                </div>
                <span className="skill-card__level">{skill.level}%</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
