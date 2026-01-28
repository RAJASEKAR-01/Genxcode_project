import { motion } from "framer-motion";
import "../../Styles/contact.css";

const ContactHero = () => {
  return (
    <section className="contact-hero-alt">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Let’s Talk <span>Business</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have a project idea or need a digital upgrade?  
        Reach out — we respond fast.
      </motion.p>
    </section>
  );
};

export default ContactHero;
