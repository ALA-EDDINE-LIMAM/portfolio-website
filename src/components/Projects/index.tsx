import React from 'react';
import projectsData from '../../data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from '../common/SectionTitle';

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <SectionTitle title="Projects" />
            <div className="projects-container">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;