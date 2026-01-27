import servicesData from "../../Data/servicesData";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">

        <div className="services-header">
          <span className="section-tag">Our Services</span>
          <h2>What we can do for your business</h2>
          <p>
            We provide end-to-end web solutions tailored to help businesses
            grow in the digital space.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
