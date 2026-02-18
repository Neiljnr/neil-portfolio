import { useRevealOnScroll } from "../useRevealOnScroll";

function Services() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`services reveal ${visible ? "reveal--visible" : ""}`}
      id="services"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">Services</p>
        <h2 className="services__title">Strategic Growth Systems</h2>
        <p className="services__intro">
          I design AI-powered workflows, community ecosystems, and scalable
          content systems that drive measurable growth — without sacrificing
          clarity or brand integrity.
        </p>
      </div>

      <div className="services__grid">
        <div className="service-card">
          <h3>AI Prompt Architecture</h3>
          <p>
            Structured prompt systems that increase output quality,
            consistency, and operational efficiency.
          </p>
          <span className="service-card__tag">
            AI Systems · Workflow Optimization
          </span>
        </div>

        <div className="service-card">
          <h3>Community-Led Growth Strategy</h3>
          <p>
            Data-informed frameworks that build engaged ecosystems — not just
            audiences.
          </p>
          <span className="service-card__tag">
            Retention · Engagement · Authority
          </span>
        </div>

        <div className="service-card">
          <h3>Content Infrastructure & Conversion</h3>
          <p>
            Scalable content systems engineered to convert attention into
            trust, leads, and long-term equity.
          </p>
          <span className="service-card__tag">
            Positioning · Funnels · Optimization
          </span>
        </div>

        <div className="service-card">
          <h3>Web & Digital Experience Design</h3>
          <p>
            High-performance, conversion-focused digital environments aligned
            with business strategy.
          </p>
          <span className="service-card__tag">
            UX Strategy · Performance · Modern Stack
          </span>
        </div>
      </div>
    </section>
  );
}

export default Services;