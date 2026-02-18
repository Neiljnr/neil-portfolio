import { useState } from "react";
import { useRevealOnScroll } from "../useRevealOnScroll";

function Pricing() {
  const { ref, visible } = useRevealOnScroll();
  const [billing, setBilling] = useState("monthly");

  const isYearly = billing === "yearly";

  const plans = [
    {
      name: "Starter",
      description: "For early-stage creators and small teams validating ideas.",
      monthlyPrice: 250,
      yearlyPrice: 250 * 12 * 0.65,
      features: [
        "Channel audit & positioning recommendations",
        "Foundational content calendar (4 weeks)",
        "Baseline analytics dashboard template",
        "Light async check-ins via email",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      description:
        "For brands ready to scale consistent content, campaigns, and community.",
      monthlyPrice: 600,
      yearlyPrice: 600 * 12 * 0.65,
      features: [
        "End-to-end social & content strategy",
        "Campaign planning & execution support",
        "Analytics review & optimization loops",
        "Weekly async support & check-ins",
      ],
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Partner",
      description:
        "For teams that want an embedded partner focused on long-term growth.",
      monthlyPrice: 1200,
      yearlyPrice: 1200 * 12 * 0.65,
      features: [
        "Embedded strategic partnership (fractional)",
        "Launch & growth campaigns across channels",
        "Custom reporting & experimentation roadmap",
        "Priority async support & working sessions",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      className={`pricing section reveal ${
        visible ? "reveal--visible" : ""
      }`}
      id="pricing"
      ref={ref}
    >
      <div className="section-header">
        <p className="section-eyebrow">Pricing</p>
        <h2>Choose the partnership that fits you</h2>
        <p className="section-intro">
          Flexible, transparent pricing designed for brands at different growth
          stages—from early validation to ongoing, long-term execution.
        </p>
      </div>

      <div className="pricing-toggle">
        <button
          type="button"
          className={`pricing-toggle-option ${
            billing === "monthly" ? "pricing-toggle-option--active" : ""
          }`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`pricing-toggle-option ${
            billing === "yearly" ? "pricing-toggle-option--active" : ""
          }`}
          onClick={() => setBilling("yearly")}
        >
          Yearly
          <span className="pricing-toggle-discount">Save 35%</span>
        </button>
      </div>

      <p className="pricing-note">
        {isYearly
          ? "Yearly pricing shown — billed annually with preferred partner rates."
          : "Monthly pricing shown — ideal for first projects and shorter engagements."}
      </p>

      <div className="pricing-grid">
        {plans.map((plan) => {
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          const priceLabel = isYearly ? "per year" : "per month";

          return (
            <article
              key={plan.name}
              className={`pricing-card ${
                plan.highlight ? "pricing-card--highlighted" : ""
              }`}
            >
              {plan.badge ? (
                <span className="pricing-badge">{plan.badge}</span>
              ) : null}
              <h3>{plan.name}</h3>
              <p className="pricing-description">{plan.description}</p>
              <p className="pricing-price">
                <span className="pricing-price-value">
                  ${Math.round(price).toLocaleString()}
                </span>
                <span className="pricing-price-cycle">{priceLabel}</span>
              </p>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn--primary pricing-cta">
                Discuss this plan
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;

