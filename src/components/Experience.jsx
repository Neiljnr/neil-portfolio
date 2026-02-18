import { useRevealOnScroll } from "../useRevealOnScroll";

function Experience() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
      id="experience"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">Experience</p>
        <h2>Where I&apos;ve been contributing</h2>
        <p className="section-intro">
          Roles focused on social media strategy, community growth, and
          performance-driven content across tech, education, and creator-led
          brands.
        </p>
      </div>

      <div className="experience-grid">
        <article className="experience-card">
          <p className="experience-meta">
            <span className="experience-role">
              Social Media &amp; Community Manager
            </span>
            <span className="experience-company">NatureHub · Remote</span>
            <span className="experience-date">Oct 2023</span>
          </p>
          <ul className="experience-list">
            <li>
              Increased Instagram engagement by 42% and Facebook interaction by
              35% through data-informed content strategy.
            </li>
            <li>
              Planned and executed monthly content calendars across Instagram,
              Facebook, LinkedIn, and X.
            </li>
            <li>
              Tracked performance with Meta Business Suite and Google Analytics
              to optimize formats and posting times.
            </li>
          </ul>
        </article>

        <article className="experience-card">
          <p className="experience-meta">
            <span className="experience-role">Community Manager</span>
            <span className="experience-company">
              Bluehouse Technologies · Remote
            </span>
            <span className="experience-date">Jan 2025</span>
          </p>
          <ul className="experience-list">
            <li>
              Managed a tech-focused online community with interactive campaigns,
              prompts, and discussions that kept members engaged.
            </li>
            <li>
              Collaborated with designers and developers to align content,
              product updates, and community messaging.
            </li>
            <li>
              Used member feedback and insights to refine communication strategy
              and overall community experience.
            </li>
          </ul>
        </article>

        <article className="experience-card">
          <p className="experience-meta">
            <span className="experience-role">
              Community Success Manager (Part-Time)
            </span>
            <span className="experience-company">
              Innovate with Folashayo · Remote
            </span>
            <span className="experience-date">Nov 2024</span>
          </p>
          <ul className="experience-list">
            <li>
              Managed a learning-focused community, keeping participation high
              through clear, personality-driven communication.
            </li>
            <li>
              Designed engagement frameworks that encouraged peer-to-peer
              support around programs and live sessions.
            </li>
            <li>
              Supported launches and events with coordinated announcements and
              reminders across channels.
            </li>
          </ul>
        </article>

        <article className="experience-card">
          <p className="experience-meta">
            <span className="experience-role">
              Google Developer Student Club Lead
            </span>
            <span className="experience-company">Google · Keffi</span>
            <span className="experience-date">Aug 2022 – Nov 2023</span>
          </p>
          <ul className="experience-list">
            <li>
              Led a student tech community, organizing workshops, training
              sessions, and events.
            </li>
            <li>
              Grew membership by 60% through consistent outreach and event
              promotion.
            </li>
            <li>
              Coordinated speakers and creatives to deliver smooth experiences
              before, during, and after events.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;

