import { useEffect, useRef } from 'react';

// Mouse-driven 3D perspective tilt + glare sheen. Pair the returned ref with
// the `tilt-card` / `tilt-glare` utility classes defined in index.css.
export const useTilt = ({ max = 10, scale = 1.03 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const skip = window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches;
    if (skip) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const rotateY = (relX - 0.5) * max * 2;
      const rotateX = (0.5 - relY) * max * 2;

      el.style.setProperty('--tilt-rx', `${rotateX}deg`);
      el.style.setProperty('--tilt-ry', `${rotateY}deg`);
      el.style.setProperty('--tilt-scale', scale);
      el.style.setProperty('--glare-x', `${relX * 100}%`);
      el.style.setProperty('--glare-y', `${relY * 100}%`);
      el.style.setProperty('--glare-opacity', '1');
    };

    const handleMouseLeave = () => {
      el.style.setProperty('--tilt-rx', '0deg');
      el.style.setProperty('--tilt-ry', '0deg');
      el.style.setProperty('--tilt-scale', '1');
      el.style.setProperty('--glare-opacity', '0');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [max, scale]);

  return ref;
};
