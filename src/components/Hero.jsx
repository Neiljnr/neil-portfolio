import { useRevealOnScroll } from "../useRevealOnScroll";

function Hero() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`hero reveal ${visible ? "reveal--visible" : ""}`}
      id="top"
      ref={ref}
    >
      <div className="hero-layout">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Social Media Strategy · Community Growth · Performance Marketing</span>
          </div>

          <h1 className="hero-title">
            Strategic Community &amp; Social Media Manager
          </h1>

          <p className="hero-subtitle">
            I help brands scale engaged digital communities through structured 
            content systems, performance-driven strategy, and data-backed execution — 
            increasing engagement by 40%+ across recent campaigns.
          </p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="hero-meta-pill-dot" />
              Content strategy, campaign rollouts &amp; platform optimization
            </span>
            <span className="hero-meta-item">
              <span className="hero-meta-pill-dot" />
              Audience growth, retention &amp; analytics reporting
            </span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn--primary">
              View case studies
            </a>
            <a href="#contact" className="btn btn--ghost">
              Hire me
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-card">
            <p className="hero-panel-label">Currently partnering with</p>
            <h3 className="hero-panel-title">
              Growth-focused brands &amp; digital communities
            </h3>
            <p className="hero-panel-copy">
              From content calendars to engagement frameworks and performance 
              reporting, I build scalable systems that strengthen brand authority 
              and drive measurable growth.
            </p>
            <div className="hero-panel-stats">
              <div className="hero-panel-stat">
                <span className="hero-panel-stat-label">Proven Impact</span>
                <span className="hero-panel-stat-value">
                  40%+ engagement growth
                </span>
              </div>
              <div className="hero-panel-stat">
                <span className="hero-panel-stat-label">Availability</span>
                <span className="hero-panel-stat-value hero-panel-stat-pill">
                  Open to remote contracts
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;