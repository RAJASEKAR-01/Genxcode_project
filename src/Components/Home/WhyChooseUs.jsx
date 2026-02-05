import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <div className="why-container">

        <div className="why-header">
          <span className="section-tag">Why GENXCODE</span>
          <h2>Built for modern businesses</h2>
          <p>
            We focus on quality, clarity, and long-term value — not just
            delivering websites, but building digital foundations.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <h3>Modern Tech Stack</h3>
            <p>
              We use the latest tools and frameworks to ensure fast,
              scalable, and future-proof websites.
            </p>
          </div>

          <div className="why-card">
            <h3>Business-First Approach</h3>
            <p>
              Our designs focus on conversion, user experience, and real
              business goals — not just visuals.
            </p>
          </div>

          <div className="why-card">
            <h3>Transparent Pricing</h3>
            <p>
              Clear communication, no hidden costs, and honest timelines.
              What we promise is what we deliver.
            </p>
          </div>

          <div className="why-card">
            <h3>Dedicated Support</h3>
            <p>
              We support you even after launch — updates, fixes, and guidance
              whenever you need it.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
