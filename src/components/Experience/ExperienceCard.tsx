import React from 'react';

interface ExperienceItem {
    id: number;
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface ExperienceCardProps {
    experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className="experience-card">
            <h3 className="experience-title">{experience.jobTitle}</h3>
            <h4 className="experience-company">{experience.company}</h4>
            <p className="experience-date">{experience.startDate} - {experience.endDate}</p>
            <p className="experience-description">{experience.description}</p>
        </div>
    );
};

export default ExperienceCard;