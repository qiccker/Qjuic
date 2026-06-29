import { useNavigate, useLocation } from 'react-router-dom';
import { socials } from '../data/content';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target) => {
    if (target.startsWith('/')) {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/') {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand">QJUIC<span>.</span></div>
            <div className="footer-tagline">Digital Brutalism / Creative Development</div>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-group">
              <h4>Navigate</h4>
              <a onClick={() => go('/work')}>Work</a>
              <a onClick={() => go('capabilities')}>Services</a>
              <a onClick={() => go('pricing')}>Pricing</a>
              <a onClick={() => go('about')}>About</a>
              <a onClick={() => go('contact')}>Contact</a>
            </div>
            <div className="footer-nav-group">
              <h4>Connect</h4>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} QJUIC. All rights reserved. Crafted with precision.
          </span>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
