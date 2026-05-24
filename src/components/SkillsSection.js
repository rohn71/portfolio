import React from 'react';
import { SKILL_TILES } from '../constants';
import { useInView } from '../hooks/useInView';
import './SkillsSection.css';

export default function SkillsSection() {
  const [gridRef, inView] = useInView({ threshold: 0.12 });

  return (
    <section id="skills" className="skills-section" data-section="SECTION 02 / SKILLS">
      <p className="section-label">Skills</p>

      <div className="skills-header">
        <h2 className="skills-heading">
          What I work with<span className="accent-dot">. </span><span className="skills-heading-sub">(and still learning!)</span>
        </h2>
      </div>

      <div
        ref={gridRef}
        className={`skills-grid${inView ? ' skills-grid--visible' : ''}`}
      >
        {SKILL_TILES.map(({ name, Icon, color, url }, index) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-tile neu-card"
            data-dir={index % 2 === 0 ? 'left' : 'right'}
            style={{
              '--tile-glow': color,
              '--tile-delay': `${index * 60}ms`,
            }}
            onAnimationEnd={(e) => e.currentTarget.classList.add('skill-tile--landed')}
          >
            <Icon className="skill-tile-icon" style={{ color }} aria-hidden="true" />
            <span className="skill-tile-name">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
