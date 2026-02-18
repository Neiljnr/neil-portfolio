import { useRevealOnScroll } from "../useRevealOnScroll";

function About() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
      id="about"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">About</p>
        <h2>Who I am</h2>
      </div>
      <p>
        I’m a Community & Social Media Manager with over three years of experience 
        building and scaling online communities across Instagram, LinkedIn, X, 
        and Facebook. I focus on structured content execution, audience growth, 
        and performance-driven engagement strategies.
      </p>
      <p>
        My work centers on creating systems that drive consistency and measurable 
        results — from content calendars and campaign rollouts to community 
        engagement frameworks and analytics optimization. I blend creativity 
        with data to help brands grow loyal, active audiences.
      </p>
      <ul className="about-tags">
        <li>Content strategy &amp; scheduling systems</li>
        <li>Community engagement &amp; retention</li>
        <li>Campaign planning &amp; performance tracking</li>
        <li>Analytics-driven growth optimization</li>
      </ul>
    </section>
  );
}

export default About;