import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-badge">🚀 Web Development Agency</span>

          <h1>
            We build <span>modern websites</span> that grow your business
          </h1>

          <p>
            GENXCODE helps startups and local businesses create fast, elegant,
            and conversion-focused websites using modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn primary">Get Free Quote</a>
            <a href="https://wa.me/919677978876" className="btn secondary">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://illustrations.popsy.co/white/web-design.svg"
            alt="Web Development"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
