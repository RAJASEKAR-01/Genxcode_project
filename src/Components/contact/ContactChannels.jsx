import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import "../../Styles/contact.css";

const channels = [
  {
    title: "Email Us",
    value: "genxcodebusiness@gmail.com",
    hint: "Best for detailed discussions",
    icon: <Mail size={28} />,
    link: "mailto:genxcodebusiness@gmail.com",
    color: "email",
  },
  {
    title: "WhatsApp",
    value: "+91 9087435689",
    hint: "Fastest response",
    icon: <MessageCircle size={28} />,
    link: "https://wa.me/919087435689",
    color: "whatsapp",
    featured: true,
  },
  {
    title: "Call Us",
    value: "+91 9087435689",
    hint: "Business hours only",
    icon: <Phone size={28} />,
    link: "tel:+919087435689",
    color: "call",
  },
];

const ContactChannels = () => {
  return (
    <section className="contact-channels">
      {channels.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={`channel-card ${item.color} ${
            item.featured ? "featured" : ""
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45, delay: index * 0.12 }}
          viewport={{ once: true }}
        >
          <div className="icon-box">{item.icon}</div>

          <h3>{item.title}</h3>
          <p className="value">{item.value}</p>
          <span>{item.hint}</span>

          <div className="action-btn">
            Contact Now →
          </div>
        </motion.a>
      ))}
    </section>
  );
};

export default ContactChannels;
