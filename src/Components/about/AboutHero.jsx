import { motion } from "framer-motion";
import "../../Styles/about.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span>GENXCODE</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We build modern, scalable, and business-ready digital solutions for
        startups and growing brands.
      </motion.p>
    </section>
  );
};

export default AboutHero;
