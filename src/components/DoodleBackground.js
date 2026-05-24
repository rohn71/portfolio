import React from 'react';
import BlueprintGrid from './icons/BlueprintGrid';
import './DoodleBackground.css';

/* Blueprint-style grid background */
export default function DoodleBackground() {
  return (
    <div className="doodle-bg" aria-hidden="true">
      <BlueprintGrid />
    </div>
  );
}
