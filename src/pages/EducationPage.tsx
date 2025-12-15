import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './EducationPage.css';

const EducationPage: React.FC = () => {
  const academicBackground = [
    {
      id: 1,
      degree: "Mastère Professionnel",
      field: "Informatique Industrielle",
      school: "ENET'Com",
      location: "Sfax, Tunisia",
      status: "current",
      period: "2024 - Present",
      icon: "🎓",
      current: true,
      description: "Professional Master's degree specializing in industrial computing, focusing on advanced technologies for automation and intelligent systems.",
      courses: ["Image Processing", "Real-Time Systems", "Sensors", "Robotics", "Machine Learning", "AI"],
      color: "#667eea"
    },
    {
      id: 2,
      degree: "Licence en Électronique, Électrotechnique et Automatique",
      field: "Automatisme et Informatique Industrielle",
      school: "ISSAT Mateur",
      location: "Mateur, Tunisia",
      status: "completed",
      period: "2021 - 2024",
      icon: "📜",
      current: false,
      description: "Bachelor's degree in Electronics, Electrical Engineering and Automation with specialization in Industrial Automation and Computing.",
      courses: ["Java", "Python", "C/C++", "Real-Time Systems", "Sensors", "MATLAB", "TIA Portal"],
      color: "#764ba2"
    },
    {
      id: 3,
      degree: "Baccalauréat",
      field: "Sciences Techniques",
      school: "Lycée",
      location: "Kelibia, Tunisia",
      period: "2020 - 2021",
      status: "completed",
      icon: "🏫",
      current: false,
      description: "Technical sciences track with focus on engineering fundamentals and technical skills.",
      courses: ["Mathematics", "Physics", "Technical Drawing", "Mechanics", "Electronics"],
      color: "#4facfe"
    }
  ];

  return (
    <div className="education-page">
      {/* Hero */}
      <section className="education-hero">
        <AnimatedBackground />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-tag">Academic Journey</span>
          <h1>Education & Training</h1>
          <p>My academic path in engineering and technology</p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="academic-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">🎓 Academic Background</span>
          <h2>My Educational Journey</h2>
        </motion.div>

        <div className="timeline">
          {academicBackground.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`timeline-item ${edu.status}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-marker" style={{ background: edu.color }}>
                {edu.icon}
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-period">{edu.period}</span>
                  {edu.current && (
                    <span className="status-badge">Currently Studying</span>
                  )}
                </div>
                
                <h3>{edu.degree}</h3>
                <h4>{edu.field}</h4>
                <p className="school">🏛️ {edu.school}</p>
                <p className="location">📍 {edu.location}</p>
                <p className="description">{edu.description}</p>
                
                <div className="courses">
                  <h5>Key Courses & Skills:</h5>
                  <div className="course-tags">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="languages-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">🌍 Languages</span>
          <h2>Language Proficiency</h2>
        </motion.div>

        <div className="languages-grid">
          {[
            { flag: "🇹🇳", name: "Arabic", level: "Native", width: "100%" },
            { flag: "🇫🇷", name: "French", level: "Intermediate", width: "70%" },
            { flag: "🇬🇧", name: "English", level: "Intermediate", width: "70%" }
          ].map((lang, index) => (
            <motion.div
              key={lang.name}
              className="language-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="flag">{lang.flag}</span>
              <h4>{lang.name}</h4>
              <p>{lang.level}</p>
              <div className="proficiency-bar">
                <motion.div 
                  className="proficiency-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: lang.width }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationPage;