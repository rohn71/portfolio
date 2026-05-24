import React, { useState } from 'react';
import { PROFILE_IMAGE_PATH, BIO_PARAGRAPHS } from '../constants';
import './AboutSection.css';

export default function AboutSection() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="about" className="about-section" data-section="SECTION 01 / ABOUT">
      <p className="section-label">About me</p>

      <div className="about-grid">
        {/* Photo block */}
        <div className="about-photo-wrap">
          <div className="about-photo-frame">
            {!imageFailed ? (
              <img
                src={PROFILE_IMAGE_PATH}
                alt="Rohhun Laiju"
                className="about-photo-img"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="about-photo-placeholder">
                <span>add image at /public/images/profile.jpg</span>
              </div>
            )}
            <div className="about-photo-border" />
          </div>
        </div>

        {/* Text block */}
        <div className="about-text">
          <h2 className="about-heading">
            The short version<span className="about-heading-accent">.</span>
          </h2>

          <div className="about-bio">
            {BIO_PARAGRAPHS.map((text, i) => (
              <p key={i}>
                {i === BIO_PARAGRAPHS.length - 1
                  ? text.replace('Bangalore.', '').trimEnd() + ' '
                  : text}
                {i === BIO_PARAGRAPHS.length - 1 && (
                  <><span className="about-location">Bangalore</span>.</>
                )}
              </p>
            ))}
          </div>

          {/* Quick facts */}
          <div className="about-facts">
            <div className="about-fact">
              <span className="about-fact-num">1.5<span>yrs</span></span>
              <span className="about-fact-label">experience</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-num">3+</span>
              <span className="about-fact-label">hackathons</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-num">∞</span>
              <span className="about-fact-label">curiosity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
