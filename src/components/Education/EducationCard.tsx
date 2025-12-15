import React from 'react';

interface EducationCardProps {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear: number;
    description?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, fieldOfStudy, startYear, endYear, description }) => {
    return (
        <div className="education-card">
            <h3>{degree} in {fieldOfStudy}</h3>
            <h4>{institution}</h4>
            <p>{startYear} - {endYear}</p>
            {description && <p>{description}</p>}
        </div>
    );
};

export default EducationCard;