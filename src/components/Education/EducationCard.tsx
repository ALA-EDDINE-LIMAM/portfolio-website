import React from 'react';

interface EducationCardProps {
    institution: string;
    degree: string;
    startYear: number;
    endYear: number;
    description?: string;
    fieldOfStudy?: string; // Optional
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, startYear, endYear, description }) => {
    return (
        <div className="education-card">
            <h3>{degree}</h3>
            <h4>{institution}</h4>
            <p>{startYear} - {endYear}</p>
            {description && <p>{description}</p>}
        </div>
    );
};

export default EducationCard;