import React, { useMemo, useState } from 'react';
import { layoutWithLines, prepareWithSegments } from '@chenglou/pretext';
import {
  NAME_FONT,
  NAME_LINE_HEIGHT,
  NAME_TEXT,
  ROLES,
  SCRAMBLE_CHARS,
} from '../constants';
import { useRoleCycle } from '../hooks/useRoleCycle';
import { useWaveAnimation } from '../hooks/useWaveAnimation';
import WaveUnderline from './icons/WaveUnderline';
import './HeroSection.css';

export default function HeroSection() {
  const [nameHovered, setNameHovered] = useState(false);

  const { roleIdx, visible } = useRoleCycle(ROLES);
  const wavePhase = useWaveAnimation(nameHovered);

  const preparedName = useMemo(
    () => prepareWithSegments(NAME_TEXT, NAME_FONT),
    []
  );

  const nameLayout = useMemo(
    () => layoutWithLines(preparedName, 2000, NAME_LINE_HEIGHT),
    [preparedName]
  );

  const oneLineName = useMemo(
    () => (nameLayout.lines[0]?.text ?? NAME_TEXT),
    [nameLayout]
  );

  let globalCharIndex = 0;

  const renderWaveChar = (char) => {
    if (char === ' ') {
      return (
        <span className="hero-name-space" key={`space-${globalCharIndex++}`}>
          {' '}
        </span>
      );
    }

    const idx = globalCharIndex++;
    const wave = nameHovered ? (Math.sin(idx * 0.65 + wavePhase) + 1) / 2 : 0;

    let glyph = char;
    if (nameHovered) {
      const scrambleIndex = (idx + Math.floor(wavePhase * 5)) % SCRAMBLE_CHARS.length;
      glyph = SCRAMBLE_CHARS[scrambleIndex];
    }

    return (
      <span
        key={`char-${idx}`}
        className="hero-name-char"
        style={{
          opacity: 1,
          color: wave > 0.45 ? 'var(--accent)' : 'inherit',
        }}
      >
        {glyph}
      </span>
    );
  };

  return (
    <section id="hero" className="hero-section" data-section="SECTION 00 / HERO">
      <div className="hero-content">
        {/* eyebrow */}
        <p className="hero-eyebrow">
          <span>[</span>
          &nbsp;hey, i'm&nbsp;
          <span>]</span>
        </p>

        {/* big name */}
        <div className="hero-name-wrap">
          <h1
            className="hero-name hero-name-interactive"
            onMouseEnter={() => setNameHovered(true)}
            onMouseLeave={() => setNameHovered(false)}
          >
            <span className="hero-name-line hero-name-single-line">
              {oneLineName.split('').map(renderWaveChar)}
            </span>
            <span className="hero-name-accent">.</span>
          </h1>
          <div className="hero-name-wave" aria-hidden="true">
            <WaveUnderline />
          </div>
        </div>

        {/* animated role */}
        <p className={`hero-role ${visible ? 'visible' : 'hidden'}`}>
          ↳ &nbsp;{ROLES[roleIdx]}
        </p>

        {/* sub-line */}
        <p className="hero-sub" style={{ paddingTop: '8px' }}>
          building things for the web — currently at{' '}
          <span className="hero-company">Ping Identity</span>
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#about" className="hero-btn hero-btn--primary">
            learn more
          </a>
          <a href="#connect" className="hero-btn hero-btn--outline">
            get in touch ↗
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
