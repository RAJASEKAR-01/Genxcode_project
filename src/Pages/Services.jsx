import "./Services.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../Utils/motion";

const Services = () => {
  return (
    <motion.section
      className="services-section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div className="services-header" variants={fadeUp}>
        <h1>
          Our <span>Services</span>
        </h1>
        <p>Modern web solutions crafted for growing businesses</p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="services-cards"
        variants={staggerContainer}
      >
        <motion.div className="service-box" variants={scaleIn}>
          <h3>Starter Website</h3>
          <p className="price">₹4,999</p>
          <ul>
            <li>Responsive Design</li>
            <li>1–3 Pages</li>
            <li>Contact Form</li>
            <li>Basic SEO</li>
          </ul>
          <button>Get Started</button>
        </motion.div>

        <motion.div className="service-box featured" variants={scaleIn}>
          <span className="tag">Most Popular</span>
          <h3>Business Website</h3>
          <p className="price">₹9,999</p>
          <ul>
            <li>5–7 Pages</li>
            <li>Premium UI Design</li>
            <li>WhatsApp Integration</li>
            <li>SEO Optimized</li>
          </ul>
          <button>Get Started</button>
        </motion.div>

        <motion.div className="service-box" variants={scaleIn}>
          <h3>E-Commerce</h3>
          <p className="price">₹19,999</p>
          <ul>
            <li>Product Management</li>
            <li>Cart & Checkout</li>
            <li>Payment Gateway</li>
            <li>Admin Dashboard</li>
          </ul>
          <button>Get Started</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
