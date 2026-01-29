import "./Services.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../Utils/motion";

const services = [
  {
    title: "Starter Website",
    price: "₹4,999",
    features: ["Responsive Design", "1–3 Pages", "Contact Form", "Basic SEO"],
  },
  {
    title: "Business Website",
    price: "₹9,999",
    tag: "Most Popular",
    featured: true,
    features: [
      "5–7 Pages",
      "Premium UI Design",
      "WhatsApp Integration",
      "SEO Optimized",
    ],
  },
  {
    title: "E-Commerce Store",
    price: "₹19,999",
    features: [
      "Product Management",
      "Cart & Checkout",
      "Payment Gateway",
      "Admin Dashboard",
    ],
  },
  {
    title: "Landing Page",
    price: "₹3,999",
    features: [
      "High Conversion Design",
      "Fast Load Speed",
      "Lead Capture Form",
      "Ad Ready",
    ],
  },
  {
    title: "UI / UX Design",
    price: "Custom",
    features: [
      "Figma Design",
      "User-Centric Layout",
      "Modern Components",
      "Mobile First",
    ],
  },
  {
    title: "Web App Development",
    price: "Custom",
    features: [
      "React / MERN Stack",
      "Authentication",
      "Dashboard Panels",
      "API Integration",
    ],
  },
  {
    title: "SEO & Automation",
    price: "₹2,500 – ₹6,000",
    features: [
      "Google SEO Setup",
      "Search Console",
      "Automation Tools",
      "Performance Optimization",
    ],
    featured: true,
    tag: "High Demand",
  },
  {
    title: "Graphic Design",
    price: "Custom Pricing",
    features: [
      "Social Media Creatives",
      "Brand Posters",
      "UI Graphics",
      "Marketing Designs",
    ],
  },
  {
    title: "Website Maintenance & Support",
    price: "Monthly Plans",
    features: [
      "Bug Fixes",
      "Content Updates",
      "Security Monitoring",
      "Performance Checks",
    ],
  },
  {
    title: "Web Hosting & Domain Services",
    price: "Yearly Plans",
    features: [
      "Domain Registration",
      "Fast Hosting",
      "SSL Certificate",
      "Email Setup",
    ],
  },
];

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
        <p>Modern digital solutions crafted to grow your business</p>
      </motion.div>

      {/* Cards */}
      <motion.div className="services-cards" variants={staggerContainer}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`service-box ${service.featured ? "featured" : ""}`}
            variants={scaleIn}
          >
            {service.tag && <span className="tag">{service.tag}</span>}
            <h3>{service.title}</h3>
            <p className="price">{service.price}</p>

            <ul>
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button>Get Started</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
