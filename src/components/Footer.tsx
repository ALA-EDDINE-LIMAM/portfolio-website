import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Alaa Eddine Limem</h3>
            <p>Industrial Informatics Engineer & Embedded Systems Enthusiast</p>
          </div>
          
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-social">
            <a href="" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/alaa-limam-777937242/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:alaalimam07@gmail.com">Email</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Alaa Eddine Limam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;