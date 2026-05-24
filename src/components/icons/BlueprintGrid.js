import React from 'react';

export default function BlueprintGrid() {
  return (
    <svg
      className="doodle-svg"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke="#4a9eff" strokeWidth="0.7" />
        </pattern>
        <pattern id="bp-dots" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#4a9eff" opacity="0.65" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#bp-grid)" />
      <rect width="100%" height="100%" fill="url(#bp-dots)" />
    </svg>
  );
}
