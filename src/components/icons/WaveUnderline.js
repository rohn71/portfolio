import React from 'react';

export default function WaveUnderline({ width = 220, height = 16 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 16"
      preserveAspectRatio="none"
    >
      <path d="M4,9 Q40,3 76,9 Q112,14 148,8 Q184,3 216,8" />
    </svg>
  );
}
