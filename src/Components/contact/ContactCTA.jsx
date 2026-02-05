import { NavLink } from "react-router-dom";
import "../../Styles/contact.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta-alt">
      <h2>Ready to Start?</h2>
      <p>Send us your project details and we’ll take it forward.</p>
      <NavLink to="/#contact" className="cta-btn">
        Start Your Project
      </NavLink>
    </section>
  );
};

export default ContactCTA;
