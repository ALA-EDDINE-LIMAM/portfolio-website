import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/common/AnimatedBackground';
import MyPhoto from '../components/images/MyPhoto.png';
import './AboutPage.css';
import robotic from '../components/images/robo.jpg';
import iot from '../components/images/iot.jpg';
import inov from '../components/images/inov.avif'; 
import teach from '../components/images/teaching.jpg';
import se from '../components/images/se.jpg';
import comp from '../components/images/cert.png';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <AnimatedBackground />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-tag">About Me</span>
          <h1>Who I Am</h1>
          <p>Discover my journey, skills, and passion for technology.</p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Photo Section */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <motion.div 
                className="about-ring about-ring-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="about-ring about-ring-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="about-glow"></div>
              <div className="about-photo-container">
                <img src={MyPhoto} alt="Ala Eddine Limam" className="about-photo" />
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ala Eddine Limam</h2>
            <p className="about-title">Industrial Informatics Engineer</p>
            
            <p className="about-description">
              I'm a passionate engineer from Tunisia with a deep love for robotics, 
              embedded systems, and IoT development. Currently pursuing my degree at 
              ENET'Com Sfax, I focus on creating innovative solutions that bridge 
              hardware and software.
            </p>
            
            <p className="about-description">
              With experience in training over 50 students and completing 25+ projects, 
              I thrive on sharing knowledge and building systems that make a real impact.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Sfax, Tunisia</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <span className="detail-label">Education</span>
                  <span className="detail-value">ENET'Com Sfax</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div>
                  <span className="detail-label">Specialization</span>
                  <span className="detail-value">Industrial Informatics</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">alaalimam07@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <a 
                href="/src/assets/documents/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Passions</span>
            <h2>What Drives Me</h2>
          </motion.div>

          <div className="interests-grid">
            {[
              { Image: robotic , title: 'Robotics', desc: 'Building autonomous systems and robots' },
              { Image: se, title: 'Embedded Systems', desc: 'Programming microcontrollers and hardware' },
              { Image: iot, title: 'IoT', desc: 'Connecting devices to the cloud' },
              { Image: teach, title: 'Teaching', desc: 'Sharing knowledge with students' },
              { Image: inov, title: 'Innovation', desc: 'Creating solutions for real problems' },
              { Image: comp, title: 'Competitions', desc: 'Participating in tech challenges' },
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                className="interest-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <img src={interest.Image} alt={interest.title} className="interest-icon" />
                <h3>{interest.title}</h3>
                <p>{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Let's Build Something Amazing</h2>
          <p>Interested in working together? I'd love to hear from you.</p>
          <Link to="/contact" className="btn btn-white">Contact Me</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;