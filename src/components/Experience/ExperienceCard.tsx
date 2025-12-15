import React from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, date, description }) => {
    return (
        <div className="experience-card">
            <h3 className="experience-title">{title}</h3>
            <h4 className="experience-company">{company}</h4>
            <p className="experience-date">{date}</p>
            <p className="experience-description">{description}</p>
        </div>
    );
};

export default ExperienceCard;