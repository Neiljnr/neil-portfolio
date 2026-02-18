import { useRevealOnScroll } from "../useRevealOnScroll";

function Contact() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      className={`contact reveal ${visible ? "reveal--visible" : ""}`}
      id="contact"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">Contact</p>
        <h2>Let&apos;s build something</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-meta">
            <strong>Email</strong>
            <br />
            <a href="mailto:othnieljhon@gmail.com">
              othnieljhon@gmail.com
            </a>
          </p>
          <p className="contact-meta">
            Share as much context as you like—what you&apos;re building, where
            you&apos;re stuck, and what would feel like a win.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="contact-form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Othniel John" />
          </div>
          <div className="contact-form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@example.com"
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="message">Project or idea</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about what you’re building and how I can help."
            />
          </div>
          <button type="submit" className="btn btn--primary contact-submit">
            Send message (placeholder)
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
