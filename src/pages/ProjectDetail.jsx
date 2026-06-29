import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/content';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
        <div className="container">
          <span className="mono-label">Error 404</span>
          <h1 className="display-lg" style={{ marginBottom: '24px' }}>
            Project <span className="accent-text">Not Found</span>
          </h1>
          <p className="mono-body" style={{ marginBottom: '32px' }}>
            The requested project does not exist in the archive.
          </p>
          <button className="btn-juice" onClick={() => navigate('/work')}>
            ← Back to Archive
          </button>
        </div>
      </section>
    );
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{project.title} — QJUIC Case Study</title>
        <meta name="description" content={project.shortDesc} />
        <meta property="og:title" content={`${project.title} — QJUIC`} />
        <meta property="og:description" content={project.shortDesc} />
      </Helmet>

      <article className="project-detail">
        {/* Hero */}
        <section className="pd-hero">
          <div className="container">
            <div className="pd-hero-top">
              <Link to="/work" className="pd-back-link">
                ← Back to Archive
              </Link>
              <span className="mono-label">{project.meta}</span>
            </div>

            <h1 className="pd-title display-xl">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? '' : 'accent-text'}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <div className="pd-meta-bar">
              <div className="pd-meta-item">
                <span className="mono-label">Category</span>
                <span className="pd-meta-value">{project.category}</span>
              </div>
              <div className="pd-meta-item">
                <span className="mono-label">Year</span>
                <span className="pd-meta-value">{project.year}</span>
              </div>
              <div className="pd-meta-item">
                <span className="mono-label">Project</span>
                <span className="pd-meta-value">{project.number}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pd-image-section">
          <div className="container">
            <div className="pd-hero-image">
              <img
                src={project.image}
                alt={`${project.title} showcase`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('img-fallback');
                  e.target.parentElement.setAttribute('data-project', project.number);
                }}
              />
            </div>
          </div>
        </section>

        {/* Case Study Narrative: Challenge → Solution → Result */}
        <section className="pd-narrative section">
          <div className="container">
            <div className="pd-narrative-grid">
              {/* Challenge */}
              <div className="pd-narrative-block animate-on-scroll">
                <div className="pd-narrative-number">01</div>
                <h2 className="pd-narrative-heading">
                  The <span className="accent-text">Challenge</span>
                </h2>
                <p className="pd-narrative-text">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="pd-narrative-block animate-on-scroll">
                <div className="pd-narrative-number">02</div>
                <h2 className="pd-narrative-heading">
                  The <span className="accent-text">Solution</span>
                </h2>
                <p className="pd-narrative-text">{project.solution}</p>
              </div>

              {/* Result */}
              <div className="pd-narrative-block animate-on-scroll">
                <div className="pd-narrative-number">03</div>
                <h2 className="pd-narrative-heading">
                  The <span className="accent-text">Result</span>
                </h2>
                <p className="pd-narrative-text">{project.result}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Counters */}
        <section className="pd-impact section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <div className="section-header-left">
                <span className="mono-label">Impact</span>
                <h2 className="display-lg">
                  By The <span className="accent-text">Numbers</span>
                </h2>
              </div>
            </div>
            <div className="pd-impact-grid animate-on-scroll">
              {project.impact.map((stat, i) => (
                <div className="pd-impact-card" key={i}>
                  <div className="pd-impact-number">{stat.number}</div>
                  <div className="pd-impact-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="pd-tech section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <div className="section-header-left">
                <span className="mono-label">Technology</span>
                <h2 className="display-lg">
                  Tech <span className="accent-text">Stack</span>
                </h2>
              </div>
            </div>
            <div className="pd-tech-list animate-on-scroll">
              {project.tech.map((tech, i) => (
                <span className="pd-tech-item" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="pd-nav section">
          <div className="container">
            <div className="pd-nav-bar">
              {prevProject ? (
                <Link to={`/work/${prevProject.slug}`} className="pd-nav-link pd-nav-prev" onClick={() => window.scrollTo({ top: 0 })}>
                  <span className="mono-label">Previous Project</span>
                  <span className="pd-nav-title">← {prevProject.title}</span>
                </Link>
              ) : (
                <div></div>
              )}
              {nextProject ? (
                <Link to={`/work/${nextProject.slug}`} className="pd-nav-link pd-nav-next" onClick={() => window.scrollTo({ top: 0 })}>
                  <span className="mono-label">Next Project</span>
                  <span className="pd-nav-title">{nextProject.title} →</span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
