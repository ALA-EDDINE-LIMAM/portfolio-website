import React from 'react';

interface ProjectItem {
    id: number | string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
    liveDemo?: string;
    category?: string;
    featured?: boolean;
    status?: string;
    year?: string;
    github?: string;
    demo?: string;
    highlights?: string[];
}

interface ProjectCardProps {
    project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                </a>
            )}
        </div>
    );
};

export default ProjectCard;