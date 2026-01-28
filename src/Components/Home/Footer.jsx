import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>GENXCODE</h2>
          <p>
            We build modern, scalable, and business-focused web solutions
            that help companies grow in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Website Development</li>
            <li>Web Applications</li>
            <li>Ecommerce Solutions</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: genxcodebusiness@gmail.com</p>
          <p>Phone: +91 9087435689</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GENXCODE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
