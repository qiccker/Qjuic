import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const go = (target) => {
    setMenuOpen(false);
    if (target.startsWith('/')) {
      // Route navigation
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/') {
      // Same-page scroll on homepage
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-brand" onClick={() => go('/')} tabIndex={0} role="button" aria-label="Go to homepage">
          QJUIC<span>.</span>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <span className="nav-link" onClick={() => go('/work')} tabIndex={0}>Work</span>
          <span className="nav-link" onClick={() => go('capabilities')} tabIndex={0}>Services</span>
          <span className="nav-link" onClick={() => go('pricing')} tabIndex={0}>Pricing</span>
          <span className="nav-link" onClick={() => go('about')} tabIndex={0}>About</span>
          <span className="nav-cta-btn" onClick={() => go('contact')} tabIndex={0}>Transmit Signal</span>
        </div>
        <div
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          tabIndex={0}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
