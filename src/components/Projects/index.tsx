import React from 'react';
import projectsData from '../../data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from '../common/SectionTitle';

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

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <SectionTitle title="Projects" />
            <div className="projects-container">
                {projectsData.map((project: ProjectItem) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;