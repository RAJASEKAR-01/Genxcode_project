import PortfolioCard from "./PortfolioCard";
import portfolioData from "../../Data/portfolioData";
import "./PortfolioGrid.css";

const PortfolioGrid = () => {
  return (
    <section className="portfolio-grid">
      <div className="grid-container">
        {portfolioData.map(project => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
