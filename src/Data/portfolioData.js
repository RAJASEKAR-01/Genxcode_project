import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const portfolioData = [
  {
    id: 1,
    title: "Ecommerce Website",
    category: "Web",
    tech: ["React", "Node.js", "MongoDB"],
    image: project1,
    link: "https://ecommerce-new-demo.vercel.app" // live demo link
  },
  {
    id: 2,
    title: "Business Landing Page",
    category: "UI",
    tech: ["HTML", "CSS", "Framer Motion"],
    image: project2,
    link: "https://genxcode-project.vercel.app/"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web",
    tech: ["React", "Tailwind CSS"],
    image: project3,
    link: "https://personal-portfolio-raja.vercel.app"
  }
];

export default portfolioData;
