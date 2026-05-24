import { useEffect, useState } from 'react';

/**
 * Drives a continuously incrementing wave phase via requestAnimationFrame.
 * Resets to 0 when active becomes false.
 * Returns the current wavePhase number.
 */
export function useWaveAnimation(active) {
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    if (!active) {
      setWavePhase(0);
      return;
    }

    let rafId;
    const animate = () => {
      setWavePhase(prev => prev + 0.02);
      rafId = window.requestAnimationFrame(animate);
    };
    rafId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(rafId);
  }, [active]);

  return wavePhase;
}
