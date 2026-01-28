import { motion } from "framer-motion";
import "../../Styles/contact.css";

const channels = [
  {
    title: "Email Us",
    value: "genxcodebusiness@gmail.com",
    hint: "Best for detailed discussions",
    color: "email",
  },
  {
    title: "WhatsApp",
    value: "+91 9087435689",
    hint: "Fastest response",
    color: "whatsapp",
    featured: true,
  },
  {
    title: "Call Us",
    value: "+91 9087435689",
    hint: "Business hours only",
    color: "call",
  },
];

const ContactChannels = () => {
  return (
    <section className="contact-channels">
      {channels.map((item, index) => (
        <motion.div
          key={index}
          className={`channel-card ${item.color} ${item.featured ? "featured" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>{item.title}</h3>
          <p className="value">{item.value}</p>
          <span>{item.hint}</span>
        </motion.div>
      ))}
    </section>
  );
};

export default ContactChannels;
