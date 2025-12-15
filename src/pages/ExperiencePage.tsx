import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './ExperiencePage.css';

const ExperiencePage: React.FC = () => {
  const professionalJourney = [
    {
      id: 1,
      role: "Président IEEE RAS Chapter",
      company: "ISSATM SBC",
      location: "Mateur, Tunisia",
      period: "2021 - 2023",
      type: "Leadership",
      description: "Leading the IEEE Robotics and Automation Society chapter at ISSATM Student Branch. Managing chapter activities, organizing events, and promoting robotics and automation among students.",
      responsibilities: [
        "Lead and manage the IEEE RAS Chapter activities",
        "Organize technical workshops and seminars on robotics",
        "Coordinate with IEEE Tunisia Section for events",
        "Recruit and mentor new chapter members",
        "Represent the chapter at regional IEEE events"
      ],
      technologies: ["Leadership", "Event Management", "Robotics", "Networking", "Public Speaking"],
      icon: "👔",
      color: "#00629B"
    },
    {
      id: 2,
      role: "Robotics Competition Participant",
      company: "Various National Competitions",
      location: "Tunisia",
      period: "2021 - 2024",
      type: "Competition",
      description: "Active participant in multiple robotics competitions across Tunisia, designing and building autonomous robots for various challenges including line following, maze solving, and sumo robots.",
      responsibilities: [
        "Design and build competition robots",
        "Program autonomous navigation systems",
        "Collaborate with team members on strategy",
        "Debug and optimize robot performance under pressure",
        "Present technical solutions to judges"
      ],
      technologies: ["Arduino", "STM32", "C/C++", "3D Printing", "Sensor Integration", "PID Control"],
      icon: "🤖",
      color: "#667eea"
    },
    {
      id: 3,
      role: "Participant & Organizer",
      company: "INOSPEED 1 & 2, IEEEXtreme, Choufli Code 1.0, TSYP12",
      location: "Tunisia",
      period: "2022 - 2024",
      type: "Events",
      description: "Actively participated in and helped organize major tech events including INOSPEED hackathons, IEEEXtreme programming competition, Choufli Code coding challenge, and TSYP12 congress.",
      responsibilities: [
        "Organize and coordinate technical events",
        "Participate in 24-hour programming competitions",
        "Mentor participants during hackathons",
        "Handle logistics and event planning",
        "Collaborate with sponsors and partners"
      ],
      technologies: ["Event Planning", "Problem Solving", "Team Coordination", "Programming", "Time Management"],
      icon: "🎯",
      color: "#f59e0b"
    },
    {
      id: 4,
      role: "Robotics Trainer & Workshop Leader",
      company: "Robotics Clubs for ISSAT Mateur, ENET'Com & ENSIT ",
      location: "Tunis, Tunisia",
      period: "2023 - Present",
      type: "Training",
      description: "Leading robotics workshops and training sessions for engineering students. Teaching embedded systems, Arduino programming, and robot design.",
      responsibilities: [
        "Conduct hands-on robotics workshops for 50+ students",
        "Develop training curriculum for embedded systems",
        "Mentor junior members on project development",
        "Organize robotics competitions and events"
      ],
      technologies: ["Arduino", "ESP32", "C/C++", "IoT & Embedded Systems", "PCB Design"],
      icon: "📚",
      color: "#764ba2"
    },
    {
      id: 5,
      role: "Embedded Systems Developer",
      company: "Personal & Academic Projects",
      location: "Tunisia",
      period: "2022 - Present",
      type: "Development",
      description: "Designing and developing embedded systems solutions for various applications including IoT devices, automation systems, and robotics projects.",
      responsibilities: [
        "Design and develop embedded firmware",
        "Create PCB layouts using KiCad",
        "Integrate sensors and actuators",
        "Develop IoT communication protocols"
      ],
      technologies: ["STM32", "ESP32", "Raspberry Pi", "MQTT", "KiCad"],
      icon: "💻",
      color: "#4facfe"
    },
    {
      id: 6,
      role: "Web Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2023 - Present",
      type: "Freelance",
      description: "Building modern web applications using React and TypeScript. Creating responsive, user-friendly interfaces for various clients.",
      responsibilities: [
        "Develop responsive web applications",
        "Implement modern UI/UX designs",
        "Optimize application performance",
        "Deploy and maintain web projects"
      ],
      technologies: ["React", "TypeScript", "Node.js", "CSS3", "Git"],
      icon: "🌐",
      color: "#f093fb"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Président IEEE RAS Chapter",
      organization: "ISSATM SBC",
      year: "2021-2023",
      description: "Elected as President of the IEEE Robotics and Automation Society Chapter at ISSATM Student Branch.",
      icon: "🎖️",
      category: "Leadership"
    },
    {
      id: 2,
      title: "TSYP12 Congress Participant",
      organization: "IEEE Tunisia Section",
      year: "2021-2025",
      description: "Participated in the Tunisian Student & Young Professionals Congress, networking with IEEE members across Tunisia.",
      icon: "🌍",
      category: "Event"
    },
    {
      id: 3,
      title: "IEEEXtreme Programming Competition",
      organization: "IEEE",
      year: "2023",
      description: "Participated in the 24-hour global programming competition, solving algorithmic challenges with a team.",
      icon: "💻",
      category: "Competition"
    },
    {
      id: 4,
      title: "INOSPEED 1 & 2 - Organizer & Participant",
      organization: "INSAT",
      year: "2023-2024",
      description: "Contributed as both organizer and participant in INOSPEED hackathon events focused on innovation and speed.",
      icon: "⚡",
      category: "Hackathon"
    },
    {
      id: 5,
      title: "Choufli Code 1.0",
      organization: "Tunisia Tech Community",
      year: "2023",
      description: "Participated in the Choufli Code coding challenge, competing in algorithmic problem solving.",
      icon: "🧑‍💻",
      category: "Competition"
    },
    {
      id: 6,
      title: "Robotics Competition Participant",
      organization: "Various",
      year: "2022-2024",
      description: "Multiple participations in national robotics competitions with autonomous robot designs.",
      icon: "🤖",
      category: "Competition"
    },
   
  ];

  const stats = [
    { number: "50+", label: "Students Trained", icon: "👨‍🎓" },
    { number: "25+", label: "Projects Completed", icon: "✅" },
    { number: "5+", label: "Events Organized", icon: "📅" },
    { number: "6+", label: "Competitions", icon: "🏆" }
  ];

  return (
    <div className="experience-page">
      {/* Hero Section */}
      <section className="experience-hero">
        <AnimatedBackground />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-tag">Career Path</span>
          <h1>Professional Experience</h1>
          <p>My journey in engineering, robotics, and technology</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Journey */}
      <section className="journey-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">💼 Professional Journey</span>
          <h2>Work Experience</h2>
          <p>Building expertise through hands-on experience</p>
        </motion.div>

        <div className="journey-timeline">
          {professionalJourney.map((job, index) => (
            <motion.div
              key={job.id}
              className="journey-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="journey-marker" style={{ background: job.color }}>
                <span>{job.icon}</span>
              </div>

              <div className="journey-content">
                <div className="journey-header">
                  <span className="journey-period">{job.period}</span>
                  <span className="journey-type" style={{ background: `${job.color}20`, color: job.color }}>
                    {job.type}
                  </span>
                </div>

                <h3>{job.role}</h3>
                <h4>
                  <span className="company-icon">🏢</span>
                  {job.company}
                </h4>
                <p className="job-location">
                  <span>📍</span>
                  {job.location}
                </p>

                <p className="job-description">{job.description}</p>

                <div className="responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h5>Skills & Technologies:</h5>
                  <div className="tech-tags">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="achievements-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">🏆 Achievements & Awards</span>
          <h2>Recognition & Accomplishments</h2>
          <p>Milestones in my professional journey</p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)' }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <span className="achievement-category">{achievement.category}</span>
              <h3>{achievement.title}</h3>
              <p className="achievement-org">{achievement.organization}</p>
              <span className="achievement-year">{achievement.year}</span>
              <p className="achievement-desc">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="experience-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Interested in Working Together?</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
            <a href="/projects" className="btn btn-secondary">View My Projects</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ExperiencePage;