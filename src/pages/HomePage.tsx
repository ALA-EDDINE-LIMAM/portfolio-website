import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/common/AnimatedBackground';
import MyPhoto from '../components/images/MyPhoto.png';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <AnimatedBackground />
        
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-greeting">👋 Hello, I'm</span>
            <h1>Alaa Eddine Limam</h1>
            <p className="hero-subtitle">
              Industrial Informatics Engineer & Embedded Systems Enthusiast
            </p>
            <p className="hero-description">
              Passionate about robotics, IoT, and building intelligent systems 
              that solve real-world problems.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Projects →
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
              
            </div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              {/* Rotating ring */}
              <motion.div 
                className="hero-ring hero-ring-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="hero-ring hero-ring-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glowing background */}
              <div className="hero-glow"></div>
              
              {/* Photo */}
              <div className="hero-photo-container">
                <img src={MyPhoto} alt="Ala Eddine Limam" className="hero-photo" />
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="floating-badge badge-top"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Robotics
            </motion.div>
            <motion.div 
              className="floating-badge badge-right"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
               IoT & Embedded System
            </motion.div>
            <motion.div 
              className="floating-badge badge-bottom"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
               Web Development
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {[
            { number: '25+', label: 'Projects Completed' },
            { number: '50+', label: 'Students Trained' },
            { number: '2', label: 'Awards Won' },
            { number: '5+', label: 'Workshops Delivered' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">What I Do</span>
            <h2>My Expertise</h2>
          </motion.div>

          <div className="skills-grid">
            {[
              { name: 'Embedded Systems', icon: '🔧', level: 95 },
              { name: 'Robotics', icon: '🤖', level: 90 },
              { name: 'IoT Development', icon: '🌐', level: 88 },
              { name: 'React & Web Dev', icon: '⚛️', level: 85 },
              { name: 'PCB Design', icon: '📟', level: 82 },
              { name: 'Python & C/C++', icon: '💻', level: 90 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Contact Me</Link>
            <a href="mailto:alaalimam07@gmail.com" className="btn btn-outline-white">Send Email</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;