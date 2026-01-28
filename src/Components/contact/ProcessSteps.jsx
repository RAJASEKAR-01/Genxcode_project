import { motion } from "framer-motion";
import "../../Styles/contact.css";

const steps = [
  { step: "01", title: "Understand", desc: "We understand your business goals" },
  { step: "02", title: "Plan", desc: "We design the right solution" },
  { step: "03", title: "Build", desc: "We develop with modern tech" },
  { step: "04", title: "Launch", desc: "We test, deploy, and support" },
];

const ProcessSteps = () => {
  return (
    <section className="process-steps">
      {steps.map((item, index) => (
        <motion.div
          key={index}
          className="step-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <span>{item.step}</span>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default ProcessSteps;
