import { useEffect, useState } from 'react';

/**
 * Cycles through an array of roles with a fade-out/fade-in transition.
 * Returns { roleIdx, visible } — use visible to fade the displayed role.
 */
export function useRoleCycle(roles, intervalMs = 2800) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [roles.length, intervalMs]);

  return { roleIdx, visible };
}
