import { useRevealOnScroll } from "../useRevealOnScroll";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const { ref, visible } = useRevealOnScroll();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const emailConfig = useMemo(() => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    return {
      serviceId,
      templateId,
      publicKey,
      isConfigured: Boolean(serviceId && templateId && publicKey),
    };
  }, []);

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
          onSubmit={async (event) => {
            event.preventDefault();
            setStatus({ type: "idle", message: "" });

            const form = event.currentTarget;
            const formData = new FormData(form);
            const name = String(formData.get("name") ?? "").trim();
            const fromEmail = String(formData.get("email") ?? "").trim();
            const message = String(formData.get("message") ?? "").trim();

            if (!fromEmail || !message) {
              setStatus({
                type: "error",
                message: "Please add your email and a message.",
              });
              return;
            }

            if (!emailConfig.isConfigured) {
              setStatus({
                type: "error",
                message:
                  "Email sending is not configured yet. For now, please email me directly using the address on the left.",
              });
              return;
            }

            setIsSending(true);
            try {
              await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                {
                  from_name: name || "Website visitor",
                  from_email: fromEmail,
                  message,
                },
                { publicKey: emailConfig.publicKey }
              );

              form.reset();
              setStatus({
                type: "success",
                message: "Message sent. I’ll reply as soon as possible.",
              });
            } catch {
              setStatus({
                type: "error",
                message:
                  "Sorry — something went wrong sending your message. Please email me directly using the address on the left.",
              });
            } finally {
              setIsSending(false);
            }
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
              required
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="message">Project or idea</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about what you’re building and how I can help."
              required
            />
          </div>
          {status.type !== "idle" ? (
            <p
              className="contact-meta"
              role={status.type === "error" ? "alert" : "status"}
              style={{
                marginBottom: 0,
                color:
                  status.type === "success" ? "rgba(187, 247, 208, 0.95)" : undefined,
              }}
            >
              {status.message}
            </p>
          ) : null}
          <button type="submit" className="btn btn--primary contact-submit">
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
