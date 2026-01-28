import { NavLink } from "react-router-dom";
import "../../Styles/about.css";

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <h2>Let’s Build Something Great</h2>
      <p>Have an idea? We’ll help you bring it to life.</p>
      <NavLink to="/contact" className="cta-btn">
        Contact Us
      </NavLink>
    </section>
  );
};

export default AboutCTA;
