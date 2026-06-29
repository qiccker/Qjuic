import { capabilities } from '../data/content';

export default function Capabilities() {
  return (
    <section className="capabilities section" id="capabilities">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-header-left">
            <span className="mono-label">Capabilities</span>
            <h2 className="display-lg">
              What I <span className="accent-text">Do</span>
            </h2>
          </div>
          <div className="section-header-right">
            Full-Stack<br />Creative Development
          </div>
        </div>
        <div className="capabilities-grid stagger-children">
          {capabilities.map((cap) => (
            <div className="capability-card animate-on-scroll" key={cap.number}>
              <span className="capability-number">{cap.number}</span>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.desc}</p>
              <div className="capability-tags">
                {cap.tags.map((tag, j) => (
                  <span className="capability-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
