import { motion } from "framer-motion";
import "../../Styles/contact.css";

const LocationMap = () => {
  return (
    <section className="location-section">
      <motion.div
        className="location-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          Visit <span>Our Office</span>
        </h2>
        <p>
          We’re always happy to meet clients in person.  
          Reach out before visiting to schedule a meeting.
        </p>
      </motion.div>

      <motion.div
        className="map-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <iframe
          title="GenXcode Location"
          src="https://www.google.com/maps?q=Tiruppur,+Tamil+Nadu&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default LocationMap;
