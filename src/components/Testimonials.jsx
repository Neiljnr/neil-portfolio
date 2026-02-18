import { useRevealOnScroll } from "../useRevealOnScroll";

function Testimonials() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`testimonials section reveal ${
        visible ? "reveal--visible" : ""
      }`}
      id="testimonials"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">Client Reviews</p>
        <h2>What partners say</h2>
        <p className="section-intro">
          Feedback from teams I&apos;ve supported with social strategy,
          community management, and performance-focused content systems.
        </p>
      </div>

      <div className="testimonials-grid">
        <article className="testimonial-card">
          <p className="testimonial-quote">
            &quot;Neil quickly translated a loose idea into a clear social
            strategy. Engagement went up, but more importantly, our team had a
            repeatable system to follow.&quot;
          </p>
          <p className="testimonial-meta">
            <span className="testimonial-name">Marketing Lead</span>
            <span className="testimonial-role">
              Direct-to-consumer skincare brand
            </span>
          </p>
        </article>

        <article className="testimonial-card">
          <p className="testimonial-quote">
            &quot;Our community channels felt reactive before. After working
            together, we had a content calendar, clear positioning, and a
            practical way to track what was actually working.&quot;
          </p>
          <p className="testimonial-meta">
            <span className="testimonial-name">Founder</span>
            <span className="testimonial-role">
              Early-stage SaaS product
            </span>
          </p>
        </article>

        <article className="testimonial-card">
          <p className="testimonial-quote">
            &quot;Neil approaches campaigns like an operator, not just a
            creator—always thinking about systems, measurement, and how it
            impacts the broader business goals.&quot;
          </p>
          <p className="testimonial-meta">
            <span className="testimonial-name">Creative Director</span>
            <span className="testimonial-role">
              Brand studio &amp; content agency
            </span>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;

