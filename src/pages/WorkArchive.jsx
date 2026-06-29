import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects, projectCategories } from '../data/content';

export default function WorkArchive() {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const handleClick = (slug) => {
    navigate(`/work/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Work Archive — QJUIC | Selected Projects & Case Studies</title>
        <meta name="description" content="Explore QJUIC's portfolio of web development projects. E-commerce, dashboards, platforms, and brand identities. Filter by category." />
        <meta property="og:title" content="Work Archive — QJUIC" />
        <meta property="og:description" content="Comprehensive project showcase with detailed case studies." />
      </Helmet>

      <section className="work-archive section" style={{ paddingTop: '140px' }}>
        <div className="container">
          {/* Header */}
          <div className="section-header animate-on-scroll">
            <div className="section-header-left">
              <span className="mono-label">Work Archive</span>
              <h1 className="display-lg">
                All <span className="accent-text">Projects</span>
              </h1>
            </div>
            <div className="section-header-right">
              {projects.length} Projects<br />
              2024 — 2025
            </div>
          </div>

          {/* Category Filters */}
          <div className="archive-filters animate-on-scroll">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="filter-count">
                    {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="archive-grid stagger-children">
            {filtered.map((project) => (
              <div
                key={project.slug}
                className="archive-card animate-on-scroll"
                onClick={() => handleClick(project.slug)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(project.slug)}
              >
                <div className="archive-card-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('img-fallback');
                    }}
                  />
                  <div className="archive-card-overlay">
                    <span className="btn-juice" style={{ padding: '10px 20px', fontSize: '0.65rem' }}>
                      View Case Study →
                    </span>
                  </div>
                </div>
                <div className="archive-card-body">
                  <div className="archive-card-top">
                    <span className="work-number">{project.number}</span>
                    <span className="work-meta">{project.category} / {project.year}</span>
                  </div>
                  <h2 className="archive-card-title">{project.title}</h2>
                  <p className="archive-card-desc">{project.shortDesc}</p>
                  <div className="archive-card-tech">
                    {project.tech.map((t, j) => (
                      <span className="capability-tag" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="archive-empty">
              <p className="mono-body">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
