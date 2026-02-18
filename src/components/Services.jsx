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
        <h2 className="services__title">Social &amp; Community Growth</h2>
        <p className="services__intro">
          I help brands design and run social media and community systems that
          drive measurable engagement, strengthen loyalty, and support
          performance goals.
        </p>
      </div>

      <div className="services__grid">
        <div className="service-card">
          <h3>Social Media Strategy &amp; Execution</h3>
          <p>
            End-to-end content planning, posting, and optimization across
            Instagram, X (Twitter), LinkedIn, and Facebook.
          </p>
          <span className="service-card__tag">
            Content Calendars · Brand Voice
          </span>
        </div>

        <div className="service-card">
          <h3>Community Management &amp; Engagement</h3>
          <p>
            Systems and campaigns that keep your community active, supported,
            and connected to your brand long-term.
          </p>
          <span className="service-card__tag">
            Retention · Conversation · Trust
          </span>
        </div>

        <div className="service-card">
          <h3>Content Creation &amp; Short-Form Video</h3>
          <p>
            Carousel posts, captions, and short-form videos (Reels &amp; TikTok)
            tailored to your audience and campaign goals.
          </p>
          <span className="service-card__tag">
            Storytelling · Video Editing
          </span>
        </div>

        <div className="service-card">
          <h3>Analytics, Reporting &amp; Optimization</h3>
          <p>
            Regular reporting and insight-led adjustments using tools like Meta
            Business Suite, Google Analytics, and platform analytics.
          </p>
          <span className="service-card__tag">
            Performance Tracking · Iteration
          </span>
        </div>
      </div>
    </section>
  );
}

export default Services;