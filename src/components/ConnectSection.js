import React, { useState } from 'react';
import { HANDLES } from '../constants';
import { copyToClipboard } from '../utils';
import './ConnectSection.css';

export default function ConnectSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    copyToClipboard(HANDLES.find(h => h.platform === 'Email').handle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="connect" className="connect-section" >
      <p className="section-label">Connect</p>

      <div className="connect-header">
        <h2 className="connect-heading">
         Say hello<span className="accent-dot">.</span>
        </h2>
        <p className="connect-sub">
          Whether it's a collab, a job opportunity, or just a chat,
          drop me a line. I respond to everything.
        </p>
      </div>

      <div className="connect-handles">
        {HANDLES.map(({ Icon, ...h }) => (
          <a
            key={h.platform}
            href={h.url}
            className="handle-card neu-card"
            target={h.platform !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <span className="handle-icon" aria-hidden="true"><Icon /></span>
            <div className="handle-info">
              <span className="handle-platform">{h.platform}</span>
              <span className="handle-name">{h.handle}</span>
            </div>
            <span className="handle-note">{h.note} ↗&#xFE0E;</span>
          </a>
        ))}
      </div>

      {/* Quick email copy */}
      <div className="connect-email-bar">
        <span className="connect-email-label">quick copy</span>
        <button className="connect-email-btn" onClick={copyEmail}>
          {copied ? '✓ copied!' : 'copy email'}
        </button>
      </div>

      {/* Footer line */}
      <footer className="connect-footer">
        <span>designed & built by Rohhun Laiju</span>
        <span className="connect-footer-dot">·</span>
        <span>{new Date().getFullYear()}</span>
        <span className="connect-footer-dot">·</span>
        <span>React + Node.js</span>
      </footer>
    </section>
  );
}
