import { motion } from "framer-motion";
import "../../Styles/about.css";

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "10+", label: "Happy Clients" },
  { number: "100%", label: "Client Satisfaction" },
];

const AboutStats = () => {
  return (
    <section className="about-stats">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="stat-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default AboutStats;
