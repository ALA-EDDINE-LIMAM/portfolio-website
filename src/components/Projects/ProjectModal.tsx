import React from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    liveLink: string;
    repoLink: string;
    image: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <h3>Technologies Used:</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="modal-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;