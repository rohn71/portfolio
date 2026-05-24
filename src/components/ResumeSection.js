import React from 'react';
import {
  EDUCATION,
  EXPERIENCE_TIMELINE,
  PROJECT_TIMELINE,
  TYPE_META,
} from '../constants';
import './ResumeSection.css';

function TimelineCard({ item, meta, org, hideTypeTag = false }) {
  const showTitleDateRow = hideTypeTag && item.period;

  return (
    <div className="timeline-entry">
      <div className="timeline-node" style={{ borderColor: meta.accent }}>
        <div className="timeline-node-inner" style={{ background: meta.accent }} />
      </div>

      <article className="timeline-card neu-card">
        <div className={`timeline-card-head ${hideTypeTag ? 'no-type-tag' : ''}`}>
          {!hideTypeTag && (
            <span className="timeline-type-tag" style={{ borderColor: meta.accent, color: meta.accent }}>
              {meta.label}
            </span>
          )}
          {!showTitleDateRow && item.period && <span className="timeline-period">{item.period}</span>}
        </div>

        {showTitleDateRow ? (
          <div className="timeline-title-row">
            <h3 className="timeline-title timeline-title-inline">{item.title}</h3>
            <span className="timeline-period timeline-period-inline">{item.period}</span>
          </div>
        ) : (
          <h3 className="timeline-title">{item.title}</h3>
        )}

        {org && (
          <p className="timeline-org">
            {org}
            {item.location && <span className="timeline-location"> · {item.location}</span>}
          </p>
        )}

        {item.roles && (
          <div className="timeline-roles">
            {item.roles.map((roleItem, idx) => (
              <div key={`${roleItem.role}-${idx}`} className="timeline-role-block">
                <p className="timeline-role-heading">
                  {roleItem.role}
                  {roleItem.period && <span className="timeline-role-period"> · {roleItem.period}</span>}
                </p>
                <ul className="timeline-points">
                  {roleItem.points.map((pt, i) => (
                    <li key={i}>
                      <span className="timeline-bullet" style={{ color: meta.accent }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {item.points && (
          <ul className="timeline-points">
            {item.points.map((pt, i) => (
              <li key={i}>
                <span className="timeline-bullet" style={{ color: meta.accent }}>▸</span>
                {pt}
              </li>
            ))}
          </ul>
        )}

        {item.techStack && <p className="timeline-tech">Tech stack: {item.techStack}</p>}
      </article>
    </div>
  );
}

export default function ResumeSection() {
  const educationItem = {
    type: EDUCATION.type,
    title: EDUCATION.title,
    period: EDUCATION.period,
    location: EDUCATION.location,
  };

  return (
    <section id="resume" className="resume-section" data-section="SECTION 03 / RESUME">
      <p className="section-label">Resume</p>

      <div className="resume-header">
        <h2 className="resume-heading">
          The Journey<span className="accent-dot">.</span>
        </h2>
        <a
          href="/Rohhun_Laiju_Resume.pdf"
          className="resume-download-btn"
          download="Rohhun_Laiju_Resume.pdf"
        >
          download cv <span className="btn-arrow" aria-hidden="true">↓&#xFE0E;</span>
        </a>
      </div>

      <div className="resume-columns">
        <div className="resume-column">
          <h3 className="resume-column-heading">Experience</h3>
          <div className="resume-column-stack">
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <TimelineCard
                key={`exp-${idx}`}
                item={item}
                meta={TYPE_META[item.type]}
                org={item.company}
                hideTypeTag
              />
            ))}
          </div>
        </div>

        <div className="resume-column">
          <h3 className="resume-column-heading">Projects</h3>
          <div className="resume-column-stack">
            {PROJECT_TIMELINE.map((item, idx) => (
              <TimelineCard
                key={`proj-${idx}`}
                item={item}
                meta={TYPE_META[item.type]}
                org={null}
              />
            ))}
          </div>

          <h3 className="resume-column-heading resume-column-heading-secondary">Education</h3>
          <div className="resume-column-stack">
            <TimelineCard
              item={educationItem}
              meta={TYPE_META.education}
              org={EDUCATION.institution}
              hideTypeTag
            />
          </div>
        </div>
      </div>
    </section>
  );
}
