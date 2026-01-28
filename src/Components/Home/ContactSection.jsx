import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_831sttf",       // Your Service ID
        "template_v1z9eb2",      // Your Template ID
        form.current,             // ✅ Must pass your form reference
        { publicKey: "4pl7e5RawQmYJTs4y" } // Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-info">
          <span className="section-tag">Get in Touch</span>
          <h2>Let’s build something great together</h2>
          <p>
            Tell us about your project and we’ll get back to you with the best
            solution for your business.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Email Address" required />
          <input type="text" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Tell us about your project" rows="4" />
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
