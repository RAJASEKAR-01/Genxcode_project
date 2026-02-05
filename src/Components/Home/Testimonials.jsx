import testimonialsData from "../../Data/testimonialsData";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <span className="section-tag">Testimonials</span>
          <h2>What our clients say</h2>
          <p>
            We believe in building long-term partnerships by delivering
            quality and reliability.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="message">“{item.message}”</p>
              <div className="client-info">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
