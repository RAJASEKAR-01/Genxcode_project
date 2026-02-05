import techStackData from "../../Data/techStackData";
import "./TechStack.css";

const TechStack = () => {
  return (
    <section className="tech">
      <div className="tech-container">

        <div className="tech-header">
          <span className="section-tag">Tech Stack</span>
          <h2>Technologies we work with</h2>
          <p>
            We use modern, reliable, and industry-proven technologies to build
            high-quality digital products.
          </p>
        </div>

        <div className="tech-grid">
          {techStackData.map((tech, index) => (
            <div className="tech-card" key={index}>
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
