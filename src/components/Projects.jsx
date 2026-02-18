import { useRevealOnScroll } from "../useRevealOnScroll";

function Projects() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
      id="projects"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">Growth Portfolio</p>
        <h2>Selected Campaign Impact</h2>
        <p className="section-intro">
          Strategic social media and community initiatives focused on measurable
          engagement growth, revenue performance, and scalable systems.
        </p>
      </div>

      <div className="projects-grid">
        {/* Case Study 1 */}
        <article className="project-card">
          <div className="project-card-content">
            <h3>Instagram Growth &amp; Engagement Optimization — NatureHub</h3>

            <div className="growth-highlight">
              42% Instagram engagement lift · 35% Facebook interaction growth ·
              +5,000 followers in 60 days
            </div>

            <p>
              <strong>Objective:</strong> Strengthen brand visibility and
              increase community engagement without paid advertising.
            </p>

            <p>
              <strong>Strategy:</strong> Built a structured 30-day content engine
              combining high-retention reels, carousel education posts,
              engagement loops, and influencer collaborations.
            </p>

            <p>
              <strong>Execution:</strong> 15 optimized short-form videos,
              strategic hashtag layering, analytics-based posting windows, and
              daily engagement management.
            </p>

            <p>
              <strong>Business Impact:</strong> Improved brand authority, stronger
              repeat engagement behavior, and measurable lift in organic
              visibility.
            </p>
          </div>

          <div className="project-card-media">
            <div className="project-media-frame project-media-frame--naturehub">
              <div className="project-media-window" />
              <p className="project-media-label">
                Instagram reel &amp; carousel preview
              </p>
            </div>
          </div>
        </article>

        {/* Case Study 2 */}
        <article className="project-card">
          <div className="project-card-content">
            <h3>Paid Media Launch Campaign — Skincare Product</h3>

            <div className="growth-highlight">
              4.5x ROAS · 200 Sales in First Month · 60% Increase in Qualified
              Traffic
            </div>

            <p>
              <strong>Objective:</strong> Drive revenue during product launch
              phase.
            </p>

            <p>
              <strong>Strategy:</strong> Funnel-based paid media structure with
              split-tested creatives, segmented audiences, and retargeting
              layers.
            </p>

            <p>
              <strong>Execution:</strong> $100 controlled test budget across
              carousel and video formats, with creative optimization based on CTR
              and engagement metrics.
            </p>

            <p>
              <strong>Business Impact:</strong> Positive return on ad spend and
              accelerated product-market validation.
            </p>
          </div>

          <div className="project-card-media">
            <div className="project-media-frame project-media-frame--skincare">
              <div className="project-media-window" />
              <p className="project-media-label">
                Ad creative &amp; carousel concepts
              </p>
            </div>
          </div>
        </article>

        {/* Case Study 3 */}
        <article className="project-card">
          <div className="project-card-content">
            <h3>TikTok Community Acceleration Campaign</h3>

            <div className="growth-highlight">
              0 → 10K Followers · 250K+ Viral Video · Gen Z Audience Penetration
            </div>

            <p>
              <strong>Objective:</strong> Increase brand visibility among younger
              demographic segments.
            </p>

            <p>
              <strong>Strategy:</strong> Trend-aligned short-form content paired
              with micro-influencer collaboration.
            </p>

            <p>
              <strong>Execution:</strong> 4 optimized posts weekly, trend
              analysis, retention-focused hooks, and engagement triggers.
            </p>

            <p>
              <strong>Business Impact:</strong> Rapid brand awareness expansion
              and accelerated audience acquisition.
            </p>
          </div>

          <div className="project-card-media">
            <div className="project-media-frame project-media-frame--tiktok">
              <div className="project-media-window" />
              <p className="project-media-label">
                TikTok feed &amp; viral content preview
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Testimonials */}
      <div className="growth-proof">
        <h3>Client Feedback</h3>
        <blockquote>
          “Engagement more than doubled within 90 days. Clear strategy,
          structured execution, and measurable results.”  
        </blockquote>
        <blockquote>
          “Professional, analytical, and focused on performance — not just
          posting content.”
        </blockquote>
      </div>

      {/* Conversion Trigger */}
      <div className="growth-cta">
        <h3>Looking to drive measurable growth?</h3>
        <p>
          I collaborate with brands and teams seeking structured content systems,
          stronger engagement, and performance-focused execution.
        </p>
        <a href="#contact" className="btn btn--primary">
          Let’s Build Your Growth System
        </a>
      </div>
    </section>
  );
}

export default Projects;