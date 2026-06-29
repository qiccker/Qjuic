import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wraps page content with a fade-slide transition on route changes.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset to hidden state
    el.classList.remove('page-enter-active');
    el.classList.add('page-enter');

    // Force reflow
    void el.offsetHeight;

    // Trigger animation
    requestAnimationFrame(() => {
      el.classList.add('page-enter-active');
      el.classList.remove('page-enter');
    });
  }, [location.pathname]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
