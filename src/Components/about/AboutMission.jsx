import { motion } from "framer-motion";
import "../../Styles/about.css";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Our Mission</h2>
        <p>
          At GENXCODE, our mission is to empower businesses with
          high-quality websites, intuitive UI/UX, and scalable web
          applications that convert ideas into impact.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMission;
