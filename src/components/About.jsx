import { tools } from '../data/content';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-visual animate-on-scroll">
            <div className="about-image-frame">
              <div className="about-placeholder-visual">
                <div className="about-code-lines">
                  <span className="code-line" style={{ width: '60%' }}></span>
                  <span className="code-line accent" style={{ width: '80%' }}></span>
                  <span className="code-line" style={{ width: '45%' }}></span>
                  <span className="code-line" style={{ width: '70%' }}></span>
                  <span className="code-line accent" style={{ width: '55%' }}></span>
                  <span className="code-line" style={{ width: '35%' }}></span>
                  <span className="code-line" style={{ width: '65%' }}></span>
                  <span className="code-line accent" style={{ width: '50%' }}></span>
                  <span className="code-line" style={{ width: '75%' }}></span>
                  <span className="code-line" style={{ width: '40%' }}></span>
                </div>
                <div className="about-terminal-cursor">█</div>
              </div>
              <div className="about-image-tag">Creative Developer</div>
              <div className="about-coordinates">
                20.2961° N<br />85.8245° E
              </div>
            </div>
          </div>
          <div className="about-content animate-on-scroll">
            <span className="mono-label">About</span>
            <h2 className="display-md">
              Building the <span className="accent-text">void</span> between
              vision &amp; reality.
            </h2>
            <p className="about-bio">
              I'm a developer and designer who lives at the intersection of
              structured code and chaotic creativity. Every project is an
              experiment in pushing digital boundaries — from reactive SPAs
              to immersive brand experiences.
            </p>
            <p className="about-bio">
              My approach is brutally simple: understand the problem,
              design the solution, engineer the execution. No fluff,
              no filler — just results that convert and experiences
              that stick.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">50+</div>
                <div className="about-stat-label">Projects Shipped</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">30+</div>
                <div className="about-stat-label">Happy Clients</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">3+</div>
                <div className="about-stat-label">Years Active</div>
              </div>
            </div>

            <div className="about-tools">
              <span className="mono-label">Tech Stack</span>
              <div className="about-tool-grid">
                {tools.map((tool, i) => (
                  <span className="about-tool" key={i}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
