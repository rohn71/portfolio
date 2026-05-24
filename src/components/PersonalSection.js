import React, { useState } from 'react';
import './PersonalSection.css';

const FOOTBALL_CARDS = [
  {
    id: 'messi',
    num: '10',
    name: 'Lionel Messi',
    tag: 'Forward',
    series: 'MY GOAT',
    image: '/images/messi.jpg',
    stats: [
      { label: "Ballon d'Or", value: '8×' },
      { label: 'Goals', value: '800+' },
      { label: 'UCL', value: '4×' },
    ],
    accent: '#f5c842',
    bgGrad: 'linear-gradient(160deg, #1a0a00 0%, #3d2000 60%, #f5c842 100%)',
  },
  {
    id: 'barcelona',
    num: '—',
    name: 'FC Barcelona',
    tag: 'La Liga · Spain',
    series: 'MÉS QUE UN CLUB',
    image: '/images/barcelona.jpg',
    stats: [
      { label: 'Founded', value: '1899' },
      { label: 'La Liga', value: '27×' },
      { label: 'UCL', value: '5×' },
    ],
    accent: '#a50044',
    bgGrad: 'linear-gradient(160deg, #06003a 0%, #12006b 50%, #a50044 100%)',
  },
  {
    id: 'liverpool',
    num: '—',
    name: 'Liverpool FC',
    tag: 'Premier League · England',
    series: "YOU'LL NEVER WALK ALONE",
    image: '/images/liverpool.jpg',
    stats: [
      { label: 'Founded', value: '1892' },
      { label: 'PL Titles', value: '20×' },
      { label: 'UCL', value: '6×' },
    ],
    accent: '#c8102e',
    bgGrad: 'linear-gradient(160deg, #1a0000 0%, #4a0010 50%, #c8102e 100%)',
  },
];

const TENNIS_CARDS = [
  {
    id: 'federer',
    num: '1',
    name: 'Roger Federer',
    tag: 'Switzerland',
    series: 'THE GOAT OF GRASS',
    image: '/images/federer.jpg',
    stats: [
      { label: 'Grand Slams', value: '20' },
      { label: 'Wimbledon', value: '8×' },
      { label: 'Career', value: '1998–2022' },
    ],
    accent: '#4a9eff',
    bgGrad: 'linear-gradient(160deg, #00112a 0%, #003060 55%, #4a9eff 100%)',
  },
];

function ToppsCard({ card, index }) {
  return (
    <div
      className="topps-card"
      style={{ '--accent': card.accent, '--bg-grad': card.bgGrad, animationDelay: `${index * 0.12}s` }}
    >
      {/* Shine sweep on hover */}
      <div className="topps-shine" aria-hidden="true" />

      {/* Photo */}
      <div
        className="topps-photo"
        style={{ backgroundImage: `url(${card.image}), ${card.bgGrad}` }}
      >
        <span className="topps-num">#{card.num}</span>
        <div className="topps-photo-fade" />
      </div>

      {/* Info strip */}
      <div className="topps-info" style={{ background: card.bgGrad }}>
        <span className="topps-series">{card.series}</span>
        <h3 className="topps-name">{card.name}</h3>
        <p className="topps-tag">{card.tag}</p>
        <div className="topps-stats">
          {card.stats.map(s => (
            <div key={s.label} className="topps-stat">
              <span className="topps-stat-val">{s.value}</span>
              <span className="topps-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PersonalSection() {
  const [active, setActive] = useState(null);

  const toggle = (key) => setActive(prev => (prev === key ? null : key));

  const cards = active === 'football' ? FOOTBALL_CARDS : active === 'tennis' ? TENNIS_CARDS : [];

  return (
    <section id="personal" className="personal-section">
      <p className="section-label">Beyond the Code</p>

      <div className="personal-header">
        <h2 className="personal-heading">
          My interests<span className="accent-dot">.</span>
        </h2>
        <p className="personal-sub">
          Not just a developer — I care deeply about sport, craft, and greatness.
        </p>
      </div>

      <div className="personal-toggles">
        <button
          className={`interest-btn ${active === 'football' ? 'active' : ''}`}
          onClick={() => toggle('football')}
          aria-pressed={active === 'football'}
        >
          <span className="interest-btn-icon" aria-hidden="true">⚽</span>
          Football
        </button>
        <button
          className={`interest-btn ${active === 'tennis' ? 'active' : ''}`}
          onClick={() => toggle('tennis')}
          aria-pressed={active === 'tennis'}
        >
          <span className="interest-btn-icon" aria-hidden="true">🎾</span>
          Tennis
        </button>
      </div>

      {cards.length > 0 && (
        <div className={`topps-grid ${active}`} key={active}>
          {cards.map((card, i) => (
            <ToppsCard key={card.id} card={card} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
