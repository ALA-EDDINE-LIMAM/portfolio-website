import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './ProjectsPage.css';

// Import available project images
import ImprimerieImage from '../components/images/imprimerieWebsite.png';
import PfeImage from '../components/images/pfeProject.png';
import PfaImage from '../components/images/SmartFactory.png';
import levelmage from '../components/images/levelSensor.png';
import gymweb from '../components/images/gymWeb.png';
import deeplearning from '../components/images/deeplearning.png';
import chessCv from '../components/images/perfect_read.png';
import rpiIot from '../components/images/rpi_iot.png';
import portfolio from '../components/images/portfolio.png';
import ps3 from '../components/images/ps3tt.png';
import edurobot from '../components/images/ROBI.png';
import parking from '../components/images/SPS.png';
import esp32 from '../components/images/SHome.png';
import ai from '../components/images/ai.png';
import stm from '../components/images/stm32.jpg';


// Ajoute les autres imports quand tu auras les images

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: "imprimerie",
      title: "Imprimerie Website with Chatbot",
      description: "Complete printing services website with product catalog, online ordering, admin dashboard, and integrated chatbot for customer support.",
      image: ImprimerieImage,
      technologies: ["React", "Node.js", "Firebase", "Chatbot", "SQL"],
      category: "Web",
      featured: true,
      status: "In Progress",
      year: "2025",
      github: "",
      demo: "",
      highlights: [
        "Printing services catalog",
        "Online ordering",
        "Integrated chatbot",
        "Admin dashboard"
      ]
    },
    {
      id: "deep-learning",
      title: "Deep Learning Models",
      description: "Training CNNs on image datasets using TensorFlow/PyTorch, preparing models for real robotics applications.",
      image: deeplearning,
      technologies: ["Python", "TensorFlow", "PyTorch", "CNN", "Image Classification"],
      category: "AI/ML",
      featured: false,
      status: "In Progress",
      year: "2025",
      github: "",
      demo: "",
      highlights: [
        "CNN training on image datasets",
        "TensorFlow/PyTorch implementation",
        "Robotics integration"
      ]
    },
    {
      id: "solar-cleaning-robot",
      title: "Solar Panel Cleaning Robot (PFE)",
      description: "Fully autonomous robot for industrial solar panel cleaning. Features intelligent movement patterns, motor drivers, sensors, and complete mechanical + electronic + software integration.",
      image: PfeImage,
      technologies: [ "Sensors", "C/C++", "PCB Design", "3D Printing", "MQTT", "PWM"],
      category: "Robotics",
      featured: true,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "Fully autonomous operation",
        "Intelligent movement pattern",
        "Industrial-grade design",
        "Full mechanical + electronic integration"
      ]
    },
    {
      id: "chess-cv",
      title: "Computer Vision for Chess Robot",
      description: "CNN-based image processing system for chess board detection, move classification, mistake recognition, and automated feedback.",
      image: chessCv,
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Deep Learning"],
      category: "AI/ML",
      featured: true,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "CNN-based image processing",
        "Board detection + move classification",
        "Mistake recognition",
        "Automated feedback system"
      ]
    },
    {
      id: "smart-factory",
      title: "Smart Factory - Stage PFA",
      description: "Intelligent factory system with robotic manipulator arm, advanced image processing using ESP32, and real-time web-based supervision and control.",
      image: PfaImage,
      technologies: ["ESP32", "Image Processing", "React.js", "Node.js", "Firebase", "Robotics"],
      category: "Robotics",
      featured: true,
      status: "Completed",
      year: "2025",
      github: "",
      demo: "",
      highlights: [
        "Robotic manipulator arm (bras manipulateur)",
        "Advanced image processing with ESP32",
        "Web supervision app (React.js + Node.js + Firebase)"
      ]
    },
    {
      id: "educational-robot",
      title: "Educational Robot",
      description: "Robot designed for workshops and teaching with easy-to-use interface. Introduces students to robotics concepts through hands-on learning.",
      image: edurobot,
      technologies: ["Arduino", "C++", "Sensors", "3D Printing", "Educational"],
      category: "Robotics",
      featured: true,
      status: "Completed",
      year: "2023",
      github: "",
      demo: "",
      highlights: [
        "Workshop-ready design",
        "Easy-to-use interface",
        "Educational curriculum included",
        "4th Place - TSYP Education Challenge"
      ]
    },
    {
      id: "all-terrain-robot",
      title: "All-Terrain Robot (PS3 Controller)",
      description: "Rugged all-terrain robot with wireless PS3 controller control. Designed for outdoor movement, competitions, and mobility tasks.",
      image: ps3,
      technologies: ["Arduino", "PS3 Controller", "Motor Drivers", "Wireless", "C++"],
      category: "Robotics",
      featured: false,
      status: "Completed",
      year: "2023",
      github: "",
      demo: "",
      highlights: [
        "Rugged outdoor design",
        "Wireless PS3 control",
        "Competition-ready"
      ]
    },
    {
      id: "smart-parking",
      title: "Smart Parking System",
      description: "IoT-based smart parking solution with vehicle detection, real-time monitoring dashboard, and embedded + web integration.",
      image: parking,
      technologies: ["ESP32", "IoT", "Sensors", "MQTT"],
      category: "IoT",
      featured: false,
      status: "Completed",
      year: "2023",
      github: "",
      demo: "",
      highlights: [
        "Vehicle detection system",
        "IoT communication",
        "Real-time monitoring dashboard"
      ]
    },
    {
      id: "smart-home",
      title: "Smart Home System",
      description: "Complete IoT-based home automation system with multi-sensor integration and remote control via mobile/web app.",
      image: esp32,
      technologies: ["ESP32", "MQTT", "React Native", "Firebase", "Node-RED", "Sensors"],
      category: "IoT",
      featured: false,
      status: "Completed",
      year: "2022",
      github: "",
      demo: "",
      highlights: [
        "Multi-sensor system",
        "Remote control via app",
        "Home automation"
      ]
    },
    {
      id: "water-level-sensor",
      title: "Water Level Sensor (Custom Hardware)",
      description: "Custom-designed and built water level sensor with embedded reading and calibration logic.",
      image: levelmage,
      technologies: ["Arduino", "PCB Design", "Sensors", "C++", "Calibration"],
      category: "IoT",
      featured: false,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "Custom hardware design",
        "Embedded calibration logic",
        "Accurate level detection"
      ]
    },
    {
      id: "iot-raspberry-pi",
      title: "IoT System with Raspberry Pi + Mobile App",
      description: "Complete IoT architecture with Python backend, real-time data transfer, and control interface via mobile application.",
      image: rpiIot,
      technologies: ["Raspberry Pi", "Python", "Mobile App", "IoT", "Real-time"],
      category: "IoT",
      featured: false,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "Python backend",
        "Real-time data transfer",
        "Full IoT architecture"
      ]
    },
    {
      id: "rpi-camera",
      title: "Raspberry Pi Camera Detection",
      description: "Image capturing and basic image processing with real-time control based on camera data.",
      image: chessCv,
      technologies: ["Raspberry Pi", "Python", "OpenCV", "Camera", "Image Processing"],
      category: "IoT",
      featured: false,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "Image capturing",
        "Basic image processing",
        "Real-time control"
      ]
    },
    {
      id: "rpi-automation",
      title: "Automation & Control with Raspberry Pi",
      description: "Smart environment monitoring and lightweight automation systems using Raspberry Pi.",
      image: rpiIot,
      technologies: ["Raspberry Pi", "Python", "GPIO", "Sensors", "Automation"],
      category: "IoT",
      featured: false,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "Environment monitoring",
        "Lightweight automation",
        "GPIO control"
      ]
    },
    {
      id: "gym-website",
      title: "Gym Web Page",
      description: "Fitness website featuring programs, trainer profiles, membership plans with clean and responsive React UI.",
      image: gymweb,
      technologies: ["React", "CSS3", "Responsive Design", "UI/UX"],
      category: "Web",
      featured: true,
      status: "Completed",
      year: "2025",
      github: "",
      demo: "",
      highlights: [
        "Fitness programs",
        "Trainer profiles",
        "Membership plans"
      ]
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      description: "Fully custom React portfolio with organized sections for skills, achievements, and projects.",
      image: portfolio,
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3"],
      category: "Web",
      featured: false,
      status: "In Progress",
      year: "2025",
      github: "",
      demo: "",
      highlights: [
        "Custom React design",
        "Smooth animations",
        "Responsive layout"
      ]
    },
    {
      id: "ai-iot-analytics",
      title: "AI-assisted IoT Analytics",
      description: "Predictive algorithms for sensor data with ML-based monitoring for anomalies using Python and scientific libraries.",
      image: ai,
      technologies: ["Python", "Machine Learning", "IoT", "Data Analytics", "Predictive Modeling"],
      category: "AI/ML",
      featured: false,
      status: "Completed",
      year: "2024",
      github: "",
      demo: "",
      highlights: [
        "Predictive algorithms",
        "ML-based anomaly detection",
        "Sensor data analytics"
      ]
    },
    
    
    {
      id: "esp32-projects",
      title: "ESP32 Projects",
      description: "IoT communication, embedded control, LED dimming, motors, and LCD displays with and without I2C.",
      image: esp32,
      technologies: ["ESP32", "C/C++", "IoT", "MQTT", "I2C", "PWM"],
      category: "Embedded",
      featured: false,
      status: "Completed",
      year: "2023-2024",
      github: "",
      demo: "",
      highlights: [
        "IoT communication",
        "Embedded control",
        "Motor & LCD control"
      ]
    },
    {
      id: "stm32-projects",
      title: "STM32 Projects",
      description: "Hardware-level control with real-time tasks using RTOS (queues, mutex, pinned tasks) on STM32 microcontrollers.",
      image: stm,
      technologies: ["STM32", "C", "RTOS", "FreeRTOS", "HAL", "Embedded C"],
      category: "Embedded",
      featured: false,
      status: "Completed",
      year: "2023-2025",
      github: "",
      demo: "",
      highlights: [
        "Hardware-level control",
        "Real-time tasks",
        "RTOS implementation"
      ]
    },
  ];

  const categories = ['All', 'Robotics', 'IoT', 'Web', 'AI/ML', 'Embedded'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <AnimatedBackground />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-tag">My Work</span>
          <h1>Projects & Creations</h1>
          <p>Exploring the intersection of hardware and software</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="projects-stats">
        <div className="stats-grid">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="stat-number">25+</span>
            <span className="stat-label">Projects Completed</span>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="stat-number">6</span>
            <span className="stat-label">Categories</span>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="stat-number">2</span>
            <span className="stat-label">Competition Awards</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">⭐ Featured Projects</span>
          <h2>Highlighted Work</h2>
          <p>My most impactful and innovative projects</p>
        </motion.div>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="featured-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="featured-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="image-placeholder">
                    <span>
                      {project.category === 'Robotics' ? '🤖' : 
                       project.category === 'IoT' ? '📡' : 
                       project.category === 'AI/ML' ? '🧠' :
                       project.category === 'Embedded' ? '⚙️' : '🌐'}
                    </span>
                  </div>
                )}
                
                <div className="featured-overlay">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="featured-content">
                <div className="project-year">{project.year}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-item">✓ {highlight}</span>
                  ))}
                </div>
                
                <div className="tech-tags">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag more">+{project.technologies.length - 5}</span>
                  )}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="all-projects-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">🛠️ All Projects</span>
          <h2>Complete Portfolio</h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'Robotics' && '🤖 '}
              {category === 'IoT' && '📡 '}
              {category === 'Web' && '🌐 '}
              {category === 'AI/ML' && '🧠 '}
              {category === 'Embedded' && '⚙️ '}
              {category === 'All' && '📁 '}
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                layout
              >
                <div className="card-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-img" />
                  ) : (
                    <div className="image-placeholder">
                      <span>
                        {project.category === 'Robotics' ? '🤖' : 
                         project.category === 'IoT' ? '📡' : 
                         project.category === 'AI/ML' ? '🧠' :
                         project.category === 'Embedded' ? '⚙️' : '🌐'}
                      </span>
                    </div>
                  )}
                  
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="card-content">
                  <div className="card-meta">
                    <span className="category-tag">{project.category}</span>
                    <span className="year-tag">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Competition Awards */}
      <section className="awards-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">🏆 Competition Awards</span>
          <h2>Recognition</h2>
        </motion.div>

        <div className="awards-grid">
          <motion.div
            className="award-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="award-icon">🏅</span>
            <h3>TSYP Education Challenge</h3>
            <p>4th Place - Educational Robot</p>
            <span className="award-year">2023</span>
          </motion.div>
          <motion.div
            className="award-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="award-icon">🏅</span>
            <h3>TSYP Chess Challenge</h3>
            <p>4th Place - Chess Robot with Vision</p>
            <span className="award-year">2024</span>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Have a Project in Mind?</h2>
          <p>Let's collaborate and bring your ideas to life!</p>
          <a href="/contact" className="btn btn-primary">Get In Touch</a>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;