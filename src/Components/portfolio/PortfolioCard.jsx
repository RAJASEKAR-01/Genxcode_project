import "./PortfolioCard.css";

const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolio-card">
      <img src={project.image} alt={project.title} />
      <div className="portfolio-info">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <div className="tech-stack">
          {project.tech.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-btn"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
