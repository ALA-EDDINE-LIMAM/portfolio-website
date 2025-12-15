import React from 'react';
import ExperienceCard from './ExperienceCard';
import Timeline from './Timeline';
import experienceData from '../../data/experience';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <Timeline />
            <div className="experience-cards">
                {experienceData.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </section>
    );
};

export default Experience;