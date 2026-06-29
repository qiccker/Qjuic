import { useNavigate } from 'react-router-dom';
import { projects } from '../data/content';

export default function Works() {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/work/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="works section" id="works">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-header-left">
            <span className="mono-label">Selected Works</span>
            <h2 className="display-lg">
              Featured <span className="accent-text">Projects</span>
            </h2>
          </div>
          <div className="section-header-right">
            {projects.length} Projects<br />2024 — 2025
          </div>
        </div>
        <div className="works-list stagger-children">
          {projects.map((work) => (
            <div
              className="work-item animate-on-scroll"
              key={work.number}
              onClick={() => handleClick(work.slug)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(work.slug)}
            >
              <span className="work-number">{work.number}</span>
              <div className="work-info">
                <span className="work-title">{work.title}</span>
                <span className="work-meta">{work.meta}</span>
              </div>
              <div className="work-item-right">
                <span className="work-year">{work.year}</span>
                <span className="work-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
        <div className="works-cta animate-on-scroll">
          <button className="btn-ghost" onClick={() => { navigate('/work'); window.scrollTo({ top: 0 }); }}>
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
